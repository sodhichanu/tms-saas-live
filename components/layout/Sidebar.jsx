'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Truck, Route, Package, Users, Handshake, Wallet } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/fleet', label: 'Fleet', icon: Truck },
  { href: '/tracking', label: 'Live Tracking', icon: Route },
  { href: '/orders', label: 'Orders', icon: Package },
  { href: '/drivers', label: 'Drivers & Labour', icon: Users },
  { href: '/crm', label: 'CRM', icon: Handshake },
  { href: '/finance', label: 'Finance', icon: Wallet },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="card h-fit min-w-[250px] p-4">
      <p className="font-display text-lg font-semibold text-brand-900">TransNorth TMS</p>
      <p className="mt-1 text-xs text-slate-500">North India Control Tower</p>
      <nav className="mt-4 space-y-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex items-center gap-2 rounded-xl px-3 py-2 text-sm',
              pathname === href ? 'bg-brand-50 text-brand-900' : 'text-slate-600 hover:bg-slate-50'
            )}
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
