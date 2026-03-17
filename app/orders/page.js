'use client';

import { useMemo, useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import Badge from '@/components/ui/Badge';
import { orders as initialOrders, trucks, drivers, estimateQuote } from '@/lib/mockData';

export default function OrdersPage() {
  const [items, setItems] = useState(initialOrders);
  const [form, setForm] = useState({
    pickup: 'Delhi',
    drop: 'UP',
    material: '',
    weight: 10,
    dimensions: '14x7x6 ft',
    serviceLevel: 'Standard',
    truck: trucks[0].id,
    driver: drivers[0].name,
    distanceKm: 380,
  });

  const quote = useMemo(() => estimateQuote({
    distanceKm: form.distanceKm,
    weightTons: form.weight,
    cargoType: form.material.toLowerCase().includes('chemical') ? 'Hazmat' : 'General',
    serviceLevel: form.serviceLevel,
  }), [form]);

  function createOrder(e) {
    e.preventDefault();
    if (!form.material) return;
    const id = `ORD-${5000 + items.length + 1}`;
    setItems([{ id, ...form, status: 'Assigned', etaHours: Math.max(6, Math.round(form.distanceKm / 42)) }, ...items]);
    setForm({ ...form, material: '' });
  }

  return (
    <AppShell title="Shipment Orders" subtitle="Online booking, assignment, and milestone lifecycle management.">
      <div className="grid gap-4 xl:grid-cols-3">
        <form onSubmit={createOrder} className="card card-lift space-y-3 p-4">
          <p className="font-display text-lg font-semibold">Create Booking</p>
          <input className="w-full rounded-xl border border-slate-200 p-2 text-sm" placeholder="Material type" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} />
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded-xl border border-slate-200 p-2 text-sm" placeholder="Pickup" value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} />
            <input className="rounded-xl border border-slate-200 p-2 text-sm" placeholder="Drop" value={form.drop} onChange={(e) => setForm({ ...form, drop: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" className="rounded-xl border border-slate-200 p-2 text-sm" value={form.weight} onChange={(e) => setForm({ ...form, weight: Number(e.target.value) })} />
            <input className="rounded-xl border border-slate-200 p-2 text-sm" value={form.dimensions} onChange={(e) => setForm({ ...form, dimensions: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select className="rounded-xl border border-slate-200 p-2 text-sm" value={form.serviceLevel} onChange={(e) => setForm({ ...form, serviceLevel: e.target.value })}>
              <option>Standard</option><option>Priority</option><option>Express</option>
            </select>
            <input type="number" className="rounded-xl border border-slate-200 p-2 text-sm" value={form.distanceKm} onChange={(e) => setForm({ ...form, distanceKm: Number(e.target.value) })} />
          </div>
          <select className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={form.truck} onChange={(e) => setForm({ ...form, truck: e.target.value })}>
            {trucks.map((t) => <option key={t.id}>{t.id}</option>)}
          </select>
          <select className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={form.driver} onChange={(e) => setForm({ ...form, driver: e.target.value })}>
            {drivers.map((d) => <option key={d.id}>{d.name}</option>)}
          </select>
          <div className="rounded-xl bg-brand-50 p-3">
            <p className="text-xs text-brand-700">Estimated quote</p>
            <p className="text-xl font-semibold text-brand-900">₹{quote.toLocaleString('en-IN')}</p>
          </div>
          <button className="w-full rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white">Create & Assign</button>
        </form>

        <div className="card xl:col-span-2 p-4">
          <p className="font-display text-lg font-semibold">Shipment Orders</p>
          <div className="mt-3 space-y-3">
            {items.map((o) => (
              <div key={o.id} className="rounded-xl border border-slate-100 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{o.id}</p>
                  <Badge>{o.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-600">{o.pickup} → {o.drop} • {o.material} • {o.weight}T • {o.dimensions}</p>
                <p className="mt-1 text-xs text-slate-500">Truck: {o.truck} | Driver: {o.driver} | Service: {o.serviceLevel} | ETA: {o.etaHours}h</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
