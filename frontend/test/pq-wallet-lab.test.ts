import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createWalletLab } from '../src/pq/walletLabModel';

test('hybrid signatures authorize a simulated transfer, while missing signatures and changed amounts fail', async () => {
  const lab = createWalletLab();
  assert.equal(await lab.simulate(5, 'classical'), false);
  assert.equal(await lab.simulate(5, 'tampered'), false);
  assert.equal(lab.snapshot().balance, 100);
  assert.equal(await lab.simulate(5, 'hybrid'), true);
  assert.equal(lab.snapshot().balance, 95);
  assert.equal(await lab.checkLastAuthorization(), true);
  assert.equal(await lab.replayLastTransfer(), false);
  assert.equal(lab.snapshot().balance, 95);
});

test('rotation preserves the demo account and balance, but invalidates the previous signer', async () => {
  const lab = createWalletLab();
  const id = lab.id;
  const originalSigner = lab.snapshot().signer;
  await lab.simulate(7, 'hybrid');
  await lab.rotate();
  assert.equal(lab.id, id);
  assert.equal(lab.snapshot().balance, 93);
  assert.notEqual(lab.snapshot().signer, originalSigner);
  assert.equal(await lab.checkLastAuthorization(), false);
  assert.equal(await lab.simulate(2, 'hybrid'), true);
  assert.equal(await lab.checkLastAuthorization(), true);
});

test('rejects invalid amounts and overlapping operations', async () => {
  const lab = createWalletLab();
  for (const amount of [0, -1, 1.5, 101, NaN]) {
    await assert.rejects(lab.simulate(amount, 'hybrid'), /whole amount/);
  }
  const transfer = lab.simulate(100, 'hybrid');
  await assert.rejects(lab.rotate(), /already running/);
  assert.equal(await transfer, true);
  await assert.rejects(lab.simulate(1, 'hybrid'), /whole amount/);
});
