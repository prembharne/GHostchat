import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Archive, ArrowDown, ArrowDownUp, ArrowLeft, ArrowRight, ArrowUpRight, Bell, BellOff, Check, ChevronDown, ChevronRight, Copy, Download, ExternalLink, File, Ghost, Globe2, History, Info, KeyRound, Link2, LoaderCircle, LockKeyhole, LogOut, Menu, MessageCircle, Mic, MoreHorizontal, Paperclip, Phone, Pin, Plus, Search, Send, Settings2, ShieldCheck, Smile, Square, Trash2, Users, Video, Wallet as WalletIcon, Waves, X } from 'lucide-react';
import { chain, contractAddress, explorer } from '../config/web3';
import { MessengerProvider, useMessenger } from './MessengerContext';
import { ConnectDialog } from './ConnectDialog';
import { NewConversation } from './NewConversation';
import { Modal } from './Modal';
import { PaymentCard } from './Payments';
import { matrix } from './matrix';
import { KeyRecovery } from './KeyRecovery';
import { roomTime, timeLabel, type ChatMessage, type ChatRoom } from './model';
import { FluidBackdrop } from './FluidBackdrop';
import { InboxResize } from './InboxResize';
import { ProfileImage } from './ProfilePhoto';
import { CheckCheck } from 'lucide-react';
import './messenger.css';
import { transferNetwork } from '../../../shared/paymentNetwork';
import { nativePath } from '../../../shared/nativeProtocol';
import { campaignPath } from '../../../shared/community';
import type { PaymentReference } from './model';
import { Communities, ManageGroup } from './Communities';
import ProfileWallet from '../wallet/ProfileWallet';
import { MessagingSetupHelp } from './SetupHelp';
import { ProfileButton } from '../wallet/ProfileWallet';
import { InstallAction } from '../pwa/PwaProvider';
import { WorkspaceTools } from './WorkspaceTools';
import { workspacePanel } from './workspace';
import './workspace.css';
import './chat-surfaces.css';
import './chat-theme.css';

function paymentUrl(ref: PaymentReference) { return ref.version === 1 ? `/pay/${ref.paymentId}` : ref.version === 2 ? nativePath(ref) : ref.version === 4 ? campaignPath(ref) : `${transferNetwork(ref.chainId).explorer}/tx/${ref.hash}`; }
type View = 'communities' | 'chats' | 'settings';
export default function Messenger() { return <MessengerProvider><Workspace/></MessengerProvider>; }
function Avatar({ room, small = false }: { room?: Pick<ChatRoom, 'initials' | 'kind' | 'avatar'>; small?: boolean }) { return <span className={`ms-avatar${room?.kind !== 'direct' && !!room ? ' ms-avatar-group' : ''}${small ? ' ms-avatar-small' : ''}`}>{room?.kind !== 'direct' && !!room ? <Users size={small ? 17 : 21}/> : room?.initials || <Ghost size={22}/>}<ProfileImage source={room?.avatar}/></span>; }
function IconButton({ label, children, onClick, active, className = '', navLabel, disabled }: { label: string; children: ReactNode; onClick: () => void; active?: boolean; className?: string; navLabel?: string; disabled?: boolean }) { return <button className={`ms-icon ${className}${active ? ' is-active' : ''}`} aria-label={label} title={label} onClick={onClick} aria-pressed={active} disabled={disabled}>{children}{navLabel && <span className="ms-nav-label">{navLabel}</span>}</button>; }

