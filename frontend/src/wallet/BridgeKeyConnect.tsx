import { useState } from 'react';
import { useConnect } from 'wagmi';
import { LoaderCircle, Wallet } from 'lucide-react';
import { bridgeKeyError } from './bridgekey';
import { isEvmWallet, rememberWallet, selectedWallet } from './evmWallet';

export function BridgeKeyConnect({ disabled = false, onConnected }: { disabled?: boolean; onConnected?(): void }) {
  const { connectors, connectAsync } = useConnect();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [choice, setChoice] = useState('');
  const wallets = connectors.filter(isEvmWallet);
  async function connect() {
    setError(''); setBusy(true);
    try { const connector = selectedWallet(connectors, choice); await connectAsync({ connector }); rememberWallet(connector.id); onConnected?.(); }
    catch (error) { setError(bridgeKeyError(error)); }
    finally { setBusy(false); }
  }
  return <>
    <label htmlFor="evm-wallet-choice">Your wallet</label><select id="evm-wallet-choice" className="ms-input" value={choice} disabled={disabled || busy} onChange={e => setChoice(e.target.value)}><option value="">Choose an installed wallet</option>{wallets.map(wallet => <option key={wallet.uid} value={wallet.id}>{wallet.name}</option>)}</select>
    <button className="ms-button ms-primary ms-full" disabled={disabled || busy || !wallets.length} onClick={() => { void connect(); }}>{busy ? <LoaderCircle className="spin" size={17}/> : <Wallet size={17}/>}Connect wallet</button>
    <p className="ms-fine">Use BridgeKey, MetaMask, Rabby or another discovered EVM browser wallet. Install and unlock your wallet if it is not listed. Review the provider and permissions before approval.</p>
    {error && <p className="ms-alert" role="alert">{error}</p>}
  </>;
}
