'use client';

import { useState } from 'react';
import { Trophy } from 'lucide-react';
import Link from 'next/link';
import { PLAYERS, levelLabel, Player } from '../../data/players';

const GENDER_FILTERS = ['All', 'Men', 'Women'] as const;
type GenderFilter = (typeof GENDER_FILTERS)[number];

// A player's best (lowest) rating across both sports.
const bestRating = (player: Player) => Math.min(Number(player.padelLevel), Number(player.tennisLevel));

function RankingTable({
  title,
  accent,
  players,
  ratingKey,
}: {
  title: string;
  accent: string;
  players: Player[];
  ratingKey: 'padelLevel' | 'tennisLevel';
}) {
  return (
    <div className="col-span-12 lg:col-span-6">
      <h2 className="text-lg font-black mb-4 font-[var(--font-urbanist)] uppercase tracking-widest" style={{ color: accent }}>
        {title}
      </h2>
      <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="bg-[#090e17] px-6 py-4 flex items-center gap-4 border-b border-[#1f2937]">
          <div className="w-8 text-center text-slate-500 font-bold text-xs">#</div>
          <div className="flex-1 text-slate-500 font-bold text-xs tracking-widest">PLAYER</div>
          <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">RATING</div>
        </div>
        {players.length === 0 && (
          <p className="text-center text-xs font-bold text-slate-500 tracking-widest uppercase py-8">No players</p>
        )}
        {players.slice(0, 10).map((player, idx) => {
          const rank = idx + 1;
          const rating = player[ratingKey];
          return (
            <Link
              key={player.id}
              href={`/players/${player.id}`}
              className="px-6 py-4 flex items-center gap-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors group"
            >
              <div
                className={`w-8 text-center font-black ${rank > 3 ? 'text-slate-500' : ''}`}
                style={rank <= 3 ? { color: accent } : undefined}
              >
                {rank}
              </div>
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <img src={player.image} alt={player.name} className="w-9 h-9 rounded-full object-cover border border-[#1f2937] flex-none" />
                <div className="min-w-0">
                  <p className="font-bold text-white group-hover:text-[var(--color-accent)] transition-colors truncate">{player.name}</p>
                  <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase truncate">{levelLabel(rating)}</p>
                </div>
              </div>
              <div className="w-20 text-center font-black" style={{ color: accent }}>{rating}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function LeagueTablesPage() {
  const [gender, setGender] = useState<GenderFilter>('All');

  const byGender = PLAYERS.filter(
    (player) => gender === 'All' || (gender === 'Men' ? player.gender === 'M' : player.gender === 'F')
  );

  // Rank each sport separately (lower rating is stronger).
  const padelRanked = [...byGender].sort((a, b) => Number(a.padelLevel) - Number(b.padelLevel));
  const tennisRanked = [...byGender].sort((a, b) => Number(a.tennisLevel) - Number(b.tennisLevel));

  // XNRGY Open standings: top 8 by overall strength.
  const tournament = [...byGender].sort((a, b) => bestRating(a) - bestRating(b)).slice(0, 8);

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-4">
          <Trophy size={36} className="text-[var(--color-neon-orange)] drop-shadow-[0_0_15px_rgba(255,107,0,0.4)]" />
          LEAGUE TABLES
        </h1>

        <div className="flex rounded-full bg-[var(--color-dark-card)] border border-[#1f2937] p-1">
          {GENDER_FILTERS.map((option) => (
            <button
              key={option}
              onClick={() => setGender(option)}
              className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest transition-colors ${
                gender === option ? 'bg-[var(--color-accent)] text-[#090e17]' : 'text-slate-500 hover:text-white'
              }`}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <RankingTable title="Padel Rankings" accent="var(--color-cyan-glow)" players={padelRanked} ratingKey="padelLevel" />
        <RankingTable title="Tennis Rankings" accent="var(--color-accent)" players={tennisRanked} ratingKey="tennisLevel" />
      </div>

      {/* XNRGY Open tournament */}
      <div className="mt-8">
        <h2 className="text-lg font-black mb-4 text-[var(--color-neon-orange)] font-[var(--font-urbanist)] uppercase tracking-widest">
          XNRGY OPEN 2026
        </h2>
        <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="bg-[#090e17] px-6 py-4 flex items-center gap-4 border-b border-[#1f2937]">
            <div className="w-8 text-center text-slate-500 font-bold text-xs">#</div>
            <div className="flex-1 text-slate-500 font-bold text-xs tracking-widest">PLAYER</div>
            <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">WINS</div>
            <div className="w-20 text-center text-slate-500 font-bold text-xs tracking-widest">LOSSES</div>
          </div>
          {tournament.length === 0 && (
            <p className="text-center text-xs font-bold text-slate-500 tracking-widest uppercase py-8">No players</p>
          )}
          {tournament.map((player, idx) => {
            const rank = idx + 1;
            const wins = 9 - rank;
            const losses = rank - 1;
            return (
              <Link
                key={player.id}
                href={`/players/${player.id}`}
                className="px-6 py-4 flex items-center gap-4 border-b border-[#1f2937] hover:bg-[#090e17]/80 transition-colors group"
              >
                <div className={`w-8 text-center font-black ${rank <= 3 ? 'text-[var(--color-neon-orange)] drop-shadow-[0_0_8px_rgba(255,107,0,0.3)]' : 'text-slate-500'}`}>
                  {rank}
                </div>
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img src={player.image} alt={player.name} className="w-9 h-9 rounded-full object-cover border border-[#1f2937] flex-none" />
                  <p className="font-bold text-white group-hover:text-[var(--color-neon-orange)] transition-colors truncate">{player.name}</p>
                </div>
                <div className="w-20 text-center font-black text-[var(--color-accent)]">{wins}</div>
                <div className="w-20 text-center font-black text-red-500">{losses}</div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'TOTAL PLAYERS', value: '1,234' },
          { label: 'TOP PADEL', value: padelRanked[0] ? padelRanked[0].padelLevel : '–' },
          { label: 'TOP TENNIS', value: tennisRanked[0] ? tennisRanked[0].tennisLevel : '–' },
          { label: 'MATCHES THIS WEEK', value: '342' },
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
