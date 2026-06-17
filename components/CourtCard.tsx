'use client';

export default function CourtCard() {
  return (
    <div className="bg-[#121A30]/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700/60 transition-all">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Padel Type: 1</div>
      <h3 className="text-sm font-bold text-white tracking-wide mb-3">CLUB XNRGY (Eindhoven)</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] text-slate-500 font-semibold mb-6">
        <span>Court Type: 2</span>
        <span>Padel / Court 3</span>
        <span>Court Type: 4</span>
      </div>
      <button className="w-full text-[11px] font-black tracking-widest text-[#73D3FF] border border-[#73D3FF]/30 hover:border-[#73D3FF] bg-[#73D3FF]/5 py-2.5 rounded-lg transition-all">
        + BOOK
      </button>
    </div>
  );
}