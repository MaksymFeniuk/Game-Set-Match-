'use client';

import { Filter } from 'lucide-react';

export default function ExplorePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-black text-[#73d3ff]">EXPLORE</h1>
        <button className="flex items-center gap-2 btn-accent-secondary">
          <Filter size={20} />
          FILTERS
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Courts Section */}
        <div className="col-span-2">
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">AVAILABLE COURTS</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((court) => (
              <div
                key={court}
                className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#73d3ff] transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tennis Club {court}</h3>
                    <p className="text-sm text-gray-500">Court Type: {court}</p>
                  </div>
                  <span className="text-[#73d3ff] font-bold">€{25 + court * 5}/hr</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Professional grade courts with lights available</p>
                <button className="btn-accent w-full">BOOK NOW</button>
              </div>
            ))}
          </div>
        </div>

        {/* Players Section */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">PLAYERS NEARBY</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((player) => (
              <div key={player} className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-4 hover:border-[#73d3ff] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold">Player {player}</span>
                  <span className="text-xs px-2 py-1 bg-[#73d3ff] text-black rounded font-semibold">
                    AVAILABLE
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">Level: Intermediate</p>
                <div className="flex gap-2">
                  <button className="flex-1 btn-accent text-xs py-1">CHALLENGE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
