'use client';

import FilterModal from './FilterModal';

export interface DayOption {
  key: string;
  wd: string;
  full: string;
  d: number;
  mo: string;
}

const TIME_OPTIONS = [
  { label: 'All day', range: '' },
  { label: 'Morning', range: '6:00 am - 12:00 pm' },
  { label: 'Afternoon', range: '12:00 pm - 6:00 pm' },
  { label: 'Evening', range: '6:00 pm - 12:00 am' },
  { label: 'Specific hours', range: 'Pick a range' },
];

const fmtHour = (h: number) => {
  const period = h < 12 || h === 24 ? 'am' : 'pm';
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:00 ${period}`;
};

interface WhenFilterModalProps {
  days: DayOption[];
  selectedDays: string[];
  onToggleDay: (key: string) => void;
  timeMode: string;
  onTimeMode: (mode: string) => void;
  specificFrom: number;
  specificTo: number;
  onSpecificFrom: (h: number) => void;
  onSpecificTo: (h: number) => void;
  onClose: () => void;
  onClear: () => void;
}

export default function WhenFilterModal({
  days,
  selectedDays,
  onToggleDay,
  timeMode,
  onTimeMode,
  specificFrom,
  specificTo,
  onSpecificFrom,
  onSpecificTo,
  onClose,
  onClear,
}: WhenFilterModalProps) {
  return (
    <FilterModal title="When do you want to play?" onClose={onClose} onApply={onClose} onClear={onClear}>
      <div className="mb-2">
        <h3 className="text-base font-black text-white tracking-wide">Choose your days (max. 7)</h3>
        <p className="text-xs font-bold text-slate-500 mt-1">You can select up to 7 days</p>
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar py-4">
        {days.map((day) => {
          const selected = selectedDays.includes(day.key);
          return (
            <button
              key={day.key}
              onClick={() => onToggleDay(day.key)}
              className="flex flex-col items-center gap-1.5 flex-none w-14"
            >
              <span className={`text-[11px] font-black tracking-widest ${selected ? 'text-[var(--color-accent)]' : 'text-slate-400'}`}>
                {day.wd}
              </span>
              <span
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black transition-colors ${
                  selected
                    ? 'bg-[var(--color-accent)] text-[#090e17]'
                    : 'bg-[#090e17] border border-[#1f2937] text-white hover:border-[var(--color-accent)]/50'
                }`}
              >
                {day.d}
              </span>
              <span className="text-[10px] font-bold text-slate-500">{day.mo}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 mb-3">
        <h3 className="text-base font-black text-white tracking-wide">Choose your time</h3>
      </div>

      <div className="space-y-1 pb-2">
        {TIME_OPTIONS.map((option) => {
          const selected = timeMode === option.label;
          return (
            <div key={option.label}>
              <button
                onClick={() => onTimeMode(option.label)}
                className="w-full flex items-center gap-3 py-3 text-left"
              >
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-none transition-colors ${
                    selected ? 'border-[var(--color-accent)]' : 'border-slate-600'
                  }`}
                >
                  {selected && <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />}
                </span>
                <span className={`text-sm font-black tracking-wide ${selected ? 'text-white' : 'text-slate-300'}`}>
                  {option.label}
                </span>
                {option.range && (
                  <span className="text-xs font-bold text-slate-500">{option.range}</span>
                )}
              </button>

              {option.label === 'Specific hours' && selected && (
                <div className="flex items-center gap-3 pl-8 pb-3">
                  <select
                    value={specificFrom}
                    onChange={(e) => onSpecificFrom(Number(e.target.value))}
                    className="bg-[#090e17] border border-[#1f2937] rounded-lg px-3 py-2 text-xs font-bold text-white focus:border-[var(--color-accent)] focus:outline-none"
                  >
                    {Array.from({ length: 24 }, (_, h) => (
                      <option key={h} value={h}>{fmtHour(h)}</option>
                    ))}
                  </select>
                  <span className="text-slate-500 text-xs font-bold">to</span>
                  <select
                    value={specificTo}
                    onChange={(e) => onSpecificTo(Number(e.target.value))}
                    className="bg-[#090e17] border border-[#1f2937] rounded-lg px-3 py-2 text-xs font-bold text-white focus:border-[var(--color-accent)] focus:outline-none"
                  >
                    {Array.from({ length: 24 }, (_, i) => i + 1).map((h) => (
                      <option key={h} value={h}>{fmtHour(h)}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </FilterModal>
  );
}
