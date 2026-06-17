'use client';

import { Edit, Trophy, Calendar } from 'lucide-react';

// Dutch-style rating: lower is stronger. 1-4 Advanced, 5-7 Intermediate, 8+ Beginner.
const levelLabel = (level: string) => {
  const value = Number(level);
  if (value <= 4) return 'Advanced';
  if (value <= 7) return 'Intermediate';
  return 'Beginner';
};

const PADEL_RATING = '3.5';
const TENNIS_RATING = '5.0';

export default function ProfilePage() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">MY PROFILE</h1>
        <button className="flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-black bg-[var(--color-accent)] hover:brightness-110 px-4 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(115,211,255,0.2)]">
          <Edit size={16} />
          EDIT PROFILE
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Profile Info */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1f2937] to-transparent"></div>
            <div className="relative z-10">
              <div className="w-28 h-28 bg-[#090e17] rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-[var(--color-accent)] shadow-[0_0_20px_rgba(115,211,255,0.3)] overflow-hidden">
                <img src="/maksymfeniuk.jpg" alt="Maksym Feniuk" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-black text-center mb-3 text-white tracking-wide">Maksym Feniuk</h2>
              <div className="flex justify-center gap-2 mb-6">
                <span className="bg-[var(--color-cyan-glow)]/10 text-[var(--color-cyan-glow)] border border-[var(--color-cyan-glow)]/20 text-[9px] px-2.5 py-1 rounded font-black uppercase tracking-widest">
                  Padel {PADEL_RATING}
                </span>
                <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-[9px] px-2.5 py-1 rounded font-black uppercase tracking-widest">
                  Tennis {TENNIS_RATING}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest mb-1.5">PADEL</p>
                  <p className="text-2xl font-black text-[var(--color-cyan-glow)] tracking-wider">{PADEL_RATING}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{levelLabel(PADEL_RATING)}</p>
                </div>
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest mb-1.5">TENNIS</p>
                  <p className="text-2xl font-black text-[var(--color-accent)] tracking-wider">{TENNIS_RATING}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{levelLabel(TENNIS_RATING)}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4 flex justify-between items-center group hover:border-[var(--color-cyan-glow)]/50 transition-colors">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest">JOINED</p>
                  <p className="text-sm font-bold text-white">6 months ago</p>
                </div>
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4 flex justify-between items-center group hover:border-[var(--color-cyan-glow)]/50 transition-colors">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest">MATCHES</p>
                  <p className="text-sm font-bold text-white">24</p>
                </div>
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4 flex justify-between items-center group hover:border-[var(--color-accent)]/50 transition-colors">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest">WIN RATE</p>
                  <p className="text-lg font-black text-[var(--color-accent)]">65%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Info */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
              <h3 className="text-lg font-black text-white font-[var(--font-urbanist)] uppercase tracking-widest">PERFORMANCE</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Form reads right to left</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: 'Padel rating', value: PADEL_RATING, color: 'text-[var(--color-cyan-glow)]' },
                { label: 'Tennis rating', value: TENNIS_RATING, color: 'text-[var(--color-accent)]' },
                { label: 'Streak', value: 'W3', color: 'text-[var(--color-neon-orange)]' },
                { label: 'Form', value: 'W W W L W', color: 'text-[var(--color-accent)]' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#090e17] border border-[#1f2937] rounded-xl p-5 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors`}></div>
                  <p className="text-slate-500 text-[10px] font-black tracking-widest mb-2 uppercase">{stat.label}</p>
                  <p className={`text-2xl font-black ${stat.color} tracking-wider`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-black mb-6 text-white font-[var(--font-urbanist)] uppercase tracking-widest flex items-center gap-3">
              <Calendar size={20} className="text-[var(--color-cyan-glow)]" />
              RECENT MATCHES
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((match) => (
                <div key={match} className="bg-[#090e17] border border-[#1f2937] rounded-xl p-5 flex items-center justify-between relative overflow-hidden">
                   <div className="absolute left-0 top-0 w-1 h-full bg-[var(--color-accent)]"></div>
                  <div>
                    <p className="font-black text-white tracking-wide text-sm mb-1">Match vs Player {match}</p>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">3 days ago • 6-4, 7-5</p>
                  </div>
                  <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-[10px] px-3 py-1 rounded font-black uppercase tracking-widest shadow-[0_0_10px_rgba(115,211,255,0.1)]">WON</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-black mb-6 text-white font-[var(--font-urbanist)] uppercase tracking-widest flex items-center gap-3">
              <Trophy size={20} className="text-[var(--color-neon-orange)]" />
              ACHIEVEMENTS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((badge) => (
                <div key={badge} className="bg-[#090e17] border border-[#1f2937] rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-[var(--color-neon-orange)]/10 rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,107,0,0.1)]">
                    <Trophy size={24} className="text-[var(--color-neon-orange)]" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 text-center tracking-widest uppercase">Badge {badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
