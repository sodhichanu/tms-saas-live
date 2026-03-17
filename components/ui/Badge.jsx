import clsx from 'clsx';

const tone = {
  Idle: 'bg-slate-100 text-slate-700',
  'In Transit': 'bg-brand-100 text-brand-900',
  Maintenance: 'bg-amber-100 text-amber-800',
  Pending: 'bg-slate-100 text-slate-700',
  Assigned: 'bg-sky-100 text-sky-700',
  Delivered: 'bg-emerald-100 text-emerald-700',
  Paid: 'bg-emerald-100 text-emerald-700',
  Partial: 'bg-amber-100 text-amber-800',
  PendingPayment: 'bg-rose-100 text-rose-700',
  'Delay risk': 'bg-rose-100 text-rose-700',
  'Route deviation': 'bg-amber-100 text-amber-800',
  'On route': 'bg-emerald-100 text-emerald-700'
};

export default function Badge({ children }) {
  return <span className={clsx('badge', tone[children] || 'bg-slate-100 text-slate-700')}>{children}</span>;
}