function Workspace() {
  const navigate = useNavigate(); const location = useLocation(); const panel = workspacePanel(location.pathname);
  const [toolLocked, setToolLocked] = useState(false);
  useEffect(() => { if (!toolLocked) return; const guard = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ''; }; window.addEventListener('beforeunload', guard); return () => window.removeEventListener('beforeunload', guard); }, [toolLocked]);
  useEffect(() => { document.body.classList.add('gc-chat-theme'); return () => document.body.classList.remove('gc-chat-theme'); }, []);
  const chat = useMessenger(); const [view, setView] = useState<View>('chats'); const [filter, setFilter] = useState('All'); const [search, setSearch] = useState(''); const [showArchive, setShowArchive] = useState(false);
  const [connect, setConnect] = useState(false); const [newChat, setNewChat] = useState(false);
  const contact = new URLSearchParams(location.search).get('contact') || '';
  useEffect(() => { if (/^[a-z0-9_]{3,24}$/.test(contact)) setNewChat(true); }, [contact]);
  const [details, setDetails] = useState(false); const [mobileChat, setMobileChat] = useState(false); const [messageSearch, setMessageSearch] = useState(''); const [searchOpen, setSearchOpen] = useState(false);
  const [manageGroup, setManageGroup] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [fluidPaused, setFluidPaused] = useState(false);
  const [listMenu, setListMenu] = useState('');
  const drafts = useRef(new Map<string, string>());
  function openTools(path: string) { if (toolLocked && location.pathname !== path) return; setView('chats'); navigate(path); }
  function closeTools() { if (!toolLocked) navigate('/chat'); }
  useEffect(() => { if (panel) setView('chats'); }, [panel]);
  useEffect(() => { drafts.current.clear(); }, [chat.session?.userId, chat.mode]);
  const [reply, setReply] = useState<ChatMessage>(); const [removeTarget, setRemoveTarget] = useState<ChatMessage>(); const [limit, setLimit] = useState(80);
  const room = chat.rooms.find(r => r.id === chat.activeId); const messages = chat.messages[chat.activeId] || [];
  const visible = messages.filter(m => !messageSearch || m.body.toLowerCase().includes(messageSearch.toLowerCase())).slice(-limit);
  const rooms = chat.rooms.filter(r => r.kind !== 'community' && !!r.archived === showArchive && (filter !== 'Unread' || r.unread > 0) && (filter !== 'Groups' || r.kind === 'group') && (filter !== 'Community' || !!r.communityId) && (!search || [r.name, r.preview, r.subtitle].some(s => s.toLowerCase().includes(search.toLowerCase()))));
  const timeline = useRef<HTMLDivElement>(null); const atBottom = useRef(true); const [newMessages, setNewMessages] = useState(false); const previousRoom = useRef('');
  function readVisible() {
    const area = timeline.current;
    if (!area || area.scrollHeight - area.scrollTop - area.clientHeight >= 100 || document.querySelector('dialog[open]')) return;
    if (chat.mode === 'matrix' && view === 'chats' && !panel && room && !room.invited && document.visibilityState === 'visible' && document.hasFocus() && atBottom.current && (window.innerWidth > 680 || mobileChat)) void matrix.markRead(room.id, chat.receipts).catch(() => {});
  }
  useEffect(() => {
    readVisible();
    window.addEventListener('focus', readVisible); document.addEventListener('visibilitychange', readVisible); document.addEventListener('focusin', readVisible);
    return () => { window.removeEventListener('focus', readVisible); document.removeEventListener('visibilitychange', readVisible); document.removeEventListener('focusin', readVisible); };
  }, [chat.activeId, messages.at(-1)?.id, room?.unread, chat.state, chat.receipts, view, panel, mobileChat]);
  useEffect(() => { const old = document.title; document.title = 'GhostChat'; return () => { document.title = old; }; }, []);
  useEffect(() => { if (previousRoom.current !== chat.activeId || atBottom.current) { timeline.current?.scrollTo({ top: timeline.current.scrollHeight, behavior: 'instant' }); setNewMessages(false); atBottom.current = true; readVisible(); } else setNewMessages(true); previousRoom.current = chat.activeId; }, [chat.activeId, messages.length]);
  useEffect(() => { setReply(undefined); setMessageSearch(''); setSearchOpen(false); setLimit(80); }, [chat.activeId]);
  useEffect(() => { const listener = (e: KeyboardEvent) => { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); document.getElementById('ms-search')?.focus(); } if (e.key === 'Escape') { setListMenu(''); setSearchOpen(false); setDetails(false); } }; document.addEventListener('keydown', listener); return () => document.removeEventListener('keydown', listener); }, []);
  function openRoom(id: string) { chat.setActive(id); setView('chats'); setMobileChat(true); }
  async function download(message: ChatMessage) { try { if (!message.attachment) return; const blob = chat.mode === 'matrix' ? await matrix.download(message.attachment) : await (await fetch(message.attachment.url!)).blob(); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = message.attachment.name.replace(/[\\/]/g, '_'); a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); } catch (e) { chat.notify((e as Error).message); } }
  return <div className={`messenger ms-unified${mobileChat && view === 'chats' ? ' ms-mobile-conversation' : ''}${details ? ' ms-details-open' : ''}${panel ? ' ms-tools-open' : ''}`} onClickCapture={event => { if (!toolLocked || !(event.target instanceof Element)) return; const link = event.target.closest('a'); if (link && link.target !== '_blank') { const url = new URL(link.href, window.location.href); if (url.origin === window.location.origin && url.pathname !== location.pathname) { event.preventDefault(); chat.notify('Resolve the open payment transaction before changing tools.'); } } }}>
    {profileOpen && <ProfileWallet onClose={() => setProfileOpen(false)}/>}
    <a className="ms-skip" href="#ms-main">Skip to conversation</a>
    <div className={`ms-app-frame${view !== 'chats' ? ' ms-secondary-view' : ''}`}>
      <aside className="ms-rail" aria-label="App navigation"><div className="ms-rail-main"><Link className="ms-rail-brand" to="/chat" aria-label="GhostChat home" title="GhostChat"><Ghost size={21}/></Link>
        <IconButton navLabel="Chats" label="Chats" active={view === 'chats' && !panel} disabled={toolLocked} onClick={() => { setView('chats'); setMobileChat(false); if (panel) navigate('/chat'); }}><MessageCircle size={21}/>{chat.rooms.some(r => r.unread > 0) && <span className="ms-rail-dot"/>}</IconButton>

        <IconButton navLabel="Send" label="Send a payment" active={panel === 'create'} disabled={toolLocked} onClick={() => openTools('/create')}><Send size={21}/></IconButton>
        <IconButton navLabel="Activity" label="Payment activity" active={panel === 'history' || panel === 'payment'} disabled={toolLocked} onClick={() => openTools('/payments')}><History size={21}/></IconButton>
        <IconButton navLabel="P2P" label="P2P exchange" active={panel === 'trade'} disabled={toolLocked} onClick={() => openTools('/trade')}><ArrowDownUp size={21}/></IconButton>
        <IconButton navLabel="People" label="Communities" active={view === 'communities'} disabled={toolLocked} onClick={() => { if (panel) navigate('/chat'); setView('communities'); }}><Users size={21}/></IconButton>
      </div><div className="ms-rail-bottom"><IconButton navLabel="Settings" label="Connection and privacy settings" active={view === 'settings'} disabled={toolLocked} onClick={() => { if (panel) navigate('/chat'); setView('settings'); }}><Settings2 size={21}/></IconButton><button className="ms-self-avatar" title="Your profile" aria-label="Your profile" onClick={() => setProfileOpen(true)}><span className="ms-self-initials">{(chat.rooms.flatMap(item => item.members).find(member => member.id === chat.session?.userId)?.name.replace(/^@/, '').slice(0,2) || 'GC').toUpperCase()}</span><ProfileImage source={chat.selfAvatar}/><span className="ms-nav-label">Profile</span></button></div></aside>
      {view === 'chats' ? <>
        <section className="ms-inbox" aria-label="Conversations">
          <InboxResize/>
          <div className="ms-inbox-heading"><h1>Chats</h1><IconButton label="New conversation" className="ms-new" onClick={() => setNewChat(true)}><Plus size={21}/></IconButton></div>
          <div className="ms-search"><Search size={17}/><input id="ms-search" placeholder="Find a conversation" aria-label="Search conversations" value={search} onChange={e => setSearch(e.target.value)}/><kbd>⌘ K</kbd></div>
          <div className="ms-filters" aria-label="Conversation filter">{['All', 'Unread', 'Groups', 'Community'].map(name => <button key={name} className={filter === name ? 'selected' : ''} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}{name === 'Unread' && chat.rooms.filter(r => r.unread > 0).length > 0 && <span>{chat.rooms.filter(r => r.unread > 0).length}</span>}</button>)}</div>
          <div className="ms-list-label"><span>{filter === 'Community' ? 'COMMUNITY CONVERSATIONS' : showArchive ? 'ARCHIVED' : 'CONVERSATIONS'}</span><button className="ms-text" onClick={() => { setShowArchive(!showArchive); setFilter('All'); }}><Archive size={12}/>{showArchive ? 'Back' : 'Archived'}</button></div>
          <div className="ms-room-list">{<>{rooms.map(r => <div className="ms-room-row" key={r.id}><button className={`ms-room${r.id === chat.activeId ? ' selected' : ''}`} onClick={() => openRoom(r.id)} aria-current={r.id === chat.activeId ? 'true' : undefined}>
            <Avatar room={r}/><span className="ms-room-copy"><span className="ms-room-name"><strong>{r.name}</strong><time>{r.lastAt ? roomTime(r.lastAt) : ''}</time></span><span className="ms-room-preview"><span>{r.preview}</span>{r.unread > 0 ? <b className="ms-unread">{r.unread}</b> : r.pinned ? <Pin size={12}/> : r.muted ? <BellOff size={12}/> : null}</span></span>
          </button><button className="ms-icon ms-list-more" aria-label={`Options for ${r.name}`} aria-expanded={listMenu === r.id} onClick={() => setListMenu(listMenu === r.id ? '' : r.id)}><MoreHorizontal size={17}/></button>{listMenu === r.id && <div className="ms-popup ms-list-menu">{(['archived','muted','pinned'] as const).map(key => <button key={key} onClick={() => { chat.updateRoom(r.id,key); setListMenu(''); }}>{key === 'archived' ? <Archive size={15}/> : key === 'muted' ? <BellOff size={15}/> : <Pin size={15}/>} {key === 'archived' ? r.archived ? 'Unarchive' : 'Archive' : key === 'muted' ? r.muted ? 'Unmute on this device' : 'Mute on this device' : r.pinned ? 'Unpin' : 'Pin'}</button>)}<button onClick={() => setListMenu('')}>Close menu</button></div>}</div>)}{rooms.length === 0 && <div className="ms-list-empty"><Search size={25}/><strong>{search ? 'No conversations found.' : showArchive ? 'Nothing tucked away.' : 'A fresh start.'}</strong><p>{search ? 'Try another name or phrase.' : 'Start a conversation with someone you know.'}</p><button className="ms-text" onClick={() => setNewChat(true)}>New conversation<ArrowRight size={14}/></button></div>}</>}</div>
        </section>
        <main className="ms-conversation" id="ms-main" tabIndex={-1}>
          <FluidBackdrop paused={fluidPaused}/>
          {room ? <>
            <div className="ms-conversation-header"><IconButton label="Back to conversations" className="ms-mobile-back" onClick={() => setMobileChat(false)}><ArrowLeft size={20}/></IconButton><button className="ms-person-heading" onClick={() => setDetails(!details)}><Avatar room={room} small/><span><strong>{room.name}</strong><small>{chat.mode === 'preview' ? room.subtitle : room.invited ? 'Invitation · not joined' : room.encrypted ? 'Encrypted conversation' : 'Unencrypted room · sending disabled'}</small></span></button>
              <div className="ms-conversation-actions"><IconButton className="ms-fluid-toggle" label={fluidPaused ? 'Resume fluid background' : 'Pause fluid background'} active={!fluidPaused} onClick={() => setFluidPaused(!fluidPaused)}><Waves size={18}/></IconButton><IconButton label="Voice calls · not enabled yet" onClick={() => chat.notify('Calling is not enabled yet. It needs the separate calling service.')}><Phone size={18}/></IconButton><IconButton label="Video calls · not enabled yet" onClick={() => chat.notify('Video calling is not enabled in this release.')}><Video size={19}/></IconButton><span className="ms-action-divider"/><IconButton label="Search in conversation" active={searchOpen} onClick={() => setSearchOpen(!searchOpen)}><Search size={18}/></IconButton></div>
            </div>
            {chat.mode === 'preview' ? <div className="ms-preview-strip"><span className="ms-preview-label">PREVIEW</span><span>Sample conversations. Messages stay on this device.</span><button onClick={() => setConnect(true)}>Connect to chat<ArrowUpRight size={12}/></button></div> : chat.error ? <div className="ms-preview-strip ms-error-strip" role="alert">{chat.error}<button onClick={() => setConnect(true)}>Reconnect</button></div> : <div className="ms-encryption-strip"><LockKeyhole size={11}/>{room.encrypted ? 'Encrypted content · verify devices before sharing sensitive information.' : 'This room is not encrypted. Create a new encrypted conversation.'}</div>}
            {searchOpen && <div className="ms-thread-search"><Search size={16}/><input autoFocus placeholder="Search messages on this device" aria-label="Search messages" value={messageSearch} onChange={e => setMessageSearch(e.target.value)}/><button className="ms-icon" aria-label="Close message search" onClick={() => { setSearchOpen(false); setMessageSearch(''); }}><X size={16}/></button></div>}
            <div className="ms-timeline" ref={timeline} onScroll={() => { const el = timeline.current!; atBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 100; if (atBottom.current) { setNewMessages(false); readVisible(); } }}>
              {(messages.length > limit || chat.mode === 'matrix') && <button className="ms-load-earlier" onClick={async () => { setLimit(l => l + 80); if (chat.mode === 'matrix') try { await matrix.earlier(room.id); } catch (e) { chat.notify((e as Error).message); } }}>Load earlier messages</button>}
              <ol className="ms-message-list" role="log" aria-label={`Messages with ${room.name}`} aria-live="polite" aria-relevant="additions">{visible.map((message, index) => <Message key={message.id} message={message} showSender={room.kind === 'group'} previousOwn={index > 0 && visible[index - 1].own === message.own} onReply={() => setReply(message)} onRemove={() => setRemoveTarget(message)} onDownload={() => download(message)} onOpenPayment={id => openTools(`/pay/${id}`)} onCreate={() => openTools('/create')}/>)}</ol>
              {visible.length === 0 && <div className="ms-thread-empty"><Ghost size={42} strokeWidth={1}/><h2>{messageSearch ? 'No words found.' : 'Every good thing starts'}<br/>{!messageSearch && <em>with a hello.</em>}</h2><p>{messageSearch ? 'Try another phrase.' : 'Make yourself at home. Send your first message.'}</p></div>}
            </div>
            {newMessages && <button className="ms-new-messages" onClick={() => { timeline.current?.scrollTo({ top: timeline.current.scrollHeight, behavior: 'smooth' }); setNewMessages(false); }}>New messages<ArrowDown size={14}/></button>}
            {room.invited ? <div className="ms-invitation"><p>You’ve been invited. Joining may share your account and device metadata with room participants.</p><button className="ms-button ms-primary" onClick={() => { void matrix.join(room.id).catch(e => chat.notify(e.message)); }}>Accept invitation<ArrowRight size={16}/></button><button className="ms-text" onClick={() => { void matrix.leave(room.id).catch(e => chat.notify(e.message)); }}>Decline</button></div> : <Composer key={`${chat.session?.userId || 'preview'}:${room.id}`} room={room} initialDraft={drafts.current.get(`${chat.session?.userId || chat.mode}:${room.id}`) || ''} onDraft={value => { if (value) { drafts.current.set(`${chat.session?.userId || chat.mode}:${room.id}`, value); if (drafts.current.size > 50) drafts.current.delete(drafts.current.keys().next().value!); } else drafts.current.delete(`${chat.session?.userId || chat.mode}:${room.id}`); }} reply={reply} onClearReply={() => setReply(undefined)} onPayment={() => openTools('/create')}/>}
          </> : <div className="ms-thread-empty ms-empty-home"><Ghost size={48} strokeWidth={1.1}/><p className="ms-kicker">YOUR OWN LITTLE CORNER OF THE INTERNET</p><h2>Good conversations.<br/><em>Great possibilities.</em></h2><p>Bring your people closer.<br/>And a little something their way.</p><button className="ms-button ms-primary" onClick={() => chat.mode === 'preview' ? setNewChat(true) : setNewChat(true)}>Start a conversation<ArrowRight size={16}/></button>{chat.mode === 'preview' && <button className="ms-text" onClick={() => setConnect(true)}>Connect to Matrix<ArrowUpRight size={14}/></button>}</div>}
        </main>
        {details && room && <aside className="ms-details"><div className="ms-details-heading"><span>CONVERSATION</span><IconButton label="Close details" onClick={() => setDetails(false)}><X size={18}/></IconButton></div><Avatar room={room}/><h2>{room.name}</h2><p>{room.kind === 'direct' ? 'Private conversation' : `${room.members.length} members`}</p><div className="ms-details-quick"><button onClick={() => chat.updateRoom(room.id, 'muted')}><BellOff size={18}/><span>{room.muted ? 'Unmute' : 'Mute'}</span></button><button onClick={() => chat.updateRoom(room.id, 'pinned')}><Pin size={18}/><span>{room.pinned ? 'Unpin' : 'Pin'}</span></button><button onClick={() => { setMessageSearch(''); setSearchOpen(true); }}><Search size={18}/><span>Search</span></button></div>{room.kind !== 'direct' && <div className="ms-detail-section"><h3>PEOPLE</h3><button className="ms-text" onClick={() => setManageGroup(true)}><Users size={14}/>Manage members & group</button>{room.members.map(member => <div className="ms-member" key={member.id}><span className="ms-member-initial">{member.name.slice(0, 1).toUpperCase()}</span><div><strong>{member.name}</strong><span>{member.id === chat.session?.userId ? 'You' : 'Member'}</span></div></div>)}</div>}<div className="ms-detail-section"><h3>SHARED PAYMENTS</h3>{messages.filter(m => m.payment).length === 0 ? <p>No real payment cards here yet.</p> : messages.filter(m => m.payment).map(m => <a className="ms-shared-payment" key={m.id} href={paymentUrl(m.payment!)}><Link2 size={16}/>{m.payment!.version === 3 ? 'Direct transfer' : m.payment!.version === 4 ? 'Community campaign' : `Payment #${m.payment!.paymentId}`}<ChevronRight size={15}/></a>)}</div><div className="ms-detail-security"><ShieldCheck size={20}/><strong>{chat.mode === 'preview' ? 'A preview of a more private space.' : 'Encryption is a beginning.'}</strong><p>{chat.mode === 'preview' ? 'Connect a Matrix server to send encrypted messages across devices.' : 'Verify people, devices, and wallet addresses independently. Chat encryption does not make payments private.'}</p></div></aside>}
      </> : view === 'communities' ? <Communities onOpen={openRoom}/> : <SettingsView/>}
      <WorkspaceTools onClose={closeTools} locked={toolLocked} onLock={setToolLocked}/>
    </div>

    {chat.toast && <div className="ms-toast" role="status"><Check size={16}/>{chat.toast}<button aria-label="Dismiss notification" onClick={() => chat.notify('')}><X size={14}/></button></div>}
    {manageGroup && room && <ManageGroup room={room} onClose={() => setManageGroup(false)}/>}
    {connect && <ConnectDialog onClose={() => setConnect(false)}/>} {newChat && <NewConversation initialPeople={contact ? `@${contact}` : undefined} onClose={() => { setNewChat(false); setMobileChat(true); if (contact) navigate('/chat', { replace: true }); }}/>}
    {removeTarget && <Modal title="Remove this message?" eyebrow="A LITTLE HOUSEKEEPING" onClose={() => setRemoveTarget(undefined)}><p className="ms-modal-copy">{chat.mode === 'preview' ? 'This removes the message from your local preview.' : 'This requests removal from the room. Recipients may have saved a copy or screenshot.'}</p><button className="ms-button ms-primary ms-full" onClick={async () => { try { await chat.remove(removeTarget); setRemoveTarget(undefined); } catch (e) { chat.notify((e as Error).message); } }}>Remove message<Trash2 size={16}/></button></Modal>}
  </div>;
}

