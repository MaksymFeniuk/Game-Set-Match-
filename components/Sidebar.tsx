'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Search,
  User,
  Calendar,
  Trophy,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { icon: LayoutDashboard, label: 'DASHBOARD', path: '/' },
    { icon: Search, label: 'EXPLORE', path: '/explore' },
    { icon: User, label: 'PROFILE', path: '/profile' },
    { icon: Calendar, label: 'BOOKINGS', path: '/bookings' },
    { icon: Trophy, label: 'LEAGUE', path: '/league-tables' },
    { icon: MessageSquare, label: 'MESSAGES', path: '/messages' },
    { icon: HelpCircle, label: 'HELP', path: '/help' },
  ];

  return (
    <div className="w-28 bg-[#1a1f26] border-r border-[#2a3038] flex flex-col items-center py-8 gap-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg transition-all w-full justify-center ${
            isActive(item.path)
              ? 'bg-[#73d3ff] text-black'
              : 'text-gray-400 hover:text-[#73d3ff]'
          }`}
          title={item.label}
        >
          <item.icon size={20} />
          <span className="text-xs font-semibold text-center leading-tight">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
