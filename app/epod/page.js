'use client';

import { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import { orders } from '@/lib/mockData';

export default function EpodPage() {
  const [form, setForm] = useState({ orderId: orders[0].id, receiverName: '', signatureBy: '', note: '', deliveredAt: new Date().toISOString().slice(0, 16) });
  const [submitted, setSubmitted] = useState(null);

  function submit(e) {
    e.preventDefault();
    const payload = { ...form, gps: '28.6139,77.2090', photos: 2 };
    setSubmitted(payload);
    setForm({ ...form, receiverName: '', signatureBy: '', note: '' });
  }

  return (
    <AppShell title="Electronic Proof of Delivery (ePOD)" subtitle="Mobile-friendly delivery confirmation with signature, photo proof, and GPS timestamp.">
      <div className="grid gap-4 lg:grid-cols-2">
        <form onSubmit={submit} className="card space-y-3 p-4">
          <p className="font-display text-lg font-semibold">Capture Delivery Proof</p>
          <select className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={form.orderId} onChange={(e) => setForm({ ...form, orderId: e.target.value })}>
            {orders.map((o) => <option key={o.id}>{o.id}</option>)}
          </select>
          <input className="w-full rounded-xl border border-slate-200 p-2 text-sm" placeholder="Receiver name" value={form.receiverName} onChange={(e) => setForm({ ...form, receiverName: e.target.value })} />
          <input className="w-full rounded-xl border border-slate-200 p-2 text-sm" placeholder="Digital signature (type full name)" value={form.signatureBy} onChange={(e) => setForm({ ...form, signatureBy: e.target.value })} />
          <input type="datetime-local" className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={form.deliveredAt} onChange={(e) => setForm({ ...form, deliveredAt: e.target.value })} />
          <label className="block rounded-xl border border-dashed border-slate-300 p-3 text-sm text-slate-500">Upload delivery photos<input type="file" multiple className="mt-2 block w-full text-xs" /></label>
          <textarea className="w-full rounded-xl border border-slate-200 p-2 text-sm" placeholder="Delivery note" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
          <button className="w-full rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white">Submit ePOD</button>
        </form>

        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Last Captured Record</p>
          {!submitted ? (
            <p className="mt-2 text-sm text-slate-500">No ePOD submitted yet.</p>
          ) : (
            <div className="mt-3 space-y-2 text-sm">
              <p><strong>Order:</strong> {submitted.orderId}</p>
              <p><strong>Receiver:</strong> {submitted.receiverName}</p>
              <p><strong>Signed by:</strong> {submitted.signatureBy}</p>
              <p><strong>Delivered at:</strong> {submitted.deliveredAt}</p>
              <p><strong>GPS:</strong> {submitted.gps}</p>
              <p><strong>Photos attached:</strong> {submitted.photos}</p>
              <p className="rounded-lg bg-slate-50 p-2"><strong>Note:</strong> {submitted.note || 'N/A'}</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
