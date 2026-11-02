import { phaseOneNetworks, networkAvailability } from '../shared/phaseOneNetworks.js';

// Read-only connectivity check. A responding RPC is not a contract audit or activation.
const results = await Promise.all(phaseOneNetworks.map(async network => {
  try {
    const response = await fetch(network.rpc, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_chainId', params: [] }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json() as { result?: string; error?: { message: string } };
    if (Number(result.result) !== network.id) throw new Error(result.error?.message || 'RPC chain ID mismatch');
    return { network: network.name, chainId: network.id, rpc: 'OK',
      direct: 'Ready for wallet testing', contracts: networkAvailability(network.id, 'link').enabled ? 'Existing MST verification flow' : 'Gated' };
  } catch (error) {
    process.exitCode = 1;
    return { network: network.name, chainId: network.id, rpc: (error as Error).message, direct: 'Unavailable', contracts: 'Do not activate' };
  }
}));
console.table(results);
console.log('No transactions were signed or sent. Wallet, deployment and end-to-end checks are separate.');
