'use client';

import { Calendar, Clock, MapPin, X } from 'lucide-react';

export default function BookingsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-black text-[#73d3ff]">MY BOOKINGS</h1>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Upcoming Bookings */}
        <div className="col-span-2">
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">UPCOMING</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((booking) => (
              <div key={booking} className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#73d3ff] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tennis Court {booking}</h3>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        April {20 + booking}, 2024
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {14 + booking}:00 - {15 + booking}:00
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        Downtown Tennis Club
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#73d3ff] mb-2">€{30 + booking * 5}</p>
                    <button className="btn-accent-secondary text-sm px-3 py-1">MODIFY</button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 btn-accent">INVITE PLAYERS</button>
                  <button className="px-4 py-2 bg-red-900/20 text-red-400 rounded hover:bg-red-900/40 transition-colors">
                    CANCEL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">SUMMARY</h2>
          
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 space-y-4 mb-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">TOTAL BOOKINGS</p>
              <p className="text-3xl font-bold text-[#73d3ff]">12</p>
            </div>
            <div className="border-t border-[#2a3038] pt-4">
              <p className="text-gray-500 text-sm mb-1">THIS MONTH</p>
              <p className="text-3xl font-bold text-[#73d3ff]">4</p>
            </div>
            <div className="border-t border-[#2a3038] pt-4">
              <p className="text-gray-500 text-sm mb-1">TOTAL SPENT</p>
              <p className="text-3xl font-bold text-[#73d3ff]">€245</p>
            </div>
          </div>

          <button className="btn-accent w-full">NEW BOOKING</button>

          <div className="mt-6">
            <h3 className="text-lg font-black mb-4 text-[#73d3ff]">PAST BOOKINGS</h3>
            <div className="space-y-2">
              {[1, 2, 3].map((past) => (
                <div key={past} className="bg-[#1a1f26] border border-[#2a3038] rounded p-3 text-sm">
                  <p className="font-bold">Court {past}</p>
                  <p className="text-gray-500">April {10 - past}, 2024</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
