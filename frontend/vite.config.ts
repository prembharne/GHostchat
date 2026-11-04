import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { buildPwa } from './pwa/build';

const workspaceModules = ['/src/messenger/Messenger.tsx', '/src/wallet/WalletDialog.tsx'];
const workspaceAssets = new Set<string>();

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'ghostpay-public-shell',
      apply: 'build',
      generateBundle(_options, bundle) {
        // Rollup can place both lazy views in the same output chunk.
        workspaceAssets.clear();
        for (const module of workspaceModules) {
          const chunk = Object.values(bundle).find(item => item.type === 'chunk'
            && Object.keys(item.modules).some(id => id.replaceAll('\\', '/').endsWith(module)));
          if (!chunk) throw new Error(`Missing workspace module: ${module}`);
          workspaceAssets.add(chunk.fileName);
        }
      },
      closeBundle: () => buildPwa(fileURLToPath(new URL('./dist', import.meta.url)), [...workspaceAssets]),
    },
  ],
  build: { manifest: true },
  server: { port: 5173, strictPort: true, proxy: { '/api': 'http://127.0.0.1:3001' } },
});
