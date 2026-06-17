'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { PLAYERS } from '../data/players';

interface NewChatModalProps {
  existingPlayerIds: number[];
  onSelect: (playerId: number) => void;
  onClose: () => void;
}

export default function NewChatModal({ existingPlayerIds, onSelect, onClose }: NewChatModalProps) {
  const [search, setSearch] = useState('');

  const term = search.trim().toLowerCase();
  const results = term ? PLAYERS.filter((p) => p.name.toLowerCase().includes(term)) : PLAYERS;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-[var(--color-dark-card)] border border-[#1f2937] rounded-t-3xl sm:rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.7)] max-h-[88vh] flex flex-col">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="text-xl md:text-2xl font-black text-white font-[var(--font-urbanist)] tracking-wide">New message</h2>
          <button onClick={onClose} aria-label="Close" className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="px-6 pb-3">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="SEARCH PLAYERS..."
              className="w-full pl-9 pr-3 py-2.5 bg-[#090e17] border border-[#1f2937] rounded-lg text-xs font-bold tracking-widest text-slate-200 placeholder-slate-600 focus:border-[var(--color-accent)]/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="px-6 overflow-y-auto no-scrollbar flex-1 pb-5 space-y-2">
          {results.length === 0 && (
            <p className="text-center text-xs font-bold text-slate-500 tracking-widest uppercase py-8">No players found</p>
          )}
          {results.map((player) => {
            const hasChat = existingPlayerIds.includes(player.id);
            return (
              <button
                key={player.id}
                onClick={() => onSelect(player.id)}
                className="w-full bg-[#090e17] border border-[#1f2937] rounded-xl p-3 flex items-center gap-3 hover:border-[var(--color-accent)]/50 transition-colors text-left"
              >
                <img src={player.image} alt={player.name} className="w-11 h-11 rounded-lg object-cover border border-[#1f2937] flex-none" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-black text-white tracking-wide truncate">{player.name}</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5 truncate">
                    Padel {player.padelLevel} · Tennis {player.tennisLevel}
                  </p>
                </div>
                {hasChat && (
                  <span className="flex-none text-[9px] font-black tracking-widest text-slate-500 uppercase">Existing</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
