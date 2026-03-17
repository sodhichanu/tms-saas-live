import { format } from 'date-fns';
import AppShell from '@/components/layout/AppShell';
import Badge from '@/components/ui/Badge';
import { customers } from '@/lib/mockData';

export default function CrmPage() {
  return (
    <AppShell title="CRM" subtitle="Customer relationships, payment status, and communication trail.">
      <div className="card p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr><th className="py-2">Customer</th><th>Orders</th><th>Payment</th><th>Last Contact</th></tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.name} className="border-t border-slate-100">
                  <td className="py-2">{c.name}</td>
                  <td>{c.orders}</td>
                  <td><Badge>{c.payment === 'Pending' ? 'PendingPayment' : c.payment}</Badge></td>
                  <td>{format(new Date(c.lastContact), 'dd MMM yyyy')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
