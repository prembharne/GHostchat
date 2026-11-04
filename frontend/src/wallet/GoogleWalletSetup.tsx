import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useConnect } from 'wagmi';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { acceptGoogleCredential, googleSession, publicAccountApi, subscribeGoogleSession } from './googleSession';
import { googleWalletApi } from './googleSession';
import { embeddedWalletSnapshot, signOutEmbeddedWallet, subscribeEmbeddedWallet, unlockEmbeddedWallet } from './embeddedWallet';
import type { EncryptedWalletBackup } from '../../../shared/walletBackup';
interface GoogleIdentityApi {
  initialize(config: { client_id: string; nonce: string; callback(response: { credential: string }): void; auto_select: boolean; use_fedcm_for_button: boolean }): void;
  renderButton(container: HTMLElement, config: { theme: string; size: string; text: string; width: number }): void;
  disableAutoSelect(): void;
}
declare global { interface Window { google?: { accounts: { id: GoogleIdentityApi } } } }
let googleLibrary: Promise<GoogleIdentityApi> | undefined;
function loadGoogle() {
  if (window.google?.accounts.id) return Promise.resolve(window.google.accounts.id);
  return googleLibrary ||= new Promise<GoogleIdentityApi>((resolve, reject) => {
    const script = document.createElement('script'); script.src = 'https://accounts.google.com/gsi/client'; script.async = true;
    const timeout = setTimeout(() => { script.remove(); reject(new Error('Google sign-in did not load. Check your connection and retry.')); }, 15000);
    script.onload = () => { clearTimeout(timeout); window.google?.accounts.id ? resolve(window.google.accounts.id) : reject(new Error('Google sign-in is unavailable.')); };
    script.onerror = () => { clearTimeout(timeout); script.remove(); reject(new Error('Google sign-in could not load. Check your connection.')); };
    document.head.appendChild(script);
  }).catch(error => { googleLibrary = undefined; throw error; });
}
export function GoogleWalletSetup({ onBusyChange, onConnected }: { onBusyChange?(busy: boolean): void; onConnected?(): void }) {
  const session = useSyncExternalStore(subscribeGoogleSession, googleSession);
  const walletState = useSyncExternalStore(subscribeEmbeddedWallet, embeddedWalletSnapshot);
  const config = useQuery({ queryKey: ['google-login-config'], queryFn: () => publicAccountApi<{ googleClientId: string; profileConfigured: boolean }>('/config'), retry: false });
  const backup = useQuery({ queryKey: ['encrypted-wallet', session?.subject], queryFn: () => googleWalletApi<EncryptedWalletBackup | null>('/wallet'), enabled: !!session, retry: false });
  const { connectors, connectAsync } = useConnect(); const cache = useQueryClient();
  const target = useRef<HTMLDivElement>(null); const [error, setError] = useState(''); const [busy, setBusy] = useState(false); const [attempt, setAttempt] = useState(0); const [loaded, setLoaded] = useState(false);
  const [password, setPassword] = useState(''); const [confirmation, setConfirmation] = useState(''); const [accepted, setAccepted] = useState(false);
  useEffect(() => { onBusyChange?.(busy || walletState.busy); }, [busy, walletState.busy, onBusyChange]);
  useEffect(() => () => onBusyChange?.(false), [onBusyChange]);
  useEffect(() => {
    if (session || !config.data?.googleClientId || !config.data.profileConfigured) return;
    let cancelled = false; setLoaded(false); setError('');
    void (async () => {
      try {
        const [google, challenge] = await Promise.all([loadGoogle(), publicAccountApi<{ nonce: string }>('/google/challenge')]);
        if (cancelled || !target.current) return;
        google.initialize({ client_id: config.data.googleClientId, nonce: challenge.nonce, auto_select: false, use_fedcm_for_button: true, callback: response => {
          if (cancelled) return; setBusy(true); setError('');
          void acceptGoogleCredential(response.credential).then(() => cache.removeQueries({ queryKey: ['private-profile'] })).catch(() => setError('Google sign-in could not be verified. Retry sign-in; check that this website origin is allowed in Google Cloud.')).finally(() => setBusy(false));
        } });
        target.current.replaceChildren(); google.renderButton(target.current, { theme: 'filled_black', size: 'large', text: 'continue_with', width: Math.max(200, Math.min(400, target.current.clientWidth)) }); setLoaded(true);
      } catch (cause) { if (!cancelled) setError((cause as Error).message); }
    })();
    return () => { cancelled = true; target.current?.replaceChildren(); };
  }, [config.data, session?.subject, attempt, cache]);
  async function unlock() {
    setBusy(true); setError('');
    try {
      if (!backup.data && (password !== confirmation || !accepted)) throw new Error('Confirm your wallet password and acknowledge its recovery requirement.');
      await unlockEmbeddedWallet(password); const connector = connectors.find(item => item.id === 'ghostchat-google');
      if (!connector) throw new Error('GhostChat wallet connection is unavailable.');
      await connectAsync({ connector }); setPassword(''); setConfirmation('');
      await cache.invalidateQueries({ queryKey: ['private-profile'] });
      onConnected?.();
    } catch (cause) { setError((cause as Error).message); }
    finally { setBusy(false); }
  }
  if (session) return <div className="ms-form">
    <p className="ms-fine">Signed in with Google{session.name ? ` as ${session.name}` : ''}.</p>
    {backup.isPending ? <p role="status" className="ms-fine">Finding your encrypted wallet…</p> : backup.error ? <p role="alert" className="ms-alert">{backup.error.message}<button className="ms-text" onClick={() => { void backup.refetch(); }}>Retry</button></p> : <form className="ms-form" onSubmit={event => { event.preventDefault(); void unlock(); }}>
      <label htmlFor="embedded-password">{backup.data ? 'Unlock your wallet' : 'Create a wallet password'}</label><input id="embedded-password" type="password" autoComplete={backup.data ? 'current-password' : 'new-password'} value={password} onChange={event => setPassword(event.target.value)} minLength={12} disabled={busy} required/>
      {!backup.data && <><label htmlFor="embedded-confirm">Confirm wallet password</label><input id="embedded-confirm" type="password" autoComplete="new-password" value={confirmation} onChange={event => setConfirmation(event.target.value)} minLength={12} disabled={busy} required/><label className="ms-fine"><input type="checkbox" checked={accepted} onChange={event => setAccepted(event.target.checked)} required/> I understand I need this password to recover my wallet. Google cannot reset it.</label></>}
      <p className="ms-fine">Your key is encrypted in this browser. GhostChat stores an encrypted backup. Your password and unlocked key stay on this device.</p>
      <button className="ms-button ms-primary ms-full" disabled={busy || walletState.busy}>{busy ? `Securing wallet… ${Math.round(walletState.progress * 100)}%` : backup.data ? 'Unlock wallet & continue' : 'Create my wallet'}</button>
    </form>}
    {error && <p className="ms-alert" role="alert">{error}</p>}
    <button className="ms-text" disabled={busy || walletState.busy} onClick={() => { signOutEmbeddedWallet(); window.google?.accounts.id.disableAutoSelect(); cache.removeQueries({ queryKey: ['private-profile'] }); }}>Use another Google account</button>
  </div>;
  return <div>
    <div ref={target} aria-label="Google sign-in" style={{ minHeight: 44, pointerEvents: busy ? 'none' : undefined }}/>
    {config.isPending && <p className="ms-fine" role="status">Loading Google sign-in…</p>}
    {config.data && !config.data.googleClientId && <p className="ms-alert" role="status">Google sign-in needs your OAuth Web Client ID. Add GOOGLE_CLIENT_ID to the project’s server configuration and restart.</p>}
    {config.data && !config.data.profileConfigured && <p className="ms-alert">Private profile storage needs its encryption key before account setup can start.</p>}
    {loaded && <p className="ms-fine">Create or unlock a wallet for MST with your Google account and wallet password.</p>}
    {(error || config.error) && <p className="ms-alert" role="alert">{error || config.error?.message}</p>}
    <button className="ms-text" disabled={busy || config.isPending} onClick={() => { setAttempt(value => value + 1); void config.refetch(); }}>{loaded ? 'Refresh sign-in' : 'Retry Google sign-in'}</button>
  </div>;
}