function Message({ message, showSender, previousOwn, onReply, onRemove, onDownload, onOpenPayment, onCreate }: { message: ChatMessage; showSender: boolean; previousOwn: boolean; onReply: () => void; onRemove: () => void; onDownload: () => void; onOpenPayment: (id: string) => void; onCreate: () => void }) {
  const chat = useMessenger(); const [menu, setMenu] = useState(false);
  return <li className={`ms-message ${message.own ? 'own' : 'other'}${previousOwn ? ' consecutive' : ''}`}><div className="ms-message-body">
    {showSender && !message.own && <span className="ms-message-sender">{message.senderName}</span>}
    {message.reply && <blockquote><strong>{message.reply.sender}</strong><span>{message.reply.body}</span></blockquote>}
    {message.payment || message.previewPayment ? <PaymentCard payment={message.payment} preview={message.previewPayment} onOpen={onOpenPayment} onCreate={onCreate}/> : message.attachment ? <button className="ms-attachment" onClick={onDownload}><span><File size={22}/></span><div><strong>{message.attachment.name}</strong><small>{Math.max(1, Math.round(message.attachment.size / 1024))} KB · {message.state === 'local' ? 'Local preview' : 'Download & decrypt'}</small></div><Download size={17}/></button> : <p>{message.body}</p>}
    <div className="ms-message-meta"><time>{timeLabel(message.timestamp)}</time>{message.own && <span className={`ms-delivery-state is-${message.state}`} title={message.state === 'local' ? 'Saved on this browser only; not delivered' : message.state === 'seen' ? 'Read receipt received from another participant' : message.state === 'sent' ? 'Accepted by the homeserver. Delivery to another device is not separately confirmed.' : message.state}>{message.state === 'local' ? <><span className="ms-local-indicator"/>local</> : message.state === 'sending' ? <><LoaderCircle size={11} className="spin"/>Sending</> : message.state === 'failed' ? 'Failed' : message.state === 'seen' ? <><CheckCheck size={14}/>Seen</> : <><Check size={12}/>Sent</>}</span>}</div>
    <div className="ms-message-tools"><button aria-label="Reply to message" title="Reply" onClick={onReply}><ArrowLeft size={14}/></button><div className="ms-message-menu-wrap"><button aria-label="Message actions" title="Message actions" onClick={() => setMenu(!menu)}><MoreHorizontal size={16}/></button>{menu && <div className="ms-popup"><button onClick={() => { onReply(); setMenu(false); }}><ArrowLeft size={14}/>Reply</button><button onClick={async () => { try { await navigator.clipboard.writeText(message.body); chat.notify('Message copied.'); } catch { chat.notify('Could not access your clipboard.'); } setMenu(false); }}><Copy size={14}/>Copy message</button>{message.own && <button onClick={() => { onRemove(); setMenu(false); }}><Trash2 size={14}/>Remove message</button>}</div>}</div></div>
  </div></li>;
}

