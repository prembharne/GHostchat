import test from 'node:test';
import assert from 'node:assert/strict';
import { phaseOneNetworks, networkAvailability, paymentNetwork } from '../../shared/phaseOneNetworks.ts';
import { transferNetwork } from '../../shared/paymentNetwork.ts';
import { directReference } from '../../shared/direct.ts';
import { nativeReference } from '../../shared/nativeProtocol.ts';
import { paymentWallet } from '../src/payments/native.ts';
import { isEvmWallet, selectedWallet, waitForSelectedWallet } from '../src/wallet/evmWallet.ts';

const account = '0x1111111111111111111111111111111111111111';
const bridge = { id: 'bridgekey.io', name: 'BridgeKey', type: 'injected' };
const meta = { id: 'io.metamask', name: 'MetaMask', type: 'injected' };
const rabby = { id: 'io.rabby', name: 'Rabby', type: 'injected' };

test('twelve EVM ecosystems have distinct Mainnet and Testnet identities', () => {
  assert.equal(phaseOneNetworks.length, 23);
  assert.equal(new Set(phaseOneNetworks.map(n => n.id)).size,23);
  for(const id of [91562037,4646,1,11155111,137,80002,10,11155420,42161,421614,8453,84532,56,97,43114,43113,42220,11142220,100,10200,59144,59141,534352]) assert.ok(phaseOneNetworks.some(n=>n.id===id));
  assert.equal(phaseOneNetworks.filter(n => n.testnet).length, 11);
  assert.equal(paymentNetwork(137).symbol, 'POL');
  assert.equal(paymentNetwork(80002).symbol, 'POL');
  for (const id of [1, 10, 11155111, 11155420]) assert.equal(paymentNetwork(id).symbol, 'ETH');
  assert.equal(transferNetwork(1).testnet, false);
  assert.equal(transferNetwork(11155111).testnet, true);
  assert.throws(() => paymentNetwork(31337));
  assert.throws(() => transferNetwork(999999999));
  assert.throws(() => transferNetwork(534351), /retired/);
});

test('testnet setup is available while Mainnet contracts and other-chain P2P remain gated', () => {
  for (const n of phaseOneNetworks) {
    assert.equal(networkAvailability(n.id, 'direct').enabled, true);
    for (const feature of ['link', 'community', 'p2p'] as const)
      assert.equal(networkAvailability(n.id, feature).enabled, feature === 'p2p' ? n.id === 91562037 : n.testnet);
  }
  const hash = `0x${'12'.repeat(32)}`;
  for (const chainId of [1, 137, 10, 11155111, 80002, 11155420]) {
    assert.ok(directReference({ version: 3, chainId, hash, from: account, to: account }));
    assert.equal(!!nativeReference({ version: 2, chainId, contract: account, paymentId: '1' }), paymentNetwork(chainId).testnet);
  }
});

test('wallet discovery requires explicit selection when multiple providers are installed', () => {
  assert.ok(isEvmWallet({id:'app.phantom',name:'Phantom',type:'injected'}));
  assert.ok(isEvmWallet(bridge)); assert.ok(isEvmWallet(meta)); assert.ok(isEvmWallet(rabby));
  assert.equal(isEvmWallet({ id: 'ghostpay-local', name: 'BridgeKey', type: 'injected' }), false);
  assert.equal(isEvmWallet({ id: 'wc', name: 'BridgeKey', type: 'walletConnect' }), false);
  assert.throws(() => selectedWallet([bridge, meta, rabby], ''), /Choose your wallet/);
  assert.equal(selectedWallet([bridge, meta, rabby], meta.id), meta);
  assert.throws(() => selectedWallet([bridge], meta.id));
  assert.throws(() => selectedWallet([meta, { ...meta }], meta.id));
});

test('reload waits for the selected wallet instead of replacing it with another provider', async () => {
  let tick = 0; let connected = false; const chosen: string[] = [];
  await waitForSelectedWallet({ connectors: () => tick < 2 ? [bridge, rabby] : [bridge, meta, rabby],
    previous: () => meta.id, connected: () => connected,
    restore: async w => { chosen.push(w.id); connected = true; },
    pause: async () => { tick++; }, attempts: 4 });
  assert.deepEqual(chosen, [meta.id]);
  await waitForSelectedWallet({ connectors: () => [bridge, rabby], previous: () => meta.id,
    connected: () => false, restore: async w => { chosen.push(w.id); }, pause: async () => {}, attempts: 2 });
  assert.deepEqual(chosen, [meta.id]);
});

test('a missing previous choice never auto-opens BridgeKey on a fresh visit', async () => {
  let chosen = '';
  await waitForSelectedWallet({ connectors: () => [meta, bridge], previous: () => '',
    connected: () => !!chosen, restore: async w => { chosen = w.id; }, pause: async () => {} });
  assert.equal(chosen, '');
});

test('native transfer preparation checks the selected chain and account without signing', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = (async (_url, init) => {
    const body = JSON.parse(String(init?.body));
    return Response.json({ jsonrpc: '2.0', id: body.id, result: '0x1' });
  }) as typeof fetch;
  try {
    await assert.rejects(paymentWallet(10, { request: async () => { throw new Error('Provider must not be called'); } } as never, account), /different chain/);
    let current = '0x89'; const methods: string[] = [];
    const provider = { request: async ({ method }: { method: string }) => {
      methods.push(method);
      if (method === 'eth_chainId') return current;
      if (method === 'wallet_switchEthereumChain') { current = '0x1'; return null; }
      if (method === 'eth_accounts') return [account];
      throw new Error('Unexpected signing request');
    } };
    const client = await paymentWallet(1, provider as never, account);
    assert.equal(client.chain.id, 1);
    assert.ok(methods.includes('wallet_switchEthereumChain'));
    assert.ok(methods.every(m => !/sign|send/i.test(m)));
    await assert.rejects(paymentWallet(1, { request: async ({ method }: { method: string }) =>
      method === 'eth_chainId' ? '0x1' : [] } as never, account), /wallet changed/);
  } finally { globalThis.fetch = original; }
});
