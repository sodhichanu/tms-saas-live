export default function KpiCard({ title, value, helper }) {
  return (
    <div className="card card-lift glow-border relative overflow-hidden p-4">
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#0f2957] via-[#f97316] to-[#0e9f6e]" />
      <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900">{value}</h3>
      <p className="mt-2 text-xs text-slate-500">{helper}</p>
    </div>
  );
}
