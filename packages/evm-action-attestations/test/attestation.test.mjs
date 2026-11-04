import { test } from 'node:test';
import assert from 'node:assert/strict';
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
import { attest, verifyAttestation, generatePqKeyPair } from '../src/index.ts';

const evm = privateKeyToAccount(generatePrivateKey());
const pq = generatePqKeyPair();
const other = generatePqKeyPair();
const trusted = { evmSigner: evm.address, pqPublicKey: pq.publicKey };
const hash = n => '0x' + n.repeat(32);
const action = {
  sourceChainId: 11155111,
  sourceTransaction: hash('11'),
  destinationChainId: 91562037,
  audience: hash('22'),
  actionType: hash('33'),
  recipient: '0x1111111111111111111111111111111111111111',
  payloadHash: hash('44'),
  nonce: hash('55'),
  expiresAt: 2000,
};
const envelope = await attest(action, data => evm.signTypedData(data), pq.secretKey);

test('verifies both signatures against independently selected keys and action', async () => {
  assert.equal(await verifyAttestation(envelope, action, trusted, 1999), true);
});

test('rejects a valid envelope for a different network, audience, recipient, nonce or payload', async () => {
  for (const change of [
    { sourceChainId: 1 }, { destinationChainId: 4646 }, { audience: hash('66') },
    { recipient: '0x2222222222222222222222222222222222222222' },
    { payloadHash: hash('77') }, { nonce: hash('88') }, { actionType: hash('99') },
  ]) {
    const modified = { ...action, ...change };
    assert.equal(await verifyAttestation(envelope, modified, trusted, 1999), false);
    assert.equal(await verifyAttestation({ ...envelope, action: modified }, modified, trusted, 1999), false);
  }
});

test('rejects expired, malformed, or classical-only envelopes', async () => {
  assert.equal(await verifyAttestation(envelope, action, trusted, 2000), false);
  assert.equal(await verifyAttestation({ ...envelope, pqSignature: new Uint8Array() }, action, trusted, 1999), false);
  assert.equal(await verifyAttestation({ ...envelope, evmSignature: '0x' }, action, trusted, 1999), false);
  assert.equal(await verifyAttestation(null, action, trusted, 1999), false);
});

test('rejects the wrong PQ key and wrong EVM signer independently', async () => {
  assert.equal(await verifyAttestation(envelope, action, { ...trusted, pqPublicKey: other.publicKey }, 1999), false);
  assert.equal(await verifyAttestation(envelope, action, { ...trusted, evmSigner: action.recipient }, 1999), false);
});

test('rejects malformed input before calling the wallet', async () => {
  await assert.rejects(attest({ ...action, nonce: hash('00') }, () => assert.fail('Unexpected signature request'), pq.secretKey), TypeError);
});

test('binds the source transaction and expiration, including when the consumer expects the modified data', async () => {
  for (const modification of [{ sourceTransaction: hash('aa') }, { expiresAt: 2001 }]) {
    const expected = { ...action, ...modification };
    assert.equal(await verifyAttestation({ ...envelope, action: expected }, expected, trusted, 1999), false);
  }
});

test('rejects signatures copied from another valid envelope', async () => {
  const second = await attest({ ...action, nonce: hash('ab') }, data => evm.signTypedData(data), pq.secretKey);
  assert.equal(await verifyAttestation({ ...envelope, pqSignature: second.pqSignature }, action, trusted, 1999), false);
  assert.equal(await verifyAttestation({ ...envelope, evmSignature: second.evmSignature }, action, trusted, 1999), false);
});

test('rejects a bit flip, truncated signature, and malformed key', async () => {
  const tampered = envelope.pqSignature.slice();
  tampered[0] ^= 1;
  for (const pqSignature of [tampered, envelope.pqSignature.slice(0, -1), new Uint8Array(10000)]) {
    assert.equal(await verifyAttestation({ ...envelope, pqSignature }, action, trusted, 1999), false);
  }
  assert.equal(await verifyAttestation(envelope, action, { ...trusted, pqPublicKey: pq.publicKey.slice(1) }, 1999), false);
});

test('takes a stable snapshot before awaiting the signing callback', async () => {
  const mutable = { ...action };
  const signed = await attest(mutable, async data => {
    mutable.recipient = '0x2222222222222222222222222222222222222222';
    mutable.nonce = hash('ee');
    return evm.signTypedData(data);
  }, pq.secretKey);
  assert.equal(await verifyAttestation(signed, action, trusted, 1999), true);
  assert.equal(await verifyAttestation(signed, mutable, trusted, 1999), false);
});

test('rejects invalid chains, malformed recipient, invalid digest and invalid clock', async () => {
  for (const modification of [
    { sourceChainId: 0 }, { destinationChainId: 1.2 },
    { destinationChainId: Number.MAX_SAFE_INTEGER + 1 },
    { recipient: '0x0000000000000000000000000000000000000000' },
    { recipient: '0x1234' }, { payloadHash: '0x12' },
  ]) {
    await assert.rejects(attest({ ...action, ...modification }, () => assert.fail('Unexpected wallet prompt'), pq.secretKey), TypeError);
  }
  for (const now of [0, -1, Infinity, NaN, 1.2]) {
    assert.equal(await verifyAttestation(envelope, action, trusted, now), false);
  }
});

test('verification is repeatable and must be paired with application-level replay protection', async () => {
  assert.deepEqual(await Promise.all(Array.from({ length: 8 }, () => verifyAttestation(envelope, action, trusted, 1999))), Array(8).fill(true));
});
