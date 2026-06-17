'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, MessageCircle, Trophy, UserPlus, Users } from 'lucide-react';
import { PLAYERS } from '../../../data/players';

const levelLabel = (level: string) => {
  const value = Number(level);
  if (value >= 4) return 'Advanced';
  if (value >= 3) return 'Intermediate';
  return 'Beginner';
};

// Derive stable, varied stats from the player id so the profile feels populated.
const playerStats = (id: number) => {
  const matches = 12 + id * 3;
  const winRate = 48 + ((id * 7) % 42);
  const streak = (id % 4) + 1;
  const rating = (id % 5) + 1;
  return { matches, winRate, streak, rating };
};

export default function PlayerProfilePage() {
  const params = useParams();
  const id = Number(params.id);
  const player = PLAYERS.find((p) => p.id === id);

  const [following, setFollowing] = useState(false);

  if (!player) {
    return (
      <div className="p-8 max-w-[1400px] mx-auto min-h-full flex flex-col items-center justify-center text-center">
        <p className="text-lg font-black text-white tracking-wide">Player not found</p>
        <p className="text-sm font-bold text-slate-500 mt-2">This player may have left the club.</p>
        <Link
          href="/explore"
          className="mt-6 text-[11px] font-black tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 rounded-lg px-5 py-3 hover:border-[var(--color-accent)] transition-colors"
        >
          BACK TO EXPLORE
        </Link>
      </div>
    );
  }

  const stats = playerStats(player.id);

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-full">
      <Link
        href="/explore"
        className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-slate-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        BACK TO EXPLORE
      </Link>

      <div className="grid grid-cols-12 gap-8">
        {/* Profile Info */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1f2937] to-transparent"></div>
            <div className="relative z-10">
              <div className="w-28 h-28 bg-[#090e17] rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-[var(--color-accent)] shadow-[0_0_20px_rgba(115,211,255,0.3)] overflow-hidden">
                <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-black text-center mb-1 text-white tracking-wide">{player.name}</h2>
              <p className="text-[var(--color-accent)] text-[10px] font-bold text-center mb-6 tracking-widest uppercase">
                {player.sport} · Level {player.level} · {levelLabel(player.level)}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {player.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-black tracking-widest text-slate-400 bg-[#090e17] border border-[#1f2937] rounded-full px-2.5 py-1"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setFollowing((prev) => !prev)}
                className={`w-full text-[11px] font-black tracking-widest rounded-lg py-3 transition-all ${
                  following
                    ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)]'
                    : 'bg-[var(--color-cyan-glow)] text-[#090e17] hover:brightness-110'
                }`}
              >
                {following ? 'FOLLOWING' : 'FOLLOW'}
              </button>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 rounded-lg py-2.5 hover:border-[var(--color-accent)] transition-colors">
                  <UserPlus size={14} />
                  CHALLENGE
                </button>
                <button className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-slate-300 border border-[#1f2937] bg-[#090e17] rounded-lg py-2.5 hover:text-white hover:border-slate-600 transition-colors">
                  <MessageCircle size={14} />
                  MESSAGE
                </button>
              </div>

              <div className="space-y-3 mt-6">
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4 flex justify-between items-center">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest flex items-center gap-2">
                    <MapPin size={13} className="text-[var(--color-accent)]" /> DISTANCE
                  </p>
                  <p className="text-sm font-bold text-white">{player.distance}</p>
                </div>
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4 flex justify-between items-center">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest flex items-center gap-2">
                    <Users size={13} className="text-[var(--color-accent)]" /> FOLLOWERS
                  </p>
                  <p className="text-sm font-bold text-white">{player.followers}</p>
                </div>
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4 flex justify-between items-center">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest">MATCHES</p>
                  <p className="text-sm font-bold text-white">{stats.matches}</p>
                </div>
                <div className="bg-[#090e17] border border-[#1f2937] rounded-lg p-4 flex justify-between items-center">
                  <p className="text-slate-500 text-[10px] font-black tracking-widest">WIN RATE</p>
                  <p className="text-lg font-black text-[var(--color-accent)]">{stats.winRate}%</p>
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
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Rating', value: String(stats.rating), color: 'text-[var(--color-cyan-glow)]' },
                { label: 'Streak', value: `W${stats.streak}`, color: 'text-[var(--color-neon-orange)]' },
                { label: 'Form', value: 'W W L W W', color: 'text-[var(--color-accent)]' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#090e17] border border-[#1f2937] rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-2xl"></div>
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
                    <p className="font-black text-white tracking-wide text-sm mb-1">{player.sport} match · Opponent {match}</p>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">{match * 2} days ago • 6-4, 7-5</p>
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
