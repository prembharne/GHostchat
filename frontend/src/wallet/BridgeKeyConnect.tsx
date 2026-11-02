import { useState } from 'react';
import { useConnect } from 'wagmi';
import { LoaderCircle, Wallet, Search, ArrowUpRight } from 'lucide-react';
import { Modal } from '../messenger/Modal';
import { bridgeKeyError } from './bridgekey';
import { isEvmWallet, rememberWallet, selectedWallet } from './evmWallet';
import { phaseOneNetworks } from '../../../shared/phaseOneNetworks';
import './wallet-choice.css';
// Compatibility component name; selection is not restricted to BridgeKey.
export function BridgeKeyConnect({ disabled = false, onConnected, compact = false }: { disabled?: boolean; onConnected?(): void; compact?: boolean }) {
  const { connectors, connectAsync } = useConnect();
  const [open, setOpen] = useState(false); const [busy, setBusy] = useState('');
  const [error, setError] = useState(''); const [search, setSearch] = useState('');
  const wallets = connectors.filter(isEvmWallet).filter(w => w.name.toLowerCase().includes(search.toLowerCase()));
  async function connect(id: string) {
    if (busy) return; setError(''); setBusy(id);
    try { const connector = selectedWallet(connectors, id); await connectAsync({ connector }); rememberWallet(connector.id); setOpen(false); onConnected?.(); }
    catch (error) { setError(bridgeKeyError(error)); } finally { setBusy(''); }
  }
  return <>
    <button type="button" className={`ms-button ${compact ? 'ms-secondary' : 'ms-primary ms-full'}`} disabled={disabled || !!busy} onClick={() => { setError(''); setOpen(true); }}><Wallet size={17}/>{compact ? 'Choose another wallet' : 'Connect wallet'}</button>
    {!compact && <p className="ms-fine">Choose MetaMask, BridgeKey, Phantom, Rabby or another installed EVM wallet.</p>}
    {open && <Modal title="Choose your wallet" eyebrow="ETHEREUM & EVM" className="gc-wallet-choice" onClose={() => { if (!busy) setOpen(false); }}>
      <p className="ms-modal-copy">Select the wallet you want to use. Only that extension will receive a connection request.</p>
      <label className="gc-wallet-search"><Search size={17}/><input aria-label="Find an installed wallet" placeholder="Find your wallet" value={search} disabled={!!busy} onChange={e => setSearch(e.target.value)}/></label>
      <div className="gc-wallet-options">{wallets.map(wallet => <button type="button" key={wallet.uid} disabled={!!busy} onClick={() => { void connect(wallet.id); }}><span className="gc-wallet-mark">{wallet.name.slice(0, 1).toUpperCase()}</span><span><strong>{wallet.name}</strong><small>{busy === wallet.id ? 'Approve in your wallet…' : 'Detected in this browser'}</small></span>{busy === wallet.id ? <LoaderCircle className="spin" size={19}/> : <ArrowUpRight size={18}/>}</button>)}</div>
      {!wallets.length && <p className="ms-fine" role="status">No matching EVM wallet detected. Install or enable your extension and its Ethereum connection, then refresh this page.</p>}
      {error && <p className="ms-alert" role="alert">{error}</p>}
      <p className="ms-fine">{phaseOneNetworks.length} Mainnet and Testnet networks configured. Your wallet must support the selected network. Phantom uses its Ethereum provider; this does not connect a Solana account.</p>
    </Modal>}
  </>;
}
