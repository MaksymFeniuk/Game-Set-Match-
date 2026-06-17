'use client';

import { useState } from 'react';
import { Search, Send, Phone, Video, Plus } from 'lucide-react';
import { PLAYERS } from '../../data/players';
import NewChatModal from '../../components/NewChatModal';

interface Message {
  id: number;
  from: 'me' | 'them';
  text: string;
  time: string;
}

interface Conversation {
  id: number;
  playerId: number;
  name: string;
  avatar: string;
  online: boolean;
  unread: number;
  lastTime: string;
  messages: Message[];
}

const img = (id: number) => PLAYERS.find((p) => p.id === id)?.image ?? '';

const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 1,
    playerId: 1,
    name: 'Sarah K.',
    avatar: img(1),
    online: true,
    unread: 2,
    lastTime: '2m',
    messages: [
      { id: 1, from: 'them', text: 'Hey! Still on for padel tonight at XNRGY?', time: '18:02' },
      { id: 2, from: 'me', text: 'Yes! 19:00 right? I booked court 3.', time: '18:05' },
      { id: 3, from: 'them', text: 'Perfect. We need one more for doubles though.', time: '18:06' },
      { id: 4, from: 'them', text: "I'll ask Max, he's usually free on Thursdays.", time: '18:06' },
    ],
  },
  {
    id: 2,
    playerId: 6,
    name: 'Emma L.',
    avatar: img(6),
    online: true,
    unread: 0,
    lastTime: '1h',
    messages: [
      { id: 1, from: 'them', text: 'GG yesterday, that was a close one 😅', time: '14:20' },
      { id: 2, from: 'me', text: 'Haha that tiebreak was brutal. Rematch next week?', time: '14:25' },
      { id: 3, from: 'them', text: 'Absolutely. Same club, Tuesday evening?', time: '14:31' },
    ],
  },
  {
    id: 3,
    playerId: 11,
    name: 'Max F.',
    avatar: img(11),
    online: false,
    unread: 0,
    lastTime: '3h',
    messages: [
      { id: 1, from: 'me', text: 'Sarah said you might join us tonight?', time: '15:40' },
      { id: 2, from: 'them', text: 'Yeah I can make it! What level are we playing?', time: '15:52' },
      { id: 3, from: 'me', text: 'Mixed, pretty social. Should be fun.', time: '15:55' },
    ],
  },
  {
    id: 4,
    playerId: 4,
    name: 'Alex R.',
    avatar: img(4),
    online: false,
    unread: 1,
    lastTime: 'Yesterday',
    messages: [
      { id: 1, from: 'them', text: 'Want to hit some serves before the match tomorrow?', time: 'Yesterday' },
      { id: 2, from: 'me', text: 'Good idea, 30 min warmup?', time: 'Yesterday' },
      { id: 3, from: 'them', text: 'Works for me. See you at 18:00.', time: 'Yesterday' },
    ],
  },
  {
    id: 5,
    playerId: 3,
    name: 'Mila V.',
    avatar: img(3),
    online: true,
    unread: 0,
    lastTime: '2d',
    messages: [
      { id: 1, from: 'them', text: 'Thanks for organising Saturday! Everyone loved it.', time: 'Sat' },
      { id: 2, from: 'me', text: 'Anytime! Same group next month?', time: 'Sat' },
    ],
  },
  {
    id: 6,
    playerId: 9,
    name: 'Daniel P.',
    avatar: img(9),
    online: false,
    unread: 0,
    lastTime: '4d',
    messages: [
      { id: 1, from: 'me', text: 'Rematch whenever you’re ready 😎', time: 'Mon' },
      { id: 2, from: 'them', text: 'Bring it. You got lucky last time!', time: 'Mon' },
    ],
  },
];

