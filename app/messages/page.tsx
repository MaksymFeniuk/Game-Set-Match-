'use client';

import { Send, Phone, Plus } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="p-8 h-full max-w-[1400px] mx-auto flex flex-col">
      <h1 className="text-3xl font-black mb-8 text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">MESSAGES</h1>

      <div className="grid grid-cols-12 gap-8 flex-1 min-h-[600px]">
        {/* Conversations List */}
        <div className="col-span-12 lg:col-span-4 bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="p-4 border-b border-[#1f2937]">
            <button className="w-full text-[12px] font-black tracking-widest text-black bg-[var(--color-accent)] hover:brightness-110 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(115,211,255,0.2)]">
              <Plus size={18} />
              NEW MESSAGE
            </button>
          </div>
          <div className="overflow-y-auto flex-1 no-scrollbar">
            {[1, 2, 3, 4, 5, 6].map((chat) => (
              <div
                key={chat}
                className={`p-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors cursor-pointer relative group ${chat === 1 ? 'bg-[#090e17]' : ''}`}
              >
                {chat === 1 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[var(--color-accent)] shadow-[0_0_10px_rgba(115,211,255,0.5)] rounded-r-md"></div>
                )}
                <div className="flex items-center justify-between mb-1 ml-1">
                  <p className={`font-black tracking-wide ${chat === 1 ? 'text-[var(--color-accent)]' : 'text-white group-hover:text-[var(--color-accent)] transition-colors'}`}>Player {chat}</p>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">2h ago</span>
                </div>
                <p className="text-xs font-bold text-slate-400 truncate ml-1">Hey, want to play tomorrow?</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="col-span-12 lg:col-span-8 bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-[#1f2937] flex items-center justify-between bg-[#090e17]/50 rounded-t-xl">
            <div>
              <h2 className="text-xl font-black text-white tracking-wide">Player 1</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_5px_rgba(115,211,255,0.8)] animate-pulse"></span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Online</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-[#1f2937] rounded-lg transition-colors border border-transparent hover:border-slate-700">
                <Phone size={18} className="text-[var(--color-accent)]" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
            {[1, 2, 3, 4].map((msg, idx) => (
              <div
                key={msg}
                className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-md px-5 py-3 rounded-2xl ${
                    idx % 2 === 0
                      ? 'bg-[#090e17] text-slate-200 border border-[#1f2937] rounded-tl-sm'
                      : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 rounded-tr-sm shadow-[0_0_15px_rgba(115,211,255,0.05)]'
                  }`}
                >
                  <p className="font-semibold text-sm leading-relaxed">{idx % 2 === 0 ? 'Hey! Wanna play tomorrow?' : 'Sure! What time works for you?'}</p>
                  <p className={`text-[9px] mt-2 font-bold tracking-widest uppercase ${idx % 2 === 0 ? 'text-slate-500' : 'text-[var(--color-accent)]/60'}`}>{5 - idx}m ago</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-[#1f2937] bg-[#090e17]/50 rounded-b-xl">
            <div className="flex gap-3 bg-[#121826] border border-[#1f2937] rounded-full p-1.5 focus-within:border-[var(--color-accent)]/50 focus-within:shadow-[0_0_15px_rgba(115,211,255,0.1)] transition-all">
              <input
                type="text"
                placeholder="TYPE A MESSAGE..."
                className="flex-1 px-4 bg-transparent focus:outline-none text-slate-200 text-sm font-bold placeholder-slate-600 tracking-widest"
              />
              <button className="bg-[var(--color-accent)] text-black p-2.5 rounded-full flex items-center justify-center hover:brightness-110 transition-colors shadow-[0_0_10px_rgba(115,211,255,0.2)]">
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
