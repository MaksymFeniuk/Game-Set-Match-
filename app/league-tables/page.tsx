'use client';

import { Trophy, TrendingUp } from 'lucide-react';

export default function LeagueTablesPage() {
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
              <div
                key={rank}
                className="px-6 py-4 flex items-center gap-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors cursor-pointer group"
              >
                <div className={`w-8 text-center font-black ${
                  rank <= 3 ? 'text-[var(--color-accent)] drop-shadow-[0_0_8px_rgba(115,211,255,0.3)]' : 'text-slate-500'
                }`}>
                  {rank}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">Player {rank}</p>
                  <p className="text-[10px] font-bold text-slate-500 tracking-wider">LEVEL: ADVANCED</p>
                </div>
                <div className="w-20 text-center font-black text-[var(--color-cyan-glow)]">{2500 - rank * 50}</div>
                <div className="w-20 text-center font-bold text-slate-400">{100 - rank * 5}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tournament Table */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-lg font-black mb-4 text-[var(--color-cyan-glow)] font-[var(--font-urbanist)] uppercase tracking-widest">XNRGY OPEN 2024</h2>
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="bg-[#090e17] px-6 py-4 flex items-center gap-4 border-b border-[#1f2937]">
              <div className="w-8 text-center text-slate-500 font-bold text-xs">#</div>
              <div className="flex-1 text-slate-500 font-bold text-xs tracking-widest">PLAYER</div>
              <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">WINS</div>
              <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">LOSSES</div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((rank) => (
              <div
                key={rank}
                className="px-6 py-4 flex items-center gap-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors cursor-pointer group"
              >
                <div className={`w-8 text-center font-black ${
                  rank <= 3 ? 'text-[var(--color-cyan-glow)] drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]' : 'text-slate-500'
                }`}>
                  {rank}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white group-hover:text-[var(--color-cyan-glow)] transition-colors">Tournament Player {rank}</p>
                </div>
                <div className="w-20 text-center font-black text-[var(--color-accent)]">{9 - rank}</div>
                <div className="w-20 text-center font-black text-red-500">{rank - 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'TOTAL PLAYERS', value: '1,234' },
          { label: 'ACTIVE LEAGUES', value: '8' },
          { label: 'MATCHES THIS WEEK', value: '342' },
          { label: 'TOP RATING', value: '2,850' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 relative overflow-hidden group hover:border-[var(--color-accent)]/40 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-accent)]/10 transition-colors"></div>
            <p className="text-slate-400 text-[10px] font-black tracking-widest mb-2 relative z-10">{stat.label}</p>
            <p className="text-3xl font-black text-white relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
