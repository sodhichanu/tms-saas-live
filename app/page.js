import Link from 'next/link';
import { ActivitySquare, Route, Truck, Users2 } from 'lucide-react';
import { regions } from '@/lib/mockData';

const features = [
  { title: 'Fleet Command Center', text: 'Track 100+ trucks, maintenance, and utilization from one control view.', icon: Truck },
  { title: 'Live Tracking Intelligence', text: 'Map-based visibility with delay and route-deviation alerts.', icon: Route },
  { title: 'Operations + CRM', text: 'Connect dispatch, customers, and payment follow-ups in one workflow.', icon: Users2 },
  { title: 'Finance Analytics', text: 'Trip-level profitability with fuel, toll, and driver cost lenses.', icon: ActivitySquare },
];

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="card relative overflow-hidden p-8">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-100 blur-2xl" />
        <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-orange-100 blur-2xl" />
        <p className="text-sm font-medium text-brand-600">Smart Transport SaaS</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold leading-tight text-night">
          Move North India freight with real-time command, tracking, and profitable dispatch decisions.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Built for Delhi, Panipat, UP, Bihar, Punjab, Himachal, and Jammu lanes with modern logistics visibility.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/dashboard" className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Open Dashboard
          </Link>
          <a href="#features" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map((item) => (
          <article key={item.title} className="card p-5">
            <item.icon className="text-brand-600" size={20} />
            <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2">
          <h2 className="font-display text-xl font-semibold">Regions Served</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {regions.map((region) => (
              <span key={region} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-900">{region}</span>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h2 className="font-display text-xl font-semibold">What customers say</h2>
          <p className="mt-3 text-sm text-slate-600">"Dispatch turnaround improved by 28% in one quarter after switching to TransNorth."</p>
          <p className="mt-2 text-xs text-slate-500">COO, NorthSteel Logistics</p>
        </div>
      </section>
    </main>
  );
}
