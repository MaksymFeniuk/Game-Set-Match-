import React from 'react';

export default function BookingPanel() {
  return (
    <div className="bg-[#121A30]/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-6">
      {/* User Header Identity Profile */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" 
              alt="Wilco Kleijnen" 
              className="w-14 h-14 rounded-full object-cover border-2 border-[#73D3FF] shadow-[0_0_15px_rgba(115,211,255,0.2)]"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0E162C] rounded-full"></span>
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Wilco Kleijnen</h3>
            <div className="flex gap-2 mt-1">
              <span className="bg-[#73D3FF]/10 text-[#73D3FF] font-mono text-[9px] px-2 py-0.5 rounded border border-[#73D3FF]/20">🎾 7.702</span>
              <span className="bg-slate-800 text-slate-300 font-mono text-[9px] px-2 py-0.5 rounded">🎾 6.957</span>
            </div>
          </div>
        </div>
        
        {/* Statistics Widgets */}
        <div className="flex gap-4 text-center text-xs">
          <div><div className="font-black text-white">2</div><div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">To Do</div></div>
          <div><div className="font-black text-[#73D3FF]">10/60</div><div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Punten</div></div>
          <div><div className="font-black text-white">7u</div><div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Gespeeld</div></div>
        </div>
      </div>

      {/* Warning/ALV Announcement Ribbon */}
      <div className="bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-xl p-3 text-xs font-bold tracking-wide flex justify-between items-center">
        <span>📅 do 6 okt: ALV - Schrijf je in</span>
        <button className="text-orange-400/60 hover:text-orange-400">✕</button>
      </div>

      {/* Security Digital Door Access Key Code */}
      <div className="bg-[#0E162C] border border-slate-800 p-4 rounded-xl flex justify-between items-center">
        <div>
          <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">Toegangscode</h4>
          <p className="text-[10px] text-slate-500 mt-0.5">Verloopt over 10 uur</p>
        </div>
        <div className="text-xl font-black text-[#73D3FF] font-mono tracking-widest drop-shadow-[0_0_10px_rgba(115,211,255,0.3)]">
          543045
        </div>
      </div>

      {/* Real-time Baanreservering Timeline List */}
      <div className="space-y-3">
        <h4 className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Vandaag</h4>
        
        {/* Court Row Item 1 */}
        <div className="bg-[#0E162C]/70 border border-slate-800/60 p-4 rounded-xl flex justify-between items-center hover:border-slate-700/50 transition-all">
          <div>
            <div className="text-sm font-bold text-white">Baanreservering <span className="text-slate-500 text-xs font-medium ml-2">Baan 1</span></div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Stef Wienema, Moos Wolthuis, Kris Veldstra</p>
          </div>
          <div className="text-right space-y-2">
            <span className="bg-slate-800/80 text-slate-300 font-mono text-xs px-2.5 py-1 rounded-md font-bold">13:15 - 14:45</span>
            <br />
            <button className="text-[10px] font-black bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md transition-colors shadow-md">
              Verlengen
            </button>
          </div>
        </div>

        {/* Court Row Item 2 (Pending Payment status flag) */}
        <div className="bg-[#0E162C]/70 border border-slate-800/60 p-4 rounded-xl flex justify-between items-center hover:border-slate-700/50 transition-all">
          <div>
            <div className="text-sm font-bold text-white">Baanreservering <span className="text-slate-500 text-xs font-medium ml-2">Baan 4</span></div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Wilco Kleijnen, Moos Wolthuis</p>
          </div>
          <div className="text-right space-y-1">
            <span className="bg-slate-800/80 text-slate-300 font-mono text-xs px-2.5 py-1 rounded-md font-bold">15:30 - 16:30</span>
            <p className="text-[10px] text-rose-400 font-bold animate-pulse mt-1">Wacht op betaling</p>
          </div>
        </div>
      </div>
    </div>
  );
}