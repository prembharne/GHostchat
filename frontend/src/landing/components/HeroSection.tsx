import { useEffect, useState } from 'react';
import { Button } from './Button';
import { LetterRevealText, type TextToken } from './LetterRevealText';

const tokens: TextToken[] = [
  { type: 'word', text: 'Meet' }, { type: 'space' }, { type: 'word', text: 'GhostChat.', isHighlight: true }, { type: 'br' },
  { type: 'word', text: 'Your' }, { type: 'space' }, { type: 'word', text: 'people.' }, { type: 'space' }, { type: 'word', text: 'Your' }, { type: 'space' }, { type: 'word', text: 'payments.' },
];
export function HeroSection({ paused }: { paused: boolean }) {
  const [progress, setProgress] = useState(paused ? 1 : 0);
  useEffect(() => {
    if (paused) { setProgress(1); return; }
    let frame = 0; let start: number | undefined;
    const tick = (now: number) => { start ??= now; const p = Math.min(1, (now - start) / 1250); setProgress(p); if (p < 1) frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame);
  }, [paused]);
  return <section className="hero" id="gc-hero" aria-label="Introduction">
    <h1 id="h1" aria-label="Meet GhostChat. Your people. Your payments."><span aria-hidden="true"><LetterRevealText tokens={tokens} progress={progress} spread={0.35} ghostRgb={[80, 110, 100]} accentRgb={[0, 229, 192]} finalRgb={[255, 255, 255]}/></span></h1>
    <p className="trust fade-up" style={{ '--d': '1.15s' } as React.CSSProperties}>Built with Matrix. Connected through your wallet.<small>Encrypted conversations, community groups and wallet-approved EVM payments. Start with a username. Keep it all in one messenger.</small><span className="gc-hero-note">MST, Ethereum, Polygon & Optimism native transfers · P2P escrow stays on MST Testnet</span></p>
    <div className="hero-cta fade-up" style={{ '--d': '1.3s' } as React.CSSProperties}><Button label="Get started" isLarge/></div>
  </section>;
}
