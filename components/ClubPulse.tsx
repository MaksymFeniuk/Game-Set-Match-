import React from 'react';

export default function ClubPulse() {
  return (
    <div className="space-y-6">
      {/* Upcoming Events */}
      <div>
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">UPCOMING EVENTS</h3>
        <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-4 relative overflow-hidden group hover:border-[var(--color-accent)]/50 transition-colors cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors"></div>
          <div className="relative z-10">
            <span className="text-[9px] font-bold text-[var(--color-accent)] tracking-wider uppercase bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-sm">UPCOMING EVENTS</span>
            <h4 className="text-xl font-black text-white mt-2 leading-tight">XNRGY OPEN<br/>TOURNAMENT</h4>
            <p className="text-[10px] text-slate-400 mt-2 font-semibold">Upcoming XNRGY open | April 20-22</p>
          </div>
        </div>
      </div>

      {/* Match Highlight Clips */}
      <div>
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">MATCH HIGHLIGHT CLIPS</h3>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <div className="min-w-[200px] h-28 rounded-xl relative overflow-hidden group cursor-pointer border border-[#1f2937] hover:border-[var(--color-cyan-glow)] transition-all">
            <img src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=400&auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" alt="Highlight 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50">
                 <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
               </div>
            </div>
            <div className="absolute bottom-2 left-3">
              <span className="text-[10px] font-bold text-white tracking-wide">Match Highlight Clips</span>
            </div>
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-bold text-white border border-white/10">01:20</div>
          </div>
        </div>
      </div>

      {/* Social Photos */}
      <div>
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">SOCIAL PHOTOS</h3>
        <div className="grid grid-cols-3 gap-2">
           <img src="https://images.unsplash.com/photo-1554068865-24cecd4e34f8?w=150&auto=format&fit=crop&q=80" className="w-full h-16 object-cover rounded-lg border border-[#1f2937] hover:border-white transition-colors cursor-pointer" alt="Social 1" />
           <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=150&auto=format&fit=crop&q=80" className="w-full h-16 object-cover rounded-lg border border-[#1f2937] hover:border-white transition-colors cursor-pointer" alt="Social 2" />
           <img src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=150&auto=format&fit=crop&q=80" className="w-full h-16 object-cover rounded-lg border border-[#1f2937] hover:border-white transition-colors cursor-pointer" alt="Social 3" />
        </div>
      </div>
    </div>
  );
}
