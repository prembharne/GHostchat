const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WalletDialog-C0EPoeRE.js","assets/index-u3E-X_7w.js","assets/index-CVzUanO9.css","assets/TradePage-B3Wq3OSo.js","assets/secp256k1-IZ7vEGEX.js","assets/TradePage-Cl9XfiEK.css","assets/Dashboard-T4rTs8KZ.js","assets/UI-dBi5fHFI.js","assets/Setup-Cob5wrhF.js","assets/PaymentPage-DFWOCYV_.js"])))=>i.map(i=>d[i]);
import{b7 as Rl,b8 as Tu,b9 as Au,ba as Qf,bb as Nl,bc as Pl,bd as Il,be as ep,B as wn,bf as Ll,h as Cu,bg as ks,bh as Ru,ap as Jt,bi as Ds,a as ra,bj as tp,bk as ss,bl as dt,bm as ri,bn as Nu,bo as np,bp as aa,bq as Xs,br as Pu,bs as qs,bt as Iu,bu as st,bv as It,bw as Lu,bx as wc,by as Ec,ai as Tt,bz as Dl,bA as ip,bB as Du,bC as Bt,bD as Uu,bE as sp,bF as rp,bG as hs,bH as Fu,bI as Ul,bJ as ap,bK as op,e as Tc,bL as cp,bM as lp,bN as Ou,bO as oa,bP as ai,bQ as Ac,bR as dp,i as zr,bS as up,aq as Fl,bT as hp,bU as fp,bV as bi,bW as fs,bX as hn,bY as Bs,bZ as ku,b_ as pp,b$ as Cc,c0 as Sn,c1 as mp,c2 as gp,c3 as xp,c4 as vp,c5 as $s,c6 as Bu,c7 as _p,c8 as yp,c9 as bp,ca as Sp,cb as Mp,cc as zu,cd as wp,ce as Ep,cf as Tp,cg as go,ch as $i,ci as xo,am as rs,cj as Hr,ck as Ap,c as Rc,cl as Hu,cm as Cp,cn as Rp,co as Np,cp as Ol,cq as Pp,cr as Ip,cs as Lp,ct as Vu,cu as kl,ak as Dp,cv as Up,cw as Fp,cx as Op,s as as,cy as os,cz as ca,cA as Gu,al as cs,cB as ju,cC as Wu,cD as Nc,cE as Pc,cF as Ic,cG as Ji,cH as la,cI as Xu,cJ as kp,ah as yi,cK as Bp,cL as zp,cM as Hp,cN as Vp,cO as Gp,cP as jp,cQ as Wp,cR as Xp,cS as qp,cT as $p,cU as Yp,cV as Kp,cW as Zp,cX as Jp,cY as Qp,cZ as em,c_ as tm,c$ as cr,d0 as qu,d1 as nm,d2 as im,d3 as sm,d4 as rm,d5 as $u,Q as am,d6 as om,d7 as cm,d8 as lm,T as Lc,d9 as dm,da as um,db as hm,dc as fm,V as pm,j as rt,dd as Vr,r as L,de as vo,df as tt,k as o,dg as Yu,dh as wa,di as mm,dj as Ea,q as Ys,dk as Ai,W as Ci,S as zt,ao as gm,dl as xm,dm as Ku,a0 as Xt,M as Un,t as oi,v as _o,E as jt,F as yo,G as Us,dn as vm,$ as _m,dp as ym,u as ps,x as bm,dq as bo,dr as Ri,ds as cn,X as Zu,l as Sm,dt as Qt,du as mi,dv as Mm,C as fn,dw as Ju,n as Ni,dx as wm,dy as Qu,dz as Em,dA as Fn,dB as Tm,dC as Bl,dD as zl,dE as Hl,dF as Am,a2 as Vl,a1 as Ks,a3 as Cm,dG as zs,dH as Rm,z as Et,dI as eh,dJ as Yt,dK as gi,o as th,aj as nh,L as Wn,A as Hs,dL as Nm,dM as Pm,dN as Gl,dO as jl,D as Zs,K as Qi,w as Im,Y as es,dP as Wl,dQ as Lm,J as ih,dR as Dm,dS as Kn,dT as sh,an as Um,dU as Fm,dV as rh,dW as Om,dX as km}from"./index-u3E-X_7w.js";import{l as Dc}from"./WalletDialog-C0EPoeRE.js";import{secp256k1 as Bm}from"./secp256k1-IZ7vEGEX.js";function Xl(n){let e;if(typeof n=="string")e=Rl(n);else{const t=Tu(n),i=n.length;for(let s=0;s<i;s++){const r=n[s];if(!Au(r)){e=Rl(r,t);break}}}if(!e)throw new Qf({signature:n});return e}function ql(n){const e=[];if(typeof n=="string"){const t=Nl(n),i=t.length;for(let s=0;s<i;s++)e.push(Pl(t[s],{modifiers:Il}))}else{const t=Tu(n),i=n.length;for(let s=0;s<i;s++){const r=n[s];if(Au(r))continue;const a=Nl(r),c=a.length;for(let l=0;l<c;l++)e.push(Pl(a[l],{modifiers:Il,structs:t}))}}if(e.length===0)throw new ep({params:n});return e}function Uc(n){if(!(n instanceof wn))return!1;const e=n.walk(t=>t instanceof Ll);return e instanceof Ll?e.data?.errorName==="HttpError"||e.data?.errorName==="ResolverError"||e.data?.errorName==="ResolverNotContract"||e.data?.errorName==="ResolverNotFound"||e.data?.errorName==="ReverseAddressMismatch"||e.data?.errorName==="UnsupportedResolverProfile":!1}function ah(n){if(n.length!==66||n.indexOf("[")!==0||n.indexOf("]")!==65)return null;const e=`0x${n.slice(1,65)}`;return Cu(e)?e:null}function So(n){let e=new Uint8Array(32).fill(0);if(!n)return ks(e);const t=n.split(".");for(let i=t.length-1;i>=0;i-=1){const s=ah(t[i]),r=s?Ru(s):Jt(Ds(t[i]),"bytes");e=Jt(ra([e,r]),"bytes")}return ks(e)}function zm(n){return`[${n.slice(2)}]`}function Hm(n){const e=new Uint8Array(32).fill(0);return n?ah(n)||Jt(Ds(n)):ks(e)}function Fc(n){const e=n.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const t=new Uint8Array(Ds(e).byteLength+2);let i=0;const s=e.split(".");for(let r=0;r<s.length;r++){let a=Ds(s[r]);a.byteLength>255&&(a=Ds(zm(Hm(s[r])))),t[i]=a.length,t.set(a,i+1),i+=a.length+1}return t.byteLength!==i+1?t.slice(0,i+1):t}function Js(n,e){if(Yi(n)>e)throw new tg({givenSize:Yi(n),maxSize:e})}const Rn={zero:48,nine:57,A:65,F:70,a:97,f:102};function $l(n){if(n>=Rn.zero&&n<=Rn.nine)return n-Rn.zero;if(n>=Rn.A&&n<=Rn.F)return n-(Rn.A-10);if(n>=Rn.a&&n<=Rn.f)return n-(Rn.a-10)}function Vm(n,e={}){const{dir:t,size:i=32}=e;if(i===0)return n;if(n.length>i)throw new ng({size:n.length,targetSize:i,type:"Bytes"});const s=new Uint8Array(i);for(let r=0;r<i;r++){const a=t==="right";s[a?r:i-r-1]=n[a?r:n.length-r-1]}return s}function oh(n,e={}){const{dir:t="left"}=e;let i=n,s=0;for(let r=0;r<i.length-1&&i[t==="left"?r:i.length-r-1].toString()==="0";r++)s++;return i=t==="left"?i.slice(s):i.slice(0,i.length-s),i}const Gm=new TextDecoder,jm=new TextEncoder;function Wm(n){return n instanceof Uint8Array?n:typeof n=="string"?ch(n):Xm(n)}function Xm(n){return n instanceof Uint8Array?n:new Uint8Array(n)}function ch(n,e={}){const{size:t}=e;let i=n;t&&(tp(n,t),i=ss(n,t));let s=i.slice(2);s.length%2&&(s=`0${s}`);const r=s.length/2,a=new Uint8Array(r);for(let c=0,l=0;c<r;c++){const d=$l(s.charCodeAt(l++)),u=$l(s.charCodeAt(l++));if(d===void 0||u===void 0)throw new dt(`Invalid byte sequence ("${s[l-2]}${s[l-1]}" in "${s}").`);a[c]=d<<4|u}return a}function qm(n,e={}){const{size:t}=e,i=jm.encode(n);return typeof t=="number"?(Js(i,t),$m(i,t)):i}function $m(n,e){return Vm(n,{dir:"right",size:e})}function Yi(n){return n.length}function Ym(n,e,t,i={}){const{strict:s}=i;return n.slice(e,t)}function Km(n,e={}){const{size:t}=e;typeof t<"u"&&Js(n,t);const i=ri(n,e);return np(i,e)}function Zm(n,e={}){const{size:t}=e;let i=n;if(typeof t<"u"&&(Js(i,t),i=lh(i)),i.length>1||i[0]>1)throw new eg(i);return!!i[0]}function Bn(n,e={}){const{size:t}=e;typeof t<"u"&&Js(n,t);const i=ri(n,e);return Nu(i,e)}function Jm(n,e={}){const{size:t}=e;let i=n;return typeof t<"u"&&(Js(i,t),i=Qm(i)),Gm.decode(i)}function lh(n){return oh(n,{dir:"left"})}function Qm(n){return oh(n,{dir:"right"})}class eg extends dt{constructor(e){super(`Bytes value \`${e}\` is not a valid boolean.`,{metaMessages:["The bytes array must contain a single byte of either a `0` or `1` value."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.InvalidBytesBooleanError"})}}class tg extends dt{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeOverflowError"})}}class ng extends dt{constructor({size:e,targetSize:t,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeExceedsPaddingSizeError"})}}async function ig(n,e){const{blockNumber:t,blockTag:i,coinType:s,name:r,gatewayUrls:a,strict:c}=e,{chain:l}=n,d=(()=>{if(e.universalResolverAddress)return e.universalResolverAddress;if(!l)throw new Error("client chain not configured. universalResolverAddress is required.");return aa({blockNumber:t,chain:l,contract:"ensUniversalResolver"})})(),u=l?.ensTlds;if(u&&!u.some(h=>r.endsWith(h)))return null;const f=s!=null?[So(r),BigInt(s)]:[So(r)];try{const h=Xs({abi:Pu,functionName:"addr",args:f}),m={address:d,abi:Iu,functionName:"resolveWithGateways",args:[qs(Fc(r)),h,a??[Dc]],blockNumber:t,blockTag:i},y=await st(n,It,"readContract")(m);if(y[0]==="0x")return null;const g=sg({coinType:s,data:y[0],args:f});return g==="0x"||Lu(g)==="0x00"?null:g}catch(h){if(c)throw h;if(Uc(h))return null;throw h}}function sg({coinType:n,data:e,args:t}){try{return wc({abi:Pu,args:t,functionName:"addr",data:e})}catch(i){if(n==null)throw i;const s=Lu(e);if(Ec(s)===20)return Tt(s);throw i}}class rg extends wn{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`],name:"EnsAvatarInvalidMetadataError"})}}class vs extends wn{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:"EnsAvatarInvalidNftUriError"})}}class Oc extends wn{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:"EnsAvatarUriResolutionError"})}}class ag extends wn{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:"EnsAvatarUnsupportedNamespaceError"})}}const og=/(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,cg=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,lg=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,dg=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function ug(n){try{const e=await fetch(n,{method:"HEAD"});return e.status===200?e.headers.get("content-type")?.startsWith("image/"):!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!Object.hasOwn(globalThis,"Image")?!1:new Promise(t=>{const i=new Image;i.onload=()=>{t(!0)},i.onerror=()=>{t(!1)},i.src=n})}}function Yl(n,e){return n?n.endsWith("/")?n.slice(0,-1):n:e}function dh({uri:n,gatewayUrls:e}){const t=lg.test(n);if(t)return{uri:n,isOnChain:!0,isEncoded:t};const i=Yl(e?.ipfs,"https://ipfs.io"),s=Yl(e?.arweave,"https://arweave.net"),r=n.match(og),{protocol:a,subpath:c,target:l,subtarget:d=""}=r?.groups||{},u=a==="ipns:/"||c==="ipns/",f=a==="ipfs:/"||c==="ipfs/"||cg.test(n);if(n.startsWith("http")&&!u&&!f){let m=n;return e?.arweave&&(m=n.replace(/https:\/\/arweave.net/g,e?.arweave)),{uri:m,isOnChain:!1,isEncoded:!1}}if((u||f)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${d}`,isOnChain:!1,isEncoded:!1};if(a==="ar:/"&&l)return{uri:`${s}/${l}${d||""}`,isOnChain:!1,isEncoded:!1};let h=n.replace(dg,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new Oc({uri:n})}function uh(n){if(typeof n!="object"||!("image"in n)&&!("image_url"in n)&&!("image_data"in n))throw new rg({data:n});return n.image||n.image_url||n.image_data}async function hg({gatewayUrls:n,uri:e}){try{const t=await fetch(e).then(s=>s.json());return await kc({gatewayUrls:n,uri:uh(t)})}catch{throw new Oc({uri:e})}}async function kc({gatewayUrls:n,uri:e}){const{uri:t,isOnChain:i}=dh({uri:e,gatewayUrls:n});if(i||await ug(t))return t;throw new Oc({uri:e})}function fg(n){let e=n;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[t,i,s]=e.split("/"),[r,a]=t.split(":"),[c,l]=i.split(":");if(!r||r.toLowerCase()!=="eip155")throw new vs({reason:"Only EIP-155 supported"});if(!a)throw new vs({reason:"Chain ID not found"});if(!l)throw new vs({reason:"Contract address not found"});if(!s)throw new vs({reason:"Token ID not found"});if(!c)throw new vs({reason:"ERC namespace not found"});return{chainID:Number.parseInt(a,10),namespace:c.toLowerCase(),contractAddress:l,tokenID:s}}async function pg(n,{nft:e}){if(e.namespace==="erc721")return It(n,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return It(n,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new ag({namespace:e.namespace})}async function mg(n,{gatewayUrls:e,record:t}){return/eip155:/i.test(t)?gg(n,{gatewayUrls:e,record:t}):kc({uri:t,gatewayUrls:e})}async function gg(n,{gatewayUrls:e,record:t}){const i=fg(t),s=await pg(n,{nft:i}),{uri:r,isOnChain:a,isEncoded:c}=dh({uri:s,gatewayUrls:e});if(a&&(r.includes("data:application/json;base64,")||r.startsWith("{"))){const d=c?atob(r.replace("data:application/json;base64,","")):r,u=JSON.parse(d);return kc({uri:uh(u),gatewayUrls:e})}let l=i.tokenID;return i.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),hg({gatewayUrls:e,uri:r.replace(/(?:0x)?{id}/,l)})}async function hh(n,e){const{blockNumber:t,blockTag:i,key:s,name:r,gatewayUrls:a,strict:c}=e,{chain:l}=n,d=(()=>{if(e.universalResolverAddress)return e.universalResolverAddress;if(!l)throw new Error("client chain not configured. universalResolverAddress is required.");return aa({blockNumber:t,chain:l,contract:"ensUniversalResolver"})})(),u=l?.ensTlds;if(u&&!u.some(f=>r.endsWith(f)))return null;try{const f={address:d,abi:Iu,args:[qs(Fc(r)),Xs({abi:Dl,functionName:"text",args:[So(r),s]}),a??[Dc]],functionName:"resolveWithGateways",blockNumber:t,blockTag:i},m=await st(n,It,"readContract")(f);if(m[0]==="0x")return null;const x=wc({abi:Dl,functionName:"text",data:m[0]});return x===""?null:x}catch(f){if(c)throw f;if(Uc(f))return null;throw f}}async function xg(n,{blockNumber:e,blockTag:t,assetGatewayUrls:i,name:s,gatewayUrls:r,strict:a,universalResolverAddress:c}){const l=await st(n,hh,"getEnsText")({blockNumber:e,blockTag:t,key:"avatar",name:s,universalResolverAddress:c,gatewayUrls:r,strict:a});if(!l)return null;try{return await mg(n,{record:l,gatewayUrls:i})}catch{return null}}async function vg(n,e){const{address:t,blockNumber:i,blockTag:s,coinType:r=60n,gatewayUrls:a,strict:c}=e,{chain:l}=n,d=(()=>{if(e.universalResolverAddress)return e.universalResolverAddress;if(!l)throw new Error("client chain not configured. universalResolverAddress is required.");return aa({blockNumber:i,chain:l,contract:"ensUniversalResolver"})})();try{const u={address:d,abi:ip,args:[t,r,a??[Dc]],functionName:"reverseWithGateways",blockNumber:i,blockTag:s},f=st(n,It,"readContract"),[h]=await f(u);return h||null}catch(u){if(c)throw u;if(Uc(u))return null;throw u}}async function _g(n,e){const{blockNumber:t,blockTag:i,name:s}=e,{chain:r}=n,a=(()=>{if(e.universalResolverAddress)return e.universalResolverAddress;if(!r)throw new Error("client chain not configured. universalResolverAddress is required.");return aa({blockNumber:t,chain:r,contract:"ensUniversalResolver"})})(),c=r?.ensTlds;if(c&&!c.some(d=>s.endsWith(d)))throw new Error(`${s} is not a valid ENS TLD (${c?.join(", ")}) for chain "${r.name}" (id: ${r.id}).`);const[l]=await st(n,It,"readContract")({address:a,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"},{type:"uint256"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[qs(Fc(s))],blockNumber:t,blockTag:i});return l}async function yg(n,e){const{account:t=n.account,blockNumber:i,blockTag:s="latest",blobs:r,data:a,gas:c,gasPrice:l,maxFeePerBlobGas:d,maxFeePerGas:u,maxPriorityFeePerGas:f,to:h,value:m,...x}=e,y=t?hs(t):void 0;try{Du(e);const p=(typeof i=="bigint"?Bt(i):void 0)||s,E=n.chain?.formatters?.transactionRequest?.format,b=(E||Uu)({...sp(x,{format:E}),account:y,blobs:r,data:a,gas:c,gasPrice:l,maxFeePerBlobGas:d,maxFeePerGas:u,maxPriorityFeePerGas:f,to:h,value:m},"createAccessList"),w=await n.request({method:"eth_createAccessList",params:[b,p]});if(w.error)throw new wn(w.error,{details:w.error});return{accessList:w.accessList,gasUsed:BigInt(w.gasUsed)}}catch(g){throw rp(g,{...e,account:y,chain:n.chain})}}function da(n,{method:e}){const t={};return n.transport.type==="fallback"&&n.transport.onResponse?.(({method:i,response:s,status:r,transport:a})=>{r==="success"&&e===i&&(t[s]=a.request)}),(i=>t[i]||n.request)}async function bg(n){const e=da(n,{method:"eth_newBlockFilter"}),t=await n.request({method:"eth_newBlockFilter"});return{id:t,request:e(t),type:"block"}}class Sg extends wn{constructor(e){super(`Filter type "${e}" is not supported.`,{name:"FilterTypeNotSupportedError"})}}const Kl="/docs/contract/encodeEventTopics";function Qs(n){const{abi:e,eventName:t,args:i}=n;let s=e[0];if(t){const l=Fu({abi:e,name:t});if(!l)throw new Ul(t,{docsPath:Kl});s=l}if(s.type!=="event")throw new Ul(void 0,{docsPath:Kl});let r=[];if(i&&"inputs"in s){const l=s.inputs?.filter(u=>"indexed"in u&&u.indexed),d=Array.isArray(i)?i:Object.values(i).length>0?l?.map(u=>i[u.name])??[]:[];d.length>0&&(r=l?.map((u,f)=>Array.isArray(d[f])?d[f].map((h,m)=>Zl({param:u,value:d[f][m]})):typeof d[f]<"u"&&d[f]!==null?Zl({param:u,value:d[f]}):null)??[])}if(s.anonymous)return r;const a=ap(s);return[op(a),...r]}function Zl({param:n,value:e}){if(n.type==="string"||n.type==="bytes")return Jt(Ru(e));if(n.type==="tuple"||n.type.match(/^(.*)\[(\d+)?\]$/))throw new Sg(n.type);return Tc([n],[e])}async function fh(n,e){const{address:t,abi:i,args:s,eventName:r,fromBlock:a,strict:c,toBlock:l}=e,d=da(n,{method:"eth_newFilter"}),u=r?Qs({abi:i,args:s,eventName:r}):void 0,f=await n.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof a=="bigint"?Bt(a):a,toBlock:typeof l=="bigint"?Bt(l):l,topics:u}]});return{abi:i,args:s,eventName:r,id:f,request:d(f),strict:!!c,type:"event"}}async function ph(n,{address:e,args:t,event:i,events:s,fromBlock:r,strict:a,toBlock:c}={}){const l=s??(i?[i]:void 0),d=da(n,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(m=>Qs({abi:[m],eventName:m.name,args:t}))],i&&(u=u[0]));const f=await n.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof r=="bigint"?Bt(r):r,toBlock:typeof c=="bigint"?Bt(c):c,...u.length?{topics:u}:{}}]});return{abi:l,args:t,eventName:i?i.name:void 0,fromBlock:r,id:f,request:d(f),strict:!!a,toBlock:c,type:"event"}}async function mh(n){const e=da(n,{method:"eth_newPendingTransactionFilter"}),t=await n.request({method:"eth_newPendingTransactionFilter"});return{id:t,request:e(t),type:"transaction"}}async function Mg(n){const e=await n.request({method:"eth_blobBaseFee"});return BigInt(e)}async function wg(n,{blockHash:e,blockNumber:t,blockTag:i=n.experimental_blockTag??"latest"}={}){const s=t!==void 0?Bt(t):void 0,r=await n.request({method:"eth_getBlockReceipts",params:[e||s||i]},{dedupe:!!(e||s)});if(!r)throw new cp({blockHash:e,blockNumber:t});const a=n.chain?.formatters?.transactionReceipt?.format||lp;return r.map(c=>a(c,"getBlockReceipts"))}async function Eg(n,{blockHash:e,blockNumber:t,blockTag:i="latest"}={}){const s=t!==void 0?Bt(t):void 0;let r;return e?r=await n.request({method:"eth_getBlockTransactionCountByHash",params:[e]},{dedupe:!0}):r=await n.request({method:"eth_getBlockTransactionCountByNumber",params:[s||i]},{dedupe:!!s}),Ou(r)}async function Gr(n,{address:e,blockHash:t,blockNumber:i,blockTag:s="latest",requireCanonical:r}){const a=oa({blockHash:t,blockNumber:i,blockTag:s,requireCanonical:r}),c=await n.request({method:"eth_getCode",params:[e,a]},{dedupe:typeof i=="bigint"||t!==void 0});if(c!=="0x")return c}async function Bc(n,{address:e,blockHash:t,fromBlock:i,toBlock:s,event:r,events:a,args:c,strict:l}={}){const d=l??!1,u=a??(r?[r]:void 0);let f=[];u&&(f=[u.flatMap(y=>Qs({abi:[y],eventName:y.name,args:a?void 0:c}))],r&&(f=f[0]));let h;t?h=await n.request({method:"eth_getLogs",params:[{address:e,topics:f,blockHash:t}]}):h=await n.request({method:"eth_getLogs",params:[{address:e,topics:f,fromBlock:typeof i=="bigint"?Bt(i):i,toBlock:typeof s=="bigint"?Bt(s):s}]});const m=h.map(x=>ai(x));return u?Ac({abi:u,args:c,logs:m,strict:d}):m}async function gh(n,e){const{abi:t,address:i,args:s,blockHash:r,eventName:a,fromBlock:c,toBlock:l,strict:d}=e,u=a?Fu({abi:t,name:a}):void 0,f=u?void 0:t.filter(h=>h.type==="event");return st(n,Bc,"getLogs")({address:i,args:s,blockHash:r,event:u,events:f,fromBlock:c,toBlock:l,strict:d})}async function Tg(n,{address:e,blockNumber:t,blockTag:i="latest"}){const s=await Gr(n,{address:e,...t!==void 0?{blockNumber:t}:{blockTag:i}});if(s&&Ec(s)===23&&s.startsWith("0xef0100"))return Tt(dp(s,3,23))}class Ag extends wn{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:["Ensure that:",`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:"Eip712DomainNotFoundError"})}}async function Cg(n,e){const{address:t,factory:i,factoryData:s}=e;try{const[r,a,c,l,d,u,f]=await st(n,It,"readContract")({abi:Rg,address:t,functionName:"eip712Domain",factory:i,factoryData:s});return{domain:{name:a,version:c,chainId:Number(l),verifyingContract:d,salt:u},extensions:f,fields:r}}catch(r){const a=r;throw a.name==="ContractFunctionExecutionError"&&a.cause.name==="ContractFunctionZeroDataError"?new Ag({address:t}):a}}const Rg=[{inputs:[],name:"eip712Domain",outputs:[{name:"fields",type:"bytes1"},{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"},{name:"salt",type:"bytes32"},{name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"}];function Ng(n){return{baseFeePerGas:n.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:n.gasUsedRatio,oldestBlock:BigInt(n.oldestBlock),reward:n.reward?.map(e=>e.map(t=>BigInt(t)))}}async function Pg(n,{blockCount:e,blockNumber:t,blockTag:i="latest",rewardPercentiles:s}){const r=typeof t=="bigint"?Bt(t):void 0,a=await n.request({method:"eth_feeHistory",params:[Bt(e),r||i,s]},{dedupe:!!r});return Ng(a)}async function ua(n,{filter:e}){const t="strict"in e&&e.strict,i=await e.request({method:"eth_getFilterChanges",params:[e.id]});if(typeof i[0]=="string")return i;const s=i.map(r=>ai(r));return!("abi"in e)||!e.abi?s:Ac({abi:e.abi,logs:s,strict:t})}async function Ig(n,{filter:e}){const t=e.strict??!1,s=(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(r=>ai(r));return e.abi?Ac({abi:e.abi,logs:s,strict:t}):s}async function Lg({address:n,authorization:e,signature:t}){return zr(Tt(n),await up({authorization:e,signature:t}))}const Dg=`Ethereum Signed Message:
`;function Ug(n){const e=typeof n=="string"?Fl(n):typeof n.raw=="string"?n.raw:ks(n.raw),t=Fl(`${Dg}${Ec(e)}`);return ra([t,e])}function xh(n,e){return Jt(Ug(n),e)}function Fg(n){const{domain:e={},message:t,primaryType:i}=n,s={EIP712Domain:hp({domain:e}),...n.types};fp({domain:e,message:t,primaryType:i,types:s});const r=["0x1901"];return e&&r.push(Og({domain:e,types:s})),i!=="EIP712Domain"&&r.push(vh({data:t,primaryType:i,types:s})),Jt(ra(r))}function Og({domain:n,types:e}){return vh({data:n,primaryType:"EIP712Domain",types:e})}function vh({data:n,primaryType:e,types:t}){const i=_h({data:n,primaryType:e,types:t});return Jt(i)}function _h({data:n,primaryType:e,types:t}){const i=[{type:"bytes32"}],s=[kg({primaryType:e,types:t})];for(const r of t[e]){const[a,c]=bh({types:t,name:r.name,type:r.type,value:n[r.name]});i.push(a),s.push(c)}return Tc(i,s)}function kg({primaryType:n,types:e}){const t=qs(Bg({primaryType:n,types:e}));return Jt(t)}function Bg({primaryType:n,types:e}){let t="";const i=yh({primaryType:n,types:e});i.delete(n);const s=[n,...Array.from(i).sort()];for(const r of s)t+=`${r}(${e[r].map(({name:a,type:c})=>`${c} ${a}`).join(",")})`;return t}function yh({primaryType:n,types:e},t=new Set){const s=n.match(/^\w*/u)?.[0];if(t.has(s)||e[s]===void 0)return t;t.add(s);for(const r of e[s])yh({primaryType:r.type,types:e},t);return t}function bh({types:n,name:e,type:t,value:i}){if(n[t]!==void 0)return[{type:"bytes32"},Jt(_h({data:i,primaryType:t,types:n}))];if(t==="bytes")return[{type:"bytes32"},Jt(i)];if(t==="string")return[{type:"bytes32"},Jt(qs(i))];if(t.lastIndexOf("]")===t.length-1){const s=t.slice(0,t.lastIndexOf("[")),r=i.map(a=>bh({name:e,type:s,types:n,value:a}));return[{type:"bytes32"},Jt(Tc(r.map(([a])=>a),r.map(([,a])=>a)))]}return[{type:t},i]}class zg extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const t=super.get(e);return super.has(e)&&t!==void 0&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const Hg={checksum:new zg(8192)},Ta=Hg.checksum;function Vg(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Jl(n){if(!Number.isSafeInteger(n)||n<0)throw new Error("positive integer expected, got "+n)}function jr(n,...e){if(!Vg(n))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(n.length))throw new Error("Uint8Array expected of length "+e+", got length="+n.length)}function Ql(n,e=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(e&&n.finished)throw new Error("Hash#digest() has already been called")}function Gg(n,e){jr(n);const t=e.outputLen;if(n.length<t)throw new Error("digestInto() expects output buffer of length at least "+t)}function jg(n){return new Uint32Array(n.buffer,n.byteOffset,Math.floor(n.byteLength/4))}function Sh(...n){for(let e=0;e<n.length;e++)n[e].fill(0)}const Wg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Xg(n){return n<<24&4278190080|n<<8&16711680|n>>>8&65280|n>>>24&255}function qg(n){for(let e=0;e<n.length;e++)n[e]=Xg(n[e]);return n}const ed=Wg?n=>n:qg;function $g(n){if(typeof n!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(n))}function Mh(n){return typeof n=="string"&&(n=$g(n)),jr(n),n}class Yg{}function Kg(n){const e=i=>n().update(Mh(i)).digest(),t=n();return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=()=>n(),e}const lr=BigInt(2**32-1),td=BigInt(32);function Zg(n,e=!1){return e?{h:Number(n&lr),l:Number(n>>td&lr)}:{h:Number(n>>td&lr)|0,l:Number(n&lr)|0}}function Jg(n,e=!1){const t=n.length;let i=new Uint32Array(t),s=new Uint32Array(t);for(let r=0;r<t;r++){const{h:a,l:c}=Zg(n[r],e);[i[r],s[r]]=[a,c]}return[i,s]}const Qg=(n,e,t)=>n<<t|e>>>32-t,e0=(n,e,t)=>e<<t|n>>>32-t,t0=(n,e,t)=>e<<t-32|n>>>64-t,n0=(n,e,t)=>n<<t-32|e>>>64-t,i0=BigInt(0),_s=BigInt(1),s0=BigInt(2),r0=BigInt(7),a0=BigInt(256),o0=BigInt(113),wh=[],Eh=[],Th=[];for(let n=0,e=_s,t=1,i=0;n<24;n++){[t,i]=[i,(2*t+3*i)%5],wh.push(2*(5*i+t)),Eh.push((n+1)*(n+2)/2%64);let s=i0;for(let r=0;r<7;r++)e=(e<<_s^(e>>r0)*o0)%a0,e&s0&&(s^=_s<<(_s<<BigInt(r))-_s);Th.push(s)}const Ah=Jg(Th,!0),c0=Ah[0],l0=Ah[1],nd=(n,e,t)=>t>32?t0(n,e,t):Qg(n,e,t),id=(n,e,t)=>t>32?n0(n,e,t):e0(n,e,t);function d0(n,e=24){const t=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let a=0;a<10;a++)t[a]=n[a]^n[a+10]^n[a+20]^n[a+30]^n[a+40];for(let a=0;a<10;a+=2){const c=(a+8)%10,l=(a+2)%10,d=t[l],u=t[l+1],f=nd(d,u,1)^t[c],h=id(d,u,1)^t[c+1];for(let m=0;m<50;m+=10)n[a+m]^=f,n[a+m+1]^=h}let s=n[2],r=n[3];for(let a=0;a<24;a++){const c=Eh[a],l=nd(s,r,c),d=id(s,r,c),u=wh[a];s=n[u],r=n[u+1],n[u]=l,n[u+1]=d}for(let a=0;a<50;a+=10){for(let c=0;c<10;c++)t[c]=n[a+c];for(let c=0;c<10;c++)n[a+c]^=~t[(c+2)%10]&t[(c+4)%10]}n[0]^=c0[i],n[1]^=l0[i]}Sh(t)}class zc extends Yg{constructor(e,t,i,s=!1,r=24){if(super(),this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,this.enableXOF=!1,this.blockLen=e,this.suffix=t,this.outputLen=i,this.enableXOF=s,this.rounds=r,Jl(i),!(0<e&&e<200))throw new Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=jg(this.state)}clone(){return this._cloneInto()}keccak(){ed(this.state32),d0(this.state32,this.rounds),ed(this.state32),this.posOut=0,this.pos=0}update(e){Ql(this),e=Mh(e),jr(e);const{blockLen:t,state:i}=this,s=e.length;for(let r=0;r<s;){const a=Math.min(t-this.pos,s-r);for(let c=0;c<a;c++)i[this.pos++]^=e[r++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:i,blockLen:s}=this;e[i]^=t,(t&128)!==0&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){Ql(this,!1),jr(e),this.finish();const t=this.state,{blockLen:i}=this;for(let s=0,r=e.length;s<r;){this.posOut>=i&&this.keccak();const a=Math.min(i-this.posOut,r-s);e.set(t.subarray(this.posOut,this.posOut+a),s),this.posOut+=a,s+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Jl(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Gg(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,Sh(this.state)}_cloneInto(e){const{blockLen:t,suffix:i,outputLen:s,rounds:r,enableXOF:a}=this;return e||(e=new zc(t,i,s,a,r)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=r,e.suffix=i,e.outputLen=s,e.enableXOF=a,e.destroyed=this.destroyed,e}}const u0=(n,e,t)=>Kg(()=>new zc(e,n,t)),h0=u0(1,136,256/8);function Ch(n,e={}){const{as:t=typeof n=="string"?"Hex":"Bytes"}=e,i=h0(Wm(n));return t==="Bytes"?i:ri(i)}const f0=/^0x[a-fA-F0-9]{40}$/;function ha(n,e={}){const{strict:t=!0}=e;if(!f0.test(n))throw new sd({address:n,cause:new p0});if(t){if(n.toLowerCase()===n)return;if(Rh(n)!==n)throw new sd({address:n,cause:new m0})}}function Rh(n){if(Ta.has(n))return Ta.get(n);ha(n,{strict:!1});const e=n.substring(2).toLowerCase(),t=Ch(qm(e),{as:"Bytes"}),i=e.split("");for(let r=0;r<40;r+=2)t[r>>1]>>4>=8&&i[r]&&(i[r]=i[r].toUpperCase()),(t[r>>1]&15)>=8&&i[r+1]&&(i[r+1]=i[r+1].toUpperCase());const s=`0x${i.join("")}`;return Ta.set(n,s),s}function Mo(n,e={}){const{strict:t=!0}=e??{};try{return ha(n,{strict:t}),!0}catch{return!1}}class sd extends dt{constructor({address:e,cause:t}){super(`Address "${e}" is invalid.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidAddressError"})}}class p0 extends dt{constructor(){super("Address is not a 20 byte (40 hexadecimal character) value."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidInputError"})}}class m0 extends dt{constructor(){super("Address does not match its checksum counterpart."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidChecksumError"})}}const g0=/^(.*)\[([0-9]*)\]$/,x0=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Nh=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,rd=2n**256n-1n;function ts(n,e,t){const{checksumAddress:i,staticPosition:s}=t,r=Gc(e.type);if(r){const[a,c]=r;return _0(n,{...e,type:c},{checksumAddress:i,length:a,staticPosition:s})}if(e.type==="tuple")return M0(n,e,{checksumAddress:i,staticPosition:s});if(e.type==="address")return v0(n,{checksum:i});if(e.type==="bool")return y0(n);if(e.type.startsWith("bytes"))return b0(n,e,{staticPosition:s});if(e.type.startsWith("uint")||e.type.startsWith("int"))return S0(n,e);if(e.type==="string")return w0(n,{staticPosition:s});throw new Wc(e.type)}const ad=32,wo=32;function v0(n,e={}){const{checksum:t=!1}=e,i=n.readBytes(32);return[(r=>t?Rh(r):r)(ri(Ym(i,-20))),32]}function _0(n,e,t){const{checksumAddress:i,length:s,staticPosition:r}=t;if(s===null){const l=Bn(n.readBytes(wo)),d=r+l,u=d+ad;n.setPosition(d);const f=Bn(n.readBytes(ad)),h=ls(e);let m=0;const x=[];for(let y=0;y<f;++y){n.setPosition(u+(h?y*32:m));const[g,p]=ts(n,e,{checksumAddress:i,staticPosition:u});m+=p,x.push(g),p===0&&(n.assertReadLimit(),n._touch())}return n.setPosition(r+32),[x,32]}if(ls(e)){const l=Bn(n.readBytes(wo)),d=r+l,u=[];for(let f=0;f<s;++f){n.setPosition(d+f*32);const[h]=ts(n,e,{checksumAddress:i,staticPosition:d});u.push(h)}return n.setPosition(r+32),[u,32]}let a=0;const c=[];for(let l=0;l<s;++l){const[d,u]=ts(n,e,{checksumAddress:i,staticPosition:r+a});a+=u,c.push(d),u===0&&(n.assertReadLimit(),n._touch())}return[c,a]}function y0(n){return[Zm(n.readBytes(32),{size:32}),32]}function b0(n,e,{staticPosition:t}){const[i,s]=e.type.split("bytes");if(!s){const a=Bn(n.readBytes(32));n.setPosition(t+a);const c=Bn(n.readBytes(32));if(c===0)return n.setPosition(t+32),["0x",32];const l=n.readBytes(c);return n.setPosition(t+32),[ri(l),32]}return[ri(n.readBytes(Number.parseInt(s,10),32)),32]}function S0(n,e){const t=e.type.startsWith("int"),i=Number.parseInt(e.type.split("int")[1]||"256",10),s=n.readBytes(32);return[i>48?Km(s,{signed:t}):Bn(s,{signed:t}),32]}function M0(n,e,t){const{checksumAddress:i,staticPosition:s}=t,r=e.components.length===0||e.components.some(({name:l})=>!l),a=r?[]:{};let c=0;if(ls(e)){const l=Bn(n.readBytes(wo)),d=s+l;for(let u=0;u<e.components.length;++u){const f=e.components[u];n.setPosition(d+c);const[h,m]=ts(n,f,{checksumAddress:i,staticPosition:d});c+=m,a[r?u:f?.name]=h}return n.setPosition(s+32),[a,32]}for(let l=0;l<e.components.length;++l){const d=e.components[l],[u,f]=ts(n,d,{checksumAddress:i,staticPosition:s});a[r?l:d?.name]=u,c+=f}return[a,c]}function w0(n,{staticPosition:e}){const t=Bn(n.readBytes(32)),i=e+t;n.setPosition(i);const s=Bn(n.readBytes(32));if(s===0)return n.setPosition(e+32),["",32];const r=n.readBytes(s,32),a=Jm(lh(r));return n.setPosition(e+32),[a,32]}function E0({checksumAddress:n,parameters:e,values:t}){const i=[];for(let s=0;s<e.length;s++)i.push(Hc({checksumAddress:n,parameter:e[s],value:t[s]}));return i}function Hc({checksumAddress:n=!1,parameter:e,value:t}){const i=e,s=Gc(i.type);if(s){const[r,a]=s;return A0(t,{checksumAddress:n,length:r,parameter:{...i,type:a}})}if(i.type==="tuple")return I0(t,{checksumAddress:n,parameter:i});if(i.type==="address")return T0(t,{checksum:n});if(i.type==="bool")return R0(t);if(i.type.startsWith("uint")||i.type.startsWith("int")){const r=i.type.startsWith("int"),[,,a="256"]=Nh.exec(i.type)??[];return N0(t,{signed:r,size:Number(a)})}if(i.type.startsWith("bytes"))return C0(t,{type:i.type});if(i.type==="string")return P0(t);throw new Wc(i.type)}function Vc(n){let e=0;for(let r=0;r<n.length;r++){const{dynamic:a,encoded:c}=n[r];a?e+=32:e+=bi(c)}const t=[],i=[];let s=0;for(let r=0;r<n.length;r++){const{dynamic:a,encoded:c}=n[r];a?(t.push(fs(e+s,{size:32})),i.push(c),s+=bi(c)):t.push(c)}return hn(...t,...i)}function T0(n,e){const{checksum:t=!1}=e;return ha(n,{strict:t}),{dynamic:!1,encoded:Bs(n.toLowerCase())}}function A0(n,e){const{checksumAddress:t,length:i,parameter:s}=e,r=i===null;if(!Array.isArray(n))throw new z0(n);if(!r&&n.length!==i)throw new B0({expectedLength:i,givenLength:n.length,type:`${s.type}[${i}]`});let a=n.length===0&&ls(s);const c=[];for(let l=0;l<n.length;l++){const d=Hc({checksumAddress:t,parameter:s,value:n[l]});d.dynamic&&(a=!0),c.push(d)}if(r||a){const l=Vc(c);if(r){const d=fs(c.length,{size:32});return{dynamic:!0,encoded:c.length>0?hn(d,l):d}}if(a)return{dynamic:!0,encoded:l}}return{dynamic:!1,encoded:hn(...c.map(({encoded:l})=>l))}}function C0(n,{type:e}){const[,t]=e.split("bytes"),i=bi(n);if(!t){let s=n;return i%32!==0&&(s=ss(s,Math.ceil((n.length-2)/2/32)*32)),{dynamic:!0,encoded:hn(Bs(fs(i,{size:32})),s)}}if(i!==Number.parseInt(t,10))throw new Lh({expectedSize:Number.parseInt(t,10),value:n});return{dynamic:!1,encoded:ss(n)}}function R0(n){if(typeof n!="boolean")throw new dt(`Invalid boolean value: "${n}" (type: ${typeof n}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Bs(ku(n))}}function N0(n,{signed:e,size:t}){if(typeof t=="number"){const i=2n**(BigInt(t)-(e?1n:0n))-1n,s=e?-i-1n:0n;if(n>i||n<s)throw new pp({max:i.toString(),min:s.toString(),signed:e,size:t/8,value:n.toString()})}return{dynamic:!1,encoded:fs(n,{size:32,signed:e})}}function P0(n){const e=Cc(n),t=Math.ceil(bi(e)/32),i=[];for(let s=0;s<t;s++)i.push(ss(Sn(e,s*32,(s+1)*32)));return{dynamic:!0,encoded:hn(ss(fs(bi(e),{size:32})),...i)}}function I0(n,e){const{checksumAddress:t,parameter:i}=e;let s=!1;const r=[];for(let a=0;a<i.components.length;a++){const c=i.components[a],l=Array.isArray(n)?a:c.name,d=Hc({checksumAddress:t,parameter:c,value:n[l]});r.push(d),d.dynamic&&(s=!0)}return{dynamic:s,encoded:s?Vc(r):hn(...r.map(({encoded:a})=>a))}}function Gc(n){const e=n.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}function ls(n){const{type:e}=n;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return n.components?.some(ls);const t=Gc(n.type);return!!(t&&ls({...n,type:t[1]}))}const L0={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new F0({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(n){if(n<0||n>this.bytes.length-1)throw new U0({length:this.bytes.length,position:n})},decrementPosition(n){if(n<0)throw new od({offset:n});const e=this.position-n;this.assertPosition(e),this.position=e},getReadCount(n){return this.positionReadCount.get(n||this.position)||0},incrementPosition(n){if(n<0)throw new od({offset:n});const e=this.position+n;this.assertPosition(e),this.position=e},inspectByte(n){const e=n??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(n,e){const t=e??this.position;return this.assertPosition(t+n-1),this.bytes.subarray(t,t+n)},inspectUint8(n){const e=n??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(n){const e=n??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(n){const e=n??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(n){const e=n??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushBytes(n){this.assertPosition(this.position+n.length-1),this.bytes.set(n,this.position),this.position+=n.length},pushUint8(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushUint16(n){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,n),this.position+=2},pushUint24(n){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,n>>8),this.dataView.setUint8(this.position+2,n&255),this.position+=3},pushUint32(n){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,n),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const n=this.inspectByte();return this.position++,n},readBytes(n,e){this.assertReadLimit(),this._touch();const t=this.inspectBytes(n);return this.position+=e??n,t},readUint8(){this.assertReadLimit(),this._touch();const n=this.inspectUint8();return this.position+=1,n},readUint16(){this.assertReadLimit(),this._touch();const n=this.inspectUint16();return this.position+=2,n},readUint24(){this.assertReadLimit(),this._touch();const n=this.inspectUint24();return this.position+=3,n},readUint32(){this.assertReadLimit(),this._touch();const n=this.inspectUint32();return this.position+=4,n},get remaining(){return this.bytes.length-this.position},setPosition(n){const e=this.position;return this.assertPosition(n),this.position=n,()=>this.position=e},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const n=this.getReadCount();this.positionReadCount.set(this.position,n+1),n>0&&this.recursiveReadCount++}};function D0(n,{recursiveReadLimit:e=8192}={}){const t=Object.create(L0);return t.bytes=n,t.dataView=new DataView(n.buffer,n.byteOffset,n.byteLength),t.positionReadCount=new Map,t.recursiveReadLimit=e,t}class od extends dt{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cursor.NegativeOffsetError"})}}class U0 extends dt{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cursor.PositionOutOfBoundsError"})}}class F0 extends dt{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cursor.RecursiveReadLimitExceededError"})}}function Ph(n,e,t={}){const{as:i="Array",checksumAddress:s=!1}=t,r=typeof e=="string"?ch(e):e,a=D0(r);if(Yi(r)===0&&n.length>0)throw new k0;if(Yi(r)&&Yi(r)<32)throw new O0({data:typeof e=="string"?e:ri(e),parameters:n,size:Yi(r)});let c=0;const l=i==="Array"?[]:{};for(let d=0;d<n.length;++d){const u=n[d];c<r.length&&a.setPosition(c);const[f,h]=ts(a,u,{checksumAddress:s,staticPosition:0});c+=h,i==="Array"?l.push(f):l[u.name??d]=f}return l}function jc(n,e,t){const{checksumAddress:i=!1}={};if(n.length!==e.length)throw new Dh({expectedLength:n.length,givenLength:e.length});const s=E0({checksumAddress:i,parameters:n,values:e}),r=Vc(s);return r.length===0?"0x":r}function Eo(n,e){if(n.length!==e.length)throw new Dh({expectedLength:n.length,givenLength:e.length});const t=[];for(let i=0;i<n.length;i++){const s=n[i],r=e[i];t.push(Eo.encode(s,r))}return hn(...t)}(function(n){function e(t,i,s=!1){if(t==="address"){const l=i;return ha(l),Bs(l.toLowerCase(),s?32:0)}if(t==="string")return Cc(i);if(t==="bytes")return i;if(t==="bool")return Bs(ku(i),s?32:1);const r=t.match(Nh);if(r){const[l,d,u="256"]=r,f=Number.parseInt(u,10)/8;return fs(i,{size:s?32:f,signed:d==="int"})}const a=t.match(x0);if(a){const[l,d]=a;if(Number.parseInt(d,10)!==(i.length-2)/2)throw new Lh({expectedSize:Number.parseInt(d,10),value:i});return ss(i,s?32:0)}const c=t.match(g0);if(c&&Array.isArray(i)){const[l,d]=c,u=[];for(let f=0;f<i.length;f++)u.push(e(d,i[f],!0));return u.length===0?"0x":hn(...u)}throw new Wc(t)}n.encode=e})(Eo||(Eo={}));function Ih(n){return Array.isArray(n)&&typeof n[0]=="string"||typeof n=="string"?ql(n):n}class O0 extends dt{constructor({data:e,parameters:t,size:i}){super(`Data size of ${i} bytes is too small for given parameters.`,{metaMessages:[`Params: (${mp(t)})`,`Data:   ${e} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.DataSizeTooSmallError"})}}class k0 extends dt{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.ZeroDataError"})}}class B0 extends dt{constructor({expectedLength:e,givenLength:t,type:i}){super(`Array length mismatch for type \`${i}\`. Expected: \`${e}\`. Given: \`${t}\`.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.ArrayLengthMismatchError"})}}class Lh extends dt{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${bi(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.BytesSizeMismatchError"})}}class Dh extends dt{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding parameters/values length mismatch.",`Expected length (parameters): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.LengthMismatchError"})}}class z0 extends dt{constructor(e){super(`Value \`${e}\` is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidArrayError"})}}class Wc extends dt{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidTypeError"})}}function Uh(n,e={}){const{recovered:t}=e;if(typeof n.r>"u")throw new Aa({signature:n});if(typeof n.s>"u")throw new Aa({signature:n});if(t&&typeof n.yParity>"u")throw new Aa({signature:n});if(n.r<0n||n.r>rd)throw new q0({value:n.r});if(n.s<0n||n.s>rd)throw new $0({value:n.s});if(typeof n.yParity=="number"&&n.yParity!==0&&n.yParity!==1)throw new qc({value:n.yParity})}function H0(n){return Fh(ri(n))}function Fh(n){if(n.length!==130&&n.length!==132)throw new X0({signature:n});const e=BigInt(Sn(n,0,32)),t=BigInt(Sn(n,32,64)),i=(()=>{const s=+`0x${n.slice(130)}`;if(!Number.isNaN(s))try{return Xc(s)}catch{throw new qc({value:s})}})();return typeof i>"u"?{r:e,s:t}:{r:e,s:t,yParity:i}}function V0(n){if(!(typeof n.r>"u")&&!(typeof n.s>"u"))return G0(n)}function G0(n){const e=typeof n=="string"?Fh(n):n instanceof Uint8Array?H0(n):typeof n.r=="string"?W0(n):n.v?j0(n):{r:n.r,s:n.s,...typeof n.yParity<"u"?{yParity:n.yParity}:{}};return Uh(e),e}function j0(n){return{r:n.r,s:n.s,yParity:Xc(n.v)}}function W0(n){const e=(()=>{const t=n.v?Number(n.v):void 0;let i=n.yParity?Number(n.yParity):void 0;if(typeof t=="number"&&typeof i!="number"&&(i=Xc(t)),typeof i!="number")throw new qc({value:n.yParity});return i})();return{r:BigInt(n.r),s:BigInt(n.s),yParity:e}}function Xc(n){if(n===0||n===27)return 0;if(n===1||n===28)return 1;if(n>=35)return n%2===0?1:0;throw new Y0({value:n})}class X0 extends dt{constructor({signature:e}){super(`Value \`${e}\` is an invalid signature size.`,{metaMessages:["Expected: 64 bytes or 65 bytes.",`Received ${bi(xp(e))} bytes.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidSerializedSizeError"})}}class Aa extends dt{constructor({signature:e}){super(`Signature \`${gp(e)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.MissingPropertiesError"})}}class q0 extends dt{constructor({value:e}){super(`Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidRError"})}}class $0 extends dt{constructor({value:e}){super(`Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidSError"})}}class qc extends dt{constructor({value:e}){super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidYParityError"})}}class Y0 extends dt{constructor({value:e}){super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidVError"})}}function K0(n,e={}){return typeof n.chainId=="string"?Z0(n):{...n,...e.signature}}function Z0(n){const{address:e,chainId:t,nonce:i}=n,s=V0(n);return{address:e,chainId:Number(t),nonce:BigInt(i),...s}}const J0="0x8010801080108010801080108010801080108010801080108010801080108010",Q0=Ih("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");function Oh(n){if(typeof n=="string"){if(Sn(n,-32)!==J0)throw new nx(n)}else Uh(n.authorization)}function ex(n){Oh(n);const e=Nu(Sn(n,-64,-32)),t=Sn(n,-e-64,-64),i=Sn(n,0,-e-64),[s,r,a]=Ph(Q0,t);return{authorization:K0({address:s.delegation,chainId:Number(s.chainId),nonce:s.nonce,yParity:s.yParity,r:s.r,s:s.s}),signature:i,...a&&a!=="0x"?{data:a,to:r}:{}}}function tx(n){try{return Oh(n),!0}catch{return!1}}let nx=class extends dt{constructor(e){super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SignatureErc8010.InvalidWrappedSignatureError"})}};function ix(n){return n.map(e=>({...e,value:BigInt(e.value)}))}function sx(n){return{...n,balance:n.balance?BigInt(n.balance):void 0,nonce:n.nonce?Ou(n.nonce):void 0,storageProof:n.storageProof?ix(n.storageProof):void 0}}async function rx(n,{address:e,blockHash:t,blockNumber:i,blockTag:s="latest",requireCanonical:r,storageKeys:a}){const c=oa({blockHash:t,blockNumber:i,blockTag:s,requireCanonical:r}),l=await n.request({method:"eth_getProof",params:[e,a,c]});return sx(l)}async function ax(n,{hash:e}){const t=await n.request({method:"eth_getRawTransactionByHash",params:[e]},{dedupe:!0});if(!t)throw new vp({hash:e});return t}async function ox(n,{address:e,blockHash:t,blockNumber:i,blockTag:s="latest",requireCanonical:r,slot:a}){const c=oa({blockHash:t,blockNumber:i,blockTag:s,requireCanonical:r});return await n.request({method:"eth_getStorageAt",params:[e,a,c]})}async function cx(n,{blockHash:e,blockNumber:t,blockTag:i="latest",requireCanonical:s,requests:r}){const a=oa({blockHash:e,blockNumber:t,blockTag:i,requireCanonical:s});return n.request({method:"eth_getStorageValues",params:[r,a]})}async function lx(n,{hash:e,transactionReceipt:t}){const[i,s]=await Promise.all([st(n,$s,"getBlockNumber")({}),e?st(n,Bu,"getTransaction")({hash:e}):void 0]),r=t?.blockNumber||s?.blockNumber;return r?i-r+1n:0n}async function Wr(n,e){const{blockNumber:t,blockTag:i=n.experimental_blockTag??"latest",blocks:s,returnFullTransactions:r,traceTransfers:a,validation:c}=e;try{const l=[];for(const h of s){const m=h.blockOverrides?_p(h.blockOverrides):void 0,x=h.calls.map(g=>{const p=g,E=p.account?hs(p.account):void 0,A=p.abi?Xs(p):p.data,b={...p,account:E,data:p.dataSuffix?ra([A||"0x",p.dataSuffix]):A,from:p.from??E?.address};return Du(b),Uu(b)}),y=h.stateOverrides?yp(h.stateOverrides):void 0;l.push({blockOverrides:m,calls:x,stateOverrides:y})}const u=(typeof t=="bigint"?Bt(t):void 0)||i;return(await n.request({method:"eth_simulateV1",params:[{blockStateCalls:l,returnFullTransactions:r,traceTransfers:a,validation:c},u]})).map((h,m)=>({...zu(h),calls:h.calls.map((x,y)=>{const{abi:g,args:p,functionName:E,to:A}=s[m].calls[y],b=x.error?.data??x.returnData,w=BigInt(x.gasUsed),M=x.maxUsedGas===void 0?void 0:BigInt(x.maxUsedGas),C=x.logs?.map(I=>ai(I)),_=x.status==="0x1"?"success":"failure",T=g&&_==="success"&&b!=="0x"?wc({abi:g,data:b,functionName:E}):null,P=(()=>{if(_==="success")return;let I;if(b==="0x"?I=new bp:b&&(I=new Sp({data:b})),!!I)return Mp(I,{abi:g??[],address:A??"0x",args:p,functionName:E??"<unknown>"})})();return{data:b,gasUsed:w,logs:C,...M===void 0?{}:{maxUsedGas:M},status:_,..._==="success"?{result:T}:{error:P}}})}))}catch(l){const d=l,u=wp(d,{});throw u instanceof Ep?d:u}}function To(n){let e=!0,t="",i=0,s="",r=!1;for(let a=0;a<n.length;a++){const c=n[a];if(["(",")",","].includes(c)&&(e=!0),c==="("&&i++,c===")"&&i--,!!e){if(i===0){if(c===" "&&["event","function","error",""].includes(s))s="";else if(s+=c,c===")"){r=!0;break}continue}if(c===" "){n[a-1]!==","&&t!==","&&t!==",("&&(t="",e=!1);continue}s+=c,t+=c}}if(!r)throw new dt("Unable to normalize signature.");return s}function Ao(n,e){const t=typeof n,i=e.type;switch(i){case"address":return Mo(n,{strict:!1});case"bool":return t==="boolean";case"function":return t==="string";case"string":return t==="string";default:return i==="tuple"&&"components"in e?Object.values(e.components).every((s,r)=>Ao(Object.values(n)[r],s)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?t==="number"||t==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?t==="string"||n instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(n)&&n.every(s=>Ao(s,{...e,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function kh(n,e,t){for(const i in n){const s=n[i],r=e[i];if(s.type==="tuple"&&r.type==="tuple"&&"components"in s&&"components"in r)return kh(s.components,r.components,t[i]);const a=[s.type,r.type];if(a.includes("address")&&a.includes("bytes20")?!0:a.includes("address")&&a.includes("string")?Mo(t[i],{strict:!1}):a.includes("address")&&a.includes("bytes")?Mo(t[i],{strict:!1}):!1)return a}}function $c(n,e={}){const{prepare:t=!0}=e,i=Array.isArray(n)||typeof n=="string"?Xl(n):n;return{...i,...t?{hash:xi(i)}:{}}}function fa(n,e,t){const{args:i=[],prepare:s=!0}=t??{},r=Tp(e,{strict:!1}),a=n.filter(d=>r?d.type==="function"||d.type==="error"?Bh(d)===Sn(e,0,4):d.type==="event"?xi(d)===e:!1:"name"in d&&d.name===e);if(a.length===0)throw new Xr({name:e});if(a.length===1)return{...a[0],...s?{hash:xi(a[0])}:{}};let c;for(const d of a){if(!("inputs"in d))continue;if(!i||i.length===0){if(!d.inputs||d.inputs.length===0)return{...d,...s?{hash:xi(d)}:{}};continue}if(!d.inputs||d.inputs.length===0||d.inputs.length!==i.length)continue;if(i.every((f,h)=>{const m="inputs"in d&&d.inputs[h];return m?Ao(f,m):!1})){if(c&&"inputs"in c&&c.inputs){const f=kh(d.inputs,c.inputs,i);if(f)throw new ux({abiItem:d,type:f[0]},{abiItem:c,type:f[1]})}c=d}}const l=(()=>{if(c)return c;const[d,...u]=a;return{...d,overloads:u}})();if(!l)throw new Xr({name:e});return{...l,...s?{hash:xi(l)}:{}}}function Bh(...n){const e=(()=>{if(Array.isArray(n[0])){const[t,i]=n;return fa(t,i)}return n[0]})();return Sn(xi(e),0,4)}function dx(...n){const e=(()=>{if(Array.isArray(n[0])){const[i,s]=n;return fa(i,s)}return n[0]})(),t=typeof e=="string"?e:go(e);return To(t)}function xi(...n){const e=(()=>{if(Array.isArray(n[0])){const[t,i]=n;return fa(t,i)}return n[0]})();return typeof e!="string"&&"hash"in e&&e.hash?e.hash:Ch(Cc(dx(e)))}class ux extends dt{constructor(e,t){super("Found ambiguous types in overloaded ABI Items.",{metaMessages:[`\`${e.type}\` in \`${To(go(e.abiItem))}\`, and`,`\`${t.type}\` in \`${To(go(t.abiItem))}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItem.AmbiguityError"})}}class Xr extends dt{constructor({name:e,data:t,type:i="item"}){const s=e?` with name "${e}"`:t?` with data "${t}"`:"";super(`ABI ${i}${s} not found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItem.NotFoundError"})}}function hx(...n){const[e,t]=(()=>{if(Array.isArray(n[0])){const[r,a]=n;return[px(r),a]}return n})(),{bytecode:i,args:s}=t;return hn(i,e.inputs?.length&&s?.length?jc(e.inputs,s):"0x")}function fx(n){return $c(n)}function px(n){const e=n.find(t=>t.type==="constructor");if(!e)throw new Xr({name:"constructor"});return e}function mx(n,e={}){return $c(n,e)}function gx(n){return xi(n)}function xx(...n){const[e,t,i={}]=(()=>{if(Array.isArray(n[0])){const[r,a,c,l]=n;return[Co(r,a),c,l]}return n})(),s=Ph(e.outputs,t,i);if(!(s&&Object.keys(s).length===0))return s&&Object.keys(s).length===1?Array.isArray(s)?s[0]:Object.values(s)[0]:s}function pi(...n){const[e,t=[]]=(()=>{if(Array.isArray(n[0])){const[d,u,f]=n;return[Co(d,u,{args:f}),f]}const[c,l]=n;return[c,l]})(),{overloads:i}=e,s=i?Co([e,...i],e.name,{args:t}):e,r=vx(s),a=t.length>0?jc(s.inputs,t):void 0;return a?hn(r,a):r}function ms(n,e={}){return $c(n,e)}function Co(n,e,t){const i=fa(n,e,t);if(i.type!=="function")throw new Xr({name:e,type:"function"});return i}function vx(n){return Bh(n)}const _x="0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",zh="0x608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fd00430c1461002d575b5f5ffd5b6100476004803603810190610042919061012b565b610049565b005b80825f375f5f825f865afa610060573d5f5f3e3d5ffd5b3d5f5f3e3d5ff35b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61009982610070565b9050919050565b6100a98161008f565b81146100b3575f5ffd5b50565b5f813590506100c4816100a0565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126100eb576100ea6100ca565b5b8235905067ffffffffffffffff811115610108576101076100ce565b5b602083019150836001820283011115610124576101236100d2565b5b9250929050565b5f5f5f6040848603121561014257610141610068565b5b5f61014f868287016100b6565b935050602084013567ffffffffffffffff8111156101705761016f61006c565b5b61017c868287016100d6565b9250925050925092509256fea2646970667358221220635ed99185cacf3f2acba6921f23687c969cec2bbaf5f9ad599f507e6e105e6964736f6c63430008230033",Ns=1000000n,yx=0x00000000000000000000000000000000deadbeefn,bx=gx(mx("event Transfer(address indexed from, address indexed to, uint256 value)")),cd=ms("function balanceOf(address) returns (uint256)"),ld=ms("function decimals() returns (uint256)"),dd=ms("function tokenURI(uint256) returns (string)"),ud=ms("function symbol() returns (string)"),Sx=ms("function query(address target, bytes data)");async function Mx(n,e){const{blockNumber:t,blockTag:i,calls:s,stateOverrides:r,traceAssetChanges:a,traceTransfers:c,validation:l}=e,d=e.account?hs(e.account):void 0;if(a&&!d)throw new wn("`account` is required when `traceAssetChanges` is true");const u=d?hx(fx("constructor(bytes, bytes)"),{bytecode:Rp,args:[_x,pi(ms("function getBalance(address)"),[d.address])]}):void 0,f=i??n.experimental_blockTag??"latest";let h=t;if(a&&typeof h!="bigint"&&f!=="earliest"&&f!=="pending")if(f==="latest")h=await $s(n,{cacheTime:0});else{const te=await $i(n,{blockTag:f});if(typeof te.number!="bigint")throw new wn(`Block tag \`${f}\` did not resolve to a number.`);h=te.number}const m=typeof h=="bigint"?{blockNumber:h}:{blockTag:f},x=a?await Wr(n,{...m,blocks:[{calls:s.map(te=>({...te,from:d.address})),stateOverrides:r}],traceTransfers:c,validation:l}):void 0,y=x?[...new Set([...wx(x[0].calls.flatMap(te=>te.logs??[]),d.address),...e.calls.map(te=>te.to?.toLowerCase())])].filter(te=>!!te&&te!==xo&&te!==rs):[],g=Ex([...d?[d.address]:[],...y,...r?.map(({address:te})=>te)??[]]),p=[{address:g,code:zh}],[E,A]=await Promise.all([a?Promise.all([fd(n,{account:d.address,...m,data:u,stateOverride:r}),...y.map(te=>fd(n,{account:d.address,address:te,...m,data:pi(cd,[d.address]),staticCallAddress:g,stateOverride:r}))]):[],Wr(n,{...m,blocks:[{calls:[...s,{to:rs}].map(te=>({...te,from:d?.address})),stateOverrides:r},...a?[{calls:[{data:u}]},{calls:y.map(te=>({to:g,gas:Ns,data:Ps(te,pi(cd,[d.address]))})),stateOverrides:p},{calls:y.map(te=>({to:g,gas:Ns,data:Ps(te,pi(ld))})),stateOverrides:p},{calls:y.map(te=>({to:g,gas:Ns,data:Ps(te,pi(dd,[0n]))})),stateOverrides:p},{calls:y.map(te=>({to:g,gas:Ns,data:Ps(te,pi(ud))})),stateOverrides:p}]:[]],traceTransfers:c,validation:l})]),b=A[0],[w,M,C,_,T]=a?A.slice(1):[],{calls:P,...I}=b,U=P.slice(0,-1),G=E.map(te=>hd(te)?Hr(te.data):null),R=w?.calls??[],B=M?.calls??[],k=[...R,...B].map(te=>hd(te)?Hr(te.data):null),K=(C?.calls??[]).map(te=>Ca(te,ld)),H=(T?.calls??[]).map(te=>Ca(te,ud)),ee=(_?.calls??[]).map(te=>Ca(te,dd)),ne=[];for(const[te,J]of k.entries()){const oe=G[te],de=E[te],Se=typeof oe=="bigint"?oe:te>0&&de?.status==="success"&&de.data==="0x"?0n:null;if(typeof J!="bigint"||typeof Se!="bigint")continue;const q=K[te-1],X=H[te-1],he=ee[te-1],ue=te===0?{address:xo,decimals:18,symbol:"ETH"}:{address:y[te-1],decimals:he||q?Number(q??1):void 0,symbol:X??void 0};ne.push({token:ue,value:{pre:Se,post:J,diff:J-Se}})}return{assetChanges:ne,block:I,results:U}}function Ps(n,e){return pi(Sx,[n,e])}function wx(n,e){const t=Ap(e.toLowerCase(),{size:32});return n.filter(i=>i.topics[0]?.toLowerCase()!==bx||i.address.toLowerCase()===xo?!1:i.topics[1]?.toLowerCase()===t||i.topics[2]?.toLowerCase()===t).map(i=>i.address.toLowerCase())}function hd(n){return n.status==="success"&&/^0x[\da-f]{64}$/i.test(n.data)}function Ca(n,e){if(n.status==="failure"||n.data==="0x")return null;try{return xx(e,n.data)}catch{return null}}async function fd(n,e){const{account:t,address:i,blockNumber:s,blockTag:r,data:a,staticCallAddress:c,stateOverride:l}=e;try{return{data:(await Rc({...n,ccipRead:!1},{account:i?rs:t,data:i?Ps(i,a):a,stateOverride:i&&c?[...l??[],{address:c,code:zh}]:l,...i?{gas:Ns,to:c}:{},...typeof s=="bigint"?{blockNumber:s}:{blockTag:r}})).data??"0x",status:"success"}}catch(d){if(!(d instanceof Hu)||!(d.cause instanceof Cp))throw d;return{data:"0x",status:"failure"}}}function Ex(n){const e=new Set(n.map(i=>i.toLowerCase()));let t=yx;for(;e.has(`0x${t.toString(16).padStart(40,"0")}`);)t++;return`0x${t.toString(16).padStart(40,"0")}`}async function pa(n,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}const Hh="0x6492649264926492649264926492649264926492649264926492649264926492";function Tx(n){if(Sn(n,-32)!==Hh)throw new Rx(n)}function Ax(n){const{data:e,signature:t,to:i}=n;return hn(jc(Ih("address, bytes, bytes"),[i,e,t]),Hh)}function Cx(n){try{return Tx(n),!0}catch{return!1}}class Rx extends dt{constructor(e){super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SignatureErc6492.InvalidWrappedSignatureError"})}}function Nx({r:n,s:e,to:t="hex",v:i,yParity:s}){const r=(()=>{if(s===0||s===1)return s;if(i&&(i===27n||i===28n||i>=35n))return i%2n===0n?1:0;throw new Error("Invalid `v` or `yParity` value")})(),a=`0x${new Bm.Signature(Hr(n),Hr(e)).toCompactHex()}${r===0?"1b":"1c"}`;return t==="hex"?a:Np(a)}async function ma(n,e){const{address:t,chain:i=n.chain,hash:s,erc6492VerifierAddress:r=e.universalSignatureVerifierAddress??i?.contracts?.erc6492Verifier?.address,multicallAddress:a=e.multicallAddress??i?.contracts?.multicall3?.address,mode:c="auto"}=e;if(i?.verifyHash)return await i.verifyHash(n,e);const l=(()=>{const d=e.signature;return Cu(d)?d:typeof d=="object"&&"r"in d&&"s"in d?Nx(d):ks(d)})();try{if(c==="eoa")try{if(zr(Tt(t),await Ol({hash:s,signature:l})))return!0}catch{}return tx(l)?await Px(n,{...e,multicallAddress:a,signature:l}):await Ix(n,{...e,verifierAddress:r,signature:l})}catch(d){if(c!=="eoa")try{if(zr(Tt(t),await Ol({hash:s,signature:l})))return!0}catch{}if(d instanceof Si)return!1;throw d}}async function Px(n,e){const{address:t,blockHash:i,blockNumber:s,blockTag:r,hash:a,multicallAddress:c,requireCanonical:l}=e,{authorization:d,data:u,signature:f,to:h}=ex(e.signature);if(await Gr(n,{address:t,blockHash:i,blockNumber:s,blockTag:r,requireCanonical:l})===Pp(["0xef0100",d.address]))return await Lx(n,{...e,signature:f});const x={address:d.address,chainId:Number(d.chainId),nonce:Number(d.nonce),r:Bt(d.r,{size:32}),s:Bt(d.s,{size:32}),yParity:d.yParity};if(!await Lg({address:t,authorization:x}))throw new Si;const g=await st(n,It,"readContract")({...c?{address:c}:{code:Lp},authorizationList:[x],abi:Ip,blockHash:i,blockNumber:s,blockTag:"pending",functionName:"aggregate3",requireCanonical:l,args:[[...u?[{allowFailure:!0,target:h??t,callData:u}]:[],{allowFailure:!0,target:t,callData:Xs({abi:Vu,functionName:"isValidSignature",args:[a,f]})}]]});if(g[g.length-1]?.returnData?.startsWith("0x1626ba7e"))return!0;throw new Si}async function Ix(n,e){const{address:t,factory:i,factoryData:s,hash:r,signature:a,verifierAddress:c,...l}=e,d=await(async()=>!i&&!s||Cx(a)?a:Ax({data:s,signature:a,to:i}))(),u=c?{to:c,data:Xs({abi:kl,functionName:"isValidSig",args:[t,r,d]}),...l}:{data:Dp({abi:kl,args:[t,r,d],bytecode:Up}),...l},{data:f}=await st(n,Rc,"call")(u).catch(h=>{throw h instanceof Hu?new Si:h});if(Fp(f??"0x0"))return!0;throw new Si}async function Lx(n,e){const{address:t,blockHash:i,blockNumber:s,blockTag:r,hash:a,requireCanonical:c,signature:l}=e;if((await st(n,It,"readContract")({address:t,abi:Vu,args:[a,l],blockHash:i,blockNumber:s,blockTag:r,functionName:"isValidSignature",requireCanonical:c}).catch(u=>{throw u instanceof Op?new Si:u})).startsWith("0x1626ba7e"))return!0;throw new Si}class Si extends Error{}async function Dx(n,{address:e,message:t,factory:i,factoryData:s,signature:r,...a}){const c=xh(t);return st(n,ma,"verifyHash")({address:e,factory:i,factoryData:s,hash:c,signature:r,...a})}async function Ux(n,e){const{address:t,factory:i,factoryData:s,signature:r,message:a,primaryType:c,types:l,domain:d,...u}=e,f=Fg({message:a,primaryType:c,types:l,domain:d});return st(n,ma,"verifyHash")({address:t,factory:i,factoryData:s,hash:f,signature:r,...u})}const Fx=["size","totalDifficulty","transactions","uncles","withdrawals"];function Ox(n,{onBlockHeader:e,onError:t}){let i;const s=as(["watchBlockHeaders",n.uid]);return os(s,{onBlockHeader:e,onError:t},r=>{let a=!0,c=!1,l=()=>a=!1;return(async()=>{try{const d=(()=>{if(n.transport.type==="fallback"){const f=n.transport.transports.find(h=>h.config.type==="webSocket"||h.config.type==="ipc");return f?f.value:n.transport}return n.transport})(),{unsubscribe:u}=await d.subscribe({params:["newHeads"],onData(f){if(!a)return;const h=(n.chain?.formatters?.block?.format||zu)(f.result,"watchBlockHeaders");for(const m of Fx)delete h[m];r.onBlockHeader(h,i),i=h},onError(f){c&&r.onError?.(f)}});c=!0,l=u,a||l()}catch(d){r.onError?.(d)}})(),()=>l()})}function kx(n,{blockTag:e=n.experimental_blockTag??"latest",emitMissed:t=!1,emitOnBegin:i=!1,onBlock:s,onError:r,includeTransactions:a,poll:c,pollingInterval:l=n.pollingInterval}){const d=typeof c<"u"?c:!(n.transport.type==="webSocket"||n.transport.type==="ipc"||n.transport.type==="fallback"&&(n.transport.transports[0].config.type==="webSocket"||n.transport.transports[0].config.type==="ipc")),u=a??!1;let f;return d?(()=>{const x=as(["watchBlocks",n.uid,e,t,i,u,l]);return os(x,{onBlock:s,onError:r},y=>ca(async()=>{try{const g=await st(n,$i,"getBlock")({blockTag:e,includeTransactions:u});if(g.number!==null&&f?.number!=null){if(g.number===f.number)return;if(g.number-f.number>1&&t)for(let p=f?.number+1n;p<g.number;p++){const E=await st(n,$i,"getBlock")({blockNumber:p,includeTransactions:u});y.onBlock(E,f),f=E}}(f?.number==null||e==="pending"&&g?.number==null||g.number!==null&&g.number>f.number)&&(y.onBlock(g,f),f=g)}catch(g){y.onError?.(g)}},{emitOnBegin:i,interval:l}))})():(()=>{let x=!0,y=!0,g=()=>x=!1;return(async()=>{try{i&&st(n,$i,"getBlock")({blockTag:e,includeTransactions:u}).then(A=>{x&&y&&(s(A,void 0),y=!1)}).catch(r);const p=(()=>{if(n.transport.type==="fallback"){const A=n.transport.transports.find(b=>b.config.type==="webSocket"||b.config.type==="ipc");return A?A.value:n.transport}return n.transport})(),{unsubscribe:E}=await p.subscribe({params:["newHeads"],async onData(A){if(!x)return;const b=await st(n,$i,"getBlock")({blockNumber:A.result?.number,includeTransactions:u}).catch(()=>{});x&&(s(b,f),y=!1,f=b)},onError(A){r?.(A)}});g=E,x||g()}catch(p){r?.(p)}})(),()=>g()})()}function Bx(n,e){const{abi:t,address:i,args:s,batch:r=!0,eventName:a,fromBlock:c,onError:l,onLogs:d,poll:u,pollingInterval:f=n.pollingInterval,strict:h}=e;return(typeof u<"u"?u:typeof c=="bigint"?!0:!(n.transport.type==="webSocket"||n.transport.type==="ipc"||n.transport.type==="fallback"&&(n.transport.transports[0].config.type==="webSocket"||n.transport.transports[0].config.type==="ipc")))?(()=>{const g=h??!1,p=as(["watchContractEvent",i,s,r,n.uid,a,f,g,c]);return os(p,{onLogs:d,onError:l},E=>{let A;c!==void 0&&(A=c-1n);let b,w=!1;const M=ca(async()=>{if(!w){try{b=await st(n,fh,"createContractEventFilter")({abi:t,address:i,args:s,eventName:a,strict:g,fromBlock:c})}catch{}w=!0;return}try{let C;if(b)C=await st(n,ua,"getFilterChanges")({filter:b});else{const _=await st(n,$s,"getBlockNumber")({});A&&A<_?C=await st(n,gh,"getContractEvents")({abi:t,address:i,args:s,eventName:a,fromBlock:A+1n,toBlock:_,strict:g}):C=[],A=_}if(C.length===0)return;if(r)E.onLogs(C);else for(const _ of C)E.onLogs([_])}catch(C){b&&C instanceof Gu&&(w=!1),E.onError?.(C)}},{emitOnBegin:!0,interval:f});return async()=>{b&&await st(n,pa,"uninstallFilter")({filter:b}),M()}})})():(()=>{const g=h??!1,p=as(["watchContractEvent",i,s,r,n.uid,a,f,g]);let E=!0,A=()=>E=!1;return os(p,{onLogs:d,onError:l},b=>((async()=>{try{const w=(()=>{if(n.transport.type==="fallback"){const _=n.transport.transports.find(T=>T.config.type==="webSocket"||T.config.type==="ipc");return _?_.value:n.transport}return n.transport})(),M=a?Qs({abi:t,eventName:a,args:s}):[],{unsubscribe:C}=await w.subscribe({params:["logs",{address:i,topics:M}],onData(_){if(!E)return;const T=_.result;try{const{eventName:P,args:I}=cs({abi:t,data:T.data,topics:T.topics,strict:h}),U=ai(T,{args:I,eventName:P});b.onLogs([U])}catch(P){let I,U;if(P instanceof ju||P instanceof Wu){if(h)return;I=P.abiItem.name,U=P.abiItem.inputs?.some(R=>!("name"in R&&R.name))}const G=ai(T,{args:U?[]:{},eventName:I});b.onLogs([G])}},onError(_){b.onError?.(_)}});A=C,E||A()}catch(w){l?.(w)}})(),()=>A()))})()}function zx(n,{address:e,args:t,batch:i=!0,event:s,events:r,fromBlock:a,onError:c,onLogs:l,poll:d,pollingInterval:u=n.pollingInterval,strict:f}){const h=typeof d<"u"?d:typeof a=="bigint"?!0:!(n.transport.type==="webSocket"||n.transport.type==="ipc"||n.transport.type==="fallback"&&(n.transport.transports[0].config.type==="webSocket"||n.transport.transports[0].config.type==="ipc")),m=f??!1;return h?(()=>{const g=as(["watchEvent",e,t,i,n.uid,s,u,a]);return os(g,{onLogs:l,onError:c},p=>{let E;a!==void 0&&(E=a-1n);let A,b=!1;const w=ca(async()=>{if(!b){try{A=await st(n,ph,"createEventFilter")({address:e,args:t,event:s,events:r,strict:m,fromBlock:a})}catch{}b=!0;return}try{let M;if(A)M=await st(n,ua,"getFilterChanges")({filter:A});else{const C=await st(n,$s,"getBlockNumber")({});E&&E!==C?M=await st(n,Bc,"getLogs")({address:e,args:t,event:s,events:r,fromBlock:E+1n,toBlock:C}):M=[],E=C}if(M.length===0)return;if(i)p.onLogs(M);else for(const C of M)p.onLogs([C])}catch(M){A&&M instanceof Gu&&(b=!1),p.onError?.(M)}},{emitOnBegin:!0,interval:u});return async()=>{A&&await st(n,pa,"uninstallFilter")({filter:A}),w()}})})():(()=>{let g=!0,p=()=>g=!1;return(async()=>{try{const E=(()=>{if(n.transport.type==="fallback"){const M=n.transport.transports.find(C=>C.config.type==="webSocket"||C.config.type==="ipc");return M?M.value:n.transport}return n.transport})(),A=r??(s?[s]:void 0);let b=[];A&&(b=[A.flatMap(C=>Qs({abi:[C],eventName:C.name,args:t}))],s&&(b=b[0]));const{unsubscribe:w}=await E.subscribe({params:["logs",{address:e,topics:b}],onData(M){if(!g)return;const C=M.result;try{const{eventName:_,args:T}=cs({abi:A??[],data:C.data,topics:C.topics,strict:m}),P=ai(C,{args:T,eventName:_});l([P])}catch(_){let T,P;if(_ instanceof ju||_ instanceof Wu){if(f)return;T=_.abiItem.name,P=_.abiItem.inputs?.some(U=>!("name"in U&&U.name))}const I=ai(C,{args:P?[]:{},eventName:T});l([I])}},onError(M){c?.(M)}});p=w,g||p()}catch(E){c?.(E)}})(),()=>p()})()}function Hx(n,{batch:e=!0,onError:t,onTransactions:i,poll:s,pollingInterval:r=n.pollingInterval}){return(typeof s<"u"?s:n.transport.type!=="webSocket"&&n.transport.type!=="ipc")?(()=>{const d=as(["watchPendingTransactions",n.uid,e,r]);return os(d,{onTransactions:i,onError:t},u=>{let f;const h=ca(async()=>{try{if(!f)try{f=await st(n,mh,"createPendingTransactionFilter")({});return}catch(x){throw h(),x}const m=await st(n,ua,"getFilterChanges")({filter:f});if(m.length===0)return;if(e)u.onTransactions(m);else for(const x of m)u.onTransactions([x])}catch(m){u.onError?.(m)}},{emitOnBegin:!0,interval:r});return async()=>{f&&await st(n,pa,"uninstallFilter")({filter:f}),h()}})})():(()=>{let d=!0,u=()=>d=!1;return(async()=>{try{const{unsubscribe:f}=await n.transport.subscribe({params:["newPendingTransactions"],onData(h){if(!d)return;const m=h.result;i([m])},onError(h){t?.(h)}});u=f,d||u()}catch(f){t?.(f)}})(),()=>u()})()}async function qr(n,e){const{account:t,decimals:i,spender:s,token:r,...a}=e,[c,{decimals:l}]=await Promise.all([It(n,{...a,...qr.call(n,{account:t,spender:s,token:r})}),Nc(n,{decimals:i,token:r})]);return Pc(c,l)}(function(n){function e(t,i){return Ic({address:la(t,i).address,abi:Ji,functionName:"allowance",args:[i.account,i.spender]})}n.call=e})(qr||(qr={}));async function $r(n,e){const{account:t=n.account,decimals:i,token:s,...r}=e;if(!t)throw new Xu;const a=hs(t).address,[c,{decimals:l}]=await Promise.all([It(n,{...r,...$r.call(n,{account:a,token:s})}),Nc(n,{decimals:i,token:s})]);return Pc(c,l)}(function(n){function e(t,i){const s=i.account??t.account;if(!s)throw new Xu;const r=hs(s).address;return Ic({address:la(t,i).address,abi:Ji,functionName:"balanceOf",args:[r]})}n.call=e})($r||($r={}));async function Vx(n,e){const{token:t,...i}=e,{address:s}=la(n,{token:t}),r=kp(n,t),[a,c,l]=await Promise.all([r?.decimals??It(n,{...i,abi:Ji,address:s,functionName:"decimals"}),r?.name??It(n,{...i,abi:Ji,address:s,functionName:"name"}),r?.symbol??It(n,{...i,abi:Ji,address:s,functionName:"symbol"})]);return{decimals:a,name:c,symbol:l}}async function Yr(n,e){const{decimals:t,token:i,...s}=e,[r,{decimals:a}]=await Promise.all([It(n,{...s,...Yr.call(n,{token:i})}),Nc(n,{decimals:t,token:i})]);return Pc(r,a)}(function(n){function e(t,i){return Ic({address:la(t,i).address,abi:Ji,args:[],functionName:"totalSupply"})}n.call=e})(Yr||(Yr={}));const Gx=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;function jx(n){return Gx.test(n)?!Number.isNaN(new Date(n).getTime()):!1}function Ra(n){return jx(n)?new Date(n):new Date(Number.NaN)}function Wx(n){const{scheme:e,statement:t,...i}=n.match(Xx)?.groups??{},{chainId:s,expirationTime:r,issuedAt:a,notBefore:c,requestId:l,resources:d,...u}=n.match(qx)?.groups??{},f=d?.split(`
- `).slice(1);return{...i,...u,...s?{chainId:Number(s)}:{},...r?{expirationTime:Ra(r)}:{},...a?{issuedAt:Ra(a)}:{},...c?{notBefore:Ra(c)}:{},...l?{requestId:l}:{},...f?{resources:f}:{},...e?{scheme:e}:{},...t?{statement:t}:{}}}const Xx=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,qx=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.*))?(?:\nResources:(?<resources>(?:\n- .+)*))?/;function $x(n){const{address:e,domain:t,message:i,nonce:s,scheme:r,time:a=new Date}=n;if(t&&i.domain!==t||s&&i.nonce!==s||r&&i.scheme!==r||Number.isNaN(a.getTime())||i.expirationTime&&(Number.isNaN(i.expirationTime.getTime())||a>=i.expirationTime)||i.notBefore&&(Number.isNaN(i.notBefore.getTime())||a<i.notBefore))return!1;try{if(!i.address||!yi(i.address,{strict:!1})||e&&!zr(i.address,e))return!1}catch{return!1}return!0}async function Yx(n,e){const{address:t,domain:i,message:s,nonce:r,scheme:a,signature:c,time:l=new Date,...d}=e,u=Wx(s);if(!u.address||!$x({address:t,domain:i,message:u,nonce:r,scheme:a,time:l}))return!1;const h=xh(s);return ma(n,{address:u.address,hash:h,signature:c,...d})}function Vh(n){return{call:e=>Rc(n,e),createAccessList:e=>yg(n,e),createBlockFilter:()=>bg(n),createContractEventFilter:e=>fh(n,e),createEventFilter:e=>ph(n,e),createPendingTransactionFilter:()=>mh(n),estimateContractGas:e=>tm(n,e),estimateGas:e=>em(n,e),getBalance:e=>Qp(n,e),getBlobBaseFee:()=>Mg(n),getBlock:e=>$i(n,e),getBlockNumber:e=>$s(n,e),getBlockReceipts:e=>wg(n,e),getBlockTransactionCount:e=>Eg(n,e),getBytecode:e=>Gr(n,e),getChainId:()=>Jp(n),getCode:e=>Gr(n,e),getContractEvents:e=>gh(n,e),getDelegation:e=>Tg(n,e),getEip712Domain:e=>Cg(n,e),getEnsAddress:e=>ig(n,e),getEnsAvatar:e=>xg(n,e),getEnsName:e=>vg(n,e),getEnsResolver:e=>_g(n,e),getEnsText:e=>hh(n,e),getFeeHistory:e=>Pg(n,e),estimateFeesPerGas:e=>Zp(n,e),getFilterChanges:e=>ua(n,e),getFilterLogs:e=>Ig(n,e),getGasPrice:()=>Kp(n),getLogs:e=>Bc(n,e),getProof:e=>rx(n,e),estimateMaxPriorityFeePerGas:e=>Yp(n,e),fillTransaction:e=>$p(n,e),getRawTransaction:e=>ax(n,e),getStorageAt:e=>ox(n,e),getStorageValues:e=>cx(n,e),getTransaction:e=>Bu(n,e),getTransactionConfirmations:e=>lx(n,e),getTransactionCount:e=>qp(n,e),getTransactionReceipt:e=>Xp(n,e),multicall:e=>Wp(n,e),prepareTransactionRequest:e=>jp(n,e),readContract:e=>It(n,e),sendRawTransaction:e=>Gp(n,e),sendRawTransactionSync:e=>Vp(n,e),simulate:e=>Wr(n,e),simulateBlocks:e=>Wr(n,e),simulateCalls:e=>Mx(n,e),simulateContract:e=>Hp(n,e),verifyHash:e=>ma(n,e),verifyMessage:e=>Dx(n,e),verifySiweMessage:e=>Yx(n,e),verifyTypedData:e=>Ux(n,e),uninstallFilter:e=>pa(n,e),waitForTransactionReceipt:e=>zp(n,e),watchBlockHeaders:e=>Ox(n,e),watchBlocks:e=>kx(n,e),watchBlockNumber:e=>Bp(n,e),watchContractEvent:e=>Bx(n,e),watchEvent:e=>zx(n,e),watchPendingTransactions:e=>Hx(n,e),token:Kx(n)}}function Kx(n){return{getAllowance:cr(n,qr),getBalance:cr(n,$r),getMetadata:cr(n,Vx),getTotalSupply:cr(n,Yr)}}function Zx(n){const{key:e="public",name:t="Public Client"}=n;return qu({...n,key:e,name:t,type:"publicClient"}).extend(Vh)}async function Jx(n,e={}){const{assertChainId:t=!0}=e;let i;if(e.connector){const{connector:u}=e;if(n.state.status==="reconnecting"&&!u.getAccounts&&!u.getChainId)throw new nm({connector:u});const[f,h]=await Promise.all([u.getAccounts().catch(m=>{if(e.account===null)return[];throw m}),u.getChainId()]);i={accounts:f,chainId:h,connector:u}}else i=n.state.connections.get(n.state.current);if(!i)throw new im;const s=e.chainId??i.chainId,r=await i.connector.getChainId();if(t&&r!==s)throw new sm({connectionChainId:s,connectorChainId:r});const a=i.connector;if(a.getClient)return a.getClient({chainId:s});const c=hs(e.account??i.accounts[0]);if(c&&(c.address=Tt(c.address)),e.account&&!i.accounts.some(u=>u.toLowerCase()===c.address.toLowerCase()))throw new rm({address:c.address,connector:a});const l=n.chains.find(u=>u.id===s),d=await i.connector.getProvider({chainId:s});return qu({account:c,chain:l,name:"Connector Client",transport:u=>$u(d)({...u,retryCount:0})})}function Qx(n,e={}){try{return n.getClient(e)}catch{return}}function Ro(n,e={}){return Qx(n,e)?.extend(Vh)}function ev(n,e){const{onChange:t}=e;return n.subscribe(()=>Ro(n),t,{equalityFn(i,s){return i?.uid===s?.uid}})}async function tv(n,e){const{account:t,chainId:i,connector:s,...r}=e;let a;return typeof t=="object"&&t?.type==="local"?a=n.getClient({chainId:i}):a=await Jx(n,{account:t??void 0,assertChainId:!1,chainId:i,connector:s}),await am(a,om,"writeContract")({...r,...t?{account:t}:{},chain:i?{id:i}:null})}function nv(n,e={}){return{async queryFn({queryKey:t}){const i=e.abi;if(!i)throw new Error("abi is required");const{functionName:s,scopeKey:r,...a}=t[1],c=(()=>{const l=t[1];if(l.address)return{address:l.address};if(l.code)return{code:l.code};throw new Error("address or code is required")})();if(!s)throw new Error("functionName is required");return cm(n,{abi:i,functionName:s,args:a.args,...c,...a})},queryKey:iv(e)}}function iv(n={}){const{abi:e,...t}=n;return["readContract",lm(t)]}function sv(n){return{mutationFn(e){return tv(n,e)},mutationKey:["writeContract"]}}function Gh(n={}){const e=Lc(n);return dm.useSyncExternalStoreWithSelector(t=>ev(e,{onChange:t}),()=>Ro(e,n),()=>Ro(e,n),t=>t,(t,i)=>t?.uid===i?.uid)}function rv(n={}){const{abi:e,address:t,functionName:i,query:s={}}=n,r=n.code,a=Lc(n),c=um({config:a}),l=nv(a,{...n,chainId:n.chainId??c}),d=!!((t||r)&&e&&i&&(s.enabled??!0));return hm({...s,...l,enabled:d,structuralSharing:s.structuralSharing??fm})}function av(n={}){const{mutation:e}=n,t=Lc(n),i=sv(t),{mutate:s,mutateAsync:r,...a}=pm({...e,...i});return{...a,writeContract:s,writeContractAsync:r}}let Ki="guest",jh,ys,pd={owner:Ki,exists:!1,unlocked:!1,busy:!1,progress:0};const ov=new Set;let cv,md;const lv=()=>`ghostpay.local-wallet.v1.${encodeURIComponent(Ki)}`;function Wh(n={}){pd={...pd,...n},ov.forEach(e=>e())}function dv(n){if(!(n===Ki&&ys)){n!==Ki&&uv(),Ki=n;try{const e=JSON.parse(localStorage.getItem(lv())||"null");ys=e?.version===1&&typeof e.keystore=="string"&&/^0x[\da-fA-F]{40}$/.test(e.address||"")?e:void 0}catch{ys=void 0}Wh({owner:Ki,exists:!!ys,address:ys?.address,unlocked:!!jh})}}function uv(){clearTimeout(cv),jh=void 0,md?.(!1),md=void 0,Wh({unlocked:!1,approval:void 0})}const gd=rt("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);const Kr=rt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);const Yc=rt("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);const hv=rt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);const Na=rt("BellOff",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]]);const xd=rt("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);const fv=rt("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);const No=rt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const pv=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const mv=rt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const Lr=rt("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const Xh=rt("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);const Po=rt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const gv=rt("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);const qh=rt("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);const Kc=rt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);const xv=rt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);const vv=rt("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);const _v=rt("Paperclip",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);const yv=rt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);const Pa=rt("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);const Zr=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const ga=rt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);const $h=rt("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);const bv=rt("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);const Sv=rt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);const Zc=rt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);const Mv=rt("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);const ln=rt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const wv=rt("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);const Ev=rt("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);async function vd(n,e,t){const i=new Map,s=await Promise.all(n.map(async r=>{const a=r.trim();if(/^@[^\s:]+:[^\s]+$/.test(a))return a;if(a.includes(":"))throw new Error("Use a GhostChat @username or a complete Matrix ID, such as @name:server.example.");const c=Vr(a);return i.has(c)||i.set(c,(async()=>{const l=await t(c);if(!l||l.username!==c||!yi(l.wallet)||l.wallet.toLowerCase()===rs)throw new Error(`@${c} is not registered. Ask them to finish their GhostChat profile and open chat first.`);const d=new URL(e);if(d.protocol!=="https:"||d.username||d.password||d.pathname!=="/"||d.search||d.hash)throw new Error("The GhostChat messaging server is not configured correctly.");return`@w_${l.wallet.slice(2).toLowerCase()}:${d.hostname}`})()),i.get(c)}));return[...new Set(s)]}async function si(n,e){const t=await fetch(`/api/profiles${n}`,{method:e?"POST":"GET",headers:e?{"Content-Type":"application/json"}:{},body:e?JSON.stringify(e):void 0,signal:AbortSignal.timeout(2e4),cache:"no-store"}),i=await t.json();if(!t.ok)throw new Error(i.error||"Username service unavailable.");return i}async function _d(n){const e=n.trim();if(yi(e)){if(e.toLowerCase()===rs)throw new Error("The zero address cannot receive a payment.");return{address:Tt(e),label:"Wallet address"}}const t=Vr(e),i=await si(`/name/${t}`);if(!i||i.username!==t||!yi(i.wallet))throw new Error("That username is not registered. Ask the recipient to open their profile wallet.");return{address:Tt(i.wallet),label:`@${i.username}`}}async function Tv(n){const e=[...new Set(n.filter(i=>!yi(i.trim())).map(i=>Vr(i)))],t=e.length?await si("/resolve",{usernames:e}):[];return n.map(i=>{const s=i.trim();if(yi(s)){if(s.toLowerCase()===rs)throw new Error("The zero address cannot receive an allocation.");return{address:Tt(s),label:"Wallet address"}}const r=Vr(s),a=t.find(c=>c.username===r);if(!a||!yi(a.wallet))throw new Error(`@${r} is not registered.`);return{address:Tt(a.wallet),label:`@${r}`}})}const Yh="ghostpay.messenger.preview.v1";function Av(){try{const n=JSON.parse(localStorage.getItem(Yh)||"null");if(Array.isArray(n?.rooms)&&n.rooms.length<50&&n.messages&&typeof n.messages=="object"&&!Array.isArray(n.messages)&&n.rooms.every(e=>e&&typeof e.id=="string"&&typeof e.name=="string"&&Array.isArray(e.members)&&Number.isFinite(e.lastAt)&&Array.isArray(n.messages[e.id])&&n.messages[e.id].length<=150&&n.messages[e.id].every(t=>t&&typeof t.id=="string"&&typeof t.body=="string"&&Number.isFinite(t.timestamp))))return n}catch{}return Yu()}function Cv(){try{return JSON.parse(localStorage.getItem("ghostpay.messenger.preferences.v1")||"{}")}catch{return{}}}function Rv(){return mm().then(n=>n||vo())}const Kh=L.createContext(null);function Nv({children:n}){const[e,t]=L.useState(vo()?"matrix":"preview"),[i,s]=L.useState(vo),[r,a]=L.useState(Av),[c,l]=L.useState({rooms:[],messages:{}}),[d,u]=L.useState("nora"),[f,h]=L.useState(Cv),[m,x]=L.useState("disconnected"),[y,g]=L.useState(""),[p,E]=L.useState(""),[A,b]=L.useState(()=>{try{return localStorage.getItem("ghostpay.messenger.receipts")!=="false"}catch{return!0}}),w=L.useCallback(J=>E(J),[]),M=L.useCallback(()=>{l(tt.snapshot()),x(tt.state),g(tt.error)},[]),C=L.useCallback(async J=>{t("matrix"),s(J),x("connecting"),g("");try{await tt.start(J),M()}catch(oe){throw x("error"),g(oe instanceof Error?oe.message:"Could not connect."),oe}},[M]);L.useEffect(()=>tt.subscribe(M),[M]),L.useEffect(()=>()=>{tt.stop(!1)},[]),L.useEffect(()=>{dv(i?.userId||"guest")},[i?.userId]),L.useEffect(()=>{let J=!0;return Rv().then(oe=>{if(J&&oe)return C(oe)}).catch(oe=>{J&&(g(oe.message),w("The connection needs attention. Open Settings to reconnect."))}),()=>{J=!1}},[C,w]),L.useEffect(()=>{try{localStorage.setItem(Yh,JSON.stringify(r))}catch{w("Preview storage is full. Reset preview data in Settings.")}},[r,w]),L.useEffect(()=>{try{localStorage.setItem("ghostpay.messenger.preferences.v1",JSON.stringify(f))}catch{}},[f]),L.useEffect(()=>{try{localStorage.setItem("ghostpay.messenger.receipts",String(A))}catch{}},[A]),L.useEffect(()=>{if(!p)return;const J=setTimeout(()=>E(""),5500);return()=>clearTimeout(J)},[p]);const _=e==="preview"?r:c,T=L.useMemo(()=>_.rooms.map(J=>({...J,...f[J.id]})).sort((J,oe)=>+!!oe.pinned-+!!J.pinned||oe.lastAt-J.lastAt),[_.rooms,f]);L.useEffect(()=>{T.length&&!T.some(J=>J.id===d)&&u(T.find(J=>!J.archived)?.id||T[0].id)},[T,d]);async function P(){await tt.stop(),t("preview"),s(void 0),u("nora"),x("disconnected"),g("")}function I(J){u(J),e==="preview"&&a(oe=>({...oe,rooms:oe.rooms.map(de=>de.id===J?{...de,unread:0}:de)}))}function U(J){a(oe=>({rooms:oe.rooms.map(de=>de.id===d?{...de,preview:J.payment?"Payment link":J.body,lastAt:J.timestamp}:de),messages:{...oe.messages,[d]:[...oe.messages[d]||[],J].slice(-150)}}))}async function G(J,oe,de){if(!d)throw new Error("Choose a conversation first.");e==="matrix"?await tt.send(d,J,oe,de):U({id:crypto.randomUUID(),roomId:d,sender:"you",senderName:"You",body:J,timestamp:Date.now(),own:!0,state:"local",payment:oe,...de?{reply:{id:de.id,body:de.body,sender:de.senderName}}:{}})}async function R(J){if(e==="matrix")return tt.upload(d,J);if(J.size>2*1024*1024)throw new Error("Preview attachments are limited to 2 MB. Connect to Matrix for larger files.");const oe=await new Promise((de,Se)=>{const q=new FileReader;q.onload=()=>de(String(q.result)),q.onerror=Se,q.readAsDataURL(J)});U({id:crypto.randomUUID(),roomId:d,sender:"you",senderName:"You",body:J.name,timestamp:Date.now(),own:!0,state:"local",attachment:{name:J.name,type:J.type,size:J.size,url:oe}}),w("Attachment saved to this local preview. It was not uploaded or delivered.")}async function B(J,oe,de){if(e==="matrix"){const he=await vd(J,i?.homeserver||wa(),le=>si(`/name/${le}`)),ue=await tt.createRoom(he,oe,de);u(ue);return}const Se=crypto.randomUUID(),q=oe||J[0]?.replace(/^@/,"").split(":")[0]||"New conversation",X={id:Se,name:q,initials:Ea(q),kind:oe?"group":"direct",communityId:de,subtitle:oe?"Preview group":"Preview contact",unread:0,lastAt:Date.now(),encrypted:!1,preview:"A new conversation starts here.",members:[{id:"you",name:"You"},...J.map(he=>({id:he,name:he}))]};a(he=>({rooms:[X,...he.rooms],messages:{...he.messages,[Se]:[]}})),u(Se)}async function z(J,oe){if(e==="matrix"){const le=await vd(J,i?.homeserver||wa(),ze=>si(`/name/${ze}`)),Ce=await tt.createCommunity(le,oe);u(Ce.generalId);return}const de=crypto.randomUUID(),Se=crypto.randomUUID(),q=crypto.randomUUID(),X=[{id:"you",name:"You"},...J.map(le=>({id:le,name:le}))],he={id:de,name:oe,initials:Ea(oe),kind:"community",subtitle:"Preview community",unread:0,lastAt:Date.now(),members:X,encrypted:!1,preview:"Your people, together."},ue=(le,Ce)=>({...he,id:le,name:`${oe} · ${Ce}`,kind:"group",communityId:de,subtitle:Ce==="Announcements"?"Preview announcements":"Preview group",preview:Ce==="Announcements"?"Updates for the whole community.":"A place for everyone to talk."});a(le=>({rooms:[he,ue(Se,"General"),ue(q,"Announcements"),...le.rooms],messages:{...le.messages,[de]:[],[Se]:[],[q]:[]}})),u(Se),w("Community preview created with General and Announcements groups. Nothing was sent.")}async function k(J,oe){if(e==="matrix")return tt.invite(J,oe);if(!oe.trim())throw new Error("Enter a member name.");a(de=>({...de,rooms:de.rooms.map(Se=>Se.id===J?{...Se,members:[...Se.members.filter(q=>q.id!==oe),{id:oe,name:oe}]}:Se)})),w("Member added to this local preview.")}async function K(J,oe){if(e==="matrix")return tt.rename(J,oe);if(!oe.trim()||oe.length>80)throw new Error("Use a name of 1–80 characters.");a(de=>({...de,rooms:de.rooms.map(Se=>Se.id===J?{...Se,name:oe.trim(),initials:Ea(oe)}:Se)}))}async function H(J,oe){if(e==="matrix")return tt.removeMember(J,oe);a(de=>({...de,rooms:de.rooms.map(Se=>Se.id===J?{...Se,members:Se.members.filter(q=>q.id!==oe)}:Se)}))}async function ee(J){if(e==="matrix"){await tt.leave(J);return}a(oe=>({...oe,rooms:oe.rooms.filter(de=>de.id!==J)})),u(""),w("Left the preview group on this device.")}function ne(J,oe){const de=T.find(Se=>Se.id===J);h(Se=>({...Se,[J]:{...Se[J],[oe]:!de?.[oe]}})),w(`${oe==="pinned"?"Pin":oe==="muted"?"Mute":"Archive"} preference saved on this device.`)}async function te(J){if(!J.own)throw new Error("You can remove your own messages.");if(e==="matrix")return tt.redact(J.roomId,J.id);a(oe=>({...oe,messages:{...oe.messages,[J.roomId]:(oe.messages[J.roomId]||[]).filter(de=>de.id!==J.id)}}))}return o.jsx(Kh.Provider,{value:{mode:e,rooms:T,messages:_.messages,activeId:d,setActive:I,session:i,selfAvatar:_.selfAvatar,state:m,error:y,server:i?.homeserver||wa(),toast:p,notify:w,connect:C,disconnect:P,send:G,upload:R,createRoom:B,createCommunity:z,invite:k,rename:K,removeMember:H,leaveRoom:ee,updateRoom:ne,remove:te,resetPreview:()=>{a(Yu()),u("nora"),w("Local preview reset.")},receipts:A,setReceipts:b},children:n})}function Cn(){const n=L.useContext(Kh);if(!n)throw new Error("Missing messenger provider.");return n}function Pv({onClose:n}){const e=Cn(),t=Ys(),[i,s]=L.useState(!1),[r,a]=L.useState("");async function c(){s(!0),a("");try{if(!t.address)throw new Error("Sign in with BridgeKey first.");const l=await gm("/me");if(!l)throw new Error("Complete your profile before starting chat.");await e.connect(await xm(t.address,l.username)),n()}catch(l){a(l.message)}finally{s(!1)}}return o.jsxs(Ai,{title:"Your conversations. Your wallet.",eyebrow:"CONNECT MESSAGING",onClose:()=>{i||n()},children:[o.jsx("p",{className:"ms-modal-copy",children:"Connect your wallet-linked Matrix account. Your first connection creates it automatically; no separate login or Matrix password is needed."}),o.jsxs("button",{className:"ms-button ms-primary ms-full",disabled:i,onClick:()=>{c()},children:[o.jsx(Ci,{size:17}),i?"Connecting…":"Connect messaging"]}),r&&o.jsx("p",{className:"ms-alert",role:"alert",children:r}),o.jsxs("div",{className:"ms-modal-note",children:[o.jsx(zt,{size:18}),o.jsx("span",{children:"Your wallet key stays in BridgeKey. Chat encryption and device recovery remain separate."})]})]})}function Io({onClose:n,initialKind:e="direct",parentId:t="",initialPeople:i=""}){const s=L.useRef(!1),r=Cn(),[a,c]=L.useState(e),[l,d]=L.useState(i),[u,f]=L.useState(""),[h,m]=L.useState(t),[x,y]=L.useState(""),[g,p]=L.useState(!1),[E,A]=L.useState(!1),b=r.rooms.filter(M=>M.kind==="community");async function w(M){if(M.preventDefault(),!s.current){s.current=!0,p(!0),y("");try{const C=l.split(/[,\n]/).map(_=>_.trim()).filter(Boolean);a==="community"?await r.createCommunity(C,u.trim()):await r.createRoom(C,a==="group"?u.trim():void 0,a==="group"&&h||void 0),n()}catch(C){y(C.message),a==="community"&&C.message.includes("Community setup paused")&&A(!0)}finally{s.current=!1,p(!1)}}}return o.jsxs(Ai,{title:a==="community"?"Your people. One place.":"Say something good.",eyebrow:"A NEW CONNECTION",onClose:()=>{g||n()},children:[o.jsx("p",{className:"ms-modal-copy",children:a==="community"?"Bring related groups together. A General group and an admin-led Announcements group are created with your community.":"A familiar face. A new idea. It all starts with a hello."}),o.jsxs("div",{className:"ms-segments gp-new-kind",children:[o.jsxs("button",{className:a==="direct"?"selected":"",onClick:()=>c("direct"),children:[o.jsx(Ku,{size:15}),"Direct"]}),o.jsxs("button",{className:a==="group"?"selected":"",onClick:()=>c("group"),children:[o.jsx(ln,{size:15}),"Group"]}),o.jsxs("button",{className:a==="community"?"selected":"",onClick:()=>c("community"),children:[o.jsx(Lr,{size:15}),"Community"]})]}),o.jsxs("form",{className:"ms-form",onSubmit:w,children:[a!=="direct"&&o.jsxs(o.Fragment,{children:[o.jsx("label",{htmlFor:"group-name",children:a==="community"?"Community name":"Group name"}),o.jsx("input",{id:"group-name",value:u,onChange:M=>f(M.target.value),placeholder:"Your kind of people",required:!0,maxLength:80})]}),a==="group"&&b.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("label",{htmlFor:"group-parent",children:"Community"}),o.jsxs("select",{id:"group-parent",value:h,onChange:M=>m(M.target.value),children:[o.jsx("option",{value:"",children:"Independent group"}),b.map(M=>o.jsx("option",{value:M.id,children:M.name},M.id))]})]}),o.jsx("label",{htmlFor:"chat-people",children:r.mode==="preview"?"Preview member names":a==="direct"?"Their GhostChat username or Matrix ID":"Usernames or Matrix IDs, separated by commas"}),o.jsx("textarea",{id:"chat-people",rows:3,value:l,onChange:M=>d(M.target.value),placeholder:r.mode==="preview"?"e.g. Jamie, Alex":"@prembharne45 or @name:server.example",required:a==="direct",maxLength:2e3}),r.mode==="preview"?o.jsx("p",{className:"ms-fine",children:"This creates a local preview. No invitation or message is delivered."}):o.jsx("p",{className:"ms-fine",children:"Enter their registered GhostChat @username to find their wallet-linked Matrix account. They need to have opened chat once. Conversations use Matrix encryption; community names and membership metadata are visible to the server."}),x&&o.jsx("p",{className:"ms-alert",role:"alert",children:x}),o.jsxs("button",{className:"ms-button ms-primary",disabled:g,children:[g?o.jsx(Xt,{size:16,className:"spin"}):o.jsx(Un,{size:16})," ",a==="community"?E?"Resume community setup":"Create community":a==="group"?"Create group":"Start a conversation"]})]})]})}let bs;function Iv(n){const e=BigInt(Math.floor(Date.now()/1e3));return(!bs||bs.number!==n.number)&&(bs={number:n.number,timestamp:n.timestamp>e?n.timestamp:e,observedAt:e}),bs.timestamp+(e-bs.observedAt)}function eT(){const n=Gh({chainId:jt.id});return oi({queryKey:["chain-time"],queryFn:async()=>Iv(await n.getBlock()),refetchInterval:12e3,enabled:!!n})}function Lv(n){return rv({address:Us,abi:yo,functionName:"getPayment",args:[n],chainId:jt.id,query:{enabled:_o&&n>0n,refetchInterval:12e3}})}const Dv=L.lazy(()=>Ri(()=>import("./WalletDialog-C0EPoeRE.js").then(n=>n.W),__vite__mapDeps([0,1,2])));function Uv(){const[n,e]=L.useState(!1),{address:t,chainId:i}=Ys(),{disconnect:s}=vm(),{switchChainAsync:r}=_m(),{data:a}=ym({address:t,chainId:jt.id,query:{refetchInterval:5e3}}),c=ps();return o.jsxs("div",{className:"wallet-wrap",children:[t?o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:"wallet-button",onClick:()=>{i!==jt.id?c.run(async()=>{await r({chainId:jt.id})}):e(!0)},children:[o.jsx("span",{className:"wallet-dot"}),i!==jt.id?"Switch to MST Testnet":o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"balance",children:[Number(a?.formatted||0).toFixed(3)," tMSTC"]}),o.jsx("span",{className:"wallet-address",children:bm(t)})]}),o.jsx(No,{size:14})]}),o.jsx("button",{className:"icon-button","aria-label":"Disconnect wallet",onClick:()=>s(),children:o.jsx(bo,{size:17})})]}):o.jsxs("button",{className:"wallet-button",disabled:c.busy,onClick:()=>e(!0),children:[o.jsx(Ci,{size:16}),"Connect wallet",o.jsx(No,{size:14})]}),c.error&&o.jsxs("div",{className:"wallet-error",role:"alert",children:[c.error," ",o.jsx("a",{href:"https://mstblockchain.com/Protocol/",target:"_blank",rel:"noreferrer",children:"MST help ↗"})]}),n&&o.jsx(L.Suspense,{fallback:null,children:o.jsx(Dv,{onClose:()=>e(!1)})})]})}function Lo(n,e=Date.now()){return!!n&&/^[0-9]+(?:\.[0-9]{1,12})?$/.test(n.usd)&&Number(n.usd)>0&&e-n.quotedAt<=18e4&&n.quotedAt-e<=6e4}function yd(n,e){if(n.length>80||!(e===0?/^\d+$/:new RegExp(`^\\d+(?:\\.\\d{1,${e}})?$`)).test(n))throw new Error(`Use a positive amount with at most ${e} decimal places.`);const[t,i=""]=n.split(".");return{units:BigInt(t+i),scale:10n**BigInt(i.length)}}function Mn(n,e,t,i,s=Date.now()){if(!Number.isInteger(t)||t<0||t>18)throw new Error("Unsupported native precision.");const r=yd(n,e==="usd"?2:t);let a;if(e==="usd"){if(!Lo(i,s))throw new Error("Refresh the live rate before entering a USD reference amount.");const c=yd(i.usd,12);a=r.units*c.scale*10n**BigInt(t)/(r.scale*c.units)}else a=r.units*10n**BigInt(t)/r.scale;if(a<=0n||a>=2n**256n)throw new Error("Amount is below one native unit or too large.");return{units:a,native:cn(a,t)}}const Fv={ETH:"ethereum",BNB:"binancecoin",POL:"polygon-ecosystem-token",AVAX:"avalanche-2",CELO:"celo",S:"sonic-3",FTM:"fantom",ETC:"ethereum-classic",XDAI:"xdai"};function Ov(n){const e={tBNB:"BNB","S-CELO":"CELO",tETH:"ETH"}[n]||n;return e in Fv?e:void 0}function xa(n){const e=Ov(n),t=oi({queryKey:["native-market-prices"],queryFn:async()=>{const a=await fetch("/api/prices",{signal:AbortSignal.timeout(18e3)});if(!a.ok)throw new Error("Live rates are temporarily unavailable.");return await a.json()},enabled:!!e,staleTime:3e4,refetchInterval:e?45e3:!1,retry:1}),[i,s]=L.useState(Date.now);L.useEffect(()=>{const a=setInterval(()=>s(Date.now()),5e3);return()=>clearInterval(a)},[]);const r=e?t.data?.quotes[e]:void 0;return{...t,supported:!!e,quote:Lo(r,i)?r:void 0,stale:!!r&&!Lo(r,i)}}function Zh({id:n,symbol:e,decimals:t=18,value:i,onChange:s,mode:r,setMode:a,disabled:c=!1,fixedQuote:l,testnet:d=!0,label:u="Amount"}){const f=xa(e),h=l||f.quote;let m="";try{if(i){const y=Mn(i,r,t,h,l?.quotedAt);m=r==="usd"?`${y.native} ${e}`:h?`$${(Number(y.native)*Number(h.usd)).toLocaleString(void 0,{maximumFractionDigits:2,minimumFractionDigits:2})} USD reference`:""}}catch{}function x(){const y=r==="usd"?"native":"usd";try{if(i){const g=Mn(i,r,t,f.quote);s(y==="native"?g.native:(Number(g.native)*Number(f.quote.usd)).toFixed(2))}}catch{s("")}a(y)}return o.jsxs(o.Fragment,{children:[o.jsxs("label",{htmlFor:n,children:[u," ",o.jsx("span",{children:r==="usd"?"USD reference":d?`Test ${e} only`:`${e} · real coins`})]}),o.jsxs("div",{className:"ms-amount-field gp-quoted-amount",children:[o.jsx("input",{id:n,"aria-label":`Amount in ${r==="usd"?"USD reference":e}`,value:i,onChange:y=>s(y.target.value),inputMode:"decimal",placeholder:"0.00",required:!0,disabled:c,autoComplete:"off"}),o.jsx("span",{children:r==="usd"?"USD":e}),o.jsx("button",{type:"button",className:"ms-icon","aria-label":`Enter amount in ${r==="usd"?e:"USD"}`,onClick:x,disabled:c||r==="native"&&!f.quote,children:o.jsx(Yc,{size:17})})]}),o.jsx("div",{className:"gp-conversion","aria-live":"polite",children:o.jsx("strong",{children:m?`≈ ${m}`:r==="usd"?`Settles in ${d?"test ":""}${e}`:`Native ${e} amount`})}),o.jsxs("div",{className:"gp-rate",children:[o.jsx("span",{className:h?"gp-rate-dot":"gp-rate-dot unavailable"}),o.jsx("span",{children:h?`1 ${e} ≈ $${Number(h.usd).toLocaleString(void 0,{maximumFractionDigits:6})} USD · ${h.source}`:f.isFetching?"Fetching a live market rate…":f.stale?"Rate expired · refresh before USD conversion":"No live rate · native amounts are still available"}),o.jsx("button",{type:"button",className:"ms-icon","aria-label":"Refresh exchange rate",onClick:()=>{f.refetch()},disabled:f.isFetching||c||!f.supported,children:o.jsx(Zu,{size:12,className:f.isFetching?"spin":""})})]}),h&&o.jsxs("p",{className:"ms-fine gp-rate-time",children:[l?"Rate saved for this payment":h.timestampKind==="provider"?"Price updated":"Rate retrieved"," ",new Date(h.quotedAt).toLocaleTimeString(),". Estimate only; no exchange or USD guarantee."]}),o.jsx("p",{className:"ms-fine gp-testnet-value",children:d?f.supported?"Testnet coins have no redeemable USD value. Conversion uses the corresponding mainnet coin’s market price.":`Enter native ${e} test coins. No USD conversion is provided for this asset.`:"Mainnet payments spend real coins. Market conversion is an estimate; gas is additional."})]})}function Jc({network:n,onChange:e,disabled:t,feature:i="link"}){const[s,r]=L.useState(!1),[a,c]=L.useState(""),l=Sm.filter(u=>`${u.name} ${u.symbol} ${u.id}`.toLowerCase().includes(a.toLowerCase())),d=Qt(n.id);return o.jsxs(o.Fragment,{children:[o.jsx("label",{children:"Native coin & network"}),o.jsxs("button",{type:"button",className:"gp-network-picker",onClick:()=>r(!0),disabled:t,children:[o.jsx("span",{className:"gp-coin-mark",children:n.symbol.replace(/^t/,"").slice(0,1)}),o.jsxs("span",{children:[o.jsx("strong",{children:n.symbol}),o.jsx("small",{children:n.name})]}),o.jsx("span",{className:"gp-testnet-tag",children:d.testnet?"TESTNET":"MAINNET"}),o.jsx(No,{size:16})]}),s&&o.jsxs(Ai,{title:"Choose your network",eyebrow:"EVM NATIVE COINS",onClose:()=>r(!1),children:[o.jsx("p",{className:"ms-modal-copy",children:"Funds stay on the selected network. This is not a bridge. Mainnet transfers spend real coins and gas."}),o.jsxs("div",{className:"gp-network-search",children:[o.jsx(mi,{size:16}),o.jsx("input",{autoFocus:!0,"aria-label":"Search EVM networks",placeholder:"Search coin, network, or chain ID",value:a,onChange:u=>c(u.target.value)})]}),o.jsxs("div",{className:"gp-network-list",children:[l.map(u=>{const f=Mm(u.id,i);return o.jsxs("button",{type:"button",disabled:!f.enabled,title:f.reason,onClick:()=>{e(u),r(!1)},children:[o.jsx("span",{className:"gp-coin-mark",children:u.symbol.slice(0,1)}),o.jsxs("span",{children:[o.jsx("strong",{children:u.name}),o.jsxs("small",{children:[u.symbol," · ",u.testnet?"Testnet":"Mainnet"," · Chain ",u.id]}),!f.enabled&&o.jsx("small",{children:"Awaiting verified deployment and activation"})]}),u.id===n.id&&o.jsx(fn,{size:16})]},u.id)}),!l.length&&o.jsx("p",{className:"ms-fine",children:"No matching network."})]}),o.jsx("p",{className:"ms-fine",children:"Testnet links and community funds require a verified contract before funding. Mainnet contract funding is disabled. P2P currently uses MST Testnet."})]})]})}let bd;function kv(){return bd||=fetch("/contracts/native-escrow.json",{cache:"force-cache"}).then(async n=>{if(!n.ok)throw new Error("Escrow deployment artifact is unavailable.");const e=await n.json();if(e.version!==2||e.evmVersion!=="paris"||e.testnetOnly!==!0||!/^0x[\da-f]+$/i.test(e.bytecode)||!/^0x[\da-f]+$/i.test(e.deployedBytecode))throw new Error("Invalid escrow artifact.");return e}).catch(n=>{throw bd=void 0,n})}const Bv=n=>{const e=Qt(n);return Zx({chain:Qu(n),transport:wm(e.rpc,{timeout:18e3,retryCount:1})})},Ia=new Map;function Ht(n){return Qt(n),Ia.has(n)||Ia.set(n,Bv(n)),Ia.get(n)}async function er(n){if(await Ht(n).getChainId()!==n)throw new Error("The public RPC returned a different chain. No transaction will be signed.")}async function Fs(n,e,t){Ni(n);const i=Tt(e);await er(n);const[s,r]=await Promise.all([kv(),Ht(n).getCode({address:i})]);if(!r||r.toLowerCase()!==s.deployedBytecode.toLowerCase())throw new Error("This address does not contain the exact GhostPay native escrow contract.");if(await Ht(n).readContract({address:i,abi:Fn,functionName:"domainChainId"})!==BigInt(n))throw new Error("Escrow signing domain does not match this testnet.");return t&&await Jh(n,i,t,s.bytecode),i}async function Jh(n,e,t,i){if(Ni(n),await er(n),!/^0x[\da-fA-F]{64}$/.test(t))throw new Error("Provide the contract creation transaction hash.");const s=Ht(n),[r,a,c]=await Promise.all([s.getTransaction({hash:t}),s.getTransactionReceipt({hash:t}),s.getBlockNumber()]);if(r.to!==null||r.input.toLowerCase()!==i.toLowerCase()||a.status!=="success"||a.contractAddress?.toLowerCase()!==e.toLowerCase())throw new Error("Creation transaction does not match the trusted GhostPay deployment code and address.");if(c<a.blockNumber+1n)throw new Error("Wait for two deployment confirmations and verify again.");if((await s.getBlock({blockNumber:a.blockNumber})).hash!==a.blockHash)throw new Error("The deployment block changed. Verify the canonical creation transaction again.");return e}function Sd(n,e){try{return JSON.parse(localStorage.getItem("ghostpay.native.creation.v1")||"{}")[`${n}:${e.toLowerCase()}`]||""}catch{return""}}function zv(n,e,t){let i={};try{i=JSON.parse(localStorage.getItem("ghostpay.native.creation.v1")||"{}")}catch{}localStorage.setItem("ghostpay.native.creation.v1",JSON.stringify({...i,[`${n}:${e.toLowerCase()}`]:t}))}async function Hv(n,e,t){const i=Qt(n);await er(n);const s=`0x${n.toString(16)}`;if(Number(await e.request({method:"eth_chainId"}))!==n)try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]})}catch(a){if(a.code!==4902)throw a;await e.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:i.name,nativeCurrency:{name:i.symbol,symbol:i.symbol,decimals:i.decimals},rpcUrls:[i.rpc],...i.explorer?{blockExplorerUrls:[i.explorer]}:{}}]}),await e.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]})}if(Number(await e.request({method:"eth_chainId"}))!==n)throw new Error("Switch your wallet to the selected network.");if(!(await e.request({method:"eth_accounts"})).some(a=>a.toLowerCase()===t.toLowerCase()))throw new Error("The connected wallet changed. Reconnect before signing.");return Em({account:t,chain:Qu(n),transport:$u(e)})}const Do="ghostpay.native.escrows.v2";function Md(n){try{const e=JSON.parse(localStorage.getItem(Do)||"{}");return typeof e[n]=="string"?e[n]:""}catch{return""}}function tT(n,e,t){let i={};try{i=JSON.parse(localStorage.getItem(Do)||"{}")}catch{}localStorage.setItem(Do,JSON.stringify({...i,[n]:e})),t&&zv(n,e,t)}function Qh(){try{const n=JSON.parse(localStorage.getItem("ghostpay.native.payments.v2")||"[]");return Array.isArray(n)?n.filter(e=>Ju(e)&&typeof e.hash=="string"&&/^0x[\da-fA-F]{64}$/.test(e.hash)&&typeof e.account=="string"&&/^0x[\da-fA-F]{40}$/.test(e.account)&&Number.isFinite(e.createdAt)).slice(0,200):[]}catch{return[]}}function Vv(n){const e=Qh().filter(t=>!(t.chainId===n.chainId&&t.contract.toLowerCase()===n.contract.toLowerCase()&&t.paymentId===n.paymentId));try{localStorage.setItem("ghostpay.native.payments.v2",JSON.stringify([n,...e].slice(0,200)))}catch{}}function tr(n){const e=Ys(),t=Tm();async function i(){if(navigator.onLine===!1)throw new Error("Reconnect before opening your wallet or approving a transaction.");let s=Bl(zl);if((!s.connector||!s.address||!Hl(s.connector))&&(await Am(),s=Bl(zl)),!s.connector||!s.address||!Hl(s.connector))throw new Error("Connect your wallet to continue.");const r=await s.connector.getProvider();if(!r?.request)throw new Error("The connected wallet has no EVM provider.");return Hv(n,r,s.address)}return{...e,wallet:i,external:!!e.address&&e.connector?.id!=="ghostpay-local",connecting:t.isPending}}function Gv({onClose:n,onShare:e,recipient:t,standalone:i=!1,inline:s=!1,onLock:r,onBusyChange:a}){const[c,l]=L.useState(()=>Qt(91562037)),[d,u]=L.useState(()=>Md(c.id)),[f,h]=L.useState(""),[m,x]=L.useState(""),[y,g]=L.useState(""),[p,E]=L.useState("native"),[A,b]=L.useState("86400"),[w,M]=L.useState(),[C,_]=L.useState(),T=L.useRef(void 0),[P,I]=L.useState(),U=L.useRef(void 0),[G,R]=L.useState();L.useRef(void 0);const[B,z]=L.useState(!1),k=Ys(),K=tr(c.id),H=xa(c.symbol),ee=Gh({chainId:jt.id}),{writeContractAsync:ne}=av(),te=ps(),J=c.id===jt.id&&!d,oe=J?_o:!!d&&!!Sd(c.id,d),de=te.busy||!!P||!!C||!!G;L.useEffect(()=>{r?.(de)},[de]),L.useEffect(()=>{a?.(te.busy)},[te.busy,a]);async function Se(){await te.run(async()=>{await K.wallet()})}async function q(ue){e&&await e(`A little something, headed your way. ${ue.url}`,ue.reference),e&&n()}async function X(ue){ue.preventDefault(),await te.run(async()=>{if(T.current)return q(T.current);const le=w&&U.current?w:{...Mn(y,p,c.decimals,H.quote),quote:H.quote};M(le);let Ce,ze,Oe;if(J){if(!k.address||k.chainId!==jt.id||!ee||!_o)throw new Error("Connect a wallet to MST Testnet first.");const Te=await ee.getBlock();!U.current&&p==="usd"&&Mn(y,p,c.decimals,le.quote),ze=U.current||await ne({address:Us,abi:yo,functionName:"createETHPayment",args:[Te.timestamp+BigInt(A)],value:le.units,chainId:jt.id}),U.current=ze,I(ze),te.setNotice("Waiting for the MST Testnet deposit to confirm…");const Ve=await ee.waitForTransactionReceipt({hash:ze});if(Ve.status!=="success")throw U.current=void 0,I(void 0),new Error("Deposit reverted. No payment was created.");for(const Ye of Ve.logs)if(Ye.address.toLowerCase()===Us.toLowerCase())try{const Y=cs({abi:yo,eventName:"PaymentCreated",data:Ye.data,topics:Ye.topics});Y.args.sender.toLowerCase()===k.address.toLowerCase()&&Y.args.amount===le.units&&(Oe=String(Y.args.paymentId))}catch{}Ce={version:1,chainId:jt.id,contract:Us,paymentId:Oe||""}}else{const Te=Sd(c.id,d);if(!Te)throw new Error("Verify the escrow creation transaction before funding it.");const Ve=await Fs(c.id,d,Te),Ye=await K.wallet(),Y=Ht(c.id);!U.current&&p==="usd"&&Mn(y,p,c.decimals,le.quote);const Re=await Y.getBlock();ze=U.current||await Ye.writeContract({address:Ve,abi:Fn,functionName:"createNativePayment",args:[Re.timestamp+BigInt(A)],value:le.units}),U.current=ze,I(ze),te.setNotice(`Waiting for ${c.name} to confirm your deposit…`);const Je=await Y.waitForTransactionReceipt({hash:ze,confirmations:2});if(Je.status!=="success")throw U.current=void 0,I(void 0),new Error("Deposit reverted. No payment was created.");if((await Y.getBlock({blockNumber:Je.blockNumber})).hash!==Je.blockHash)throw new Error("Deposit block changed. Check this same transaction again.");for(const vt of Je.logs)if(vt.address.toLowerCase()===Ve.toLowerCase())try{const Qe=cs({abi:Fn,eventName:"PaymentCreated",data:vt.data,topics:vt.topics});Qe.args.sender.toLowerCase()===Ye.account.address.toLowerCase()&&Qe.args.amount===le.units&&(Oe=String(Qe.args.paymentId))}catch{}Ce={version:2,chainId:c.id,contract:Ve,paymentId:Oe||"",deploymentHash:Te},Oe&&Vv({...Ce,hash:ze,account:Ye.account.address,createdAt:Date.now()})}if(!Oe)throw new Error("No matching payment event found. Inspect this transaction before creating another deposit.");const He=Ce.version===1?Cm(Ce.paymentId):`${window.location.origin}${zs(Ce)}`,We={reference:Ce,hash:ze,url:He};T.current=We,_(We),await q(We)}),!U.current&&!T.current&&M(void 0)}const he=o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"ms-modal-copy",children:[t?`Create a link for ${t}. `:"Fund a payment and share its link. ","Your recipient chooses a wallet. You approve the exact address."]}),o.jsxs("form",{className:"ms-form gp-native-form",onSubmit:X,children:[o.jsx(Jc,{network:c,disabled:de,onChange:ue=>{l(Qt(ue.id)),u(Md(ue.id)),g(""),M(void 0),E(jv(ue.symbol)?"usd":"native"),h("")}}),o.jsxs("div",{className:"gp-network-context",children:[o.jsx(zt,{size:13}),o.jsxs("span",{children:["Testnet only · no bridging · native ",c.symbol]})]}),J?o.jsx("div",{className:"ms-wallet-connect workspace",children:o.jsx(Uv,{})}):o.jsxs("div",{className:"gp-network-wallet",children:[o.jsxs("button",{type:"button",className:"ms-button ms-secondary ms-full",onClick:Se,disabled:te.busy||K.connecting,children:[o.jsx(Ci,{size:16}),K.external?K.chainId===c.id?`${k.address.slice(0,6)}…${k.address.slice(-4)} · ${c.symbol}`:`Switch wallet to ${c.name}`:"Connect wallet",o.jsx(fn,{size:14})]}),o.jsx("p",{className:"ms-fine",children:"Use your selected EVM wallet on this testnet. Deployment verification is required before funding."})]}),!oe&&o.jsx("p",{className:"ms-fine",role:"status",children:"Payment links are awaiting the shared escrow configuration. Please contact the organizer."}),o.jsx(Zh,{id:"chat-amount",label:"Total funds allocated to this link",symbol:c.symbol,decimals:c.decimals,value:y,onChange:g,mode:p,setMode:E,disabled:de,fixedQuote:w?.quote}),o.jsx("label",{htmlFor:"chat-expiry",children:"Link expires in"}),o.jsxs("select",{id:"chat-expiry",value:A,onChange:ue=>b(ue.target.value),disabled:de,children:[o.jsx("option",{value:"3600",children:"1 hour"}),o.jsx("option",{value:"86400",children:"24 hours"}),o.jsx("option",{value:"604800",children:"7 days"}),o.jsx("option",{value:"300",children:"5 minutes · quick test"})]}),o.jsxs("div",{className:"ms-summary-row",children:[o.jsx("span",{children:"Protocol fee"}),o.jsxs("strong",{children:["0 ",c.symbol,o.jsx("small",{children:" + network gas"})]})]}),o.jsxs("div",{className:"ms-modal-note",children:[o.jsx(zt,{size:17}),o.jsxs("span",{children:["Your deposit will be held in escrow on ",c.name,". Sharing a link does not authorize withdrawal. ",e&&"If messaging is not connected, the card stays on this device; share the public link separately."]})]}),te.error&&o.jsx("p",{className:"ms-alert",role:"alert",children:te.error}),te.notice&&o.jsx("p",{className:"ms-fine",role:"status",children:te.notice}),(P||G)&&(J?Vl:c.explorer)&&o.jsxs("a",{className:"ms-text",href:`${J?Vl:c.explorer}/tx/${P||G}`,target:"_blank",rel:"noreferrer",children:["View submitted transaction",o.jsx(Po,{size:13})]}),C&&o.jsxs("div",{className:"gp-funded-link",children:[o.jsxs("p",{children:[o.jsx(fn,{size:16}),"Payment #",C.reference.paymentId," is funded."]}),o.jsx("code",{children:C.url}),o.jsxs("div",{className:"ms-inline-actions",children:[o.jsxs("button",{type:"button",className:"ms-button ms-secondary",onClick:async()=>{try{await navigator.clipboard.writeText(C.url),z(!0)}catch{te.setError("Copy the payment URL shown above.")}},children:[o.jsx(Ks,{size:14}),B?"Copied":"Copy link"]}),o.jsxs("a",{className:"ms-button ms-secondary",href:C.url,children:["Open payment",o.jsx(Po,{size:14})]})]})]}),oe&&o.jsxs("button",{className:"ms-button ms-primary",disabled:te.busy||!!C&&!e||!C&&!P&&(J?!k.address||k.chainId!==jt.id:!K.external)||p==="usd"&&!H.quote&&!P&&!C,children:[te.busy?o.jsx(Xt,{size:17,className:"spin"}):o.jsx(ga,{size:17})," ",C?e?"Share this funded payment":"Payment link ready":P?"Check deposit & share":e?"Create & share payment":"Create payment link"]})]})]});return s?he:i?o.jsxs("section",{className:"gp-native-standalone ms-modal-body",children:[o.jsx("p",{className:"ms-kicker",children:"A PAYMENT, WITHOUT THE ADDRESS"}),o.jsxs("h1",{children:["Send a little ",o.jsx("em",{children:"something."})]}),he]}):o.jsx(Ai,{title:"Send a little something.",eyebrow:"A PAYMENT, INSIDE THE CONVERSATION",onClose:()=>{te.busy||n()},children:he})}function jv(n){return["ETH","tETH","tBNB","BNB","POL","AVAX","CELO","S-CELO","S","FTM","ETC","XDAI"].includes(n)}function ef(){try{const n=JSON.parse(localStorage.getItem("ghostpay.direct.v1")||"[]");return Array.isArray(n)?n.map(Rm).filter(Boolean).slice(0,100):[]}catch{return[]}}function Wv({recipient:n,onShare:e,onLock:t,onBusyChange:i}){const[s,r]=L.useState(()=>Qt(91562037)),[a,c]=L.useState(""),[l,d]=L.useState(""),[u,f]=L.useState("native"),[h,m]=L.useState(!1),[x,y]=L.useState(),[g,p]=L.useState(),[E,A]=L.useState(!1),[b,w]=L.useState(!1),M=ps(),C=tr(s.id),_=xa(s.symbol),T=a.trim().replace(/^@/,"").toLowerCase(),P=oi({queryKey:["profile-search",T],queryFn:()=>si(`/search/${T}`),enabled:/^[a-z][a-z0-9_]{1,23}$/.test(T)&&!x,staleTime:1e4,retry:0});L.useEffect(()=>{t?.(M.busy||!!g)},[M.busy,g]),L.useEffect(()=>{i?.(M.busy)},[M.busy,i]);async function I(R){R.preventDefault(),await M.run(async()=>{if(!C.address)throw new Error("Connect your wallet before reviewing a payment.");const B=Mn(l,u,s.decimals,_.quote),z=await _d(a);if(z.address.toLowerCase()===C.address?.toLowerCase())throw new Error("This is your own wallet. Choose the intended recipient.");y({...z,from:C.address,input:a,units:B.units,quote:_.quote}),m(!1)})}async function U(R){e&&(await e(`A direct ${s.symbol} payment for ${x?.label||"you"}. ${s.explorer}/tx/${R.hash}`,R),w(!0))}async function G(){await M.run(async()=>{if(E&&g){await U(g);return}let R=g;if(!R){if(!x||!h)throw new Error("Review and confirm the exact recipient first.");if((await _d(x.input)).address.toLowerCase()!==x.address.toLowerCase())throw new Error("The recipient address changed. Review again.");const H=await C.wallet();if(H.account.address.toLowerCase()!==x.from.toLowerCase())throw new Error("The paying wallet changed. Review the payment again.");u==="usd"&&Mn(l,u,s.decimals,x.quote);const ee=await H.sendTransaction({to:x.address,value:x.units});R={version:3,chainId:s.id,hash:ee,from:H.account.address,to:x.address},p(R)}M.setNotice("Transfer submitted. Checking this same transaction for two confirmations…");const B=Ht(s.id),z=await B.waitForTransactionReceipt({hash:R.hash,confirmations:2});if(z.status!=="success")throw new Error("The transfer reverted. Check its explorer record before starting again.");if((await B.getBlock({blockNumber:z.blockNumber})).hash!==z.blockHash)throw new Error("The confirmation block changed. Check this same transaction again.");A(!0);try{localStorage.setItem("ghostpay.direct.v1",JSON.stringify([R,...ef().filter(K=>!(K.chainId===R.chainId&&K.hash===R.hash))].slice(0,100)))}catch{}M.setNotice("The direct transfer is confirmed."),await U(R)})}return o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"ms-modal-copy",children:[n?`Pay ${n} directly. `:"Pay a person directly. ","Find their unique GhostChat username. No escrow or claim link is needed."]}),o.jsxs("form",{className:"ms-form gp-native-form",onSubmit:I,children:[o.jsx(Jc,{feature:"direct",network:s,disabled:M.busy||!!g,onChange:R=>{r(Qt(R.id)),d(""),y(void 0),f("native")}}),o.jsx("label",{htmlFor:"direct-recipient",children:"Recipient username"}),o.jsxs("div",{className:"gp-recipient-search",children:[o.jsx(mi,{size:17}),o.jsx("input",{id:"direct-recipient",value:a,onChange:R=>{c(R.target.value),y(void 0)},placeholder:"@username",required:!0,maxLength:60,disabled:M.busy||!!g})]}),!x&&P.data?.length?o.jsx("div",{className:"gp-people-results",children:P.data.map(R=>o.jsxs("button",{type:"button",onClick:()=>c(`@${R.username}`),children:[o.jsxs("span",{children:["@",R.username]}),o.jsxs("small",{children:[R.wallet.slice(0,6),"…",R.wallet.slice(-4)]}),o.jsx(Et,{size:14})]},R.wallet))}):null,o.jsx("p",{className:"ms-fine",children:"No username yet? A full EVM wallet address also works. A chat display name alone is not a payment identity."}),o.jsx(Zh,{id:"direct-amount",symbol:s.symbol,testnet:s.testnet,decimals:s.decimals,value:l,onChange:R=>{d(R),y(void 0)},mode:u,setMode:R=>{f(R),y(void 0)},disabled:M.busy||!!g,fixedQuote:x?.quote}),!x&&!g&&o.jsxs("button",{className:"ms-button ms-primary",disabled:M.busy,children:[M.busy?o.jsx(Xt,{className:"spin",size:17}):o.jsx(zt,{size:17}),"Review payment"]}),x&&o.jsxs("div",{className:"gp-direct-review",children:[o.jsx("span",{className:"ms-kicker",children:"REVIEW THE EXACT DESTINATION"}),o.jsx("h3",{children:x.label}),o.jsx("code",{children:x.address}),o.jsxs("strong",{children:[cn(x.units,s.decimals)," ",s.symbol]}),o.jsxs("p",{children:[s.name," · network gas is additional"]}),o.jsxs("label",{className:"ms-check",children:[o.jsx("input",{type:"checkbox",checked:h,disabled:!!g,onChange:R=>m(R.target.checked)}),"I verified this recipient and network. A confirmed direct transfer cannot be refunded through GhostChat. ",s.testnet?"These are test coins.":"This spends real coins on Mainnet."]}),o.jsxs("button",{type:"button",className:"ms-button ms-primary ms-full",disabled:M.busy||!h||E&&(!e||b),onClick:G,children:[M.busy?o.jsx(Xt,{className:"spin",size:17}):E?o.jsx(fn,{size:17}):o.jsx(ga,{size:17})," ",E?e&&!b?"Share confirmed receipt":"Payment confirmed":g?"Check submitted transfer":"Confirm & send directly"]})]}),g&&s.explorer&&o.jsxs("a",{className:"ms-text",href:`${s.explorer}/tx/${g.hash}`,target:"_blank",rel:"noreferrer",children:[E?"View confirmed transfer":"View submitted transaction",o.jsx(Et,{size:14})]}),M.error&&o.jsx("p",{className:"ms-alert",role:"alert",children:M.error}),M.notice&&o.jsx("p",{className:"ms-fine",role:"status",children:M.notice})]})]})}let wd,Ed;async function tf(n,e){const t=await fetch(n);if(!t.ok)throw new Error("Community contract artifact unavailable.");const i=await t.json();if(i.version!==e||i.evmVersion!=="paris"||i.testnetOnly!==!0||!/^0x[\da-f]+$/i.test(i.bytecode)||!/^0x[\da-f]+$/i.test(i.deployedBytecode))throw new Error("Invalid community contract artifact.");return i}function Xv(){return wd||=tf("/contracts/community.json",2).catch(n=>{throw wd=void 0,n})}function qv(){return Ed||=tf("/contracts/community-v1.json",1).catch(n=>{throw Ed=void 0,n})}async function Qc(n,e,t,i=!1){Ni(n);const s=Tt(e);await er(n);const[r,a]=await Promise.all([Xv(),Ht(n).getCode({address:s})]);let c=r;if(a?.toLowerCase()!==r.deployedBytecode.toLowerCase()){if(!i)throw new Error("This is not the current GhostPay community contract. Deploy or import the reviewed version before funding a new campaign.");if(c=await qv(),a?.toLowerCase()!==c.deployedBytecode.toLowerCase())throw new Error("This is not a recognized GhostPay community contract.")}if(await Ht(n).readContract({address:s,abi:Yt,functionName:"domainChainId"})!==BigInt(n))throw new Error("Community contract returned a different chain.");return await Jh(n,s,t,c.bytecode),s}function Td(n,e){if(n===91562037&&e.toLowerCase()===nf)return $v;try{return JSON.parse(localStorage.getItem("ghostpay.community.creation")||"{}")[`${n}:${e.toLowerCase()}`]||""}catch{return""}}const nf="0x7b3676df9a2118385f13b2af23f96e14450409ae",$v="0x85a7b91096988b49164cf2a7cd75023b13ff1ba3ffac2c9e0a96f4436d80b154";function Ad(n){try{return JSON.parse(localStorage.getItem("ghostpay.community.contracts")||"{}")[n]||(n===91562037?nf:"")}catch{return""}}function nT(n,e,t){let i={};try{i=JSON.parse(localStorage.getItem("ghostpay.community.contracts")||"{}")}catch{}try{localStorage.setItem("ghostpay.community.contracts",JSON.stringify({...i,[n]:e}));let s={};try{s=JSON.parse(localStorage.getItem("ghostpay.community.creation")||"{}")}catch{}localStorage.setItem("ghostpay.community.creation",JSON.stringify({...s,[`${n}:${e.toLowerCase()}`]:t}))}catch{}}function sf(){try{const n=JSON.parse(localStorage.getItem("ghostpay.campaigns")||"[]");return Array.isArray(n)?n.map(eh).filter(Boolean).slice(0,100):[]}catch{return[]}}function Yv(n){try{localStorage.setItem("ghostpay.campaigns",JSON.stringify([n,...sf().filter(e=>!(e.chainId===n.chainId&&e.contract===n.contract&&e.campaignId===n.campaignId))].slice(0,100)))}catch{}}function Kv({rows:n,onChange:e,disabled:t,equalSplit:i=!1}){const[s,r]=L.useState(""),[a,c]=L.useState(""),[l,d]=L.useState(!1),[u,f]=L.useState(""),h=tt.snapshot().rooms.filter(E=>E.kind==="community"),m=[...new Set(tt.snapshot().rooms.flatMap(E=>E.members.map(A=>A.name.replace(/^@/,""))).filter(E=>/^[a-z][a-z0-9_]{2,23}$/.test(E)))],x=oi({queryKey:["allocation-people",s,m.join(",")],queryFn:()=>s.length>=2?si(`/search/${s}`):si("/resolve",{usernames:m.slice(0,100)}),enabled:s.length>=2||m.length>0,retry:!1}),y=[...new Set([...n.map(E=>E.username),...(x.data||[]).map(E=>E.username)])];function g(E){const A=[...new Set([...n.map(b=>b.username),...E])];if(A.length>100)throw new Error("This contract supports at most 100 recipients per pool.");e(A.map(b=>n.find(w=>w.username===b)||{username:b,amount:""}))}async function p(){d(!0),f("");try{const E=tt.client?.getRoom(a);if(!E)throw new Error("Select a connected community first.");await E.loadMembersIfNeeded();const A=E.getMembers().filter(w=>["join","invite"].includes(w.membership||""));if(A.length>100)throw new Error("This community has more than 100 members. Fund it in separate pools.");const b=[];for(let w=0;w<A.length;w+=10){const M=await Promise.all(A.slice(w,w+10).map(async C=>{const _=/^@w_([a-f0-9]{40}):/i.exec(C.userId);if(!_)throw new Error("A member has no wallet-linked GhostChat account. Select registered recipients individually.");const T=await si(`/address/0x${_[1]}`);if(!T)throw new Error("A community member has not registered a payment username. No members were added.");return T}));b.push(...M)}g(b.map(w=>w.username))}catch(E){f(E.message)}finally{d(!1)}}return o.jsxs("fieldset",{className:"gp-allocation-picker",disabled:t||l,children:[o.jsx("legend",{children:"Eligible people & amounts"}),h.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("label",{htmlFor:"allocation-community",children:"Choose a community"}),o.jsxs("select",{id:"allocation-community",value:a,onChange:E=>c(E.target.value),children:[o.jsx("option",{value:"",children:"Choose community"}),h.map(E=>o.jsx("option",{value:E.id,children:E.name},E.id))]}),o.jsx("button",{type:"button",className:"ms-button ms-secondary",disabled:!a||l,onClick:()=>{p()},children:"Select all community members"})]}),u&&o.jsx("p",{role:"alert",children:u}),o.jsx("label",{htmlFor:"allocation-search",children:"Find an existing username"}),o.jsx("input",{id:"allocation-search",value:s,onChange:E=>r(E.target.value.toLowerCase().replace(/^@/,"").replace(/[^a-z0-9_]/g,"").slice(0,24)),placeholder:"Search usernames"}),x.isFetching&&o.jsx("p",{role:"status",children:"Finding people…"}),x.error&&o.jsx("p",{role:"alert",children:x.error.message}),y.length>0&&o.jsxs("div",{className:"gp-trade-actions",children:[o.jsx("button",{type:"button",className:"ms-button ms-secondary",onClick:()=>{try{g(y)}catch(E){f(E.message)}},children:"Select all listed"}),o.jsx("button",{type:"button",className:"ms-button ms-secondary",onClick:()=>e([]),children:"Clear selection"})]}),y.map(E=>{const A=n.find(b=>b.username===E);return o.jsxs("div",{className:"gp-allocation-person",children:[o.jsxs("label",{children:[o.jsx("input",{type:"checkbox",checked:!!A,onChange:b=>e(b.target.checked?[...n,{username:E,amount:""}]:n.filter(w=>w.username!==E))}),o.jsxs("span",{children:["@",E]})]}),A&&!i&&o.jsx("input",{"aria-label":`Amount for @${E}`,value:A.amount,placeholder:"Amount",inputMode:"decimal",onChange:b=>e(n.map(w=>w.username===E?{...w,amount:b.target.value}:w))})]},E)}),!y.length&&!x.isFetching&&o.jsx("p",{className:"ms-fine",children:"Search for a username, then select each recipient and enter their amount."}),o.jsxs("p",{className:"ms-fine",children:["Selected: ",n.length," of 100. Each allocation is fixed after funding."]})]})}function Zv(n,e){if(!Number.isSafeInteger(e)||e<1||e>100)throw new Error("Select 1–100 recipients.");if(n<BigInt(e))throw new Error("The pool is too small to give every recipient a positive allocation.");const t=n/BigInt(e),i=n%BigInt(e);return Array.from({length:e},(s,r)=>t+(BigInt(r)<i?1n:0n))}function Cd({recipient:n,onShare:e,onLock:t,onBusyChange:i}){const[s,r]=L.useState("pool"),[a,c]=L.useState(""),[l,d]=L.useState(()=>Qt(91562037)),[u,f]=L.useState(()=>Ad(91562037)),[h,m]=L.useState(""),[x,y]=L.useState(""),[g,p]=L.useState(n?`${n} contributions`:""),[E,A]=L.useState([]),[b,w]=L.useState("native"),[M,C]=L.useState("604800"),[_,T]=L.useState(),[P,I]=L.useState(!1),[U,G]=L.useState(),[R,B]=L.useState(),[z,k]=L.useState(),[K,H]=L.useState(!1),[ee,ne]=L.useState(!1),te=ps(),J=tr(l.id),oe=xa(l.symbol),de=te.busy||!!R||!!z||!!U,Se=!!u&&!!Td(l.id,u);L.useEffect(()=>{t?.(de)},[de]),L.useEffect(()=>{i?.(te.busy)},[te.busy,i]);async function q(ue){ue.preventDefault(),await te.run(async()=>{if(!g.trim()||new TextEncoder().encode(g.trim()).length>120)throw new Error("Use a title of at most 120 UTF-8 bytes.");if(!E.length||E.length>100)throw new Error("Select 1–100 recipients and enter an amount for each.");const le=E.map(Te=>[Te.username,Te.amount]),Ce=await Tv(le.map(Te=>Te[0])),ze=new Set,Oe=[],He=s==="pool"?Zv(Mn(a,b,l.decimals,oe.quote).units,le.length):void 0;for(let Te=0;Te<le.length;Te++){const Ve=Ce[Te],Ye=Ve.address.toLowerCase();if(ze.has(Ye))throw new Error(`Duplicate recipient: ${Ve.label}`);ze.add(Ye);const Y=He?He[Te]:Mn(le[Te][1],b,l.decimals,oe.quote).units;Oe.push({...Ve,units:Y})}const We=Oe.reduce((Te,Ve)=>Te+Ve.units,0n);if(We>=2n**256n)throw new Error("The total exceeds the native currency limit.");T({rows:Oe,total:We,quote:oe.quote}),I(!1)})}async function X(ue){e&&(await e(`A funded community payout. Each eligible wallet can claim its own allocation. ${window.location.origin}${gi(ue)}`,ue),ne(!0))}async function he(){await te.run(async()=>{if(z){await X(z);return}if(!_||!P)throw new Error("Review and confirm the eligibility list first.");const ue=Td(l.id,u),le=await Qc(l.id,u,ue),Ce=await J.wallet(),ze=Ht(l.id),Oe=await ze.getBlock();!R&&b==="usd"&&Mn("1","usd",l.decimals,_.quote);const He=R||await Ce.writeContract({address:le,abi:Yt,functionName:"createCampaign",args:[g.trim(),_.rows.map(Y=>Y.address),_.rows.map(Y=>Y.units),Oe.timestamp+BigInt(M)],value:_.total});B(He),te.setNotice("Funding the full allocation pool. Checking this same transaction…");const We=await ze.waitForTransactionReceipt({hash:He,confirmations:2});if(We.status!=="success")throw new Error("Campaign funding reverted. Check the transaction before starting again.");if((await ze.getBlock({blockNumber:We.blockNumber})).hash!==We.blockHash)throw new Error("The confirmation block changed. Check the same transaction again.");let Ve;for(const Y of We.logs)if(Y.address.toLowerCase()===le.toLowerCase())try{const Re=cs({abi:Yt,eventName:"CampaignCreated",data:Y.data,topics:Y.topics});Re.args.organizer.toLowerCase()===Ce.account.address.toLowerCase()&&Re.args.total===_.total&&Re.args.count===BigInt(_.rows.length)&&(Ve=String(Re.args.campaignId))}catch{}if(!Ve)throw new Error("No matching campaign event was found. Inspect the submitted transaction.");const Ye={version:4,chainId:l.id,contract:le,campaignId:Ve,deploymentHash:ue};k(Ye),Yv(Ye),te.setNotice("Your campaign is funded. Share one link with the community."),await X(Ye)})}return o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"ms-modal-copy",children:"One funded pool. One shared link. Recipients are approved together before funding and claim once without individual approval."}),o.jsxs("form",{className:"ms-form gp-native-form",onSubmit:q,children:[o.jsx(Jc,{feature:"community",network:l,disabled:de,onChange:ue=>{d(Qt(ue.id)),f(Ad(ue.id)),T(void 0),w("native")}}),!Se&&o.jsx("p",{className:"ms-fine",children:"Community payments are not configured for this network."}),o.jsxs("div",{className:"gp-review-note",children:[o.jsx("strong",{children:"Testnet only · internally reviewed."})," Recipient eligibility and amounts are fixed after funding. No independent security audit has been completed. ",o.jsx("a",{href:"https://github.com/prembharne/GHostPay/blob/feat/ghostpay-messenger/docs/COMMUNITY-SECURITY-REVIEW.md",target:"_blank",rel:"noreferrer",children:"Read the security review"})]}),o.jsx("label",{htmlFor:"campaign-title",children:"Campaign name"}),o.jsx("input",{id:"campaign-title",required:!0,value:g,onChange:ue=>{p(ue.target.value),T(void 0)},disabled:de,placeholder:"e.g. October contributor rewards",maxLength:80}),o.jsx("p",{className:"ms-fine",children:"The title and allocation wallets are public on-chain. Do not include emails or private community details."}),o.jsx("label",{htmlFor:"campaign-mode",children:"Allocation amounts in"}),o.jsxs("select",{id:"campaign-mode",value:b,disabled:de,onChange:ue=>{w(ue.target.value),T(void 0)},children:[o.jsx("option",{value:"usd",children:"USD reference · test coins only"}),o.jsxs("option",{value:"native",children:["Native ",l.symbol]})]}),o.jsx("label",{htmlFor:"campaign-access",children:"Who can claim this link?"}),o.jsx("select",{id:"campaign-access",disabled:!0,children:o.jsx("option",{children:"Selected recipients · approved upfront"})}),o.jsx("p",{className:"ms-fine",children:"Each selected wallet claims once without asking you for another approval. Forwarding the link does not grant access. Up to 100 recipients per pool."}),o.jsx("label",{htmlFor:"campaign-allocation-method",children:"Allocate funds"}),o.jsxs("select",{id:"campaign-allocation-method",value:s,disabled:de,onChange:ue=>{r(ue.target.value),T(void 0)},children:[o.jsx("option",{value:"pool",children:"Split one total equally"}),o.jsx("option",{value:"individual",children:"Set each person's amount"})]}),s==="pool"&&o.jsxs(o.Fragment,{children:[o.jsxs("label",{htmlFor:"campaign-total",children:["Total funds allocated to this link (",b==="native"?l.symbol:"USD reference",")"]}),o.jsx("input",{id:"campaign-total",value:a,disabled:de,inputMode:"decimal",placeholder:"Total pool amount",onChange:ue=>{c(ue.target.value),T(void 0)}}),o.jsxs("p",{className:"ms-fine",children:["Split across ",E.length," selected recipients. The review shows exact amounts, including any smallest-unit rounding."]})]}),o.jsx(Kv,{rows:E,disabled:de,equalSplit:s==="pool",onChange:ue=>{A(ue),T(void 0)}}),o.jsxs("div",{className:"gp-rate",children:[o.jsx("span",{className:oe.quote?"gp-rate-dot":"gp-rate-dot unavailable"}),o.jsx("span",{children:oe.quote?`1 ${l.symbol} ≈ $${oe.quote.usd} USD · ${oe.quote.source}`:"No live rate. Select native amounts or wait for refresh."})]}),o.jsx("p",{className:"ms-fine",children:"Test coins have no redeemable USD value. USD is a reference to the mainnet market price."}),o.jsx("label",{htmlFor:"campaign-expiry",children:"Claim window"}),o.jsxs("select",{id:"campaign-expiry",value:M,disabled:de,onChange:ue=>C(ue.target.value),children:[o.jsx("option",{value:"3600",children:"1 hour"}),o.jsx("option",{value:"86400",children:"24 hours"}),o.jsx("option",{value:"604800",children:"7 days"}),o.jsx("option",{value:"300",children:"5 minutes · quick test"})]}),!_&&o.jsxs("button",{className:"ms-button ms-primary",disabled:de||b==="usd"&&!oe.quote,children:[te.busy?o.jsx(Xt,{className:"spin",size:16}):o.jsx(ln,{size:16}),"Review eligible allocations"]}),_&&o.jsxs("div",{className:"gp-campaign-review",children:[o.jsxs("span",{className:"ms-kicker",children:[_.rows.length," ELIGIBLE WALLETS · ALLOCATION PLAN"]}),o.jsxs("h3",{children:[cn(_.total,l.decimals)," ",l.symbol]}),o.jsx("div",{className:"gp-allocation-list",children:_.rows.map(ue=>o.jsxs("div",{children:[o.jsx("strong",{children:ue.label}),o.jsxs("span",{children:[cn(ue.units,l.decimals)," ",l.symbol]}),o.jsx("code",{children:ue.address})]},ue.address))}),o.jsxs("label",{className:"ms-check",children:[o.jsx("input",{type:"checkbox",checked:P,disabled:de,onChange:ue=>I(ue.target.checked)}),"I verified these eligible people, wallets, amounts and network. They cannot be edited after funding."]}),o.jsxs("button",{type:"button",className:"ms-button ms-primary ms-full",disabled:te.busy||!P||!Se||!!z&&(!e||ee),onClick:he,children:[te.busy?o.jsx(Xt,{className:"spin",size:16}):o.jsx(zt,{size:16})," ",z?e&&!ee?"Share funded campaign":"Campaign funded":R?"Check campaign deposit":Se?"Fund & create claim link":"Verify the community contract first"]})]}),z&&o.jsxs("div",{className:"gp-funded-link",children:[o.jsxs("code",{children:[window.location.origin,gi(z)]}),o.jsxs("button",{type:"button",className:"ms-button ms-secondary",onClick:async()=>{try{await navigator.clipboard.writeText(`${window.location.origin}${gi(z)}`),H(!0)}catch{te.setError("Copy the full campaign URL shown above.")}},children:[K?o.jsx(fn,{size:16}):o.jsx(Ks,{size:16})," ",K?"Copied":"Copy community claim link"]}),o.jsxs("a",{className:"ms-text",href:gi(z),children:["Open campaign",o.jsx(Et,{size:14})]})]}),(R||U)&&l.explorer&&o.jsxs("a",{className:"ms-text",href:`${l.explorer}/tx/${R||U}`,target:"_blank",rel:"noreferrer",children:["View submitted transaction",o.jsx(Et,{size:14})]}),te.error&&o.jsx("p",{className:"ms-alert",role:"alert",children:te.error}),te.notice&&o.jsx("p",{className:"ms-fine",role:"status",children:te.notice})]})]})}function Jv({onClose:n,onShare:e,recipient:t,group:i=!1,standalone:s=!1,onLockChange:r}){const[a,c]=L.useState(()=>{const x=new URLSearchParams(window.location.search).get("mode");return i||x==="community"?"community":x==="link"?"link":"person"}),[l,d]=L.useState(!1),[u,f]=L.useState(i?"pool":"single"),h=a==="person"?"A familiar name. A direct payment.":a==="community"?"A little for everyone.":"A payment, without the address.";L.useEffect(()=>()=>r?.(!1),[r]);const m=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"gp-payment-tabs",role:"tablist","aria-label":"Payment type",children:[{id:"person",name:"Pay a person",Icon:ga},{id:"community",name:"Community fund",Icon:ln},{id:"link",name:"Payment link",Icon:Kc}].map(x=>o.jsxs("button",{type:"button",role:"tab","aria-selected":a===x.id,disabled:l&&a!==x.id,onClick:()=>c(x.id),children:[o.jsx(x.Icon,{size:16}),o.jsx("span",{children:x.name})]},x.id))}),o.jsx("div",{role:"tabpanel","aria-label":a==="person"?"Direct payment":a==="community"?"Community campaign":"Payment link",children:a==="person"?o.jsx(Wv,{recipient:t,onShare:e,onLock:d,onBusyChange:r}):a==="community"?o.jsx(Cd,{recipient:t,onShare:e,onLock:d,onBusyChange:r}):o.jsxs(o.Fragment,{children:[o.jsx("label",{className:"ms-fine",htmlFor:"link-access",children:"Who can claim this payment link?"}),o.jsxs("select",{id:"link-access",className:"ms-input",value:u,disabled:l,onChange:x=>f(x.target.value),children:[o.jsx("option",{value:"single",children:"One recipient · your approval required"}),o.jsx("option",{value:"pool",children:"Selected people · approved together upfront"})]}),o.jsx("p",{className:"ms-fine",children:"For a large community, choose selected people. Each allocated wallet can claim once without another approval; the link stays restricted to that list."}),u==="pool"?o.jsx(Cd,{recipient:t,onShare:e,onLock:d,onBusyChange:r}):o.jsx(Gv,{inline:!0,onClose:n,recipient:t,onShare:e,onLock:d,onBusyChange:r})]})})]});return s?o.jsxs("section",{className:"gp-native-standalone ms-modal-body",children:[o.jsx("p",{className:"ms-kicker",children:"PEOPLE FIRST. PAYMENTS SECOND."}),o.jsx("h1",{children:h}),m]}):o.jsx(Ai,{title:h,eyebrow:"A PAYMENT, INSIDE THE CONVERSATION",onClose:n,children:m})}function el(n){return oi({queryKey:["campaign",n.chainId,n.contract,n.campaignId,n.deploymentHash],queryFn:async()=>{await Qc(n.chainId,n.contract,n.deploymentHash,!0);const e=Ht(n.chainId),[t,i,s]=await Promise.all([e.readContract({address:n.contract,abi:Yt,functionName:"getCampaign",args:[BigInt(n.campaignId)]}),e.readContract({address:n.contract,abi:Yt,functionName:"getRecipients",args:[BigInt(n.campaignId)]}),e.getBlock()]);return{campaign:t,recipients:i,now:s.timestamp}},retry:0,refetchInterval:15e3})}function Qv(){const n=th(),[e]=nh(),t=eh({version:4,chainId:Number(n.chainId),contract:n.contract,campaignId:n.campaignId,deploymentHash:e.get("deployment")});return t?o.jsx(e_,{reference:t}):o.jsxs("div",{className:"page empty",children:[o.jsx(zt,{size:30}),o.jsx("h1",{children:"This campaign link is invalid."}),o.jsx("p",{children:"Only supported EVM testnets are enabled."}),o.jsx(Wn,{className:"button secondary",to:"/chat",children:"Back to messenger"})]})}function e_({reference:n}){const e=Ni(n.chainId),t=tr(n.chainId),i=ps(),s=el(n),r=Ht(n.chainId),a=s.data?.campaign,c=s.data?.now||0n,l=oi({queryKey:["campaign-allocation",n.chainId,n.contract,n.campaignId,t.address],enabled:!!t.address&&!!a,queryFn:async()=>{const[g,p]=await Promise.all([r.readContract({address:n.contract,abi:Yt,functionName:"allocation",args:[BigInt(n.campaignId),t.address]}),r.readContract({address:n.contract,abi:Yt,functionName:"claimed",args:[BigInt(n.campaignId),t.address]})]);return{amount:g,claimed:p}},refetchInterval:15e3}),[d,u]=L.useState(),[f,h]=L.useState(!1),m=t.address?.toLowerCase()===a?.organizer.toLowerCase(),x=!!a&&a.remaining>0n&&!a.refunded&&a.expiry>c;async function y(g){await i.run(async()=>{let p=d;if(!p){await Qc(n.chainId,n.contract,n.deploymentHash,!0);const w=await t.wallet(),M=await r.readContract({address:n.contract,abi:Yt,functionName:"getCampaign",args:[BigInt(n.campaignId)]}),C=await r.getBlock();if(M.refunded||M.remaining===0n)throw new Error("This campaign is closed.");if(g==="refund"&&(w.account.address.toLowerCase()!==M.organizer.toLowerCase()||C.timestamp<M.expiry))throw new Error("Only the organizer can refund after expiry.");if(g==="claim"){if(C.timestamp>=M.expiry)throw new Error("The claim window has expired.");const[T,P]=await Promise.all([r.readContract({address:n.contract,abi:Yt,functionName:"allocation",args:[BigInt(n.campaignId),w.account.address]}),r.readContract({address:n.contract,abi:Yt,functionName:"claimed",args:[BigInt(n.campaignId),w.account.address]})]);if(T===0n||P)throw new Error("This wallet has no unclaimed allocation.")}p={hash:await w.writeContract({address:n.contract,abi:Yt,functionName:g,args:[BigInt(n.campaignId)]}),kind:g},u(p)}if(p.kind!==g)throw new Error("Check the submitted transaction before another action.");i.setNotice("Checking this same transaction for two confirmations…");const E=await r.waitForTransactionReceipt({hash:p.hash,confirmations:2});if(E.transactionHash.toLowerCase()!==p.hash.toLowerCase())throw new Error("The submitted transaction was replaced. Inspect both explorer records and the campaign state before retrying.");if(E.status!=="success")throw new Error("This transaction reverted. Review its explorer record before starting again.");if(!E.logs.some(w=>{if(w.address.toLowerCase()!==n.contract.toLowerCase())return!1;try{const M=cs({abi:Yt,data:w.data,topics:w.topics});return M.args.campaignId===BigInt(n.campaignId)&&(g==="claim"?M.eventName==="AllocationClaimed":M.eventName==="RemainderRefunded")}catch{return!1}}))throw new Error("No matching campaign completion event was found. Check the on-chain campaign state.");if((await r.getBlock({blockNumber:E.blockNumber})).hash!==E.blockHash)throw new Error("The block changed. Check this transaction again.");await Promise.all([s.refetch(),l.refetch()]),i.setNotice(g==="claim"?"Your allocation was claimed.":"The unclaimed remainder was refunded.")})}return o.jsxs("div",{className:"page gp-campaign-page",children:[o.jsxs(Wn,{className:"back-link",to:"/payments",children:[o.jsx(Hs,{size:15}),"All payments"]}),o.jsxs("div",{className:"page-heading",children:[o.jsxs("span",{className:"section-kicker",children:["A COMMUNITY, TAKEN CARE OF · ",e.name.toUpperCase()]}),o.jsx("h1",{children:a?.title||"A little for everyone."}),o.jsx("p",{children:"One funded pool. A fixed allocation for each eligible wallet."})]}),o.jsxs("div",{className:"gp-native-payment-grid",children:[o.jsxs("section",{className:"panel gp-native-review",children:[s.isPending?o.jsxs("p",{className:"ms-fine",children:[o.jsx(Xt,{className:"spin",size:16}),"Verifying the community contract…"]}):s.error?o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"ms-alert",children:s.error.message}),o.jsx("button",{className:"ms-button ms-secondary",onClick:()=>{s.refetch()},children:"Retry verification"})]}):!a||/^0x0{40}$/i.test(a.organizer)?o.jsx("p",{className:"ms-alert",children:"No campaign exists at this verified contract and ID."}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"gp-native-network",children:[o.jsx(ln,{size:19}),o.jsx("strong",{children:e.name}),o.jsx("span",{className:"gp-testnet-tag",children:"TESTNET"})]}),o.jsxs("div",{className:"gp-native-amount",children:[cn(a.total,e.decimals),o.jsx("span",{children:e.symbol})]}),o.jsxs("p",{className:"ms-fine",children:["Original funded pool · ",cn(a.remaining,e.decimals)," ",e.symbol," remaining"]}),o.jsx("div",{className:"gp-campaign-progress",children:o.jsx("span",{style:{width:`${s.data?.recipients.length?Number(a.claimedCount)/s.data.recipients.length*100:0}%`}})}),o.jsxs("p",{className:"ms-fine",children:[String(a.claimedCount)," of ",s.data?.recipients.length," allocations claimed · ",a.refunded?"Remainder refunded":x?"Claims open":a.remaining===0n?"Fully paid":"Claim window closed"]}),o.jsxs("dl",{className:"ms-details-list",children:[o.jsxs("div",{children:[o.jsx("dt",{children:"Organizer"}),o.jsx("dd",{children:a.organizer})]}),o.jsxs("div",{children:[o.jsx("dt",{children:"Claim deadline"}),o.jsx("dd",{children:new Date(Number(a.expiry)*1e3).toLocaleString()})]}),o.jsxs("div",{children:[o.jsx("dt",{children:"Contract"}),o.jsx("dd",{children:n.contract})]})]}),o.jsxs("button",{className:"ms-button ms-secondary ms-full",disabled:i.busy,onClick:()=>{i.run(async()=>{await t.wallet()})},children:[o.jsx(Ci,{size:17}),t.external?"Manage connected wallet":"Connect BridgeKey"]}),l.isPending&&t.address&&o.jsx("p",{role:"status",children:"Checking your wallet's allocation…"}),l.error&&o.jsxs("div",{role:"alert",children:[o.jsx("p",{children:l.error.message}),o.jsx("button",{className:"ms-button ms-secondary",onClick:()=>{l.refetch()},children:"Retry allocation lookup"})]}),l.data&&t.external&&o.jsxs("div",{className:"gp-campaign-your-share",children:[o.jsx("span",{className:"ms-kicker",children:"YOUR ALLOCATION"}),o.jsxs("strong",{children:[cn(l.data.amount,e.decimals)," ",e.symbol]}),o.jsx("p",{children:l.data.claimed?"Already claimed by this wallet.":l.data.amount===0n?"This wallet was not allocated funds. Creating or joining the community does not grant an allocation.":"Reserved for this exact wallet. You need testnet gas to claim."})]}),x&&l.data&&l.data.amount>0n&&!l.data.claimed&&o.jsxs("button",{className:"ms-button ms-primary ms-full",disabled:i.busy||!!d&&d.kind!=="claim",onClick:()=>y("claim"),children:[o.jsx(Kr,{size:17}),"Claim my allocation"]}),m&&a.expiry<=c&&a.remaining>0n&&!a.refunded&&o.jsxs("button",{className:"ms-button ms-primary ms-full",disabled:i.busy||!!d&&d.kind!=="refund",onClick:()=>y("refund"),children:[o.jsx(Kr,{size:17}),"Refund unclaimed remainder"]})]}),d&&o.jsxs(o.Fragment,{children:[o.jsxs("a",{className:"ms-text",href:`${e.explorer}/tx/${d.hash}`,target:"_blank",rel:"noreferrer",children:["View submitted transaction",o.jsx(Et,{size:14})]}),o.jsxs("button",{className:"ms-button ms-secondary",disabled:i.busy,onClick:()=>y(d.kind),children:["Check submitted ",d.kind]})]}),i.error&&o.jsx("p",{className:"ms-alert",role:"alert",children:i.error}),i.notice&&o.jsx("p",{className:"ms-fine",role:"status",children:i.notice})]}),o.jsxs("aside",{className:"gp-native-side",children:[o.jsxs("section",{className:"panel",children:[o.jsx("span",{className:"ms-kicker",children:"ELIGIBILITY, ENFORCED ON-CHAIN"}),o.jsxs("h2",{children:["A shared link.",o.jsx("br",{}),o.jsx("em",{children:"An individual right."})]}),o.jsx("p",{children:"Forwarding this URL cannot add someone to the eligible list. Each wallet has a fixed allocation and can claim it only once. Allocations do not change when a chat member joins or leaves."}),o.jsx("p",{children:"The organizer cannot withdraw reserved funds before the deadline. After expiry, only the unclaimed remainder is refundable."}),o.jsxs("button",{className:"ms-button ms-primary ms-full",onClick:async()=>{try{await navigator.clipboard.writeText(`${window.location.origin}${gi(n)}`),h(!0)}catch{i.setError("Copy this page’s full URL to share the campaign.")}},children:[f?o.jsx(fn,{size:16}):o.jsx(Ks,{size:16})," ",f?"Copied":"Copy community claim link"]})]}),o.jsxs("section",{className:"panel",children:[o.jsx("span",{className:"ms-kicker",children:"WHAT TO EXPECT"}),o.jsxs("p",{children:["Native test ",e.symbol," only. Recipients pay claim gas. There is no protocol fee or automatic refund, and this campaign does not bridge funds."]}),o.jsx("p",{children:"Wallets, allocations and claim activity are public. Only the exact wallets allocated funds can claim. Community membership alone does not grant an allocation."})]})]})]})]})}const t_=Object.freeze(Object.defineProperty({__proto__:null,default:Qv,useCampaign:el},Symbol.toStringTag,{value:"Module"}));function n_({reference:n}){const e=Qt(n.chainId),t=oi({queryKey:["direct-receipt",n.chainId,n.hash],queryFn:async()=>{await er(n.chainId);const s=Ht(n.chainId),[r,a,c]=await Promise.all([s.getTransaction({hash:n.hash}),s.getTransactionReceipt({hash:n.hash}),s.getBlockNumber()]);if(r.from.toLowerCase()!==n.from.toLowerCase()||r.to?.toLowerCase()!==n.to.toLowerCase()||r.value<=0n||r.input!=="0x")throw new Error("Transaction does not match this native payment.");return{transaction:r,receipt:a,confirmed:a.status==="success"&&c>=a.blockNumber+1n}},retry:0,refetchInterval:15e3}),i=t.data;return o.jsxs("div",{className:"ms-pay-card",children:[o.jsxs("div",{className:"ms-pay-card-top",children:[o.jsx("span",{className:"ms-pay-symbol",children:o.jsx(fn,{size:19})}),o.jsxs("span",{children:["Direct payment · ",e.symbol]}),o.jsx(Et,{size:16})]}),o.jsxs("div",{className:"ms-pay-amount",children:[i?cn(i.transaction.value,e.decimals):"—"," ",o.jsx("span",{children:e.symbol})]}),o.jsx("p",{children:e.name}),o.jsxs("div",{className:"ms-pay-state",children:[o.jsx("span",{}),t.error?"Could not verify this transfer":i?.receipt.status==="reverted"?"Transfer reverted":i?.confirmed?"Confirmed on-chain":"Verifying transfer…"]}),o.jsxs("a",{className:"gp-native-card-link",href:`${e.explorer}/tx/${n.hash}`,target:"_blank",rel:"noreferrer",children:["View transaction",o.jsx(Et,{size:15})]}),o.jsx("span",{className:"ms-pay-card-note",children:"Direct transfer · no escrow claim"})]})}function i_({reference:n}){const e=Ni(n.chainId),t=el(n),i=t.data?.campaign;return o.jsxs("div",{className:"ms-pay-card",children:[o.jsxs("div",{className:"ms-pay-card-top",children:[o.jsx("span",{className:"ms-pay-symbol",children:o.jsx(ln,{size:19})}),o.jsx("span",{children:"Community fund"}),o.jsx(Et,{size:16})]}),o.jsxs("div",{className:"ms-pay-amount",children:[i?cn(i.total,e.decimals):"—"," ",o.jsx("span",{children:e.symbol})]}),o.jsx("p",{children:i?.title||e.name}),o.jsxs("div",{className:"ms-pay-state",children:[o.jsx("span",{}),t.error?"Could not verify campaign":i?`${String(i.claimedCount)} of ${t.data?.recipients.length} claimed`:"Verifying funded pool…"]}),o.jsxs(Wn,{className:"gp-native-card-link",to:gi(n),children:["View my eligibility",o.jsx(Et,{size:15})]}),o.jsxs("span",{className:"ms-pay-card-note",children:[o.jsx(zt,{size:11}),"Fixed allocations · one claim per wallet"]})]})}function tl(n){return oi({queryKey:["native-payment",n.chainId,n.contract.toLowerCase(),n.paymentId,n.deploymentHash||"legacy"],queryFn:async()=>{const e=await Fs(n.chainId,n.contract,n.deploymentHash),t=Ht(n.chainId),[i,s]=await Promise.all([t.readContract({address:e,abi:Fn,functionName:"getPayment",args:[BigInt(n.paymentId)]}),t.getBlock()]);return{payment:i,now:s.timestamp}},retry:0,refetchInterval:15e3,staleTime:1e4})}function s_(){const n=th(),[e]=nh(),t=Ju({version:2,chainId:Number(n.chainId),contract:n.contract,paymentId:n.paymentId,...e.get("deployment")?{deploymentHash:e.get("deployment")}:{}});return t?o.jsx(r_,{reference:t}):o.jsxs("div",{className:"page empty",children:[o.jsx(zt,{size:32}),o.jsx("h1",{children:"This payment link is invalid."}),o.jsx("p",{children:"Only EVM testnets are enabled. Ask your sender to check the network and full link."}),o.jsx(Wn,{className:"button secondary",to:"/chat",children:"Back to messenger"})]})}function r_({reference:n}){const e=Ni(n.chainId),t=tl(n),i=tr(e.id),s=ps(),[r,a]=L.useState(()=>window.location.hash?window.location.href:""),[c,l]=L.useState(),[d,u]=L.useState(""),[f,h]=L.useState(!1),[m,x]=L.useState(),[y,g]=L.useState(),[p,E]=L.useState(),[A,b]=L.useState(!1),w=t.data?.payment,M=t.data?.now||0n,C=!!w&&i.address?.toLowerCase()===w.sender.toLowerCase(),_=w?.status===1&&w.expiry>M&&M>0n,T=Ht(e.id),P=Nm(n);L.useEffect(()=>{const z=()=>{a(window.location.hash?window.location.href:""),h(!1)};return window.addEventListener("hashchange",z),()=>window.removeEventListener("hashchange",z)},[]),L.useEffect(()=>{let z=!0;if(l(void 0),u(""),h(!1),!(!r||!w||w.status===0))return(async()=>{const k=new URL(r,window.location.origin),K=new URLSearchParams(k.hash.slice(1)),H=K.has("authorization")?"authorization":"request",ee=K.get(H);if(!ee)throw new Error("Paste the complete signed request or claim link, including its # fragment.");const ne=Pm(ee,H,n),te=H==="request"?{paymentId:BigInt(ne.paymentId),recipient:ne.recipient,requestedAt:BigInt(ne.requestedAt)}:{paymentId:BigInt(ne.paymentId),recipient:ne.recipient,deadline:BigInt(ne.deadline)},J=H==="request"?ne.recipient:w.sender;if(!await T.verifyTypedData({address:J,domain:P,types:H==="request"?Gl:jl,primaryType:H==="request"?"ClaimRequest":"ClaimAuthorization",message:te,signature:ne.signature}))throw new Error("The wallet signature does not match this payment.");if(H==="request"&&(BigInt(ne.requestedAt)>M+60n||BigInt(ne.requestedAt)+30n*86400n<M))throw new Error("This signed request has an invalid or stale timestamp.");if(H==="authorization"&&BigInt(ne.deadline)>w.expiry)throw new Error("Authorization extends beyond the escrow expiry.");z&&l({kind:H,value:ne})})().catch(k=>{z&&u(k.message)}),()=>{z=!1}},[r,w?.sender,w?.expiry,w?.status,n.chainId,n.contract,n.paymentId]);const I=(z,k)=>`${window.location.origin}${zs(n)}#${z}=${encodeURIComponent(JSON.stringify(k))}`;async function U(){await s.run(async()=>{await Fs(e.id,n.contract,n.deploymentHash);const z=await i.wallet(),k=await T.getBlock(),K=await T.readContract({address:Tt(n.contract),abi:Fn,functionName:"getPayment",args:[BigInt(n.paymentId)]});if(K.status!==1||K.expiry<=k.timestamp)throw new Error("This escrow is no longer active.");const H=k.timestamp,ee=await z.signTypedData({domain:P,types:Gl,primaryType:"ClaimRequest",message:{paymentId:BigInt(n.paymentId),recipient:z.account.address,requestedAt:H}});x({kind:"request",url:I("request",{...n,recipient:z.account.address,requestedAt:String(H),signature:ee})}),b(!1),s.setNotice("Send this signed request link back to the sender. It proves wallet control; it does not authorize a withdrawal.")})}async function G(){await s.run(async()=>{if(!f||c?.kind!=="request")throw new Error("Verify this person and their full wallet address before approving.");await Fs(e.id,n.contract,n.deploymentHash);const z=await i.wallet(),k=await T.getBlock(),K=await T.readContract({address:Tt(n.contract),abi:Fn,functionName:"getPayment",args:[BigInt(n.paymentId)]});if(K.sender.toLowerCase()!==z.account.address.toLowerCase()||K.status!==1||K.expiry<=k.timestamp)throw new Error("Only the current sender can approve an active payment.");const H=K.expiry<k.timestamp+900n?K.expiry:k.timestamp+900n,ee=await z.signTypedData({domain:P,types:jl,primaryType:"ClaimAuthorization",message:{paymentId:BigInt(n.paymentId),recipient:c.value.recipient,deadline:H}});x({kind:"authorization",url:I("authorization",{...n,recipient:c.value.recipient,deadline:String(H),signature:ee})}),b(!1),s.setNotice("Send the wallet-bound claim link to this recipient. It is valid for at most 15 minutes and cannot be revoked early.")})}async function R(z){await s.run(async()=>{let k=y;if(!p){await Fs(e.id,n.contract,n.deploymentHash);const H=await i.wallet(),ee=await T.getBlock(),ne=await T.readContract({address:Tt(n.contract),abi:Fn,functionName:"getPayment",args:[BigInt(n.paymentId)]});if(ne.status!==1)throw new Error("This payment is no longer active.");if(z==="refund"){if(H.account.address.toLowerCase()!==ne.sender.toLowerCase()||ne.expiry>ee.timestamp)throw new Error("Only the original sender can refund after expiry.");k=await H.writeContract({address:Tt(n.contract),abi:Fn,functionName:"refundPayment",args:[BigInt(n.paymentId)]})}else{if(c?.kind!=="authorization"||c.value.recipient.toLowerCase()!==H.account.address.toLowerCase())throw new Error("Connect the exact wallet in the sender’s authorization.");if(BigInt(c.value.deadline)<ee.timestamp||ne.expiry<=ee.timestamp)throw new Error("The authorization or payment expired. Ask for a fresh approval if the payment is still active.");k=await H.writeContract({address:Tt(n.contract),abi:Fn,functionName:"claimPayment",args:[BigInt(n.paymentId),H.account.address,BigInt(c.value.deadline),c.value.signature]})}g(k),E(z)}if(!k||p&&p!==z)throw new Error("Check the submitted transaction before another action.");if(s.setNotice("Waiting for two testnet confirmations…"),(await T.waitForTransactionReceipt({hash:k,confirmations:2})).status!=="success")throw E(void 0),new Error("The transaction reverted. Escrow state was not changed by it.");E(void 0),await t.refetch(),s.setNotice(z==="refund"?"The unclaimed deposit was refunded.":"Payment claimed by the approved wallet.")})}async function B(z){try{await navigator.clipboard.writeText(z),b(!0)}catch{s.setNotice("Copy the complete URL shown in the field.")}}return o.jsxs("div",{className:"page gp-native-payment",children:[o.jsxs(Wn,{className:"back-link",to:"/payments",children:[o.jsx(Hs,{size:15}),"All native payments"]}),o.jsxs("div",{className:"page-heading",children:[o.jsxs("span",{className:"section-kicker",children:[e.name.toUpperCase()," · CHAIN ",e.id," · TESTNET"]}),o.jsxs("h1",{children:["A little something.",o.jsx("br",{}),o.jsx("em",{children:"For the right wallet."})]}),o.jsxs("p",{children:["Payment #",n.paymentId," · native ",e.symbol," escrow"]})]}),o.jsxs("div",{className:"gp-native-payment-grid",children:[o.jsxs("section",{className:"panel gp-native-review",children:[o.jsxs("div",{className:"gp-native-network",children:[o.jsx(zt,{size:17}),o.jsx("strong",{children:e.name}),o.jsx("span",{className:"gp-testnet-tag",children:"TESTNET"})]}),t.isPending?o.jsxs("p",{className:"ms-modal-copy",children:[o.jsx(Xt,{className:"spin",size:17}),"Verifying the network and escrow code…"]}):t.error?o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"ms-alert",role:"alert",children:t.error.message}),o.jsx("button",{className:"ms-button ms-secondary",onClick:()=>{t.refetch()},children:"Retry verification"})]}):!w||w.status===0?o.jsx("p",{className:"ms-alert",children:"No payment exists with this ID in the verified escrow."}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"gp-native-amount",children:[cn(w.amount,e.decimals),o.jsx("span",{children:e.symbol})]}),o.jsxs("div",{className:"gp-native-status",children:[o.jsx(Zs,{size:14}),w.status===2?"Claimed":w.status===3?"Refunded":_?"Held in the verified escrow":"Expired · refundable by sender"]}),o.jsxs("dl",{className:"ms-details-list",children:[o.jsxs("div",{children:[o.jsx("dt",{children:"Sender"}),o.jsx("dd",{children:w.sender})]}),o.jsxs("div",{children:[o.jsx("dt",{children:"Escrow"}),o.jsx("dd",{children:n.contract})]}),o.jsxs("div",{children:[o.jsx("dt",{children:"Expires"}),o.jsx("dd",{children:new Date(Number(w.expiry)*1e3).toLocaleString()})]})]}),o.jsxs("button",{className:"ms-button ms-secondary ms-full",disabled:s.busy,onClick:()=>{s.run(async()=>{await i.wallet()})},children:[o.jsx(Ci,{size:16}),i.external?`${i.address.slice(0,6)}…${i.address.slice(-4)} · ${i.chainId===e.id?e.symbol:"switch network"}`:"Continue with Google or wallet"]}),_&&!C&&c?.kind!=="authorization"&&o.jsxs("button",{className:"ms-button ms-primary ms-full",disabled:s.busy,onClick:U,children:["Sign a claim request",o.jsx(Et,{size:16})]}),C&&_&&c?.kind==="request"&&o.jsxs("div",{className:"gp-native-approval",children:[o.jsx("p",{className:"ms-kicker",children:"VERIFIED WALLET REQUEST"}),o.jsx("code",{children:c.value.recipient}),o.jsxs("label",{className:"ms-check",children:[o.jsx("input",{type:"checkbox",checked:f,onChange:z=>h(z.target.checked)}),"I independently verified this person and this exact wallet."]}),o.jsxs("button",{className:"ms-button ms-primary ms-full",disabled:s.busy||!f,onClick:G,children:["Approve this wallet",o.jsx(fn,{size:16})]})]}),_&&c?.kind==="authorization"&&o.jsxs("div",{className:"gp-native-approval",children:[o.jsx("p",{className:"ms-kicker",children:"SENDER SIGNATURE VERIFIED"}),o.jsx("code",{children:c.value.recipient}),o.jsxs("p",{className:"ms-fine",children:["Authorized until ",new Date(Number(c.value.deadline)*1e3).toLocaleString(),"."]}),o.jsxs("button",{className:"ms-button ms-primary ms-full",disabled:s.busy||BigInt(c.value.deadline)<M||!!p&&p!=="claim",onClick:()=>R("claim"),children:[p==="claim"?"Check submitted claim":"Claim to the approved wallet",o.jsx(Kr,{size:17})]}),BigInt(c.value.deadline)<M&&o.jsx("p",{className:"ms-alert",children:"This approval expired. Ask the sender to renew it while the payment is active."})]}),C&&w.status===1&&w.expiry<=M&&o.jsxs("button",{className:"ms-button ms-primary ms-full",disabled:s.busy||!!p&&p!=="refund",onClick:()=>R("refund"),children:[p==="refund"?"Check submitted refund":"Refund unclaimed deposit",o.jsx(Kr,{size:16})]}),_&&C&&c?.kind!=="request"&&o.jsx("p",{className:"ms-modal-copy",children:"Share the payment link. Your recipient signs a wallet request and sends its link back to you. Paste it below to approve."})]}),s.busy&&o.jsxs("p",{className:"ms-fine",role:"status",children:[o.jsx(Xt,{size:15,className:"spin"}),"Waiting for your wallet or the network…"]}),s.error&&o.jsx("p",{className:"ms-alert",role:"alert",children:s.error}),s.notice&&o.jsx("p",{className:"ms-fine",role:"status",children:s.notice}),y&&e.explorer&&o.jsxs("a",{className:"ms-text",href:`${e.explorer}/tx/${y}`,target:"_blank",rel:"noreferrer",children:["View transaction",o.jsx(Po,{size:13})]}),o.jsxs("button",{className:"ms-button ms-secondary ms-full",onClick:()=>B(`${window.location.origin}${zs(n)}`),children:[o.jsx(Kc,{size:15}),"Copy payment link"]})]}),o.jsxs("aside",{className:"gp-native-side",children:[o.jsxs("section",{className:"panel",children:[o.jsx("p",{className:"ms-kicker",children:"A REQUEST. A SIGNATURE. YOUR CONTROL."}),o.jsxs("h2",{children:["Permission travels",o.jsx("br",{}),o.jsx("em",{children:"with the link."})]}),o.jsx("p",{children:"Signed request and claim links work across devices without a claim-relay account. Anyone can see the deposit; only the sender-approved wallet can claim it."}),o.jsxs("ol",{children:[o.jsx("li",{children:"Recipient signs a wallet request."}),o.jsx("li",{children:"Sender verifies the person and wallet."}),o.jsx("li",{children:"Sender shares a signed claim link."}),o.jsxs("li",{children:["The exact recipient claims on ",e.name,"."]})]}),o.jsxs("p",{className:"ms-fine",children:["Test ",e.symbol," only. Recipients need network gas. Approvals cannot be revoked before their deadline; the first valid claim wins. These links do not bridge funds."]})]}),w&&w.status!==0&&o.jsxs("section",{className:"panel ms-form",children:[o.jsx("label",{htmlFor:"native-proof",children:"Signed request or claim link"}),o.jsx("textarea",{id:"native-proof",rows:3,value:r,onChange:z=>{a(z.target.value),h(!1)},placeholder:"Paste the complete GhostPay link, including #request= or #authorization=",maxLength:6e3}),d&&o.jsx("p",{className:"ms-alert",role:"alert",children:d}),c&&o.jsxs("p",{className:"gp-proof-valid",children:[o.jsx(zt,{size:15}),c.kind==="request"?"Recipient wallet signature verified":"Sender authorization verified"]})]}),m&&o.jsxs("section",{className:"panel gp-funded-link",children:[o.jsx("p",{className:"ms-kicker",children:m.kind==="request"?"SEND THIS BACK TO THE SENDER":"SEND THIS TO THE APPROVED RECIPIENT"}),o.jsx("textarea",{readOnly:!0,rows:4,"aria-label":m.kind==="request"?"Signed claim request link":"Signed authorization link",value:m.url}),o.jsxs("button",{className:"ms-button ms-primary ms-full",onClick:()=>B(m.url),children:[o.jsx(Ks,{size:15}),A?"Copied":m.kind==="request"?"Copy signed request link":"Copy wallet-bound claim link"]})]})]})]})]})}const a_=Object.freeze(Object.defineProperty({__proto__:null,default:s_,useNativePayment:tl},Symbol.toStringTag,{value:"Module"}));function o_({reference:n}){const e=Ni(n.chainId),t=tl(n),i=t.data?.payment,s=t.isError?"Verification unavailable":i?i.status===0?"Payment not found":i.status===2?"Claimed":i.status===3?"Refunded":i.expiry<=t.data.now?"Expired":"Held in escrow":"Verifying escrow…";return o.jsxs("div",{className:"ms-pay-card",children:[o.jsxs("div",{className:"ms-pay-card-top",children:[o.jsx("span",{className:"ms-pay-symbol",children:o.jsx(Qi,{size:19})}),o.jsxs("span",{children:["GhostChat · ",e.symbol]}),o.jsx(Et,{size:16})]}),o.jsxs("div",{className:"ms-pay-amount",children:[i?Number(cn(i.amount,e.decimals)).toLocaleString(void 0,{maximumFractionDigits:6}):"—"," ",o.jsx("span",{children:e.symbol})]}),o.jsxs("p",{children:[e.name," · Payment #",n.paymentId]}),o.jsxs("div",{className:"ms-pay-state",children:[o.jsx("span",{}),s]}),o.jsxs(Wn,{className:"gp-native-card-link",to:zs(n),children:["View payment",o.jsx(Et,{size:15})]}),o.jsxs("span",{className:"ms-pay-card-note",children:[o.jsx(Zs,{size:11}),"Testnet · sender approval required"]})]})}function rf(n){return n.payment?.version===3?o.jsx(n_,{reference:n.payment}):n.payment?.version===4?o.jsx(i_,{reference:n.payment}):n.payment?.version===2?o.jsx(o_,{reference:n.payment}):o.jsx(c_,{...n,payment:n.payment?.version===1?n.payment:void 0})}function c_({payment:n,preview:e,onOpen:t,onCreate:i}){const s=!!n&&n.contract.toLowerCase()===Us.toLowerCase()&&n.chainId===jt.id,r=Lv(s?BigInt(n.paymentId):0n),a=r.data,c=e?"Design preview · no deposit":s?r.isError?"Could not read payment":a?a.status===2?"Claimed":a.status===3?"Refunded":a.status===0?"Payment not found":a.expiry<=BigInt(Math.floor(Date.now()/1e3))?"Expired":"Held in escrow":"Reading MST Testnet…":"Different escrow · verify first";return o.jsxs("div",{className:`ms-pay-card${e?" is-preview":""}`,children:[o.jsxs("div",{className:"ms-pay-card-top",children:[o.jsx("span",{className:"ms-pay-symbol",children:o.jsx(Qi,{size:19})}),o.jsx("span",{children:"GhostChat payment"}),o.jsx(Et,{size:16})]}),o.jsxs("div",{className:"ms-pay-amount",children:[e?"0.015":a?Number(Im(a.amount)).toLocaleString(void 0,{maximumFractionDigits:6}):"—"," ",o.jsx("span",{children:"tMSTC"})]}),o.jsx("p",{children:e?"A little something, headed your way.":`Payment #${n?.paymentId} · MST Testnet`}),o.jsxs("div",{className:"ms-pay-state",children:[o.jsx("span",{}),c]}),o.jsxs("button",{onClick:()=>e?i():s&&t(n.paymentId),disabled:!e&&(!s||!a||a.status===0),children:[e?"Create a real payment":"View payment",o.jsx(Et,{size:15})]}),o.jsxs("span",{className:"ms-pay-card-note",children:[o.jsx(Zs,{size:11}),e?"Preview card · test tMSTC only":"Sender approval required"]})]})}function l_({onClose:n,embedded:e=!1,onLockChange:t}){const i=Cn(),s=i.rooms.find(r=>r.id===i.activeId);return o.jsx(Jv,{standalone:e,onLockChange:t,onClose:n,recipient:s?.name,group:!!s&&s.kind!=="direct",onShare:async(r,a)=>{await i.send(r,a),i.notify(i.mode==="preview"?"Payment card saved on this device. Share its public link separately.":"Payment shared in this encrypted conversation.")}})}const La=n=>btoa(Array.from(n,e=>String.fromCharCode(e)).join("")),Da=n=>Uint8Array.from(atob(n),e=>e.charCodeAt(0));async function af(n,e){const t=await crypto.subtle.importKey("raw",new TextEncoder().encode(n),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:25e4,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function d_(n,e){if(e.length<12)throw new Error("Use a backup password of at least 12 characters.");const t=crypto.getRandomValues(new Uint8Array(16)),i=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:i},await af(e,t),new TextEncoder().encode(n));return JSON.stringify({format:"ghostchat-room-keys",version:1,salt:La(t),iv:La(i),ciphertext:La(new Uint8Array(s))})}async function u_(n,e){if(n.length>15e6)throw new Error("Backup file is too large.");try{const t=JSON.parse(n);if(t.format!=="ghostchat-room-keys"||t.version!==1)throw new Error;const i=Da(t.salt),s=Da(t.iv);if(i.length!==16||s.length!==12)throw new Error;const r=await crypto.subtle.decrypt({name:"AES-GCM",iv:s},await af(e,i),Da(t.ciphertext));return new TextDecoder().decode(r)}catch{throw new Error("Could not unlock this backup. Check the file and backup password.")}}function h_(){const[n,e]=L.useState(""),[t,i]=L.useState(!1),[s,r]=L.useState("");async function a(c){if(!t){i(!0),r("");try{await c()}catch(l){r(l.message)}finally{i(!1),e("")}}}return o.jsxs("section",{className:"ms-settings-card",children:[o.jsx("h2",{children:"Chat key backup & recovery"}),o.jsx("p",{children:"This browser remembers your chat device. Before signing out or moving browsers, save an encrypted backup. Keep its password separately."}),o.jsx("button",{className:"ms-button ms-secondary",disabled:t,onClick:()=>a(async()=>{const c=await tt.recoverLocalChatKeys();r(`Recovered ${c} room keys from earlier devices. Messages with matching keys were retried.`)}),children:"Recover keys from this browser"}),o.jsx("p",{children:"To restore missing history, try local recovery first. You can also export from the browser where those messages are still readable, then import here. Without the original keys or a backup, the server cannot decrypt old messages."}),o.jsxs("label",{children:["Backup password",o.jsx("input",{type:"password",autoComplete:"new-password",value:n,onChange:c=>e(c.target.value),placeholder:"At least 12 characters",disabled:t})]}),o.jsx("button",{className:"ms-button ms-secondary",disabled:t||n.length<12,onClick:()=>a(async()=>{const c=await tt.exportChatKeys();if(!JSON.parse(c).length)throw new Error("This device has no room keys to back up.");const l=await d_(c,n),d=URL.createObjectURL(new Blob([l],{type:"application/json"})),u=document.createElement("a");u.href=d,u.download="ghostchat-encrypted-room-keys.json",u.click(),setTimeout(()=>URL.revokeObjectURL(d),1e4),r("Encrypted backup downloaded. It covers keys currently on this device.")}),children:"Download encrypted backup"}),o.jsxs("label",{children:["Restore a GhostChat backup",o.jsx("input",{type:"file",accept:"application/json,.json",disabled:t||!n,onChange:c=>{const l=c.target.files?.[0];c.target.value="",l&&a(async()=>{if(l.size>15e6)throw new Error("Backup file is too large.");await tt.importChatKeys(await u_(await l.text(),n)),r("Keys imported. Messages with matching keys were retried.")})}})]}),o.jsx("p",{className:"ms-fine",children:"The file and password are processed on this device and are not uploaded. This backup does not recover your wallet or verify another device."}),s&&o.jsx("p",{role:"status",children:s})]})}const nl="186",f_=0,Rd=1,p_=2,Dr=1,m_=2,Is=3,Mi=0,kt=1,On=2,zn=0,Os=1,Nd=2,Pd=3,Id=4,g_=5,qi=100,x_=101,v_=102,__=103,y_=104,b_=200,S_=201,M_=202,w_=203,of=204,cf=205,E_=206,T_=207,A_=208,C_=209,R_=210,N_=211,P_=212,I_=213,L_=214,Uo=0,Fo=1,Oo=2,Vs=3,ko=4,Bo=5,zo=6,Ho=7,lf=0,D_=1,U_=2,dn=0,df=1,uf=2,hf=3,ff=4,pf=5,mf=6,gf=7,xf=300,wi=301,ds=302,Ua=303,Fa=304,va=306,Vo=1e3,kn=1001,Go=1002,At=1003,F_=1004,dr=1005,Pt=1006,Oa=1007,vi=1008,Zt=1009,vf=1010,_f=1011,Gs=1012,il=1013,En=1014,yn=1015,Tn=1016,sl=1017,rl=1018,js=1020,yf=35902,bf=35899,Sf=1021,Mf=1022,on=1023,jn=1026,_i=1027,wf=1028,al=1029,Ei=1030,ol=1031,cl=1033,Ur=33776,Fr=33777,Or=33778,kr=33779,jo=35840,Wo=35841,Xo=35842,qo=35843,$o=36196,Yo=37492,Ko=37496,Zo=37488,Jo=37489,Jr=37490,Qo=37491,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,cc=37816,lc=37817,dc=37818,uc=37819,hc=37820,fc=37821,pc=36492,mc=36494,gc=36495,xc=36283,vc=36284,Qr=36285,_c=36286,O_=3200,Ld=0,k_=1,ii="",Kt="srgb",ea="srgb-linear",ta="linear",lt="srgb",ka=7680,B_=519,z_=512,H_=513,V_=514,ll=515,G_=516,j_=517,dl=518,W_=519,X_=35044,Dd="300 es",bn=2e3,na=2001;function q_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $_(){const n=ia("canvas");return n.style.display="block",n}const Ud={};function Fd(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ef(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Be(...n){n=Ef(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function nt(...n){n=Ef(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ns(...n){const e=n.join(" ");e in Ud||(Ud[e]=!0,Be(...n))}function Y_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const K_={[Uo]:Fo,[Oo]:zo,[ko]:Ho,[Vs]:Bo,[Fo]:Uo,[zo]:Oo,[Ho]:ko,[Bo]:Vs};class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,yc=180/Math.PI;function nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Z_(n,e){return(n%e+e)%e}function za(n,e,t){return(1-t)*n+t*e}function Ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pl=class pl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pl.prototype.isVector2=!0;let it=pl;class gs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,c){let l=i[s+0],d=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(f!==y||l!==h||d!==m||u!==x){let g=l*h+d*m+u*x+f*y;g<0&&(h=-h,m=-m,x=-x,y=-y,g=-g);let p=1-c;if(g<.9995){const E=Math.acos(g),A=Math.sin(E);p=Math.sin(p*E)/A,c=Math.sin(c*E)/A,l=l*p+h*c,d=d*p+m*c,u=u*p+x*c,f=f*p+y*c}else{l=l*p+h*c,d=d*p+m*c,u=u*p+x*c,f=f*p+y*c;const E=1/Math.sqrt(l*l+d*d+u*u+f*f);l*=E,d*=E,u*=E,f*=E}}e[t]=l,e[t+1]=d,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const c=i[s],l=i[s+1],d=i[s+2],u=i[s+3],f=r[a],h=r[a+1],m=r[a+2],x=r[a+3];return e[t]=c*x+u*f+l*m-d*h,e[t+1]=l*x+u*h+d*f-c*m,e[t+2]=d*x+u*m+c*h-l*f,e[t+3]=u*x-c*f-l*h-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,c=Math.cos,l=Math.sin,d=c(i/2),u=c(s/2),f=c(r/2),h=l(i/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*f+d*m*x,this._y=d*m*f-h*u*x,this._z=d*u*x+h*m*f,this._w=d*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+d*m*x,this._y=d*m*f-h*u*x,this._z=d*u*x-h*m*f,this._w=d*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-d*m*x,this._y=d*m*f+h*u*x,this._z=d*u*x+h*m*f,this._w=d*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-d*m*x,this._y=d*m*f+h*u*x,this._z=d*u*x-h*m*f,this._w=d*u*f+h*m*x;break;case"YZX":this._x=h*u*f+d*m*x,this._y=d*m*f+h*u*x,this._z=d*u*x-h*m*f,this._w=d*u*f-h*m*x;break;case"XZY":this._x=h*u*f-d*m*x,this._y=d*m*f-h*u*x,this._z=d*u*x+h*m*f,this._w=d*u*f+h*m*x;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],c=t[5],l=t[9],d=t[2],u=t[6],f=t[10],h=i+c+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-d)*m,this._z=(a-s)*m}else if(i>c&&i>f){const m=2*Math.sqrt(1+i-c-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+d)/m}else if(c>f){const m=2*Math.sqrt(1+c-i-f);this._w=(r-d)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-c);this._w=(a-s)/m,this._x=(r+d)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,c=t._x,l=t._y,d=t._z,u=t._w;return this._x=i*u+a*c+s*d-r*l,this._y=s*u+a*l+r*c-i*d,this._z=r*u+a*d+i*l-s*c,this._w=a*u-i*c-s*l-r*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,c=this.dot(e);c<0&&(i=-i,s=-s,r=-r,a=-a,c=-c);let l=1-t;if(c<.9995){const d=Math.acos(c),u=Math.sin(d);l=Math.sin(l*d)/u,t=Math.sin(t*d)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ml=class ml{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,c=e.z,l=e.w,d=2*(a*s-c*i),u=2*(c*t-r*s),f=2*(r*i-a*t);return this.x=t+l*d+a*f-c*u,this.y=i+l*u+c*d-r*f,this.z=s+l*f+r*u-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,c=t.y,l=t.z;return this.x=s*l-r*c,this.y=r*a-i*l,this.z=i*c-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ml.prototype.isVector3=!0;let Z=ml;const Ha=new Z,Od=new gs,gl=class gl{constructor(e,t,i,s,r,a,c,l,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,c,l,d)}set(e,t,i,s,r,a,c,l,d){const u=this.elements;return u[0]=e,u[1]=s,u[2]=c,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],c=i[3],l=i[6],d=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],y=s[0],g=s[3],p=s[6],E=s[1],A=s[4],b=s[7],w=s[2],M=s[5],C=s[8];return r[0]=a*y+c*E+l*w,r[3]=a*g+c*A+l*M,r[6]=a*p+c*b+l*C,r[1]=d*y+u*E+f*w,r[4]=d*g+u*A+f*M,r[7]=d*p+u*b+f*C,r[2]=h*y+m*E+x*w,r[5]=h*g+m*A+x*M,r[8]=h*p+m*b+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],c=e[5],l=e[6],d=e[7],u=e[8];return t*a*u-t*c*d-i*r*u+i*c*l+s*r*d-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],c=e[5],l=e[6],d=e[7],u=e[8],f=u*a-c*d,h=c*l-u*r,m=d*r-a*l,x=t*f+i*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(s*d-u*i)*y,e[2]=(c*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-c*t)*y,e[6]=m*y,e[7]=(i*l-d*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,c){const l=Math.cos(r),d=Math.sin(r);return this.set(i*l,i*d,-i*(l*a+d*c)+a+e,-s*d,s*l,-s*(-d*a+l*c)+c+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gl.prototype.isMatrix3=!0;let Ge=gl;const Va=new Ge,kd=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){const n={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ea]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:kd,fromXYZ:Bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:kd,fromXYZ:Bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const Ke=J_();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class Q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Di===void 0&&(Di=ia("canvas")),Di.width=e.width,Di.height=e.height;const s=Di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ey=0;class ul{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Q_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let ty=0;const ja=new Z;class Ft extends Pi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=kn,s=kn,r=Pt,a=vi,c=on,l=Zt,d=Ft.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=nr(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=xf;Ft.DEFAULT_ANISOTROPY=1;const xl=class xl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,d=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(x+g)<.1&&Math.abs(d+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(d+1)/2,b=(m+1)/2,w=(p+1)/2,M=(u+h)/4,C=(f+y)/4,_=(x+g)/4;return A>b&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=M/i,r=C/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=_/r),this.set(i,s,r,t),this}let E=Math.sqrt((g-x)*(g-x)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(g-x)/E,this.y=(f-y)/E,this.z=(h-u)/E,this.w=Math.acos((d+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xl.prototype.isVector4=!0;let gt=xl;class ny extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Ft(s),a=i.count;for(let c=0;c<a;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ul(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends ny{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tf extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iy extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sa=class sa{constructor(e,t,i,s,r,a,c,l,d,u,f,h,m,x,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,c,l,d,u,f,h,m,x,y,g)}set(e,t,i,s,r,a,c,l,d,u,f,h,m,x,y,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=c,p[13]=l,p[2]=d,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(s),d=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*f,x=c*u,y=c*f;t[0]=l*u,t[4]=-l*f,t[8]=d,t[1]=m+x*d,t[5]=h-y*d,t[9]=-c*l,t[2]=y-h*d,t[6]=x+m*d,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=d*u,y=d*f;t[0]=h+y*c,t[4]=x*c-m,t[8]=a*d,t[1]=a*f,t[5]=a*u,t[9]=-c,t[2]=m*c-x,t[6]=y+h*c,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=d*u,y=d*f;t[0]=h-y*c,t[4]=-a*f,t[8]=x+m*c,t[1]=m+x*c,t[5]=a*u,t[9]=y-h*c,t[2]=-a*d,t[6]=c,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=c*u,y=c*f;t[0]=l*u,t[4]=x*d-m,t[8]=h*d+y,t[1]=l*f,t[5]=y*d+h,t[9]=m*d-x,t[2]=-d,t[6]=c*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*d,x=c*l,y=c*d;t[0]=l*u,t[4]=y-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-c*u,t[2]=-d*u,t[6]=m*f+x,t[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,m=a*d,x=c*l,y=c*d;t[0]=l*u,t[4]=-f,t[8]=d*u,t[1]=h*f+y,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=c*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sy,e,ry)}lookAt(e,t,i){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Zn.crossVectors(i,Vt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Zn.crossVectors(i,Vt)),Zn.normalize(),ur.crossVectors(Vt,Zn),s[0]=Zn.x,s[4]=ur.x,s[8]=Vt.x,s[1]=Zn.y,s[5]=ur.y,s[9]=Vt.y,s[2]=Zn.z,s[6]=ur.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],c=i[4],l=i[8],d=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],y=i[6],g=i[10],p=i[14],E=i[3],A=i[7],b=i[11],w=i[15],M=s[0],C=s[4],_=s[8],T=s[12],P=s[1],I=s[5],U=s[9],G=s[13],R=s[2],B=s[6],z=s[10],k=s[14],K=s[3],H=s[7],ee=s[11],ne=s[15];return r[0]=a*M+c*P+l*R+d*K,r[4]=a*C+c*I+l*B+d*H,r[8]=a*_+c*U+l*z+d*ee,r[12]=a*T+c*G+l*k+d*ne,r[1]=u*M+f*P+h*R+m*K,r[5]=u*C+f*I+h*B+m*H,r[9]=u*_+f*U+h*z+m*ee,r[13]=u*T+f*G+h*k+m*ne,r[2]=x*M+y*P+g*R+p*K,r[6]=x*C+y*I+g*B+p*H,r[10]=x*_+y*U+g*z+p*ee,r[14]=x*T+y*G+g*k+p*ne,r[3]=E*M+A*P+b*R+w*K,r[7]=E*C+A*I+b*B+w*H,r[11]=E*_+A*U+b*z+w*ee,r[15]=E*T+A*G+b*k+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],c=e[5],l=e[9],d=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],y=e[7],g=e[11],p=e[15],E=l*m-d*h,A=c*m-d*f,b=c*h-l*f,w=a*m-d*u,M=a*h-l*u,C=a*f-c*u;return t*(y*E-g*A+p*b)-i*(x*E-g*w+p*M)+s*(x*A-y*w+p*C)-r*(x*b-y*M+g*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],d=e[6],u=e[10];return t*(a*u-c*d)-i*(r*u-c*l)+s*(r*d-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],c=e[5],l=e[6],d=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],y=e[13],g=e[14],p=e[15],E=t*c-i*a,A=t*l-s*a,b=t*d-r*a,w=i*l-s*c,M=i*d-r*c,C=s*d-r*l,_=u*y-f*x,T=u*g-h*x,P=u*p-m*x,I=f*g-h*y,U=f*p-m*y,G=h*p-m*g,R=E*G-A*U+b*I+w*P-M*T+C*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/R;return e[0]=(c*G-l*U+d*I)*B,e[1]=(s*U-i*G-r*I)*B,e[2]=(y*C-g*M+p*w)*B,e[3]=(h*M-f*C-m*w)*B,e[4]=(l*P-a*G-d*T)*B,e[5]=(t*G-s*P+r*T)*B,e[6]=(g*b-x*C-p*A)*B,e[7]=(u*C-h*b+m*A)*B,e[8]=(a*U-c*P+d*_)*B,e[9]=(i*P-t*U-r*_)*B,e[10]=(x*M-y*b+p*E)*B,e[11]=(f*b-u*M-m*E)*B,e[12]=(c*T-a*I-l*_)*B,e[13]=(t*I-i*T+s*_)*B,e[14]=(y*A-x*w-g*E)*B,e[15]=(u*w-f*A+h*E)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,c=e.y,l=e.z,d=r*a,u=r*c;return this.set(d*a+i,d*c-s*l,d*l+s*c,0,d*c+s*l,u*c+i,u*l-s*a,0,d*l-s*c,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,c=t._z,l=t._w,d=r+r,u=a+a,f=c+c,h=r*d,m=r*u,x=r*f,y=a*u,g=a*f,p=c*f,E=l*d,A=l*u,b=l*f,w=i.x,M=i.y,C=i.z;return s[0]=(1-(y+p))*w,s[1]=(m+b)*w,s[2]=(x-A)*w,s[3]=0,s[4]=(m-b)*M,s[5]=(1-(h+p))*M,s[6]=(g+E)*M,s[7]=0,s[8]=(x+A)*C,s[9]=(g-E)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length();const c=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);const d=1/a,u=1/c,f=1/l;return tn.elements[0]*=d,tn.elements[1]*=d,tn.elements[2]*=d,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),i.x=a,i.y=c,i.z=l,this}makePerspective(e,t,i,s,r,a,c=bn,l=!1){const d=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),m=(i+s)/(i-s);let x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(c===bn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(c===na)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=u,d[4]=0,d[8]=h,d[12]=0,d[1]=0,d[5]=f,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,r,a,c=bn,l=!1){const d=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),m=-(i+s)/(i-s);let x,y;if(l)x=1/(a-r),y=a/(a-r);else if(c===bn)x=-2/(a-r),y=-(a+r)/(a-r);else if(c===na)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=u,d[4]=0,d[8]=0,d[12]=h,d[1]=0,d[5]=f,d[9]=0,d[13]=m,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};sa.prototype.isMatrix4=!0;let bt=sa;const Ui=new Z,tn=new bt,sy=new Z(0,0,0),ry=new Z(1,1,1),Zn=new Z,ur=new Z,Vt=new Z,zd=new bt,Hd=new gs;class Ti{constructor(e=0,t=0,i=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],c=s[8],l=s[1],d=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ay=0;const Vd=new Z,Fi=new gs,Nn=new bt,hr=new Z,Ms=new Z,oy=new Z,cy=new gs,Gd=new Z(1,0,0),jd=new Z(0,1,0),Wd=new Z(0,0,1),Xd={type:"added"},ly={type:"removed"},Oi={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Wt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new Z,t=new Ti,i=new gs,s=new Z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ge}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Vd.copy(e).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hr.copy(e):hr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ms,hr,this.up):Nn.lookAt(hr,Ms,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ly),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let d=0,u=l.length;d<u;d++){const f=l[d];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,d=this.material.length;l<d;l++)c.push(r(e.materials,this.material[l]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];s.animations.push(r(e.animations,l))}}if(t){const c=a(e.geometries),l=a(e.materials),d=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(c){const l=[];for(const d in c){const u=c[d];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Wt.DEFAULT_UP=new Z(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dy={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const c=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),p=this._getHandJoint(d,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;d.inputState.pinching&&h>m+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=m-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Z_(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=qa(a,r,e+1/3),this.g=qa(a,r,e),this.b=qa(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ke.workingToColorSpace(Nt.copy(this),e),Math.round(Ze(Nt.r*255,0,255))*65536+Math.round(Ze(Nt.g*255,0,255))*256+Math.round(Ze(Nt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(i,s,r),c=Math.min(i,s,r);let l,d;const u=(c+a)/2;if(c===a)l=0,d=0;else{const f=a-c;switch(d=u<=.5?f/(a+c):f/(2-a-c),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=d,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Kt){Ke.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(pr);const i=za(Jn.h,pr.h,t),s=za(Jn.s,pr.s,t),r=za(Jn.l,pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new ct;ct.NAMES=Cf;class uy extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new Z,Pn=new Z,$a=new Z,In=new Z,ki=new Z,Bi=new Z,qd=new Z,Ya=new Z,Ka=new Z,Za=new Z,Ja=new gt,Qa=new gt,eo=new gt;class an{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),nn.subVectors(e,t),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){nn.subVectors(s,t),Pn.subVectors(i,t),$a.subVectors(e,t);const a=nn.dot(nn),c=nn.dot(Pn),l=nn.dot($a),d=Pn.dot(Pn),u=Pn.dot($a),f=a*d-c*c;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(d*l-c*u)*h,x=(a*u-c*l)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,s,r,a,c,l){return this.getBarycoord(e,t,i,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(c,In.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ja.setScalar(0),Qa.setScalar(0),eo.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,i),eo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ja,r.x),a.addScaledVector(Qa,r.y),a.addScaledVector(eo,r.z),a}static isFrontFacing(e,t,i,s){return nn.subVectors(i,t),Pn.subVectors(e,t),nn.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),nn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,c;ki.subVectors(s,i),Bi.subVectors(r,i),Ya.subVectors(e,i);const l=ki.dot(Ya),d=Bi.dot(Ya);if(l<=0&&d<=0)return t.copy(i);Ka.subVectors(e,s);const u=ki.dot(Ka),f=Bi.dot(Ka);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*d;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ki,a);Za.subVectors(e,r);const m=ki.dot(Za),x=Bi.dot(Za);if(x>=0&&m<=x)return t.copy(r);const y=m*d-l*x;if(y<=0&&d>=0&&x<=0)return c=d/(d-x),t.copy(i).addScaledVector(Bi,c);const g=u*x-m*f;if(g<=0&&f-u>=0&&m-x>=0)return qd.subVectors(r,s),c=(f-u)/(f-u+(m-x)),t.copy(s).addScaledVector(qd,c);const p=1/(g+y+h);return a=y*p,c=h*p,t.copy(i).addScaledVector(ki,a).addScaledVector(Bi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ir{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),gr.subVectors(this.max,ws),zi.subVectors(e.a,ws),Hi.subVectors(e.b,ws),Vi.subVectors(e.c,ws),Qn.subVectors(Hi,zi),ei.subVectors(Vi,Hi),li.subVectors(zi,Vi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-li.z,li.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,li.z,0,-li.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-li.y,li.x,0];return!to(t,zi,Hi,Vi,gr)||(t=[1,0,0,0,1,0,0,0,1],!to(t,zi,Hi,Vi,gr))?!1:(xr.crossVectors(Qn,ei),t=[xr.x,xr.y,xr.z],to(t,zi,Hi,Vi,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],sn=new Z,mr=new ir,zi=new Z,Hi=new Z,Vi=new Z,Qn=new Z,ei=new Z,li=new Z,ws=new Z,gr=new Z,xr=new Z,di=new Z;function to(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){di.fromArray(n,r);const c=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),d=t.dot(di),u=i.dot(di);if(Math.max(-Math.max(l,d,u),Math.min(l,d,u))>c)return!1}return!0}const yt=new Z,vr=new it;let hy=0;class Vn extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=X_,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rf extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nf extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const fy=new ir,Es=new Z,no=new Z;class hl{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(no)),this.expandByPoint(Es.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let py=0;const $t=new bt,io=new Wt,Gi=new Z,Gt=new ir,Ts=new ir,wt=new Z;class Xn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?Nf:Rf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const c=t[r];Ts.setFromBufferAttribute(c),this.morphTargetsRelative?(wt.addVectors(Gt.min,Ts.min),Gt.expandByPoint(wt),wt.addVectors(Gt.max,Ts.max),Gt.expandByPoint(wt)):(Gt.expandByPoint(Ts.min),Gt.expandByPoint(Ts.max))}Gt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const c=t[r],l=this.morphTargetsRelative;for(let d=0,u=c.count;d<u;d++)wt.fromBufferAttribute(c,d),l&&(Gi.fromBufferAttribute(e,d),wt.add(Gi)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const c=[],l=[];for(let _=0;_<i.count;_++)c[_]=new Z,l[_]=new Z;const d=new Z,u=new Z,f=new Z,h=new it,m=new it,x=new it,y=new Z,g=new Z;function p(_,T,P){d.fromBufferAttribute(i,_),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),h.fromBufferAttribute(r,_),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,P),u.sub(d),f.sub(d),m.sub(h),x.sub(h);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(I),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(I),c[_].add(y),c[T].add(y),c[P].add(y),l[_].add(g),l[T].add(g),l[P].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,T=E.length;_<T;++_){const P=E[_],I=P.start,U=P.count;for(let G=I,R=I+U;G<R;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new Z,b=new Z,w=new Z,M=new Z;function C(_){w.fromBufferAttribute(s,_),M.copy(w);const T=c[_];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(M,T);const I=b.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,I)}for(let _=0,T=E.length;_<T;++_){const P=E[_],I=P.start,U=P.count;for(let G=I,R=I+U;G<R;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new Z,r=new Z,a=new Z,c=new Z,l=new Z,d=new Z,u=new Z,f=new Z;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),d.fromBufferAttribute(i,g),c.add(u),l.add(u),d.add(u),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(c,l){const d=c.array,u=c.itemSize,f=c.normalized,h=new d.constructor(l.length*u);let m=0,x=0;for(let y=0,g=l.length;y<g;y++){c.isInterleavedBufferAttribute?m=l[y]*c.data.stride+c.offset:m=l[y]*u;for(let p=0;p<u;p++)h[x++]=d[m++]}return new Vn(h,u,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,s=this.attributes;for(const c in s){const l=s[c],d=e(l,i);t.setAttribute(c,d)}const r=this.morphAttributes;for(const c in r){const l=[],d=r[c];for(let u=0,f=d.length;u<f;u++){const h=d[u],m=e(h,i);l.push(m)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const d=a[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],u=[];for(let f=0,h=d.length;f<h;f++){const m=d[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const u=s[d];this.setAttribute(d,u.clone(t))}const r=e.morphAttributes;for(const d in r){const u=[],f=r[d];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,u=a.length;d<u;d++){const f=a[d];this.addGroup(f.start,f.count,f.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new Z,my=new Z,gy=new Ge;class ni{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=so.subVectors(i,t).cross(my.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(so),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gy.getNormalMatrix(e),s=this.coplanarPoint(so).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xy=0;class _a extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Os,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=cf,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const c in r){const l=r[c];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ni().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dn=new Z,ro=new Z,_r=new Z,yr=new Z;class vy{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ro.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(ro);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),c=yr.dot(this.direction),l=-yr.dot(_r),d=yr.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-c,h=a*c-l,x=r*u,f>=0)if(h>=-x)if(h<=x){const y=1/u;f*=y,h*=y,m=f*(f+a*h+2*c)+h*(a*f+h+2*l)+d}else h=r,f=Math.max(0,-(a*h+c)),m=-f*f+h*(h+2*l)+d;else h=-r,f=Math.max(0,-(a*h+c)),m=-f*f+h*(h+2*l)+d;else h<=-x?(f=Math.max(0,-(-a*r+c)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+d):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+d):(f=Math.max(0,-(a*r+c)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+d);else h=a>0?-r:r,f=Math.max(0,-(a*h+c)),m=-f*f+h*(h+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ro).addScaledVector(_r,h),m}intersectSphere(e,t){if(e.radius<0)return null;Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,c,l;const d=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return d>=0?(i=(e.min.x-h.x)*d,s=(e.max.x-h.x)*d):(i=(e.max.x-h.x)*d,s=(e.min.x-h.x)*d),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(c=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(c=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||c>s)||((c>i||i!==i)&&(i=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,c=this.direction,l=c.x,d=c.y,u=c.z,f=e.x-a.x,h=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,g=t.z-a.z,p=i.x-a.x,E=i.y-a.y,A=i.z-a.z,b=Math.abs(l),w=Math.abs(d),M=Math.abs(u);let C,_,T,P,I,U,G,R,B,z,k,K;if(b>=w&&b>=M?(T=l,U=f,B=x,K=p,l>=0?(C=d,_=u,P=h,I=m,G=y,R=g,z=E,k=A):(C=u,_=d,P=m,I=h,G=g,R=y,z=A,k=E)):w>=M?(T=d,U=h,B=y,K=E,d>=0?(C=u,_=l,P=m,I=f,G=g,R=x,z=A,k=p):(C=l,_=u,P=f,I=m,G=x,R=g,z=p,k=A)):(T=u,U=m,B=g,K=A,u>=0?(C=l,_=d,P=f,I=h,G=x,R=y,z=p,k=E):(C=d,_=l,P=h,I=f,G=y,R=x,z=E,k=p)),T===0)return null;const H=C/T,ee=_/T,ne=1/T,te=P-H*U,J=I-ee*U,oe=G-H*B,de=R-ee*B,Se=z-H*K,q=k-ee*K,X=Se*de-q*oe,he=te*q-J*Se,ue=oe*J-de*te;if(s){if(X<0||he<0||ue<0)return null}else if((X<0||he<0||ue<0)&&(X>0||he>0||ue>0))return null;const le=X+he+ue;if(le===0)return null;const Ce=ne*(X*U+he*B+ue*K);return(le>0?Ce<0:Ce>0)?null:this.at(Ce/le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pf extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $d=new bt,ui=new vy,br=new hl,Yd=new Z,Sr=new Z,Mr=new Z,wr=new Z,ao=new Z,Er=new Z,Kd=new Z,Tr=new Z;class An extends Wt{constructor(e=new Xn,t=new Pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(r&&c){Er.set(0,0,0);for(let l=0,d=r.length;l<d;l++){const u=c[l],f=r[l];u!==0&&(ao.fromBufferAttribute(f,e),a?Er.addScaledVector(ao,u):Er.addScaledVector(ao.sub(t),u))}t.add(Er)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(br.containsPoint(ui.origin)===!1&&(ui.intersectSphere(br,Yd)===null||ui.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&($d.copy(r).invert(),ui.copy(e.ray).applyMatrix4($d),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,c=r.index,l=r.attributes.position,d=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(c!==null)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=a[g.materialIndex],E=Math.max(g.start,m.start),A=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let b=E,w=A;b<w;b+=3){const M=c.getX(b),C=c.getX(b+1),_=c.getX(b+2);s=Ar(this,p,e,i,d,u,f,M,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const E=c.getX(g),A=c.getX(g+1),b=c.getX(g+2);s=Ar(this,a,e,i,d,u,f,E,A,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=a[g.materialIndex],E=Math.max(g.start,m.start),A=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let b=E,w=A;b<w;b+=3){const M=b,C=b+1,_=b+2;s=Ar(this,p,e,i,d,u,f,M,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const E=g,A=g+1,b=g+2;s=Ar(this,a,e,i,d,u,f,E,A,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function _y(n,e,t,i,s,r,a,c){let l;if(e.side===kt?l=i.intersectTriangle(a,r,s,!0,c):l=i.intersectTriangle(s,r,a,e.side===Mi,c),l===null)return null;Tr.copy(c),Tr.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Tr);return d<t.near||d>t.far?null:{distance:d,point:Tr.clone(),object:n}}function Ar(n,e,t,i,s,r,a,c,l,d){n.getVertexPosition(c,Sr),n.getVertexPosition(l,Mr),n.getVertexPosition(d,wr);const u=_y(n,e,t,i,Sr,Mr,wr,Kd);if(u){const f=new Z;an.getBarycoord(Kd,Sr,Mr,wr,f),s&&(u.uv=an.getInterpolatedAttribute(s,c,l,d,f,new it)),r&&(u.uv1=an.getInterpolatedAttribute(r,c,l,d,f,new it)),a&&(u.normal=an.getInterpolatedAttribute(a,c,l,d,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:c,b:l,c:d,normal:new Z,materialIndex:0};an.getNormal(Sr,Mr,wr,h.normal),u.face=h,u.barycoord=f}return u}class yy extends Ft{constructor(e=null,t=1,i=1,s,r,a,c,l,d=At,u=At,f,h){super(null,a,c,l,d,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hi=new hl,by=new it(.5,.5),Cr=new Z;class If{constructor(e=new ni,t=new ni,i=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(r),c[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){const s=this.planes,r=e.elements,a=r[0],c=r[1],l=r[2],d=r[3],u=r[4],f=r[5],h=r[6],m=r[7],x=r[8],y=r[9],g=r[10],p=r[11],E=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(d-a,m-u,p-x,w-E).normalize(),s[1].setComponents(d+a,m+u,p+x,w+E).normalize(),s[2].setComponents(d+c,m+f,p+y,w+A).normalize(),s[3].setComponents(d-c,m-f,p-y,w-A).normalize(),i)s[4].setComponents(l,h,g,b).normalize(),s[5].setComponents(d-l,m-h,p-g,w-b).normalize();else if(s[4].setComponents(d-l,m-h,p-g,w-b).normalize(),t===bn)s[5].setComponents(d+l,m+h,p+g,w+b).normalize();else if(t===na)s[5].setComponents(l,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=by.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Cr.x=s.normal.x>0?e.max.x:e.min.x,Cr.y=s.normal.y>0?e.max.y:e.min.y,Cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lf extends Ft{constructor(e=[],t=wi,i,s,r,a,c,l,d,u){super(e,t,i,s,r,a,c,l,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ws extends Ft{constructor(e,t,i=En,s,r,a,c=At,l=At,d,u=jn,f=1){if(u!==jn&&u!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,c,l,u,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ul(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Sy extends Ws{constructor(e,t=En,i=wi,s,r,a=At,c=At,l,d=jn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,c,l,d),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Df extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sr extends Xn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const c=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],d=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gn(d,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(f,2));function x(y,g,p,E,A,b,w,M,C,_,T){const P=b/C,I=w/_,U=b/2,G=w/2,R=M/2,B=C+1,z=_+1;let k=0,K=0;const H=new Z;for(let ee=0;ee<z;ee++){const ne=ee*I-G;for(let te=0;te<B;te++){const J=te*P-U;H[y]=J*E,H[g]=ne*A,H[p]=R,d.push(H.x,H.y,H.z),H[y]=0,H[g]=0,H[p]=M>0?1:-1,u.push(H.x,H.y,H.z),f.push(te/C),f.push(1-ee/_),k+=1}}for(let ee=0;ee<_;ee++)for(let ne=0;ne<C;ne++){const te=h+ne+B*ee,J=h+ne+B*(ee+1),oe=h+(ne+1)+B*(ee+1),de=h+(ne+1)+B*ee;l.push(te,J,de),l.push(J,oe,de),K+=6}c.addGroup(m,K,T),m+=K,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rr extends Xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,c=Math.floor(i),l=Math.floor(s),d=c+1,u=l+1,f=e/c,h=t/l,m=[],x=[],y=[],g=[];for(let p=0;p<u;p++){const E=p*h-a;for(let A=0;A<d;A++){const b=A*f-r;x.push(b,-E,0),y.push(0,0,1),g.push(A/c),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<c;E++){const A=E+d*p,b=E+d*(p+1),w=E+1+d*(p+1),M=E+1+d*p;m.push(A,b,M),m.push(b,w,M)}this.setIndex(m),this.setAttribute("position",new Gn(x,3)),this.setAttribute("normal",new Gn(y,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}function us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Zd(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Zd(s[0])){const r=[];for(let a=0,c=s.length;a<c;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=us(n[t]);for(const s in i)e[s]=i[s]}return e}function Zd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function My(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const wy={clone:us,merge:Dt};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(s.value);break;case"v2":this.uniforms[i].value=new it().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ay extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cy extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ry extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rr=new Z,Nr=new gs,xn=new Z;class Ff extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rr,Nr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Nr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Rr,Nr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Nr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new Z,Jd=new it,Qd=new it;class rn extends Ff{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/d,s*=a.width/l,i*=a.height/d}const c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fl extends Ff{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,c=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,c-=u*this.view.offsetY,l=c-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=-90,Wi=1;class Ny extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(ji,Wi,e,t);s.layers=this.layers,this.add(s);const r=new rn(ji,Wi,e,t);r.layers=this.layers,this.add(r);const a=new rn(ji,Wi,e,t);a.layers=this.layers,this.add(a);const c=new rn(ji,Wi,e,t);c.layers=this.layers,this.add(c);const l=new rn(ji,Wi,e,t);l.layers=this.layers,this.add(l);const d=new rn(ji,Wi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,c,l]=t;for(const d of t)this.remove(d);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,c,l,d,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Py extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vl=class vl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};vl.prototype.isMatrix2=!0;let eu=vl;function tu(n,e,t,i){const s=Iy(i);switch(t){case Sf:return n*e;case wf:return n*e/s.components*s.byteLength;case al:return n*e/s.components*s.byteLength;case Ei:return n*e*2/s.components*s.byteLength;case ol:return n*e*2/s.components*s.byteLength;case Mf:return n*e*3/s.components*s.byteLength;case on:return n*e*4/s.components*s.byteLength;case cl:return n*e*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Or:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:case qo:return Math.max(n,16)*Math.max(e,8)/4;case jo:case Xo:return Math.max(n,8)*Math.max(e,8)/2;case $o:case Yo:case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Jr:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xc:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qr:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iy(n){switch(n){case Zt:case vf:return{byteLength:1,components:1};case Gs:case _f:case Tn:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case En:case il:case yn:return{byteLength:4,components:1};case yf:case bf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function Of(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ly(n){const e=new WeakMap;function t(c,l){const d=c.array,u=c.usage,f=d.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,d,u),c.onUploadCallback();let m;if(d instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)m=n.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=n.SHORT;else if(d instanceof Uint32Array)m=n.UNSIGNED_INT;else if(d instanceof Int32Array)m=n.INT;else if(d instanceof Int8Array)m=n.BYTE;else if(d instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function i(c,l,d){const u=l.array,f=l.updateRanges;if(n.bindBuffer(d,c),f.length===0)n.bufferSubData(d,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){const x=f[h],y=f[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,f[h]=y)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){const y=f[m];n.bufferSubData(d,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=e.get(c);l&&(n.deleteBuffer(l.buffer),e.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,l));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,l),d.version=c.version}}return{get:s,remove:r,update:a}}var Dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,db="gl_FragColor = linearToOutputTexel( gl_FragColor );",ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Tb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ib=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_S=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Dy,alphahash_pars_fragment:Uy,alphamap_fragment:Fy,alphamap_pars_fragment:Oy,alphatest_fragment:ky,alphatest_pars_fragment:By,aomap_fragment:zy,aomap_pars_fragment:Hy,batching_pars_vertex:Vy,batching_vertex:Gy,begin_vertex:jy,beginnormal_vertex:Wy,bsdfs:Xy,iridescence_fragment:qy,bumpmap_pars_fragment:$y,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:Jy,color_fragment:Qy,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:sb,defaultnormal_vertex:rb,displacementmap_pars_vertex:ab,displacementmap_vertex:ob,emissivemap_fragment:cb,emissivemap_pars_fragment:lb,colorspace_fragment:db,colorspace_pars_fragment:ub,envmap_fragment:hb,envmap_common_pars_fragment:fb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Tb,envmap_vertex:gb,fog_vertex:xb,fog_pars_vertex:vb,fog_fragment:_b,fog_pars_fragment:yb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Sb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:wb,lights_pars_begin:Eb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Cb,lights_phong_fragment:Rb,lights_phong_pars_fragment:Nb,lights_physical_fragment:Pb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Lb,lights_fragment_maps:Db,lights_fragment_end:Ub,lightprobes_pars_fragment:Fb,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:zb,map_fragment:Hb,map_pars_fragment:Vb,map_particle_fragment:Gb,map_particle_pars_fragment:jb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:Xb,morphinstance_vertex:qb,morphcolor_vertex:$b,morphnormal_vertex:Yb,morphtarget_pars_vertex:Kb,morphtarget_vertex:Zb,normal_fragment_begin:Jb,normal_fragment_maps:Qb,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:oS,opaque_fragment:cS,packing:lS,premultiplied_alpha_fragment:dS,project_vertex:uS,dithering_fragment:hS,dithering_pars_fragment:fS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:xS,shadowmap_vertex:vS,shadowmask_pars_fragment:_S,skinbase_vertex:yS,skinning_pars_vertex:bS,skinning_vertex:SS,skinnormal_vertex:MS,specularmap_fragment:wS,specularmap_pars_fragment:ES,tonemapping_fragment:TS,tonemapping_pars_fragment:AS,transmission_fragment:CS,transmission_pars_fragment:RS,uv_pars_fragment:NS,uv_pars_vertex:PS,uv_vertex:IS,worldpos_vertex:LS,background_vert:DS,background_frag:US,backgroundCube_vert:FS,backgroundCube_frag:OS,cube_vert:kS,cube_frag:BS,depth_vert:zS,depth_frag:HS,distance_vert:VS,distance_frag:GS,equirect_vert:jS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:qS,meshbasic_vert:$S,meshbasic_frag:YS,meshlambert_vert:KS,meshlambert_frag:ZS,meshmatcap_vert:JS,meshmatcap_frag:QS,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:sM,meshphysical_frag:rM,meshtoon_vert:aM,meshtoon_frag:oM,points_vert:cM,points_frag:lM,shadow_vert:dM,shadow_frag:uM,sprite_vert:hM,sprite_frag:fM},ye={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},_n={basic:{uniforms:Dt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Dt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Dt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Dt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Dt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ct(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Dt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Dt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Dt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Dt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Dt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Dt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Dt([ye.common,ye.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Dt([ye.lights,ye.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};_n.physical={uniforms:Dt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Pr={r:0,b:0,g:0},pM=new bt,kf=new Ge;kf.set(-1,0,0,0,1,0,0,0,1);function mM(n,e,t,i,s,r){const a=new ct(0);let c=s===!0?0:1,l,d,u=null,f=0,h=null;function m(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const b=E.backgroundBlurriness>0;A=e.get(A,b)}return A}function x(E){let A=!1;const b=m(E);b===null?g(a,c):b&&b.isColor&&(g(b,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(E,A){const b=m(A);b&&(b.isCubeTexture||b.mapping===va)?(d===void 0&&(d=new An(new sr(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:us(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(kf),d.material.toneMapped=Ke.getTransfer(b.colorSpace)!==lt,(u!==b||f!==b.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,u=b,f=b.version,h=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new An(new rr(2,2),new pn({name:"BackgroundMaterial",uniforms:us(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,A){E.getRGB(Pr,Uf(n)),t.buffers.color.setClear(Pr.r,Pr.g,Pr.b,A,r)}function p(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),c=A,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,g(a,c)},render:x,addToRenderList:y,dispose:p}}function gM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function c(I,U,G,R,B){let z=!1;const k=f(I,R,G,U);r!==k&&(r=k,d(r.object)),z=m(I,R,G,B),z&&x(I,R,G,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(I,U,G,R),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function d(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function f(I,U,G,R){const B=R.wireframe===!0;let z=i[U.id];z===void 0&&(z={},i[U.id]=z);const k=I.isInstancedMesh===!0?I.id:0;let K=z[k];K===void 0&&(K={},z[k]=K);let H=K[G.id];H===void 0&&(H={},K[G.id]=H);let ee=H[B];return ee===void 0&&(ee=h(l()),H[B]=ee),ee}function h(I){const U=[],G=[],R=[];for(let B=0;B<t;B++)U[B]=0,G[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:R,object:I,attributes:{},index:null}}function m(I,U,G,R){const B=r.attributes,z=U.attributes;let k=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){const ne=B[H];let te=z[H];if(te===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),ne===void 0||ne.attribute!==te||te&&ne.data!==te.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function x(I,U,G,R){const B={},z=U.attributes;let k=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){let ne=z[H];ne===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const te={};te.attribute=ne,ne&&ne.data&&(te.data=ne.data),B[H]=te,k++}r.attributes=B,r.attributesNum=k,r.index=R}function y(){const I=r.newAttributes;for(let U=0,G=I.length;U<G;U++)I[U]=0}function g(I){p(I,0)}function p(I,U){const G=r.newAttributes,R=r.enabledAttributes,B=r.attributeDivisors;G[I]=1,R[I]===0&&(n.enableVertexAttribArray(I),R[I]=1),B[I]!==U&&(n.vertexAttribDivisor(I,U),B[I]=U)}function E(){const I=r.newAttributes,U=r.enabledAttributes;for(let G=0,R=U.length;G<R;G++)U[G]!==I[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function A(I,U,G,R,B,z,k){k===!0?n.vertexAttribIPointer(I,U,G,B,z):n.vertexAttribPointer(I,U,G,R,B,z)}function b(I,U,G,R){y();const B=R.attributes,z=G.getAttributes(),k=U.defaultAttributeValues;for(const K in z){const H=z[K];if(H.location>=0){let ee=B[K];if(ee===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const ne=ee.normalized,te=ee.itemSize,J=e.get(ee);if(J===void 0)continue;const oe=J.buffer,de=J.type,Se=J.bytesPerElement,q=de===n.INT||de===n.UNSIGNED_INT||ee.gpuType===il;if(ee.isInterleavedBufferAttribute){const X=ee.data,he=X.stride,ue=ee.offset;if(X.isInstancedInterleavedBuffer){for(let le=0;le<H.locationSize;le++)p(H.location+le,X.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<H.locationSize;le++)g(H.location+le);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let le=0;le<H.locationSize;le++)A(H.location+le,te/H.locationSize,de,ne,he*Se,(ue+te/H.locationSize*le)*Se,q)}else{if(ee.isInstancedBufferAttribute){for(let X=0;X<H.locationSize;X++)p(H.location+X,ee.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let X=0;X<H.locationSize;X++)g(H.location+X);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let X=0;X<H.locationSize;X++)A(H.location+X,te/H.locationSize,de,ne,te*Se,te/H.locationSize*X*Se,q)}}else if(k!==void 0){const ne=k[K];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(H.location,ne);break;case 3:n.vertexAttrib3fv(H.location,ne);break;case 4:n.vertexAttrib4fv(H.location,ne);break;default:n.vertexAttrib1fv(H.location,ne)}}}}E()}function w(){T();for(const I in i){const U=i[I];for(const G in U){const R=U[G];for(const B in R){const z=R[B];for(const k in z)u(z[k].object),delete z[k];delete R[B]}}delete i[I]}}function M(I){if(i[I.id]===void 0)return;const U=i[I.id];for(const G in U){const R=U[G];for(const B in R){const z=R[B];for(const k in z)u(z[k].object),delete z[k];delete R[B]}}delete i[I.id]}function C(I){for(const U in i){const G=i[U];for(const R in G){const B=G[R];if(B[I.id]===void 0)continue;const z=B[I.id];for(const k in z)u(z[k].object),delete z[k];delete B[I.id]}}}function _(I){for(const U in i){const G=i[U],R=I.isInstancedMesh===!0?I.id:0,B=G[R];if(B!==void 0){for(const z in B){const k=B[z];for(const K in k)u(k[K].object),delete k[K];delete B[z]}delete G[R],Object.keys(G).length===0&&delete i[U]}}}function T(){P(),a=!0,r!==s&&(r=s,d(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function xM(n,e,t){let i;function s(l){i=l}function r(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function a(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function c(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let h=0;for(let m=0;m<u;m++)h+=d[m];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=c}function vM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==on&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(C){const _=C===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zt&&C!==yn&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const u=l(d);u!==d&&(Be("WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:M}}function _M(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ni,c=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||x===null||x.length===0||r&&!g)r?u(null):d();else{const E=r?0:i,A=E*4;let b=p.clippingState||null;l.value=b,b=u(x,h,A,m);for(let w=0;w!==A;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const p=m+y*4,E=h.matrixWorldInverse;c.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,b=m;A!==y;++A,b+=4)a.copy(f[A]).applyMatrix4(E,c),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Zi=4,yM=6,bM=20,SM=256,As=new fl,nu=new ct;let oo=null,co=0,lo=0,uo=!1;const MM=new Z,fi=new Z;class iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:c=MM}=r;oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,c),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,co,lo),this._renderer.xr.enabled=uo,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Tn,format:on,colorSpace:ea,depthBuffer:!1},s=su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wM(r)),this._blurMaterial=TM(r,e,t),this._ggxMaterial=EM(r,e,t)}return s}_compileMaterial(e){const t=new An(new Xn,e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,i,s,r){const l=new rn(90,1,t,i),d=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(nu),f.toneMapping=dn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new sr,new Pf({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let p=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,p=!0):(g.color.copy(nu),p=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,d[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,d[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,d[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const w=this._cubeSize;Xi(s,b*w,A>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(y,l),f.render(e,l)}f.toneMapping=m,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===wi||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const c=r.uniforms;c.envMap.value=e;const l=this._cubeSize;Xi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,As)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms,d=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(d*d-u*u),h=d*1.25,m=f*h,{_lodMax:x}=this,y=this._sizeLods[i],g=3*y*(i>x-Zi?i-x+Zi:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,Xi(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(c,As),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,Xi(e,g,p,3*y,2*y),s.setRenderTarget(e),s.render(c,As)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,c=this._blurMaterial,l=this._lodMeshes[s];l.material=c;const d=c.uniforms;d.envMap.value=e.texture,d.sigma.value=r,d.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-Zi?s-this._lodMax+Zi:0),h=4*(this._cubeSize-u);Xi(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,As)}}function wM(n){const e=[],t=[];let i=n;const s=n-Zi+1+yM;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const c=1/(a-2),l=-c,d=1+c,u=[l,l,d,l,d,d,l,l,d,d,l,d],f=6,h=6,m=3,x=new Float32Array(m*h*f),y=new Float32Array(m*h*f);for(let p=0;p<f;p++){const E=p%3*2/3-1,A=p>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];x.set(b,m*h*p);for(let w=0;w<h;w++){const M=u[w*2]*2-1,C=u[w*2+1]*2-1;p===0?fi.set(1,C,M):p===1?fi.set(-M,1,-C):p===2?fi.set(-M,C,1):p===3?fi.set(-1,C,-M):p===4?fi.set(-M,-1,C):fi.set(M,C,-1),fi.toArray(y,(p*h+w)*m)}}const g=new Xn;g.setAttribute("position",new Vn(x,m)),g.setAttribute("outputDirection",new Vn(y,m)),t.push(new An(g,null)),i>Zi&&i--}return{lodMeshes:t,sizeLods:e}}function su(n,e,t){const i=new un(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xi(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function EM(n,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function TM(n,e,t){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:bM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ru(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function au(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bf extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Lf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sr(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:zn});r.uniforms.tEquirect.value=t;const a=new An(s,r),c=t.minFilter;return t.minFilter===vi&&(t.minFilter=Pt),new Ny(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function AM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===Ua||m===Fa)if(e.has(h)){const x=e.get(h).texture;return c(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const y=new Bf(x.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",d),c(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,x=m===Ua||m===Fa,y=m===wi||m===ds;if(x||y){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new iu(n)),g=x?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const E=h.image;return x&&E&&E.height>0||y&&E&&l(E)?(i===null&&(i=new iu(n)),g=x?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function c(h,m){return m===Ua?h.mapping=wi:m===Fa&&(h.mapping=ds),h}function l(h){let m=0;const x=6;for(let y=0;y<x;y++)h[y]!==void 0&&m++;return m===x}function d(h){const m=h.target;m.removeEventListener("dispose",d);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function CM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ns("WebGLRenderer: "+i+" extension not supported."),s}}}function RM(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function c(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function d(f){const h=[],m=f.index,x=f.attributes.position;let y=0;if(x===void 0)return;if(m!==null){const E=m.array;y=m.version;for(let A=0,b=E.length;A<b;A+=3){const w=E[A+0],M=E[A+1],C=E[A+2];h.push(w,M,M,C,C,w)}}else{const E=x.array;y=x.version;for(let A=0,b=E.length/3-1;A<b;A+=3){const w=A+0,M=A+1,C=A+2;h.push(w,M,M,C,C,w)}}const g=new(x.count>=65535?Nf:Rf)(h,1);g.version=y;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&d(f)}else d(f);return r.get(f)}return{get:c,update:l,getWireframeAttribute:u}}function NM(n,e,t){let i;function s(f){i=f}let r,a;function c(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function d(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,f*a,m),t.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,m);let y=0;for(let g=0;g<m;g++)y+=h[g];t.update(y,i,1)}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=d,this.renderMultiDraw=u}function PM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(r/3);break;case n.LINES:t.lines+=c*(r/2);break;case n.LINE_STRIP:t.lines+=c*(r-1);break;case n.LINE_LOOP:t.lines+=c*r;break;case n.POINTS:t.points+=c*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function IM(n,e,t){const i=new WeakMap,s=new gt;function r(a,c,l){const d=a.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(c);if(h===void 0||h.count!==f){let T=function(){C.dispose(),i.delete(c),c.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const m=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let A=0;m===!0&&(A=1),x===!0&&(A=2),y===!0&&(A=3);let b=c.attributes.position.count*A,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*w*4*f),C=new Tf(M,b,w,f);C.type=yn,C.needsUpdate=!0;const _=A*4;for(let P=0;P<f;P++){const I=g[P],U=p[P],G=E[P],R=b*w*4*P;for(let B=0;B<I.count;B++){const z=B*_;m===!0&&(s.fromBufferAttribute(I,B),M[R+z+0]=s.x,M[R+z+1]=s.y,M[R+z+2]=s.z,M[R+z+3]=0),x===!0&&(s.fromBufferAttribute(U,B),M[R+z+4]=s.x,M[R+z+5]=s.y,M[R+z+6]=s.z,M[R+z+7]=0),y===!0&&(s.fromBufferAttribute(G,B),M[R+z+8]=s.x,M[R+z+9]=s.y,M[R+z+10]=s.z,M[R+z+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new it(b,w)},i.set(c,h),c.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<d.length;y++)m+=d[y];const x=c.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",d)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function LM(n,e,t,i,s){let r=new WeakMap;function a(d){const u=s.render.frame,f=d.geometry,h=e.get(d,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),r.get(d)!==u&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),r.set(d,u))),d.isSkinnedMesh){const m=d.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function c(){r=new WeakMap}function l(d){const u=d.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:c}}const DM={[df]:"LINEAR_TONE_MAPPING",[uf]:"REINHARD_TONE_MAPPING",[hf]:"CINEON_TONE_MAPPING",[ff]:"ACES_FILMIC_TONE_MAPPING",[mf]:"AGX_TONE_MAPPING",[gf]:"NEUTRAL_TONE_MAPPING",[pf]:"CUSTOM_TONE_MAPPING"};function UM(n,e,t,i,s,r){const a=new un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,l=null;const d=new Xn;d.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const u=new Ay({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new An(d,u),h=new fl(-1,1,1,-1,0,1);let m=null,x=null,y=!1,g,p=null,E=[],A=!1;this.setSize=function(b,w){a.setSize(b,w),c!==null&&c.setSize(b,w),l!==null&&l.setSize(b,w);for(let M=0;M<E.length;M++){const C=E[M];C.setSize&&C.setSize(b,w)}},this.setEffects=function(b){E=b,A=E.length>0&&E[0].isRenderPass===!0;const w=a.width,M=a.height;E.length>0&&c===null&&(c=new un(w,M,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new un(w,M,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){const _=E[C];_.setSize&&_.setSize(w,M)}},this.begin=function(b,w){if(y||b.toneMapping===dn&&E.length===0)return!1;if(p=w,w!==null){const M=w.width,C=w.height;(a.width!==M||a.height!==C)&&this.setSize(M,C)}return A===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=dn,!0},this.hasRenderPass=function(){return A},this.end=function(b,w){b.toneMapping=g,y=!0;let M=a,C=c;for(let _=0;_<E.length;_++){const T=E[_];T.enabled!==!1&&(T.render(b,C,M,w),T.needsSwap!==!1&&(M=C,C=C===c?l:c))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,u.defines={},Ke.getTransfer(m)===lt&&(u.defines.SRGB_TRANSFER="");const _=DM[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(p),b.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),d.dispose(),u.dispose()}}const zf=new Ft,bc=new Ws(1,1),Hf=new Tf,Vf=new iy,Gf=new Lf,ou=[],cu=[],lu=new Float32Array(16),du=new Float32Array(9),uu=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),e!==0){i.toArray(r,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(r,c)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ba(n,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function FM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function zM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),Mt(t,i)}}function HM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;du.set(i),n.uniformMatrix3fv(this.addr,!1,du),Mt(t,i)}}function VM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),Mt(t,i)}}function GM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function XM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function qM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function ZM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bc.compareFunction=t.isReversedDepthBuffer()?dl:ll,r=bc):r=zf,t.setTexture2D(e||r,s)}function JM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vf,s)}function QM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gf,s)}function ew(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hf,s)}function tw(n){switch(n){case 5126:return FM;case 35664:return OM;case 35665:return kM;case 35666:return BM;case 35674:return zM;case 35675:return HM;case 35676:return VM;case 5124:case 35670:return GM;case 35667:case 35671:return jM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return $M;case 36295:return YM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return ew}}function nw(n,e){n.uniform1fv(this.addr,e)}function iw(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function sw(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function rw(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function aw(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ow(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cw(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lw(n,e){n.uniform1iv(this.addr,e)}function dw(n,e){n.uniform2iv(this.addr,e)}function uw(n,e){n.uniform3iv(this.addr,e)}function hw(n,e){n.uniform4iv(this.addr,e)}function fw(n,e){n.uniform1uiv(this.addr,e)}function pw(n,e){n.uniform2uiv(this.addr,e)}function mw(n,e){n.uniform3uiv(this.addr,e)}function gw(n,e){n.uniform4uiv(this.addr,e)}function xw(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=bc:a=zf;for(let c=0;c!==s;++c)t.setTexture2D(e[c]||a,r[c])}function vw(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vf,r[a])}function _w(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gf,r[a])}function yw(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hf,r[a])}function bw(n){switch(n){case 5126:return nw;case 35664:return iw;case 35665:return sw;case 35666:return rw;case 35674:return aw;case 35675:return ow;case 35676:return cw;case 5124:case 35670:return lw;case 35667:case 35671:return dw;case 35668:case 35672:return uw;case 35669:case 35673:return hw;case 5125:return fw;case 36294:return pw;case 36295:return mw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return yw}}class Sw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tw(t.type)}}class Mw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bw(t.type)}}class ww{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const c=s[r];c.setValue(e,t[c.id],i)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function hu(n,e){n.seq.push(e),n.map[e.id]=e}function Ew(n,e,t){const i=n.name,s=i.length;for(ho.lastIndex=0;;){const r=ho.exec(i),a=ho.lastIndex;let c=r[1];const l=r[2]==="]",d=r[3];if(l&&(c=c|0),d===void 0||d==="["&&a+2===s){hu(t,d===void 0?new Sw(c,n,e):new Mw(c,n,e));break}else{let f=t.map[c];f===void 0&&(f=new ww(c),hu(t,f)),t=f}}}class Br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const c=e.getActiveUniform(t,a),l=e.getUniformLocation(t,c.name);Ew(c,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const c=t[r],l=i[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tw=37297;let Aw=0;function Cw(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}const pu=new Ge;function Rw(n){Ke._getMatrix(pu,Ke.workingColorSpace,n);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Cw(n.getShaderSource(e),c)}else return r}function Nw(n,e){const t=Rw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Pw={[df]:"Linear",[uf]:"Reinhard",[hf]:"Cineon",[ff]:"ACESFilmic",[mf]:"AgX",[gf]:"Neutral",[pf]:"Custom"};function Iw(n,e){const t=Pw[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new Z;function Lw(){Ke.getLuminanceCoefficients(Ir);const n=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Uw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let c=1;r.type===n.FLOAT_MAT2&&(c=2),r.type===n.FLOAT_MAT3&&(c=3),r.type===n.FLOAT_MAT4&&(c=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}function Ls(n){return n!==""}function gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace(Ow,Bw)}const kw=new Map;function Bw(n,e){let t=qe[e];if(t===void 0){const i=kw.get(e);if(i!==void 0)t=qe[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sc(t)}const zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(zw,Hw)}function Hw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Vw={[Dr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function Gw(n){return Vw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jw={[wi]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function Ww(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":jw[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Xw={[ds]:"ENVMAP_MODE_REFRACTION"};function qw(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Xw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $w={[lf]:"ENVMAP_BLENDING_MULTIPLY",[D_]:"ENVMAP_BLENDING_MIX",[U_]:"ENVMAP_BLENDING_ADD"};function Yw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$w[n.combine]||"ENVMAP_BLENDING_NONE"}function Kw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Zw(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,c=t.fragmentShader;const l=Gw(t),d=Ww(t),u=qw(t),f=Yw(t),h=Kw(t),m=Dw(t),x=Uw(r),y=s.createProgram();let g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(g=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?qe.tonemapping_pars_fragment:"",t.toneMapping!==dn?Iw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Nw("linearToOutputTexel",t.outputColorSpace),Lw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Sc(a),a=gu(a,t),a=xu(a,t),c=Sc(c),c=gu(c,t),c=xu(c,t),a=vu(a),c=vu(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=E+g+a,b=E+p+c,w=fu(s,s.VERTEX_SHADER,A),M=fu(s,s.FRAGMENT_SHADER,b);s.attachShader(y,w),s.attachShader(y,M),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(I){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(w)||"",R=s.getShaderInfoLog(M)||"",B=U.trim(),z=G.trim(),k=R.trim();let K=!0,H=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,M);else{const ee=mu(s,w,"vertex"),ne=mu(s,M,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ee+`
`+ne)}else B!==""?Be("WebGLProgram: Program Info Log:",B):(z===""||k==="")&&(H=!1);H&&(I.diagnostics={runnable:K,programLog:B,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(w),s.deleteShader(M),_=new Br(s,y),T=Fw(s,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,Tw)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Aw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=M,this}let Jw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eE(e),t.set(e,i)),i}}class eE{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function tE(n){return n===Ei||n===Jr||n===Qr}function nE(n,e,t,i,s,r){const a=new Af,c=new Qw,l=new Set,d=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,P,I,U,G){const R=I.fog,B=U.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=e.get(_.envMap||z,k),H=K&&K.mapping===va?K.image.height:null,ee=m[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=ne!==void 0?ne.length:0;let J=0;B.morphAttributes.position!==void 0&&(J=1),B.morphAttributes.normal!==void 0&&(J=2),B.morphAttributes.color!==void 0&&(J=3);let oe,de,Se,q;if(ee){const ft=_n[ee];oe=ft.vertexShader,de=ft.fragmentShader}else{oe=_.vertexShader,de=_.fragmentShader;const ft=c.getVertexShaderStage(_),at=c.getFragmentShaderStage(_);c.update(_,ft,at),Se=ft.id,q=at.id}const X=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),ue=U.isInstancedMesh===!0,le=U.isBatchedMesh===!0,Ce=!!_.map,ze=!!_.matcap,Oe=!!K,He=!!_.aoMap,We=!!_.lightMap,Te=!!_.bumpMap&&_.wireframe===!1,Ve=!!_.normalMap,Ye=!!_.displacementMap,Y=!!_.emissiveMap,Re=!!_.metalnessMap,Je=!!_.roughnessMap,F=_.anisotropy>0,vt=_.clearcoat>0,Qe=_.dispersion>0,N=_.retroreflectivity>0,v=_.iridescence>0,V=_.sheen>0,$=_.transmission>0,ie=F&&!!_.anisotropyMap,fe=vt&&!!_.clearcoatMap,pe=vt&&!!_.clearcoatNormalMap,se=vt&&!!_.clearcoatRoughnessMap,ae=v&&!!_.iridescenceMap,me=v&&!!_.iridescenceThicknessMap,De=V&&!!_.sheenColorMap,_e=V&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Ue=!!_.specularColorMap,ke=!!_.specularIntensityMap,je=$&&!!_.transmissionMap,O=$&&!!_.thicknessMap,xe=!!_.gradientMap,re=!!_.alphaMap,ve=_.alphaTest>0,we=!!_.alphaHash,ce=!!_.extensions;let Fe=dn;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const Ie={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:oe,fragmentShader:de,defines:_.defines,customVertexShaderID:Se,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:le,batchingColor:le&&U._colorsTexture!==null,instancing:ue,instancingColor:ue&&U.instanceColor!==null,instancingMorph:ue&&U.morphTexture!==null,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ce,matcap:ze,envMap:Oe,envMapMode:Oe&&K.mapping,envMapCubeUVHeight:H,aoMap:He,lightMap:We,bumpMap:Te,normalMap:Ve,displacementMap:Ye,emissiveMap:Y,normalMapObjectSpace:Ve&&_.normalMapType===k_,normalMapTangentSpace:Ve&&_.normalMapType===Ld,packedNormalMap:Ve&&_.normalMapType===Ld&&tE(_.normalMap.format),metalnessMap:Re,roughnessMap:Je,anisotropy:F,anisotropyMap:ie,clearcoat:vt,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:se,dispersion:Qe,retroreflection:N,iridescence:v,iridescenceMap:ae,iridescenceThicknessMap:me,sheen:V,sheenColorMap:De,sheenRoughnessMap:_e,specularMap:ge,specularColorMap:Ue,specularIntensityMap:ke,transmission:$,transmissionMap:je,thicknessMap:O,gradientMap:xe,opaque:_.transparent===!1&&_.blending===Os&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:ve,alphaHash:we,combine:_.combine,mapUv:Ce&&x(_.map.channel),aoMapUv:He&&x(_.aoMap.channel),lightMapUv:We&&x(_.lightMap.channel),bumpMapUv:Te&&x(_.bumpMap.channel),normalMapUv:Ve&&x(_.normalMap.channel),displacementMapUv:Ye&&x(_.displacementMap.channel),emissiveMapUv:Y&&x(_.emissiveMap.channel),metalnessMapUv:Re&&x(_.metalnessMap.channel),roughnessMapUv:Je&&x(_.roughnessMap.channel),anisotropyMapUv:ie&&x(_.anisotropyMap.channel),clearcoatMapUv:fe&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(_.sheenRoughnessMap.channel),specularMapUv:ge&&x(_.specularMap.channel),specularColorMapUv:Ue&&x(_.specularColorMap.channel),specularIntensityMapUv:ke&&x(_.specularIntensityMap.channel),transmissionMapUv:je&&x(_.transmissionMap.channel),thicknessMapUv:O&&x(_.thicknessMap.channel),alphaMapUv:re&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ve||F),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Ce||re),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:J,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ce&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Y&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===On,flipSided:_.side===kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),E(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function E(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){const T=m[_.type];let P;if(T){const I=_n[T];P=wy.clone(I.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new Zw(n,T,_,s),d.push(P),u.set(T,P)),P}function w(_){if(--_.usedTimes===0){const T=d.indexOf(_);d[T]=d[d.length-1],d.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){c.remove(_)}function C(){c.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:b,releaseProgram:w,releaseShaderCache:M,programs:d,dispose:C}}function iE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function s(a,c,l){n.get(a)[c]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function sE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function c(h,m,x,y,g,p){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:p},n[e]=E):(E.id=h.id,E.object=h,E.geometry=m,E.material=x,E.materialVariant=a(h),E.groupOrder=y,E.renderOrder=h.renderOrder,E.z=g,E.group=p),e++,E}function l(h,m,x,y,g,p,E){E.reversedDepth===!0&&(g=-g);const A=c(h,m,x,y,g,p);x.transmission>0?i.push(A):x.transparent===!0?s.push(A):t.push(A)}function d(h,m,x,y,g,p){const E=c(h,m,x,y,g,p);x.transmission>0?i.unshift(E):x.transparent===!0?s.unshift(E):t.unshift(E)}function u(h,m){t.length>1&&t.sort(h||sE),i.length>1&&i.sort(m||yu),s.length>1&&s.sort(m||yu)}function f(){for(let h=e,m=n.length;h<m;h++){const x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:d,finish:f,sort:u}}function rE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new bu,n.set(i,[a])):s>=r.length?(a=new bu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function aE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new ct};break;case"SpotLight":t={position:new Z,direction:new Z,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function oE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cE=0;function lE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dE(n){const e=new aE,t=oE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Z);const s=new Z,r=new bt,a=new bt;function c(d){let u=0,f=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,x=0,y=0,g=0,p=0,E=0,A=0,b=0,w=0,M=0,C=0,_=0,T=0,P=0;d.sort(lE);for(let U=0,G=d.length;U<G;U++){const R=d[U],B=R.color,z=R.intensity,k=R.distance;let K=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ei?K=R.shadow.map.texture:K=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=B.r*z,f+=B.g*z,h+=B.b*z;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],z);P++}else if(R.isSunLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[x]=ne,i.sunShadowMap[x]=K;const te=ee.getViewportCount();for(let J=0;J<te;J++)i.sunShadowMatrix[y+J]=ee.getMatrix(J),i.sunShadowCascade[y+J]=ee._cascadeData[J];y+=te,x++}i.sun[m]=H,m++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=R.shadow.matrix,w++}i.directional[g]=H,g++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(B).multiplyScalar(z),H.distance=k,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[E]=H;const ee=R.shadow;if(R.map&&(i.spotLightMap[_]=R.map,_++,ee.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[E]=ee.matrix,R.castShadow){const ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[E]=ne,i.spotShadowMap[E]=K,C++}E++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(B).multiplyScalar(z),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=H,A++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const ee=R.shadow,ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=R.shadow.matrix,M++}i.point[p]=H,p++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(z),H.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[b]=H,b++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.sunLength!==m||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==E||I.rectAreaLength!==A||I.hemiLength!==b||I.numSunShadows!==x||I.numDirectionalShadows!==w||I.numPointShadows!==M||I.numSpotShadows!==C||I.numSpotMaps!==_||I.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=g,i.spot.length=E,i.rectArea.length=A,i.point.length=p,i.hemi.length=b,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,I.sunLength=m,I.directionalLength=g,I.pointLength=p,I.spotLength=E,I.rectAreaLength=A,I.hemiLength=b,I.numSunShadows=x,I.numDirectionalShadows=w,I.numPointShadows=M,I.numSpotShadows=C,I.numSpotMaps=_,I.numLightProbes=P,i.version=cE++)}function l(d,u){let f=0,h=0,m=0,x=0,y=0,g=0;const p=u.matrixWorldInverse;for(let E=0,A=d.length;E<A;E++){const b=d[E];if(b.isSunLight){const w=i.sun[f];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),f++}else if(b.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(b.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),x++}else if(b.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function Su(n){const e=new dE(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function c(h){i.push(h)}function l(h){s.push(h)}function d(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:d,setupLightsView:u,pushLight:a,pushShadow:c,pushLightProbeGrid:l}}function uE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let c;return a===void 0?(c=new Su(n),e.set(s,[c])):r>=a.length?(c=new Su(n),a.push(c)):c=a[r],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const hE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],mE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Mu=new bt,Cs=new Z,fo=new Z;function gE(n,e,t){let i=new If;const s=new it,r=new it,a=new gt,c=new Cy,l=new Ry,d={},u=t.maxTextureSize,f={[Mi]:kt,[kt]:Mi,[On]:On},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:hE,fragmentShader:fE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Xn;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new An(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let p=this.type;this.render=function(M,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===m_&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(zn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=M.length;R<B;R++){const z=M[R],k=z.shadow;if(k===void 0){Be("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const K=k.getFrameExtents();s.multiply(K),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,k.mapSize.y=r.y));const H=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=H,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Is){if(z.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new un(s.x,s.y,{format:Ei,type:Tn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Ws(s.x,s.y,yn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=jn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=At,k.map.depthTexture.magFilter=At}else z.isPointLight?(k.map=new Bf(s.x),k.map.depthTexture=new Sy(s.x,En)):(k.map=new un(s.x,s.y),k.map.depthTexture=new Ws(s.x,s.y,En)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=jn,this.type===Dr?(k.map.depthTexture.compareFunction=H?dl:ll,k.map.depthTexture.minFilter=Pt,k.map.depthTexture.magFilter=Pt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=At,k.map.depthTexture.magFilter=At);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const ee=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();z.isPointLight!==!0&&k.updateMatrices(z,_);for(let ne=0;ne<ee;ne++){const te=k.getCamera(ne);if(z.isPointLight){const J=k.camera,oe=k.matrix,de=z.distance||J.far;de!==J.far&&(J.far=de,J.updateProjectionMatrix()),Cs.setFromMatrixPosition(z.matrixWorld),J.position.copy(Cs),fo.copy(J.position),fo.add(pE[ne]),J.up.copy(mE[ne]),J.lookAt(fo),J.updateMatrixWorld(),oe.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Mu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Mu,J.coordinateSystem,J.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(k.map),n.clear());const J=k.getViewport(ne);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a)}i=k.getFrustum(ne),b(C,_,te,z,this.type)}k.isPointLightShadow!==!0&&this.type===Is&&E(k,_),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,P,I)};function E(M,C){const _=e.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null?M.mapPass=new un(s.x,s.y,{format:Ei,type:Tn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,y,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value.set(M.map.width,M.map.height),m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,_,m,y,null)}function A(M,C,_,T){let P=null;const I=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?l:c,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=P.uuid,G=C.uuid;let R=d[U];R===void 0&&(R={},d[U]=R);let B=R[G];B===void 0&&(B=P.clone(),R[G]=B,C.addEventListener("dispose",w)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Is?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=n.properties.get(P);U.light=_}return P}function b(M,C,_,T,P){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Is)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const G=e.update(M),R=M.material;if(Array.isArray(R)){const B=G.groups;for(let z=0,k=B.length;z<k;z++){const K=B[z],H=R[K.materialIndex];if(H&&H.visible){const ee=A(M,H,T,P);M.onBeforeShadow(n,M,C,_,G,ee,K),n.renderBufferDirect(_,null,G,ee,M,K),M.onAfterShadow(n,M,C,_,G,ee,K)}}}else if(R.visible){const B=A(M,R,T,P);M.onBeforeShadow(n,M,C,_,G,B,null),n.renderBufferDirect(_,null,G,B,M,null),M.onAfterShadow(n,M,C,_,G,B,null)}}const U=M.children;for(let G=0,R=U.length;G<R;G++)b(U[G],C,_,T,P)}function w(M){M.target.removeEventListener("dispose",w);for(const _ in d){const T=d[_],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function xE(n,e){function t(){let O=!1;const xe=new gt;let re=null;const ve=new gt(0,0,0,0);return{setMask:function(we){re!==we&&!O&&(n.colorMask(we,we,we,we),re=we)},setLocked:function(we){O=we},setClear:function(we,ce,Fe,Ie,ft){ft===!0&&(we*=Ie,ce*=Ie,Fe*=Ie),xe.set(we,ce,Fe,Ie),ve.equals(xe)===!1&&(n.clearColor(we,ce,Fe,Ie),ve.copy(xe))},reset:function(){O=!1,re=null,ve.set(-1,0,0,0)}}}function i(){let O=!1,xe=!1,re=null,ve=null,we=null;return{setReversed:function(ce){if(xe!==ce){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=ce;const Ie=we;we=null,this.setClear(Ie)}},getReversed:function(){return xe},setTest:function(ce){ce?X(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ce){re!==ce&&!O&&(n.depthMask(ce),re=ce)},setFunc:function(ce){if(xe&&(ce=K_[ce]),ve!==ce){switch(ce){case Uo:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case Oo:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case ko:n.depthFunc(n.EQUAL);break;case Bo:n.depthFunc(n.GEQUAL);break;case zo:n.depthFunc(n.GREATER);break;case Ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=ce}},setLocked:function(ce){O=ce},setClear:function(ce){we!==ce&&(we=ce,xe&&(ce=1-ce),n.clearDepth(ce))},reset:function(){O=!1,re=null,ve=null,we=null,xe=!1}}}function s(){let O=!1,xe=null,re=null,ve=null,we=null,ce=null,Fe=null,Ie=null,ft=null;return{setTest:function(at){O||(at?X(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(at){xe!==at&&!O&&(n.stencilMask(at),xe=at)},setFunc:function(at,en,mn){(re!==at||ve!==en||we!==mn)&&(n.stencilFunc(at,en,mn),re=at,ve=en,we=mn)},setOp:function(at,en,mn){(ce!==at||Fe!==en||Ie!==mn)&&(n.stencilOp(at,en,mn),ce=at,Fe=en,Ie=mn)},setLocked:function(at){O=at},setClear:function(at){ft!==at&&(n.clearStencil(at),ft=at)},reset:function(){O=!1,xe=null,re=null,ve=null,we=null,ce=null,Fe=null,Ie=null,ft=null}}}const r=new t,a=new i,c=new s,l=new WeakMap,d=new WeakMap;let u={},f={},h={},m=new WeakMap,x=[],y=null,g=!1,p=null,E=null,A=null,b=null,w=null,M=null,C=null,_=new ct(0,0,0),T=0,P=!1,I=null,U=null,G=null,R=null,B=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=K>=2);let ee=null,ne={};const te=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),oe=new gt().fromArray(te),de=new gt().fromArray(J);function Se(O,xe,re,ve){const we=new Uint8Array(4),ce=n.createTexture();n.bindTexture(O,ce),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<re;Fe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(xe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return ce}const q={};q[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),X(n.DEPTH_TEST),a.setFunc(Vs),Te(!1),Ve(Rd),X(n.CULL_FACE),He(zn);function X(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function he(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ue(O,xe){return h[O]!==xe?(n.bindFramebuffer(O,xe),h[O]=xe,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function le(O,xe){let re=x,ve=!1;if(O){re=m.get(xe),re===void 0&&(re=[],m.set(xe,re));const we=O.textures;if(re.length!==we.length||re[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Fe=we.length;ce<Fe;ce++)re[ce]=n.COLOR_ATTACHMENT0+ce;re.length=we.length,ve=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ve=!0);ve&&n.drawBuffers(re)}function Ce(O){return y!==O?(n.useProgram(O),y=O,!0):!1}const ze={[qi]:n.FUNC_ADD,[x_]:n.FUNC_SUBTRACT,[v_]:n.FUNC_REVERSE_SUBTRACT};ze[__]=n.MIN,ze[y_]=n.MAX;const Oe={[b_]:n.ZERO,[S_]:n.ONE,[M_]:n.SRC_COLOR,[of]:n.SRC_ALPHA,[R_]:n.SRC_ALPHA_SATURATE,[A_]:n.DST_COLOR,[E_]:n.DST_ALPHA,[w_]:n.ONE_MINUS_SRC_COLOR,[cf]:n.ONE_MINUS_SRC_ALPHA,[C_]:n.ONE_MINUS_DST_COLOR,[T_]:n.ONE_MINUS_DST_ALPHA,[N_]:n.CONSTANT_COLOR,[P_]:n.ONE_MINUS_CONSTANT_COLOR,[I_]:n.CONSTANT_ALPHA,[L_]:n.ONE_MINUS_CONSTANT_ALPHA};function He(O,xe,re,ve,we,ce,Fe,Ie,ft,at){if(O===zn){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(X(n.BLEND),g=!0),O!==g_){if(O!==p||at!==P){if((E!==qi||w!==qi)&&(n.blendEquation(n.FUNC_ADD),E=qi,w=qi),at)switch(O){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nd:n.blendFunc(n.ONE,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Id:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",O);break}else switch(O){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pd:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Id:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",O);break}A=null,b=null,M=null,C=null,_.set(0,0,0),T=0,p=O,P=at}return}we=we||xe,ce=ce||re,Fe=Fe||ve,(xe!==E||we!==w)&&(n.blendEquationSeparate(ze[xe],ze[we]),E=xe,w=we),(re!==A||ve!==b||ce!==M||Fe!==C)&&(n.blendFuncSeparate(Oe[re],Oe[ve],Oe[ce],Oe[Fe]),A=re,b=ve,M=ce,C=Fe),(Ie.equals(_)===!1||ft!==T)&&(n.blendColor(Ie.r,Ie.g,Ie.b,ft),_.copy(Ie),T=ft),p=O,P=!1}function We(O,xe){O.side===On?he(n.CULL_FACE):X(n.CULL_FACE);let re=O.side===kt;xe&&(re=!re),Te(re),O.blending===Os&&O.transparent===!1?He(zn):He(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const ve=O.stencilWrite;c.setTest(ve),ve&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Y(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(O){I!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),I=O)}function Ve(O){O!==f_?(X(n.CULL_FACE),O!==U&&(O===Rd?n.cullFace(n.BACK):O===p_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),U=O}function Ye(O){O!==G&&(k&&n.lineWidth(O),G=O)}function Y(O,xe,re){O?(X(n.POLYGON_OFFSET_FILL),(R!==xe||B!==re)&&(R=xe,B=re,a.getReversed()&&(xe=-xe),n.polygonOffset(xe,re))):he(n.POLYGON_OFFSET_FILL)}function Re(O){O?X(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function Je(O){O===void 0&&(O=n.TEXTURE0+z-1),ee!==O&&(n.activeTexture(O),ee=O)}function F(O,xe,re){re===void 0&&(ee===null?re=n.TEXTURE0+z-1:re=ee);let ve=ne[re];ve===void 0&&(ve={type:void 0,texture:void 0},ne[re]=ve),(ve.type!==O||ve.texture!==xe)&&(ee!==re&&(n.activeTexture(re),ee=re),n.bindTexture(O,xe||q[O]),ve.type=O,ve.texture=xe)}function vt(){const O=ne[ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Qe(){try{n.compressedTexImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function v(){try{n.texSubImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function V(){try{n.texSubImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function fe(){try{n.texStorage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function pe(){try{n.texStorage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function se(){try{n.texImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function ae(){try{n.texImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function me(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function De(O,xe){f[O]!==xe&&(n.pixelStorei(O,xe),f[O]=xe)}function _e(O){oe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),oe.copy(O))}function ge(O){de.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),de.copy(O))}function Ue(O,xe){let re=d.get(xe);re===void 0&&(re=new WeakMap,d.set(xe,re));let ve=re.get(O);ve===void 0&&(ve=n.getUniformBlockIndex(xe,O.name),re.set(O,ve))}function ke(O,xe){const ve=d.get(xe).get(O);l.get(xe)!==ve&&(n.uniformBlockBinding(xe,ve,O.__bindingPointIndex),l.set(xe,ve))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ee=null,ne={},h={},m=new WeakMap,x=[],y=null,g=!1,p=null,E=null,A=null,b=null,w=null,M=null,C=null,_=new ct(0,0,0),T=0,P=!1,I=null,U=null,G=null,R=null,B=null,oe.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:X,disable:he,bindFramebuffer:ue,drawBuffers:le,useProgram:Ce,setBlending:He,setMaterial:We,setFlipSided:Te,setCullFace:Ve,setLineWidth:Ye,setPolygonOffset:Y,setScissorTest:Re,activeTexture:Je,bindTexture:F,unbindTexture:vt,compressedTexImage2D:Qe,compressedTexImage3D:N,texImage2D:se,texImage3D:ae,pixelStorei:De,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:ke,texStorage2D:fe,texStorage3D:pe,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:ie,scissor:_e,viewport:ge,reset:je}}function vE(n,e,t,i,s,r,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new it,u=new WeakMap,f=new Set;let h;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,v){return x?new OffscreenCanvas(N,v):ia("canvas")}function g(N,v,V){let $=1;const ie=Qe(N);if((ie.width>V||ie.height>V)&&($=V/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const fe=Math.floor($*ie.width),pe=Math.floor($*ie.height);h===void 0&&(h=y(fe,pe));const se=v?y(fe,pe):h;return se.width=fe,se.height=pe,se.getContext("2d").drawImage(N,0,0,fe,pe),Be("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+fe+"x"+pe+")."),se}else return"data"in N&&Be("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function p(N){return N.generateMipmaps}function E(N){n.generateMipmap(N)}function A(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,v,V,$,ie,fe=!1){if(N!==null){if(n[N]!==void 0)return n[N];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe;$&&(pe=e.get("EXT_texture_norm16"),pe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=v;if(v===n.RED&&(V===n.FLOAT&&(se=n.R32F),V===n.HALF_FLOAT&&(se=n.R16F),V===n.UNSIGNED_BYTE&&(se=n.R8),V===n.UNSIGNED_SHORT&&pe&&(se=pe.R16_EXT),V===n.SHORT&&pe&&(se=pe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.R8UI),V===n.UNSIGNED_SHORT&&(se=n.R16UI),V===n.UNSIGNED_INT&&(se=n.R32UI),V===n.BYTE&&(se=n.R8I),V===n.SHORT&&(se=n.R16I),V===n.INT&&(se=n.R32I)),v===n.RG&&(V===n.FLOAT&&(se=n.RG32F),V===n.HALF_FLOAT&&(se=n.RG16F),V===n.UNSIGNED_BYTE&&(se=n.RG8),V===n.UNSIGNED_SHORT&&pe&&(se=pe.RG16_EXT),V===n.SHORT&&pe&&(se=pe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.RG8UI),V===n.UNSIGNED_SHORT&&(se=n.RG16UI),V===n.UNSIGNED_INT&&(se=n.RG32UI),V===n.BYTE&&(se=n.RG8I),V===n.SHORT&&(se=n.RG16I),V===n.INT&&(se=n.RG32I)),v===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.RGB8UI),V===n.UNSIGNED_SHORT&&(se=n.RGB16UI),V===n.UNSIGNED_INT&&(se=n.RGB32UI),V===n.BYTE&&(se=n.RGB8I),V===n.SHORT&&(se=n.RGB16I),V===n.INT&&(se=n.RGB32I)),v===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),V===n.UNSIGNED_INT&&(se=n.RGBA32UI),V===n.BYTE&&(se=n.RGBA8I),V===n.SHORT&&(se=n.RGBA16I),V===n.INT&&(se=n.RGBA32I)),v===n.RGB&&(V===n.UNSIGNED_SHORT&&pe&&(se=pe.RGB16_EXT),V===n.SHORT&&pe&&(se=pe.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),v===n.RGBA){const ae=fe?ta:Ke.getTransfer(ie);V===n.FLOAT&&(se=n.RGBA32F),V===n.HALF_FLOAT&&(se=n.RGBA16F),V===n.UNSIGNED_BYTE&&(se=ae===lt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&pe&&(se=pe.RGBA16_EXT),V===n.SHORT&&pe&&(se=pe.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(N,v){let V;return N?v===null||v===En||v===js?V=n.DEPTH24_STENCIL8:v===yn?V=n.DEPTH32F_STENCIL8:v===Gs&&(V=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===js?V=n.DEPTH_COMPONENT24:v===yn?V=n.DEPTH_COMPONENT32F:v===Gs&&(V=n.DEPTH_COMPONENT16),V}function M(N,v){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==At&&N.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function C(N){const v=N.target;v.removeEventListener("dispose",C),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function _(N){const v=N.target;v.removeEventListener("dispose",_),I(v)}function T(N){const v=i.get(N);if(v.__webglInit===void 0)return;const V=N.source,$=m.get(V);if($){const ie=$[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(N),Object.keys($).length===0&&m.delete(V)}i.remove(N)}function P(N){const v=i.get(N);n.deleteTexture(v.__webglTexture);const V=N.source,$=m.get(V);delete $[v.__cacheKey],a.memory.textures--}function I(N){const v=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ie=0;ie<v.__webglFramebuffer[$].length;ie++)n.deleteFramebuffer(v.__webglFramebuffer[$][ie]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=N.textures;for(let $=0,ie=V.length;$<ie;$++){const fe=i.get(V[$]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(V[$])}i.remove(N)}let U=0;function G(){U=0}function R(){return U}function B(N){U=N}function z(){const N=U;return N>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,N}function k(N){const v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function K(N,v){const V=i.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&V.__version!==N.version){const $=N.image;if($===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{he(V,N,v);return}}else N.isExternalTexture&&(V.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+v)}function H(N,v){const V=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){he(V,N,v);return}else N.isExternalTexture&&(V.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+v)}function ee(N,v){const V=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){he(V,N,v);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+v)}function ne(N,v){const V=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&V.__version!==N.version){ue(V,N,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+v)}const te={[Vo]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},J={[At]:n.NEAREST,[F_]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},oe={[z_]:n.NEVER,[W_]:n.ALWAYS,[H_]:n.LESS,[ll]:n.LEQUAL,[V_]:n.EQUAL,[dl]:n.GEQUAL,[G_]:n.GREATER,[j_]:n.NOTEQUAL};function de(N,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===Oa||v.magFilter===dr||v.magFilter===vi||v.minFilter===Pt||v.minFilter===Oa||v.minFilter===dr||v.minFilter===vi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,te[v.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,te[v.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,te[v.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,J[v.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,J[v.minFilter]),v.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===At||v.minFilter!==dr&&v.minFilter!==vi||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Se(N,v){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",C));const $=v.source;let ie=m.get($);ie===void 0&&(ie={},m.set($,ie));const fe=k(v);if(fe!==N.__cacheKey){ie[fe]===void 0&&(ie[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[fe].usedTimes++;const pe=ie[N.__cacheKey];pe!==void 0&&(ie[N.__cacheKey].usedTimes--,pe.usedTimes===0&&P(v)),N.__cacheKey=fe,N.__webglTexture=ie[fe].texture}return V}function q(N,v,V){return Math.floor(Math.floor(N/V)/v)}function X(N,v,V,$){const fe=N.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,V,$,v.data);else{fe.sort((De,_e)=>De.start-_e.start);let pe=0;for(let De=1;De<fe.length;De++){const _e=fe[pe],ge=fe[De],Ue=_e.start+_e.count,ke=q(ge.start,v.width,4),je=q(_e.start,v.width,4);ge.start<=Ue+1&&ke===je&&q(ge.start+ge.count-1,v.width,4)===ke?_e.count=Math.max(_e.count,ge.start+ge.count-_e.start):(++pe,fe[pe]=ge)}fe.length=pe+1;const se=t.getParameter(n.UNPACK_ROW_LENGTH),ae=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let De=0,_e=fe.length;De<_e;De++){const ge=fe[De],Ue=Math.floor(ge.start/4),ke=Math.ceil(ge.count/4),je=Ue%v.width,O=Math.floor(Ue/v.width),xe=ke,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,je,O,xe,re,V,$,v.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function he(N,v,V){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const ie=Se(N,v),fe=v.source;t.bindTexture($,N.__webglTexture,n.TEXTURE0+V);const pe=i.get(fe);if(fe.version!==pe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const re=Ke.getPrimaries(Ke.workingColorSpace),ve=v.colorSpace===ii?null:Ke.getPrimaries(v.colorSpace),we=v.colorSpace===ii||re===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let ae=g(v.image,!1,s.maxTextureSize);ae=vt(v,ae);const me=r.convert(v.format,v.colorSpace),De=r.convert(v.type);let _e=b(v.internalFormat,me,De,v.normalized,v.colorSpace,v.isVideoTexture);de($,v);let ge;const Ue=v.mipmaps,ke=v.isVideoTexture!==!0,je=pe.__version===void 0||ie===!0,O=fe.dataReady,xe=M(v,ae);if(v.isDepthTexture)_e=w(v.format===_i,v.type),je&&(ke?t.texStorage2D(n.TEXTURE_2D,1,_e,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,_e,ae.width,ae.height,0,me,De,null));else if(v.isDataTexture)if(Ue.length>0){ke&&je&&t.texStorage2D(n.TEXTURE_2D,xe,_e,Ue[0].width,Ue[0].height);for(let re=0,ve=Ue.length;re<ve;re++)ge=Ue[re],ke?O&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(n.TEXTURE_2D,re,_e,ge.width,ge.height,0,me,De,ge.data);v.generateMipmaps=!1}else ke?(je&&t.texStorage2D(n.TEXTURE_2D,xe,_e,ae.width,ae.height),O&&X(v,ae,me,De)):t.texImage2D(n.TEXTURE_2D,0,_e,ae.width,ae.height,0,me,De,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,_e,Ue[0].width,Ue[0].height,ae.depth);for(let re=0,ve=Ue.length;re<ve;re++)if(ge=Ue[re],v.format!==on)if(me!==null)if(ke){if(O)if(v.layerUpdates.size>0){const we=tu(ge.width,ge.height,v.format,v.type);for(const ce of v.layerUpdates){const Fe=ge.data.subarray(ce*we/ge.data.BYTES_PER_ELEMENT,(ce+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ce,ge.width,ge.height,1,me,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ae.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,_e,ge.width,ge.height,ae.depth,0,ge.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ae.depth,me,De,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,_e,ge.width,ge.height,ae.depth,0,me,De,ge.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ke&&je&&t.texStorage2D(n.TEXTURE_2D,xe,_e,Ue[0].width,Ue[0].height);for(let re=0,ve=Ue.length;re<ve;re++)ge=Ue[re],v.format!==on?me!==null?ke?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,re,_e,ge.width,ge.height,0,ge.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?O&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(n.TEXTURE_2D,re,_e,ge.width,ge.height,0,me,De,ge.data)}else if(v.isDataArrayTexture)if(ke){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,_e,ae.width,ae.height,ae.depth),O)if(v.layerUpdates.size>0){const re=tu(ae.width,ae.height,v.format,v.type);for(const ve of v.layerUpdates){const we=ae.data.subarray(ve*re/ae.data.BYTES_PER_ELEMENT,(ve+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,ae.width,ae.height,1,me,De,we)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,De,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ae.width,ae.height,ae.depth,0,me,De,ae.data);else if(v.isData3DTexture)ke?(je&&t.texStorage3D(n.TEXTURE_3D,xe,_e,ae.width,ae.height,ae.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,De,ae.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ae.width,ae.height,ae.depth,0,me,De,ae.data);else if(v.isFramebufferTexture){if(je)if(ke)t.texStorage2D(n.TEXTURE_2D,xe,_e,ae.width,ae.height);else{let re=ae.width,ve=ae.height;for(let we=0;we<xe;we++)t.texImage2D(n.TEXTURE_2D,we,_e,re,ve,0,me,De,null),re>>=1,ve>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),f.add(v),re.onpaint=ve=>{const we=ve.changedElements;for(const ce of f)we.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ae);else{const we=n.RGBA,ce=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,ce,Fe,ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ke&&je){const re=Qe(Ue[0]);t.texStorage2D(n.TEXTURE_2D,xe,_e,re.width,re.height)}for(let re=0,ve=Ue.length;re<ve;re++)ge=Ue[re],ke?O&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me,De,ge):t.texImage2D(n.TEXTURE_2D,re,_e,me,De,ge);v.generateMipmaps=!1}else if(ke){if(je){const re=Qe(ae);t.texStorage2D(n.TEXTURE_2D,xe,_e,re.width,re.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,De,ae)}else t.texImage2D(n.TEXTURE_2D,0,_e,me,De,ae);p(v)&&E($),pe.__version=fe.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function ue(N,v,V){if(v.image.length!==6)return;const $=Se(N,v),ie=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+V);const fe=i.get(ie);if(ie.version!==fe.__version||$===!0){t.activeTexture(n.TEXTURE0+V);const pe=Ke.getPrimaries(Ke.workingColorSpace),se=v.colorSpace===ii?null:Ke.getPrimaries(v.colorSpace),ae=v.colorSpace===ii||pe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const me=v.isCompressedTexture||v.image[0].isCompressedTexture,De=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let ce=0;ce<6;ce++)!me&&!De?_e[ce]=g(v.image[ce],!0,s.maxCubemapSize):_e[ce]=De?v.image[ce].image:v.image[ce],_e[ce]=vt(v,_e[ce]);const ge=_e[0],Ue=r.convert(v.format,v.colorSpace),ke=r.convert(v.type),je=b(v.internalFormat,Ue,ke,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,xe=fe.__version===void 0||$===!0,re=ie.dataReady;let ve=M(v,ge);de(n.TEXTURE_CUBE_MAP,v);let we;if(me){O&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,je,ge.width,ge.height);for(let ce=0;ce<6;ce++){we=_e[ce].mipmaps;for(let Fe=0;Fe<we.length;Fe++){const Ie=we[Fe];v.format!==on?Ue!==null?O?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,je,Ie.width,Ie.height,0,Ie.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ie.width,Ie.height,Ue,ke,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,je,Ie.width,Ie.height,0,Ue,ke,Ie.data)}}}else{if(we=v.mipmaps,O&&xe){we.length>0&&ve++;const ce=Qe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(De){O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,_e[ce].width,_e[ce].height,Ue,ke,_e[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,_e[ce].width,_e[ce].height,0,Ue,ke,_e[ce].data);for(let Fe=0;Fe<we.length;Fe++){const ft=we[Fe].image[ce].image;O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,ft.width,ft.height,Ue,ke,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,je,ft.width,ft.height,0,Ue,ke,ft.data)}}else{O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue,ke,_e[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,Ue,ke,_e[ce]);for(let Fe=0;Fe<we.length;Fe++){const Ie=we[Fe];O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Ue,ke,Ie.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,je,Ue,ke,Ie.image[ce])}}}p(v)&&E(n.TEXTURE_CUBE_MAP),fe.__version=ie.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function le(N,v,V,$,ie,fe){const pe=r.convert(V.format,V.colorSpace),se=r.convert(V.type),ae=b(V.internalFormat,pe,se,V.normalized,V.colorSpace),me=i.get(v),De=i.get(V);if(De.__renderTarget=v,!me.__hasExternalTextures){const _e=Math.max(1,v.width>>fe),ge=Math.max(1,v.height>>fe);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,fe,ae,_e,ge,v.depth,0,pe,se,null):t.texImage2D(ie,fe,ae,_e,ge,0,pe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ie,De.__webglTexture,0,Re(v)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ie,De.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(N,v,V){if(n.bindRenderbuffer(n.RENDERBUFFER,N),v.depthBuffer){const $=v.depthTexture,ie=$&&$.isDepthTexture?$.type:null,fe=w(v.stencilBuffer,ie),pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(v),fe,v.width,v.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(v),fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,N)}else{const $=v.textures;for(let ie=0;ie<$.length;ie++){const fe=$[ie],pe=r.convert(fe.format,fe.colorSpace),se=r.convert(fe.type),ae=b(fe.internalFormat,pe,se,fe.normalized,fe.colorSpace);Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(v),ae,v.width,v.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(v),ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(N,v,V){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(v.depthTexture);if(ie.__renderTarget=v,(!ie.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),de(n.TEXTURE_CUBE_MAP,v.depthTexture);const me=r.convert(v.depthTexture.format),De=r.convert(v.depthTexture.type);let _e;v.depthTexture.format===jn?_e=n.DEPTH_COMPONENT24:v.depthTexture.format===_i&&(_e=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_e,v.width,v.height,0,me,De,null)}}else K(v.depthTexture,0);const fe=ie.__webglTexture,pe=Re(v),se=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ae=v.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,fe,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,fe,0);else if(v.depthTexture.format===_i)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,fe,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(N){const v=i.get(N),V=N.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==N.depthTexture){const $=N.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=$}if(N.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)ze(v.__webglFramebuffer[$],N,$);else{const $=N.texture.mipmaps;$&&$.length>0?ze(v.__webglFramebuffer[0],N,0):ze(v.__webglFramebuffer,N,0)}else if(V){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),Ce(v.__webglDepthbuffer[$],N,!1);else{const ie=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,fe)}}else{const $=N.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ce(v.__webglDepthbuffer,N,!1);else{const ie=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(N,v,V){const $=i.get(N);v!==void 0&&le($.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(N)}function We(N){const v=N.texture,V=i.get(N),$=i.get(v);N.addEventListener("dispose",_);const ie=N.textures,fe=N.isWebGLCubeRenderTarget===!0,pe=ie.length>1;if(pe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),fe){V.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[se]=[];for(let ae=0;ae<v.mipmaps.length;ae++)V.__webglFramebuffer[se][ae]=n.createFramebuffer()}else V.__webglFramebuffer[se]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)V.__webglFramebuffer[se]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(pe)for(let se=0,ae=ie.length;se<ae;se++){const me=i.get(ie[se]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&Je(N)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){const ae=ie[se];V.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[se]);const me=r.convert(ae.format,ae.colorSpace),De=r.convert(ae.type),_e=b(ae.internalFormat,me,De,ae.normalized,ae.colorSpace,N.isXRRenderTarget===!0),ge=Re(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,_e,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,V.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(V.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),de(n.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)le(V.__webglFramebuffer[se][ae],N,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else le(V.__webglFramebuffer[se],N,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(v)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let se=0,ae=ie.length;se<ae;se++){const me=ie[se],De=i.get(me);let _e=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_e=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,De.__webglTexture),de(_e,me),le(V.__webglFramebuffer,N,me,n.COLOR_ATTACHMENT0+se,_e,0),p(me)&&E(_e)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(se=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),de(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)le(V.__webglFramebuffer[ae],N,v,n.COLOR_ATTACHMENT0,se,ae);else le(V.__webglFramebuffer,N,v,n.COLOR_ATTACHMENT0,se,0);p(v)&&E(se),t.unbindTexture()}N.depthBuffer&&Oe(N)}function Te(N){const v=N.textures;for(let V=0,$=v.length;V<$;V++){const ie=v[V];if(p(ie)){const fe=A(N),pe=i.get(ie).__webglTexture;t.bindTexture(fe,pe),E(fe),t.unbindTexture()}}}const Ve=[],Ye=[];function Y(N){if(N.samples>0){if(Je(N)===!1){const v=N.textures,V=N.width,$=N.height;let ie=n.COLOR_BUFFER_BIT;const fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(N),se=v.length>1;if(se)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ae=N.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<v.length;me++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const De=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,V,$,0,0,V,$,ie,n.NEAREST),l===!0&&(Ve.length=0,Ye.length=0,Ve.push(n.COLOR_ATTACHMENT0+me),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Ve.push(fe),Ye.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const De=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const v=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Re(N){return Math.min(s.maxSamples,N.samples)}function Je(N){const v=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(N){const v=a.render.frame;u.get(N)!==v&&(u.set(N,v),N.update())}function vt(N,v){const V=N.colorSpace,$=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==ea&&V!==ii&&(Ke.getTransfer(V)===lt?($!==on||ie!==Zt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",V)),v}function Qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.getTextureUnits=R,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=He,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _E(n,e){function t(i,s=ii){let r;const a=Ke.getTransfer(s);if(i===Zt)return n.UNSIGNED_BYTE;if(i===sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vf)return n.BYTE;if(i===_f)return n.SHORT;if(i===Gs)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===En)return n.UNSIGNED_INT;if(i===yn)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===Sf)return n.ALPHA;if(i===Mf)return n.RGB;if(i===on)return n.RGBA;if(i===jn)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===wf)return n.RED;if(i===al)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===cl)return n.RGBA_INTEGER;if(i===Ur||i===Fr||i===Or||i===kr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===Wo||i===Xo||i===qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$o||i===Yo||i===Ko||i===Zo||i===Jo||i===Jr||i===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$o||i===Yo)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ko)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zo)return r.COMPRESSED_R11_EAC;if(i===Jo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Jr)return r.COMPRESSED_RG11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===cc||i===lc||i===dc||i===uc||i===hc||i===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ec)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pc||i===mc||i===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pc)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===vc||i===Qr||i===_c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Df(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pn({vertexShader:yE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ME extends Pi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,c="local-floor",l=1,d=null,u=null,f=null,h=null,m=null,x=null;const y=typeof XRWebGLBinding<"u",g=new SE,p={},E=t.getContextAttributes();let A=null,b=null;const w=[],M=[],C=new it;let _=null,T=null;const P=new rn;P.viewport=new gt;const I=new rn;I.viewport=new gt;const U=[P,I],G=new Py;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let X=w[q];return X===void 0&&(X=new Xa,w[q]=X),X.getTargetRaySpace()},this.getControllerGrip=function(q){let X=w[q];return X===void 0&&(X=new Xa,w[q]=X),X.getGripSpace()},this.getHand=function(q){let X=w[q];return X===void 0&&(X=new Xa,w[q]=X),X.getHandSpace()};function z(q){const X=M.indexOf(q.inputSource);if(X===-1)return;const he=w[X];he!==void 0&&(he.update(q.inputSource,q.frame,d||a),he.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let q=0;q<w.length;q++){const X=M[q];X!==null&&(M[q]=null,w[q].disconnect(X))}R=null,B=null,g.reset();for(const q in p)delete p[q];if(e.setRenderTarget(A),m=null,h=null,f=null,s=null,b=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),T!==null){const q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ue=null,le=null;E.depth&&(le=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=E.stencil?_i:jn,ue=E.stencil?js:En);const Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new un(h.textureWidth,h.textureHeight,{format:on,type:Zt,depthTexture:new Ws(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new un(m.framebufferWidth,m.framebufferHeight,{format:on,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await s.requestReferenceSpace(c),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let X=0;X<q.removed.length;X++){const he=q.removed[X],ue=M.indexOf(he);ue>=0&&(M[ue]=null,w[ue].disconnect(he))}for(let X=0;X<q.added.length;X++){const he=q.added[X];let ue=M.indexOf(he);if(ue===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=M.length){M.push(he),ue=Ce;break}else if(M[Ce]===null){M[Ce]=he,ue=Ce;break}if(ue===-1)break}const le=w[ue];le&&le.connect(he)}}const H=new Z,ee=new Z;function ne(q,X,he){H.setFromMatrixPosition(X.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const ue=H.distanceTo(ee),le=X.projectionMatrix.elements,Ce=he.projectionMatrix.elements,ze=le[14]/(le[10]-1),Oe=le[14]/(le[10]+1),He=(le[9]+1)/le[5],We=(le[9]-1)/le[5],Te=(le[8]-1)/le[0],Ve=(Ce[8]+1)/Ce[0],Ye=ze*Te,Y=ze*Ve,Re=ue/(-Te+Ve),Je=Re*-Te;if(X.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Je),q.translateZ(Re),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),le[10]===-1)q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const F=ze+Re,vt=Oe+Re,Qe=Ye-Je,N=Y+(ue-Je),v=He*Oe/vt*F,V=We*Oe/vt*F;q.projectionMatrix.makePerspective(Qe,N,v,V,F,vt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,X){X===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(X.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let X=q.near,he=q.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(he=g.depthFar)),G.near=I.near=P.near=X,G.far=I.far=P.far=he,(R!==G.near||B!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),R=G.near,B=G.far),G.layers.mask=q.layers.mask|6,P.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const ue=q.parent,le=G.cameras;te(G,ue);for(let Ce=0;Ce<le.length;Ce++)te(le[Ce],ue);le.length===2?ne(G,P,I):G.projectionMatrix.copy(P.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),J(q,G,ue)};function J(q,X,he){he===null?q.matrix.copy(X.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(X.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=yc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(q){return p[q]};let oe=null;function de(q,X){if(u=X.getViewerPose(d||a),x=X,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ue=!1;he.length!==G.cameras.length&&(G.cameras.length=0,ue=!0);for(let Oe=0;Oe<he.length;Oe++){const He=he[Oe];let We=null;if(m!==null)We=m.getViewport(He);else{const Ve=f.getViewSubImage(h,He);We=Ve.viewport,Oe===0&&(e.setRenderTargetTextures(b,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(b))}let Te=U[Oe];Te===void 0&&(Te=new rn,Te.layers.enable(Oe),Te.viewport=new gt,U[Oe]=Te),Te.matrix.fromArray(He.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(He.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(We.x,We.y,We.width,We.height),Oe===0&&(G.matrix.copy(Te.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ue===!0&&G.cameras.push(Te)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Oe=f.getDepthInformation(he[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,s.renderState)}if(le&&le.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Oe=0;Oe<he.length;Oe++){const He=he[Oe].camera;if(He){let We=p[He];We||(We=new Df,p[He]=We);const Te=f.getCameraImage(He);We.sourceTexture=Te}}}}for(let he=0;he<w.length;he++){const ue=M[he],le=w[he];ue!==null&&le!==void 0&&le.update(ue,X,d||a)}oe&&oe(q,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),x=null}const Se=new Of;Se.setAnimationLoop(de),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}const wE=new bt,jf=new Ge;jf.set(-1,0,0,0,1,0,0,0,1);function EE(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Uf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&c(g,p)):p.isPointsMaterial?l(g,p,E,A):p.isSpriteMaterial?d(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=e.get(p),A=E.envMap,b=E.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function c(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TE(n,e,t,i){let s={},r={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const M=w.program;i.uniformBlockBinding(b,M)}function d(b,w){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",E));const C=w.program;i.updateUBOMapping(b,C);const _=e.render.frame;r[b.id]!==_&&(h(b),r[b.id]=_)}function u(b){const w=f();b.__bindingPointIndex=w;const M=n.createBuffer(),C=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function f(){for(let b=0;b<c;b++)if(a.indexOf(b)===-1)return a.push(b),b;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const w=s[b.id],M=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,T=M.length;_<T;_++){const P=M[_];if(Array.isArray(P))for(let I=0,U=P.length;I<U;I++)m(P[I],_,I,C);else m(P,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,w,M,C){if(y(b,w,M,C)===!0){const _=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){const U=T[I],G=p(U);x(U,b.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function x(b,w,M){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,M)}function y(b,w,M,C){const _=b.value,T=w+"_"+M;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{const P=C[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(b){const w=b.uniforms;let M=0;const C=16;for(let T=0,P=w.length;T<P;T++){const I=Array.isArray(w[T])?w[T]:[w[T]];for(let U=0,G=I.length;U<G;U++){const R=I[U],B=Array.isArray(R.value)?R.value:[R.value];for(let z=0,k=B.length;z<k;z++){const K=B[z],H=p(K),ee=M%C,ne=ee%H.boundary,te=ee+ne;M+=ne,te!==0&&C-te<H.storage&&(M+=C-te),R.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=H.storage}}}const _=M%C;return _>0&&(M+=C-_),b.__size=M,b.__cache={},this}function p(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",b),w}function E(b){const w=b.target;w.removeEventListener("dispose",E);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:d,dispose:A}}const AE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function CE(){return vn===null&&(vn=new yy(AE,16,16,Ei,Tn),vn.name="DFG_LUT",vn.minFilter=Pt,vn.magFilter=Pt,vn.wrapS=kn,vn.wrapT=kn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class RE{constructor(e={}){const{canvas:t=$_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Zt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const y=m,g=new Set([cl,ol,al]),p=new Set([Zt,En,Gs,js,sl,rl]),E=new Uint32Array(4),A=new Int32Array(4),b=new Z;let w=null,M=null;const C=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,U=null,G=null,R=null,B=null;this._outputColorSpace=Kt;let z=0,k=0,K=null,H=-1,ee=null;const ne=new gt,te=new gt;let J=null;const oe=new ct(0);let de=0,Se=t.width,q=t.height,X=1,he=null,ue=null;const le=new gt(0,0,Se,q),Ce=new gt(0,0,Se,q);let ze=!1;const Oe=new If;let He=!1,We=!1;const Te=new bt,Ve=new Z,Ye=new gt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Je(){return K===null?X:1}let F=i;function vt(S,D){return t.getContext(S,D)}let Qe,N,v,V,$,ie,fe,pe,se,ae,me,De,_e,ge,Ue,ke,je,O,xe,re,ve,we,ce;try{const S={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",en,!1),F===null){const D="webgl2";if(F=vt(D,S),F===null)throw vt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(S){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",en,!1),nt("WebGLRenderer: "+S.message),S}function Fe(){Qe=new CM(F),Qe.init(),ve=new _E(F,Qe),N=new vM(F,Qe,e,ve),v=new xE(F,Qe),N.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),G=F.createFramebuffer(),R=F.createFramebuffer(),B=F.createFramebuffer(),V=new PM(F),$=new iE,ie=new vE(F,Qe,v,$,N,ve,V),fe=new AM(P),pe=new Ly(F),we=new gM(F,pe),se=new RM(F,pe,V,we),ae=new LM(F,se,pe,we,V),O=new IM(F,N,ie),Ue=new _M($),me=new nE(P,fe,Qe,N,we,Ue),De=new EE(P,$),_e=new rE,ge=new uE(Qe),je=new mM(P,fe,v,ae,x,l),ke=new gE(P,ae,N),ce=new TE(F,V,N,v),xe=new xM(F,Qe,V),re=new NM(F,Qe,V),V.programs=me.programs,P.capabilities=N,P.extensions=Qe,P.properties=$,P.renderLists=_e,P.shadowMap=ke,P.state=v,P.info=V}y!==Zt&&(T=new UM(y,t.width,t.height,c,s,r));const Ie=new ME(P,F);this.xr=Ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(Se,q,!1))},this.getSize=function(S){return S.set(Se,q)},this.setSize=function(S,D,Q=!0){if(Ie.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=S,q=D,t.width=Math.floor(S*X),t.height=Math.floor(D*X),Q===!0&&(t.style.width=S+"px",t.style.height=D+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Se*X,q*X).floor()},this.setDrawingBufferSize=function(S,D,Q){Se=S,q=D,X=Q,t.width=Math.floor(S*Q),t.height=Math.floor(D*Q),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(y===Zt){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,D,Q,j){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,D,Q,j),v.viewport(ne.copy(le).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Ce)},this.setScissor=function(S,D,Q,j){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,D,Q,j),v.scissor(te.copy(Ce).multiplyScalar(X).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(S){v.setScissorTest(ze=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,Q=!0){let j=0;if(S){let W=!1;if(K!==null){const Me=K.texture.format;W=g.has(Me)}if(W){const Me=K.texture.type,Ae=p.has(Me),be=je.getClearColor(),Ne=je.getClearAlpha(),Le=be.r,Xe=be.g,$e=be.b;Ae?(E[0]=Le,E[1]=Xe,E[2]=$e,E[3]=Ne,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=Le,A[1]=Xe,A[2]=$e,A[3]=Ne,F.clearBufferiv(F.COLOR,0,A))}else j|=F.COLOR_BUFFER_BIT}D&&(j|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",en,!1),je.dispose(),_e.dispose(),ge.dispose(),$.dispose(),fe.dispose(),ae.dispose(),we.dispose(),ce.dispose(),me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",yl),Ie.removeEventListener("sessionend",bl),ci.stop()};function ft(S){S.preventDefault(),Fd("WebGLRenderer: Context Lost."),I=!0}function at(){Fd("WebGLRenderer: Context Restored."),I=!1;const S=V.autoReset,D=ke.enabled,Q=ke.autoUpdate,j=ke.needsUpdate,W=ke.type;Fe(),V.autoReset=S,ke.enabled=D,ke.autoUpdate=Q,ke.needsUpdate=j,ke.type=W}function en(S){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function mn(S){const D=S.target;D.removeEventListener("dispose",mn),Xf(D)}function Xf(S){qf(S),$.remove(S)}function qf(S){const D=$.get(S).programs;D!==void 0&&(D.forEach(function(Q){me.releaseProgram(Q)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,Q,j,W,Me){D===null&&(D=Y);const Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,be=Kf(S,D,Q,j,W);v.setMaterial(j,Ae);let Ne=Q.index,Le=1;if(j.wireframe===!0){if(Ne=se.getWireframeAttribute(Q),Ne===void 0)return;Le=2}const Xe=Q.drawRange,$e=Q.attributes.position;let Pe=Xe.start*Le,ot=(Xe.start+Xe.count)*Le;Me!==null&&(Pe=Math.max(Pe,Me.start*Le),ot=Math.min(ot,(Me.start+Me.count)*Le)),Ne!==null?(Pe=Math.max(Pe,0),ot=Math.min(ot,Ne.count)):$e!=null&&(Pe=Math.max(Pe,0),ot=Math.min(ot,$e.count));const _t=ot-Pe;if(_t<0||_t===1/0)return;we.setup(W,j,be,Q,Ne);let mt,ht=xe;if(Ne!==null&&(mt=pe.get(Ne),ht=re,ht.setIndex(mt)),W.isMesh)j.wireframe===!0?(v.setLineWidth(j.wireframeLinewidth*Je()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(W.isLine){let Ct=j.linewidth;Ct===void 0&&(Ct=1),v.setLineWidth(Ct*Je()),W.isLineSegments?ht.setMode(F.LINES):W.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else W.isPoints?ht.setMode(F.POINTS):W.isSprite&&ht.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ct=W._multiDrawStarts,Ee=W._multiDrawCounts,Lt=W._multiDrawCount,et=Ne?pe.get(Ne).bytesPerElement:1,qt=$.get(j).currentProgram.getUniforms();for(let gn=0;gn<Lt;gn++)qt.setValue(F,"_gl_DrawID",gn),ht.render(Ct[gn]/et,Ee[gn])}else if(W.isInstancedMesh)ht.renderInstances(Pe,_t,W.count);else if(Q.isInstancedBufferGeometry){const Ct=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ee=Math.min(Q.instanceCount,Ct);ht.renderInstances(Pe,_t,Ee)}else ht.render(Pe,_t)};function _l(S,D,Q,j){U!==null&&S.isNodeMaterial&&U.setObject(j,S),He===!0&&Ue.setState(S,Q,!1),S.transparent===!0&&S.side===On&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,or(S,D,j),S.side=Mi,S.needsUpdate=!0,or(S,D,j),S.side=On):or(S,D,j)}this.compile=function(S,D,Q=null){Q===null&&(Q=S),U!==null&&U.renderStart(S,D,Q),M=ge.get(Q),M.init(D),_.push(M),Q.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),S!==Q&&S.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),U!==null&&U.updateLights(M.state.lightsArray),We=this.localClippingEnabled,He=Ue.init(this.clippingPlanes,We),He===!0&&Ue.setGlobalState(this.clippingPlanes,D),U!==null&&ke.render(M.state.shadowsArray,Q,D);const j=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const be=Me[Ae];_l(be,Q,D,W),j.add(be)}else _l(Me,Q,D,W),j.add(Me)}),M=_.pop(),U!==null&&U.renderEnd(),j},this.compileAsync=function(S,D,Q=null){const j=this.compile(S,D,Q);return new Promise(W=>{function Me(){if(j.forEach(function(Ae){const Ne=$.get(Ae).currentProgram;(Ne===void 0||Ne.isReady())&&j.delete(Ae)}),j.size===0){W(S);return}setTimeout(Me,10)}Qe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Sa=null;function $f(S){Sa&&Sa(S)}function yl(){ci.stop()}function bl(){ci.start()}const ci=new Of;ci.setAnimationLoop($f),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(S){Sa=S,Ie.setAnimationLoop(S),S===null?ci.stop():ci.start()},Ie.addEventListener("sessionstart",yl),Ie.addEventListener("sessionend",bl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(S,D);const Q=Ie.enabled===!0&&Ie.isPresenting===!0,j=T!==null&&(K===null||Q)&&T.begin(P,K);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(D),D=Ie.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,D,K),M=ge.get(S,_.length),M.init(D),M.state.textureUnits=ie.getTextureUnits(),_.push(M),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Oe.setFromProjectionMatrix(Te,bn,D.reversedDepth),We=this.localClippingEnabled,He=Ue.init(this.clippingPlanes,We),w=_e.get(S,C.length),w.init(),C.push(w),Ie.enabled===!0&&Ie.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Ma(Ae,D,-1/0,P.sortObjects)}Ma(S,D,0,P.sortObjects),w.finish(),U!==null&&U.updateLights(M.state.lightsArray),P.sortObjects===!0&&w.sort(he,ue),Re=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Re&&je.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Ue.beginShadows();const W=M.state.shadowsArray;if(ke.render(W,S,D),He===!0&&Ue.endShadows(),(j&&T.hasRenderPass())===!1){const Ae=w.opaque,be=w.transmissive;if(M.setupLights(),D.isArrayCamera){const Ne=D.cameras;if(be.length>0)for(let Le=0,Xe=Ne.length;Le<Xe;Le++){const $e=Ne[Le];Ml(Ae,be,S,$e)}Re&&je.render(S);for(let Le=0,Xe=Ne.length;Le<Xe;Le++){const $e=Ne[Le];Sl(w,S,$e,$e.viewport)}}else be.length>0&&Ml(Ae,be,S,D),Re&&je.render(S),Sl(w,S,D)}K!==null&&k===0&&(ie.updateMultisampleRenderTarget(K),ie.updateRenderTargetMipmap(K)),j&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,D),we.resetDefaultState(),H=-1,ee=null,_.pop(),_.length>0?(M=_[_.length-1],ie.setTextureUnits(M.state.textureUnits),He===!0&&Ue.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,U!==null&&U.renderEnd()};function Ma(S,D,Q,j){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Oe)){j&&Ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);const Ae=ae.update(S),be=S.material;be.visible&&w.push(S,Ae,be,Q,Ye.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Oe))){const Ae=ae.update(S),be=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ye.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ye.copy(Ae.boundingSphere.center)),Ye.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){const Ne=Ae.groups;for(let Le=0,Xe=Ne.length;Le<Xe;Le++){const $e=Ne[Le],Pe=be[$e.materialIndex];Pe&&Pe.visible&&w.push(S,Ae,Pe,Q,Ye.z,$e,D)}}else be.visible&&w.push(S,Ae,be,Q,Ye.z,null,D)}}const Me=S.children;for(let Ae=0,be=Me.length;Ae<be;Ae++)Ma(Me[Ae],D,Q,j)}function Sl(S,D,Q,j){const{opaque:W,transmissive:Me,transparent:Ae}=S;M.setupLightsView(Q),He===!0&&Ue.setGlobalState(P.clippingPlanes,Q),j&&v.viewport(ne.copy(j)),W.length>0&&ar(W,D,Q),Me.length>0&&ar(Me,D,Q),Ae.length>0&&ar(Ae,D,Q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ml(S,D,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[j.id]===void 0){const Pe=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[j.id]=new un(1,1,{generateMipmaps:!0,type:Pe?Tn:Zt,minFilter:vi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const Me=M.state.transmissionRenderTarget[j.id],Ae=j.viewport||ne;Me.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const be=P.getRenderTarget(),Ne=P.getActiveCubeFace(),Le=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(oe),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),Re&&je.render(Q);const Xe=P.toneMapping;P.toneMapping=dn;const $e=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),M.setupLightsView(j),He===!0&&Ue.setGlobalState(P.clippingPlanes,j),ar(S,Q,j),ie.updateMultisampleRenderTarget(Me),ie.updateRenderTargetMipmap(Me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ot=0,_t=D.length;ot<_t;ot++){const mt=D[ot],{object:ht,geometry:Ct,material:Ee,group:Lt}=mt;if(Ee.side===On&&ht.layers.test(j.layers)){const et=Ee.side;Ee.side=kt,Ee.needsUpdate=!0,wl(ht,Q,j,Ct,Ee,Lt),Ee.side=et,Ee.needsUpdate=!0,Pe=!0}}Pe===!0&&(ie.updateMultisampleRenderTarget(Me),ie.updateRenderTargetMipmap(Me))}P.setRenderTarget(be,Ne,Le),P.setClearColor(oe,de),$e!==void 0&&(j.viewport=$e),P.toneMapping=Xe}function ar(S,D,Q){const j=D.isScene===!0?D.overrideMaterial:null;for(let W=0,Me=S.length;W<Me;W++){const Ae=S[W],{object:be,geometry:Ne,group:Le}=Ae;let Xe=Ae.material;Xe.allowOverride===!0&&j!==null&&(Xe=j),be.layers.test(Q.layers)&&wl(be,D,Q,Ne,Xe,Le)}}function wl(S,D,Q,j,W,Me){U!==null&&W.isNodeMaterial&&U.setObject(S,W),S.onBeforeRender(P,D,Q,j,W,Me),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,D,Q,j,S,Me),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=kt,W.needsUpdate=!0,P.renderBufferDirect(Q,D,j,W,S,Me),W.side=Mi,W.needsUpdate=!0,P.renderBufferDirect(Q,D,j,W,S,Me),W.side=On):P.renderBufferDirect(Q,D,j,W,S,Me),S.onAfterRender(P,D,Q,j,W,Me)}function or(S,D,Q){D.isScene!==!0&&(D=Y);const j=$.get(S),W=M.state.lights,Me=M.state.shadowsArray,Ae=W.state.version,be=me.getParameters(S,W.state,Me,D,Q,M.state.lightProbeGridArray),Ne=me.getProgramCacheKey(be);let Le=j.programs;j.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,j.fog=D.fog;const Xe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;j.envMap=fe.get(S.envMap||j.environment,Xe),j.envMapRotation=j.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",mn),Le=new Map,j.programs=Le);let $e=Le.get(Ne);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===Ae)return Tl(S,be),$e}else be.uniforms=me.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,Q,be),S.onBeforeCompile(be,P),$e=me.acquireProgram(be,Ne),Le.set(Ne,$e),j.uniforms=be.uniforms;const Pe=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),Tl(S,be),j.needsLights=Jf(S),j.lightsStateVersion=Ae,j.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),j.lightProbeGrid=M.state.lightProbeGridArray.length>0,j.currentProgram=$e,j.uniformsList=null,$e}function El(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Br.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Tl(S,D){const Q=$.get(S);Q.outputColorSpace=D.outputColorSpace,Q.batching=D.batching,Q.batchingColor=D.batchingColor,Q.instancing=D.instancing,Q.instancingColor=D.instancingColor,Q.instancingMorph=D.instancingMorph,Q.skinning=D.skinning,Q.morphTargets=D.morphTargets,Q.morphNormals=D.morphNormals,Q.morphColors=D.morphColors,Q.morphTargetsCount=D.morphTargetsCount,Q.numClippingPlanes=D.numClippingPlanes,Q.numIntersection=D.numClipIntersection,Q.vertexAlphas=D.vertexAlphas,Q.vertexTangents=D.vertexTangents,Q.toneMapping=D.toneMapping}function Yf(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(D.matrixWorld);for(let Q=0,j=S.length;Q<j;Q++){const W=S[Q];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function Kf(S,D,Q,j,W){D.isScene!==!0&&(D=Y),ie.resetTextureUnits();const Me=D.fog,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?D.environment:null,be=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ke.workingColorSpace,Ne=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Le=fe.get(j.envMap||Ae,Ne),Xe=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$e=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pe=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,_t=!!Q.morphAttributes.color;let mt=dn;j.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(mt=P.toneMapping);const ht=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ct=ht!==void 0?ht.length:0,Ee=$.get(j),Lt=M.state.lights;if(He===!0&&(We===!0||S!==ee)){const pt=S===ee&&j.id===H;Ue.setState(j,S,pt)}let et=!1;j.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Lt.state.version||Ee.outputColorSpace!==be||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==Le||j.fog===!0&&Ee.fog!==Me||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ue.numPlanes||Ee.numIntersection!==Ue.numIntersection)||Ee.vertexAlphas!==Xe||Ee.vertexTangents!==$e||Ee.morphTargets!==Pe||Ee.morphNormals!==ot||Ee.morphColors!==_t||Ee.toneMapping!==mt||Ee.morphTargetsCount!==Ct||!!Ee.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Ee.__version=j.version);let qt=Ee.currentProgram;et===!0&&(qt=or(j,D,W),U&&j.isNodeMaterial&&U.onUpdateProgram(j,qt,Ee));let gn=!1,qn=!1,Ii=!1;const ut=qt.getUniforms(),xt=Ee.uniforms;if(v.useProgram(qt.program)&&(gn=!0,qn=!0,Ii=!0),j.id!==H&&(H=j.id,qn=!0),Ee.needsLights){const pt=Yf(M.state.lightProbeGridArray,W);Ee.lightProbeGrid!==pt&&(Ee.lightProbeGrid=pt,qn=!0)}if(gn||ee!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(F,"projectionMatrix",S.projectionMatrix),ut.setValue(F,"viewMatrix",S.matrixWorldInverse);const Yn=ut.map.cameraPosition;Yn!==void 0&&Yn.setValue(F,Ve.setFromMatrixPosition(S.matrixWorld)),N.logarithmicDepthBuffer&&ut.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ut.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,qn=!0,Ii=!0)}if(Ee.needsLights&&(Lt.state.sunShadowMap.length>0&&ut.setValue(F,"sunShadowMap",Lt.state.sunShadowMap,ie),Lt.state.directionalShadowMap.length>0&&ut.setValue(F,"directionalShadowMap",Lt.state.directionalShadowMap,ie),Lt.state.spotShadowMap.length>0&&ut.setValue(F,"spotShadowMap",Lt.state.spotShadowMap,ie),Lt.state.pointShadowMap.length>0&&ut.setValue(F,"pointShadowMap",Lt.state.pointShadowMap,ie)),W.isSkinnedMesh){ut.setOptional(F,W,"bindMatrix"),ut.setOptional(F,W,"bindMatrixInverse");const pt=W.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ut.setValue(F,"boneTexture",pt.boneTexture,ie))}W.isBatchedMesh&&(ut.setOptional(F,W,"batchingTexture"),ut.setValue(F,"batchingTexture",W._matricesTexture,ie),ut.setOptional(F,W,"batchingIdTexture"),ut.setValue(F,"batchingIdTexture",W._indirectTexture,ie),ut.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&ut.setValue(F,"batchingColorTexture",W._colorsTexture,ie));const $n=Q.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&O.update(W,Q,qt),(qn||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,ut.setValue(F,"receiveShadow",W.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&D.environment!==null&&(xt.envMapIntensity.value=D.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=CE()),qn){if(ut.setValue(F,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&Zf(xt,Ii),Me&&j.fog===!0&&De.refreshFogUniforms(xt,Me),De.refreshMaterialUniforms(xt,j,X,q,M.state.transmissionRenderTarget[S.id]),Ee.needsLights&&Ee.lightProbeGrid){const pt=Ee.lightProbeGrid;xt.probesSH.value=pt.texture,xt.probesMin.value.copy(pt.boundingBox.min),xt.probesMax.value.copy(pt.boundingBox.max),xt.probesResolution.value.copy(pt.resolution)}Br.upload(F,El(Ee),xt,ie)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Br.upload(F,El(Ee),xt,ie),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ut.setValue(F,"center",W.center),ut.setValue(F,"modelViewMatrix",W.modelViewMatrix),ut.setValue(F,"normalMatrix",W.normalMatrix),ut.setValue(F,"modelMatrix",W.matrixWorld),j.uniformsGroups!==void 0){const pt=j.uniformsGroups;for(let Yn=0,Li=pt.length;Yn<Li;Yn++){const Cl=pt[Yn];ce.update(Cl,qt),ce.bind(Cl,qt)}}return qt}function Zf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Jf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(S,D,Q){const j=$.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),$.get(S.texture).__webglTexture=D,$.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const Q=$.get(S);Q.__webglFramebuffer=D,Q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,Q=0){K=S,z=D,k=Q;let j=null,W=!1,Me=!1;if(S){const be=$.get(S);if(be.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,be.__webglFramebuffer),ne.copy(S.viewport),te.copy(S.scissor),J=S.scissorTest,v.viewport(ne),v.scissor(te),v.setScissorTest(J),H=-1;return}else if(be.__webglFramebuffer===void 0)ie.setupRenderTarget(S);else if(be.__hasExternalTextures)ie.rebindTextures(S,$.get(S.texture).__webglTexture,$.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Xe=S.depthTexture;if(be.__boundDepthTexture!==Xe){if(Xe!==null&&$.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Le=$.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?j=Le[D][Q]:j=Le[D],W=!0):S.samples>0&&ie.useMultisampledRTT(S)===!1?j=$.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?j=Le[Q]:j=Le,ne.copy(S.viewport),te.copy(S.scissor),J=S.scissorTest}else ne.copy(le).multiplyScalar(X).floor(),te.copy(Ce).multiplyScalar(X).floor(),J=ze;if(Q!==0&&(j=G),v.bindFramebuffer(F.FRAMEBUFFER,j)&&v.drawBuffers(S,j),v.viewport(ne),v.scissor(te),v.setScissorTest(J),W){const be=$.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,Q)}else if(Me){const be=D;for(let Ne=0;Ne<S.textures.length;Ne++){const Le=$.get(S.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,Le.__webglTexture,Q,be)}}else if(S!==null&&Q!==0){const be=$.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,Q)}H=-1};function Al(S){const D=$.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=N.textureFormatReadable(S.format),D.__typeReadable=N.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,Q,j,W,Me,Ae,be=0){if(!(S&&S.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){v.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const Le=S.textures[be],Xe=Le.format,$e=Le.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);const Pe=Al(Le);if(Pe.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-j&&Q>=0&&Q<=S.height-W&&F.readPixels(D,Q,j,W,ve.convert(Xe),ve.convert($e),Me)}finally{const Le=K!==null?$.get(K).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,D,Q,j,W,Me,Ae,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne)if(D>=0&&D<=S.width-j&&Q>=0&&Q<=S.height-W){v.bindFramebuffer(F.FRAMEBUFFER,Ne);const Le=S.textures[be],Xe=Le.format,$e=Le.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);const Pe=Al(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(D,Q,j,W,ve.convert(Xe),ve.convert($e),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const _t=K!==null?$.get(K).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,_t);const mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Y_(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ot),F.deleteSync(mt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,Q=0){const j=Math.pow(2,-Q),W=Math.floor(S.image.width*j),Me=Math.floor(S.image.height*j),Ae=D!==null?D.x:0,be=D!==null?D.y:0;ie.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Ae,be,W,Me),v.unbindTexture()},this.copyTextureToTexture=function(S,D,Q=null,j=null,W=0,Me=0){let Ae,be,Ne,Le,Xe,$e,Pe,ot,_t;const mt=S.isCompressedTexture?S.mipmaps[Me]:S.image;if(Q!==null)Ae=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Le=Q.min.x,Xe=Q.min.y,$e=Q.isBox3?Q.min.z:0;else{const xt=Math.pow(2,-W);Ae=Math.floor(mt.width*xt),be=Math.floor(mt.height*xt),S.isDataArrayTexture?Ne=mt.depth:S.isData3DTexture?Ne=Math.floor(mt.depth*xt):Ne=1,Le=0,Xe=0,$e=0}j!==null?(Pe=j.x,ot=j.y,_t=j.z):(Pe=0,ot=0,_t=0);const ht=ve.convert(D.format),Ct=ve.convert(D.type);let Ee;D.isData3DTexture?(ie.setTexture3D(D,0),Ee=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ie.setTexture2DArray(D,0),Ee=F.TEXTURE_2D_ARRAY):(ie.setTexture2D(D,0),Ee=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Lt=v.getParameter(F.UNPACK_ROW_LENGTH),et=v.getParameter(F.UNPACK_IMAGE_HEIGHT),qt=v.getParameter(F.UNPACK_SKIP_PIXELS),gn=v.getParameter(F.UNPACK_SKIP_ROWS),qn=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),v.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),v.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);const Ii=S.isDataArrayTexture||S.isData3DTexture,ut=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const xt=$.get(S),$n=$.get(D),pt=$.get(xt.__renderTarget),Yn=$.get($n.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,pt.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Li=0;Li<Ne;Li++)Ii&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(S).__webglTexture,W,$e+Li),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(D).__webglTexture,Me,_t+Li)),F.blitFramebuffer(Le,Xe,Ae,be,Pe,ot,Ae,be,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||$.has(S)){const xt=$.get(S),$n=$.get(D);v.bindFramebuffer(F.READ_FRAMEBUFFER,R),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let pt=0;pt<Ne;pt++)Ii?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,W,$e+pt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,W),ut?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$n.__webglTexture,Me,_t+pt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$n.__webglTexture,Me),W!==0?F.blitFramebuffer(Le,Xe,Ae,be,Pe,ot,Ae,be,F.COLOR_BUFFER_BIT,F.NEAREST):ut?F.copyTexSubImage3D(Ee,Me,Pe,ot,_t+pt,Le,Xe,Ae,be):F.copyTexSubImage2D(Ee,Me,Pe,ot,Le,Xe,Ae,be);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ee,Me,Pe,ot,_t,Ae,be,Ne,ht,Ct,mt.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,Me,Pe,ot,_t,Ae,be,Ne,ht,mt.data):F.texSubImage3D(Ee,Me,Pe,ot,_t,Ae,be,Ne,ht,Ct,mt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,Pe,ot,Ae,be,ht,Ct,mt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,Pe,ot,mt.width,mt.height,ht,mt.data):F.texSubImage2D(F.TEXTURE_2D,Me,Pe,ot,Ae,be,ht,Ct,mt);v.pixelStorei(F.UNPACK_ROW_LENGTH,Lt),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),v.pixelStorei(F.UNPACK_SKIP_PIXELS,qt),v.pixelStorei(F.UNPACK_SKIP_ROWS,gn),v.pixelStorei(F.UNPACK_SKIP_IMAGES,qn),Me===0&&D.generateMipmaps&&F.generateMipmap(Ee),v.unbindTexture()},this.initRenderTarget=function(S){$.get(S).__webglFramebuffer===void 0&&ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ie.setTextureCube(S,0):S.isData3DTexture?ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ie.setTexture2DArray(S,0):ie.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){z=0,k=0,K=null,v.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const NE=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,PE=`
  uniform float uTime;
  uniform float uAspect;
  uniform float uActivity;
  uniform vec2 uPointer;
  uniform vec3 uRipples[4];
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x), f.y);
  }
  float flow(vec2 p) {
    float result = 0.0, weight = 0.5;
    for (int i = 0; i < 4; i++) { result += weight * noise(p); p = mat2(1.6, -1.2, 1.2, 1.6) * p + 3.1; weight *= 0.5; }
    return result;
  }
  void main() {
    vec2 scale = vec2(uAspect, 1.0);
    vec2 p = (vUv - 0.5) * scale * 2.9;
    vec2 delta = (vUv - uPointer) * scale;
    float distanceToPointer = length(delta);
    float influence = exp(-dot(delta, delta) * 3.8) * uActivity;
    p += vec2(-delta.y, delta.x) * influence * 1.65;
    p += delta * influence * sin(uTime * 0.9 - distanceToPointer * 8.0) * 0.48;
    float ripples = 0.0;
    for (int i = 0; i < 4; i++) {
      float age = uTime - uRipples[i].z;
      float d = length((vUv - uRipples[i].xy) * scale);
      float band = (d - age * 0.25) * 22.0;
      float ring = exp(-band * band) * exp(-age * 1.05);
      ring *= step(0.0, age) * (1.0 - step(6.0, age));
      p += (vUv - uRipples[i].xy) * ring * 0.3; ripples += ring;
    }
    float t = uTime * 0.13;
    vec2 warp = vec2(flow(p * 0.72 + vec2(t, -t * 0.6)), flow(p * 0.67 + vec2(-t * 0.5, t) + 6.0));
    float fold = p.y + 0.58 * sin(p.x * 0.92 - t) + (warp.x - 0.5) * 1.4;
    float wave = 0.5 + 0.5 * sin(fold * 4.2 + warp.y * 3.8);
    float ribbon = pow(wave, 15.0);
    float shoulder = pow(wave, 3.0);
    float sheen = 0.55 + 0.45 * sin(p.x * 1.3 + warp.x * 4.0 + t);
    float vignette = 1.0 - smoothstep(0.15, 0.9, length(vUv - 0.5));
    float light = (ribbon * (0.045 + sheen * 0.10) + shoulder * 0.017) * (0.35 + vignette * 0.65);
    light += influence * 0.018 + ripples * 0.04;
    // White canvas with turquoise ribbons and a restrained chartreuse sheen.
    vec3 color = mix(vec3(1.0), vec3(0.0, 0.90, 0.75), clamp(light * 1.65, 0.0, 0.30));
    color = mix(color, vec3(0.82, 0.96, 0.20), clamp(ribbon * 0.075 + ripples * 0.025, 0.0, 0.10));
    gl_FragColor = vec4(color, 1.0);
  }
`;function wu(n,e){const t=window.matchMedia("(max-width: 900px)").matches,i=new RE({alpha:!1,antialias:!1,powerPreference:"low-power"});i.toneMapping=dn,i.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.25)),i.domElement.setAttribute("aria-hidden","true"),n.append(i.domElement);const s=new uy,r=new fl(-1,1,1,-1,0,1),a=new it(.65,.5),c=a.clone(),l=Array.from({length:4},()=>new Z(-10,-10,-10)),d={uTime:{value:8},uAspect:{value:1},uPointer:{value:a},uActivity:{value:0},uRipples:{value:l}},u=new rr(2,2),f=new pn({vertexShader:NE,fragmentShader:PE,uniforms:d,depthTest:!1,depthWrite:!1});s.add(new An(u,f));let h=!1,m=!1,x=!0,y=!1,g=0,p=0,E=0,A=e.getBoundingClientRect();const b=1e3/(t?30:45),w=()=>{y=!0,i.setAnimationLoop(null),i.domElement.style.opacity="0"};i.debug.onShaderError=w;function M(){if(!h&&!y)try{i.render(s,r)}catch{w()}}function C(k){if(h||y||m||document.hidden||!x)return;const K=k-g;if(K<b-1)return;const H=g?Math.min(K/1e3,.08):0;g=k,d.uTime.value+=H,a.lerp(c,1-Math.exp(-H*5)),d.uActivity.value+=(p-d.uActivity.value)*(1-Math.exp(-H*3)),M()}function _(){g=0,i.setAnimationLoop(h||y||m||document.hidden||!x?null:C)}function T(){if(h||y)return;A=e.getBoundingClientRect();const k=Math.max(n.clientWidth,1),K=Math.max(n.clientHeight,1);d.uAspect.value=k/K,i.setSize(k,K,!1),M()}function P(k){m||A.width<=0||A.height<=0||(c.set(Math.max(0,Math.min(1,(k.clientX-A.left)/A.width)),Math.max(0,Math.min(1,1-(k.clientY-A.top)/A.height))),p=1)}const I=k=>{A=e.getBoundingClientRect(),P(k)},U=()=>{p=0},G=k=>{m||(P(k),l[E++%l.length].set(c.x,c.y,d.uTime.value))},R=k=>{k.preventDefault(),w()},B=new ResizeObserver(T),z=new IntersectionObserver(([k])=>{x=k.isIntersecting,_()});return B.observe(n),z.observe(n),e.addEventListener("pointerenter",I,{passive:!0}),e.addEventListener("pointermove",P,{passive:!0}),e.addEventListener("pointerdown",G,{passive:!0}),e.addEventListener("pointerleave",U,{passive:!0}),document.addEventListener("visibilitychange",_),i.domElement.addEventListener("webglcontextlost",R),T(),_(),{setPaused(k){m=k,_()},dispose(){h=!0,i.setAnimationLoop(null),B.disconnect(),z.disconnect(),e.removeEventListener("pointerenter",I),e.removeEventListener("pointermove",P),e.removeEventListener("pointerdown",G),e.removeEventListener("pointerleave",U),document.removeEventListener("visibilitychange",_),i.domElement.removeEventListener("webglcontextlost",R),u.dispose(),f.dispose(),i.dispose(),i.domElement.remove()}}}function IE({paused:n}){const e=L.useRef(null),t=L.useRef(void 0),i=L.useRef(n);return L.useEffect(()=>{i.current=n,t.current?.setPaused(n)},[n]),L.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)");function r(){if(t.current?.dispose(),t.current=void 0,!(s.matches||!e.current?.parentElement))try{t.current=wu(e.current,e.current.parentElement),t.current.setPaused(i.current)}catch{}}return s.addEventListener("change",r),r(),()=>{s.removeEventListener("change",r),t.current?.dispose(),t.current=void 0}},[wu]),o.jsx("div",{className:"ms-fluid-backdrop",ref:e,"aria-hidden":"true"})}const Eu="ghostchat.inbox-width",Rs=230,po=260;function LE(){const n=L.useRef(null),e=L.useRef(null),[t,i]=L.useState(()=>{try{const u=Number(localStorage.getItem(Eu));return Number.isFinite(u)&&u>=Rs?Math.min(u,480):po}catch{return po}}),[s,r]=L.useState(480),[a,c]=L.useState(!1);L.useLayoutEffect(()=>{n.current?.closest(".ms-app-frame")?.style.setProperty("--ms-inbox-width",`${t}px`)},[t]),L.useEffect(()=>{const u=n.current?.closest(".ms-app-frame");if(!u)return;const f=()=>{const m=Math.max(Rs,Math.min(480,u.clientWidth-56-320));r(m),i(x=>Math.min(x,m))},h=new ResizeObserver(f);return h.observe(u),f(),()=>{h.disconnect(),u.style.removeProperty("--ms-inbox-width")}},[]),L.useEffect(()=>{if(!a)try{localStorage.setItem(Eu,String(t))}catch{}},[t,a]);const l=u=>i(Math.max(Rs,Math.min(s,u)));function d(){e.current=null,c(!1)}return o.jsx("div",{ref:n,className:`ms-inbox-resize${a?" is-dragging":""}`,role:"separator",tabIndex:0,"aria-label":"Resize chats list","aria-orientation":"vertical","aria-valuemin":Rs,"aria-valuemax":s,"aria-valuenow":Math.round(t),title:"Drag to resize chats · double-click to reset",onPointerDown:u=>{u.button===0&&(u.preventDefault(),u.currentTarget.focus(),u.currentTarget.setPointerCapture(u.pointerId),e.current={id:u.pointerId,x:u.clientX,width:t},c(!0))},onPointerMove:u=>{e.current?.id===u.pointerId&&l(e.current.width+u.clientX-e.current.x)},onPointerUp:u=>{e.current?.id===u.pointerId&&(u.currentTarget.releasePointerCapture(u.pointerId),d())},onPointerCancel:d,onLostPointerCapture:d,onDoubleClick:()=>l(po),onKeyDown:u=>{["ArrowLeft","ArrowRight","Home","End"].includes(u.key)&&(u.preventDefault(),l(u.key==="Home"?Rs:u.key==="End"?s:t+(u.key==="ArrowLeft"?-1:1)*(u.shiftKey?40:10)))}})}function DE({onOpen:n}){const[e,t]=L.useState(!1),i=Cn(),s=i.rooms.filter(y=>y.kind==="community"),[r,a]=L.useState(""),[c,l]=L.useState(!1),[d,u]=L.useState(!1),[f,h]=L.useState(),m=s.find(y=>y.id===r)||s[0],x=i.rooms.filter(y=>y.kind==="group"&&(m?y.communityId===m.id:!y.communityId));return o.jsxs("main",{className:"gp-communities ms-wide-page",children:[o.jsxs("div",{className:"gp-community-heading",children:[o.jsxs("div",{children:[o.jsx("p",{className:"ms-kicker",children:"YOUR PEOPLE. A LITTLE MORE CONNECTED."}),o.jsxs("h1",{children:["Better ",o.jsx("em",{children:"together."})]}),o.jsx("p",{children:"Bring groups into a community. Keep conversations close and contributions clear."})]}),o.jsxs("button",{className:"ms-button ms-primary",onClick:()=>l(!0),children:[o.jsx(Zr,{size:17}),"New community"]})]}),o.jsxs("div",{className:"gp-community-layout",children:[o.jsxs("aside",{className:"gp-community-list",children:[o.jsx("span",{className:"ms-kicker",children:"COMMUNITIES"}),s.length?s.map(y=>o.jsxs("button",{className:m?.id===y.id?"selected":"",onClick:()=>a(y.id),children:[o.jsx("span",{className:"gp-community-symbol",children:o.jsx(Lr,{size:20})}),o.jsxs("span",{children:[o.jsx("strong",{children:y.name}),o.jsxs("small",{children:[i.rooms.filter(g=>g.communityId===y.id).length," groups"]})]}),o.jsx(Un,{size:15})]},y.id)):o.jsx("p",{children:"No communities yet. Start with the people you already know."}),o.jsxs("div",{className:"gp-community-meta",children:[o.jsx(zt,{size:18}),o.jsx("p",{children:i.mode==="preview"?"This is a local design preview. Connect Matrix for real groups and invitations.":"Community metadata is visible to your homeserver. Messages inside encrypted groups stay separate."})]})]}),o.jsx("section",{className:"gp-community-content",children:m?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"gp-community-cover",children:[o.jsx("span",{className:"gp-community-symbol large",children:o.jsx(Lr,{size:30})}),o.jsxs("div",{children:[o.jsx("p",{className:"ms-kicker",children:i.mode==="preview"?"LOCAL COMMUNITY PREVIEW":"MATRIX COMMUNITY"}),o.jsx("h2",{children:m.name}),o.jsxs("p",{children:[m.members.length," visible members · ",x.length," groups"]})]}),o.jsx("button",{className:"ms-icon","aria-label":"Manage community",onClick:()=>h(m),children:o.jsx($h,{size:20})})]}),m.invited&&o.jsxs("div",{className:"gp-community-invite",children:[o.jsx("p",{className:"ms-fine",children:"You have an invitation to this community. Child groups have separate memberships."}),o.jsxs("button",{className:"ms-button ms-primary",onClick:()=>{tt.join(m.id).catch(y=>i.notify(y.message))},children:["Accept community invitation",o.jsx(Un,{size:16})]})]}),o.jsxs("div",{className:"gp-community-actions",children:[i.mode==="matrix"&&!m.invited&&m.canManage&&o.jsx("button",{className:"ms-button ms-secondary",disabled:e,onClick:async()=>{t(!0);try{const y=await tt.repairCommunity(m.id);i.notify("Community setup complete. General and Announcements are ready."),n(y.generalId)}catch(y){i.notify(y.message)}finally{t(!1)}},children:e?"Finishing setup…":"Finish setup"}),o.jsxs("button",{className:"ms-button ms-secondary",disabled:m.canManage===!1,onClick:()=>u(!0),children:[o.jsx(Zr,{size:16}),"Add a group"]}),o.jsxs(Wn,{className:"ms-button ms-primary",to:"/create?mode=community",state:{community:m.name},children:[o.jsx(ln,{size:16}),"Fund a community payout",o.jsx(Et,{size:15})]})]}),o.jsx("div",{className:"gp-community-groups",children:x.map(y=>o.jsxs("button",{onClick:()=>n(y.id),children:[o.jsx("span",{className:"gp-community-symbol",children:y.name.includes("Announcements")?o.jsx(xv,{size:21}):o.jsx(ln,{size:21})}),o.jsxs("div",{children:[o.jsx("strong",{children:y.name.replace(`${m.name} · `,"")}),o.jsx("p",{children:y.preview||"Start a conversation with the group."}),o.jsxs("small",{children:[y.members.length," visible members · ",i.mode==="preview"?"saved on this device":y.encrypted?"encrypted messages":"not encrypted"]})]}),o.jsx(Un,{size:17})]},y.id))})]}):o.jsxs("div",{className:"gp-community-empty",children:[o.jsx("span",{className:"gp-community-symbol large",children:o.jsx(Lr,{size:35})}),o.jsx("p",{className:"ms-kicker",children:"A HOME FOR THE WHOLE COMMUNITY"}),o.jsxs("h2",{children:["Different groups.",o.jsx("br",{}),o.jsx("em",{children:"A shared purpose."})]}),o.jsx("p",{children:"Create a community with General and Announcements groups, then add conversations around projects, teams or events."}),o.jsxs("button",{className:"ms-button ms-primary",onClick:()=>l(!0),children:["Create your first community",o.jsx(Un,{size:17})]}),x.length>0&&o.jsxs("div",{className:"gp-community-independent",children:[o.jsx("span",{className:"ms-kicker",children:"YOUR INDEPENDENT GROUPS"}),x.map(y=>o.jsxs("button",{onClick:()=>n(y.id),children:[o.jsx(ln,{size:16}),y.name,o.jsx(Un,{size:15})]},y.id))]})]})})]}),c&&o.jsx(Io,{initialKind:"community",onClose:()=>l(!1)})," ",d&&o.jsx(Io,{initialKind:"group",parentId:m?.id,onClose:()=>u(!1)})," ",f&&o.jsx(Wf,{room:f,onClose:()=>h(void 0)})]})}function Wf({room:n,onClose:e}){const[t,i]=L.useState(!1),s=Cn(),r=s.rooms.find(A=>A.id===n.id)||n,[a,c]=L.useState(r.name),[l,d]=L.useState(""),[u,f]=L.useState(!1),[h,m]=L.useState(""),[x,y]=L.useState(""),[g,p]=L.useState(!1);async function E(A,b){f(!0),m("");try{await A(),y(b)}catch(w){m(w.message)}finally{f(!1)}}return o.jsxs(Ai,{title:r.kind==="community"?"Your community.":"Your group.",eyebrow:"PEOPLE & GROUP SETTINGS",onClose:()=>{u||e()},children:[o.jsxs("p",{className:"ms-modal-copy",children:[r.name,". ",s.mode==="preview"?"Changes affect only this device’s preview.":"Your Matrix server enforces administrator permissions."]}),o.jsxs("div",{className:"ms-form",children:[r.canManage===!1&&o.jsx("p",{className:"ms-fine",children:"Only group administrators can change the name or manage members."}),o.jsx("label",{htmlFor:"manage-group-name",children:"Name"}),o.jsx("input",{id:"manage-group-name",value:a,onChange:A=>c(A.target.value),maxLength:80}),o.jsxs("button",{className:"ms-button ms-secondary",disabled:u||r.canManage===!1||a===r.name,onClick:()=>E(()=>s.rename(r.id,a),"Name updated."),children:[o.jsx(fn,{size:16}),"Save name"]}),o.jsx("label",{htmlFor:"invite-member",children:s.mode==="preview"?"Add a preview member":"Invite by Matrix ID"}),o.jsx("input",{id:"invite-member",value:l,onChange:A=>d(A.target.value),placeholder:s.mode==="preview"?"e.g. Jamie":"@name:server.example"}),o.jsxs("button",{className:"ms-button ms-primary",disabled:u||r.canManage===!1||!l.trim(),onClick:()=>E(async()=>{await s.invite(r.id,l.trim()),d("")},s.mode==="preview"?"Added to local preview.":"Invitation sent. Invite the member to the relevant child groups as well."),children:[o.jsx(Mv,{size:16}),"Invite member"]}),o.jsxs("span",{className:"ms-kicker",children:["VISIBLE MEMBERS · ",r.members.length]}),o.jsx("div",{className:"gp-managed-members",children:r.members.map(A=>o.jsxs("div",{children:[o.jsx("span",{children:A.name.slice(0,1).toUpperCase()}),o.jsxs("div",{children:[o.jsx("strong",{children:A.name}),o.jsx("small",{children:s.mode==="preview"?"Preview member":A.id})]}),r.canManage!==!1&&A.id!=="you"&&A.id!==s.session?.userId&&o.jsx("button",{className:"ms-icon","aria-label":`Remove ${A.name} from group`,disabled:u,onClick:()=>E(()=>s.removeMember(r.id,A.id),"Member removed from this group."),children:o.jsx(es,{size:15})})]},A.id))}),r.kind==="community"&&o.jsx("p",{className:"ms-fine",children:"Community and child-group memberships are separate. Invite or remove a person in each relevant group."}),o.jsx("p",{className:"ms-fine",children:"Removing a chat member does not change an already-funded campaign’s eligible wallet list."}),h&&o.jsx("p",{className:"ms-alert",role:"alert",children:h}),x&&o.jsx("p",{className:"ms-fine",role:"status",children:x}),u&&o.jsxs("p",{className:"ms-fine",children:[o.jsx(Xt,{size:15,className:"spin"}),"Updating…"]}),g?o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"ms-fine",children:"Leave this group? Rejoining may require another invitation. Leaving a community does not automatically leave all child groups."}),o.jsxs("button",{className:"ms-button ms-secondary",disabled:u,onClick:()=>E(async()=>{await s.leaveRoom(r.id),e()},"Left group."),children:["Confirm leave",o.jsx(bo,{size:16})]})]}):o.jsxs("button",{className:"ms-text",onClick:()=>p(!0),children:["Leave ",r.kind==="community"?"community":"group",o.jsx(bo,{size:14})]})]})]})}function Mc(n){return n.version===3?`direct:${n.chainId}:${n.hash.toLowerCase()}`:n.version===4?`campaign:${n.chainId}:${n.contract.toLowerCase()}:${n.campaignId}`:`escrow:${n.version}:${n.chainId}:${n.contract.toLowerCase()}:${n.paymentId}`}function UE(n,e,t){const i=new Map;for(const s of[...n].sort((r,a)=>a.timestamp-r.timestamp)){const r=Wl(s.payment);if(!r||r.version===3&&t&&![r.from,r.to].some(c=>c.toLowerCase()===t.toLowerCase()))continue;const a=Mc(r);i.has(a)||i.set(a,{reference:r,timestamp:s.timestamp,label:s.own?"Shared by you":`Shared by ${s.senderName}`})}for(const s of e){const r=Wl(s);if(!r||r.version===3&&(!t||![r.from,r.to].some(c=>c.toLowerCase()===t.toLowerCase())))continue;const a=Mc(r);i.has(a)||i.set(a,{reference:r,timestamp:0,label:"Saved on this device"})}return[...i.values()]}function FE({compact:n=!1}){const e=Cn(),{address:t}=Ys(),i=Lm(),s=Object.values(e.messages).flat(),r=UE(s,[...ef(),...Qh(),...sf()],t);return o.jsxs("section",{className:`ms-payment-activity${n?" is-compact":""}`,"aria-label":"Payment transactions",children:[o.jsxs("header",{children:[o.jsxs("div",{children:[o.jsx("h2",{children:n?"Payments":"Your payment activity"}),o.jsx("p",{children:"Saved transactions and receipts shared in your chats. Amounts and status are checked on-chain."})]}),o.jsx("button",{className:"ms-icon","aria-label":"Refresh payment status",onClick:()=>{i.invalidateQueries({predicate:a=>["direct-receipt","native-payment","campaign"].some(c=>String(a.queryKey[0]).includes(c))})},children:o.jsx(Zu,{size:17})})]}),r.length?o.jsx("div",{className:"ms-payment-records",children:r.map(a=>o.jsxs("article",{children:[o.jsxs("small",{children:[a.label,a.timestamp?` · ${new Date(a.timestamp).toLocaleDateString()}`:""]}),o.jsx(rf,{payment:a.reference,onOpen:c=>{window.location.assign(`/pay/${c}`)},onCreate:()=>{window.location.assign("/create")}})]},Mc(a.reference)))}):o.jsxs("div",{className:"ms-list-empty",children:[o.jsx(Ci,{size:27}),o.jsx("strong",{children:"No payment records yet."}),o.jsx("p",{children:"Send a payment or open a shared receipt. Transfers outside GhostChat may not appear here."})]})]})}const OE=L.lazy(()=>Ri(()=>import("./TradePage-B3Wq3OSo.js"),__vite__mapDeps([3,1,2,0,4,5]))),kE=L.lazy(()=>Ri(()=>import("./Dashboard-T4rTs8KZ.js"),__vite__mapDeps([6,1,2,7,0,4])).then(n=>({default:n.Dashboard}))),BE=L.lazy(()=>Ri(()=>import("./Setup-Cob5wrhF.js"),__vite__mapDeps([8,1,2,0,4])).then(n=>({default:n.Setup}))),zE=L.lazy(()=>Ri(()=>import("./PaymentPage-DFWOCYV_.js"),__vite__mapDeps([9,1,2,7,0,4])).then(n=>({default:n.PaymentPage}))),HE=L.lazy(()=>Ri(()=>Promise.resolve().then(()=>a_),void 0)),VE=L.lazy(()=>Ri(()=>Promise.resolve().then(()=>t_),void 0));function GE({onClose:n,onLock:e,locked:t}){const{pathname:i}=ih(),s=sh(i),r=L.useRef(null),a=L.useRef(null),c=L.useId(),l=!!s;if(L.useEffect(()=>{if(!l)return;const u=document.activeElement,f=a.current;return f&&!f.open&&f.showModal(),()=>{f?.close(),u?.isConnected&&u.focus()}},[l]),L.useEffect(()=>{r.current?.focus()},[i]),!s)return null;const d=s==="trade"?"P2P test trading":s==="create"?"Send a payment":s==="history"?"Payment activity":s==="setup"?"EVM testnet setup":"Payment details";return o.jsxs("dialog",{ref:a,className:"ms-tools ms-tools-popup","aria-labelledby":c,onCancel:u=>{u.preventDefault(),t||n()},onClick:u=>{u.target===u.currentTarget&&!t&&n()},children:[o.jsxs("header",{className:"ms-tools-heading",children:[o.jsx("h2",{id:c,ref:r,tabIndex:-1,children:d}),o.jsx("button",{className:"ms-icon","aria-label":"Close payment tools",disabled:t,onClick:n,children:o.jsx(es,{size:19})})]}),o.jsx("nav",{className:"ms-tools-tabs","aria-label":"Payment tools",children:[{to:"/create",panel:"create",label:"Send",Icon:Zr},{to:"/payments",panel:"history",label:"Activity",Icon:qh},{to:"/trade",panel:"trade",label:"P2P",Icon:Yc}].map(u=>o.jsxs(Wn,{to:u.to,"aria-current":s===u.panel?"page":void 0,"aria-disabled":t&&s!==u.panel,onClick:f=>{t&&s!==u.panel&&f.preventDefault()},children:[o.jsx(u.Icon,{size:15}),u.label]},u.to))}),o.jsxs("p",{className:"ms-tools-network",children:[o.jsx(zt,{size:12}),s==="setup"?"Testnet contract deployment · Mainnet deployment disabled":s==="trade"?"MST Testnet escrow · UPI transfers use real INR":"Check the selected network · Mainnet uses real coins and gas"]}),t&&o.jsx("p",{className:"ms-tools-pending",role:"status",children:"Keep this payment open until its submitted transaction and sharing steps are resolved."}),o.jsx("div",{className:"ms-tools-body workspace",children:o.jsx(L.Suspense,{fallback:o.jsx("p",{className:"ms-fine",role:"status",children:"Opening your payment tools…"}),children:o.jsxs(Dm,{children:[o.jsx(Kn,{path:"/create",element:o.jsx(l_,{embedded:!0,onClose:n,onLockChange:e})}),o.jsx(Kn,{path:"/payments",element:o.jsx(FE,{})}),o.jsx(Kn,{path:"/dashboard",element:o.jsx(kE,{})}),o.jsx(Kn,{path:"/trade",element:o.jsx(OE,{embedded:!0,onBusyChange:e})}),o.jsx(Kn,{path:"/setup",element:o.jsx(BE,{onBusyChange:e})}),o.jsx(Kn,{path:"/pay/:paymentId",element:o.jsx(zE,{})}),o.jsx(Kn,{path:"/pay/v2/:chainId/:contract/:paymentId",element:o.jsx(HE,{})}),o.jsx(Kn,{path:"/campaign/:chainId/:contract/:campaignId",element:o.jsx(VE,{})})]})})})]})}function jE(n){return n.version===1?`/pay/${n.paymentId}`:n.version===2?zs(n):n.version===4?gi(n):`${Qt(n.chainId).explorer}/tx/${n.hash}`}function WE(){return o.jsx(Nv,{children:o.jsx(XE,{})})}function mo({room:n,small:e=!1}){return o.jsxs("span",{className:`ms-avatar${n?.kind!=="direct"&&n?" ms-avatar-group":""}${e?" ms-avatar-small":""}`,children:[n?.kind!=="direct"&&n?o.jsx(ln,{size:e?17:21}):n?.initials||o.jsx(Qi,{size:22}),o.jsx(rh,{source:n?.avatar})]})}function Ut({label:n,children:e,onClick:t,active:i,className:s="",navLabel:r,disabled:a}){return o.jsxs("button",{className:`ms-icon ${s}${i?" is-active":""}`,"aria-label":n,title:n,onClick:t,"aria-pressed":i,disabled:a,children:[e,r&&o.jsx("span",{className:"ms-nav-label",children:r})]})}function XE(){const n=Um(),e=ih(),t=sh(e.pathname),[i,s]=L.useState(!1);L.useEffect(()=>{if(!i)return;const Y=Re=>{Re.preventDefault(),Re.returnValue=""};return window.addEventListener("beforeunload",Y),()=>window.removeEventListener("beforeunload",Y)},[i]),L.useEffect(()=>(document.body.classList.add("gc-chat-theme"),()=>document.body.classList.remove("gc-chat-theme")),[]);const r=Cn(),[a,c]=L.useState("chats"),[l,d]=L.useState("All"),[u,f]=L.useState(""),[h,m]=L.useState(!1),[x,y]=L.useState(!1),[g,p]=L.useState(!1),E=new URLSearchParams(e.search).get("contact")||"";L.useEffect(()=>{/^[a-z0-9_]{3,24}$/.test(E)&&p(!0)},[E]);const[A,b]=L.useState(!1),[w,M]=L.useState(!1),[C,_]=L.useState(""),[T,P]=L.useState(!1),[I,U]=L.useState(!1),[G,R]=L.useState(!1),[B,z]=L.useState(!1),[k,K]=L.useState(""),H=L.useRef(new Map);function ee(Y){i&&e.pathname!==Y||(c("chats"),n(Y))}function ne(){i||n("/chat")}L.useEffect(()=>{t&&c("chats")},[t]),L.useEffect(()=>{H.current.clear()},[r.session?.userId,r.mode]);const[te,J]=L.useState(),[oe,de]=L.useState(),[Se,q]=L.useState(80),X=r.rooms.find(Y=>Y.id===r.activeId),he=r.messages[r.activeId]||[],ue=he.filter(Y=>!C||Y.body.toLowerCase().includes(C.toLowerCase())).slice(-Se),le=r.rooms.filter(Y=>Y.kind!=="community"&&!!Y.archived===h&&(l!=="Unread"||Y.unread>0)&&(l!=="Groups"||Y.kind==="group")&&(l!=="Community"||!!Y.communityId)&&(!u||[Y.name,Y.preview,Y.subtitle].some(Re=>Re.toLowerCase().includes(u.toLowerCase())))),Ce=L.useRef(null),ze=L.useRef(!0),[Oe,He]=L.useState(!1),We=L.useRef("");function Te(){const Y=Ce.current;!Y||Y.scrollHeight-Y.scrollTop-Y.clientHeight>=100||document.querySelector("dialog[open]")||r.mode==="matrix"&&a==="chats"&&!t&&X&&!X.invited&&document.visibilityState==="visible"&&document.hasFocus()&&ze.current&&(window.innerWidth>680||w)&&tt.markRead(X.id,r.receipts).catch(()=>{})}L.useEffect(()=>(Te(),window.addEventListener("focus",Te),document.addEventListener("visibilitychange",Te),document.addEventListener("focusin",Te),()=>{window.removeEventListener("focus",Te),document.removeEventListener("visibilitychange",Te),document.removeEventListener("focusin",Te)}),[r.activeId,he.at(-1)?.id,X?.unread,r.state,r.receipts,a,t,w]),L.useEffect(()=>{const Y=document.title;return document.title="GhostChat",()=>{document.title=Y}},[]),L.useEffect(()=>{We.current!==r.activeId||ze.current?(Ce.current?.scrollTo({top:Ce.current.scrollHeight,behavior:"instant"}),He(!1),ze.current=!0,Te()):He(!0),We.current=r.activeId},[r.activeId,he.length]),L.useEffect(()=>{J(void 0),_(""),P(!1),q(80)},[r.activeId]),L.useEffect(()=>{const Y=Re=>{(Re.ctrlKey||Re.metaKey)&&Re.key==="k"&&(Re.preventDefault(),document.getElementById("ms-search")?.focus()),Re.key==="Escape"&&(K(""),P(!1),b(!1))};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[]);function Ve(Y){r.setActive(Y),c("chats"),M(!0)}async function Ye(Y){try{if(!Y.attachment)return;const Re=r.mode==="matrix"?await tt.download(Y.attachment):await(await fetch(Y.attachment.url)).blob(),Je=URL.createObjectURL(Re),F=document.createElement("a");F.href=Je,F.download=Y.attachment.name.replace(/[\\/]/g,"_"),F.click(),setTimeout(()=>URL.revokeObjectURL(Je),1e3)}catch(Re){r.notify(Re.message)}}return o.jsxs("div",{className:`messenger ms-unified${w&&a==="chats"?" ms-mobile-conversation":""}${A?" ms-details-open":""}${t?" ms-tools-open":""}`,onClickCapture:Y=>{if(!i||!(Y.target instanceof Element))return;const Re=Y.target.closest("a");if(Re&&Re.target!=="_blank"){const Je=new URL(Re.href,window.location.href);Je.origin===window.location.origin&&Je.pathname!==e.pathname&&(Y.preventDefault(),r.notify("Resolve the open payment transaction before changing tools."))}},children:[G&&o.jsx(Fm,{onClose:()=>R(!1)}),o.jsx("a",{className:"ms-skip",href:"#ms-main",children:"Skip to conversation"}),o.jsxs("div",{className:`ms-app-frame${a!=="chats"?" ms-secondary-view":""}`,children:[o.jsxs("aside",{className:"ms-rail","aria-label":"App navigation",children:[o.jsxs("div",{className:"ms-rail-main",children:[o.jsx(Wn,{className:"ms-rail-brand",to:"/chat","aria-label":"GhostChat home",title:"GhostChat",children:o.jsx(Qi,{size:21})}),o.jsxs(Ut,{navLabel:"Chats",label:"Chats",active:a==="chats"&&!t,disabled:i,onClick:()=>{c("chats"),M(!1),t&&n("/chat")},children:[o.jsx(Ku,{size:21}),r.rooms.some(Y=>Y.unread>0)&&o.jsx("span",{className:"ms-rail-dot"})]}),o.jsx(Ut,{navLabel:"Send",label:"Send a payment",active:t==="create",disabled:i,onClick:()=>ee("/create"),children:o.jsx(ga,{size:21})}),o.jsx(Ut,{navLabel:"Activity",label:"Payment activity",active:t==="history"||t==="payment",disabled:i,onClick:()=>ee("/payments"),children:o.jsx(qh,{size:21})}),o.jsx(Ut,{navLabel:"P2P",label:"P2P exchange",active:t==="trade",disabled:i,onClick:()=>ee("/trade"),children:o.jsx(Yc,{size:21})}),o.jsx(Ut,{navLabel:"People",label:"Communities",active:a==="communities",disabled:i,onClick:()=>{t&&n("/chat"),c("communities")},children:o.jsx(ln,{size:21})})]}),o.jsxs("div",{className:"ms-rail-bottom",children:[o.jsx(Ut,{navLabel:"Settings",label:"Connection and privacy settings",active:a==="settings",disabled:i,onClick:()=>{t&&n("/chat"),c("settings")},children:o.jsx($h,{size:21})}),o.jsxs("button",{className:"ms-self-avatar",title:"Your profile","aria-label":"Your profile",onClick:()=>R(!0),children:[o.jsx("span",{className:"ms-self-initials",children:(r.rooms.flatMap(Y=>Y.members).find(Y=>Y.id===r.session?.userId)?.name.replace(/^@/,"").slice(0,2)||"GC").toUpperCase()}),o.jsx(rh,{source:r.selfAvatar}),o.jsx("span",{className:"ms-nav-label",children:"Profile"})]})]})]}),a==="chats"?o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"ms-inbox","aria-label":"Conversations",children:[o.jsx(LE,{}),o.jsxs("div",{className:"ms-inbox-heading",children:[o.jsx("h1",{children:"Chats"}),o.jsx(Ut,{label:"New conversation",className:"ms-new",onClick:()=>p(!0),children:o.jsx(Zr,{size:21})})]}),o.jsxs("div",{className:"ms-search",children:[o.jsx(mi,{size:17}),o.jsx("input",{id:"ms-search",placeholder:"Find a conversation","aria-label":"Search conversations",value:u,onChange:Y=>f(Y.target.value)}),o.jsx("kbd",{children:"⌘ K"})]}),o.jsx("div",{className:"ms-filters","aria-label":"Conversation filter",children:["All","Unread","Groups","Community"].map(Y=>o.jsxs("button",{className:l===Y?"selected":"","aria-pressed":l===Y,onClick:()=>d(Y),children:[Y,Y==="Unread"&&r.rooms.filter(Re=>Re.unread>0).length>0&&o.jsx("span",{children:r.rooms.filter(Re=>Re.unread>0).length})]},Y))}),o.jsxs("div",{className:"ms-list-label",children:[o.jsx("span",{children:l==="Community"?"COMMUNITY CONVERSATIONS":h?"ARCHIVED":"CONVERSATIONS"}),o.jsxs("button",{className:"ms-text",onClick:()=>{m(!h),d("All")},children:[o.jsx(gd,{size:12}),h?"Back":"Archived"]})]}),o.jsx("div",{className:"ms-room-list",children:o.jsxs(o.Fragment,{children:[le.map(Y=>o.jsxs("div",{className:"ms-room-row",children:[o.jsxs("button",{className:`ms-room${Y.id===r.activeId?" selected":""}`,onClick:()=>Ve(Y.id),"aria-current":Y.id===r.activeId?"true":void 0,children:[o.jsx(mo,{room:Y}),o.jsxs("span",{className:"ms-room-copy",children:[o.jsxs("span",{className:"ms-room-name",children:[o.jsx("strong",{children:Y.name}),o.jsx("time",{children:Y.lastAt?Om(Y.lastAt):""})]}),o.jsxs("span",{className:"ms-room-preview",children:[o.jsx("span",{children:Y.preview}),Y.unread>0?o.jsx("b",{className:"ms-unread",children:Y.unread}):Y.pinned?o.jsx(Pa,{size:12}):Y.muted?o.jsx(Na,{size:12}):null]})]})]}),o.jsx("button",{className:"ms-icon ms-list-more","aria-label":`Options for ${Y.name}`,"aria-expanded":k===Y.id,onClick:()=>K(k===Y.id?"":Y.id),children:o.jsx(Xh,{size:17})}),k===Y.id&&o.jsxs("div",{className:"ms-popup ms-list-menu",children:[["archived","muted","pinned"].map(Re=>o.jsxs("button",{onClick:()=>{r.updateRoom(Y.id,Re),K("")},children:[Re==="archived"?o.jsx(gd,{size:15}):Re==="muted"?o.jsx(Na,{size:15}):o.jsx(Pa,{size:15})," ",Re==="archived"?Y.archived?"Unarchive":"Archive":Re==="muted"?Y.muted?"Unmute on this device":"Mute on this device":Y.pinned?"Unpin":"Pin"]},Re)),o.jsx("button",{onClick:()=>K(""),children:"Close menu"})]})]},Y.id)),le.length===0&&o.jsxs("div",{className:"ms-list-empty",children:[o.jsx(mi,{size:25}),o.jsx("strong",{children:u?"No conversations found.":h?"Nothing tucked away.":"A fresh start."}),o.jsx("p",{children:u?"Try another name or phrase.":"Start a conversation with someone you know."}),o.jsxs("button",{className:"ms-text",onClick:()=>p(!0),children:["New conversation",o.jsx(Un,{size:14})]})]})]})})]}),o.jsxs("main",{className:"ms-conversation",id:"ms-main",tabIndex:-1,children:[o.jsx(IE,{paused:B}),X?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"ms-conversation-header",children:[o.jsx(Ut,{label:"Back to conversations",className:"ms-mobile-back",onClick:()=>M(!1),children:o.jsx(Hs,{size:20})}),o.jsxs("button",{className:"ms-person-heading",onClick:()=>b(!A),children:[o.jsx(mo,{room:X,small:!0}),o.jsxs("span",{children:[o.jsx("strong",{children:X.name}),o.jsx("small",{children:r.mode==="preview"?X.subtitle:X.invited?"Invitation · not joined":X.encrypted?"Encrypted conversation":"Unencrypted room · sending disabled"})]})]}),o.jsxs("div",{className:"ms-conversation-actions",children:[o.jsx(Ut,{className:"ms-fluid-toggle",label:B?"Resume fluid background":"Pause fluid background",active:!B,onClick:()=>z(!B),children:o.jsx(Ev,{size:18})}),o.jsx(Ut,{label:"Voice calls · not enabled yet",onClick:()=>r.notify("Calling is not enabled yet. It needs the separate calling service."),children:o.jsx(yv,{size:18})}),o.jsx(Ut,{label:"Video calls · not enabled yet",onClick:()=>r.notify("Video calling is not enabled in this release."),children:o.jsx(wv,{size:19})}),o.jsx("span",{className:"ms-action-divider"}),o.jsx(Ut,{label:"Search in conversation",active:T,onClick:()=>P(!T),children:o.jsx(mi,{size:18})})]})]}),r.mode==="preview"?o.jsxs("div",{className:"ms-preview-strip",children:[o.jsx("span",{className:"ms-preview-label",children:"PREVIEW"}),o.jsx("span",{children:"Sample conversations. Messages stay on this device."}),o.jsxs("button",{onClick:()=>y(!0),children:["Connect to chat",o.jsx(Et,{size:12})]})]}):r.error?o.jsxs("div",{className:"ms-preview-strip ms-error-strip",role:"alert",children:[r.error,o.jsx("button",{onClick:()=>y(!0),children:"Reconnect"})]}):o.jsxs("div",{className:"ms-encryption-strip",children:[o.jsx(Zs,{size:11}),X.encrypted?"Encrypted content · verify devices before sharing sensitive information.":"This room is not encrypted. Create a new encrypted conversation."]}),T&&o.jsxs("div",{className:"ms-thread-search",children:[o.jsx(mi,{size:16}),o.jsx("input",{autoFocus:!0,placeholder:"Search messages on this device","aria-label":"Search messages",value:C,onChange:Y=>_(Y.target.value)}),o.jsx("button",{className:"ms-icon","aria-label":"Close message search",onClick:()=>{P(!1),_("")},children:o.jsx(es,{size:16})})]}),o.jsxs("div",{className:"ms-timeline",ref:Ce,onScroll:()=>{const Y=Ce.current;ze.current=Y.scrollHeight-Y.scrollTop-Y.clientHeight<100,ze.current&&(He(!1),Te())},children:[(he.length>Se||r.mode==="matrix")&&o.jsx("button",{className:"ms-load-earlier",onClick:async()=>{if(q(Y=>Y+80),r.mode==="matrix")try{await tt.earlier(X.id)}catch(Y){r.notify(Y.message)}},children:"Load earlier messages"}),o.jsx("ol",{className:"ms-message-list",role:"log","aria-label":`Messages with ${X.name}`,"aria-live":"polite","aria-relevant":"additions",children:ue.map((Y,Re)=>o.jsx(qE,{message:Y,showSender:X.kind==="group",previousOwn:Re>0&&ue[Re-1].own===Y.own,onReply:()=>J(Y),onRemove:()=>de(Y),onDownload:()=>Ye(Y),onOpenPayment:Je=>ee(`/pay/${Je}`),onCreate:()=>ee("/create")},Y.id))}),ue.length===0&&o.jsxs("div",{className:"ms-thread-empty",children:[o.jsx(Qi,{size:42,strokeWidth:1}),o.jsxs("h2",{children:[C?"No words found.":"Every good thing starts",o.jsx("br",{}),!C&&o.jsx("em",{children:"with a hello."})]}),o.jsx("p",{children:C?"Try another phrase.":"Make yourself at home. Send your first message."})]})]}),Oe&&o.jsxs("button",{className:"ms-new-messages",onClick:()=>{Ce.current?.scrollTo({top:Ce.current.scrollHeight,behavior:"smooth"}),He(!1)},children:["New messages",o.jsx(hv,{size:14})]}),X.invited?o.jsxs("div",{className:"ms-invitation",children:[o.jsx("p",{children:"You’ve been invited. Joining may share your account and device metadata with room participants."}),o.jsxs("button",{className:"ms-button ms-primary",onClick:()=>{tt.join(X.id).catch(Y=>r.notify(Y.message))},children:["Accept invitation",o.jsx(Un,{size:16})]}),o.jsx("button",{className:"ms-text",onClick:()=>{tt.leave(X.id).catch(Y=>r.notify(Y.message))},children:"Decline"})]}):o.jsx($E,{room:X,initialDraft:H.current.get(`${r.session?.userId||r.mode}:${X.id}`)||"",onDraft:Y=>{Y?(H.current.set(`${r.session?.userId||r.mode}:${X.id}`,Y),H.current.size>50&&H.current.delete(H.current.keys().next().value)):H.current.delete(`${r.session?.userId||r.mode}:${X.id}`)},reply:te,onClearReply:()=>J(void 0),onPayment:()=>ee("/create")},`${r.session?.userId||"preview"}:${X.id}`)]}):o.jsxs("div",{className:"ms-thread-empty ms-empty-home",children:[o.jsx(Qi,{size:48,strokeWidth:1.1}),o.jsx("p",{className:"ms-kicker",children:"YOUR OWN LITTLE CORNER OF THE INTERNET"}),o.jsxs("h2",{children:["Good conversations.",o.jsx("br",{}),o.jsx("em",{children:"Great possibilities."})]}),o.jsxs("p",{children:["Bring your people closer.",o.jsx("br",{}),"And a little something their way."]}),o.jsxs("button",{className:"ms-button ms-primary",onClick:()=>(r.mode==="preview",p(!0)),children:["Start a conversation",o.jsx(Un,{size:16})]}),r.mode==="preview"&&o.jsxs("button",{className:"ms-text",onClick:()=>y(!0),children:["Connect to Matrix",o.jsx(Et,{size:14})]})]})]}),A&&X&&o.jsxs("aside",{className:"ms-details",children:[o.jsxs("div",{className:"ms-details-heading",children:[o.jsx("span",{children:"CONVERSATION"}),o.jsx(Ut,{label:"Close details",onClick:()=>b(!1),children:o.jsx(es,{size:18})})]}),o.jsx(mo,{room:X}),o.jsx("h2",{children:X.name}),o.jsx("p",{children:X.kind==="direct"?"Private conversation":`${X.members.length} members`}),o.jsxs("div",{className:"ms-details-quick",children:[o.jsxs("button",{onClick:()=>r.updateRoom(X.id,"muted"),children:[o.jsx(Na,{size:18}),o.jsx("span",{children:X.muted?"Unmute":"Mute"})]}),o.jsxs("button",{onClick:()=>r.updateRoom(X.id,"pinned"),children:[o.jsx(Pa,{size:18}),o.jsx("span",{children:X.pinned?"Unpin":"Pin"})]}),o.jsxs("button",{onClick:()=>{_(""),P(!0)},children:[o.jsx(mi,{size:18}),o.jsx("span",{children:"Search"})]})]}),X.kind!=="direct"&&o.jsxs("div",{className:"ms-detail-section",children:[o.jsx("h3",{children:"PEOPLE"}),o.jsxs("button",{className:"ms-text",onClick:()=>U(!0),children:[o.jsx(ln,{size:14}),"Manage members & group"]}),X.members.map(Y=>o.jsxs("div",{className:"ms-member",children:[o.jsx("span",{className:"ms-member-initial",children:Y.name.slice(0,1).toUpperCase()}),o.jsxs("div",{children:[o.jsx("strong",{children:Y.name}),o.jsx("span",{children:Y.id===r.session?.userId?"You":"Member"})]})]},Y.id))]}),o.jsxs("div",{className:"ms-detail-section",children:[o.jsx("h3",{children:"SHARED PAYMENTS"}),he.filter(Y=>Y.payment).length===0?o.jsx("p",{children:"No real payment cards here yet."}):he.filter(Y=>Y.payment).map(Y=>o.jsxs("a",{className:"ms-shared-payment",href:jE(Y.payment),children:[o.jsx(Kc,{size:16}),Y.payment.version===3?"Direct transfer":Y.payment.version===4?"Community campaign":`Payment #${Y.payment.paymentId}`,o.jsx(pv,{size:15})]},Y.id))]}),o.jsxs("div",{className:"ms-detail-security",children:[o.jsx(zt,{size:20}),o.jsx("strong",{children:r.mode==="preview"?"A preview of a more private space.":"Encryption is a beginning."}),o.jsx("p",{children:r.mode==="preview"?"Connect a Matrix server to send encrypted messages across devices.":"Verify people, devices, and wallet addresses independently. Chat encryption does not make payments private."})]})]})]}):a==="communities"?o.jsx(DE,{onOpen:Ve}):o.jsx(YE,{}),o.jsx(GE,{onClose:ne,locked:i,onLock:s})]}),r.toast&&o.jsxs("div",{className:"ms-toast",role:"status",children:[o.jsx(fn,{size:16}),r.toast,o.jsx("button",{"aria-label":"Dismiss notification",onClick:()=>r.notify(""),children:o.jsx(es,{size:14})})]}),I&&X&&o.jsx(Wf,{room:X,onClose:()=>U(!1)}),x&&o.jsx(Pv,{onClose:()=>y(!1)})," ",g&&o.jsx(Io,{initialPeople:E?`@${E}`:void 0,onClose:()=>{p(!1),M(!0),E&&n("/chat",{replace:!0})}}),oe&&o.jsxs(Ai,{title:"Remove this message?",eyebrow:"A LITTLE HOUSEKEEPING",onClose:()=>de(void 0),children:[o.jsx("p",{className:"ms-modal-copy",children:r.mode==="preview"?"This removes the message from your local preview.":"This requests removal from the room. Recipients may have saved a copy or screenshot."}),o.jsxs("button",{className:"ms-button ms-primary ms-full",onClick:async()=>{try{await r.remove(oe),de(void 0)}catch(Y){r.notify(Y.message)}},children:["Remove message",o.jsx(Zc,{size:16})]})]})]})}function qE({message:n,showSender:e,previousOwn:t,onReply:i,onRemove:s,onDownload:r,onOpenPayment:a,onCreate:c}){const l=Cn(),[d,u]=L.useState(!1);return o.jsx("li",{className:`ms-message ${n.own?"own":"other"}${t?" consecutive":""}`,children:o.jsxs("div",{className:"ms-message-body",children:[e&&!n.own&&o.jsx("span",{className:"ms-message-sender",children:n.senderName}),n.reply&&o.jsxs("blockquote",{children:[o.jsx("strong",{children:n.reply.sender}),o.jsx("span",{children:n.reply.body})]}),n.payment||n.previewPayment?o.jsx(rf,{payment:n.payment,preview:n.previewPayment,onOpen:a,onCreate:c}):n.attachment?o.jsxs("button",{className:"ms-attachment",onClick:r,children:[o.jsx("span",{children:o.jsx(gv,{size:22})}),o.jsxs("div",{children:[o.jsx("strong",{children:n.attachment.name}),o.jsxs("small",{children:[Math.max(1,Math.round(n.attachment.size/1024))," KB · ",n.state==="local"?"Local preview":"Download & decrypt"]})]}),o.jsx(mv,{size:17})]}):o.jsx("p",{children:n.body}),o.jsxs("div",{className:"ms-message-meta",children:[o.jsx("time",{children:km(n.timestamp)}),n.own&&o.jsx("span",{className:`ms-delivery-state is-${n.state}`,title:n.state==="local"?"Saved on this browser only; not delivered":n.state==="seen"?"Read receipt received from another participant":n.state==="sent"?"Accepted by the homeserver. Delivery to another device is not separately confirmed.":n.state,children:n.state==="local"?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"ms-local-indicator"}),"local"]}):n.state==="sending"?o.jsxs(o.Fragment,{children:[o.jsx(Xt,{size:11,className:"spin"}),"Sending"]}):n.state==="failed"?"Failed":n.state==="seen"?o.jsxs(o.Fragment,{children:[o.jsx(fv,{size:14}),"Seen"]}):o.jsxs(o.Fragment,{children:[o.jsx(fn,{size:12}),"Sent"]})})]}),o.jsxs("div",{className:"ms-message-tools",children:[o.jsx("button",{"aria-label":"Reply to message",title:"Reply",onClick:i,children:o.jsx(Hs,{size:14})}),o.jsxs("div",{className:"ms-message-menu-wrap",children:[o.jsx("button",{"aria-label":"Message actions",title:"Message actions",onClick:()=>u(!d),children:o.jsx(Xh,{size:16})}),d&&o.jsxs("div",{className:"ms-popup",children:[o.jsxs("button",{onClick:()=>{i(),u(!1)},children:[o.jsx(Hs,{size:14}),"Reply"]}),o.jsxs("button",{onClick:async()=>{try{await navigator.clipboard.writeText(n.body),l.notify("Message copied.")}catch{l.notify("Could not access your clipboard.")}u(!1)},children:[o.jsx(Ks,{size:14}),"Copy message"]}),n.own&&o.jsxs("button",{onClick:()=>{s(),u(!1)},children:[o.jsx(Zc,{size:14}),"Remove message"]})]})]})]})]})})}function $E({room:n,initialDraft:e,onDraft:t,reply:i,onClearReply:s,onPayment:r}){const a=Cn(),[c,l]=L.useState(e),[d,u]=L.useState(!1),[f,h]=L.useState(!1),[m,x]=L.useState(!1),[y,g]=L.useState(0),p=L.useRef(null),E=L.useRef(null),A=L.useRef(null),b=L.useRef(null),w=L.useRef(!1),M=L.useRef(0),C=L.useRef(!1),_=L.useRef(void 0);L.useEffect(()=>(h(!1),x(!1),()=>{M.current++,C.current=!1,clearTimeout(_.current),w.current=!0,A.current?.state==="recording"&&A.current.stop(),b.current?.getTracks().forEach(R=>R.stop())}),[n.id]),L.useEffect(()=>{t(c)},[c]),L.useEffect(()=>{if(!m)return;const R=setInterval(()=>g(z=>z+1),1e3),B=setTimeout(()=>A.current?.stop(),6e4);return()=>{clearInterval(R),clearTimeout(B)}},[m]);async function T(R){if(R?.preventDefault(),!(!c.trim()||d)){u(!0);try{await a.send(c.trim(),void 0,i),l(""),s(),p.current&&(p.current.style.height="auto")}catch(B){a.notify(B.message)}finally{u(!1),p.current?.focus()}}}async function P(R){u(!0);try{await a.upload(R)}catch(B){a.notify(B.message)}finally{u(!1)}}async function I(){if(m){A.current?.stop();return}if(C.current)return;const R=M.current;C.current=!0;let B;try{if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder)throw new Error("Voice notes are not supported in this browser.");if(B=await navigator.mediaDevices.getUserMedia({audio:!0}),R!==M.current){B.getTracks().forEach(K=>K.stop());return}w.current=!1,b.current=B;const z=new MediaRecorder(B);A.current=z;const k=[];z.ondataavailable=K=>{K.data.size&&k.push(K.data)},z.onstop=()=>{B?.getTracks().forEach(K=>K.stop()),R===M.current&&(x(!1),w.current||P(new window.File(k,`voice-note-${Date.now()}.${z.mimeType.includes("mp4")?"m4a":"webm"}`,{type:z.mimeType||"audio/webm"})))},z.start(),g(0),x(!0)}catch(z){B?.getTracks().forEach(k=>k.stop()),R===M.current&&a.notify(z.message)}finally{R===M.current&&(C.current=!1)}}const U=d||a.mode==="matrix"&&(!n.encrypted||n.canSend===!1||a.state!=="connected"),G=a.mode==="matrix"?tt.typingNames(n.id):[];return o.jsxs("div",{className:"ms-composer-area",children:[G.length>0&&o.jsxs("p",{className:"ms-typing",role:"status",children:[G.join(", ")," ",G.length===1?"is":"are"," typing…"]}),i&&o.jsxs("div",{className:"ms-reply-preview",children:[o.jsxs("span",{children:["Replying to ",o.jsx("strong",{children:i.senderName}),o.jsx("small",{children:i.body.slice(0,100)})]}),o.jsx("button",{className:"ms-icon","aria-label":"Cancel reply",onClick:s,children:o.jsx(es,{size:16})})]}),o.jsxs("div",{className:"ms-composer",children:[o.jsxs("div",{className:"ms-composer-tools",children:[o.jsxs("div",{className:"ms-emoji-wrap",children:[o.jsx(Ut,{disabled:U||m,label:"Insert emoji",onClick:()=>h(!f),active:f,children:o.jsx(bv,{size:21})}),f&&o.jsx("div",{className:"ms-emoji-picker","aria-label":"Choose emoji",children:["👋","😊","🤍","✨","🙌","🎉","👍","❤️","💬","🙏","🔥","💡"].map(R=>o.jsx("button",{onClick:()=>{l(B=>B+R),h(!1),p.current?.focus()},"aria-label":`Insert ${R}`,children:R},R))})]}),o.jsx(Ut,{disabled:U||m,label:"Attach a file",onClick:()=>E.current?.click(),children:o.jsx(_v,{size:20})}),o.jsx("input",{type:"file",ref:E,hidden:!0,onChange:R=>{const B=R.target.files?.[0];B&&P(B),R.target.value=""}})]}),o.jsxs("form",{onSubmit:T,children:[m?o.jsxs("div",{className:"ms-recording",children:[o.jsx("span",{}),"Recording · ",Math.floor(y/60),":",String(y%60).padStart(2,"0"),o.jsx("button",{type:"button",onClick:()=>{w.current=!0,A.current?.stop()},children:"Discard"})]}):o.jsx("textarea",{ref:p,rows:1,"aria-label":"Message",enterKeyHint:"enter",placeholder:n.canSend===!1?"Only group administrators can post here":"Write a message…",value:c,disabled:U,maxLength:16e3,onChange:R=>{l(R.target.value),R.target.style.height="auto",R.target.style.height=`${Math.min(R.target.scrollHeight,130)}px`,a.mode==="matrix"&&(tt.typing(n.id,!0),clearTimeout(_.current),_.current=setTimeout(()=>tt.typing(n.id,!1),1800))},onKeyDown:R=>{R.key==="Enter"&&!R.shiftKey&&!R.nativeEvent.isComposing&&!window.matchMedia("(max-width:680px), (max-width:1024px) and (max-height:500px) and (orientation:landscape)").matches&&(R.preventDefault(),T())}}),o.jsxs("div",{className:"ms-composer-end",children:[o.jsxs("button",{type:"button",className:"ms-pay-trigger",onClick:r,disabled:U||m,title:"Create an EVM testnet payment",children:[o.jsx(Ci,{size:17}),o.jsx("span",{children:"Pay"})]}),o.jsx("span",{className:"ms-action-divider"}),c.trim()&&!m?o.jsx("button",{className:"ms-send-button",type:"submit",disabled:U,"aria-label":"Send message",children:d?o.jsx(Xt,{size:18,className:"spin"}):o.jsx(Et,{size:22})}):o.jsx("button",{type:"button",className:`ms-icon${m?" ms-record-active":""}`,disabled:U,"aria-label":m?"Stop and send voice note":"Record a voice note",onClick:I,children:m?o.jsx(Sv,{size:18,fill:"currentColor"}):d?o.jsx(Xt,{size:18,className:"spin"}):o.jsx(vv,{size:21})})]})]})]}),o.jsxs("div",{className:"ms-composer-caption",children:[o.jsxs("span",{children:[o.jsx(Zs,{size:10}),a.mode==="preview"?"Saved on this device · connect to deliver":"Encrypted room content · device verification matters"]}),o.jsx("span",{children:"Enter to send · Shift + Enter for a new line"})]})]})}function YE(){const n=Cn();return o.jsxs("main",{className:"ms-settings-page",id:"ms-main",children:[o.jsx("h1",{children:"Settings"}),o.jsx("p",{className:"ms-page-description",children:"Privacy, notifications and chat key recovery."}),o.jsxs("div",{className:"ms-settings-grid",children:[o.jsxs("section",{className:"ms-settings-card",children:[o.jsx(zt,{size:23}),o.jsx("h2",{children:"A little more private."}),o.jsxs("label",{className:"ms-toggle-row",children:[o.jsxs("span",{children:[o.jsx("strong",{children:"Share read receipts"}),o.jsx("small",{children:n.receipts?"On · people can see when you read messages.":"Off · read receipts are private."})]}),o.jsx("input",{type:"checkbox",role:"switch","aria-label":"Share read receipts",checked:n.receipts,onChange:e=>n.setReceipts(e.target.checked)})]}),o.jsx("p",{className:"ms-fine",children:"Turning this off does not erase earlier receipts."})]}),o.jsxs("section",{className:"ms-settings-card",children:[o.jsx(xd,{size:23}),o.jsx("h2",{children:"At your own pace."}),o.jsx("p",{children:"Pin, mute or archive conversations from the chat list. These preferences are saved on this device."}),o.jsxs("button",{className:"ms-button ms-secondary",onClick:async()=>{if(!("Notification"in window)){n.notify("This browser does not support notifications.");return}const e=await Notification.requestPermission();n.notify(e==="granted"?"Browser permission granted. Background push delivery still needs a configured push service.":"Notifications are not enabled.")},children:["Browser notification permission",o.jsx(xd,{size:15})]}),n.mode==="preview"&&o.jsxs("button",{className:"ms-text",onClick:n.resetPreview,children:[o.jsx(Zc,{size:14}),"Reset local preview conversations"]})]}),n.mode==="matrix"&&o.jsx(h_,{})]})]})}const iT=Object.freeze(Object.defineProperty({__proto__:null,default:WE},Symbol.toStringTag,{value:"Module"}));export{Kr as A,fv as C,Po as E,Kc as L,iT as M,Zr as P,Sd as a,kv as b,Td as c,Xv as d,tT as e,nT as f,Qc as g,Lv as h,eT as i,Gh as j,av as k,Jx as l,Iv as m,Ht as n,er as o,Xl as p,Jh as q,Md as r,Ad as s,Yc as t,tr as u,Fs as v,pv as w};
