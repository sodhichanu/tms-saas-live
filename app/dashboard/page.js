import AppShell from '@/components/layout/AppShell';
import KpiCard from '@/components/ui/KpiCard';
import { RevenueArea } from '@/components/charts/RevenueChart';
import Badge from '@/components/ui/Badge';
import { financeSeries, kpis, orders } from '@/lib/mockData';

export default function DashboardPage() {
  return (
    <AppShell title="Operations Dashboard" subtitle="Central visibility across fleet, orders, and finance.">
      <div className="card glow-border mb-4 overflow-hidden p-0">
        <div className="relative grid gap-4 bg-gradient-to-r from-brand-900 via-cyan-700 to-blue-700 p-5 text-white md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-white/80">Control Tower Snapshot</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">Live Dispatch Visibility Across North India</h3>
            <p className="mt-1 text-sm text-white/85">Monitor fleet utilization, delayed deliveries, and operational revenue in one place.</p>
          </div>
          <div className="photo-card h-36 md:h-28">
            <img src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80" alt="Truck convoy" className="h-full w-full object-cover" />
            <span className="photo-tag">Dispatch Wall</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <KpiCard title="Active Trucks" value={kpis.activeTrucks} helper="Currently moving across lanes" />
        <KpiCard title="Deliveries In Progress" value={kpis.deliveriesInProgress} helper="Live trips open now" />
        <KpiCard title="Delayed Shipments" value={kpis.delayedShipments} helper="Need dispatch intervention" />
        <KpiCard title="Revenue (MTD)" value={`₹${kpis.revenue.toLocaleString('en-IN')}`} helper="Gross invoiced amount" />
        <KpiCard title="Fuel Cost (MTD)" value={`₹${kpis.fuelCost.toLocaleString('en-IN')}`} helper="Fuel burn watchlist" />
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueArea data={financeSeries} />
        </div>
        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Priority Shipments</p>
          <div className="mt-3 space-y-3">
            {orders.map((o) => (
              <div key={o.id} className="rounded-xl border border-slate-100 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{o.id}</p>
                  <Badge>{o.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-600">{o.pickup} → {o.drop}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
