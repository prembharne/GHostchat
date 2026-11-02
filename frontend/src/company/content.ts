export const project = {
  name: 'GhostChat',
  founder: 'Prem Bharne',
  email: 'prembhrane455@gmail.com',
  repository: 'https://github.com/prembharne/GHostPay',
  audience: 'People and communities who want messaging and payments in one place',
  description: 'Bring Matrix messaging, wallet-linked usernames, EVM native payments and a P2P test trading flow into one messenger.',
  updated: 'November 2, 2026',
};

export const informationPaths = ['/about', '/demo', '/privacy', '/terms', '/contact'] as const;
export const isInformationPath = (path: string) => informationPaths.some(route => route === path.replace(/\/$/, ''));

export const walkthrough = [
  { title: 'Create your account', role: 'You', text: 'Connect an installed EVM wallet such as BridgeKey, MetaMask or Rabby, sign a wallet ownership message, then choose your name, mobile number and unique @username.', detail: 'Your username links to your wallet for payment lookup. Your mobile number is private and collecting it does not verify ownership. Keep your wallet recovery phrase private.', to: '/start', action: 'Get started' },
  { title: 'Connect your conversations', role: 'You and your contacts', text: 'Your wallet-linked Matrix account is created automatically on first connection when the server is configured. Your chat list, conversation and payment tools share one workspace.', detail: 'Live messaging requires a configured Matrix homeserver. Encryption and recovery use Matrix’s own setup; a local preview is not a delivered or encrypted conversation.', to: '/chat', action: 'Open the messenger' },
  { title: 'Send a native payment', role: 'Sender and recipient', text: 'Look up a registered @username, review the exact wallet and selected network, then send its native coin. Payment links and community allocations currently use the verified MST Testnet flow.', detail: 'Review every wallet approval. Direct transfers have no escrow refund; payment links and community allocations have their own claim and expiry rules.', to: '/create', action: 'Explore payments' },
  { title: 'Try P2P trading', role: 'Seller and buyer', text: 'The buyer posts a request; a seller locks tMSTC for that buyer. The buyer sees the private seller UPI details and pays using an external UPI app.', detail: 'UPI uses real INR while tMSTC is a test asset with no redeemable value. Both wallets need testnet gas. GhostChat does not verify bank settlement.', to: '/trade', action: 'Explore the P2P demo' },
  { title: 'Verify and release', role: 'Buyer', text: 'Buyer and seller independently confirm the shared bank transaction reference. Matching wallet-bound commitments release the escrowed tMSTC to the fixed buyer.', detail: 'The server attests reference commitments, not bank credits. This is not a ZK proof. Cancellation requires both participants; non-cooperation can leave tokens locked.', to: '/trade', action: 'Open test trading' },
] as const;
