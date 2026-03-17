import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

export default function AppShell({ title, subtitle, children }) {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-4">
      <div className="dash-shell relative grid gap-4 lg:grid-cols-[270px_1fr]">
        <Sidebar />
        <section className="relative">
          <TopBar />
          <header className="mb-4 rounded-2xl border border-slate-200/80 bg-white/90 p-4 backdrop-blur">
            <h1 className="font-display text-2xl font-semibold text-slate-900">{title}</h1>
            <p className="text-sm text-slate-600">{subtitle}</p>
          </header>
          {children}
        </section>
      </div>
    </main>
  );
}
