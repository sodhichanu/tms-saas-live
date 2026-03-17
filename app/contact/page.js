'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setDone(true);
    setForm({ name: '', company: '', phone: '', email: '', message: '' });
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <section className="card p-6 md:p-8">
        <p className="text-sm font-medium text-brand-600">Get in touch</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-night">Contact TransNorth Transport Team</h1>
        <p className="mt-2 text-slate-600">Tell us your lane, cargo type, and service need. Our dispatch team will respond quickly.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-slate-200 p-4">
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <input type="email" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="How can we help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} required />
            <button className="w-full rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-600">Send Inquiry</button>
            {done && <p className="text-sm text-emerald-700">Thanks, your inquiry is received. We will contact you shortly.</p>}
          </form>

          <div className="space-y-3 rounded-xl border border-slate-200 p-4">
            <p className="font-display text-lg font-semibold">Contact Channels</p>
            <p className="flex items-center gap-2 text-sm text-slate-700"><Phone size={16} /> +91 98100 00000</p>
            <p className="flex items-center gap-2 text-sm text-slate-700"><Mail size={16} /> ops@transnorth.example</p>
            <p className="flex items-center gap-2 text-sm text-slate-700"><MapPin size={16} /> Panipat HQ, Haryana, India</p>
            <div className="mt-3 flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" rel="noreferrer"><Facebook size={16} /></a>
              <a href="https://instagram.com" target="_blank" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" rel="noreferrer"><Instagram size={16} /></a>
              <a href="https://wa.me/919810000000" target="_blank" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" rel="noreferrer"><MessageCircle size={16} /></a>
            </div>
            <hr className="my-3" />
            <Link href="/" className="text-sm font-medium text-brand-700">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
