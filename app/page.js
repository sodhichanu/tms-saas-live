'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ActivitySquare, Route, Truck, Users2, Gauge, Timer, ShieldCheck, BadgeDollarSign, Building2, FileCheck2, Sparkles, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { estimateQuote, regions, testimonials, trackingLookup, trustSignals } from '@/lib/mockData';
import Badge from '@/components/ui/Badge';

const features = [
  { title: 'Real-Time Shipment Tracking', text: 'Customer-facing tracking portal with live status and map coordinates.', icon: Route },
  { title: 'Online Booking + Orders', text: 'Digital order booking with cargo dimensions, weight, and route details.', icon: Truck },
  { title: 'Instant Quote Engine', text: 'Distance + cargo type + service-level based freight estimates.', icon: BadgeDollarSign },
  { title: 'ePOD & Automated Billing', text: 'Capture delivery proof and auto-generate invoice workflows.', icon: FileCheck2 },
  { title: 'Fleet Intelligence', text: 'Maintenance alerts, load planning, and route optimization insights.', icon: ActivitySquare },
  { title: 'Secure Client Portal', text: 'Shipment history, invoice downloads, and preferred addresses.', icon: ShieldCheck },
];

export default function LandingPage() {
  const [trackNo, setTrackNo] = useState('ORD5001');
  const [quote, setQuote] = useState({ distanceKm: 420, weightTons: 12, cargoType: 'General', serviceLevel: 'Standard' });

  const tracking = trackingLookup[trackNo.trim().toUpperCase()] || null;
  const estimatedCost = useMemo(() => estimateQuote(quote), [quote]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/85 p-3 backdrop-blur">
        <p className="font-display text-lg font-semibold text-brand-900">TransNorth TMS</p>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#features" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
          <a href="#reviews" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Reviews</a>
          <Link href="/contact" className="rounded-lg bg-brand-500 px-3 py-2 font-semibold text-white hover:bg-brand-600">Contact Us</Link>
        </nav>
      </header>

      <section className="card glow-border relative overflow-hidden p-7 md:p-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-100 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
        <div className="absolute right-8 top-8 hidden rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur lg:block floating">
          Enterprise Transport Suite
        </div>

        <p className="text-sm font-medium text-brand-600">Modern TMS for North India Lanes</p>
        <h1 className="mt-2 max-w-4xl font-display text-4xl font-bold leading-tight text-night md:text-5xl">
          Professional transport and trucking software with moving-fleet visibility, ePOD, billing automation, and secure customer portals.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Built for Delhi, Panipat, UP, Bihar, Punjab, Himachal, and Jammu with real-time control, compliance monitoring, and profitability intelligence.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">Launch Dashboard</Link>
          <Link href="/portal" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Open Client Portal</Link>
          <Link href="/contact" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Book a Demo</Link>
        </div>

        <div className="mt-6 highway">
          <span className="truck truck-a">🚚</span>
          <span className="truck truck-b">🚛</span>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-4">
          <div className="glass rounded-xl border border-white/70 p-3"><p className="flex items-center gap-2 text-xs text-slate-500"><Gauge size={14} /> Utilization</p><p className="mt-1 text-xl font-semibold text-brand-900">82.4%</p></div>
          <div className="glass rounded-xl border border-white/70 p-3"><p className="flex items-center gap-2 text-xs text-slate-500"><Timer size={14} /> On-time</p><p className="mt-1 text-xl font-semibold text-brand-900">91.2%</p></div>
          <div className="glass rounded-xl border border-white/70 p-3"><p className="flex items-center gap-2 text-xs text-slate-500"><Route size={14} /> Active Routes</p><p className="mt-1 text-xl font-semibold text-brand-900">27</p></div>
          <div className="glass rounded-xl border border-white/70 p-3"><p className="flex items-center gap-2 text-xs text-slate-500"><Building2 size={14} /> Clients</p><p className="mt-1 text-xl font-semibold text-brand-900">140+</p></div>
        </div>
      </section>

      <section className="mt-7 grid gap-4 lg:grid-cols-2">
        <div className="card card-lift p-5">
          <p className="font-display text-xl font-semibold">Track Shipment</p>
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
          <p className="font-display text-xl font-semibold">Instant Freight Quote</p>
          <p className="mt-1 text-sm text-slate-600">Estimate quickly by distance, cargo, and service level.</p>
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

      <section className="mt-7" id="features">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={18} className="text-brand-600" />
          <h2 className="font-display text-2xl font-semibold">Core Functional Modules</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((item) => (
            <article key={item.title} className="card card-lift glow-border p-5">
              <item.icon className="text-brand-600 floating" size={20} />
              <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-7 grid gap-4 lg:grid-cols-3" id="reviews">
        <div className="card p-5 lg:col-span-2">
          <h2 className="font-display text-xl font-semibold">Regions Served</h2>
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
          <h2 className="font-display text-xl font-semibold">What Customers Think</h2>
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
