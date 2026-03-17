'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Truck, Route, Package, Users, Handshake, Wallet, ShieldCheck, FileCheck2, MapPinned } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/fleet', label: 'Fleet', icon: Truck },
  { href: '/tracking', label: 'Live Tracking', icon: Route },
  { href: '/orders', label: 'Orders', icon: Package },
  { href: '/drivers', label: 'Drivers & Labour', icon: Users },
  { href: '/crm', label: 'CRM', icon: Handshake },
  { href: '/finance', label: 'Finance', icon: Wallet },
  { href: '/portal', label: 'Client Portal', icon: ShieldCheck },
  { href: '/epod', label: 'ePOD', icon: FileCheck2 },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="card h-fit overflow-hidden p-0 lg:sticky lg:top-4">
      <div className="panel-dark p-4">
        <p className="font-display text-lg font-semibold">TransNorth TMS</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-white/80"><MapPinned size={13} /> India Operations Grid</p>
      </div>
      <div className="p-4">
        <nav className="space-y-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition',
                pathname === href
                  ? 'bg-orange-50 text-orange-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-1'
              )}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
