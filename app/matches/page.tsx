'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin, Plus, Trophy, Users } from 'lucide-react';
import { PLAYERS } from '../../data/players';

const avatar = (id: number) => PLAYERS.find((p) => p.id === id)?.image ?? '';

const UPCOMING = [
  {
    id: 1,
    sport: 'Padel',
    format: 'Doubles',
    title: 'Padel doubles at XNRGY',
    club: 'Club XNRGY Amsterdam',
    date: 'Today',
    time: '19:00 - 20:30',
    status: 'Confirmed',
    players: [1, 6, 11],
    spots: '3/4 players',
  },
  {
    id: 2,
    sport: 'Tennis',
    format: 'Singles',
    title: 'Evening rally with Alex',
    club: 'Downtown Tennis Club',
    date: 'Tomorrow',
    time: '18:30 - 20:00',
    status: 'Confirmed',
    players: [4],
    spots: '2/2 players',
  },
  {
    id: 3,
    sport: 'Padel',
    format: 'Doubles',
    title: 'Saturday social padel',
    club: 'Blanca Padel',
    date: 'Sat, 21 Jun',
    time: '11:00 - 12:30',
    status: 'Waiting for players',
    players: [3, 12],
    spots: '2/4 players',
  },
];

const PAST = [
  { id: 1, sport: 'Tennis', opponent: 'Daniel P.', club: 'Downtown Tennis Club', date: '14 Jun', result: 'Won', score: '6-4, 7-5' },
  { id: 2, sport: 'Padel', opponent: 'Emma L. & Max F.', club: 'Club XNRGY Amsterdam', date: '11 Jun', result: 'Lost', score: '4-6, 6-7' },
  { id: 3, sport: 'Padel', opponent: 'Mila V. & Noah S.', club: 'Blanca Padel', date: '7 Jun', result: 'Won', score: '6-2, 6-3' },
  { id: 4, sport: 'Tennis', opponent: 'Ben H.', club: 'Downtown Tennis Club', date: '2 Jun', result: 'Won', score: '7-6, 6-4' },
];

