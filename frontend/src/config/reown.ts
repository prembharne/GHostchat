// Compatibility import path for discovered EVM browser wallets.
import { embeddedWalletConnector } from '../wallet/embeddedConnector';
import { createConfig, http } from 'wagmi';
import { connect, getAccount, reconnect } from '@wagmi/core';
import { walletChains, phaseOneNetworks } from '../../../shared/phaseOneNetworks';
import { isSupportedWallet, rememberWallet, savedWalletId, selectedWallet, waitForSelectedWallet } from '../wallet/evmWallet';
export const walletConfig = createConfig({
  ssr: true,
  chains: walletChains, multiInjectedProviderDiscovery: true,
  connectors: [embeddedWalletConnector()],
  transports: Object.fromEntries(phaseOneNetworks.map(network => [network.id, http(network.rpc, { timeout: 20000, retryCount: 1 })])) as Record<(typeof walletChains)[number]['id'], ReturnType<typeof http>>,
});
let restoring = true;
let restorePromise: Promise<void> | undefined;
const restorationListeners = new Set<() => void>();
export const walletRestoring = () => restoring;
export const subscribeWalletRestoration = (fn: () => void) => { restorationListeners.add(fn); return () => { restorationListeners.delete(fn); }; };
export function restoreWalletConnection() {
  return restorePromise ||= waitForSelectedWallet({
    connectors: () => walletConfig.connectors,
    connected: () => { const account = getAccount(walletConfig); return account.isConnected && !!account.connector && isSupportedWallet(account.connector); },
    previous: savedWalletId,
    restore: connector => reconnect(walletConfig, { connectors: [connector] }),
  }).finally(() => { restoring = false; restorationListeners.forEach(fn => fn()); });
}
export async function openWalletAccount(_view?: 'Connect' | 'Account') {
  const current = getAccount(walletConfig);
  if (current.isConnected && current.connector && isSupportedWallet(current.connector)) return;
  const connector = selectedWallet(walletConfig.connectors);
  await connect(walletConfig, { connector }); rememberWallet(connector.id);
}
