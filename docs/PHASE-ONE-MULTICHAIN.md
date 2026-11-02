# EVM wallets and testnet contract setup

## Current scope

The app discovers installed EIP-6963 Ethereum providers and presents a searchable wallet dialog. Users choose MetaMask, BridgeKey, Phantom's Ethereum provider, Rabby or another announced EVM wallet. A fresh visit with no saved wallet choice does not automatically open BridgeKey. A previously selected provider can reconnect on reload; choose **Choose another wallet** to switch.

An extension's advertised name is not an authenticity guarantee. Only the selected provider receives the connect request. Wallet support for a chain is separate from the app's chain configuration: Phantom, for example, cannot be assumed to support every custom EVM network. Solana accounts are not connected by this flow. Mobile WalletConnect is not included.

The registry includes 23 networks across 12 ecosystems:

| Ecosystem | Mainnet ID | Testnet ID |
| --- | ---: | ---: |
| MST | 4646 | 91562037 |
| Ethereum | 1 | 11155111 (Sepolia) |
| Polygon | 137 | 80002 (Amoy) |
| Optimism | 10 | 11155420 (OP Sepolia) |
| Arbitrum | 42161 | 421614 (Arbitrum Sepolia) |
| Base | 8453 | 84532 (Base Sepolia) |
| BNB Smart Chain | 56 | 97 |
| Avalanche | 43114 | 43113 (Fuji) |
| Celo | 42220 | 11142220 (Celo Sepolia) |
| Gnosis | 100 | 10200 (Chiado) |
| Linea | 59144 | 59141 (Linea Sepolia) |
| Scroll | 534352 | Retired; excluded |

Scroll Sepolia (534351) is rejected even by the legacy lookup. [Official retirement notice](https://docs.scroll.io/tr/developers/faucet/).

Direct native-coin transfers and balances are configured for these networks. Funds stay on the selected network. This does not add bridging, ERC-20 tokens, stablecoins, or arbitrary custom-chain support.

## Testnet deployment

1. Connect the desired wallet and complete wallet sign-in/profile setup.
2. Open `/setup` and choose an active testnet. Mainnet options are disabled.
3. Fund the selected wallet with that testnet's gas coin.
4. Choose **Deploy or resume testnet setup**. Approve the payment-link and community contract deployments in your wallet. There are two transactions, with zero payment deposit.
5. The app waits for two confirmations and checks exact creation input, runtime bytecode, chain ID, signing domain and canonical receipt before remembering the addresses.
6. Open Send, select the same testnet, then create a payment link or community fund. Share the resulting funded link/card; the recipient can verify the deployment proof in the link.

Saved pending transaction hashes prevent blindly deploying again after a timeout or refresh. A retry first checks the saved transaction. Verified addresses are saved by network in the browser; sharing a funded payment carries the contract address and creation proof. Merely adding an RPC or address does not bypass verification.

Mainnet deployment is also blocked by `requireTestnet` inside the setup transaction handler, independently of disabled UI options. Mainnet contract funding remains gated. The separate, existing MST Mainnet suite/deployment records do not activate Mainnet escrow in this UI.

## Identity and data

The API validates a single-use signed wallet challenge. Sessions remain bound to the wallet address. The same address retains its username and Matrix identity across chains; changing network does not clear device keys. Switching to a different address does not transfer that identity or its private UPI data.

Before sending, the client checks the public RPC chain ID, the wallet's actual selected chain and authorized account. Mainnet direct payments explicitly identify real coins and gas.

## P2P is still MST Testnet only

Payment-link/community portability does not port the P2P module. Existing P2P constructors, deployment validation, offer records, private UPI snapshots and reference attestations are MST-bound. Porting P2P needs reviewed contracts and chain + contract + trade namespaces across the backend, plus replay tests.

The buyer pays the seller externally through UPI. Matching submitted bank references establish participant agreement, not proof of bank settlement. No ZK proof, payment gateway, arbitrator or automatic bank-credit verification is added.

## Validation and rollout

- Frontend and server builds passed; the full frontend/server suites passed (94 and 48 tests respectively), with focused network/reference tests repeated after the registry update.
- Read-only checks returned the correct chain IDs for active registry endpoints across runs. Public RPCs can fail intermittently; a chain-ID response does not establish wallet support, CORS behavior, contract deployment or end-to-end settlement.
- A visual browser check was blocked by saved browser permissions; the user chose to handle that check.
- Hosted assets must be rebuilt and synced before Vercel deployment. Preserve `vercel-site/public/ops` during the sync. Publishing source to GitHub alone does not update the compiled asset snapshot.
- Testnet contract deployment still requires the user's wallet approvals. No Mainnet transaction is part of this update.

Useful commands:

```sh
npm run check:networks
npm run test:messenger
npm run build -w frontend
npm run build -w server
npm run test -w server
```
