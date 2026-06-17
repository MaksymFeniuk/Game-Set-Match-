'use client';

import { Trophy } from 'lucide-react';
import Link from 'next/link';
import { PLAYERS, levelLabel } from '../../data/players';

// A player's best (lowest) rating across both sports, plus which sport it's in.
const bestRating = (padel: string, tennis: string) => {
  const p = Number(padel);
  const t = Number(tennis);
  return p <= t
    ? { sport: 'Padel', rating: padel }
    : { sport: 'Tennis', rating: tennis };
};

// Global ranking: strongest players first (lower rating is stronger).
const RANKED = [...PLAYERS].sort(
  (a, b) =>
    Number(bestRating(a.padelLevel, a.tennisLevel).rating) -
    Number(bestRating(b.padelLevel, b.tennisLevel).rating)
);

export default function LeagueTablesPage() {
  const global = RANKED.slice(0, 10);
  const tournament = RANKED.slice(0, 8);

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-4">
          <Trophy size={36} className="text-[var(--color-neon-orange)] drop-shadow-[0_0_15px_rgba(255,107,0,0.4)]" />
          LEAGUE TABLES
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Global Rankings */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-lg font-black mb-4 text-[var(--color-accent)] font-[var(--font-urbanist)] uppercase tracking-widest">GLOBAL RANKINGS</h2>
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="bg-[#090e17] px-6 py-4 flex items-center gap-4 border-b border-[#1f2937]">
              <div className="w-8 text-center text-slate-500 font-bold text-xs">#</div>
              <div className="flex-1 text-slate-500 font-bold text-xs tracking-widest">PLAYER</div>
              <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">RATING</div>
              <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">MATCHES</div>
            </div>
            {global.map((player, idx) => {
              const rank = idx + 1;
              const best = bestRating(player.padelLevel, player.tennisLevel);
              return (
                <Link
                  key={player.id}
                  href={`/players/${player.id}`}
                  className="px-6 py-4 flex items-center gap-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors group"
                >
                  <div className={`w-8 text-center font-black ${
                    rank <= 3 ? 'text-[var(--color-accent)] drop-shadow-[0_0_8px_rgba(115,211,255,0.3)]' : 'text-slate-500'
                  }`}>
                    {rank}
                  </div>
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <img src={player.image} alt={player.name} className="w-9 h-9 rounded-full object-cover border border-[#1f2937] flex-none" />
                    <div className="min-w-0">
                      <p className="font-bold text-white group-hover:text-[var(--color-accent)] transition-colors truncate">{player.name}</p>
                      <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase truncate">{best.sport} · {levelLabel(best.rating)}</p>
                    </div>
                  </div>
                  <div className="w-20 text-center font-black text-[var(--color-cyan-glow)]">{best.rating}</div>
                  <div className="w-20 text-center font-bold text-slate-400">{96 - rank * 4}</div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tournament Table */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-lg font-black mb-4 text-[var(--color-cyan-glow)] font-[var(--font-urbanist)] uppercase tracking-widest">XNRGY OPEN 2026</h2>
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="bg-[#090e17] px-6 py-4 flex items-center gap-4 border-b border-[#1f2937]">
              <div className="w-8 text-center text-slate-500 font-bold text-xs">#</div>
              <div className="flex-1 text-slate-500 font-bold text-xs tracking-widest">PLAYER</div>
              <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">WINS</div>
              <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">LOSSES</div>
            </div>
            {tournament.map((player, idx) => {
              const rank = idx + 1;
              return (
                <Link
                  key={player.id}
                  href={`/players/${player.id}`}
                  className="px-6 py-4 flex items-center gap-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors group"
                >
                  <div className={`w-8 text-center font-black ${
                    rank <= 3 ? 'text-[var(--color-cyan-glow)] drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]' : 'text-slate-500'
                  }`}>
                    {rank}
                  </div>
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <img src={player.image} alt={player.name} className="w-9 h-9 rounded-full object-cover border border-[#1f2937] flex-none" />
                    <p className="font-bold text-white group-hover:text-[var(--color-cyan-glow)] transition-colors truncate">{player.name}</p>
                  </div>
                  <div className="w-20 text-center font-black text-[var(--color-accent)]">{9 - rank}</div>
                  <div className="w-20 text-center font-black text-red-500">{rank - 1}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'TOTAL PLAYERS', value: '1,234' },
          { label: 'ACTIVE LEAGUES', value: '8' },
          { label: 'MATCHES THIS WEEK', value: '342' },
          { label: 'TOP RATING', value: bestRating(RANKED[0].padelLevel, RANKED[0].tennisLevel).rating },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl"></div>
            <p className="text-slate-400 text-[10px] font-black tracking-widest mb-2 relative z-10">{stat.label}</p>
            <p className="text-3xl font-black text-white relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
