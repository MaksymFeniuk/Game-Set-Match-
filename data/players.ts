export interface Player {
  id: number;
  name: string;
  gender: 'M' | 'F';
  sport: string;
  padelLevel: string;
  tennisLevel: string;
  distance: string;
  followers: string;
  tags: string[];
  image: string;
}

// Dutch-style rating: lower is stronger. 1-4 Advanced, 5-7 Intermediate, 8+ Beginner.
export const levelLabel = (level: string) => {
  const value = Number(level);
  if (value <= 4) return 'Advanced';
  if (value <= 7) return 'Intermediate';
  return 'Beginner';
};

export const PLAYERS: Player[] = [
  {
    id: 1,
    name: 'Sarah K.',
    gender: 'F',
    sport: 'Padel',
    padelLevel: '3.2',
    tennisLevel: '5.7',
    distance: '1.8 km',
    followers: '128',
    tags: ['Evenings', 'Doubles', 'Competitive'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Ben H.',
    gender: 'M',
    sport: 'Tennis',
    padelLevel: '4.3',
    tennisLevel: '2.1',
    distance: '2.4 km',
    followers: '96',
    tags: ['Singles', 'Weekends', 'League'],
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Mila V.',
    gender: 'F',
    sport: 'Padel',
    padelLevel: '5.6',
    tennisLevel: '7.2',
    distance: '3.1 km',
    followers: '174',
    tags: ['Social', 'Mixed', 'After work'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Alex R.',
    gender: 'M',
    sport: 'Tennis',
    padelLevel: '4.8',
    tennisLevel: '3.9',
    distance: '0.9 km',
    followers: '142',
    tags: ['Mornings', 'Singles', 'Drills'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Noah S.',
    gender: 'M',
    sport: 'Padel',
    padelLevel: '8.1',
    tennisLevel: '8.7',
    distance: '4.2 km',
    followers: '58',
    tags: ['Beginner', 'Doubles', 'Casual'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Emma L.',
    gender: 'F',
    sport: 'Padel',
    padelLevel: '1.6',
    tennisLevel: '3.4',
    distance: '2.0 km',
    followers: '203',
    tags: ['Competitive', 'Evenings', 'League'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Lucas D.',
    gender: 'M',
    sport: 'Tennis',
    padelLevel: '6.3',
    tennisLevel: '5.8',
    distance: '5.1 km',
    followers: '77',
    tags: ['Weekends', 'Social', 'Doubles'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    name: 'Sofia M.',
    gender: 'F',
    sport: 'Padel',
    padelLevel: '6.7',
    tennisLevel: '7.9',
    distance: '1.4 km',
    followers: '165',
    tags: ['Mixed', 'After work', 'Friendly'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 9,
    name: 'Daniel P.',
    gender: 'M',
    sport: 'Tennis',
    padelLevel: '5.2',
    tennisLevel: '3.6',
    distance: '3.7 km',
    followers: '119',
    tags: ['Singles', 'Competitive', 'Mornings'],
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 10,
    name: 'Isabella G.',
    gender: 'F',
    sport: 'Padel',
    padelLevel: '8.4',
    tennisLevel: '7.8',
    distance: '2.6 km',
    followers: '88',
    tags: ['Casual', 'Doubles', 'Evenings'],
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 11,
    name: 'Max F.',
    gender: 'M',
    sport: 'Tennis',
    padelLevel: '3.7',
    tennisLevel: '2.3',
    distance: '0.7 km',
    followers: '241',
    tags: ['League', 'Competitive', 'Singles'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=220&auto=format&fit=crop&q=80',
  },
  {
    id: 12,
    name: 'Nina T.',
    gender: 'F',
    sport: 'Padel',
    padelLevel: '5.1',
    tennisLevel: '6.2',
    distance: '4.9 km',
    followers: '103',
    tags: ['Social', 'Mixed', 'Weekends'],
    image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=220&auto=format&fit=crop&q=80',
  },
];
