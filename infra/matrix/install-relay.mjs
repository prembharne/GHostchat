import { readFile, writeFile, access, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { walletConfiguration } from './wallet-config.mjs';
const args = process.argv.slice(2);
const get = flag => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : undefined; };
const bundle = resolve(get('--bundle') || '');
const app = new URL(get('--app') || '');
if (process.platform === 'win32' || process.getuid?.() !== 0) throw new Error('Run this installer with sudo on the EC2 Linux host.');
if (!get('--bundle') || app.protocol !== 'https:' || app.pathname !== '/' || app.username || app.password || app.search || app.hash) throw new Error('Provide --bundle and an HTTPS --app origin. Google wallet login uses the public GOOGLE_CLIENT_ID in relay.env.');
const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
if (repo.includes('\n') || repo.includes('\r')) throw new Error('Invalid repository path.');
await access(resolve(repo, 'server/runtime/relay.mjs'));
for (const file of ['compose.yaml', 'Caddyfile', '.env', 'generated/homeserver.yaml']) await access(resolve(bundle, file));
const compose = await readFile(resolve(bundle, 'compose.yaml'), 'utf8');
if (!/^name: ghostpay-matrix\s*$/m.test(compose)) throw new Error('This installer supports the existing GhostPay Matrix compose project only.');
const envPath = resolve(bundle, '.env'); let env = await readFile(envPath, 'utf8');
const composeFiles = `${resolve(bundle, 'compose.yaml')}:${resolve(bundle, 'relay.compose.yaml')}`;
const existingCompose = env.match(/^COMPOSE_FILE=(.*)$/m)?.[1].trim();
if (existingCompose && existingCompose !== 'compose.yaml:relay.compose.yaml' && existingCompose !== composeFiles) throw new Error('An unrelated Compose override already exists; review it before installing.');
const privatePath = resolve(bundle, 'relay.env');
let previous = '';
try {
  await access(privatePath);
  previous = await readFile(privatePath, 'utf8');
  if (((await stat(privatePath)).mode & 0o077) !== 0) throw new Error('relay.env must have private permissions (chmod 600).');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
const configPath = resolve(bundle, 'generated/homeserver.yaml');
const oldConfig = await readFile(configPath, 'utf8');
const settings = walletConfiguration(oldConfig, previous, app.origin, env.match(/^MATRIX_SERVER_NAME=(.+)$/m)?.[1].trim() || '');
try { await writeFile(resolve(bundle, 'generated/homeserver.before-wallet.yaml'), oldConfig, { mode: 0o600, flag: 'wx' }); } catch (error) { if (error.code !== 'EEXIST') throw error; }
await writeFile(privatePath, settings.env, { mode: 0o600 });
// Overwrite the existing inode to retain Synapse's UID and mode, including its bind mount.
await writeFile(configPath, settings.config);
const overlay = `services:
  relay-permissions:
    image: node:24-bookworm-slim
    user: '0:0'
    entrypoint: [sh, -c]
    command: ['chown 1000:1000 /data && chmod 700 /data']
    network_mode: none
    volumes:
      - relay_data:/data
  ghostchat-api:
    image: node:24-bookworm-slim
    user: '1000:1000'
    working_dir: /opt/ghostchat/server
    command: [node, runtime/relay.mjs]
    restart: unless-stopped
    init: true
    read_only: true
    security_opt: [no-new-privileges:true]
    cap_drop: [ALL]
    env_file: [./relay.env]
    environment:
      NODE_ENV: production
      GHOSTCHAT_SKIP_DOTENV: '1'
      GHOSTCHAT_HOST: 0.0.0.0
      GHOSTCHAT_DATA_DIR: /var/lib/ghostchat
      GHOSTCHAT_DEPLOYMENTS_DIR: /var/lib/ghostchat/deployments
    volumes:
      - ${JSON.stringify(repo + ':/opt/ghostchat:ro')}
      - relay_data:/var/lib/ghostchat
    tmpfs: [/tmp]
    depends_on:
      relay-permissions:
        condition: service_completed_successfully
    healthcheck:
      test: [CMD, node, -e, "fetch('http://127.0.0.1:3001/api/account/config').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]
      interval: 15s
      timeout: 8s
      retries: 10
      start_period: 30s
    networks: [matrix]
volumes:
  relay_data:
`;
await writeFile(resolve(bundle, 'relay.compose.yaml'), overlay, { mode: 0o600 });
let proxy = await readFile(resolve(bundle, 'Caddyfile'), 'utf8');
if (!proxy.includes('reverse_proxy ghostchat-api:3001')) {
  const anchor = '  @matrix_api path';
  if (!proxy.includes(anchor)) throw new Error('Expected proxy configuration was not found.');
  await writeFile(resolve(bundle, 'Caddyfile.before-relay'), proxy, { mode: 0o600, flag: 'wx' });
  proxy = proxy.replace(anchor, '  # GhostChat account and payment relay\n  handle /api/* {\n    reverse_proxy ghostchat-api:3001\n  }\n' + anchor);
  await writeFile(resolve(bundle, 'Caddyfile'), proxy);
}
env = env.replace(/^COMPOSE_FILE=.*\r?\n?/m, '');
await writeFile(envPath, env.trimEnd() + `\nCOMPOSE_FILE=${composeFiles}\n`, { mode: 0o600 });
console.log('Relay configuration prepared. Existing Matrix server secrets and data were not regenerated.');
console.log('Private relay settings are in relay.env. Back up this file and the relay_data volume.');
console.log(`Run: sudo docker compose --project-directory ${bundle} config --quiet`);
console.log(`Run: sudo docker compose --project-directory ${bundle} up -d --wait --force-recreate ghostchat-api`);
console.log(`Then: sudo docker compose --project-directory ${bundle} restart synapse`);
console.log(`Then: sudo docker compose --project-directory ${bundle} exec -T caddy caddy reload --config /etc/caddy/Caddyfile`);
console.log('BridgeKey login and wallet-linked Matrix account creation can be tested after Vercel is connected. Google login has been removed.');
