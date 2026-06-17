'use client';

import Link from 'next/link';
import { Search, Settings, SlidersHorizontal, X } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-[#090e17] border-b border-[#1f2937] px-8 pt-4 pb-2 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black italic tracking-wider text-white font-[var(--font-urbanist)] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          GAME<span className="text-[var(--color-accent)]">!</span> SET<span className="text-[var(--color-accent)]">!</span> MATCH<span className="text-[var(--color-accent)]">!</span>
        </Link>
        
        {/* Center Search */}
        <div className="flex-1 max-w-2xl flex flex-col items-center">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="FIND COURTS & PLAYERS..."
              className="w-full pl-11 pr-11 py-2.5 bg-transparent border-2 border-[var(--color-accent)] rounded-full focus:outline-none text-slate-200 placeholder-slate-500 text-sm font-bold tracking-widest shadow-[0_0_15px_rgba(115,211,255,0.15)]"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--color-accent)]">
              <Settings size={18} />
            </div>
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[var(--color-accent)]">
               <SlidersHorizontal size={18} />
            </div>
          </div>
          
          {/* Filter Pills */}
          <div className="flex gap-3 mt-3">
            {['Padel', 'Tennis', 'Nearby'].map((pill) => (
              <button key={pill} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-bold text-slate-300 hover:border-slate-500 transition-colors">
                {pill} <X size={12} className="text-slate-500" />
              </button>
            ))}
            <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-bold text-[var(--color-accent)] hover:border-slate-500 transition-colors">
              Level 4.0+ <X size={12} className="text-slate-500" />
            </button>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <Link href="/bookings" className="text-xs font-bold tracking-widest text-white border-b-2 border-white pb-1 transition-all hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]">
            MY BOOKINGS
          </Link>
          <Link href="/league-tables" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-all">
            LEAGUE TABLES
          </Link>
          <Link href="/messages" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-all">
            MESSAGES
          </Link>
        </div>
      </div>
    </div>
  );
}
