'use client';

import { Trophy, TrendingUp } from 'lucide-react';

export default function LeagueTablesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-black text-[#73d3ff] flex items-center gap-3">
          <Trophy size={40} />
          LEAGUE TABLES
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Global Rankings */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">GLOBAL RANKINGS</h2>
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg overflow-hidden">
            <div className="bg-[#0f1419] px-6 py-3 flex items-center gap-4 border-b border-[#2a3038]">
              <div className="w-8 text-center text-gray-500">#</div>
              <div className="flex-1 text-gray-500">PLAYER</div>
              <div className="w-20 text-center text-gray-500">RATING</div>
              <div className="w-20 text-center text-gray-500">MATCHES</div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
              <div
                key={rank}
                className="px-6 py-4 flex items-center gap-4 border-b border-[#2a3038] hover:bg-[#0f1419]/50 transition-colors cursor-pointer"
              >
                <div className={`w-8 text-center font-bold ${
                  rank <= 3 ? 'text-[#73d3ff]' : 'text-gray-500'
                }`}>
                  {rank}
                </div>
                <div className="flex-1">
                  <p className="font-bold">Player {rank}</p>
                  <p className="text-xs text-gray-500">Level: Advanced</p>
                </div>
                <div className="w-20 text-center font-bold text-[#73d3ff]">{2500 - rank * 50}</div>
                <div className="w-20 text-center text-gray-400">{100 - rank * 5}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tournament Table */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">XNRGY OPEN 2024</h2>
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg overflow-hidden">
            <div className="bg-[#0f1419] px-6 py-3 flex items-center gap-4 border-b border-[#2a3038]">
              <div className="w-8 text-center text-gray-500">#</div>
              <div className="flex-1 text-gray-500">PLAYER</div>
              <div className="w-20 text-center text-gray-500">WINS</div>
              <div className="w-20 text-center text-gray-500">LOSSES</div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((rank) => (
              <div
                key={rank}
                className="px-6 py-4 flex items-center gap-4 border-b border-[#2a3038] hover:bg-[#0f1419]/50 transition-colors cursor-pointer"
              >
                <div className={`w-8 text-center font-bold ${
                  rank <= 3 ? 'text-[#73d3ff]' : 'text-gray-500'
                }`}>
                  {rank}
                </div>
                <div className="flex-1">
                  <p className="font-bold">Tournament Player {rank}</p>
                </div>
                <div className="w-20 text-center font-bold text-[#73d3ff]">{9 - rank}</div>
                <div className="w-20 text-center text-gray-400">{rank - 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        {[
          { label: 'TOTAL PLAYERS', value: '1,234' },
          { label: 'ACTIVE LEAGUES', value: '8' },
          { label: 'MATCHES THIS WEEK', value: '342' },
          { label: 'TOP RATING', value: '2,850' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <p className="text-gray-500 text-sm font-semibold mb-2">{stat.label}</p>
            <p className="text-3xl font-black text-[#73d3ff]">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
