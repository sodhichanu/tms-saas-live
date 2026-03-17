'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ActivitySquare,
  BadgeDollarSign,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Download,
  Facebook,
  FileCheck2,
  Instagram,
  MapPin,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
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

const processFlow = [
  { id: '01', title: 'Request & Quote', detail: 'Customer submits lane and load details to get instant pricing.' },
  { id: '02', title: 'Assign Fleet', detail: 'Dispatcher allocates truck + driver based on capacity and region.' },
  { id: '03', title: 'Track & Deliver', detail: 'Live ETA, route compliance, and electronic proof of delivery.' },
  { id: '04', title: 'Invoice & Insights', detail: 'Automated billing and margin analytics for every shipment.' },
];

export default function LandingPage() {
  const [trackNo, setTrackNo] = useState('ORD5001');
  const [quote, setQuote] = useState({ distanceKm: 420, weightTons: 12, cargoType: 'General', serviceLevel: 'Standard' });

  const tracking = trackingLookup[trackNo.trim().toUpperCase()] || null;
  const estimatedCost = useMemo(() => estimateQuote(quote), [quote]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="glass mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 px-4 py-3">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900">LoveKush Transport</p>
          <p className="text-xs text-slate-500">Modern trucking and transport software for India</p>
        </div>
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          <a href="#features" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
          <a href="#workflow" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Workflow</a>
          <a href="#reviews" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Reviews</a>
          <Link href="/contact" className="rounded-lg bg-orange-500 px-3 py-2 font-semibold text-white hover:bg-orange-600">Contact Us</Link>
        </nav>
      </header>

      <section className="hero-rig p-6 text-white md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">Transport SaaS Platform</p>
            <h1 className="reveal reveal-delay-1 mt-2 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
              Move freight smarter with a <span className="gradient-text">next-gen trucking control tower</span>.
            </h1>
            <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-sm text-slate-100/90 md:text-base">
              One platform for booking, live tracking, dispatch, ePOD, CRM, and finance operations across North India routes.
            </p>
            <div className="reveal reveal-delay-3 mt-5 flex flex-wrap gap-3">
              <Link href="/dashboard" className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">Launch Dashboard</Link>
              <Link href="/portal" className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">Open Client Portal</Link>
              <Link href="/contact" className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">Request Demo</Link>
            </div>

            <div className="mt-6 highway">
              <span className="truck truck-a">🚚</span>
              <span className="truck truck-b">🚛</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="photo-card col-span-2 h-44">
              <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80" alt="Freight trucks on highway" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900">LoveKush Transport</span>
              <span className="photo-tag">Pan-India Long Haul</span>
            </div>
            <div className="photo-card h-32">
              <img src="https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=900&q=80" alt="Fleet yard" className="h-full w-full object-cover" />
              <span className="photo-tag">Fleet Yard</span>
            </div>
            <div className="photo-card h-32">
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80" alt="Warehouse loading" className="h-full w-full object-cover" />
              <span className="photo-tag">Dock Loading</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stat-marquee mt-4 card overflow-hidden p-0">
        <div className="marquee-track">
          <span>Active Trucks 86</span>
          <span>Live Deliveries 42</span>
          <span>On-Time Rate 91.2%</span>
          <span>Monthly Revenue ₹48.25L</span>
          <span>Fuel Cost ₹13.9L</span>
          <span>Active Corridors 27</span>
          <span>Client Satisfaction 4.8/5</span>
          <span>Active Trucks 86</span>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card card-lift p-5">
          <p className="font-display text-lg font-semibold text-slate-900">Track Shipment</p>
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
          <p className="font-display text-lg font-semibold text-slate-900">Instant Freight Quote</p>
          <p className="mt-1 text-sm text-slate-600">Estimate by distance, cargo, and service level.</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <input type="number" value={quote.distanceKm} onChange={(e) => setQuote({ ...quote, distanceKm: Number(e.target.value) })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Distance (km)" />
            <input type="number" value={quote.weightTons} onChange={(e) => setQuote({ ...quote, weightTons: Number(e.target.value) })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Weight (tons)" />
            <select value={quote.cargoType} onChange={(e) => setQuote({ ...quote, cargoType: e.target.value })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm"><option>General</option><option>Fragile</option><option>Hazmat</option></select>
            <select value={quote.serviceLevel} onChange={(e) => setQuote({ ...quote, serviceLevel: e.target.value })} className="rounded-xl border border-slate-200 px-3 py-2 text-sm"><option>Standard</option><option>Priority</option><option>Express</option></select>
          </div>
          <div className="mt-4 rounded-xl bg-orange-50 p-3">
            <p className="text-xs uppercase text-orange-700">Estimated Quote</p>
            <p className="text-2xl font-semibold text-orange-900">₹{estimatedCost.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </section>

      <section id="workflow" className="mt-6 card p-5">
        <div className="mb-3 flex items-center gap-2">
          <MapPin size={18} className="text-orange-600" />
          <h2 className="font-display text-xl font-semibold">How Our Transport Workflow Runs</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {processFlow.map((step) => (
            <article key={step.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Step {step.id}</p>
              <p className="mt-1 font-display text-base font-semibold text-slate-900">{step.title}</p>
              <p className="mt-1 text-sm text-slate-600">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6" id="features">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={18} className="text-orange-600" />
          <h2 className="font-display text-xl font-semibold md:text-2xl">Core Functional Modules</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <article key={item.title} className="card card-lift glow-border p-5">
              <item.icon className="text-orange-600 floating" size={20} />
              <h3 className="mt-3 font-display text-base font-semibold md:text-lg">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card card-lift p-5">
          <div className="mb-2 flex items-center gap-2">
            <Clock3 size={18} className="text-orange-600" />
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
            <Download size={18} className="text-orange-600" />
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
          <div className="mt-4 rounded-xl bg-blue-50 p-3">
            <p className="flex items-center gap-2 text-sm font-medium text-blue-900"><BriefcaseBusiness size={16} /> Drive With Us</p>
            <p className="mt-1 text-sm text-slate-600">Partner as a fleet owner or driver on major North India lanes.</p>
            <Link href="/contact" className="mt-2 inline-block text-sm font-semibold text-blue-700">Apply / Contact Team →</Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3" id="reviews">
        <div className="card p-5 lg:col-span-2">
          <h2 className="font-display text-lg font-semibold md:text-xl">Regions Served</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {regions.map((region) => (
              <span key={region} className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-900 transition hover:scale-105 hover:bg-orange-100">{region}</span>
            ))}
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <p key={signal} className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700"><CheckCircle2 size={15} className="text-emerald-600" /> {signal}</p>
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
            <Link href="/contact" className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600">Contact Us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
