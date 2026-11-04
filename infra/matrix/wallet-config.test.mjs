import test from 'node:test';
import assert from 'node:assert/strict';
import { walletConfiguration } from './wallet-config.mjs';
const original = 'server_name: "matrix.example.com"\nmacaroon_secret_key: "unchanged-secret"\nweb_client_location: "http://localhost:5173/chat"\n';
const previous = 'GOOGLE_CLIENT_ID=old-public-id\nFRONTEND_ORIGIN=https://app.example.com\nPROFILE_ENCRYPTION_KEY=existing-profile-key\nTEST_PAYMENT_ATTESTOR_KEY=existing-attestor\n';
test('wallet migration preserves existing secrets and is idempotent', () => {
  const a = walletConfiguration(original, previous, 'https://app.example.com', 'matrix.example.com');
  assert.match(a.config, /macaroon_secret_key: "unchanged-secret"/); assert.match(a.config, /issuer: ghostchat-wallet/); assert.match(a.config, /audiences: \[ghostchat-matrix\]/);
  assert.match(a.env, /PROFILE_ENCRYPTION_KEY=existing-profile-key/); assert.match(a.env, /TEST_PAYMENT_ATTESTOR_KEY=existing-attestor/); assert.match(a.env, /GOOGLE_CLIENT_ID=old-public-id/); assert.doesNotMatch(a.env, /GOOGLE_CLIENT_SECRET/);
  assert.deepEqual(walletConfiguration(a.config, a.env, 'https://app.example.com', 'matrix.example.com'), a);
  assert.throws(() => walletConfiguration(a.config, previous, 'https://app.example.com', 'matrix.example.com'), /secret differs/);
});
test('wallet migration removes generated Google provider but rejects unrelated auth changes', () => {
  const config = original + 'oidc_providers:\n  - idp_id: google\n    client_secret: old-secret\n';
  assert.doesNotMatch(walletConfiguration(config, previous, 'https://app.example.com', 'matrix.example.com').config, /oidc_providers|old-secret/);
  for (const extra of ['jwt_config:\n  secret: unmanaged\n', 'oidc_providers:\n  - idp_id: unrelated\n']) assert.throws(() => walletConfiguration(original + extra, previous, 'https://app.example.com', 'matrix.example.com'));
  assert.throws(() => walletConfiguration(original, previous, 'https://other.example.com', 'matrix.example.com'));
});
