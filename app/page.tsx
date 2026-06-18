'use client';

import Link from 'next/link';
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
  Search,
  Trophy,
  Users,
} from 'lucide-react';

const QUICK_ACTIONS = [
  { label: 'Find a match', icon: Search, href: '/explore' },
  { label: 'My matches', icon: CalendarDays, href: '/matches' },
  { label: 'Compete', icon: Trophy, href: '/league-tables' },
  { label: 'Learn', icon: GraduationCap, href: '/help' },
];

const CLUBS = [
  {
    name: 'Club XNRGY Eindhoven',
    distance: '1.2km',
    area: 'Eindhoven Oost',
    activity: '6 open courts',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=900&auto=format&fit=crop&q=80',
  },
  {
    name: 'Blanca Padel',
    distance: '2.8km',
    area: 'Eindhoven Zuid',
    activity: '3 open matches',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=900&auto=format&fit=crop&q=80',
  },
  {
    name: 'Downtown Tennis Club',
    distance: '3.4km',
    area: 'Centrum',
    activity: '4 players nearby',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34f8?w=900&auto=format&fit=crop&q=80',
  },
];

const MATCHES = [
  { sport: 'Padel', title: 'Casual doubles', place: 'Club XNRGY', time: 'Today 19:00', players: '3/4' },
  { sport: 'Tennis', title: 'Singles rally', place: 'Downtown TC', time: 'Tomorrow 18:30', players: '1/2' },
  { sport: 'Padel', title: 'Beginner mix', place: 'Blanca Padel', time: 'Sat 11:00', players: '2/4' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-full p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        <section className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden relative shadow-[0_0_35px_rgba(0,0,0,0.35)]">
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-[var(--color-accent)]/5 blur-3xl"></div>
          <div className="absolute -right-20 bottom-0 w-72 h-72 bg-[var(--color-cyan-glow)]/5 blur-3xl"></div>

          <div className="grid grid-cols-12 gap-8 items-center relative z-10">
            <div className="col-span-12 xl:col-span-6 p-7 md:p-10">
              <p className="text-[10px] font-black tracking-[0.35em] uppercase text-[var(--color-cyan-glow)] mb-5">
                Matchmaking hub
              </p>
              <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-wide text-white font-[var(--font-urbanist)] max-w-2xl">
                Find courts and <span className="text-[var(--color-cyan-glow)] italic">players</span> near you
              </h1>
              <p className="text-base md:text-lg font-semibold text-slate-400 mt-6 max-w-xl leading-relaxed">
                Join open tennis and padel matches, meet people at your level, and choose the club that fits the game.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center bg-[var(--color-cyan-glow)] text-[#090e17] text-[11px] font-black tracking-widest rounded-lg px-6 py-3.5 hover:brightness-110 transition"
                >
                  FIND A MATCH
                </Link>
                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5 text-[11px] font-black tracking-widest rounded-lg px-6 py-3.5 hover:border-[var(--color-accent)] transition"
                >
                  FOLLOW PLAYERS
                </Link>
              </div>
            </div>

            <div className="col-span-12 xl:col-span-6 p-5 xl:pl-0">
              <div className="relative h-[300px] md:h-[420px] rounded-xl overflow-hidden border border-[#1f2937] bg-[#090e17]">
                <img
                  src="https://padelx.club/cdn/shop/files/group_padel_players.png?v=1763547694&width=1600"
                  alt="Happy padel players standing together with rackets"
                  className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121826]/70 via-transparent to-transparent"></div>
                <div className="absolute left-5 bottom-5 bg-[#090e17]/85 border border-[#1f2937] rounded-lg px-4 py-3 backdrop-blur">
                  <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1">Tonight nearby</p>
                  <p className="text-sm font-black text-white">12 open match spots</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl px-5 md:px-7 py-6">
          <h2 className="text-xl md:text-2xl font-black text-white mb-6 font-[var(--font-urbanist)] uppercase tracking-widest">
            Ready for your next game, Maksym?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group bg-[#090e17] border border-[#1f2937] rounded-xl p-5 flex items-center gap-4 hover:border-[var(--color-cyan-glow)]/50 transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-[var(--color-cyan-glow)] text-[#090e17] flex items-center justify-center flex-none group-hover:scale-105 transition-transform">
                  <action.icon size={23} strokeWidth={2} />
                </span>
                <span className="text-sm md:text-base font-black text-slate-200 tracking-wide">{action.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-12 xl:col-span-8 space-y-8">
            <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden relative">
              <div className="grid md:grid-cols-2">
                <div className="p-7 md:p-8 relative z-10">
                  <span className="inline-flex bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-[9px] px-2 py-1 rounded font-black uppercase tracking-widest mb-5">
                    Social matchmaking
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white font-[var(--font-urbanist)] leading-tight">
                    Find casual matches
                  </h2>
                  <p className="text-sm md:text-base font-semibold text-slate-400 mt-4 leading-relaxed max-w-lg">
                    Meet new players without the awkward group-chat hunt. Pick a sport, join a slot, and play.
                  </p>
                  <Link
                    href="/explore"
                    className="inline-flex mt-7 bg-[var(--color-cyan-glow)] text-[#090e17] text-[11px] font-black tracking-widest rounded-lg px-6 py-3 hover:brightness-110 transition"
                  >
                    GET STARTED
                  </Link>
                </div>
                <div className="relative min-h-[260px] bg-[#090e17]">
                  <img
                    src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=900&auto=format&fit=crop&q=80"
                    alt="Padel court with players"
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-card)] via-[var(--color-dark-card)]/25 to-transparent"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-[22px] font-black text-white font-[var(--font-urbanist)] uppercase tracking-widest">
                    Suggested clubs
                  </h2>
                  <p className="text-slate-500 text-sm font-semibold mt-1">Places with courts, players, and activity nearby.</p>
                </div>
                <Link href="/explore" className="text-[var(--color-accent)] text-xs font-black tracking-widest hover:text-white transition-colors">
                  SEE ALL
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {CLUBS.map((club) => (
                  <article
                    key={club.name}
                    className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl overflow-hidden hover:border-[var(--color-accent)]/50 transition-colors"
                  >
                    <div className="relative h-44">
                      <img src={club.image} alt={club.name} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-[#090e17]/25 to-transparent"></div>
                      <div className="absolute left-4 right-4 bottom-4">
                        <h3 className="text-lg font-black text-white leading-tight">{club.name}</h3>
                        <p className="text-xs font-bold text-slate-300 mt-1">
                          {club.distance} - {club.area}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                        Next 14 days
                      </p>
                      <div className="flex items-center justify-between rounded-lg bg-[#090e17] border border-[#1f2937] px-3 py-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] flex-none">
                            <Users size={18} />
                          </span>
                          <span className="text-sm font-black text-slate-200 truncate">{club.activity}</span>
                        </div>
                        <span className="text-xl leading-none text-slate-500">›</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="col-span-12 xl:col-span-4 space-y-6">
            <section className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[22px] font-black text-white font-[var(--font-urbanist)] uppercase tracking-widest">Open matches</h2>
                <Link href="/explore" className="text-[var(--color-accent)] text-xs font-black tracking-widest hover:text-white transition-colors">
                  EXPLORE
                </Link>
              </div>

              <div className="space-y-3">
                {MATCHES.map((match) => (
                  <article key={`${match.title}-${match.time}`} className="rounded-xl border border-[#1f2937] bg-[#090e17] p-4 hover:border-[var(--color-cyan-glow)]/50 transition-colors">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-[9px] font-black tracking-widest text-[var(--color-cyan-glow)] bg-[var(--color-cyan-glow)]/10 border border-[var(--color-cyan-glow)]/20 rounded px-2 py-1">
                        {match.sport.toUpperCase()}
                      </span>
                      <span className="text-[10px] font-black tracking-widest text-slate-500">{match.players} PLAYERS</span>
                    </div>
                    <h3 className="text-base font-black text-white">{match.title}</h3>
                    <div className="mt-3 space-y-2 text-xs font-bold text-slate-400">
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-[var(--color-accent)]" />
                        {match.place}
                      </p>
                      <p className="flex items-center gap-2">
                        <CalendarDays size={14} className="text-[var(--color-neon-orange)]" />
                        {match.time}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 overflow-hidden relative">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[var(--color-neon-orange)]/10 blur-xl"></div>
              <div className="relative z-10">
                <BookOpen size={28} className="text-[var(--color-neon-orange)] mb-5" />
                <h2 className="text-2xl font-black text-white font-[var(--font-urbanist)]">New to padel?</h2>
                <p className="text-slate-400 text-sm font-semibold mt-3 leading-relaxed">
                  Follow local players, join beginner sessions, and build your match circle one game at a time.
                </p>
                <Link
                  href="/explore"
                  className="inline-flex mt-6 bg-[var(--color-neon-orange)] text-[#090e17] rounded-lg px-5 py-3 text-[11px] font-black tracking-widest hover:brightness-110 transition"
                >
                  FIND PLAYERS
                </Link>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </div>
  );
}
