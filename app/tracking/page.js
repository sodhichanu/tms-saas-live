'use client';

import { useMemo, useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import TrackingMap from '@/components/map/TrackingMap';
import Badge from '@/components/ui/Badge';
import { trackingPoints } from '@/lib/mockData';

export default function TrackingPage() {
  const [seed, setSeed] = useState(0);

  const points = useMemo(() => trackingPoints.map((p, i) => ({
    ...p,
    lat: Number((p.lat + ((seed + i) % 3) * 0.015).toFixed(5)),
    lng: Number((p.lng + ((seed + i) % 2) * 0.012).toFixed(5)),
  })), [seed]);

  return (
    <AppShell title="Live Tracking" subtitle="Real-time map, route optimization hints, and delay/deviation alerts.">
      <div className="mb-4 flex items-center justify-between card p-3">
        <p className="text-sm text-slate-600">Simulated feed updates with each refresh click.</p>
        <button className="rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white" onClick={() => setSeed((s) => s + 1)}>
          Refresh GPS
        </button>
      </div>
      <TrackingMap points={points} />
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {points.map((p) => (
          <div key={p.id} className="card card-lift glow-border p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">{p.id}</p>
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
            <p className="mt-1 text-sm text-slate-600">{p.route.join(' → ')}</p>
            <p className="mt-1 text-xs text-slate-500">Optimized ETA: {p.optimizedEtaHours} hrs</p>
            <div className="mt-3"><Badge>{p.alert}</Badge></div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
