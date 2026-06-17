'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Search,
  User,
  HelpCircle,
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { icon: LayoutDashboard, label: 'DASHBOARD', path: '/' },
    { icon: Search, label: 'EXPLORE', path: '/explore' },
    { icon: User, label: 'PROFILE', path: '/profile' },
    { icon: HelpCircle, label: 'HELP', path: '/help' },
  ];

  return (
    <div className="w-24 bg-[#090e17] border-r border-[#1f2937] flex flex-col items-center py-6 gap-2">
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`relative flex flex-col items-center gap-1.5 px-2 py-4 rounded-xl transition-all w-full justify-center group
              ${active ? 'text-[var(--color-accent)]' : 'text-slate-500 hover:text-slate-300'}`}
            title={item.label}
          >
            {active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--color-accent)] rounded-r-md shadow-[0_0_10px_rgba(115,211,255,0.5)]"></div>
            )}
            <item.icon size={22} className={`transition-transform duration-300 ${active ? 'scale-110 drop-shadow-[0_0_5px_rgba(115,211,255,0.4)]' : 'group-hover:scale-110'}`} />
            <span className={`text-[10px] font-black tracking-widest text-center ${active ? 'text-[var(--color-accent)]' : ''}`}>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
