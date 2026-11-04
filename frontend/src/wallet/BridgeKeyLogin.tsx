import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { createWalletClient, custom, getAddress, type EIP1193Provider } from 'viem';
import { Modal } from '../messenger/Modal';
import { GoogleWalletSetup } from './GoogleWalletSetup';
import { BridgeKeyConnect } from './BridgeKeyConnect';
import { isSupportedWallet } from './evmWallet';
import { publicWalletApi, setWalletSession } from './walletSession';

export function BridgeKeyLogin({ onBusyChange }: { onBusyChange?(busy: boolean): void }) {
  const account = useAccount(); const [error, setError] = useState(''); const [busy, setBusy] = useState(false);
  const [googleOpen, setGoogleOpen] = useState(false);
  const [googleBusy, setGoogleBusy] = useState(false);
  async function login() {
    setBusy(true); onBusyChange?.(true); setError('');
    try {
      if (!account.address || !account.connector || !isSupportedWallet(account.connector)) throw new Error('Connect or unlock your wallet.');
      const provider = await account.connector.getProvider() as EIP1193Provider;
      const challenge = await publicWalletApi('/wallet-auth/challenge', { wallet: account.address });
      const signer = createWalletClient({ account: account.address, transport: custom(provider) });
      const signature = await signer.signMessage({ message: challenge.message });
      const accounts = await provider.request({ method: 'eth_accounts' });
      if (!accounts.some(address => getAddress(address) === getAddress(account.address!))) throw new Error('Wallet changed. Try again.');
      const session = await publicWalletApi('/wallet-auth/login', { nonce: challenge.nonce, signature });
      if (session.wallet?.toLowerCase() !== account.address.toLowerCase() || !/^[a-f0-9]{64}$/.test(session.token) || !Number.isFinite(session.expiresAt)) throw new Error('Invalid wallet session.');
      setWalletSession(session);
    } catch (e) { setError((e as Error).message); }
    finally { setBusy(false); onBusyChange?.(false); }
  }
  const connected = !!account.connector && isSupportedWallet(account.connector);
  return <>
    <div className="gc-signin-options">
      {connected && <>
        <p className="ms-fine">Sign a login message to verify wallet ownership. This does not spend tokens.</p>
        <button type="button" className="ms-button ms-primary ms-full" disabled={busy} onClick={() => { void login(); }}>
          {busy ? 'Waiting for wallet…' : 'Sign in with wallet'}
        </button>
      </>}
      <BridgeKeyConnect compact={connected} disabled={busy}/>
      {account.connector?.id !== 'ghostchat-google' &&
        <button type="button" className="ms-button ms-secondary ms-full" disabled={busy} onClick={() => setGoogleOpen(true)}>
          Create or restore with Google
        </button>}
    </div>
    <Link className="ms-text" to="/pq-lab">Try the post-quantum wallet lab</Link>
    {googleOpen && <Modal title="Your Google wallet" className="gc-wallet-choice" onClose={() => { if (!googleBusy) setGoogleOpen(false); }}>
      <GoogleWalletSetup onBusyChange={setGoogleBusy} onConnected={() => setGoogleOpen(false)}/>
    </Modal>}
    {error && <p className="ms-alert" role="alert">{error}</p>}
  </>;
}
