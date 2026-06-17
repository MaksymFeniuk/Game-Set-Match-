'use client';

export default function PlayerCard() {
  return (
    <div className="bg-[#121A30]/50 border border-slate-800 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white">Ben H.</h3>
        <span className="bg-[#73D3FF]/20 text-[#73D3FF] text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">AVAILABLE</span>
      </div>

      <div className="space-y-3 mb-6">
        {['Form', 'Streak', 'Rating'].map((label) => (
          <div key={label} className="flex justify-between items-center text-[10px]">
            <span className="text-slate-500 font-bold uppercase tracking-wider">{label}</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 3 ? 'bg-[#73D3FF]' : 'bg-slate-700'}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button className="flex-1 text-[10px] font-extrabold tracking-widest text-slate-300 hover:text-white transition-colors">CHALLENGE</button>
        <button className="flex-1 text-[10px] font-extrabold tracking-widest text-black bg-[#73D3FF] hover:bg-[#62b9e0] py-2 rounded-lg transition-all">JOIN MATCH</button>
      </div>
    </div>
  );
}