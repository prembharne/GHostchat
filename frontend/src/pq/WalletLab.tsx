import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '../hooks/useAction';
import { createWalletLab } from './walletLabModel';
import './wallet-lab.css';

export default function WalletLab() {
  const action = useAction();
  const [lab, setLab] = useState<ReturnType<typeof createWalletLab>>();
  const [amount, setAmount] = useState('5');
  const state = lab?.snapshot();

  function simulate(mode: 'hybrid' | 'classical' | 'tampered') {
    void action.run(async () => {
      if (!lab) return;
      const accepted = await lab.simulate(Number(amount), mode);
      action.setNotice(accepted ? 'Approved. The simulated balance was debited.'
        : mode === 'classical' ? 'Rejected. The post-quantum signature was missing.'
        : 'Rejected. The signed amount did not match the submitted amount.');
    });
  }

  return <main className="pq-lab">
    <header><Link to="/start">← Back to sign-in</Link><span>GhostChat Labs</span></header>
    <section className="pq-card" aria-labelledby="pq-title" aria-busy={action.busy}>
      <p className="pq-label">Browser experiment · no funds</p>
      <h1 id="pq-title">Post-quantum wallet lab</h1>
      <p>Try a simulated wallet that requires both an EIP-712 signature and an ML-DSA-65 signature. The demo signs an action labeled Sepolia → MST Testnet. Test keys and balances reset on reload.</p>
      {!lab || !state ? <button type="button" className="pq-primary" disabled={action.busy} onClick={() => {
        void action.run(async () => { setLab(createWalletLab()); action.setNotice('Test wallet created.'); });
      }}>Create test wallet</button> : <>
        <dl>
          <dt>Demo account ID</dt><dd>{lab.id}</dd>
          <dt>Current EVM signer</dt><dd>{state.signer}</dd>
          <dt>Simulated balance</dt><dd>{state.balance} test units</dd>
        </dl>
        <label htmlFor="pq-amount">Test transfer amount</label>
        <input id="pq-amount" type="number" min={1} max={state.balance} step={1} value={amount}
          disabled={action.busy} onChange={event => setAmount(event.target.value)}/>
        <div className="pq-actions">
          <button className="pq-primary" disabled={action.busy} onClick={() => simulate('hybrid')}>Approve with both keys</button>
          <button disabled={action.busy} onClick={() => simulate('classical')}>Try EIP-712 only</button>
          <button disabled={action.busy} onClick={() => simulate('tampered')}>Try changed amount</button>
          <button disabled={action.busy} onClick={() => { void action.run(async () => {
            await lab.rotate(); action.setNotice('Signer rotated. The demo account ID and balance stayed the same.');
          }); }}>Rotate signer keys</button>
          <button disabled={action.busy || !state.canCheckLast} onClick={() => { void action.run(async () => {
            const accepted = await lab.replayLastTransfer();
            action.setNotice(accepted ? 'Replay accepted.' : 'Replay rejected. Balance unchanged.');
          }); }}>Replay last transfer</button>
          <button disabled={action.busy || !state.canCheckLast} onClick={() => { void action.run(async () => {
            const valid = await lab.checkLastAuthorization();
            action.setNotice(valid ? 'The previous signature still matches the current signer. No transfer was executed.'
              : 'The previous signature is invalid for the current signer or has expired.');
          }); }}>Check previous signature</button>
        </div>
      </>}
      {action.notice && <p className="pq-status" role="status">{action.notice}</p>}
      {action.error && <p className="pq-error" role="alert">{action.error}</p>}
      <small>Verification runs in this browser. Google enrollment and on-chain smart-account enforcement are separate milestones.</small>
    </section>
  </main>;
}
