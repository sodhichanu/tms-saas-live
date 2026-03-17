import AppShell from '@/components/layout/AppShell';
import { FinanceBars } from '@/components/charts/RevenueChart';
import { financeSeries } from '@/lib/mockData';

export default function FinancePage() {
  return (
    <AppShell title="Finance Dashboard" subtitle="Revenue, expense heads, and trip-level margin visibility.">
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <FinanceBars data={financeSeries} />
        </div>
        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Expense Breakdown</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Fuel: ₹13,90,000</li>
            <li>Driver Cost: ₹4,75,000</li>
            <li>Toll: ₹2,60,000</li>
            <li>Misc: ₹1,35,000</li>
          </ul>
          <hr className="my-3" />
          <p className="font-medium">Estimated Profit (MTD): ₹20,65,000</p>
        </div>
      </div>
    </AppShell>
  );
}
