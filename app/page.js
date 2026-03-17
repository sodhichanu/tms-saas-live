'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ActivitySquare,
  BadgeDollarSign,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Download,
  Facebook,
  FileCheck2,
  Gauge,
  Instagram,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Timer,
  Truck,
  Users2,
} from 'lucide-react';
import {
  documentCenter,
  estimateQuote,
  regions,
  testimonials,
  trackingLookup,
  transitTimeMatrix,
  trustSignals,
} from '@/lib/mockData';
import Badge from '@/components/ui/Badge';

const features = [
  { title: 'Real-Time Shipment Tracking', text: 'Customer-facing tracking portal with live status and map coordinates.', icon: Route },
  { title: 'Online Booking + Orders', text: 'Digital order booking with cargo dimensions, weight, and route details.', icon: Truck },
  { title: 'Instant Quote Engine', text: 'Distance + cargo type + service-level based freight estimates.', icon: BadgeDollarSign },
  { title: 'ePOD & Automated Billing', text: 'Capture delivery proof and auto-generate invoice workflows.', icon: FileCheck2 },
  { title: 'Fleet Intelligence', text: 'Maintenance alerts, load planning, and route optimization insights.', icon: ActivitySquare },
  { title: 'Secure Client Portal', text: 'Shipment history, invoice downloads, and preferred addresses.', icon: ShieldCheck },
];

const modes = {
  operations: {
    title: 'Operations Control Template',
    text: 'A dispatcher-first layout with trip boards, delay alerts, and lane-level fleet visibility.',
    points: ['Live fleet heatmap', 'Delay alert panel', 'Shift-wise dispatch tracking'],
  },
  client: {
    title: 'Client Experience Template',
    text: 'Self-service pages for tracking, quote requests, invoices, and communication logs.',
    points: ['Tracking portal', 'Quote + booking forms', 'Invoice & document center'],
  },
  finance: {
    title: 'Finance Intelligence Template',
    text: 'Profitability-first dashboards for fuel, tolls, driver cost, and receivables.',
    points: ['Trip margin analytics', 'Outstanding dashboard', 'Invoice automation'],
  },
};

