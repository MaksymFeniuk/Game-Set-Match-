'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  MapPin,
  Plus,
  SlidersHorizontal,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import FilterDropdown from '../../components/FilterDropdown';
import WhenFilterModal, { DayOption } from '../../components/WhenFilterModal';
import WhereFilterModal, { ClubOption } from '../../components/WhereFilterModal';
import { PLAYERS } from '../../data/players';

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

const CLUBS = [
  { name: 'Club XNRGY Amsterdam', sports: 'Padel + Tennis', open: '6 courts open', distance: '1.2 km' },
  { name: 'Blanca Padel', sports: 'Padel', open: '3 courts open', distance: '2.8 km' },
  { name: 'Downtown Tennis Club', sports: 'Tennis', open: '2 courts open', distance: '3.4 km' },
];

const CLUB_OPTIONS: ClubOption[] = [
  {
    name: 'Club XNRGY Amsterdam',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Blanca Padel',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Downtown Tennis Club',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34f8?w=400&auto=format&fit=crop&q=80',
  },
];

const SPORT_OPTIONS = ['All sports', 'Padel', 'Tennis'];

const WD_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const WD_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Builds the next 7 days starting from today for the "When" day picker.
const buildWeek = (): DayOption[] => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return {
      key: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      wd: WD_SHORT[date.getDay()],
      full: WD_FULL[date.getDay()],
      d: date.getDate(),
      mo: MONTHS[date.getMonth()],
    };
  });
};

// Pulls the start hour out of a match time string like "Today, 19:00".
const getHour = (time: string) => {
  const match = time.match(/(\d{1,2}):\d{2}/);
  return match ? Number(match[1]) : null;
};

