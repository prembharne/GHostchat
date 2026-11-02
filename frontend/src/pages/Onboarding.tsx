import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useQuery } from '@tanstack/react-query';
import { AccountShell } from '../wallet/AccountScreen';
import { AccountPanel } from '../wallet/ProfileWallet';
import { accountApi, type PrivateProfile } from '../wallet/accountApi';
import { walletSession, subscribeWalletSession } from '../wallet/walletSession';
import { isEvmWallet } from '../wallet/evmWallet';
import { rememberedSession } from '../messenger/matrix';
import { onboardingDestination, profileMatchesWallet } from '../wallet/onboarding';
import { AppLoading } from '../components/AppLoading';
import { walletRestoring, subscribeWalletRestoration } from '../config/reown';
import './onboarding.css';

export function WorkspaceAccess({ children }: { children: ReactNode }) {
  const account = useAccount(); const location = useLocation();
  const restoring = useSyncExternalStore(subscribeWalletRestoration, walletRestoring);
  const session = useSyncExternalStore(subscribeWalletSession, walletSession);
  const authenticated = !restoring && account.isConnected && !!account.address && session?.wallet.toLowerCase() === account.address.toLowerCase() && !!account.connector && isEvmWallet(account.connector);
  const profile = useQuery({ queryKey: ['private-profile', account.address], queryFn: () => accountApi<PrivateProfile | null>('/me'), enabled: authenticated, retry: false });
  if (restoring || account.status === 'reconnecting' || account.status === 'connecting') return <AppLoading label="Reconnecting your wallet"/>;
  if (authenticated && profile.isPending) return <AppLoading label="Checking your account"/>;
  if (authenticated && profile.error) return <main className="page"><h1>Your account needs attention</h1><p role="alert">{profile.error.message}</p><button onClick={() => { void profile.refetch(); }}>Retry connection</button><Link to="/start">Open sign-in</Link></main>;
  const messaging = rememberedSession();
  const linkedMessaging = !!account.address && messaging?.userId.split(':')[0] === `@w_${account.address.slice(2).toLowerCase()}`;
  if (!authenticated || !linkedMessaging || !profileMatchesWallet(profile.data, account.address)) return <Navigate replace to={`/start?next=${encodeURIComponent(location.pathname + location.search + location.hash)}`}/>;
  return children;
}
export function Onboarding() {
  const restoring = useSyncExternalStore(subscribeWalletRestoration, walletRestoring);
  const navigate = useNavigate(); const [params] = useSearchParams(); const [busy, setBusy] = useState(false);
  const destination = onboardingDestination(params.get('next'));
  useEffect(() => { const previous = document.title; document.title = 'Get started · GhostChat'; return () => { document.title = previous; }; }, []);
  useEffect(() => {
    if (!busy) return;
    const prevent = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ''; };
    window.addEventListener('beforeunload', prevent); return () => window.removeEventListener('beforeunload', prevent);
  }, [busy]);
  const account = useAccount();
  const session = useSyncExternalStore(subscribeWalletSession, walletSession);
  const authenticated = !restoring && account.isConnected && !!account.address && session?.wallet.toLowerCase() === account.address.toLowerCase() && !!account.connector && isEvmWallet(account.connector);
  const profile = useQuery({ queryKey: ['private-profile', account.address], queryFn: () => accountApi<PrivateProfile | null>('/me'), enabled: authenticated, retry: false });
  const stage = authenticated ? profileMatchesWallet(profile.data, account.address) ? 3 : 2 : 1;
  useEffect(() => {
    const messaging = rememberedSession();
    if (authenticated && profileMatchesWallet(profile.data, account.address) && messaging?.userId.split(':')[0] === `@w_${account.address!.slice(2).toLowerCase()}`) navigate(destination, { replace: true });
  }, [authenticated, profile.data, account.address, navigate, destination]);
  if (restoring) return <AppLoading label="Restoring your wallet connection"/>;
  return <AccountShell stage={stage} busy={busy}><AccountPanel onboarding onBusyChange={setBusy} onReady={() => navigate(destination, { replace: true })}/></AccountShell>;
}
