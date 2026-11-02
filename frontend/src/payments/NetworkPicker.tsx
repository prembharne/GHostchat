import { useState } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';
import type { NativeNetwork } from '../../../shared/evm-networks';
import { phaseOneNetworks, networkAvailability, type PaymentFeature } from '../../../shared/phaseOneNetworks';
import { transferNetwork } from '../../../shared/paymentNetwork';
import { Modal } from '../messenger/Modal';
export function NetworkPicker({ network, onChange, disabled, feature = 'link' }: { network: NativeNetwork; onChange(network: NativeNetwork): void; disabled: boolean; feature?: PaymentFeature }) {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState('');
  const matches = phaseOneNetworks.filter(item => `${item.name} ${item.symbol} ${item.id}`.toLowerCase().includes(query.toLowerCase()));
  const current = transferNetwork(network.id);
  return <>
    <label>Native coin & network</label><button type="button" className="gp-network-picker" onClick={() => setOpen(true)} disabled={disabled}><span className="gp-coin-mark">{network.symbol.replace(/^t/, '').slice(0, 1)}</span><span><strong>{network.symbol}</strong><small>{network.name}</small></span><span className="gp-testnet-tag">{current.testnet ? 'TESTNET' : 'MAINNET'}</span><ChevronDown size={16}/></button>
    {open && <Modal title="Choose your network" eyebrow="EVM NATIVE COINS" onClose={() => setOpen(false)}>
      <p className="ms-modal-copy">Funds stay on the selected network. This is not a bridge. Mainnet transfers spend real coins and gas.</p>
      <div className="gp-network-search"><Search size={16}/><input autoFocus aria-label="Search EVM networks" placeholder="Search coin, network, or chain ID" value={query} onChange={e => setQuery(e.target.value)}/></div>
      <div className="gp-network-list">{matches.map(item => { const availability = networkAvailability(item.id, feature); return <button type="button" key={item.id} disabled={!availability.enabled} title={availability.reason} onClick={() => { onChange(item); setOpen(false); }}><span className="gp-coin-mark">{item.symbol.slice(0, 1)}</span><span><strong>{item.name}</strong><small>{item.symbol} · {item.testnet ? 'Testnet' : 'Mainnet'} · Chain {item.id}</small>{!availability.enabled && <small>Awaiting verified deployment and activation</small>}</span>{item.id === network.id && <Check size={16}/>}</button>; })}{!matches.length && <p className="ms-fine">No matching network.</p>}</div>
      <p className="ms-fine">Testnet links and community funds require a verified contract before funding. Mainnet contract funding is disabled. P2P currently uses MST Testnet.</p>
    </Modal>}
  </>;
}
