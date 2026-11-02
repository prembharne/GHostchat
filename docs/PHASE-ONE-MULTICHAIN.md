# Phase-one EVM rollout

Status: local implementation prepared on 2 November 2026. This change has not been committed, deployed to Vercel or installed on EC2.

## What is available

| Network | Chain ID | Native coin | Direct transfers | New contract funding |
| --- | --- | --- | --- | --- |
| MST Testnet | 91562037 | tMSTC | Prepared | Existing verified funding flow |
| MST Mainnet | 4646 | MSTC | Prepared | Gated; deployed suite is not app activation |
| Ethereum | 1 | ETH | Prepared | Gated |
| Sepolia | 11155111 | ETH, test coin | Prepared | Gated |
| Polygon | 137 | POL | Prepared | Gated |
| Polygon Amoy | 80002 | POL, test coin | Prepared | Gated |
| OP Mainnet | 10 | ETH | Prepared | Gated |
| OP Sepolia | 11155420 | ETH, test coin | Prepared | Gated |

“Prepared” means configured in this source tree, with RPC-chain checks and automated tests. It does not claim a successful user-signed transfer on each network. Direct transfers do not need a GhostChat contract. Each network has separate balances, transactions and gas. No bridging, ERC-20 or stablecoin support is added by this change.

The network selector disables new payment-link and community funding on the new networks. Existing supported testnet references retain their proof-checked read/claim paths for compatibility. Contract runtime and creation-transaction verification remain required by the existing funding flows; selecting a chain is not proof of a deployment.

## Wallet and identity behavior

- Sign-in discovers EIP-6963 injected browser wallets, including BridgeKey, MetaMask and Rabby. No WalletConnect account or project ID is required for this extension-based flow. Mobile wallet connections through WalletConnect are a separate integration.
- With multiple installed wallets, the user chooses a provider. Display names are supplied by extensions and are not an authenticity guarantee.
- Reload restores the selected provider only. An existing BridgeKey session can restore using the compatibility path; another installed wallet is never silently substituted.
- The API still verifies a single-use signed wallet challenge and binds the session to the wallet address. No Google authentication, private-key upload or new server wallet is introduced.
- The same address retains its username and wallet-linked Matrix identity when switching networks. Network changes do not clear Matrix device storage or room keys. Changing the address is a different identity; private UPI records are not migrated between addresses.
- Before transferring, the app checks the public RPC's chain ID, requests a wallet chain switch when needed and checks the wallet's actual chain and authorized account. Mainnet review explicitly identifies real coins and additional gas.

## Run the local checks

```powershell
npm run check:networks
npm run test:messenger
npm run build -w frontend
```

`check:networks` is read-only and sends no transaction. Public RPC availability can change. A successful chain-ID response does not verify a contract, finality behavior or browser CORS access.

## Validation of this local change

- Frontend suite: 94 tests passed, including wallet choice/restoration, chain/account checks and contract activation gates.
- Server suite: 48 tests passed. Frontend and server production builds passed.
- All eight RPCs returned the expected chain ID during read-only checks. MST Testnet also returned HTTP 500 and a connection failure on later requests; its endpoint is intermittent and should be monitored before a demo or rollout.
- No user-signed transfer on the newly configured networks, live deployment, EC2 update or Git commit was performed.

## Before publishing this frontend

1. Keep the existing production build available for rollback. Back up Matrix data and keys; no data reset is needed for this change.
2. Test login and refresh with BridgeKey, MetaMask and Rabby. With two extensions installed, check that the chosen wallet remains selected after reload. Check existing users' messages remain readable.
3. Test small native transfers between two controlled wallets on Sepolia, Amoy and OP Sepolia. Test rejected approvals, wrong-network switching, account changes and receipt sharing in Activity and chat. The receiving wallet must view the same network.
4. Review and deliberately approve any small Mainnet smoke test with funded wallets; automated tests do not spend real coins. Check explorer amounts and gas separately.
5. Build the frontend, then use the existing Vercel asset preparation and deployment procedure. `scripts/sync-vercel.mjs` replaces the hosted public directory; preserve any required operations assets first. The local build alone does not update the public site.
6. Verify the deployed `/start`, `/chat` and `/create` routes. The existing account API accepts wallet ownership signatures independently of extension brand. No new-chain P2P backend has been activated on EC2.

## Activating payment links and community funds on another chain

For each chain separately:

1. Review and deploy the native-coin escrow and community contracts compiled with the intended compiler/settings. The current batch deployment tool is **MST Mainnet specific**; do not use it as a generic Ethereum/Polygon/Optimism deployer.
2. Record chain ID, contract address, creation transaction, deployment block, ABI and compiled bytecode. Verify exact creation input, runtime, initialized signing domain and canonical confirmed receipt. A pasted address or explorer “Success” label is insufficient.
3. Extend the contract-reference validation, deployment registry and frontend/backend verification for that chain. The legacy `requireTestnet` path intentionally still rejects Mainnet contract references. `networkAvailability` is an additional UI gate, not an activation system or substitute for those checks.
4. Test sender approval, recipient claims, expiry/refund behavior and community allocations on the corresponding testnet. Repeat controlled Mainnet validation only after those checks.
5. Enable that feature for the verified chain and deploy the matching app/API configuration. Leave unrelated chains disabled.

## P2P remains a separate rollout

The active P2P escrow, private payment records and reference attestations remain bound to MST Testnet. The Testnet contract constructor rejects other public chains; its Mainnet counterpart is MST Mainnet specific. Neither can be deployed unchanged to Ethereum, Polygon or Optimism.

Before porting P2P, review a contract variant with explicit supported-chain rules; make deployment validation, offer records, private UPI snapshots, reference commitments and attestation signing chain-aware. Namespace by chain ID + contract + trade ID and test replay rejection between chains. Do not merely replace the RPC or contract address.

The buyer pays INR to the seller through an external UPI app. Matching independently submitted bank references prove agreement between participants, not bank settlement. This rollout adds no ZK proof, automatic bank verification, arbitrator or bank-freeze prediction. The existing real-INR/test-coin experiment is not a production trading launch.

## Phase-one product focus

Start with a small group of community organizers paying known contributors. Measure repeated use, successful payments, time to first payment and support requests. Use the networks those customers already hold assets on rather than requiring everyone to fund every chain.

For fundraising, describe enabled features separately from configured networks and deployed-but-inactive contracts. YC's published standard investment is $500,000 for accepted companies: $125,000 for 7%, plus $375,000 on an uncapped MFN SAFE that can add equity. Acceptance and investment are not guaranteed. Source: https://www.ycombinator.com/deal .