function Composer({ room, initialDraft, onDraft, reply, onClearReply, onPayment }: { room: ChatRoom; initialDraft: string; onDraft: (value: string) => void; reply?: ChatMessage; onClearReply: () => void; onPayment: () => void }) {
  const chat = useMessenger(); const [text, setText] = useState(initialDraft); const [busy, setBusy] = useState(false); const [emojis, setEmojis] = useState(false); const [recording, setRecording] = useState(false); const [seconds, setSeconds] = useState(0);
  const input = useRef<HTMLTextAreaElement>(null); const file = useRef<HTMLInputElement>(null); const recorder = useRef<MediaRecorder | null>(null); const stream = useRef<MediaStream | null>(null); const stopWithoutSending = useRef(false); const recordingGeneration = useRef(0); const recordingStarting = useRef(false); const typingTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => { setEmojis(false); setRecording(false); return () => { recordingGeneration.current++; recordingStarting.current = false; clearTimeout(typingTimer.current); stopWithoutSending.current = true; if (recorder.current?.state === 'recording') recorder.current.stop(); stream.current?.getTracks().forEach(track => track.stop()); }; }, [room.id]);
  useEffect(() => { onDraft(text); }, [text]);
  useEffect(() => { if (!recording) return; const timer = setInterval(() => setSeconds(value => value + 1), 1000); const stop = setTimeout(() => recorder.current?.stop(), 60000); return () => { clearInterval(timer); clearTimeout(stop); }; }, [recording]);
  async function send(e?: FormEvent) { e?.preventDefault(); if (!text.trim() || busy) return; setBusy(true); try { await chat.send(text.trim(), undefined, reply); setText(''); onClearReply(); if (input.current) input.current.style.height = 'auto'; } catch (e) { chat.notify((e as Error).message); } finally { setBusy(false); input.current?.focus(); } }
  async function upload(f: File) { setBusy(true); try { await chat.upload(f); } catch (e) { chat.notify((e as Error).message); } finally { setBusy(false); } }
  async function record() {
    if (recording) { recorder.current?.stop(); return; }
    if (recordingStarting.current) return;
    const generation = recordingGeneration.current; recordingStarting.current = true;
    let source: MediaStream | undefined;
    try {
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error('Voice notes are not supported in this browser.');
      source = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (generation !== recordingGeneration.current) { source.getTracks().forEach(track => track.stop()); return; }
      stopWithoutSending.current = false; stream.current = source;
      const rec = new MediaRecorder(source); recorder.current = rec; const parts: BlobPart[] = [];
      rec.ondataavailable = e => { if (e.data.size) parts.push(e.data); };
      rec.onstop = () => {
        source?.getTracks().forEach(track => track.stop());
        if (generation !== recordingGeneration.current) return;
        setRecording(false);
        if (!stopWithoutSending.current) void upload(new window.File(parts, `voice-note-${Date.now()}.${rec.mimeType.includes('mp4') ? 'm4a' : 'webm'}`, { type: rec.mimeType || 'audio/webm' }));
      };
      rec.start(); setSeconds(0); setRecording(true);
    } catch (e) { source?.getTracks().forEach(track => track.stop()); if (generation === recordingGeneration.current) chat.notify((e as Error).message); }
    finally { if (generation === recordingGeneration.current) recordingStarting.current = false; }
  }
  const disabled = busy || chat.mode === 'matrix' && (!room.encrypted || room.canSend === false || chat.state !== 'connected'); const typing = chat.mode === 'matrix' ? matrix.typingNames(room.id) : [];
  return <div className="ms-composer-area">{typing.length > 0 && <p className="ms-typing" role="status">{typing.join(', ')} {typing.length === 1 ? 'is' : 'are'} typing…</p>}
    {reply && <div className="ms-reply-preview"><span>Replying to <strong>{reply.senderName}</strong><small>{reply.body.slice(0, 100)}</small></span><button className="ms-icon" aria-label="Cancel reply" onClick={onClearReply}><X size={16}/></button></div>}
    <div className="ms-composer"><div className="ms-composer-tools"><div className="ms-emoji-wrap"><IconButton disabled={disabled || recording} label="Insert emoji" onClick={() => setEmojis(!emojis)} active={emojis}><Smile size={21}/></IconButton>{emojis && <div className="ms-emoji-picker" aria-label="Choose emoji">{['👋', '😊', '🤍', '✨', '🙌', '🎉', '👍', '❤️', '💬', '🙏', '🔥', '💡'].map(emoji => <button key={emoji} onClick={() => { setText(t => t + emoji); setEmojis(false); input.current?.focus(); }} aria-label={`Insert ${emoji}`}>{emoji}</button>)}</div>}</div><IconButton disabled={disabled || recording} label="Attach a file" onClick={() => file.current?.click()}><Paperclip size={20}/></IconButton><input type="file" ref={file} hidden onChange={e => { const f = e.target.files?.[0]; if (f) void upload(f); e.target.value = ''; }}/></div>
      <form onSubmit={send}>{recording ? <div className="ms-recording"><span/>Recording · {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}<button type="button" onClick={() => { stopWithoutSending.current = true; recorder.current?.stop(); }}>Discard</button></div> : <textarea ref={input} rows={1} aria-label="Message" enterKeyHint="enter" placeholder={room.canSend === false ? 'Only group administrators can post here' : 'Write a message…'} value={text} disabled={disabled} maxLength={16000} onChange={e => { setText(e.target.value); e.target.style.height = 'auto'; e.target.style.height = `${Math.min(e.target.scrollHeight, 130)}px`; if (chat.mode === 'matrix') { matrix.typing(room.id, true); clearTimeout(typingTimer.current); typingTimer.current = setTimeout(() => matrix.typing(room.id, false), 1800); } }} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing && !window.matchMedia('(max-width:680px), (max-width:1024px) and (max-height:500px) and (orientation:landscape)').matches) { e.preventDefault(); void send(); } }}/>
        }<div className="ms-composer-end"><button type="button" className="ms-pay-trigger" onClick={onPayment} disabled={disabled || recording} title="Create an EVM testnet payment"><WalletIcon size={17}/><span>Pay</span></button><span className="ms-action-divider"/>{text.trim() && !recording ? <button className="ms-send-button" type="submit" disabled={disabled} aria-label="Send message">{busy ? <LoaderCircle size={18} className="spin"/> : <ArrowUpRight size={22}/>}</button> : <button type="button" className={`ms-icon${recording ? ' ms-record-active' : ''}`} disabled={disabled} aria-label={recording ? 'Stop and send voice note' : 'Record a voice note'} onClick={record}>{recording ? <Square size={18} fill="currentColor"/> : busy ? <LoaderCircle size={18} className="spin"/> : <Mic size={21}/>}</button>}</div>
      </form>
    </div><div className="ms-composer-caption"><span><LockKeyhole size={10}/>{chat.mode === 'preview' ? 'Saved on this device · connect to deliver' : 'Encrypted room content · device verification matters'}</span><span>Enter to send · Shift + Enter for a new line</span></div>
  </div>;
}

