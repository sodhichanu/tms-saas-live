'use client';

import { useMemo, useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import Badge from '@/components/ui/Badge';
import { regions, trucks as initialTrucks } from '@/lib/mockData';

export default function FleetPage() {
  const [region, setRegion] = useState('All');
  const [trucks, setTrucks] = useState(initialTrucks);
  const [form, setForm] = useState({ reg: '', type: '', region: 'Delhi', capacity: 16 });

  const visible = useMemo(() => {
    if (region === 'All') return trucks;
    return trucks.filter((t) => t.region === region);
  }, [trucks, region]);

  function addTruck(e) {
    e.preventDefault();
    if (!form.reg || !form.type) return;
    setTrucks((prev) => [
      { id: `TRK-${100 + prev.length + 1}`, ...form, status: 'Idle' },
      ...prev,
    ]);
    setForm({ reg: '', type: '', region: 'Delhi', capacity: 16 });
  }

  return (
    <AppShell title="Fleet Management" subtitle="Track trucks, status, and regional utilization.">
      <div className="grid gap-4 xl:grid-cols-3">
        <form onSubmit={addTruck} className="card space-y-3 p-4">
          <p className="font-display text-lg font-semibold">Add Truck</p>
          <input className="w-full rounded-xl border border-slate-200 p-2 text-sm" placeholder="Registration number" value={form.reg} onChange={(e) => setForm({ ...form, reg: e.target.value })} />
          <input className="w-full rounded-xl border border-slate-200 p-2 text-sm" placeholder="Truck type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} />
          <select className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })}>
            {regions.map((r) => <option key={r}>{r}</option>)}
          </select>
          <input type="number" className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })} />
          <button className="w-full rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white">Save Truck</button>
        </form>

        <div className="card xl:col-span-2 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-display text-lg font-semibold">Fleet List</p>
            <select className="rounded-xl border border-slate-200 px-2 py-1 text-sm" value={region} onChange={(e) => setRegion(e.target.value)}>
              <option>All</option>
              {regions.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-slate-500">
                <tr>
                  <th className="py-2">Truck ID</th><th>Reg</th><th>Type</th><th>Capacity</th><th>Region</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((truck) => (
                  <tr key={truck.id} className="border-t border-slate-100">
                    <td className="py-2">{truck.id}</td><td>{truck.reg}</td><td>{truck.type}</td><td>{truck.capacity}T</td><td>{truck.region}</td><td><Badge>{truck.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
