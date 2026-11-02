import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Hex } from 'viem';
import { Check, ExternalLink, Rocket } from 'lucide-react';
import { phaseOneNetworks, paymentNetwork } from '../../../shared/phaseOneNetworks';
import { requireTestnet } from '../../../shared/nativeProtocol';
import { useNativeWallet } from '../payments/useNativeWallet';
import { nativeClient, nativeArtifact, verifyNativeEscrow, rememberedEscrow, rememberedCreation, rememberEscrow } from '../payments/native';
import { communityArtifact, verifyCommunity, savedCommunity, communityCreation, saveCommunity } from '../payments/community';
import { useAction } from '../hooks/useAction';
import { BridgeKeyConnect } from '../wallet/BridgeKeyConnect';
const pendingKey = (id:number, kind:string) => `ghostchat.testnet.setup.${id}.${kind}`;
function pendingHash(id:number, kind:string):Hex|undefined { try { const h=localStorage.getItem(pendingKey(id,kind));return h && /^0x[\da-f]{64}$/i.test(h)?h as Hex:undefined; } catch { return; } }
export function Setup({onBusyChange}:{onBusyChange?(busy:boolean):void}={}) {
  const [id,setId]=useState(11155111); const network=paymentNetwork(id);const wallet=useNativeWallet(id);const action=useAction();
  const [records,setRecords]=useState<{kind:string;address:string;hash:string}[]>([]);
  useEffect(()=>{onBusyChange?.(action.busy);},[action.busy,onBusyChange]);
  useEffect(()=>()=>onBusyChange?.(false),[onBusyChange]);
  async function deploy(){await action.run(async()=>{
    requireTestnet(id); // Runtime gate, independent of the disabled Mainnet options.
    const result:typeof records=[];
    for(const kind of ['native','community'] as const){
      const old=kind==='native'?rememberedEscrow(id):savedCommunity(id);
      const proof=old?(kind==='native'?rememberedCreation(id,old):communityCreation(id,old)):'';
      const verify=(address:string,hash:string)=>kind==='native'?verifyNativeEscrow(id,address,hash):verifyCommunity(id,address,hash);
      if(old&&proof){const address=await verify(old,proof);result.push({kind,address,hash:proof});setRecords([...result]);continue;}
      let hash=pendingHash(id,kind);
      const client=nativeClient(id);
      if(!hash){
        const artifact=await(kind==='native'?nativeArtifact():communityArtifact());
        const signer=await wallet.wallet();
        action.setNotice(`Approve ${kind==='native'?'payment-link':'community fund'} deployment on ${network.name}. No payment deposit is sent.`);
        hash=await signer.sendTransaction({data:artifact.bytecode,value:0n});
        // Save immediately; a retry checks the same transaction instead of deploying twice.
        localStorage.setItem(pendingKey(id,kind),hash);
      }
      action.setNotice(`Waiting for two confirmations of the ${kind} deployment…`);
      const receipt=await client.waitForTransactionReceipt({hash,confirmations:2,timeout:180000});
      if(receipt.status!=='success'){localStorage.removeItem(pendingKey(id,kind));throw new Error('Deployment reverted. Review the explorer transaction before retrying.');}
      if(!receipt.contractAddress)throw new Error('The confirmed transaction did not create a contract.');
      const address=await verify(receipt.contractAddress,hash);
      if(kind==='native')rememberEscrow(id,address,hash);else saveCommunity(id,address,hash);
      localStorage.removeItem(pendingKey(id,kind));result.push({kind,address,hash});setRecords([...result]);
    }
    action.setNotice(`Both contracts are verified on ${network.name}. Open Send to create a payment link or community fund.`);
  });}
  return <section className="page setup-page"><div className="page-heading"><span className="section-kicker">EVM TESTNET SETUP</span><h1>Payment contracts.<br/><em>Your chosen testnet.</em></h1><p>Deploy and verify payment-link and community-fund contracts using your selected wallet. Two wallet approvals; zero payment deposit. Testnet gas is required.</p></div><div className="panel form-panel">
    <label htmlFor="deployment-network">Network</label><select id="deployment-network" value={id} disabled={action.busy} onChange={e=>{setId(Number(e.target.value));setRecords([]);action.setError('');action.setNotice('');}}>{phaseOneNetworks.map(n=><option key={n.id} value={n.id} disabled={!n.testnet}>{n.name} · {n.id}{!n.testnet?' · Mainnet deployment disabled':''}</option>)}</select>
    <p className="ms-fine">Mainnets are available for wallet balances and direct payments. This setup cannot deploy on Mainnet. P2P escrow remains on MST Testnet.</p>
    {!wallet.address?<BridgeKeyConnect disabled={action.busy}/>:<><p className="ms-fine">Connected: {wallet.address}</p><BridgeKeyConnect compact disabled={action.busy}/><button type="button" className="ms-button ms-primary ms-full" disabled={action.busy||!network.testnet} onClick={()=>{void deploy();}}><Rocket size={17}/>{action.busy?'Checking wallet / deployment…':'Deploy or resume testnet setup'}</button></>}
    {records.map(r=><p className="ms-fine" key={r.kind}><Check size={15}/>{r.kind==='native'?'Payment links':'Community funds'}<br/><a href={`${network.explorer}/address/${r.address}`} target="_blank" rel="noreferrer">{r.address}<ExternalLink size={13}/></a></p>)}
    {action.error&&<p className="ms-alert" role="alert">{action.error}</p>}{action.notice&&<p className="ms-fine" role="status">{action.notice}</p>}
    <Link className="ms-button ms-secondary" to="/create">Open payment tools</Link>
  </div></section>;
}
