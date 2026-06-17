import React from 'react';

const CLUBS_DATA = [
  {
    name: "CLUB XNRGY (Amsterdam)",
    details: ["Padel Type: 1", "Court Type: 2", "Padel / Court 3", "Court Type: 4"],
    slots: { "10:00": "empty", "11:00": "empty", "12:00": "empty", "13:00": "book", "14:00": "empty", "15:00": "empty", "17:00": "empty" }
  },
  {
    name: "BLANCA PADEL (SD)",
    details: ["Padel Type: 1", "Court Type: 2", "Padel / Court 3", "Court Type: 4"],
    slots: { "10:00": "empty", "11:00": "empty", "12:00": "empty", "13:00": "book", "14:00": "book", "15:00": "book", "17:00": "empty" }
  },
  {
    name: "BUENAS OPEN",
    details: ["Padel Type: 1", "Court Type: 2", "Padel Court 4", "Court Type: 5"],
    slots: { "10:00": "empty", "11:00": "empty", "12:00": "empty", "13:00": "empty", "14:00": "book", "15:00": "book", "17:00": "book" }
  }
];

const TIMELINE = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"];

export default function RapidGrid() {
  return (
    <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-2xl p-6 relative overflow-hidden group hover:border-[#2d3748] transition-colors">
      <div className="grid grid-cols-12 gap-4 items-center mb-4 pb-2 border-b border-[#1f2937] text-[11px] font-bold tracking-widest text-slate-400 uppercase">
        <div className="col-span-4">Club / Selected Court</div>
        <div className="col-span-8 grid grid-cols-7 text-center gap-2 relative">
          {TIMELINE.map((time) => (
            <div key={time} className={time === "13:00" ? "text-[var(--color-neon-orange)] font-black" : ""}>
              {time === "13:00" ? `NU ${time}` : time}
            </div>
          ))}
          {/* Active Time Vertical Line */}
          <div className="absolute top-6 left-[calc(50%-1px)] w-0.5 h-[500px] bg-[var(--color-neon-orange)] shadow-[0_0_15px_rgba(255,107,0,1)] z-10 pointer-events-none opacity-80"></div>
        </div>
      </div>

      <div className="space-y-4 relative z-0">
        {CLUBS_DATA.map((club, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-4 items-center bg-[#0b101a] border border-[#1f2937] p-4 rounded-xl hover:border-[#2d3748] transition-all">
            <div className="col-span-4 space-y-1">
              <h4 className="text-[13px] font-black text-white tracking-wide uppercase">{club.name}</h4>
              <div className="grid grid-cols-2 gap-x-2 text-[10px] text-slate-500 font-semibold">
                {club.details.map((d, i) => <span key={i}>{d}</span>)}
              </div>
            </div>

            <div className="col-span-8 grid grid-cols-7 gap-2 h-16">
              {TIMELINE.map((time) => {
                const status = club.slots[time as keyof typeof club.slots];
                if (status === "book") {
                  return (
                    <button key={time} className="bg-[var(--color-accent)] text-[#090e17] font-black rounded-lg flex flex-col items-center justify-center text-[10px] tracking-wider transform scale-[1.02] shadow-[0_0_15px_rgba(115,211,255,0.3)] transition-all hover:brightness-110">
                      <span className="text-sm leading-none">+</span>
                      <span>BOOK</span>
                    </button>
                  );
                }
                return (
                  <div key={time} className="bg-[#121A30]/60 border border-slate-800/80 rounded-lg"></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}