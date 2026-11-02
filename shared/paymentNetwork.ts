import { defineChain } from 'viem';
import { networkById } from './evm-networks.js';
import { phaseOneNetworks } from './phaseOneNetworks.js';
export function transferNetwork(id: number) {
  const network = phaseOneNetworks.find(n => n.id === id) || networkById(id);
  if (!network) throw new Error('Unsupported EVM payment network.');
  return { ...network, testnet: 'testnet' in network ? network.testnet === true : true };
}
export function transferChain(id: number) {
  const network = transferNetwork(id);
  return defineChain({ id, name: network.name, nativeCurrency: { name: network.symbol, symbol: network.symbol, decimals: network.decimals }, rpcUrls: { default: { http: [network.rpc] } }, blockExplorers: { default: { name: 'Explorer', url: network.explorer } }, testnet: network.testnet });
}
