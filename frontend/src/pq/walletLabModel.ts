import { keccak256, stringToHex, toHex, type Address } from 'viem';
import { sepolia } from 'viem/chains';
import { MST_CHAIN_ID } from '../../../shared/network';
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import { attest, generatePqKeyPair, verifyAttestation, type Action, type Attestation } from 'evm-action-attestations';

const label = (value: string) => keccak256(stringToHex(value));
const audience = label('ghostchat:pq-lab:local:v1');
const randomNonce = () => toHex(globalThis.crypto.getRandomValues(new Uint8Array(32)));
const expiry = () => Math.floor(Date.now() / 1000) + 120;
const newSigner = () => ({ evm: privateKeyToAccount(generatePrivateKey()), pq: generatePqKeyPair() });
type Signer = ReturnType<typeof newSigner>;

function trust(signer: Signer) {
  return { evmSigner: signer.evm.address, pqPublicKey: signer.pq.publicKey };
}

export function createWalletLab() {
  const id = randomNonce();
  let signer = newSigner();
  let balance = 100;
  let busy = false;
  const consumed = new Set<string>();
  let pending: { action: Action; envelope: Attestation; amount: number } | undefined;

  function actionFor(actionType: string, recipient: Address, payload: string): Action {
    return {
      // These are signing-domain labels. The lab never submits an RPC request.
      sourceChainId: actionType === 'transfer' ? sepolia.id : MST_CHAIN_ID, destinationChainId: MST_CHAIN_ID,
      sourceTransaction: randomNonce(), audience, actionType: label(actionType), recipient,
      payloadHash: label(payload), nonce: randomNonce(), expiresAt: expiry(),
    };
  }

  function sign(action: Action) {
    return attest(action, data => signer.evm.signTypedData(data), signer.pq.secretKey);
  }

  async function applyTransfer(action: Action, envelope: Attestation, amount: number) {
    if (!await verifyAttestation(envelope, action, trust(signer)) || consumed.has(action.nonce) || amount > balance) return false;
    // The local demo consumes the nonce and debits synchronously. A real host
    // must make this operation durable and atomic across workers.
    consumed.add(action.nonce);
    balance -= amount;
    return true;
  }

  async function simulate(amount: number, mode: 'hybrid' | 'classical' | 'tampered') {
    if (busy) throw new Error('A wallet operation is already running.');
    if (!Number.isSafeInteger(amount) || amount < 1 || amount > balance) throw new Error('Enter a whole amount within the demo balance.');
    busy = true;
    try {
      const action = actionFor('transfer', '0x1111111111111111111111111111111111111111', String(amount));
      const signed = await sign(action);
      const envelope = mode === 'classical' ? { ...signed, pqSignature: new Uint8Array() }
        : mode === 'tampered' ? { ...signed, action: { ...signed.action, payloadHash: label(String(amount + 1)) } }
        : signed;
      if (!await applyTransfer(action, envelope, amount)) return false;
      pending = { action, envelope, amount };
      return true;
    } finally { busy = false; }
  }

  async function rotate() {
    if (busy) throw new Error('A wallet operation is already running.');
    busy = true;
    try {
      const replacement = newSigner();
      const replacementKeys = replacement.evm.address + toHex(replacement.pq.publicKey);
      const action = actionFor('rotate-signer', replacement.evm.address, replacementKeys);
      const authorization = await sign(action);
      if (!await verifyAttestation(authorization, action, trust(signer))) throw new Error('Rotation authorization failed.');
      if (!await verifyAttestation(
        await attest(action, data => replacement.evm.signTypedData(data), replacement.pq.secretKey),
        action, trust(replacement),
      )) throw new Error('Replacement key proof failed.');
      signer.pq.secretKey.fill(0);
      signer = replacement;
    } finally { busy = false; }
  }

  async function replayLastTransfer() {
    if (!pending) throw new Error('Approve a test transfer first.');
    if (busy) throw new Error('A wallet operation is already running.');
    busy = true;
    try { return await applyTransfer(pending.action, pending.envelope, pending.amount); }
    finally { busy = false; }
  }

  async function checkLastAuthorization() {
    if (!pending) throw new Error('Approve a test transfer first.');
    return verifyAttestation(pending.envelope, pending.action, trust(signer));
  }

  return {
    id,
    snapshot: () => ({ balance, signer: signer.evm.address, canCheckLast: !!pending }),
    simulate, rotate, checkLastAuthorization, replayLastTransfer,
  };
}
