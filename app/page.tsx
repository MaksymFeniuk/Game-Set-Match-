'use client';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-black mb-12 text-[#73d3ff]">GAME! SET! MATCH!</h1>
      <div className="grid grid-cols-4 gap-10">
        {/* Left Column - Rapid Grid */}
        <div className="col-span-2">
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">RAPID GRID</h2>
          <p className="text-gray-500 mb-6">Multi-court schedule</p>

          {/* Time slots */}
          <div className="mb-8">
            <div className="flex gap-2 text-xs text-gray-500 font-mono mb-4">
              <div className="w-12">10:00</div>
              <div className="w-12">11:00</div>
              <div className="w-12">12:00</div>
              <div className="text-[#73d3ff]">13:00</div>
              <div className="w-12">14:00</div>
              <div className="w-12">15:00</div>
              <div className="w-12">17:00</div>
            </div>

            {/* Courts */}
            <div className="space-y-4">
              {['CLUB XNRGY (Amsterdam)', 'BLANCA PADEL (SD)', 'BUENAS OPEN'].map((court) => (
                <div key={court} className="space-y-2">
                  <div className="text-sm font-semibold text-gray-400">{court}</div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((slot) => (
                      <div
                        key={slot}
                        className={`w-12 h-12 rounded border ${
                          slot === 4
                            ? 'bg-[#73d3ff] border-[#73d3ff] flex items-center justify-center font-bold text-black text-xs'
                            : 'bg-[#1a1f26] border-[#2a3038] hover:border-[#73d3ff] cursor-pointer'
                        }`}
                      >
                        {slot === 4 ? 'BOOK' : ''}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Match Hub */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">MATCH HUB</h2>
          <p className="text-gray-500 mb-6">Active feed</p>

          <div className="space-y-4">
            {[1, 2, 3].map((player) => (
              <div key={player} className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-4 hover:border-[#73d3ff] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">Player {player}</span>
                  <span className="text-xs px-2 py-1 bg-[#73d3ff] text-black rounded font-semibold">
                    AVAILABLE
                  </span>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Form</span>
                    <span>Streak</span>
                    <span>Rating</span>
                  </div>
                  <div className="flex justify-between">
                    {[1, 2, 3].map((metric) => (
                      <div key={metric} className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className={`w-1 h-3 rounded-full ${
                              i <= 2 ? 'bg-[#73d3ff]' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 btn-accent text-xs py-1">CHALLENGE</button>
                  <button className="flex-1 btn-accent text-xs py-1">JOIN</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Club Pulse */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">CLUB PULSE</h2>
          <p className="text-gray-500 mb-6">UPCOMING EVENTS</p>

          <div className="space-y-4 mb-8">
            {[1].map((event) => (
              <div key={event} className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-4 hover:border-[#73d3ff] transition-colors">
                <div className="text-xs text-gray-400 mb-2">UPCOMING</div>
                <h3 className="text-sm font-bold mb-2">XNRGY OPEN</h3>
                <p className="text-xs text-gray-500 mb-3">April 20-22</p>
                <button className="w-full btn-accent text-xs py-1">REGISTER</button>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-black mb-4 text-[#73d3ff]">MATCH CLIPS</h3>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[1, 2, 3, 4].map((clip) => (
              <div
                key={clip}
                className="aspect-video bg-[#1a1f26] border border-[#2a3038] rounded hover:border-[#73d3ff] transition-colors cursor-pointer flex items-center justify-center"
              >
                <span className="text-xs text-gray-500">Video {clip}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-black mb-4 text-[#73d3ff]">SOCIAL PHOTOS</h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((photo) => (
              <div
                key={photo}
                className="aspect-square bg-[#1a1f26] border border-[#2a3038] rounded hover:border-[#73d3ff] transition-colors cursor-pointer flex items-center justify-center"
              >
                <span className="text-xs text-gray-500">Photo {photo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
