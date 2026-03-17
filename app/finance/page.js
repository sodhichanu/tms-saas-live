'use client';

import { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import { FinanceBars } from '@/components/charts/RevenueChart';
import Badge from '@/components/ui/Badge';
import { financeSeries, invoices } from '@/lib/mockData';

export default function FinancePage() {
  const [list, setList] = useState(invoices);

  function generateInvoice() {
    const next = list.length + 10041;
    setList([
      { invoiceNo: `INV-${next}`, orderId: 'ORD-NEW', customer: 'New Customer', amount: 76000, status: 'Pending', dueDate: '2026-04-05' },
      ...list,
    ]);
  }

  return (
    <AppShell title="Finance Dashboard" subtitle="Automated billing, expense intelligence, and profitability insights.">
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <FinanceBars data={financeSeries} />
        </div>
        <div className="card p-4">
          <p className="font-display text-lg font-semibold">Expense Breakdown</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Fuel: ₹13,90,000</li>
            <li>Driver Cost: ₹4,75,000</li>
            <li>Toll: ₹2,60,000</li>
            <li>Misc: ₹1,35,000</li>
          </ul>
          <hr className="my-3" />
          <p className="font-medium">Estimated Profit (MTD): ₹20,65,000</p>
          <button onClick={generateInvoice} className="mt-3 w-full rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white">Auto-Generate Invoice</button>
        </div>
      </div>

      <div className="card mt-4 p-4">
        <p className="font-display text-lg font-semibold">Invoices</p>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-500"><tr><th className="py-2">Invoice</th><th>Order</th><th>Customer</th><th>Amount</th><th>Due Date</th><th>Status</th></tr></thead>
            <tbody>
              {list.map((i) => (
                <tr key={i.invoiceNo} className="border-t border-slate-100">
                  <td className="py-2">{i.invoiceNo}</td><td>{i.orderId}</td><td>{i.customer}</td><td>₹{i.amount.toLocaleString('en-IN')}</td><td>{i.dueDate}</td><td><Badge>{i.status === 'Pending' ? 'PendingPayment' : i.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
