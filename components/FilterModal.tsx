'use client';

import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface FilterModalProps {
  title: string;
  onClose: () => void;
  onApply: () => void;
  onClear: () => void;
  children: ReactNode;
}

export default function FilterModal({ title, onClose, onApply, onClear, children }: FilterModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-[var(--color-dark-card)] border border-[#1f2937] rounded-t-3xl sm:rounded-2xl shadow-[0_-10px_60px_rgba(0,0,0,0.6)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.7)] max-h-[88vh] flex flex-col">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="text-xl md:text-2xl font-black text-white font-[var(--font-urbanist)] tracking-wide">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 overflow-y-auto no-scrollbar flex-1 pb-2">{children}</div>

        <div className="px-6 py-5 border-t border-[#1f2937] flex items-center gap-4">
          <button
            onClick={onClear}
            className="text-[11px] font-black tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            CLEAR ALL
          </button>
          <button
            onClick={onApply}
            className="flex-1 text-[12px] font-black tracking-widest text-[#090e17] bg-[var(--color-accent)] hover:brightness-110 rounded-xl py-3.5 transition-all shadow-[0_0_18px_rgba(115,211,255,0.2)]"
          >
            SEE RESULTS
          </button>
        </div>
      </div>
    </div>
  );
}
