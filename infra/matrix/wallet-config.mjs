import { randomBytes } from 'node:crypto';

// Narrow migration of this repository's generated YAML. Unknown auth blocks fail closed.
export function walletConfiguration(config, previous, app, server) {
  if (!/^[a-z0-9.-]+$/.test(server) || !server.includes('.')) throw new Error('Invalid existing MATRIX_SERVER_NAME.');
  const managed = /\n# BEGIN GHOSTCHAT WALLET JWT\n[\s\S]*?\n# END GHOSTCHAT WALLET JWT\n?/;
  const withoutManaged = config.replace(managed, '\n');
  if (/^jwt_config:/m.test(withoutManaged)) throw new Error('An unmanaged JWT configuration exists. Review it before migrating.');
  // Google OIDC, if enabled using configure.mjs, is the final generated section.
  let base = withoutManaged;
  if (/^oidc_providers:/m.test(base)) {
    const block = base.slice(base.indexOf('oidc_providers:'));
    if (!/^oidc_providers:\r?\n  - idp_id: google\r?\n/.test(block) || /^\S/m.test(block.slice('oidc_providers:'.length)) || /\n  - idp_id: (?!google\b)/.test(block)) throw new Error('Unmanaged identity providers exist. Review them before migrating.');
    base = base.slice(0, base.indexOf('oidc_providers:'));
  }
  const entries = Object.fromEntries(previous.split(/\r?\n/).filter(line => line && !line.startsWith('#')).map(line => { const i = line.indexOf('='); if (i < 1) throw new Error('Malformed relay.env.'); return [line.slice(0, i), line.slice(i + 1)]; }));
  if (entries.FRONTEND_ORIGIN && entries.FRONTEND_ORIGIN !== app) throw new Error('Existing frontend origin differs. Review it before migrating.');
  delete entries.GOOGLE_CLIENT_SECRET;
  entries.FRONTEND_ORIGIN = app;
  entries.PROFILE_ENCRYPTION_KEY ||= randomBytes(32).toString('hex');
  entries.TEST_PAYMENT_ATTESTOR_KEY ||= `0x${randomBytes(32).toString('hex')}`;
  entries.MATRIX_JWT_SECRET ||= randomBytes(48).toString('hex');
  if (!/^[a-f0-9]{64,}$/i.test(entries.MATRIX_JWT_SECRET)) throw new Error('MATRIX_JWT_SECRET must be a private random hex key of at least 64 characters.');
  if (/^jwt_config:/m.test(config) && !config.includes(`secret: ${JSON.stringify(entries.MATRIX_JWT_SECRET)}`)) throw new Error('Existing Matrix JWT secret differs. Restore the original shared secret first.');
  entries.MATRIX_HOMESERVER = `https://${server}`;
  base = base.replace(/^web_client_location:.*$/m, `web_client_location: ${JSON.stringify(app + '/chat')}`);
  base = base.replace(/^(sso:\r?\n  client_whitelist:\r?\n    - ).*$/m, `$1${JSON.stringify(app + '/')}`);
  const yaml = `${base.trimEnd()}\n\n# BEGIN GHOSTCHAT WALLET JWT\njwt_config:\n  enabled: true\n  secret: ${JSON.stringify(entries.MATRIX_JWT_SECRET)}\n  algorithm: HS256\n  subject_claim: sub\n  issuer: ghostchat-wallet\n  audiences: [ghostchat-matrix]\n# END GHOSTCHAT WALLET JWT\n`;
  return { config: yaml, env: Object.entries(entries).map(([key, value]) => `${key}=${value}`).join('\n') + '\n' };
}