export default function MatchesPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

  const wins = PAST.filter((m) => m.result === 'Won').length;
  const winRate = Math.round((wins / PAST.length) * 100);

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          MY MATCHES
        </h1>
        <Link
          href="/explore"
          className="flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-[#090e17] bg-[var(--color-accent)] hover:brightness-110 px-4 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(115,211,255,0.2)]"
        >
          <Plus size={16} />
          FIND A MATCH
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          {/* Tabs */}
          <div className="flex rounded-full bg-[var(--color-dark-card)] border border-[#1f2937] p-1 w-fit mb-6">
            {(['upcoming', 'past'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setTab(option)}
                className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest transition-colors ${
                  tab === option ? 'bg-[var(--color-accent)] text-[#090e17]' : 'text-slate-500 hover:text-white'
                }`}
              >
                {option === 'upcoming' ? 'UPCOMING' : 'RESULTS'}
              </button>
            ))}
          </div>

          {tab === 'upcoming' && (
            <div className="space-y-4">
              {UPCOMING.map((match) => (
                <div
                  key={match.id}
                  className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-[var(--color-accent)]"></div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-[var(--color-cyan-glow)]/10 text-[var(--color-cyan-glow)] border border-[var(--color-cyan-glow)]/20 text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest">
                          {match.sport}
                        </span>
                        <span className="bg-[#090e17] text-slate-400 border border-[#1f2937] text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest">
                          {match.format}
                        </span>
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest border ${
                            match.status === 'Confirmed'
                              ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20'
                              : 'bg-[var(--color-neon-orange)]/10 text-[var(--color-neon-orange)] border-[var(--color-neon-orange)]/20'
                          }`}
                        >
                          {match.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white tracking-wide truncate">{match.title}</h3>
                    </div>
                    <div className="flex -space-x-2 flex-none">
                      {match.players.map((pid) => (
                        <img
                          key={pid}
                          src={avatar(pid)}
                          alt=""
                          className="w-9 h-9 rounded-full object-cover border-2 border-[var(--color-dark-card)]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                    {[
                      { icon: CalendarDays, label: match.date },
                      { icon: Clock, label: match.time },
                      { icon: MapPin, label: match.club },
                      { icon: Users, label: match.spots },
                    ].map((item) => (
                      <div key={item.label} className="bg-[#090e17] border border-[#1f2937] rounded-lg px-3 py-2.5 flex items-center gap-2 min-w-0">
                        <item.icon size={14} className="text-[var(--color-accent)] flex-none" />
                        <span className="text-[10px] text-slate-300 font-bold tracking-wide truncate">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 text-[11px] font-extrabold tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/40 hover:border-[var(--color-accent)] bg-[var(--color-accent)]/5 py-2.5 rounded-lg transition-colors">
                      INVITE PLAYERS
                    </button>
                    <button className="px-6 py-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-extrabold uppercase tracking-widest rounded-lg hover:bg-red-500/20 hover:border-red-500/40 transition-colors">
                      LEAVE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'past' && (
            <div className="space-y-3">
              {PAST.map((match) => {
                const won = match.result === 'Won';
                return (
                  <div
                    key={match.id}
                    className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-5 flex items-center justify-between gap-4 relative overflow-hidden"
                  >
                    <div className={`absolute left-0 top-0 w-1 h-full ${won ? 'bg-[var(--color-accent)]' : 'bg-red-500/60'}`}></div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-[#090e17] text-slate-400 border border-[#1f2937] text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest">
                          {match.sport}
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">{match.date}</span>
                      </div>
                      <p className="font-black text-white tracking-wide text-sm truncate">vs {match.opponent}</p>
                      <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-1">{match.club} · {match.score}</p>
                    </div>
                    <span
                      className={`flex-none text-[10px] px-3 py-1 rounded font-black uppercase tracking-widest border ${
                        won
                          ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20'
                          : 'bg-red-500/10 text-red-400 border-red-500/20'
                      }`}
                    >
                      {match.result}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="text-lg font-black mb-4 text-[var(--color-cyan-glow)] font-[var(--font-urbanist)] uppercase tracking-widest">SUMMARY</h2>

          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 space-y-5 mb-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-cyan-glow)]/5 blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-slate-400 text-[11px] font-bold tracking-widest mb-1">UPCOMING MATCHES</p>
              <p className="text-4xl font-black text-white">{UPCOMING.length}</p>
            </div>
            <div className="border-t border-[#1f2937] pt-5 relative z-10">
              <p className="text-slate-400 text-[11px] font-bold tracking-widest mb-1">MATCHES PLAYED</p>
              <p className="text-4xl font-black text-white">{PAST.length + 20}</p>
            </div>
            <div className="border-t border-[#1f2937] pt-5 relative z-10">
              <p className="text-slate-400 text-[11px] font-bold tracking-widest mb-1">WIN RATE</p>
              <p className="text-4xl font-black text-[var(--color-accent)] drop-shadow-[0_0_8px_rgba(115,211,255,0.2)]">{winRate}%</p>
            </div>
          </div>

          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[var(--color-neon-orange)]/10 blur-xl"></div>
            <Trophy size={26} className="text-[var(--color-neon-orange)] mb-4 relative z-10" />
            <h3 className="text-lg font-black text-white font-[var(--font-urbanist)] relative z-10">Looking for more?</h3>
            <p className="text-slate-400 text-sm font-semibold mt-2 leading-relaxed relative z-10">
              Browse open games near you and join one that fits your level and schedule.
            </p>
            <Link
              href="/explore"
              className="inline-flex mt-5 bg-[var(--color-neon-orange)] text-[#090e17] rounded-lg px-5 py-3 text-[11px] font-black tracking-widest hover:brightness-110 transition relative z-10"
            >
              EXPLORE MATCHES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
