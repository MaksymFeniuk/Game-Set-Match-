'use client';

import { Send, Phone, Plus } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="p-8 h-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-black mb-10 text-[#73d3ff]">MESSAGES</h1>

      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-180px)]">
        {/* Conversations List */}
        <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#2a3038]">
            <button className="w-full btn-accent flex items-center justify-center gap-2">
              <Plus size={20} />
              NEW MESSAGE
            </button>
          </div>
          <div className="overflow-y-auto flex-1">
            {[1, 2, 3, 4, 5, 6].map((chat) => (
              <div
                key={chat}
                className="p-4 border-b border-[#2a3038] hover:bg-[#0f1419] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">Player {chat}</p>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Hey, want to play tomorrow?</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="col-span-2 bg-[#1a1f26] border border-[#2a3038] rounded-lg flex flex-col">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-[#2a3038] flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Player 1</h2>
              <p className="text-xs text-gray-500">Online</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-[#0f1419] rounded transition-colors">
                <Phone size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {[1, 2, 3, 4].map((msg, idx) => (
              <div
                key={msg}
                className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    idx % 2 === 0
                      ? 'bg-[#0f1419] text-gray-300'
                      : 'bg-[#73d3ff] text-black'
                  }`}
                >
                  <p>{idx % 2 === 0 ? 'Hey! Wanna play tomorrow?' : 'Sure! What time works for you?'}</p>
                  <p className="text-xs mt-1 opacity-70">{5 - idx}m ago</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-[#2a3038] flex gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-[#0f1419] border border-[#2a3038] rounded-lg focus:border-[#73d3ff] focus:outline-none text-gray-300"
            />
            <button className="btn-accent p-2 flex items-center justify-center">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
