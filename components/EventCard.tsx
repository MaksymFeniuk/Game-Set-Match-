'use client';

export default function EventCard() {
  return (
    <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-4 hover:border-[#73d3ff] transition-colors">
      <div className="text-xs text-gray-400 mb-2 uppercase">Upcoming</div>
      <h3 className="text-lg font-bold mb-2">XNRGY OPEN TOURNAMENT</h3>
      <p className="text-xs text-gray-500 mb-3">Upcoming 3000py open | April 20-22</p>
      <button className="w-full btn-accent text-sm py-1">REGISTER</button>
    </div>
  );
}
