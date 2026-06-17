'use client';

import Link from 'next/link';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const AVAILABLE_FILTERS = ['Padel', 'Tennis', 'Nearby', 'Level 4.0+', 'Available Now'];
  const [filters, setFilters] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter(f => f !== filterToRemove));
  };

  const toggleFilter = (filterName: string) => {
    if (filters.includes(filterName)) {
      setFilters(filters.filter(f => f !== filterName));
    } else {
      setFilters([...filters, filterName]);
    }
  };

  return (
    <div className="bg-[#090e17] border-b border-[#1f2937] px-8 pt-4 pb-2 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black italic tracking-wider text-white font-[var(--font-urbanist)] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          GAME<span className="text-[var(--color-accent)]">!</span> SET<span className="text-[var(--color-accent)]">!</span> MATCH<span className="text-[var(--color-accent)]">!</span>
        </Link>
        
        {/* Center Search */}
        <div className="flex-1 max-w-2xl flex flex-col items-center">
          <div className="relative w-full z-20">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="FIND COURTS & PLAYERS..."
              className="w-full pl-11 pr-11 py-2.5 bg-transparent border-2 border-[var(--color-accent)] rounded-full focus:outline-none text-slate-200 placeholder-slate-500 text-sm font-bold tracking-widest shadow-[0_0_15px_rgba(115,211,255,0.15)]"
            />
            <div 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--color-accent)] cursor-pointer hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               <SlidersHorizontal size={18} />
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full mt-2 right-0 w-56 bg-[#121826] border border-[#1f2937] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden py-1 z-50">
                <div className="px-4 py-2 border-b border-[#1f2937] mb-1">
                  <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Select Filters</span>
                </div>
                <div className="flex flex-col max-h-[300px] overflow-y-auto no-scrollbar">
                  {AVAILABLE_FILTERS.map(f => {
                    const isSelected = filters.includes(f);

                    return (
                    <button 
                      key={f}
                      onClick={() => toggleFilter(f)}
                      aria-pressed={isSelected}
                      className="text-left px-4 py-2 text-sm font-bold text-slate-300 hover:bg-[#1f2937] hover:text-white transition-colors flex justify-between items-center group"
                    >
                      {f}
                      {isSelected ? (
                        <div className="w-3 h-3 rounded-full flex-none" style={{ backgroundColor: 'var(--color-cyan-glow)' }}></div>
                      ) : (
                        <div className="w-3 h-3 rounded-full border border-slate-600 group-hover:border-slate-400"></div>
                      )}
                    </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Filter Pills */}
          <div className="flex gap-3 mt-3">
            {filters.map((pill) => (
              <button 
                key={pill} 
                onClick={() => removeFilter(pill)} 
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-bold hover:border-slate-500 transition-colors cursor-pointer group ${pill.includes('Level') ? 'text-[var(--color-accent)]' : 'text-slate-300'}`}
              >
                <span className="w-3 h-3 rounded-full flex-none" style={{ backgroundColor: 'var(--color-cyan-glow)' }}></span>
                {pill} <X size={12} className={`${pill.includes('Level') ? 'text-[var(--color-accent)]' : 'text-slate-500'} group-hover:text-red-400 transition-colors`} />
              </button>
            ))}
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
