'use client';

import { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import Badge from '@/components/ui/Badge';
import { orders as initialOrders, trucks, drivers } from '@/lib/mockData';

export default function OrdersPage() {
  const [items, setItems] = useState(initialOrders);
  const [form, setForm] = useState({ pickup: 'Delhi', drop: 'UP', material: '', weight: 10, truck: trucks[0].id, driver: drivers[0].name });

  function createOrder(e) {
    e.preventDefault();
    const id = `ORD-${5000 + items.length + 1}`;
    setItems([{ id, ...form, status: 'Assigned' }, ...items]);
    setForm({ ...form, material: '' });
  }

  return (
    <AppShell title="Shipment Orders" subtitle="Create, assign, and track shipment lifecycles.">
      <div className="grid gap-4 xl:grid-cols-3">
        <form onSubmit={createOrder} className="card space-y-3 p-4">
          <p className="font-display text-lg font-semibold">Create Order</p>
          <input className="w-full rounded-xl border border-slate-200 p-2 text-sm" placeholder="Material" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} />
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded-xl border border-slate-200 p-2 text-sm" placeholder="Pickup" value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} />
            <input className="rounded-xl border border-slate-200 p-2 text-sm" placeholder="Drop" value={form.drop} onChange={(e) => setForm({ ...form, drop: e.target.value })} />
          </div>
          <input type="number" className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={form.weight} onChange={(e) => setForm({ ...form, weight: Number(e.target.value) })} />
          <button className="w-full rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white">Create & Assign</button>
        </form>

        <div className="card xl:col-span-2 p-4">
          <p className="font-display text-lg font-semibold">Orders</p>
          <div className="mt-3 space-y-3">
            {items.map((o) => (
              <div key={o.id} className="rounded-xl border border-slate-100 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{o.id}</p>
                  <Badge>{o.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-600">{o.pickup} → {o.drop} • {o.material} • {o.weight}T</p>
                <p className="mt-1 text-xs text-slate-500">Truck: {o.truck} | Driver: {o.driver}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