export default function ExplorePage() {
  const [week] = useState<DayOption[]>(buildWeek);

  // Sport
  const [sport, setSport] = useState('All sports');

  // When
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [timeMode, setTimeMode] = useState('All day');
  const [specificFrom, setSpecificFrom] = useState(18);
  const [specificTo, setSpecificTo] = useState(24);

  // Where
  const [location, setLocation] = useState('Around me');
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);
  const [recent, setRecent] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [useDistance, setUseDistance] = useState(false);
  const [distance, setDistance] = useState(15);

  const [openModal, setOpenModal] = useState<null | 'when' | 'where'>(null);
  const [following, setFollowing] = useState<number[]>([1]);

  // Resolves a match's time string to one of the day keys in the picker.
  const matchDayKey = (time: string) => {
    if (time.includes('Today')) return week[0]?.key;
    if (time.includes('Tomorrow')) return week[1]?.key;
    const weekday = time.split(',')[0].trim();
    return week.find((day) => day.full === weekday)?.key;
  };

  const matchesTime = (time: string) => {
    if (timeMode === 'All day') return true;
    const hour = getHour(time);
    if (hour === null) return false;
    if (timeMode === 'Morning') return hour >= 6 && hour < 12;
    if (timeMode === 'Afternoon') return hour >= 12 && hour < 18;
    if (timeMode === 'Evening') return hour >= 18;
    if (timeMode === 'Specific hours') return hour >= specificFrom && hour < specificTo;
    return true;
  };

  const matches = OPEN_MATCHES.filter((match) => {
    if (sport !== 'All sports' && match.sport !== sport) return false;
    if (selectedDays.length > 0) {
      const key = matchDayKey(match.time);
      if (!key || !selectedDays.includes(key)) return false;
    }
    if (!matchesTime(match.time)) return false;
    if (selectedClubs.length > 0 && !selectedClubs.includes(match.club)) return false;
    return true;
  });

  const toggleDay = (key: string) => {
    setSelectedDays((current) =>
      current.includes(key) ? current.filter((day) => day !== key) : [...current, key].slice(0, 7)
    );
  };

  const toggleClub = (name: string) => {
    setSelectedClubs((current) =>
      current.includes(name) ? current.filter((club) => club !== name) : [...current, name]
    );
  };

  const clearWhen = () => {
    setSelectedDays([]);
    setTimeMode('All day');
  };

  const clearWhere = () => {
    setLocation('Around me');
    setSelectedClubs([]);
    setRecent(false);
    setFavourite(false);
    setUseDistance(false);
  };

  const clearAll = () => {
    setSport('All sports');
    clearWhen();
    clearWhere();
  };

  const whenActive = selectedDays.length > 0 || timeMode !== 'All day';
  const whereActive = selectedClubs.length > 0 || recent || favourite || useDistance;
  const hasActiveFilters = sport !== 'All sports' || whenActive || whereActive;

  const whenLabel = () => {
    if (!whenActive) return 'WHEN';
    const parts: string[] = [];
    if (selectedDays.length > 0) parts.push(`${selectedDays.length} ${selectedDays.length === 1 ? 'day' : 'days'}`);
    if (timeMode !== 'All day') parts.push(timeMode);
    return parts.join(' · ');
  };

  const whereLabel = () => {
    if (selectedClubs.length > 0) return `${selectedClubs.length} ${selectedClubs.length === 1 ? 'club' : 'clubs'}`;
    if (useDistance) return `Within ${distance} km`;
    if (favourite) return 'Favourites';
    if (recent) return 'Recent';
    return 'WHERE';
  };

  const toggleFollow = (id: number) => {
    setFollowing((current) =>
      current.includes(id) ? current.filter((playerId) => playerId !== id) : [...current, id]
    );
  };

  const pillClass = (active: boolean) =>
    `flex-none flex items-center gap-2 rounded-full pl-4 pr-3 py-2.5 text-[11px] font-black tracking-widest whitespace-nowrap transition-colors ${
      active
        ? 'bg-[var(--color-accent)]/10 border border-[var(--color-accent)] text-[var(--color-accent)]'
        : 'bg-[var(--color-dark-card)] border border-[#1f2937] text-white hover:border-[var(--color-accent)]/50'
    }`;

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

      {/* Preset filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span
          className={`flex-none w-11 h-11 rounded-full border flex items-center justify-center ${
            hasActiveFilters
              ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10'
              : 'border-[#1f2937] text-slate-400 bg-[var(--color-dark-card)]'
          }`}
        >
          <SlidersHorizontal size={18} />
        </span>

        <FilterDropdown options={SPORT_OPTIONS} value={sport} onChange={setSport} />

        <button onClick={() => setOpenModal('when')} className={pillClass(whenActive)}>
          {whenLabel().toUpperCase()}
        </button>

        <button onClick={() => setOpenModal('where')} className={pillClass(whereActive)}>
          {whereLabel().toUpperCase()}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="flex-none text-[11px] font-black tracking-widest text-slate-400 hover:text-white transition-colors px-2"
          >
            CLEAR ALL
          </button>
        )}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 xl:col-span-8 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-black text-[var(--color-cyan-glow)] font-[var(--font-urbanist)] uppercase tracking-widest">
              OPEN MATCHES
            </h2>
            <span className="text-[10px] font-black tracking-widest text-slate-500">
              {matches.length} {matches.length === 1 ? 'MATCH' : 'MATCHES'}
            </span>
          </div>

          {matches.length === 0 && (
            <div className="bg-[var(--color-dark-card)] border border-dashed border-[#1f2937] rounded-xl p-10 text-center">
              <p className="text-sm font-black text-white tracking-wide">No matches fit these filters</p>
              <p className="text-xs font-bold text-slate-500 mt-2 tracking-wide">Try widening your sport, day, time, or location.</p>
              <button
                onClick={clearAll}
                className="mt-5 text-[10px] font-black tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 rounded-lg px-4 py-2.5 hover:border-[var(--color-accent)] transition-colors"
              >
                CLEAR ALL
              </button>
            </div>
          )}

          <div className="space-y-4">
            {matches.map((match) => (
              <article
                key={match.id}
                className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-5 relative overflow-hidden"
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

        <section className="col-span-12 xl:col-span-4 space-y-8">
          <div>
            <h2 className="text-lg font-black mb-4 text-[var(--color-accent)] font-[var(--font-urbanist)] uppercase tracking-widest">
              SUGGESTED PLAYERS
            </h2>
            <div className="space-y-2">
              {PLAYERS.slice(0, 6).map((player) => {
                const isFollowing = following.includes(player.id);

                return (
                  <article
                    key={player.id}
                    className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-3 flex items-center justify-between gap-3"
                  >
                    <Link href={`/players/${player.id}`} className="flex items-center gap-3 min-w-0 group">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-11 h-11 rounded-lg object-cover border border-[#1f2937] flex-none"
                      />
                      <div className="min-w-0">
                        <h3 className="text-sm font-black text-white tracking-wide truncate group-hover:text-[var(--color-accent)] transition-colors">{player.name}</h3>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5 truncate">
                          {player.sport} · {player.level}
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={() => toggleFollow(player.id)}
                      className={`flex-none px-3 py-2 rounded-lg text-[10px] font-black tracking-widest transition-all ${
                        isFollowing
                          ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)]'
                          : 'bg-[var(--color-cyan-glow)] text-[#090e17] hover:brightness-110'
                      }`}
                    >
                      {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
                    </button>
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
                  className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-4 flex items-center justify-between gap-4"
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

      {openModal === 'when' && (
        <WhenFilterModal
          days={week}
          selectedDays={selectedDays}
          onToggleDay={toggleDay}
          timeMode={timeMode}
          onTimeMode={setTimeMode}
          specificFrom={specificFrom}
          specificTo={specificTo}
          onSpecificFrom={setSpecificFrom}
          onSpecificTo={setSpecificTo}
          onClose={() => setOpenModal(null)}
          onClear={clearWhen}
        />
      )}

      {openModal === 'where' && (
        <WhereFilterModal
          location={location}
          onLocation={setLocation}
          clubs={CLUB_OPTIONS}
          selectedClubs={selectedClubs}
          onToggleClub={toggleClub}
          recent={recent}
          onRecent={setRecent}
          favourite={favourite}
          onFavourite={setFavourite}
          useDistance={useDistance}
          onUseDistance={setUseDistance}
          distance={distance}
          onDistance={setDistance}
          onClose={() => setOpenModal(null)}
          onClear={clearWhere}
        />
      )}
    </div>
  );
}
