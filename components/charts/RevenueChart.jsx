'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

export function RevenueArea({ data }) {
  return (
    <div className="card p-4">
      <p className="font-display text-lg font-semibold">Revenue Trend</p>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="#0f766e" fill="#99f6e4" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function FinanceBars({ data }) {
  return (
    <div className="card p-4">
      <p className="font-display text-lg font-semibold">Profitability Mix</p>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#0f766e" />
            <Bar dataKey="expense" fill="#f97316" />
            <Bar dataKey="profit" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
