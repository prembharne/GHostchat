import type { EIP1193Provider } from 'viem';
export interface GoogleSession { subject: string; name: string; googleIdToken: string; expiresAt: number; provider?: EIP1193Provider }
let session: GoogleSession | undefined;
const listeners = new Set<() => void>(); let expiryTimer: ReturnType<typeof setTimeout>;
export const googleSession = () => session;
export function subscribeGoogleSession(listener: () => void) { listeners.add(listener); return () => { listeners.delete(listener); }; }
export function setGoogleSession(value?: GoogleSession) {
  clearTimeout(expiryTimer); session = value; listeners.forEach(listener => listener());
  if (value) expiryTimer = setTimeout(() => setGoogleSession(undefined), Math.max(0, value.expiresAt * 1000 - Date.now()));
}
export async function publicAccountApi<T>(path: string, body?: unknown): Promise<T> {
  const response = await fetch(`/api/google-wallet${path}`, { method: body ? 'POST' : 'GET', headers: body ? { 'Content-Type': 'application/json' } : {}, body: body ? JSON.stringify(body) : undefined, cache: 'no-store', signal: AbortSignal.timeout(20000) });
  const value = await response.json(); if (!response.ok) throw new Error(value.error || 'Account service is unavailable.'); return value;
}
export async function acceptGoogleCredential(credential: string) {
  const result = await publicAccountApi<{ subject: string; name: string; expiresAt: number }>('/google/login', { credential });
  if (!result.subject || !Number.isFinite(result.expiresAt) || result.expiresAt * 1000 <= Date.now()) throw new Error('Google login expired. Sign in again.');
  setGoogleSession({ ...result, googleIdToken: credential });
}

export async function googleWalletApi<T>(path: string, body?: unknown): Promise<T> {
  const current = googleSession();
  if (!current) throw new Error('Sign in with Google first.');
  const response = await fetch(`/api/google-wallet${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${current.googleIdToken}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined, cache: 'no-store', signal: AbortSignal.timeout(20000),
  });
  const value = await response.json();
  if (!response.ok) throw new Error(value.error || 'Wallet backup service is unavailable.');
  return value;
}
