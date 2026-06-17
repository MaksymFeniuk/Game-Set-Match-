'use client';

import RapidGrid from '../components/RapidGrid';
import MatchHub from '../components/MatchHub';
import ClubPulse from '../components/ClubPulse';

export default function DashboardPage() {
  return (
    <div className="min-h-full p-8">
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8">
        {/* Left Arena - Rapid Grid */}
        <section className="col-span-12 xl:col-span-5 space-y-4">
          <h2 className="text-[22px] font-black text-white tracking-wider mb-2 font-[var(--font-urbanist)] uppercase">RAPID GRID</h2>
          <p className="text-slate-400 text-sm font-semibold tracking-wide -mt-3 mb-6">Multi-court schedule</p>
          <RapidGrid />
        </section>

        {/* Center Arena - Match Hub */}
        <section className="col-span-12 lg:col-span-6 xl:col-span-4 space-y-4">
          <h2 className="text-[22px] font-black text-white tracking-wider mb-2 font-[var(--font-urbanist)] uppercase">MATCH HUB</h2>
          <p className="text-slate-400 text-sm font-semibold tracking-wide -mt-3 mb-6">Active feed</p>
          <MatchHub />
        </section>

        {/* Right Arena - Club Pulse */}
        <section className="col-span-12 lg:col-span-6 xl:col-span-3 space-y-4">
          <h2 className="text-[22px] font-black text-white tracking-wider mb-2 font-[var(--font-urbanist)] uppercase">CLUB PULSE</h2>
          <div className="h-4"></div> {/* Spacer to align with subtitles */}
          <ClubPulse />
        </section>
      </div>
    </div>
  );
}