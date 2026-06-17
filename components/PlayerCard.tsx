'use client';

import { Star, Trophy } from 'lucide-react';

export default function PlayerCard() {
  return (
    <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#73d3ff] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">Ben H.</h3>
          <span className="text-xs px-2 py-1 bg-[#73d3ff] text-black rounded font-semibold">
            AVAILABLE
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-4 text-sm">
        <div>
          <span className="text-gray-500">Form</span>
          <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i <= 2 ? 'bg-[#73d3ff]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <span className="text-gray-500">Streak</span>
          <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i <= 3 ? 'bg-[#73d3ff]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <span className="text-gray-500">Rating</span>
          <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i <= 3 ? 'bg-[#73d3ff]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 btn-accent">CHALLENGE</button>
        <button className="flex-1 btn-accent">JOIN MATCH</button>
      </div>
    </div>
  );
}
