import { useState } from 'react';
import { useAccount } from 'wagmi';
import { createWalletClient, custom, getAddress, type EIP1193Provider } from 'viem';
import { BridgeKeyConnect } from './BridgeKeyConnect';
import { isEvmWallet } from './evmWallet';
import { publicWalletApi, setWalletSession } from './walletSession';

export function BridgeKeyLogin({ onBusyChange }: { onBusyChange?(busy: boolean): void }) {
  const account = useAccount(); const [error, setError] = useState(''); const [busy, setBusy] = useState(false);
  async function login() {
    setBusy(true); onBusyChange?.(true); setError('');
    try {
      if (!account.address || !account.connector || !isEvmWallet(account.connector)) throw new Error('Connect your EVM browser wallet.');
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
  return <>{!account.connector || !isEvmWallet(account.connector) ? <BridgeKeyConnect disabled={busy}/> : <><p className="ms-fine">Wallet connected. Sign a login message to verify wallet ownership. This does not spend tokens.</p><button className="ms-button ms-primary ms-full" disabled={busy} onClick={() => { void login(); }}>{busy ? 'Waiting for wallet…' : 'Sign in with wallet'}</button></>}{error && <p className="ms-alert" role="alert">{error}</p>}</>;
}
