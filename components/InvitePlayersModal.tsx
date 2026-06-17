'use client';

import { useState } from 'react';
import { Check, Search, X } from 'lucide-react';
import { PLAYERS } from '../data/players';

interface InvitePlayersModalProps {
  matchTitle: string;
  capacity: number;
  invited: number[];
  onToggle: (id: number) => void;
  onClose: () => void;
}

export default function InvitePlayersModal({ matchTitle, capacity, invited, onToggle, onClose }: InvitePlayersModalProps) {
  const [search, setSearch] = useState('');

  const term = search.trim().toLowerCase();
  const results = term ? PLAYERS.filter((p) => p.name.toLowerCase().includes(term)) : PLAYERS;

  const spotsLeft = Math.max(0, capacity - invited.length);
  const reachedCap = invited.length >= capacity;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-[var(--color-dark-card)] border border-[#1f2937] rounded-t-3xl sm:rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.7)] max-h-[88vh] flex flex-col">
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white font-[var(--font-urbanist)] tracking-wide">Invite players</h2>
            <p className="text-xs font-bold text-slate-500 mt-1 truncate">{matchTitle}</p>
          </div>
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

        <div className="px-6 overflow-y-auto no-scrollbar flex-1 pb-2 space-y-2">
          {results.length === 0 && (
            <p className="text-center text-xs font-bold text-slate-500 tracking-widest uppercase py-8">No players found</p>
          )}
          {results.map((player) => {
            const isInvited = invited.includes(player.id);
            const disabled = !isInvited && reachedCap;
            return (
              <div
                key={player.id}
                className="bg-[#090e17] border border-[#1f2937] rounded-xl p-3 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img src={player.image} alt={player.name} className="w-11 h-11 rounded-lg object-cover border border-[#1f2937] flex-none" />
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-white tracking-wide truncate">{player.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5 truncate">
                      Padel {player.padelLevel} · Tennis {player.tennisLevel}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onToggle(player.id)}
                  disabled={disabled}
                  className={`flex-none flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-black tracking-widest transition-all ${
                    isInvited
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]'
                      : disabled
                      ? 'bg-[#090e17] text-slate-600 border border-[#1f2937] cursor-not-allowed'
                      : 'bg-[var(--color-cyan-glow)] text-[#090e17] hover:brightness-110'
                  }`}
                >
                  {isInvited && <Check size={13} strokeWidth={3} />}
                  {isInvited ? 'INVITED' : 'INVITE'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="px-6 py-5 border-t border-[#1f2937] flex items-center gap-4">
          <span className={`text-[11px] font-black tracking-widest ${reachedCap ? 'text-[var(--color-neon-orange)]' : 'text-slate-400'}`}>
            {reachedCap ? 'ALL SPOTS FILLED' : `${spotsLeft} ${spotsLeft === 1 ? 'SPOT' : 'SPOTS'} LEFT`}
          </span>
          <button
            onClick={onClose}
            className="flex-1 text-[12px] font-black tracking-widest text-[#090e17] bg-[var(--color-accent)] hover:brightness-110 rounded-xl py-3.5 transition-all shadow-[0_0_18px_rgba(115,211,255,0.2)]"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
}
