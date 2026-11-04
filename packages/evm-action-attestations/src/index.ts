import { ml_dsa65 } from '@noble/post-quantum/ml-dsa.js';
import { getAddress, hashTypedData, hexToBytes, isAddress, verifyTypedData } from 'viem';
import type { Address, Hex } from 'viem';

export interface Action {
  sourceChainId: number;
  sourceTransaction: Hex;
  destinationChainId: number;
  audience: Hex;
  actionType: Hex;
  recipient: Address;
  payloadHash: Hex;
  nonce: Hex;
  expiresAt: number;
}

export interface Attestation {
  action: Readonly<Action>;
  evmSignature: Hex;
  pqSignature: Uint8Array;
}

const types = {
  Action: [
    { name: 'sourceChainId', type: 'uint256' },
    { name: 'sourceTransaction', type: 'bytes32' },
    { name: 'destinationChainId', type: 'uint256' },
    { name: 'audience', type: 'bytes32' },
    { name: 'actionType', type: 'bytes32' },
    { name: 'recipient', type: 'address' },
    { name: 'payloadHash', type: 'bytes32' },
    { name: 'nonce', type: 'bytes32' },
    { name: 'expiresAt', type: 'uint256' },
  ],
} as const;

for (const field of types.Action) Object.freeze(field);
Object.freeze(types.Action);
Object.freeze(types);

const context = new TextEncoder().encode('EVM Action Attestations v1');
const positiveInteger = (value: number) => Number.isSafeInteger(value) && value > 0;

function bytes32(value: Hex) {
  if (typeof value !== 'string' || !/^0x[0-9a-f]{64}$/i.test(value) || /^0x0{64}$/i.test(value)) {
    throw new TypeError('Expected a nonzero bytes32 value');
  }
  return value.toLowerCase() as Hex;
}

function canonical(action: Action): Readonly<Action> {
  if (![action.sourceChainId, action.destinationChainId, action.expiresAt].every(positiveInteger)
      || !isAddress(action.recipient) || /^0x0{40}$/i.test(action.recipient)) {
    throw new TypeError('Invalid chain, expiry, or recipient');
  }
  return Object.freeze({
    sourceChainId: action.sourceChainId,
    sourceTransaction: bytes32(action.sourceTransaction),
    destinationChainId: action.destinationChainId,
    audience: bytes32(action.audience),
    actionType: bytes32(action.actionType),
    recipient: getAddress(action.recipient),
    payloadHash: bytes32(action.payloadHash),
    nonce: bytes32(action.nonce),
    expiresAt: action.expiresAt,
  });
}

function typed(action: Readonly<Action>) {
  return {
    domain: { name: 'EVM Action Attestations', version: '1', chainId: action.destinationChainId },
    types,
    primaryType: 'Action',
    message: {
      ...action,
      sourceChainId: BigInt(action.sourceChainId),
      destinationChainId: BigInt(action.destinationChainId),
      expiresAt: BigInt(action.expiresAt),
    },
  } as const;
}

export const generatePqKeyPair = () => ml_dsa65.keygen();

export async function attest(
  action: Action,
  signEvm: (data: ReturnType<typeof typed>) => Promise<Hex>,
  pqSecretKey: Uint8Array,
): Promise<Attestation> {
  const snapshot = canonical(action);
  const data = typed(snapshot);
  const digest = hexToBytes(hashTypedData(data));
  const evmSignature = await signEvm(data);
  return { action: snapshot, evmSignature, pqSignature: ml_dsa65.sign(digest, pqSecretKey, { context }) };
}

export async function verifyAttestation(
  attestation: Attestation,
  expected: Action,
  trusted: { evmSigner: Address; pqPublicKey: Uint8Array },
  now = Math.floor(Date.now() / 1000),
): Promise<boolean> {
  try {
    if (!positiveInteger(now) || !isAddress(trusted.evmSigner)) return false;
    const action = canonical(attestation.action);
    if (action.expiresAt <= now || !/^0x[0-9a-f]{130}$/i.test(attestation.evmSignature)) return false;
    const data = typed(action);
    const digest = hashTypedData(data);
    if (digest !== hashTypedData(typed(canonical(expected)))) return false;
    if (!ml_dsa65.verify(attestation.pqSignature, hexToBytes(digest), trusted.pqPublicKey, { context })) return false;
    return await verifyTypedData({ ...data, address: trusted.evmSigner, signature: attestation.evmSignature });
  } catch {
    return false;
  }
}
