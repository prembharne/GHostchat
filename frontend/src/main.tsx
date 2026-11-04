import React from 'react';
import ReactDOM from 'react-dom/client';
import { EmbeddedApproval } from './wallet/EmbeddedApproval';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { config, configureDeployment, setDeploymentIssue } from './config/web3';
import App from './App';
import { PwaProvider } from './pwa/PwaProvider';
import { AppErrorBoundary } from './components/AppLoading';
import { restoreWalletConnection } from './config/reown';
import './style.css';
import './workspace.css';
import './messenger/mobile-polish.css';
const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: true } } });
const root = ReactDOM.createRoot(document.getElementById('root')!);
const render = () => root.render(<React.StrictMode><WagmiProvider config={config} reconnectOnMount={false}><QueryClientProvider client={queryClient}><BrowserRouter><PwaProvider><AppErrorBoundary><App/><EmbeddedApproval/></AppErrorBoundary></PwaProvider></BrowserRouter></QueryClientProvider></WagmiProvider></React.StrictMode>);
async function bootstrap() {
  void restoreWalletConnection();
  // Start the UI immediately; protected routes wait for the one-time wallet restoration.
  render();
  try {
    const response = await fetch('/api/deployment', { signal: AbortSignal.timeout(10000), cache: 'no-store' });
    if (!response.ok) throw new Error('Start or restart the MST Testnet relay with npm start.');
    configureDeployment(await response.json());
  } catch (error) { setDeploymentIssue((error as Error).message || 'The MST Testnet relay is unavailable.'); }
  render();
}
void bootstrap();
