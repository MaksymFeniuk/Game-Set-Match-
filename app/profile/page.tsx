'use client';

import { User, Edit, Trophy, Calendar } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-black text-[#73d3ff]">MY PROFILE</h1>
        <button className="flex items-center gap-2 btn-accent">
          <Edit size={20} />
          EDIT PROFILE
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="col-span-1">
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <div className="w-24 h-24 bg-[#73d3ff] rounded-full mx-auto mb-4 flex items-center justify-center">
              <User size={48} className="text-black" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Your Name</h2>
            <p className="text-gray-500 text-center mb-6">Level: Intermediate</p>
            
            <div className="space-y-4">
              <div className="bg-[#0f1419] rounded p-4">
                <p className="text-gray-500 text-xs mb-1">JOINED</p>
                <p className="text-lg font-bold">6 months ago</p>
              </div>
              <div className="bg-[#0f1419] rounded p-4">
                <p className="text-gray-500 text-xs mb-1">MATCHES PLAYED</p>
                <p className="text-lg font-bold">24</p>
              </div>
              <div className="bg-[#0f1419] rounded p-4">
                <p className="text-gray-500 text-xs mb-1">WIN RATE</p>
                <p className="text-lg font-bold text-[#73d3ff]">65%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Info */}
        <div className="col-span-2 space-y-6">
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <h3 className="text-xl font-black mb-4 text-[#73d3ff]">STATS</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Form', value: 8.5 },
                { label: 'Streak', value: 5 },
                { label: 'Rating', value: 1850 },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0f1419] rounded p-4">
                  <p className="text-gray-500 text-xs mb-2 uppercase">{stat.label}</p>
                  <p className="text-3xl font-bold text-[#73d3ff]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <h3 className="text-xl font-black mb-4 text-[#73d3ff] flex items-center gap-2">
              <Trophy size={24} />
              ACHIEVEMENTS
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((badge) => (
                <div key={badge} className="bg-[#0f1419] rounded p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-[#73d3ff] rounded-full flex items-center justify-center mb-2">
                    <Trophy size={24} className="text-black" />
                  </div>
                  <p className="text-xs text-gray-500 text-center">Badge {badge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <h3 className="text-xl font-black mb-4 text-[#73d3ff] flex items-center gap-2">
              <Calendar size={24} />
              RECENT MATCHES
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map((match) => (
                <div key={match} className="bg-[#0f1419] rounded p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold">Match vs Player {match}</p>
                    <p className="text-sm text-gray-500">3 days ago • 6-4, 7-5</p>
                  </div>
                  <span className="text-[#73d3ff] font-bold">WON</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
