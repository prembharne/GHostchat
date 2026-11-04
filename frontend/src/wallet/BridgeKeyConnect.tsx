import { useState } from 'react';
import { useConnect } from 'wagmi';
import { LoaderCircle, Wallet, ArrowUpRight } from 'lucide-react';
import { Modal } from '../messenger/Modal';
import { lockEmbeddedWallet } from './embeddedWallet';
import { bridgeKeyError } from './bridgekey';
import { isEvmWallet, rememberWallet, selectedWallet } from './evmWallet';
import './wallet-choice.css';
// Compatibility component name; selection is not restricted to BridgeKey.
export function BridgeKeyConnect({ disabled = false, onConnected, compact = false }: { disabled?: boolean; onConnected?(): void; compact?: boolean }) {
  const { connectors, connectAsync } = useConnect();
  const [open, setOpen] = useState(false); const [busy, setBusy] = useState('');
  const [error, setError] = useState('');
  const wallets = connectors.filter(isEvmWallet);
  async function connect(id: string) {
    if (busy) return; setError(''); setBusy(id);
    try { const connector = selectedWallet(connectors, id); await connectAsync({ connector }); lockEmbeddedWallet(); rememberWallet(connector.id); setOpen(false); onConnected?.(); }
    catch (error) { setError(bridgeKeyError(error)); } finally { setBusy(''); }
  }
  return <>
    <button type="button" className={`ms-button ${compact ? 'ms-secondary' : 'ms-primary ms-full'}`} disabled={disabled || !!busy} onClick={() => { setError(''); setOpen(true); }}><Wallet size={17}/>{compact ? 'Choose another wallet' : 'Connect wallet'}</button>
    {open && <Modal title="Choose your wallet" eyebrow="ETHEREUM & EVM" className="gc-wallet-choice" onClose={() => { if (!busy) setOpen(false); }}>
      <p className="ms-modal-copy">Select an installed wallet to open its approval prompt.</p>
      <div className="gc-wallet-options">{wallets.map(wallet => <button type="button" key={wallet.uid} disabled={!!busy} onClick={() => { void connect(wallet.id); }}><span className="gc-wallet-mark">{wallet.name.slice(0, 1).toUpperCase()}</span><span><strong>{wallet.name}</strong><small>{busy === wallet.id ? 'Approve in your wallet…' : 'Browser extension'}</small></span>{busy === wallet.id ? <LoaderCircle className="spin" size={19}/> : <ArrowUpRight size={18}/>}</button>)}</div>
      {!wallets.length && <p className="ms-fine" role="status">No EVM wallet detected. Enable an Ethereum-compatible extension and refresh.</p>}
      {error && <p className="ms-alert" role="alert">{error}</p>}
    </Modal>}
  </>;
}
