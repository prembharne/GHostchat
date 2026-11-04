import { getAddress, type Hex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { walletBackupInput, type EncryptedWalletBackup } from '../../../shared/walletBackup';
import { googleWalletApi } from './googleSession';
import { googleSession, setGoogleSession, subscribeGoogleSession } from './googleSession';
import { createEmbeddedProvider, type SigningReview } from './embeddedProvider';

let closeProvider: (() => void) | undefined; let timer: ReturnType<typeof setTimeout>; let epoch = 0;
let state: { busy: boolean; progress: number; approval?: SigningReview } = { busy: false, progress: 0 };
const listeners = new Set<() => void>(); let resolveApproval: ((value: boolean) => void) | undefined;
const emit = (change: Partial<typeof state>) => { state = { ...state, ...change }; listeners.forEach(listener => listener()); };
export const embeddedWalletSnapshot = () => state;
export const subscribeEmbeddedWallet = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };
export function answerEmbeddedApproval(accept: boolean) { const resolve = resolveApproval; resolveApproval = undefined; emit({ approval: undefined }); resolve?.(accept); }
function touch() { clearTimeout(timer); timer = setTimeout(lockEmbeddedWallet, 10 * 60000); }
export function lockEmbeddedWallet() {
  epoch++; clearTimeout(timer); answerEmbeddedApproval(false);
  const close = closeProvider; closeProvider = undefined; close?.();
  const session = googleSession(); if (session?.provider) setGoogleSession({ ...session, provider: undefined });
}
export function signOutEmbeddedWallet() { lockEmbeddedWallet(); setGoogleSession(undefined); }
subscribeGoogleSession(() => { if (!googleSession() && closeProvider) lockEmbeddedWallet(); });
export async function unlockEmbeddedWallet(password: string) {
  const session = googleSession(); if (!session) throw new Error('Sign in with Google first.');
  if (state.busy) throw new Error('A wallet operation is already running.');
  if (password.length < 12) throw new Error('Use a wallet password of at least 12 characters.');
  const operationEpoch = epoch; const ensure = () => { if (epoch !== operationEpoch || googleSession()?.subject !== session.subject) throw new Error('The account changed. Start wallet setup again.'); };
  emit({ busy: true, progress: 0 });
  try {
    const backup = await googleWalletApi<EncryptedWalletBackup | null>('/wallet'); ensure();
    const { Wallet, encryptKeystoreJson, decryptKeystoreJson } = await import('ethers');
    const progress = (value: number) => emit({ progress: value });
    let privateKey: Hex; let walletAddress: string;
    if (backup) {
      walletBackupInput(backup);
      let decrypted; try { decrypted = await decryptKeystoreJson(backup.keystore, password, progress); } catch { throw new Error('Unable to unlock this wallet. Check your wallet password.'); }
      ensure(); privateKey = decrypted.privateKey as Hex; walletAddress = decrypted.address;
      if (getAddress(walletAddress) !== getAddress(backup.wallet)) throw new Error('The backup address does not match its signing key.');
    } else {
      const profile = await googleWalletApi<{ wallet: string } | null>('/me'); ensure();
      if (profile) throw new Error('This account already has a wallet identity without an encrypted backup. Restore its original wallet before continuing.');
      const generated = Wallet.createRandom(); privateKey = generated.privateKey as Hex; walletAddress = generated.address;
      const keystore = await encryptKeystoreJson({ address: walletAddress, privateKey }, password, { progressCallback: progress }); ensure();
      const challenge = await googleWalletApi<{ nonce: string; message: string }>('/wallet/challenge', { wallet: walletAddress, keystore }); ensure();
      const signature = await generated.signMessage(challenge.message); ensure();
      await googleWalletApi('/wallet/complete', { nonce: challenge.nonce, signature }); ensure();
    }
    const signer = privateKeyToAccount(privateKey); ensure();
    const instance = createEmbeddedProvider(signer, async review => {
      touch(); if (resolveApproval) throw new Error('A wallet confirmation is already waiting.');
      return new Promise<boolean>(resolve => { resolveApproval = resolve; emit({ approval: review }); });
    });
    closeProvider?.(); closeProvider = instance.close;
    setGoogleSession({ ...session, provider: instance.provider }); touch(); return getAddress(walletAddress);
  } finally { emit({ busy: false, progress: 0 }); }
}
export async function exportEmbeddedBackup() {
  const backup = await googleWalletApi<EncryptedWalletBackup | null>('/wallet'); if (!backup) throw new Error('No encrypted backup is available.');
  walletBackupInput(backup); return backup;
}
