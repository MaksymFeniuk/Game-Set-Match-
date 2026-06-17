'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export interface NewMatchPayload {
  title: string;
  sport: 'Padel' | 'Tennis';
  format: 'Singles' | 'Doubles';
  club: string;
  day: string;
  time: string;
  levelMin: string;
  levelMax: string;
  vibe: string;
}

interface CreateMatchModalProps {
  clubs: string[];
  onClose: () => void;
  onCreate: (match: NewMatchPayload) => void;
}

const DAYS = ['Today', 'Tomorrow', 'Saturday', 'Sunday'];
const RATINGS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Half-hour time slots from 08:00 to 22:30.
const TIME_SLOTS = Array.from({ length: 30 }, (_, i) => {
  const totalMinutes = 8 * 60 + i * 30;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
});

export default function CreateMatchModal({ clubs, onClose, onCreate }: CreateMatchModalProps) {
  const [title, setTitle] = useState('');
  const [sport, setSport] = useState<'Padel' | 'Tennis'>('Padel');
  const [format, setFormat] = useState<'Singles' | 'Doubles'>('Doubles');
  const [club, setClub] = useState(clubs[0] ?? '');
  const [day, setDay] = useState('Today');
  const [time, setTime] = useState('19:00');
  const [levelMin, setLevelMin] = useState('3');
  const [levelMax, setLevelMax] = useState('5');
  const [vibe, setVibe] = useState('');

  const submit = () => {
    onCreate({
      title: title.trim() || `${sport} ${format.toLowerCase()} at ${club}`,
      sport,
      format,
      club,
      day,
      time,
      levelMin,
      levelMax,
      vibe: vibe.trim() || 'Friendly game',
    });
    onClose();
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#090e17] border border-[#1f2937] rounded-lg text-sm font-bold text-white placeholder-slate-600 focus:border-[var(--color-accent)] focus:outline-none transition-colors';
  const labelClass = 'text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2 block';

  const Toggle = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="flex rounded-lg bg-[#090e17] border border-[#1f2937] p-1">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`flex-1 py-2 rounded-md text-[11px] font-black tracking-widest transition-colors ${
            value === option ? 'bg-[var(--color-accent)] text-[#090e17]' : 'text-slate-400 hover:text-white'
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-[var(--color-dark-card)] border border-[#1f2937] rounded-t-3xl sm:rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.7)] max-h-[88vh] flex flex-col">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="text-xl md:text-2xl font-black text-white font-[var(--font-urbanist)] tracking-wide">Create a match</h2>
          <button onClick={onClose} aria-label="Close" className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="px-6 overflow-y-auto no-scrollbar flex-1 pb-2 space-y-5">
          <div>
            <label className={labelClass}>Match title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Evening padel doubles"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Sport</label>
              <Toggle options={['Padel', 'Tennis']} value={sport} onChange={(v) => setSport(v as 'Padel' | 'Tennis')} />
            </div>
            <div>
              <label className={labelClass}>Format</label>
              <Toggle options={['Singles', 'Doubles']} value={format} onChange={(v) => setFormat(v as 'Singles' | 'Doubles')} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Club</label>
            <select value={club} onChange={(e) => setClub(e.target.value)} className={inputClass}>
              {clubs.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Day</label>
              <select value={day} onChange={(e) => setDay(e.target.value)} className={inputClass}>
                {DAYS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Time</label>
              <select value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Level range (1 = strongest)</label>
            <div className="flex items-center gap-3">
              <select value={levelMin} onChange={(e) => setLevelMin(e.target.value)} className={inputClass}>
                {RATINGS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <span className="text-slate-500 text-xs font-bold">to</span>
              <select value={levelMax} onChange={(e) => setLevelMax(e.target.value)} className={inputClass}>
                {RATINGS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Vibe / notes</label>
            <input
              type="text"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
              placeholder="e.g. Competitive but friendly"
              className={inputClass}
            />
          </div>
        </div>

        <div className="px-6 py-5 border-t border-[#1f2937] flex items-center gap-4">
          <button onClick={onClose} className="text-[11px] font-black tracking-widest text-slate-400 hover:text-white transition-colors">
            CANCEL
          </button>
          <button
            onClick={submit}
            className="flex-1 text-[12px] font-black tracking-widest text-[#090e17] bg-[var(--color-cyan-glow)] hover:brightness-110 rounded-xl py-3.5 transition-all shadow-[0_0_18px_rgba(0,255,255,0.22)]"
          >
            CREATE MATCH
          </button>
        </div>
      </div>
    </div>
  );
}
