import { Bell, Search, Truck } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="card mb-4 flex flex-wrap items-center justify-between gap-3 p-3">
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
        <Search size={16} className="text-slate-400" />
        <input className="w-52 bg-transparent text-sm outline-none" placeholder="Search trucks, orders, drivers..." />
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-xl bg-orange-50 px-3 py-2 text-xs font-medium text-orange-800 sm:flex">
          <Truck size={14} />
          Live Fleet Feed Active
        </div>
        <button className="relative rounded-xl border border-slate-200 p-2 hover:bg-slate-50">
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
        </button>
      </div>
    </header>
  );
}
