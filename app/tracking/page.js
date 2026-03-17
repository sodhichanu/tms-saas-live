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
    <AppShell title="Live Tracking" subtitle="Map telemetry with simulated GPS and route alerts.">
      <div className="mb-4 flex items-center justify-between card p-3">
        <p className="text-sm text-slate-600">Simulated feed updates with each refresh click.</p>
        <button className="rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white" onClick={() => setSeed((s) => s + 1)}>
          Refresh GPS
        </button>
      </div>
      <TrackingMap points={points} />
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {points.map((p) => (
          <div key={p.id} className="card p-4">
            <p className="font-medium">{p.id}</p>
            <p className="mt-1 text-sm text-slate-600">{p.route.join(' → ')}</p>
            <div className="mt-3"><Badge>{p.alert}</Badge></div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
