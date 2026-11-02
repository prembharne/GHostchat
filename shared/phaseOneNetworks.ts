import { mainnet, sepolia, polygon, polygonAmoy, optimism, optimismSepolia } from 'viem/chains';
import { mstTestnet, mstMainnet } from './network.js';
import type { NativeNetwork } from './evm-networks.js';

// Curated launch scope. A chain definition does not assert a deployed application.
export const walletChains = [mstTestnet, mstMainnet, mainnet, sepolia, polygon, polygonAmoy, optimism, optimismSepolia] as const;
export const phaseOneNetworks: (NativeNetwork & { testnet: boolean })[] = walletChains.map(chain => ({
  id: chain.id, name: chain.name, symbol: chain.nativeCurrency.symbol,
  decimals: chain.nativeCurrency.decimals, testnet: 'testnet' in chain && chain.testnet === true,
  rpc: chain.id === 137 ? 'https://polygon.drpc.org' : chain.id === 80002 ? 'https://polygon-amoy.drpc.org' : chain.rpcUrls.default.http[0],
  explorer: chain.blockExplorers.default.url, recommended: true,
}));
export function paymentNetwork(id: number) {
  const network = phaseOneNetworks.find(item => item.id === id);
  if (!network) throw new Error('Choose a supported phase-one EVM network.');
  return network;
}
export function walletChain(id: number) {
  const chain = walletChains.find(item => item.id === id);
  if (!chain) throw new Error('Choose MST, Ethereum, Polygon or Optimism.');
  return chain;
}
export type PaymentFeature = 'direct' | 'link' | 'community' | 'p2p';
export function networkAvailability(id: number, feature: PaymentFeature) {
  const network = paymentNetwork(id);
  if (feature === 'direct') return { enabled: true, reason: 'Native transfer; no escrow deployment required.' };
  if (id === mstTestnet.id) return { enabled: true, reason: 'Existing MST Testnet flow; contract proof is checked before funding.' };
  return { enabled: false, reason: `${network.name}: ${feature === 'p2p' ? 'P2P service and contract' : 'contract'} activation requires a verified deployment and integration checks.` };
}
