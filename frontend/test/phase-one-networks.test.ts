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

test('phase one has four chains with separate mainnet and testnet identities', () => {
  assert.deepEqual(phaseOneNetworks.map(n => n.id), [91562037, 4646, 1, 11155111, 137, 80002, 10, 11155420]);
  assert.equal(phaseOneNetworks.filter(n => n.testnet).length, 4);
  assert.equal(paymentNetwork(137).symbol, 'POL');
  assert.equal(paymentNetwork(80002).symbol, 'POL');
  for (const id of [1, 10, 11155111, 11155420]) assert.equal(paymentNetwork(id).symbol, 'ETH');
  assert.equal(transferNetwork(1).testnet, false);
  assert.equal(transferNetwork(11155111).testnet, true);
  assert.throws(() => paymentNetwork(31337));
  assert.throws(() => transferNetwork(999999999));
});

test('adding a chain never activates an unverified escrow or P2P backend', () => {
  for (const n of phaseOneNetworks) {
    assert.equal(networkAvailability(n.id, 'direct').enabled, true);
    for (const feature of ['link', 'community', 'p2p'] as const)
      assert.equal(networkAvailability(n.id, feature).enabled, n.id === 91562037);
  }
  const hash = `0x${'12'.repeat(32)}`;
  for (const chainId of [1, 137, 10, 11155111, 80002, 11155420]) {
    assert.ok(directReference({ version: 3, chainId, hash, from: account, to: account }));
    if (chainId !== 80002) assert.equal(nativeReference({ version: 2, chainId, contract: account, paymentId: '1' }), undefined);
  }
});

test('wallet discovery requires explicit selection when multiple providers are installed', () => {
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

test('existing BridgeKey sessions can restore without granting a new wallet access', async () => {
  let chosen = '';
  await waitForSelectedWallet({ connectors: () => [meta, bridge], previous: () => '',
    connected: () => !!chosen, restore: async w => { chosen = w.id; }, pause: async () => {} });
  assert.equal(chosen, bridge.id);
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
