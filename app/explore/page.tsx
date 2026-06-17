'use client';

import { useState } from 'react';
import {
  Clock,
  MapPin,
  MessageCircle,
  Plus,
  Trophy,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react';

const OPEN_MATCHES = [
  {
    id: 1,
    sport: 'Padel',
    format: 'Doubles',
    title: 'Padel doubles at XNRGY',
    level: 'Level 3.5 - 4.5',
    club: 'Club XNRGY Amsterdam',
    time: 'Today, 19:00',
    players: '3/4 players',
    price: 'EUR 8 split',
    vibe: 'Competitive but friendly',
    host: 'Mila V.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    sport: 'Tennis',
    format: 'Singles',
    title: 'Evening rally partner',
    level: 'Level 4.0+',
    club: 'Downtown Tennis Club',
    time: 'Tomorrow, 18:30',
    players: '1/2 players',
    price: 'Court booked',
    vibe: 'Drills then a set',
    host: 'Alex R.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    sport: 'Padel',
    format: 'Doubles',
    title: 'Beginner-friendly padel',
    level: 'Level 2.0 - 3.0',
    club: 'Blanca Padel',
    time: 'Saturday, 11:00',
    players: '2/4 players',
    price: 'EUR 11 split',
    vibe: 'Social first',
    host: 'Noah S.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
  },
];

const PLAYERS = [
  {
    id: 1,
    name: 'Sarah K.',
    sport: 'Padel',
    level: '4.1',
    distance: '1.8 km',
    followers: '128',
    tags: ['Evenings', 'Doubles', 'Competitive'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Ben H.',
    sport: 'Tennis',
    level: '4.3',
    distance: '2.4 km',
    followers: '96',
    tags: ['Singles', 'Weekends', 'League'],
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Mila V.',
    sport: 'Padel',
    level: '3.8',
    distance: '3.1 km',
    followers: '174',
    tags: ['Social', 'Mixed', 'After work'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=220&auto=format&fit=crop&q=80',
  },
];

const CLUBS = [
  { name: 'Club XNRGY Amsterdam', sports: 'Padel + Tennis', open: '6 courts open', distance: '1.2 km' },
  { name: 'Blanca Padel', sports: 'Padel', open: '3 courts open', distance: '2.8 km' },
  { name: 'Downtown Tennis Club', sports: 'Tennis', open: '2 courts open', distance: '3.4 km' },
];

export default function ExplorePage() {
  const [sport, setSport] = useState('All');
  const [following, setFollowing] = useState<number[]>([1]);

  const matches = sport === 'All' ? OPEN_MATCHES : OPEN_MATCHES.filter((match) => match.sport === sport);

  const toggleFollow = (id: number) => {
    setFollowing((current) =>
      current.includes(id) ? current.filter((playerId) => playerId !== id) : [...current, id]
    );
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto min-h-full">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            EXPLORE MATCHES
          </h1>
          <p className="text-slate-400 text-sm font-semibold tracking-wide mt-2">
            Join open games, follow nearby players, and find courts for your next match.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 text-[11px] font-extrabold tracking-widest text-[#090e17] bg-[var(--color-cyan-glow)] hover:brightness-110 px-5 py-3 rounded-lg transition-all shadow-[0_0_18px_rgba(0,255,255,0.22)]">
          <Plus size={16} />
          CREATE MATCH
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 xl:col-span-7 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-black text-[var(--color-cyan-glow)] font-[var(--font-urbanist)] uppercase tracking-widest">
              OPEN MATCHES
            </h2>
            <div className="flex rounded-full bg-[#121826] border border-[#1f2937] p-1">
              {['All', 'Padel', 'Tennis'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSport(option)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-colors ${
                    sport === option
                      ? 'bg-[var(--color-cyan-glow)] text-[#090e17]'
                      : 'text-slate-500 hover:text-white'
                  }`}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {matches.map((match) => (
              <article
                key={match.id}
                className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-5 relative overflow-hidden hover:border-[var(--color-cyan-glow)]/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-[var(--color-cyan-glow)]"></div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <img
                      src={match.avatar}
                      alt={match.host}
                      className="w-14 h-14 rounded-xl object-cover border border-[#1f2937]"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-[var(--color-cyan-glow)]/10 text-[var(--color-cyan-glow)] border border-[var(--color-cyan-glow)]/20 text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest">
                          {match.sport}
                        </span>
                        <span className="bg-[#090e17] text-slate-400 border border-[#1f2937] text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest">
                          {match.format}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white tracking-wide">{match.title}</h3>
                      <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-widest">
                        Hosted by {match.host} · {match.vibe}
                      </p>
                    </div>
                  </div>

                  <button className="md:w-32 text-[11px] font-extrabold tracking-widest text-[#090e17] bg-[var(--color-cyan-glow)] hover:brightness-110 px-4 py-3 rounded-lg transition-all">
                    JOIN MATCH
                  </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-5">
                  {[
                    { icon: Trophy, label: match.level },
                    { icon: MapPin, label: match.club },
                    { icon: Clock, label: match.time },
                    { icon: Users, label: match.players },
                    { icon: Zap, label: match.price },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#090e17] border border-[#1f2937] rounded-lg px-3 py-3 flex items-center gap-2 min-w-0">
                      <item.icon size={14} className="text-[var(--color-accent)] flex-none" />
                      <span className="text-[10px] text-slate-300 font-bold tracking-wide truncate">{item.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="col-span-12 xl:col-span-5 space-y-8">
          <div>
            <h2 className="text-lg font-black mb-4 text-[var(--color-accent)] font-[var(--font-urbanist)] uppercase tracking-widest">
              PLAYERS TO FOLLOW
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-4">
              {PLAYERS.map((player) => {
                const isFollowing = following.includes(player.id);

                return (
                  <article
                    key={player.id}
                    className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-4 hover:border-[var(--color-accent)]/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-14 h-14 rounded-xl object-cover border border-[#1f2937]"
                        />
                        <div className="min-w-0">
                          <h3 className="text-sm font-black text-white tracking-wide truncate">{player.name}</h3>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                            {player.sport} · Level {player.level} · {player.distance}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFollow(player.id)}
                        className={`px-3 py-2 rounded-lg text-[10px] font-black tracking-widest transition-colors ${
                          isFollowing
                            ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30'
                            : 'bg-[var(--color-cyan-glow)] text-[#090e17]'
                        }`}
                      >
                        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {player.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-black tracking-widest text-slate-400 bg-[#090e17] border border-[#1f2937] rounded-full px-2.5 py-1">
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 rounded-lg py-2.5 hover:border-[var(--color-accent)] transition-colors">
                        <UserPlus size={14} />
                        CHALLENGE
                      </button>
                      <button className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-slate-300 border border-[#1f2937] bg-[#090e17] rounded-lg py-2.5 hover:text-white hover:border-slate-600 transition-colors">
                        <MessageCircle size={14} />
                        MESSAGE
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-black mb-4 text-[var(--color-neon-orange)] font-[var(--font-urbanist)] uppercase tracking-widest">
              NEARBY COURTS
            </h2>
            <div className="space-y-3">
              {CLUBS.map((club) => (
                <article
                  key={club.name}
                  className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-4 flex items-center justify-between gap-4 hover:border-[var(--color-neon-orange)]/50 transition-colors"
                >
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-white uppercase tracking-wide truncate">{club.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                      {club.sports} · {club.open} · {club.distance}
                    </p>
                  </div>
                  <button className="flex-none text-[10px] font-black tracking-widest text-[var(--color-neon-orange)] border border-[var(--color-neon-orange)]/30 bg-[var(--color-neon-orange)]/5 rounded-lg px-3 py-2 hover:border-[var(--color-neon-orange)] transition-colors">
                    BOOK
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6">
            <h2 className="text-lg font-black mb-5 text-white font-[var(--font-urbanist)] uppercase tracking-widest">
              QUICK MATCH
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {['Padel', 'Tennis', 'Tonight', 'This weekend'].map((option) => (
                <button
                  key={option}
                  className="bg-[#090e17] border border-[#1f2937] rounded-lg py-3 text-[10px] font-black tracking-widest text-slate-300 hover:text-white hover:border-[var(--color-cyan-glow)]/50 transition-colors"
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="w-full mt-4 text-[11px] font-black tracking-widest text-[#090e17] bg-[var(--color-accent)] hover:brightness-110 rounded-lg py-3 transition-all">
              FIND MY MATCH
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
