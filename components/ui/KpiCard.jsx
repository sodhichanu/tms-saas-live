export default function KpiCard({ title, value, helper }) {
  return (
    <div className="card p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900">{value}</h3>
      <p className="mt-2 text-xs text-slate-500">{helper}</p>
    </div>
  );
}
