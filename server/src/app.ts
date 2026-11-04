import { AccountDirectory, accountRouter, profileRouter } from './accounts.js';
import { WalletAccounts, walletAccountRouter } from './walletAccounts.js';
import { privateTradeRouter, type PrivateTradeDetails } from './privateTradeDetails.js';
import { ServiceUnavailable } from './serviceErrors.js';
import { testPaymentRouter, type TestPayments } from './testPayments.js';
import { chainlinkQuote } from '../../shared/p2pOracle.js';
import express from 'express';
import { createMarketService } from '../../shared/market.js';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { getAddress, isAddress, recoverMessageAddress, type Address, type Hex, type PublicClient } from 'viem';
import { escrowAbi } from '../../shared/abi.js';
import { claimDomain, claimTypes, requestMessage, rejectMessage } from '../../shared/protocol.js';
import { RequestStore } from './store.js';
import { chainNow } from '../../shared/clock.js';
import type { DeploymentRegistry } from './deployment.js';

export function createApp(client: PublicClient, deployment: { address: Address; chainId: number; configured?: boolean; blockNumber?: string }, origin = 'http://localhost:5173', setup?: { registry: DeploymentRegistry; bytecode: Hex; mainnet?: DeploymentRegistry }, directory = new AccountDirectory(':memory:'), testPayments?: TestPayments, walletAuth = new WalletAccounts(), privateDetails?: PrivateTradeDetails) {
  const app = express(); const store = new RequestStore(); const marketPrices = createMarketService(fetch, process.env.COINGECKO_DEMO_API_KEY);
  app.disable('x-powered-by');
  app.use(cors({ origin: origin.split(','), methods: ['GET', 'POST'] }));
  app.use('/api/p2p/test-payments', testPaymentRouter(testPayments));
  app.use('/api/account/p2p-details', rateLimit({ windowMs: 60000, limit: 30 }), express.json({ limit: '1500kb' }), privateTradeRouter(walletAuth, privateDetails));
  app.use(express.json({ limit: '12kb' }));
  app.use('/api', rateLimit({ windowMs: 60000, limit: 600, standardHeaders: 'draft-8', legacyHeaders: false }));
  app.use('/api/requests', rateLimit({ windowMs: 60000, limit: 60, skip: req => req.method === 'GET', standardHeaders: 'draft-8', legacyHeaders: false }));
  const idValid = (s: unknown): s is string => typeof s === 'string' && /^[1-9]\d{0,76}$/.test(s) && BigInt(s) < 2n ** 256n;
  const sigValid = (s: unknown): s is Hex => typeof s === 'string' && /^0x[\da-fA-F]+$/.test(s) && s.length % 2 === 0;
  async function payment(id: string) { return client.readContract({ address: deployment.address, abi: escrowAbi, functionName: 'getPayment', args: [BigInt(id)] }); }
  const fail = (message: string, status = 400): never => { throw Object.assign(new Error(message), { status }); };
  app.use('/api/google-wallet', (req, res, next) => {
    if (req.path !== '/config' && !process.env.GOOGLE_CLIENT_ID) return res.status(503).json({ error: 'Google wallet sign-in is not configured.' });
    if (!/^\/(?:config|google\/(?:challenge|login)|me|wallet(?:\/(?:challenge|complete))?)$/.test(req.path)) return res.sendStatus(404);
    next();
  }, accountRouter(directory, origin.split(',')));
  app.use('/api/account', walletAccountRouter(directory, origin.split(','), walletAuth));
  app.use('/api/profiles', profileRouter(directory));
  app.get('/api/p2p/quote', async (_req, res) => { res.setHeader('Cache-Control', 'no-store'); try { const quote = await chainlinkQuote(process.env); res.status(quote.configured ? 200 : 503).json(quote); } catch { res.status(503).json({ configured: false, reason: 'Oracle verification failed. Live quotes are unavailable.' }); } });
  app.get('/api/prices', async (_req, res) => { try { res.setHeader('Cache-Control', 'public, max-age=15'); res.json(await marketPrices()); } catch { res.status(503).json({ error: 'Live prices are temporarily unavailable.' }); } });
  app.get('/api/deployment', (_req, res) => { res.setHeader('Cache-Control', 'no-store'); res.json(setup?.registry.current || { ...deployment, configured: true }); });
  app.get('/api/mainnet-deployment', (_req, res) => { if (!setup?.mainnet) return fail('Mainnet deployment setup is unavailable.', 503); res.setHeader('Cache-Control', 'no-store'); res.json(setup.mainnet.current); });
  app.get('/api/mainnet-deployment/artifact', (_req, res) => { if (!setup?.mainnet) return fail('Mainnet deployment setup is unavailable.', 503); res.json({ bytecode: setup.bytecode, chainId: 4646 }); });
  app.post('/api/mainnet-deployment', rateLimit({ windowMs: 60000, limit: 10 }), async (req, res) => { if (!setup?.mainnet) return fail('Mainnet deployment setup is unavailable.', 503); res.json(await setup.mainnet.register(req.body?.transactionHash)); });
  app.get('/api/deployment/artifact', (_req, res) => { if (!setup) return fail('Wallet deployment is not enabled.', 404); res.json({ bytecode: setup.bytecode, chainId: deployment.chainId }); });
  app.post('/api/deployment', rateLimit({ windowMs: 60000, limit: 10 }), async (req, res) => {
    if (!setup) return fail('Wallet deployment is not enabled.', 404);
    res.json(await setup.registry.register(req.body?.transactionHash));
  });
  app.use('/api/requests', (_req, _res, next) => { if (deployment.configured === false) throw new ServiceUnavailable('escrow_not_configured'); next(); });
  app.get('/api/health', async (_req, res) => { res.json({ ok: true, ...deployment, blockNumber: String(await client.getBlockNumber()) }); });
  app.post('/api/requests', async (req, res) => {
    const { paymentId, chainId, recipient, timestamp, signature } = req.body;
    if (!idValid(paymentId) || chainId !== deployment.chainId || !isAddress(recipient || '') || !Number.isSafeInteger(timestamp) || Math.abs(Date.now() / 1000 - timestamp) > 300 || !sigValid(signature)) fail('Invalid request, network, wallet proof, or timestamp.');
    const p = await payment(paymentId); const now = chainNow(await client.getBlock());
    if (p.status !== 1 || p.expiry <= now) fail('Payment is not active.');
    const recovered = await recoverMessageAddress({ message: requestMessage(chainId, deployment.address, paymentId, recipient, timestamp), signature });
    if (recovered.toLowerCase() !== recipient.toLowerCase()) fail('The recipient must sign their own claim request.', 403);
    res.status(201).json(store.create({ paymentId, chainId, contract: deployment.address, recipient: getAddress(recipient) }));
  });
  app.get('/api/requests/payment/:paymentId', (req, res) => {
    if (!idValid(req.params.paymentId)) fail('Invalid payment ID.'); res.json(store.list(req.params.paymentId));
  });
  app.get('/api/requests/:id', (req, res) => { const r = store.records.get(req.params.id); if (!r) fail('Request not found. The relay may have restarted.', 404); res.json(r); });
  app.post('/api/requests/:id/authorize', async (req, res) => {
    const r = store.records.get(req.params.id); if (!r) return fail('Request not found.', 404);
    const { deadline, signature } = req.body;
    if (!idValid(deadline) || !sigValid(signature)) fail('Invalid authorization.');
    const p = await payment(r.paymentId); const now = chainNow(await client.getBlock());
    const canAuthorize = () => r.status === 'pending' || (r.status === 'authorized' && BigInt(r.deadline || '0') < now);
    if (!canAuthorize()) fail('Request has already been handled.', 409);
    if (p.status !== 1 || p.expiry <= now || BigInt(deadline) > p.expiry || BigInt(deadline) <= now) fail('Payment or authorization has expired.');
    const valid = await client.verifyTypedData({ address: p.sender, domain: claimDomain(deployment.chainId, deployment.address), types: claimTypes, primaryType: 'ClaimAuthorization', message: { paymentId: BigInt(r.paymentId), recipient: r.recipient, deadline: BigInt(deadline) }, signature });
    if (!valid) fail('Only the on-chain sender can authorize this recipient.', 403);
    if (!canAuthorize()) fail('Request has already been handled.', 409);
    Object.assign(r, { status: 'authorized', deadline, signature }); res.json(r);
  });
  app.post('/api/requests/:id/reject', async (req, res) => {
    const r = store.records.get(req.params.id); if (!r) return fail('Request not found.', 404);
    if (r.status !== 'pending') fail('Request has already been handled.', 409);
    const { signature } = req.body; if (!sigValid(signature)) fail('Missing sender signature.');
    const p = await payment(r.paymentId);
    const signer = await recoverMessageAddress({ message: rejectMessage(r.id, deployment.chainId, deployment.address), signature });
    if (signer.toLowerCase() !== p.sender.toLowerCase()) fail('Only the sender can reject this request.', 403);
    if (r.status !== 'pending') fail('Request has already been handled.', 409);
    r.status = 'rejected'; res.json(r);
  });
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = Number(err.status) || 400;
    res.status(status).json({ error: err instanceof ServiceUnavailable ? err.message : status >= 500 ? 'The GhostChat service is temporarily unavailable. Please try again.' : (err.shortMessage || err.message || 'Invalid request.').slice(0, 250), ...(err instanceof ServiceUnavailable ? { code: err.code } : {}) });
  });
  return app;
}
