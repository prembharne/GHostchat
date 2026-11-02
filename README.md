# GhostChat

Encrypted Matrix conversations with EVM wallet identity, native-coin payments, community funding and peer-to-peer UPI trades in one workspace.

**Web app:** [ghostchat-rho.vercel.app](https://ghostchat-rho.vercel.app)
**Matrix homeserver:** [ghostchat-matrix-pune.duckdns.org](https://ghostchat-matrix-pune.duckdns.org)

GhostChat helps communities discuss work, pay contributors and share funded allocations without coordinating separate chat identities and manually copied wallet addresses. A registered username resolves to a wallet-linked account. Payment tools open inside the messenger; your selected browser wallet signs transactions.

## Current implementation

| Area | Implemented behavior |
| --- | --- |
| Identity | EIP-6963 browser wallet discovery (BridgeKey, MetaMask, Rabby), signed wallet ownership challenge, unique username and profile |
| Messaging | Matrix encrypted direct and group conversations; community spaces with General and Announcements |
| Chat tools | Attachments, voice notes, typing, read receipts, message status, search, profile photos, pin/mute/archive preferences and resizable conversation list |
| Recovery | Persisted sessions and device crypto storage, encrypted room-key export/import and device recovery controls |
| Payments | Direct native-coin transfers, recipient-authorized payment links and community allocations |
| P2P | Buyer-posted requests, seller-funded escrow, saved private UPI ID/QR and matching participant confirmations |

The local phase-one implementation prepares **direct native-coin transfers on MST, Ethereum, Polygon and Optimism**, with both Mainnet and Testnet choices. Contract payments and P2P currently use the existing **MST Testnet tMSTC** flow; new-network contract funding remains gated. These source changes have not been deployed to the public website. UPI transfers in this P2P flow use **real INR**, directly between participants. Test coins have no redeemable value. GhostChat does not collect INR or verify bank settlement.

## Account and messaging workflow

1. Open the app, choose Continue and select an installed EVM wallet such as [BridgeKey](https://bridgekey.io/), MetaMask or Rabby. With multiple extensions installed, select the intended provider.
2. Sign the single-use wallet ownership challenge. This signs you in; it does not authorize a payment.
3. Complete your name, unique username and private mobile field. Collecting the number does not verify it.
4. Open chat. The account relay issues a short-lived Matrix ticket; Synapse provisions or restores the wallet-linked account.
5. Start a conversation by username, create a group or create a community. General and Announcements are separate intentional channels inside a community.

Community creation coalesces repeated clicks and recovers interrupted setup through deterministic room aliases. Encrypted content needs the device's room keys: wallet sign-in alone cannot recreate missing chat keys. Keep an encrypted room-key backup and its password separately.

## Payments

### Direct transfer

Resolve a username or use a complete wallet address, enter the native-coin amount, review the recipient and approve in the selected wallet. Verify the network: Mainnet spends real coins, and the sender pays network gas. The recipient receives funds without executing a claim.

### Payment link

The sender deposits into `GhostPayNativeEscrow` with an expiry. A recipient requests approval for their wallet. The sender signs an EIP-712 authorization binding the payment ID, recipient and deadline. Only that recipient can claim. After expiry, the sender can reclaim an unclaimed payment. There is no owner withdrawal or upgrade path.

### Community fund

An organizer selects registered people and amounts, or divides a total pool equally across selected wallets. One transaction fixes up to 100 wallet allocations and deposits the exact total. Recipients choose **View my eligibility** and claim once from the allocated wallet before expiry. Community membership alone grants no financial entitlement. After expiry, the organizer can refund the unclaimed remainder.

Trusted pasted campaign URLs render as fund cards, including valid links already present in chat. No second funding transaction is needed to show the card. Titles, wallets and allocations are public on-chain.

## P2P trading

1. **Buyer posts a request:** token amount and desired INR rate. Market, My buy offers and My sell trades organize the requests.
2. **Seller selects the request:** the buyer and amounts come from its fixed terms. The seller saves their private UPI ID and QR once and reuses them.
3. **Seller locks tokens:** BridgeKey deposits the exact tMSTC into escrow. The assigned buyer can access that trade's seller payment snapshot after funding and attachment succeed.
4. **Buyer pays INR:** the buyer pays the exact amount to the seller using an external UPI app. The seller receives INR and does not pay their own QR.
5. **Both confirm independently:** the buyer enters the shared UPI transaction reference after paying. The seller checks their bank/UPI app, enters the same reference and confirms receipt. Each approves their own on-chain confirmation in BridgeKey.
6. **Escrow settles:** matching wallet-bound commitments release all locked tokens to the fixed buyer. Different references keep funds locked and allow an independently attested correction.

The relay normalizes an 8–32 character bank reference, creates a trade-scoped HMAC-SHA256 commitment, and signs EIP-712 data bound to chain, contract, trade and actor. Raw references are not stored in the confirmation table or returned to the counterparty. The relay processes the raw input and is inside the trust boundary.

**Matching references establish participant agreement, not proof of a bank credit.** Both people can agree on an invented reference. The active flow uses no zero-knowledge proof or payment gateway. App-specific receipt/order IDs may differ; both people must use the shared bank transaction reference.

Cancellation requires both participants' approvals to return tokens to the seller. This module has no arbitrator, unilateral seller reclaim or automatic timeout winner. Non-cooperation can leave funds locked. New confirmations depend on the relay signer remaining available.

Contract bounds: greater than zero and at most **10 native coins**, INR total **₹1–₹100,000**. These bounds do not recommend exchanging real money for test coins.

## Architecture and technical stack

| Component | Technology and responsibility |
| --- | --- |
| Browser | React 19, TypeScript, Vite 7, React Router, TanStack Query, Tailwind/CSS, Three.js backgrounds |
| Wallet | EIP-6963 injected wallet discovery, wagmi 2, viem 2; ethers 6 in the MST deployment tool |
| Messaging | matrix-js-sdk 44, encrypted attachments and Synapse |
| Application API | Node.js 24, Express 5, origin checks, rate limits, wallet challenges and hashed bearer sessions |
| Application data | SQLite and persistent server volumes; encrypted private profile and UPI records |
| Messaging data | Synapse PostgreSQL; browser device crypto storage; encrypted key backups |
| Contracts | Solidity 0.8.28, Hardhat 3, OpenZeppelin utilities; Paris EVM for native/community/Mainnet suite |
| Hosting | Vercel frontend/API proxy; AWS EC2 Docker Compose with Synapse, PostgreSQL, Caddy HTTPS and GhostChat API |

The API issues login tickets and reference attestations; it is not a gas-sponsoring transaction relayer. Users pay gas for their own transactions. The current native-link, community and mutual-confirmation contracts deduct no platform fee.

## Networks and deployments

| Network | Chain ID | Coin | Status |
| --- | --- | --- | --- |
| MST Testnet | 91562037 | tMSTC | Integrated application payment and P2P flow |
| MST Mainnet | 4646 | MSTC | Direct transfers prepared; deployed contracts await app activation |
| Ethereum / Sepolia | 1 / 11155111 | ETH | Direct transfers prepared; contract funding gated |
| Polygon / Amoy | 137 / 80002 | POL | Direct transfers prepared; contract funding gated |
| Optimism / OP Sepolia | 10 / 11155420 | ETH | Direct transfers prepared; contract funding gated |

Network configuration and a responding RPC do not constitute a verified contract deployment. The new-network funding gates are deliberate. Existing supported testnet links remain compatible with their proof checks. No bridge, ERC-20 or stablecoin integration is added. See [phase-one rollout and activation checks](docs/PHASE-ONE-MULTICHAIN.md).

### Mainnet addresses

<!-- MAINNET_DEPLOYMENT_START -->

Verified MST Mainnet deployment (chain 4646):

| Module | Address |
| --- | --- |
| Suite | [0xC6415aDfE9b2793200aDFB71918043F054ea5E11](https://mstscan.com/address/0xC6415aDfE9b2793200aDFB71918043F054ea5E11) |
| Payment links | [0x4Fa57c8F3046ceF96371EC181c1dc123F2516247](https://mstscan.com/address/0x4Fa57c8F3046ceF96371EC181c1dc123F2516247) |
| Community funds | [0xf94C7F000f6e39eB5fcF4079660D9cebdE298C00](https://mstscan.com/address/0xf94C7F000f6e39eB5fcF4079660D9cebdE298C00) |
| P2P escrow | [0x652bfc4fAE71303951B5f9D562B229b58233aB66](https://mstscan.com/address/0x652bfc4fAE71303951B5f9D562B229b58233aB66) |

[Deployment transaction](https://mstscan.com/tx/0xc53450bd1f98aa6ab29e4d78e5b27aab696205f8c1569fd9f5c1a2c113eadaa8). These contracts are deployed; the hosted application's Mainnet escrow integration remains disabled until separately configured and validated.

<!-- MAINNET_DEPLOYMENT_END -->

### One transaction deployment

```powershell
cd D:\hackathon\ghostpay-github
npm run deploy:mainnet:wallet
```

Open **http://127.0.0.1:5180** in the browser containing BridgeKey. Connect, review the gas estimate and acknowledgement, then choose **Deploy all three contracts**. One suite constructor creates `GhostPayNativeEscrow`, `GhostPayCommunity` and `GhostChatMainnetTrade`. Direct transfers need no contract.

The transaction sends zero principal and spends real MSTC on gas. The suite has no owner/admin powers. The tool reads no wallet private key. If the page closes after signing, use its recovery field with the existing hash instead of deploying again.

After two confirmations, the tool verifies exact creation input and all runtime bytecodes, writes `deployments/mst-mainnet.json` and updates this README. It never commits, pushes, deploys Vercel or enables Mainnet trading. Preserve the suite build-info: imported child bytecode metadata belongs to the suite compilation job.

Before Mainnet application activation, configure chain-aware frontend discovery, backend contract validation, deployment records, signature domains, private-trade storage namespaces and payment services for chain 4646. Validate the complete workflow with controlled amounts. Pasting Mainnet addresses into the Testnet service is insufficient. The contracts are experimental and unaudited.

## Local installation

Use Node.js 24, npm, an EIP-6963 EVM browser wallet, a reachable Matrix homeserver and Testnet coins for transaction testing.

```sh
npm install
npm run compile
npm run build:services
```

Copy `.env.example` to the ignored root `.env`. Configure active settings privately:

| Setting | Purpose |
| --- | --- |
| `MST_RPC_URL` | Testnet RPC endpoint |
| `MST_MAINNET_RPC_URL` | Mainnet inspection/deployment endpoint |
| `FRONTEND_ORIGIN` | Allowed browser origins, including the Vercel URL |
| `PROFILE_ENCRYPTION_KEY` | Stable private profile encryption key |
| `MATRIX_HOMESERVER` | HTTPS homeserver origin |
| `MATRIX_JWT_SECRET` | Private secret shared by the account API and Synapse |
| `VITE_MATRIX_HOMESERVER` | Optional public setting in `frontend/.env.local` |

Use `infra/matrix` configuration scripts for server setup. Keep existing encryption keys stable and backed up. No gateway credentials are needed for the current UPI flow. Never put signing or encryption secrets in `VITE_` variables.

```sh
npm start
# or development watchers:
npm run dev
```

Frontend: http://localhost:5173. API: http://127.0.0.1:3001. `/` is the landing page, `/start` handles onboarding, `/chat` opens messaging. `/trade`, `/payments`, `/create` and campaign/payment links open workspace tools.

## Repository map

| Path | Responsibility |
| --- | --- |
| `frontend/src/messenger` | Matrix client, sessions, rooms and chat controls |
| `frontend/src/wallet` | EVM wallet selection, login, profiles and session restoration |
| `frontend/src/payments` | Transfers, links, allocations, claims and activity |
| `frontend/src/p2p` | Offer board, private UPI details and confirmations |
| `server/src` | Account API, private storage and chain validation |
| `shared` | Networks, identities and signed payload definitions |
| `contracts/contracts` | Solidity payment modules |
| `infra/matrix` | EC2, Docker, Synapse, PostgreSQL and Caddy configuration |
| `scripts/mainnet-deployment` | Local BridgeKey batch deployer and receipt verifier |
| `deployments` | Public deployment records |
| `vercel-site` | Hosted assets and API proxy allowlist |

## Operations and validation

Build the frontend using `npm run build -w frontend`; `node scripts/sync-vercel.mjs` prepares Vercel assets. Preserve required operations assets when refreshing that directory. The proxy forwards permitted API routes to the configured EC2 origin.

The EC2 bundle lives at `/home/ubuntu/ghostchat-matrix`; the app service is `ghostchat-api`. Use explicit Compose paths to avoid inherited relative `COMPOSE_FILE` errors:

```sh
sudo docker compose --project-directory /home/ubuntu/ghostchat-matrix \
  -f /home/ubuntu/ghostchat-matrix/compose.yaml \
  -f /home/ubuntu/ghostchat-matrix/relay.compose.yaml ps
```

Back up PostgreSQL, Synapse data, relay databases, profile/UPI keys and JWT settings. Keep browser room-key backups. Frontend hosting alone cannot provide messaging without the Matrix and account services.

```sh
npm run test -w contracts
npm run test -w server
npm run test:messenger
npm run check:networks
npm run test:matrix
npm run build -w frontend
```

Mainnet suite tests use a local EVM with chain ID 4646 to check atomic deployment, exact child runtimes and mutual confirmation settlement. Tests also reject deploying the suite on Testnet. Local tests do not establish an external Mainnet deployment or bank payment.

## Security and practical limits

- Matrix encrypts room content; membership, community names and timing metadata can remain visible. Device verification and key backups matter.
- Wallet ownership proves key control, not legal identity. Username resolution relies on the application directory.
- Private UPI details stay out of public offers, chain events and chat shares. The server can decrypt them; an authorized participant can copy what they see.
- Wallets, amounts, allocations, commitments and transaction activity are public on-chain.
- UPI reference equality is mutual confirmation, not independent bank verification or a ZK proof.
- Users currently pay network gas. A backend proxy/signer does not make transactions gasless.

## Project documents

- [Current implementation documentation](docs/GhostChat-Current-Implementation.docx)
- [Current implementation presentation](docs/GhostChat-Current-Implementation.pptx)
- [Phase-one multichain rollout](docs/PHASE-ONE-MULTICHAIN.md)
- [Mainnet batch deployment instructions](docs/MAINNET-BATCH-DEPLOYMENT.md)

Maintainer: **Prem Bharne**, Pune, India. Public contact: **prembhrane455@gmail.com**.
