import { format } from 'date-fns';
import AppShell from '@/components/layout/AppShell';
import Badge from '@/components/ui/Badge';
import { customers, communicationLogs, orders } from '@/lib/mockData';

export default function CrmPage() {
  return (
    <AppShell title="CRM" subtitle="Customer profiles, payment visibility, order history, and communication logs.">
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card xl:col-span-2 p-4">
          <p className="font-display text-lg font-semibold">Customer Accounts</p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-slate-500">
                <tr><th className="py-2">Customer</th><th>Orders</th><th>Outstanding</th><th>Payment</th><th>Last Contact</th></tr>
              </thead>
              <tbody>
                {customers.map((c) => (
                  <tr key={c.name} className="border-t border-slate-100">
                    <td className="py-2">{c.name}</td>
                    <td>{c.orders}</td>
                    <td>₹{c.outstanding.toLocaleString('en-IN')}</td>
                    <td><Badge>{c.payment === 'Pending' ? 'PendingPayment' : c.payment}</Badge></td>
                    <td>{format(new Date(c.lastContact), 'dd MMM yyyy')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Recent Order History</p>
          <div className="mt-3 space-y-2">
            {orders.map((o) => (
              <div key={o.id} className="rounded-lg border border-slate-100 p-3">
                <p className="font-medium">{o.id}</p>
                <p className="text-sm text-slate-600">{o.pickup} → {o.drop}</p>
                <div className="mt-1"><Badge>{o.status}</Badge></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-4 p-4">
        <p className="font-display text-lg font-semibold">Communication Logs</p>
        <div className="mt-3 grid gap-2 md:grid-cols-3">
          {communicationLogs.map((log, i) => (
            <div key={i} className="rounded-lg border border-slate-100 p-3">
              <p className="text-sm font-medium">{log.customer} • {log.channel}</p>
              <p className="text-sm text-slate-600">{log.message}</p>
              <p className="text-xs text-slate-500">{log.by} • {log.at}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
