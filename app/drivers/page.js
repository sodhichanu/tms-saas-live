import AppShell from '@/components/layout/AppShell';
import Badge from '@/components/ui/Badge';
import { drivers } from '@/lib/mockData';

export default function DriversPage() {
  return (
    <AppShell title="Driver & Labour Management" subtitle="Profiles, trip history, salary, HOS compliance, and qualification tracking.">
      <div className="card p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr><th className="py-2">Driver</th><th>Assigned Truck</th><th>Trips</th><th>HOS Today</th><th>License Expiry</th><th>Compliance</th><th>Salary</th></tr>
            </thead>
            <tbody>
              {drivers.map((d) => (
                <tr key={d.id} className="border-t border-slate-100">
                  <td className="py-2">{d.name}</td>
                  <td>{d.assignedTruck}</td>
                  <td>{d.trips}</td>
                  <td>{d.hosHoursToday}/{d.hosLimit} hrs</td>
                  <td>{d.licenseExpiry}</td>
                  <td><Badge>{d.compliance}</Badge></td>
                  <td>₹{d.salary.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