export default function LandingPage() {
  const [trackNo, setTrackNo] = useState('ORD5001');
  const [quote, setQuote] = useState({ distanceKm: 420, weightTons: 12, cargoType: 'General', serviceLevel: 'Standard' });
  const [mode, setMode] = useState('operations');

  const tracking = trackingLookup[trackNo.trim().toUpperCase()] || null;
  const estimatedCost = useMemo(() => estimateQuote(quote), [quote]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 p-3 backdrop-blur">
        <p className="font-display text-lg font-semibold text-brand-900">TransNorth TMS</p>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#features" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
          <a href="#templates" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Templates</a>
          <a href="#reviews" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Reviews</a>
          <Link href="/contact" className="rounded-lg bg-brand-500 px-3 py-2 font-semibold text-white hover:bg-brand-600">Contact Us</Link>
        </nav>
      </header>

      <section className="card glow-border relative overflow-hidden p-6 md:p-8">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-100 blur-3xl" />
        <div className="absolute -bottom-16 -left-8 h-52 w-52 rounded-full bg-orange-100 blur-3xl" />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Professional Transport Technology</p>
            <h1 className="reveal reveal-delay-1 mt-2 max-w-3xl font-display text-3xl font-bold leading-snug text-night md:text-4xl">
              Premium <span className="gradient-text">trucking operations platform</span> for India with tracking, ePOD, booking, and billing in one system.
            </h1>
            <p className="reveal reveal-delay-2 mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Built for Delhi, Panipat, UP, Bihar, Punjab, Himachal, and Jammu to give dispatch teams and customers a modern, interactive experience.
            </p>
            <div className="reveal reveal-delay-3 mt-5 flex flex-wrap gap-3">
              <Link href="/dashboard" className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">Launch Dashboard</Link>
              <Link href="/portal" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Client Portal</Link>
              <Link href="/contact" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Book a Demo</Link>
            </div>

            <div className="mt-5 highway">
              <span className="truck truck-a">🚚</span>
              <span className="truck truck-b">🚛</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="photo-card col-span-2 h-44">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80" alt="Trucks on highway" className="h-full w-full object-cover" />
              <span className="photo-tag">Live Fleet</span>
            </div>
            <div className="photo-card h-36">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80" alt="Warehouse logistics" className="h-full w-full object-cover" />
              <span className="photo-tag">Warehouse Ops</span>
            </div>
            <div className="photo-card h-36">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80" alt="Freight loading" className="h-full w-full object-cover" />
              <span className="photo-tag">Freight Handling</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stat-marquee mt-4 card overflow-hidden p-0">
        <div className="marquee-track">
          <span>Active Trucks 86</span>
          <span>Deliveries in Progress 42</span>
          <span>On-Time Rate 91.2%</span>
          <span>Monthly Revenue ₹48.25L</span>
          <span>Fuel Cost ₹13.9L</span>
          <span>Active Corridors 27</span>
          <span>Active Trucks 86</span>
          <span>Deliveries in Progress 42</span>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card card-lift p-5">
          <p className="font-display text-lg font-semibold">Track Shipment</p>
          <p className="mt-1 text-sm text-slate-600">Enter tracking number (try: ORD5001, ORD5002)</p>
          <div className="mt-3 flex gap-2">
            <input value={trackNo} onChange={(e) => setTrackNo(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Enter tracking number" />
          </div>
          <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
            {tracking ? (
              <>
                <p className="font-medium">{tracking.orderId}</p>
                <p className="text-sm text-slate-600">Current location: {tracking.location}</p>
                <p className="text-sm text-slate-600">ETA: {tracking.eta}</p>
                <div className="mt-2"><Badge>{tracking.status}</Badge></div>
              </>
            ) : <p className="text-sm text-slate-500">No shipment found. Check tracking number.</p>}
          </div>
        </div>

        <div className="card card-lift p-5">
          <p className="font-display text-lg font-semibold">Instant Freight Quote</p>
          <p className="mt-1 text-sm text-slate-600">Estimate by distance, cargo, and service level.</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <input type="number" value={quote.distanceKm} onChange={(e) => setQuote({ ...quote, distanceKm: Number(e.target.value) })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Distance (km)" />
            <input type="number" value={quote.weightTons} onChange={(e) => setQuote({ ...quote, weightTons: Number(e.target.value) })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Weight (tons)" />
            <select value={quote.cargoType} onChange={(e) => setQuote({ ...quote, cargoType: e.target.value })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm"><option>General</option><option>Fragile</option><option>Hazmat</option></select>
            <select value={quote.serviceLevel} onChange={(e) => setQuote({ ...quote, serviceLevel: e.target.value })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm"><option>Standard</option><option>Priority</option><option>Express</option></select>
          </div>
          <div className="mt-4 rounded-xl bg-brand-50 p-3">
            <p className="text-xs uppercase text-brand-700">Estimated Quote</p>
            <p className="text-2xl font-semibold text-brand-900">₹{estimatedCost.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </section>

      <section id="templates" className="mt-6 card p-5">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={18} className="text-brand-600" />
          <h2 className="font-display text-xl font-semibold">Interactive Layout Templates</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.keys(modes).map((k) => (
            <button
              key={k}
              onClick={() => setMode(k)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${mode === k ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {k === 'operations' ? 'Operations' : k === 'client' ? 'Client Experience' : 'Finance'}
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_280px]">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-display text-lg font-semibold">{modes[mode].title}</p>
            <p className="mt-1 text-sm text-slate-600">{modes[mode].text}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {modes[mode].points.map((p) => <li key={p}>• {p}</li>)}
            </ul>
          </div>
          <div className="photo-card h-[180px] md:h-full">
            <img src={mode === 'operations' ? 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80' : mode === 'client' ? 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80' : 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80'} alt="Template preview" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mt-6" id="features">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={18} className="text-brand-600" />
          <h2 className="font-display text-xl font-semibold md:text-2xl">Core Functional Modules</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <article key={item.title} className="card card-lift glow-border p-5">
              <item.icon className="text-brand-600 floating" size={20} />
              <h3 className="mt-3 font-display text-base font-semibold md:text-lg">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card card-lift p-5">
          <div className="mb-2 flex items-center gap-2">
            <Clock3 size={18} className="text-brand-600" />
            <h2 className="font-display text-lg font-semibold md:text-xl">Transit Time Matrix (India)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-slate-500">
                <tr><th className="py-2">From</th><th>To</th><th>Estimated Time</th></tr>
              </thead>
              <tbody>
                {transitTimeMatrix.map((t) => (
                  <tr key={`${t.from}-${t.to}`} className="border-t border-slate-100">
                    <td className="py-2">{t.from}</td><td>{t.to}</td><td>{t.etaHours} hrs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">ETA may vary with weather, lane restrictions, and loading windows.</p>
        </div>

        <div className="card card-lift p-5">
          <div className="mb-2 flex items-center gap-2">
            <Download size={18} className="text-brand-600" />
            <h2 className="font-display text-lg font-semibold md:text-xl">Document Center</h2>
          </div>
          <div className="space-y-2">
            {documentCenter.map((d) => (
              <button key={d.file} className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-left text-sm hover:bg-slate-50">
                <span>{d.title}</span>
                <span className="text-xs text-slate-500">PDF</span>
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-brand-50 p-3">
            <p className="flex items-center gap-2 text-sm font-medium text-brand-900"><BriefcaseBusiness size={16} /> Drive With Us</p>
            <p className="mt-1 text-sm text-slate-600">Partner as a fleet owner or driver on major North India lanes.</p>
            <Link href="/contact" className="mt-2 inline-block text-sm font-semibold text-brand-700">Apply / Contact Team →</Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3" id="reviews">
        <div className="card p-5 lg:col-span-2">
          <h2 className="font-display text-lg font-semibold md:text-xl">Regions Served</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {regions.map((region) => (
              <span key={region} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-900 transition hover:scale-105 hover:bg-brand-100">{region}</span>
            ))}
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <p key={signal} className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700"><ShieldCheck size={15} className="text-brand-600" /> {signal}</p>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h2 className="font-display text-lg font-semibold md:text-xl">What Customers Think</h2>
          <div className="mt-3 space-y-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-slate-100 p-3">
                <p className="text-sm text-slate-600">"{t.quote}"</p>
                <p className="mt-2 text-xs font-medium text-slate-500">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-600">Need help with your shipment plan? Connect with us.</p>
          <div className="flex items-center gap-2">
            <a href="https://facebook.com" target="_blank" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" rel="noreferrer"><Facebook size={16} /></a>
            <a href="https://instagram.com" target="_blank" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" rel="noreferrer"><Instagram size={16} /></a>
            <a href="https://wa.me/919810000000" target="_blank" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" rel="noreferrer"><MessageCircle size={16} /></a>
            <Link href="/contact" className="rounded-lg bg-brand-500 px-3 py-2 text-sm font-semibold text-white">Contact Us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