function SettingsView() {
  const chat = useMessenger();
  return <main className="ms-settings-page" id="ms-main"><h1>Settings</h1><p className="ms-page-description">Privacy, notifications and chat key recovery.</p><div className="ms-settings-grid">
    <section className="ms-settings-card"><ShieldCheck size={23}/><h2>A little more private.</h2><label className="ms-toggle-row"><span><strong>Share read receipts</strong><small>{chat.receipts ? 'On · people can see when you read messages.' : 'Off · read receipts are private.'}</small></span><input type="checkbox" role="switch" aria-label="Share read receipts" checked={chat.receipts} onChange={e => chat.setReceipts(e.target.checked)}/></label><p className="ms-fine">Turning this off does not erase earlier receipts.</p></section>
    <section className="ms-settings-card"><Bell size={23}/><h2>At your own pace.</h2><p>Pin, mute or archive conversations from the chat list. These preferences are saved on this device.</p><button className="ms-button ms-secondary" onClick={async () => { if (!('Notification' in window)) { chat.notify('This browser does not support notifications.'); return; } const permission = await Notification.requestPermission(); chat.notify(permission === 'granted' ? 'Browser permission granted. Background push delivery still needs a configured push service.' : 'Notifications are not enabled.'); }}>Browser notification permission<Bell size={15}/></button>{chat.mode === 'preview' && <button className="ms-text" onClick={chat.resetPreview}><Trash2 size={14}/>Reset local preview conversations</button>}</section>
    {chat.mode === 'matrix' && <KeyRecovery/>}
  </div></main>;
}
