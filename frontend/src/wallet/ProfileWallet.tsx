import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { useAccount, useBalance, useDisconnect, useSwitchChain } from 'wagmi';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createWalletClient, custom, getAddress } from 'viem';
import { Check, LoaderCircle, LogOut, ShieldCheck, UserRound, Wallet } from 'lucide-react';
import { Modal } from '../messenger/Modal';
import { WalletIdentity, ProfileIdentity } from './AccountScreen';
import { usePwa } from '../pwa/PwaProvider';
import { MST_CHAIN_ID } from '../../../shared/network';
import { walletChain, walletChains } from '../../../shared/phaseOneNetworks';
import { accountInput } from '../../../shared/account';
import { accountApi, type PrivateProfile } from './accountApi';
import { walletSession, subscribeWalletSession, setWalletSession } from './walletSession';
import { BridgeKeyLogin } from './BridgeKeyLogin';
import { isSupportedWallet } from './evmWallet';
import { ensureWalletMatrix, matrix } from '../messenger/matrix';
import type { EIP1193Provider } from 'viem';
import { useAction } from '../hooks/useAction';
import { ProfilePhotoEditor } from '../messenger/ProfilePhoto';
import '../messenger/messenger.css';
import '../payments/payments.css';
import './profile.css';
export function ProfileButton() { const [open, setOpen] = useState(false); return <><button className="gp-profile-trigger" aria-label="Your profile and wallet" onClick={() => setOpen(true)}><UserRound size={18}/><span>My wallet</span></button>{open && <ProfileWallet onClose={() => setOpen(false)}/>}</>; }
export default function ProfileWallet({ onClose }: { onClose(): void }) {
  const [busy, setBusy] = useState(false);
  return <Modal className="gc-wallet-modal" title="Your profile & wallet" eyebrow="GHOSTCHAT ACCOUNT" onClose={() => { if (!busy) onClose(); }}><section className="ms-settings-card"><h3>Private UPI payment details</h3><p>Add your UPI ID and QR inside a P2P offer. They are visible only to you and that offer’s accepted buyer.</p><Link className="ms-button ms-primary ms-full" to="/trade" onClick={event => { if (busy) event.preventDefault(); else onClose(); }}>Open P2P · upload UPI ID & QR</Link></section><AccountPanel onBusyChange={setBusy}/></Modal>;
}
export function AccountPanel({ onboarding = false, onReady, onBusyChange }: { onboarding?: boolean; onReady?(): void; onBusyChange?(busy: boolean): void }) {
  const { online } = usePwa(); const account = useAccount(); const { disconnect } = useDisconnect(); const { switchChainAsync } = useSwitchChain(); const cache = useQueryClient(); const action = useAction();
  const chain = walletChain(walletChains.some(item => item.id === account.chainId) ? account.chainId! : MST_CHAIN_ID);
  const balance = useBalance({ address: account.address, chainId: chain.id, query: { enabled: !!account.address, refetchInterval: 15000 } });
  const session = useSyncExternalStore(subscribeWalletSession, walletSession);
  const authenticated = !!account.address && session?.wallet.toLowerCase() === account.address.toLowerCase() && !!account.connector && isSupportedWallet(account.connector);
  const profile = useQuery({ queryKey: ['private-profile', account.address], queryFn: () => accountApi<PrivateProfile | null>('/me'), enabled: authenticated, retry: false });
  useEffect(() => { onBusyChange?.(action.busy); }, [action.busy, onBusyChange]);
  useEffect(() => () => onBusyChange?.(false), [onBusyChange]);
  const [name, setName] = useState(''); const [mobile, setMobile] = useState(''); const [handle, setHandle] = useState(''); const [consent, setConsent] = useState(false); const [copied, setCopied] = useState(false);
  useEffect(() => { setName(''); setMobile(''); setHandle(''); setConsent(false); }, [account.address]);
  async function register() { await action.run(async () => {
    if (!account.address || !consent) throw new Error('Complete your profile and accept profile storage.');
    const input = accountInput({ name, mobile, username: handle, wallet: account.address });
    if (!authenticated || !account.connector) throw new Error('Sign in with your wallet first.');
    const provider = await account.connector.getProvider() as EIP1193Provider;
    const challenge = await accountApi<{ nonce: string; message: string; expires: number }>('/challenge', { ...input, consent });
    const currentAccounts = await provider.request({ method: 'eth_accounts' });
    if (!currentAccounts.some(address => getAddress(address) === getAddress(account.address!))) throw new Error('The wallet changed. Sign in again.');
    const signer = createWalletClient({ account: account.address, chain, transport: custom(provider) });
    const signature = await signer.signMessage({ message: challenge.message });
    const saved = await accountApi<PrivateProfile>('/complete', { nonce: challenge.nonce, signature });
    cache.setQueryData(['private-profile', account.address], saved);
    await cache.invalidateQueries({ queryKey: ['ghost-profile'] });
    setMobile(''); action.setNotice('Your username is linked to your wallet. Your mobile number stays private.'); await ensureWalletMatrix(account.address!, saved.username); onReady?.();
  }); }
  const mismatch = profile.data && profile.data.wallet.toLowerCase() !== account.address?.toLowerCase();
  return <div className="gc-account-surface" aria-busy={action.busy}>
    {(!authenticated || onboarding) && <><div className="gp-profile-orb">{authenticated ? <ShieldCheck size={29}/> : <Wallet size={29}/>}<span/></div>
    <p className="ms-modal-copy">{onboarding ? authenticated ? 'Your wallet is connected. Choose your identity, then make yourself at home.' : 'Connect an existing wallet or create one with Google to get started.' : 'Your account and EVM wallet.'}</p></>}
    {authenticated && !onboarding && <ProfilePhotoEditor/>}
    {!authenticated ? onboarding ? <BridgeKeyLogin onBusyChange={onBusyChange}/> : <Link className="ms-button ms-primary ms-full" to="/start">Continue to sign in</Link> : <>
      {!onboarding && <><label className="ms-fine" htmlFor="wallet-network">Wallet network</label><select id="wallet-network" className="ms-input" value={chain.id} disabled={action.busy} onChange={event => { const chainId = Number(event.target.value); void action.run(async () => { await switchChainAsync({ chainId }); }); }}>{walletChains.map(item => <option value={item.id} key={item.id}>{item.name} · {item.nativeCurrency.symbol}</option>)}</select>
      <div className="gp-profile-balance"><span>{chain.testnet ? 'TESTNET BALANCE' : 'MAINNET BALANCE'}</span><strong>{balance.data ? Number(balance.data.formatted).toLocaleString(undefined, { maximumFractionDigits: 6 }) : '—'} <small>{chain.nativeCurrency.symbol}</small></strong><p>{chain.name} · {chain.testnet ? 'test coins' : 'real network'}</p></div></>}
      {onboarding ? <WalletIdentity wallet={account.address!} copied={copied} onCopy={() => { void action.run(async () => { await navigator.clipboard.writeText(account.address!); setCopied(true); }); }}/> : <details className="ms-wallet-address-details"><summary>Wallet address</summary><WalletIdentity wallet={account.address!} copied={copied} onCopy={() => { void action.run(async () => { await navigator.clipboard.writeText(account.address!); setCopied(true); }); }}/></details>}
      {profile.isPending ? <p className="ms-fine">Loading your profile…</p> : profile.error ? <p className="ms-alert" role="alert">{profile.error.message}<button className="ms-text" onClick={() => { void profile.refetch(); }}>Retry</button></p> : mismatch ? <p className="ms-alert">This profile belongs to a different wallet. Reconnect the intended wallet account.</p> : profile.data ? <ProfileIdentity name={profile.data.name} username={profile.data.username}/> : onboarding ? <form className="ms-form gp-name-form" onSubmit={event => { event.preventDefault(); void register(); }}>
        <label htmlFor="profile-name">Your name</label><input id="profile-name" autoComplete="name" value={name} onChange={event => setName(event.target.value)} minLength={2} maxLength={80} required/>
        <label htmlFor="profile-mobile">Mobile number</label><input id="profile-mobile" type="tel" autoComplete="tel" placeholder="+919876543210" value={mobile} onChange={event => setMobile(event.target.value)} maxLength={25} required/><p className="ms-fine">Include your country code. Your number stays private. SMS verification is not connected.</p>
        <label htmlFor="profile-username">Unique username</label><input id="profile-username" autoComplete="username" value={handle} onChange={event => setHandle(event.target.value.toLowerCase())} placeholder="prem_bharne" minLength={3} maxLength={24} required/><p className="ms-fine">Your @username and wallet address will be public so people can pay you. A chat display name cannot redirect payments.</p>
        <label className="ms-fine"><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} required/> I agree to GhostChat storing my name and mobile privately, and publishing my username linked to my wallet.</label>
        <button className="ms-button ms-primary" disabled={action.busy || !online || !consent}>{action.busy ? <LoaderCircle className="spin" size={16}/> : <Check size={16}/>}Save profile & reserve username</button>
      </form> : <Link className="ms-button ms-primary ms-full" to="/start">Complete your account setup</Link>}
      {onboarding && profile.data && !mismatch && <button className="ms-button ms-primary ms-full" disabled={action.busy} onClick={() => { void action.run(async () => { await ensureWalletMatrix(account.address!, profile.data!.username); onReady?.(); }); }}>Continue to chat</button>}
      <button className="ms-button ms-secondary ms-full" disabled={action.busy} onClick={() => { void action.run(async () => { try { await accountApi('/wallet-auth/logout', {}); } finally { setWalletSession(undefined); await matrix.stop(); disconnect(); cache.removeQueries({ queryKey: ['private-profile'] }); } }); }}><LogOut size={16}/>Sign out</button>
    </>}
    {action.error && <p className="ms-alert" role="alert">{action.error}</p>}{action.notice && <p className="ms-fine" role="status">{action.notice}</p>}
    {onboarding && <div className="ms-modal-note"><ShieldCheck size={17}/><span>Your name and mobile stay private. Your username and wallet address help people pay you.</span></div>}
  </div>;
}
