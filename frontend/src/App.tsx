import { lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppLoading } from './components/AppLoading';
import { isInformationPath } from './company/content';
import { isWorkspacePath } from './messenger/workspace';
import { Onboarding, WorkspaceAccess } from './pages/Onboarding';

const PublicPages = lazy(() => import('./company/PublicPages'));
const Messenger = lazy(() => import('./messenger/Messenger'));
const WalletLab = lazy(() => import('./pq/WalletLab'));
const Landing = lazy(() => import('./pages/Landing').then(module => ({ default: module.Landing })));


export default function App() {
  const { pathname } = useLocation();
  const content = isInformationPath(pathname) ? <PublicPages/> : pathname === '/' || pathname === '/overview' ? <Landing/> : pathname === '/start' ? <Onboarding/> : pathname === '/pq-lab' ? <WalletLab/> : isWorkspacePath(pathname) ? <WorkspaceAccess><Messenger/></WorkspaceAccess> : <main className="page empty"><h1>This link could not be found.</h1><Link to="/">Back to home</Link></main>;
  return <Suspense fallback={<AppLoading label="Opening GhostChat"/>}>{content}</Suspense>;
}
