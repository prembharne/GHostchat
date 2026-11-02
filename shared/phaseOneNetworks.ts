import { mainnet, sepolia, polygon, polygonAmoy, optimism, optimismSepolia, arbitrum, arbitrumSepolia, base, baseSepolia, bsc, bscTestnet, avalanche, avalancheFuji, celo, celoSepolia, gnosis, gnosisChiado, linea, lineaSepolia, scroll } from 'viem/chains';
import { mstTestnet, mstMainnet } from './network.js';
import type { NativeNetwork } from './evm-networks.js';

// Curated launch scope. A chain definition does not assert a deployed application.
export const walletChains = [mstTestnet, mstMainnet, mainnet, sepolia, polygon, polygonAmoy, optimism, optimismSepolia, arbitrum, arbitrumSepolia, base, baseSepolia, bsc, bscTestnet, avalanche, avalancheFuji, celo, celoSepolia, gnosis, gnosisChiado, linea, lineaSepolia, scroll] as const;
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
  if (!chain) throw new Error('Choose one of the supported EVM networks.');
  return chain;
}
export type PaymentFeature = 'direct' | 'link' | 'community' | 'p2p';
export function networkAvailability(id: number, feature: PaymentFeature) {
  const network = paymentNetwork(id);
  if (feature === 'direct') return { enabled: true, reason: 'Native transfer; no escrow deployment required.' };
  if (feature !== 'p2p' && network.testnet) return { enabled: true, reason: 'Testnet setup available; exact contract deployment proof is required before funding.' };
  if (feature === 'p2p' && id === mstTestnet.id) return { enabled: true, reason: 'Existing MST Testnet P2P flow.' };
  return { enabled: false, reason: `${network.name}: ${feature === 'p2p' ? 'P2P service and contract' : 'contract'} activation requires a verified deployment and integration checks.` };
}
