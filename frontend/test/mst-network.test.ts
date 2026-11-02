import test from 'node:test';
import assert from 'node:assert/strict';
import { privateKeyToAccount } from 'viem/accounts';
import { verifyTypedData } from 'viem';
import { mstTestnet, MST_CHAIN_ID, MST_RPC_URL, MST_EXPLORER } from '../../shared/network.ts';
import { evmTestnets } from '../../shared/evm-networks.ts';
import { nativeReference, requireTestnet, nativeDomain, nativeClaimTypes } from '../../shared/nativeProtocol.ts';
import { parsePayment } from '../src/messenger/model.ts';
import { marketSymbol } from '../src/payments/useMarket.ts';
import { ghostWallet } from '../src/wallet/connector.ts';
import { P2P_CHAIN_ID, settlementDomain } from '../../shared/p2p.ts';

const address = '0x1111111111111111111111111111111111111111';
test('MST is the default testnet and Mainnet IDs cannot create escrow payment references', () => {
  assert.equal(MST_CHAIN_ID, 91562037);
  assert.equal(evmTestnets[0].id, MST_CHAIN_ID);
  assert.equal(mstTestnet.nativeCurrency.symbol, 'tMSTC');
  assert.equal(mstTestnet.nativeCurrency.decimals, 18);
  assert.equal(requireTestnet(MST_CHAIN_ID).rpc, MST_RPC_URL);
  assert.equal(requireTestnet(MST_CHAIN_ID).explorer, MST_EXPLORER);
  assert.ok(evmTestnets.every(network => !/sepolia/i.test(network.name)));
  for (const chainId of [4646, 1]) {
    assert.throws(() => requireTestnet(chainId));
    assert.equal(nativeReference({ version: 2, chainId, contract: address, paymentId: '1' }), undefined);
    assert.equal(parsePayment({ version: 1, chainId, contract: address, paymentId: '1' }), undefined);
  }
});

test('the device-wallet provider advertises MST consistently and refuses switching to Sepolia', async () => {
  const factory = ghostWallet();
  const connector = factory({ emitter: { emit() {} } } as never);
  assert.equal(await connector.getChainId(), MST_CHAIN_ID);
  const provider = await connector.getProvider() as { request(params: { method: string }): Promise<unknown> };
  assert.equal(Number(await provider.request({ method: 'eth_chainId' })), MST_CHAIN_ID);
  await assert.rejects(connector.switchChain!({ chainId: 11155111 }), /MST Testnet/);
});

test('MST approvals cannot be replayed with a Sepolia signing domain', async () => {
  const account = privateKeyToAccount(`0x${'34'.repeat(32)}`);
  const domain = nativeDomain({ version: 2, chainId: MST_CHAIN_ID, contract: address, paymentId: '1' });
  const parameters = { domain, types: nativeClaimTypes, primaryType: 'ClaimAuthorization' as const, message: { paymentId: 1n, recipient: address, deadline: 2000000000n } };
  const signature = await account.signTypedData(parameters);
  assert.equal(await verifyTypedData({ ...parameters, signature, address: account.address }), true);
  assert.equal(await verifyTypedData({ ...parameters, domain: { ...domain, chainId: 11155111 }, signature, address: account.address }), false);
});

test('MST has no fabricated ETH price and the P2P sandbox rejects Sepolia signatures', () => {
  assert.equal(marketSymbol('tMSTC'), undefined);
  assert.equal(P2P_CHAIN_ID, MST_CHAIN_ID);
  assert.equal(settlementDomain(address).chainId, MST_CHAIN_ID);
  assert.throws(() => settlementDomain(address, 11155111));
  assert.throws(() => settlementDomain(address, 4646));
});
