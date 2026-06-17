'use client';

import { Search, Settings, Bell } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-[#1a1f26] border-b border-[#2a3038] px-8 py-6 flex items-center justify-between gap-8">
      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#73d3ff] to-[#4db8e8]">
        GAME! SET! MATCH!
      </div>
      
      <div className="flex items-center gap-8 flex-1">
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Find matches..."
            className="w-full pl-10 pr-4 py-3 bg-[#0f1419] border border-[#2a3038] rounded-lg focus:border-[#73d3ff] focus:outline-none text-gray-300 placeholder-gray-500 text-sm"
          />
        </div>
        
        <div className="flex gap-6 items-center ml-auto">
          <button className="p-2 hover:bg-[#2a3038] rounded-lg transition-colors">
            <Bell size={20} className="text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#2a3038] rounded-lg transition-colors">
            <Settings size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="btn-accent text-sm">MY BOOKINGS</button>
        <button className="btn-accent-secondary text-sm">SIGN IN</button>
      </div>
    </div>
  );
}
