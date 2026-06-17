'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';

export default function BookingsPage() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">MY BOOKINGS</h1>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Upcoming Bookings */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-lg font-black mb-4 text-[var(--color-accent)] font-[var(--font-urbanist)] uppercase tracking-widest">UPCOMING</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((booking) => (
              <div key={booking} className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 hover:border-[var(--color-accent)]/40 transition-colors group relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(115,211,255,0.5)]"></div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-black text-white uppercase tracking-wide">Tennis Court {booking}</h3>
                      <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">CONFIRMED</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-slate-400 font-bold">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[var(--color-accent)]" />
                        April {20 + booking}, 2024
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-[var(--color-neon-orange)]" />
                        {14 + booking}:00 - {15 + booking}:00
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[var(--color-cyan-glow)]" />
                        Downtown Tennis Club
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white mb-2 tracking-wide">€{30 + booking * 5}</p>
                    <button className="text-[10px] font-bold text-slate-400 hover:text-white border border-slate-700 hover:border-white px-3 py-1 rounded transition-colors uppercase tracking-widest">MODIFY</button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 text-[11px] font-extrabold tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/40 hover:border-[var(--color-accent)] bg-[var(--color-accent)]/5 py-2.5 rounded-lg transition-all shadow-[0_0_10px_rgba(115,211,255,0.05)]">
                    INVITE PLAYERS
                  </button>
                  <button className="px-6 py-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-extrabold uppercase tracking-widest rounded-lg hover:bg-red-500/20 hover:border-red-500/40 transition-colors">
                    CANCEL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="text-lg font-black mb-4 text-[var(--color-cyan-glow)] font-[var(--font-urbanist)] uppercase tracking-widest">SUMMARY</h2>
          
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 space-y-5 mb-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-cyan-glow)]/5 blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-slate-400 text-[11px] font-bold tracking-widest mb-1">TOTAL BOOKINGS</p>
              <p className="text-4xl font-black text-white">12</p>
            </div>
            <div className="border-t border-[#1f2937] pt-5 relative z-10">
              <p className="text-slate-400 text-[11px] font-bold tracking-widest mb-1">THIS MONTH</p>
              <p className="text-4xl font-black text-white">4</p>
            </div>
            <div className="border-t border-[#1f2937] pt-5 relative z-10">
              <p className="text-slate-400 text-[11px] font-bold tracking-widest mb-1">TOTAL SPENT</p>
              <p className="text-4xl font-black text-[var(--color-accent)] drop-shadow-[0_0_8px_rgba(115,211,255,0.2)]">€245</p>
            </div>
          </div>

          <button className="w-full text-[12px] font-black tracking-widest text-black bg-[var(--color-accent)] hover:brightness-110 py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(115,211,255,0.2)] hover:shadow-[0_0_25px_rgba(115,211,255,0.4)]">
            NEW BOOKING
          </button>

          <div className="mt-8">
            <h3 className="text-sm font-black mb-4 text-slate-300 font-[var(--font-urbanist)] uppercase tracking-widest">PAST BOOKINGS</h3>
            <div className="space-y-2">
              {[1, 2, 3].map((past) => (
                <div key={past} className="bg-[#0b101a] border border-[#1f2937] rounded-lg p-3 text-sm flex justify-between items-center">
                  <p className="font-bold text-slate-300">Court {past}</p>
                  <p className="text-slate-500 text-[11px] font-bold tracking-widest">April {10 - past}, 2024</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
