'use client';

import { Plus } from 'lucide-react';

export default function CourtCard() {
  return (
    <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#73d3ff] transition-colors cursor-pointer">
      <div className="text-sm font-semibold text-gray-400 mb-2">Padel Type: 1</div>
      <h3 className="text-lg font-bold mb-3">CLUB XNRGY (Amsterdam)</h3>
      <div className="text-xs text-gray-500 mb-4">
        <div>Court Type: 2</div>
        <div>Padel / Court 3</div>
        <div>Court Type: 4</div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 btn-accent-secondary flex items-center justify-center gap-2">
          <Plus size={16} />
          BOOK
        </button>
      </div>
    </div>
  );
}
