'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterDropdown({ options, value, onChange }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative flex-none" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex items-center gap-2 bg-[var(--color-dark-card)] border border-[#1f2937] rounded-full pl-4 pr-3 py-2.5 text-[11px] font-black tracking-widest text-white whitespace-nowrap hover:border-[var(--color-accent)]/50 transition-colors"
      >
        {value.toUpperCase()}
        <ChevronDown
          size={15}
          className={`text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden py-1 z-50">
          {options.map((option) => {
            const selected = option === value;
            return (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-xs font-bold tracking-widest flex items-center justify-between gap-3 transition-colors ${
                  selected ? 'text-[var(--color-accent)]' : 'text-slate-300 hover:bg-[#1f2937] hover:text-white'
                }`}
              >
                {option.toUpperCase()}
                {selected && <Check size={14} className="text-[var(--color-accent)] flex-none" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