export default function MessagesPage() {
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeId, setActiveId] = useState(1);
  const [search, setSearch] = useState('');
  const [draft, setDraft] = useState('');
  const [showNewChat, setShowNewChat] = useState(false);

  const startChat = (playerId: number) => {
    setShowNewChat(false);
    const existing = conversations.find((c) => c.playerId === playerId);
    if (existing) {
      selectConversation(existing.id);
      return;
    }
    const player = PLAYERS.find((p) => p.id === playerId);
    if (!player) return;

    const newId = Math.max(...conversations.map((c) => c.id)) + 1;
    setConversations((prev) => [
      {
        id: newId,
        playerId: player.id,
        name: player.name,
        avatar: player.image,
        online: false,
        unread: 0,
        lastTime: 'now',
        messages: [],
      },
      ...prev,
    ]);
    setActiveId(newId);
  };

  const active = conversations.find((c) => c.id === activeId)!;

  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  const selectConversation = (id: number) => {
    setActiveId(id);
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  };

  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              lastTime: 'now',
              messages: [...c.messages, { id: c.messages.length + 1, from: 'me', text, time: 'now' }],
            }
          : c
      )
    );
    setDraft('');
  };

  return (
    <div className="p-8 h-full max-w-[1400px] mx-auto flex flex-col">
      <h1 className="text-3xl font-black mb-8 text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
        MESSAGES
      </h1>

      <div className="grid grid-cols-12 gap-8 flex-1 min-h-[600px]">
        {/* Conversations List */}
        <div className="col-span-12 lg:col-span-4 bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="p-4 border-b border-[#1f2937] space-y-3">
            <button
              onClick={() => setShowNewChat(true)}
              className="w-full text-[12px] font-black tracking-widest text-black bg-[var(--color-accent)] hover:brightness-110 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(115,211,255,0.2)]"
            >
              <Plus size={18} />
              NEW MESSAGE
            </button>
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="SEARCH CHATS..."
                className="w-full pl-9 pr-3 py-2.5 bg-[#090e17] border border-[#1f2937] rounded-lg text-xs font-bold tracking-widest text-slate-200 placeholder-slate-600 focus:border-[var(--color-accent)]/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="overflow-y-auto flex-1 no-scrollbar">
            {filtered.length === 0 && (
              <p className="text-center text-xs font-bold text-slate-500 tracking-widest uppercase py-10">No chats found</p>
            )}
            {filtered.map((chat) => {
              const isActive = chat.id === activeId;
              const preview = chat.messages[chat.messages.length - 1];
              return (
                <button
                  key={chat.id}
                  onClick={() => selectConversation(chat.id)}
                  className={`w-full text-left p-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors relative group flex items-center gap-3 ${isActive ? 'bg-[#090e17]' : ''}`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[var(--color-accent)] shadow-[0_0_10px_rgba(115,211,255,0.5)] rounded-r-md"></div>
                  )}
                  <div className="relative flex-none">
                    <img src={chat.avatar} alt={chat.name} className="w-11 h-11 rounded-full object-cover border border-[#1f2937]" />
                    {chat.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-dark-card)] shadow-[0_0_5px_rgba(115,211,255,0.8)]"></span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <p className={`font-black tracking-wide truncate ${isActive ? 'text-[var(--color-accent)]' : 'text-white group-hover:text-[var(--color-accent)] transition-colors'}`}>
                        {chat.name}
                      </p>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex-none">{chat.lastTime}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-slate-400 truncate">
                        {preview ? `${preview.from === 'me' ? 'You: ' : ''}${preview.text}` : 'Start the conversation'}
                      </p>
                      {chat.unread > 0 && (
                        <span className="flex-none w-5 h-5 rounded-full bg-[var(--color-accent)] text-[#090e17] text-[10px] font-black flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Window */}
        <div className="col-span-12 lg:col-span-8 bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-[#1f2937] flex items-center justify-between bg-[#090e17]/50 rounded-t-xl">
            <div className="flex items-center gap-3">
              <img src={active.avatar} alt={active.name} className="w-11 h-11 rounded-full object-cover border border-[#1f2937]" />
              <div>
                <h2 className="text-xl font-black text-white tracking-wide">{active.name}</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`w-2 h-2 rounded-full ${active.online ? 'bg-[var(--color-accent)] shadow-[0_0_5px_rgba(115,211,255,0.8)] animate-pulse' : 'bg-slate-600'}`}></span>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{active.online ? 'Online' : 'Offline'}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-[#1f2937] rounded-lg transition-colors border border-transparent hover:border-slate-700">
                <Phone size={18} className="text-[var(--color-accent)]" />
              </button>
              <button className="p-2 hover:bg-[#1f2937] rounded-lg transition-colors border border-transparent hover:border-slate-700">
                <Video size={18} className="text-[var(--color-accent)]" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
            {active.messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="text-sm font-black text-white tracking-wide">No messages yet</p>
                <p className="text-xs font-bold text-slate-500 mt-2 tracking-wide">Say hi to {active.name} to start the conversation.</p>
              </div>
            )}
            {active.messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-md px-5 py-3 rounded-2xl ${
                    msg.from === 'them'
                      ? 'bg-[#090e17] text-slate-200 border border-[#1f2937] rounded-tl-sm'
                      : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 rounded-tr-sm shadow-[0_0_15px_rgba(115,211,255,0.05)]'
                  }`}
                >
                  <p className="font-semibold text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-[9px] mt-2 font-bold tracking-widest uppercase ${msg.from === 'them' ? 'text-slate-500' : 'text-[var(--color-accent)]/60'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-[#1f2937] bg-[#090e17]/50 rounded-b-xl">
            <div className="flex gap-3 bg-[#121826] border border-[#1f2937] rounded-full p-1.5 focus-within:border-[var(--color-accent)]/50 focus-within:shadow-[0_0_15px_rgba(115,211,255,0.1)] transition-all">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="TYPE A MESSAGE..."
                className="flex-1 px-4 bg-transparent focus:outline-none text-slate-200 text-sm font-bold placeholder-slate-600 tracking-widest"
              />
              <button
                onClick={sendMessage}
                className="bg-[var(--color-accent)] text-black p-2.5 rounded-full flex items-center justify-center hover:brightness-110 transition-colors shadow-[0_0_10px_rgba(115,211,255,0.2)]"
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showNewChat && (
        <NewChatModal
          existingPlayerIds={conversations.map((c) => c.playerId)}
          onSelect={startChat}
          onClose={() => setShowNewChat(false)}
        />
      )}
    </div>
  );
}
