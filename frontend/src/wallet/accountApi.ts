import { walletSession, setWalletSession } from './walletSession';
import { getAccount } from '@wagmi/core';
import { walletConfig } from '../config/reown';
import { isSupportedWallet } from './evmWallet';
export interface PrivateProfile { username: string; wallet: string; name: string; mobile: string; mobileVerified: false; createdAt: number }
export async function accountApi<T>(path: string, body?: unknown): Promise<T> {
  const session = walletSession(); const account = getAccount(walletConfig);
  if (!session || session.expiresAt * 1000 <= Date.now()) { setWalletSession(undefined); throw new Error('Sign in with your wallet first.'); }
  if (account.status === 'reconnecting' || account.status === 'connecting') throw new Error('Your wallet is reconnecting. Please retry in a moment.');
  if (session.wallet.toLowerCase() !== account.address?.toLowerCase() || !account.connector || !isSupportedWallet(account.connector)) throw new Error('Connect the wallet you signed in with.');
  const token = session.token;
  const response = await fetch(`/api/account${path}`, {
    method: body ? 'POST' : 'GET', headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined, cache: 'no-store', signal: AbortSignal.timeout(20000),
  });
  const value = await response.json(); if (!response.ok) { if (response.status === 401) setWalletSession(undefined); throw new Error(value.error || 'Your profile could not be saved.'); }
  return value;
}
