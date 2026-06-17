'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PLAYERS } from '../data/players';

export default function Header() {
  const pathname = usePathname();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const NAV_LINKS = [
    { label: 'MY BOOKINGS', href: '/bookings' },
    { label: 'LEAGUE TABLES', href: '/league-tables' },
    { label: 'MESSAGES', href: '/messages' },
  ];

  // Match players whose full name — or any name part (first name, last initial) — starts with the query.
  const term = query.trim().toLowerCase();
  const results = term
    ? PLAYERS.filter((player) =>
        player.name
          .toLowerCase()
          .split(' ')
          .some((part) => part.startsWith(term)) || player.name.toLowerCase().startsWith(term)
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#090e17] border-b border-[#1f2937] px-8 pt-4 pb-2 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black italic tracking-wider text-white font-[var(--font-urbanist)] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          GAME<span className="text-[var(--color-accent)]">!</span> SET<span className="text-[var(--color-accent)]">!</span> MATCH<span className="text-[var(--color-accent)]">!</span>
        </Link>

        {/* Center Search */}
        <div className="flex-1 max-w-2xl" ref={searchRef}>
          <div className="relative w-full z-20">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder="FIND COURTS & PLAYERS..."
              className="w-full pl-11 pr-5 py-2.5 bg-transparent border-2 border-[var(--color-accent)] rounded-full focus:outline-none text-slate-200 placeholder-slate-500 text-sm font-bold tracking-widest shadow-[0_0_15px_rgba(115,211,255,0.15)]"
            />

            {/* Autocomplete results */}
            {open && term && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-[#121826] border border-[#1f2937] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden py-2 z-50">
                <div className="px-4 py-1.5">
                  <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">
                    {results.length > 0 ? 'Players' : 'No players found'}
                  </span>
                </div>
                <div className="max-h-[320px] overflow-y-auto no-scrollbar">
                  {results.map((player) => (
                    <Link
                      key={player.id}
                      href={`/players/${player.id}`}
                      onClick={() => {
                        setOpen(false);
                        setQuery('');
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#1f2937] transition-colors"
                    >
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-10 h-10 rounded-lg object-cover border border-[#1f2937] flex-none"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-black text-white tracking-wide truncate">{player.name}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5 truncate">
                          {player.sport} · Level {player.level} · {player.distance}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold tracking-widest pb-1 border-b-2 transition-all ${
                  active
                    ? 'text-white border-white hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]'
                    : 'text-slate-400 border-transparent hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
