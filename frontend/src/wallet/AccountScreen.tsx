import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Copy, Ghost, LockKeyhole, MessageCircle, ShieldCheck, Wallet } from 'lucide-react';
import './account-theme.css';

export type AccountStage = 1 | 2 | 3;
export function AccountShell({ stage, busy, children }: { stage: AccountStage; busy: boolean; children: ReactNode }) {
  const stages = ['Your wallet', 'Your profile', 'Your conversations'];
  return <main className="gc-onboarding">
    <div className="gc-account-atmosphere" aria-hidden="true"><i/><i/><svg viewBox="0 0 1000 800" preserveAspectRatio="none"><path d="M-80 620 Q280 180 620 450 T1100 160"/><path d="M-50 700 Q400 300 700 550 T1100 260"/></svg></div>
    <header className="gc-onboarding-header"><Link to="/" aria-label="GhostChat home" onClick={event => { if (busy) event.preventDefault(); }}><Ghost size={23}/>GhostChat</Link><Link to="/" aria-disabled={busy} onClick={event => { if (busy) event.preventDefault(); }}><ArrowLeft size={15}/>Back to home</Link></header>
    <div className="gc-onboarding-layout">
      <aside className="gc-account-intro"><p className="gc-account-eyebrow"><span/>YOUR PEOPLE. YOUR WALLET.</p><h1>Your world. <br/>A little <em>closer.</em></h1><p>Conversations that flow.<br/>Payments that stay close.</p>
        <div className="gc-account-illustration" aria-hidden="true"><div className="gc-orbit"/><div className="gc-orbit gc-orbit-two"/><div className="gc-ghost-hub"><Ghost size={42}/></div><div className="gc-floating-note gc-note-message"><MessageCircle size={17}/><span>Hey. You're in good company.</span></div><div className="gc-floating-note gc-note-wallet"><Wallet size={17}/><span>Your wallet. Your signature.</span><span className="gc-note-dot"/></div><div className="gc-floating-note gc-note-key"><LockKeyhole size={16}/><span>Your keys stay with you.</span></div></div>
        <p className="gc-account-caption">Matrix conversations <span>·</span> EVM payments</p>
      </aside>
      <section className="gc-onboarding-card" aria-labelledby="account-heading" aria-busy={busy}>
        <p className="gc-account-eyebrow">LET’S MAKE IT YOURS</p><h2 id="account-heading" key={stage}>{stage === 1 ? <>Your wallet.<br/><span>Your way in.</span></> : stage === 2 ? <>A name that's<br/><span>uniquely you.</span></> : <>All yours.<br/><span>Let’s connect.</span></>}</h2>
        <ol className="gc-onboarding-steps" aria-label="Account setup progress">{stages.map((label, index) => <li key={label} className={stage > index + 1 ? 'is-complete' : stage === index + 1 ? 'is-current' : ''} aria-current={stage === index + 1 ? 'step' : undefined}><span className="gc-step-number">{stage > index + 1 ? <Check size={12}/> : index + 1}</span><span>{label}</span></li>)}</ol>
        <div className="gc-account-step-content">{children}</div>
      </section>
    </div>
    <footer className="gc-onboarding-footer"><span><ShieldCheck size={13}/>Your keys stay in your wallet.</span><nav aria-label="Account information"><Link to="/privacy">Privacy<ArrowUpRight size={11}/></Link><Link to="/terms">Terms</Link><Link to="/contact">Contact</Link></nav></footer>
  </main>;
}

export function WalletIdentity({ wallet, copied, onCopy }: { wallet: string; copied: boolean; onCopy(): void }) {
  return <div className="gp-profile-address"><span className="gc-identity-icon"><Wallet size={18}/></span><div className="gc-address-content"><span>CONNECTED WALLET</span><code>{wallet}</code></div><button className="ms-icon" aria-label={copied ? 'Wallet address copied' : 'Copy wallet address'} onClick={onCopy}>{copied ? <Check size={16}/> : <Copy size={16}/>}</button></div>;
}
export function ProfileIdentity({ name, username }: { name: string; username: string }) {
  return <div className="gp-profile-name"><span className="gc-identity-icon"><ShieldCheck size={20}/></span><div><span className="gc-identity-label">YOUR GHOSTCHAT IDENTITY</span><strong>{name}<span>@{username}</span></strong><p>Your username links to this wallet across supported EVM networks. Mobile number saved privately; not verified.</p></div></div>;
}
