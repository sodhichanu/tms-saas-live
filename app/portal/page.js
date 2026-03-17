'use client';

import { useMemo, useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import Badge from '@/components/ui/Badge';
import { customers, estimateQuote, invoices, orders, trackingLookup, communicationLogs } from '@/lib/mockData';

export default function PortalPage() {
  const [trackNo, setTrackNo] = useState('ORD5001');
  const [quoteForm, setQuoteForm] = useState({ distanceKm: 300, weightTons: 8, cargoType: 'General', serviceLevel: 'Standard' });

  const tracking = trackingLookup[trackNo.trim().toUpperCase()] || null;
  const quote = useMemo(() => estimateQuote(quoteForm), [quoteForm]);

  return (
    <AppShell title="Secure Client Portal" subtitle="Customer self-service: track shipments, request quotes, download invoices, and review communication logs.">
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Track Shipment</p>
          <input className="mt-2 w-full rounded-xl border border-slate-200 p-2 text-sm" value={trackNo} onChange={(e) => setTrackNo(e.target.value)} placeholder="Tracking number" />
          <div className="mt-3 rounded-xl bg-slate-50 p-3">
            {tracking ? (
              <>
                <p className="font-medium">{tracking.orderId}</p>
                <p className="text-sm text-slate-600">{tracking.location}</p>
                <p className="text-sm text-slate-600">ETA: {tracking.eta}</p>
                <div className="mt-2"><Badge>{tracking.status}</Badge></div>
              </>
            ) : <p className="text-sm text-slate-500">Shipment not found.</p>}
          </div>
        </div>

        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Quick Quote</p>
          <div className="mt-2 space-y-2">
            <input type="number" className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={quoteForm.distanceKm} onChange={(e) => setQuoteForm({ ...quoteForm, distanceKm: Number(e.target.value) })} />
            <input type="number" className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={quoteForm.weightTons} onChange={(e) => setQuoteForm({ ...quoteForm, weightTons: Number(e.target.value) })} />
            <select className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={quoteForm.cargoType} onChange={(e) => setQuoteForm({ ...quoteForm, cargoType: e.target.value })}><option>General</option><option>Fragile</option><option>Hazmat</option></select>
            <select className="w-full rounded-xl border border-slate-200 p-2 text-sm" value={quoteForm.serviceLevel} onChange={(e) => setQuoteForm({ ...quoteForm, serviceLevel: e.target.value })}><option>Standard</option><option>Priority</option><option>Express</option></select>
          </div>
          <div className="mt-3 rounded-xl bg-brand-50 p-3">
            <p className="text-xs text-brand-700">Estimated freight</p>
            <p className="text-xl font-semibold text-brand-900">₹{quote.toLocaleString('en-IN')}</p>
          </div>
        </div>

        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Preferred Addresses</p>
          <div className="mt-2 space-y-2 text-sm text-slate-600">
            {customers.map((c) => <p key={c.name} className="rounded-lg bg-slate-50 px-2 py-2">{c.name}: {c.savedAddress}</p>)}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Invoice Downloads</p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-slate-500"><tr><th className="py-2">Invoice</th><th>Order</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {invoices.map((i) => (
                  <tr key={i.invoiceNo} className="border-t border-slate-100">
                    <td className="py-2">{i.invoiceNo}</td><td>{i.orderId}</td><td><Badge>{i.status === 'Pending' ? 'PendingPayment' : i.status}</Badge></td><td><button className="rounded-lg border px-2 py-1 text-xs">Download PDF</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Communication Logs</p>
          <div className="mt-3 space-y-2">
            {communicationLogs.map((log, idx) => (
              <div key={idx} className="rounded-lg border border-slate-100 p-3">
                <p className="text-sm font-medium">{log.customer} • {log.channel}</p>
                <p className="text-sm text-slate-600">{log.message}</p>
                <p className="text-xs text-slate-500">{log.by} • {log.at}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-4 p-4">
        <p className="font-display text-lg font-semibold">Recent Shipment History</p>
        <div className="mt-3 grid gap-2 md:grid-cols-3">
          {orders.map((o) => (
            <div key={o.id} className="rounded-lg border border-slate-100 p-3">
              <p className="font-medium">{o.id}</p>
              <p className="text-sm text-slate-600">{o.pickup} → {o.drop}</p>
              <div className="mt-2"><Badge>{o.status}</Badge></div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
