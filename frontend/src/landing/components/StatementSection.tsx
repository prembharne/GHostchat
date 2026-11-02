import { LetterRevealText, type TextToken } from './LetterRevealText';
import type { SlideState } from '../utils/glowMath';

const statements = [
  'Your conversations, your people,\nyour payments. Together in one messenger,\nwith a wallet that stays yours.',
  'Connect your EVM wallet. Choose your @username.\nCreate your wallet-linked Matrix account\nand keep the conversation going.',
  'Message through Matrix.\nFind a recipient by @username.\nReview every payment in your wallet.',
  'Try P2P, step by step.\nSeller locks tMSTC. Buyer pays with UPI.\nBoth confirm the shared payment reference.',
  'Built for your community.\nChoose an EVM network for native payments.\nKeep conversations in one workspace.',
];
const details = [
  { label: '01 / ONE SHARED SPACE', text: 'For friends, builders and community contributors. Keep the conversation and its payment context together.' },
  { label: '02 / YOUR IDENTITY', text: 'Sign a wallet-ownership message in your wallet. Choose a public username; your mobile number stays private and is not verified.' },
  { label: '03 / CONVERSATIONS & CONTROL', text: 'Create encrypted direct chats and groups. Find registered people by username and review the recipient and amount before sending.' },
  { label: '04 / TEST THE COMPLETE FLOW', text: 'The P2P escrow holds testnet tMSTC; UPI transfers use real INR. Matching references show agreement, not independent bank verification.' },
  { label: '05 / WHAT COMES NEXT', text: 'Native transfers support supported EVM networks. Testnet payment contracts require verified deployments. Mainnet deployment is disabled; P2P stays on MST Testnet.' },
];
function tokenize(text: string): TextToken[] { return text.split(/(\n| )/).filter(Boolean).map(word => word === '\n' ? { type: 'br' } : word === ' ' ? { type: 'space' } : { type: 'word', text: word }); }
const tokens = statements.map(tokenize);
export function StatementSection({ slides, reduced }: { slides: SlideState[]; reduced: boolean }) {
  return <section className="statement" id="gc-story" aria-label="How GhostChat works"><div className="pin">
    {slides.map((slide, i) => reduced || slide.isActive ? <div key={i} className="stmt-slide" style={reduced ? undefined : { opacity: slide.opacity, transform: `translateY(${slide.translateY.toFixed(1)}px)` }}>
      <div className="gc-story-copy"><p className="gc-story-label">{details[i].label}</p><p className="stmt-text" aria-label={statements[i].replace(/\n/g, ' ')}><span aria-hidden="true"><LetterRevealText tokens={tokens[i]} progress={reduced ? 1 : slide.revealP} spread={0.16} ghostRgb={[70, 100, 90]} accentRgb={[0, 229, 192]} finalRgb={[255, 255, 255]}/></span></p><p className="gc-story-detail">{details[i].text}</p>{i === statements.length - 1 && <a className="gc-story-start" href="/start">Connect your wallet <span aria-hidden="true">→</span></a>}</div>
    </div> : null)}
  </div></section>;
}
