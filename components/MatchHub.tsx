import React from 'react';
import Link from 'next/link';
const PLAYERS = [
  { name: "Ben H.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80", form: ["W", "W", "W", "L", "W"], streak: ["W", "W"], rating: ["3", "4", "3"] },
  { name: "Sarah K.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80", form: ["W", "L", "W", "L", "L"], streak: ["L"], rating: ["5", "6", "5"] },
  { name: "Alex R.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80", form: ["W", "W", "L", "W", "W"], streak: ["W", "W", "W"], rating: ["2", "2", "3"] }
];

export default function MatchHub() {
  return (
    <div className="space-y-4">
      {PLAYERS.map((player, idx) => (
        <div key={idx} className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden group">
          
          <div className="absolute -left-10 top-0 w-20 h-full bg-[var(--color-accent)]/5 blur-2xl transition-colors"></div>

          {/* Avatar and Stats Identity */}
          <Link href="/profile" className="flex items-center gap-3 relative z-10 cursor-pointer group/link">
            <img 
              src={player.img} 
              alt={player.name} 
              className="w-12 h-12 rounded-xl object-cover border border-[#1f2937] group-hover/link:border-[var(--color-accent)]/50 transition-colors"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-bold text-white tracking-wide group-hover/link:text-[var(--color-accent)] transition-colors">{player.name}</h3>
                <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">AVAILABLE</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-bold text-slate-400">
                <div className="flex items-center gap-1">
                  <span>Form</span>
                  <div className="flex gap-0.5">
                    {player.form.slice(0, 3).map((f, i) => (
                      <span key={i} className={`w-3.5 h-3.5 flex items-center justify-center text-[8px] font-black rounded-sm ${f === 'W' ? 'bg-[var(--color-accent)] text-[#090e17]' : 'bg-red-500 text-white'}`}>{f}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span>Streak</span>
                  <div className="flex gap-0.5">
                    {player.streak.map((s, i) => (
                      <span key={i} className={`w-3.5 h-3.5 flex items-center justify-center text-[8px] font-black rounded-sm ${s === 'W' ? 'bg-[var(--color-accent)] text-[#090e17]' : 'bg-red-500 text-white'}`}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span>Rating</span>
                  <div className="flex gap-0.5">
                    {player.rating.map((r, i) => (
                      <span key={i} className={`w-3.5 h-3.5 flex items-center justify-center text-[7px] font-black rounded-full bg-[#1f2937] text-slate-300 border border-slate-700`}>{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto relative z-10">
            <button className="flex-1 sm:flex-none text-[11px] font-extrabold tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/40 hover:border-[var(--color-accent)] bg-[var(--color-accent)]/5 px-4 py-2 rounded-lg transition-all shadow-[0_0_10px_rgba(115,211,255,0.05)] hover:shadow-[0_0_15px_rgba(115,211,255,0.15)] cursor-pointer">
              CHALLENGE
            </button>
            <button className="flex-1 sm:flex-none text-[11px] font-extrabold tracking-widest text-black bg-[var(--color-cyan-glow)] hover:brightness-110 px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] cursor-pointer">
              JOIN MATCH
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
