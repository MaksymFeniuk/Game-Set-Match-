'use client';

import { Check, Navigation, MapPin } from 'lucide-react';
import FilterModal from './FilterModal';

export interface ClubOption {
  name: string;
  image: string;
}

interface WhereFilterModalProps {
  location: string;
  onLocation: (value: string) => void;
  clubs: ClubOption[];
  selectedClubs: string[];
  onToggleClub: (name: string) => void;
  recent: boolean;
  onRecent: (value: boolean) => void;
  favourite: boolean;
  onFavourite: (value: boolean) => void;
  useDistance: boolean;
  onUseDistance: (value: boolean) => void;
  distance: number;
  onDistance: (value: number) => void;
  onClose: () => void;
  onClear: () => void;
}

const DISTANCE_TICKS = [1, 5, 10, 15, 20, 30, 50];

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button onClick={() => onChange(!checked)} className="w-full flex items-center gap-3 py-3 text-left">
      <span
        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-none transition-colors ${
          checked ? 'border-[var(--color-accent)] bg-[var(--color-accent)]' : 'border-slate-600'
        }`}
      >
        {checked && <Check size={13} className="text-[#090e17]" strokeWidth={3} />}
      </span>
      <span className={`text-sm font-black tracking-wide ${checked ? 'text-white' : 'text-slate-300'}`}>
        {label}
      </span>
    </button>
  );
}

export default function WhereFilterModal({
  location,
  onLocation,
  clubs,
  selectedClubs,
  onToggleClub,
  recent,
  onRecent,
  favourite,
  onFavourite,
  useDistance,
  onUseDistance,
  distance,
  onDistance,
  onClose,
  onClear,
}: WhereFilterModalProps) {
  return (
    <FilterModal title="Where do you want to play?" onClose={onClose} onApply={onClose} onClear={onClear}>
      <div className="relative mb-5">
        <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={location}
          onChange={(e) => onLocation(e.target.value)}
          placeholder="Around me"
          className="w-full pl-11 pr-11 py-3.5 bg-[#090e17] border border-[#1f2937] rounded-xl text-sm font-bold text-white placeholder-slate-500 focus:border-[var(--color-accent)] focus:outline-none transition-colors"
        />
        <Navigation size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
        {clubs.map((club) => {
          const selected = selectedClubs.includes(club.name);
          return (
            <button
              key={club.name}
              onClick={() => onToggleClub(club.name)}
              className={`flex-none w-40 rounded-xl overflow-hidden border text-left transition-colors ${
                selected ? 'border-[var(--color-accent)]' : 'border-[#1f2937] hover:border-slate-600'
              }`}
            >
              <div className="relative h-24">
                <img src={club.image} alt={club.name} className="absolute inset-0 w-full h-full object-cover" />
                {selected && (
                  <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                    <Check size={14} className="text-[#090e17]" strokeWidth={3} />
                  </span>
                )}
              </div>
              <p className="text-xs font-black text-white p-3 leading-tight">{club.name}</p>
            </button>
          );
        })}
      </div>

      <div className="space-y-1">
        <CheckRow label="Recent clubs" checked={recent} onChange={onRecent} />
        <CheckRow label="Favourite clubs" checked={favourite} onChange={onFavourite} />
        <CheckRow label="Select a distance" checked={useDistance} onChange={onUseDistance} />
      </div>

      {useDistance && (
        <div className="pt-3 pb-4 px-1">
          <input
            type="range"
            min={1}
            max={50}
            value={distance}
            onChange={(e) => onDistance(Number(e.target.value))}
            className="w-full accent-[var(--color-accent)]"
          />
          <div className="flex justify-between mt-2">
            {DISTANCE_TICKS.map((tick) => (
              <span
                key={tick}
                className={`text-[10px] font-bold ${distance === tick ? 'text-[var(--color-accent)]' : 'text-slate-500'}`}
              >
                {tick}
              </span>
            ))}
          </div>
          <p className="text-center text-xs font-black text-[var(--color-accent)] tracking-widest mt-3">
            WITHIN {distance} KM
          </p>
        </div>
      )}
    </FilterModal>
  );
}
