import AppShell from '@/components/layout/AppShell';
import { drivers } from '@/lib/mockData';

export default function DriversPage() {
  return (
    <AppShell title="Driver & Labour Management" subtitle="Profiles, assignment, trip history, and salary view.">
      <div className="card p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr><th className="py-2">Driver</th><th>Assigned Truck</th><th>Trips</th><th>Salary</th></tr>
            </thead>
            <tbody>
              {drivers.map((d) => (
                <tr key={d.id} className="border-t border-slate-100">
                  <td className="py-2">{d.name}</td><td>{d.assignedTruck}</td><td>{d.trips}</td><td>₹{d.salary.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
