# GhostChat payment-to-action design

## What is live

GhostChat can send a native ETH transfer on Ethereum Mainnet. Ethereum charges the fee and determines confirmation time. MST transactions are separate, with MST gas and finality. P2P remains on MST Testnet. There is no automatic Ethereum-to-MST settlement route in the current app.

The Wallet Lab uses the bundled EVM Action Attestations SDK. Sepolia and MST Testnet are labels bound into its signed data. The lab uses disposable keys, a simulated balance, and browser-side verification.

## Where to enforce the signature policy

1. The app creates an order tied to the authenticated buyer, expected ETH amount and recipient, and a specific destination action.
2. A worker independently verifies the Ethereum transaction, canonical finalized block and order terms. It reserves the source chain and transaction hash in durable storage and creates an outbox job.
3. The issuer signs the same action with EIP-712 and ML-DSA-65. The action binds the source transaction, destination chain, audience, recipient, payload hash, nonce, and expiry. Use separate keys with protected enrollment and rotation.
4. An independent destination worker verifies both signatures against its configured keys and the expected order. It submits an MST membership or rewards action with a stable action ID. An MST receiver should reject duplicate IDs so retries cannot apply the same effect twice. The relay pays MST gas. The ETH transfer still follows Ethereum's fees and finality.

Off-chain verification protects the handoff between services. The MST contract still trusts the relay's on-chain authorization unless it verifies the relevant evidence itself. A bridge or light-client route is needed for independent source-chain verification by the destination. Adding a PQ signature to an envelope does not change Ethereum wallet spending rules or bridge-validator security.

## Future on-chain verification

An on-chain hybrid policy needs a verifier that implements the exact ML-DSA parameter set, context and message encoding. ERC-7913 provides an account-signature verifier interface. ERC-7786 provides a messaging gateway interface. These solve different problems. The Fireblocks Labs EVM research verifier uses ML-DSA-44, while the GhostChat SDK uses ML-DSA-65. Its published verification cost is about 1.23 million gas for its implementation alone, excluding transaction and calldata costs. It is unaudited. Benchmark a matching verifier and key registration on the target network before proposing an on-chain release.

Start with Sepolia → MST Testnet membership or a Matrix invite. Test stale receipts, wrong chain and recipient, invalid or missing signatures, duplicate source hashes, retries after a worker restart, and failure of the destination write. Keep the live payment path separate until those cases are proven.

- [Ethereum post-quantum roadmap](https://pq.ethereum.org/)
- [ERC-7913 verifier interface](https://eips.ethereum.org/EIPS/eip-7913)
- [ERC-7786 messaging gateway](https://ercs.ethereum.org/ERCS/erc-7786)
- [Fireblocks EVM verifier and benchmarks](https://github.com/fireblocks-labs/evm-ml-dsa-verifier)
