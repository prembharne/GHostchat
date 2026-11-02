import { lazy, Suspense, useEffect, useId, useRef } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowDownUp, History, Plus, ShieldCheck, X } from 'lucide-react';
import { PaymentComposer } from './Payments';
import { workspacePanel } from './workspace';
import { PaymentActivity } from '../payments/PaymentActivity';

const TradePage = lazy(() => import('../p2p/TradePage'));
const Dashboard = lazy(() => import('../pages/Dashboard').then(module => ({ default: module.Dashboard })));
const Setup = lazy(() => import('../pages/Setup').then(module => ({ default: module.Setup })));
const PaymentPage = lazy(() => import('../pages/PaymentPage').then(module => ({ default: module.PaymentPage })));
const NativePaymentPage = lazy(() => import('../payments/NativePaymentPage'));
const CampaignPage = lazy(() => import('../payments/CampaignPage'));

export function WorkspaceTools({ onClose, onLock, locked }: { onClose(): void; onLock(locked: boolean): void; locked: boolean }) {
  const { pathname } = useLocation();
  const panel = workspacePanel(pathname);
  const heading = useRef<HTMLHeadingElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const open = !!panel;
  useEffect(() => {
    if (!open) return;
    const before = document.activeElement as HTMLElement | null;
    const element = dialog.current;
    if (element && !element.open) element.showModal();
    return () => { element?.close(); if (before?.isConnected) before.focus(); };
  }, [open]);
  useEffect(() => { heading.current?.focus(); }, [pathname]);
  if (!panel) return null;
  const title = panel === 'trade' ? 'P2P test trading' : panel === 'create' ? 'Send a payment' : panel === 'history' ? 'Payment activity' : panel === 'setup' ? 'EVM testnet setup' : 'Payment details';
  return <dialog ref={dialog} className="ms-tools ms-tools-popup" aria-labelledby={titleId} onCancel={event => { event.preventDefault(); if (!locked) onClose(); }} onClick={event => { if (event.target === event.currentTarget && !locked) onClose(); }}>
    <header className="ms-tools-heading"><h2 id={titleId} ref={heading} tabIndex={-1}>{title}</h2><button className="ms-icon" aria-label="Close payment tools" disabled={locked} onClick={onClose}><X size={19}/></button></header>
    <nav className="ms-tools-tabs" aria-label="Payment tools">
      {([{ to:'/create', panel:'create', label:'Send', Icon:Plus }, { to:'/payments', panel:'history', label:'Activity', Icon:History }, { to:'/trade', panel:'trade', label:'P2P', Icon:ArrowDownUp }] as const).map(item => <Link key={item.to} to={item.to} aria-current={panel === item.panel ? 'page' : undefined} aria-disabled={locked && panel !== item.panel} onClick={event => { if (locked && panel !== item.panel) event.preventDefault(); }}><item.Icon size={15}/>{item.label}</Link>)}
    </nav>
    <p className="ms-tools-network"><ShieldCheck size={12}/>{panel === 'setup' ? 'Testnet contract deployment · Mainnet deployment disabled' : panel === 'trade' ? 'MST Testnet escrow · UPI transfers use real INR' : 'Check the selected network · Mainnet uses real coins and gas'}</p>
    {locked && <p className="ms-tools-pending" role="status">Keep this payment open until its submitted transaction and sharing steps are resolved.</p>}
    <div className="ms-tools-body workspace"><Suspense fallback={<p className="ms-fine" role="status">Opening your payment tools…</p>}><Routes>
      <Route path="/create" element={<PaymentComposer embedded onClose={onClose} onLockChange={onLock}/>}/>
      <Route path="/payments" element={<PaymentActivity/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/trade" element={<TradePage embedded onBusyChange={onLock}/>}/>
      <Route path="/setup" element={<Setup onBusyChange={onLock}/>}/>
      <Route path="/pay/:paymentId" element={<PaymentPage/>}/>
      <Route path="/pay/v2/:chainId/:contract/:paymentId" element={<NativePaymentPage/>}/>
      <Route path="/campaign/:chainId/:contract/:campaignId" element={<CampaignPage/>}/>
    </Routes></Suspense></div>
  </dialog>;
}
