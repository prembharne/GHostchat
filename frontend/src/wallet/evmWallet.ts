export interface BrowserWallet { id: string; name: string; type?: string }
// Discovery metadata is not an authenticity guarantee. The user chooses the provider.
export function isEvmWallet(wallet: BrowserWallet) {
  return wallet.type === 'injected' && !['ghostpay-local', 'ghostchat-saral', 'ghostchat-embedded'].includes(wallet.id);
}
const key = 'ghostchat.selected-wallet.v1';
export function savedWalletId(): string { try { return localStorage.getItem(key) || ''; } catch { return ''; } }
export function rememberWallet(id: string) { try { localStorage.setItem(key, id); } catch { /* Session can remain in memory. */ } }
export function selectedWallet<T extends BrowserWallet>(wallets: readonly T[], id = savedWalletId()) {
  const eligible = wallets.filter(isEvmWallet);
  const matches = eligible.filter(wallet => wallet.id === id);
  if (matches.length === 1) return matches[0];
  if (!id && eligible.length === 1) return eligible[0];
  throw new Error('Choose your wallet on the sign-in screen. No wallet was selected automatically.');
}

// Restore only the last selected provider. Existing BridgeKey sessions predate the selector.
export async function waitForSelectedWallet<T extends BrowserWallet>(options: {
  connectors(): readonly T[]; connected(): boolean; previous(): string;
  restore(wallet: T): Promise<unknown>; pause?(): Promise<void>; attempts?: number;
}) {
  for (let attempt = 0; attempt < (options.attempts ?? 25); attempt++) {
    if (options.connected()) return;
    const previous = options.previous();
    const candidates = options.connectors().filter(wallet => isEvmWallet(wallet) &&
      (previous ? wallet.id === previous : /^bridgekey(?:wallet)?$/i.test(wallet.name.replace(/[\s_-]/g, ''))));
    if (candidates.length === 1) await options.restore(candidates[0]).catch(() => {});
    if (options.connected()) return;
    await (options.pause?.() ?? new Promise(resolve => setTimeout(resolve, 200)));
  }
}
