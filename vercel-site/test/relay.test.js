import test from 'node:test';
import assert from 'node:assert/strict';
import { relay, MAX_BODY } from '../lib/relay.js';
const base = { method: 'GET', path: 'deployment', host: 'ghostpay.vercel.app' };
test('only fixed upstream API paths can be proxied', async () => {
  for (const path of ['https://evil.example', '../admin', '/health', 'requests/../health', ['health', 'deployment']]) {
    const response = await relay({ ...base, path }, () => { throw new Error('Must not fetch'); }); assert.equal(response.status, 404);
  }
});
test('POST verifies browser origin and enforces JSON and size bounds', async () => {
  const input = { ...base, method: 'POST', path: 'requests', origin: 'https://ghostpay.vercel.app', contentType: 'application/json', body: Buffer.from('{}') };
  assert.equal((await relay({ ...input, origin: 'https://evil.example' })).status, 403);
  assert.equal((await relay({ ...input, contentType: 'text/plain' })).status, 415);
  assert.equal((await relay({ ...input, body: Buffer.alloc(MAX_BODY + 1) })).status, 413);
});
test('signed JSON and frontend origin are preserved for the configured current backend', async () => {
  const body = Buffer.from(JSON.stringify({ signature: '0x1234', paymentId: '1' }));
  const response = await relay({ ...base, path: 'requests', method: 'POST', origin: 'https://ghostpay.vercel.app', contentType: 'application/json', body }, async (url, options) => {
    assert.equal(url, 'https://backend.example.com/api/requests');
    assert.equal(options.headers.Origin, 'https://ghostpay.vercel.app'); assert.deepEqual(options.body, body);
    return Response.json({ error: 'Invalid signature.' }, { status: 403 });
  }, 'https://backend.example.com');
  assert.equal(response.status, 403); assert.equal(JSON.parse(response.body).error, 'Invalid signature.');
});
test('non-JSON upstream responses and network failures become actionable errors', async () => {
  assert.equal((await relay(base, async () => new Response('<html>Gateway error</html>'), 'https://backend.example.com')).status, 502);
  assert.equal((await relay(base, async () => { throw new Error('offline'); }, 'https://backend.example.com')).status, 502);
});
test('unconfigured and unsafe backends fail closed without falling back to Sepolia', async () => {
  for (const configured of ['', 'http://backend.example.com', 'https://user:secret@backend.example.com', 'https://backend.example.com/path']) {
    assert.equal((await relay(base, () => { throw new Error('Must not fetch'); }, configured)).status, 503);
  }
});
test('wallet session authorization reaches only the configured account API', async () => {
  const response = await relay({ ...base, path: 'account/me', authorization: 'Bearer fixture-token' }, async (url, options) => {
    assert.equal(url, 'https://backend.example.com/api/account/me'); assert.equal(options.headers.Authorization, 'Bearer fixture-token');
    return Response.json({ username: 'demo' });
  }, 'https://backend.example.com');
  assert.equal(response.status, 200);
});

test('wallet login and Matrix ticket routes are proxied; retired Google and backup routes are blocked', async () => {
  for (const path of ['account/wallet-auth/challenge', 'account/wallet-auth/login', 'account/wallet-auth/logout', 'account/matrix-ticket']) {
    const response = await relay({ ...base, path }, async url => { assert.equal(url, `https://backend.example.com/api/${path}`); return Response.json({ ok: true }); }, 'https://backend.example.com');
    assert.equal(response.status, 200);
  }
  for (const path of ['account/google/challenge', 'account/google/login', 'account/wallet', 'account/wallet/complete']) assert.equal((await relay({ ...base, path }, () => { throw new Error('Retired route must not fetch'); }, 'https://backend.example.com')).status, 404);
});

test('Google backup routes forward their bearer credential while blocking legacy profile writes', async () => {
  for (const path of ['google-wallet/config', 'google-wallet/google/challenge', 'google-wallet/google/login', 'google-wallet/me', 'google-wallet/wallet', 'google-wallet/wallet/challenge', 'google-wallet/wallet/complete']) {
    const response = await relay({ ...base, path, authorization: 'Bearer test-token' }, async (url, options) => {
      assert.equal(url, `https://backend.example.com/api/${path}`);
      assert.equal(options.headers.Authorization, 'Bearer test-token');
      return Response.json({ ok: true });
    }, 'https://backend.example.com');
    assert.equal(response.status, 200);
  }
  for (const path of ['google-wallet/challenge', 'google-wallet/complete', 'google-wallet/matrix-ticket']) {
    assert.equal((await relay({ ...base, path }, () => { throw new Error('Unexpected upstream request'); }, 'https://backend.example.com')).status, 404);
  }
});
