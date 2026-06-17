import React from 'react';

export default function Navigation() {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-black tracking-wider text-white italic">
          GAME<span className="text-[#73D3FF]">!</span> SET<span className="text-[#73D3FF]">!</span> MATCH<span className="text-[#73D3FF]">!</span>
        </h1>
      </div>

      {/* Global Ice-Blue Glowing Search Bar */}
      <div className="flex-1 max-w-2xl relative mx-0 md:mx-6">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="FIND COURTS & PLAYERS..." 
          className="w-full bg-[#121A30] text-sm text-white pl-11 pr-4 py-2.5 rounded-full border border-[#73D3FF]/20 focus:border-[#73D3FF] focus:outline-none focus:ring-1 focus:ring-[#73D3FF] placeholder-slate-500 tracking-wide transition-all shadow-[0_0_15px_rgba(115,211,255,0.05)]"
        />
      </div>

      <nav className="flex items-center gap-6 text-xs font-bold tracking-widest text-slate-300">
        <a href="#" className="text-[#73D3FF] border-b-2 border-[#73D3FF] pb-1 transition-all">DASHBOARD</a>
        <a href="#" className="hover:text-white transition-colors">EXPLORE</a>
        <a href="#" className="hover:text-white transition-colors">MY BOOKINGS</a>
        <a href="#" className="hover:text-white transition-colors">LEAGUE TABLES</a>
        <a href="#" className="hover:text-white transition-colors relative">
          MESSAGES
          <span className="absolute -top-1.5 -right-2 w-2 h-2 bg-[#73D3FF] rounded-full animate-pulse"></span>
        </a>
      </nav>
    </div>
  );
}