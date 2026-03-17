import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

export default function AppShell({ title, subtitle, children }) {
  return (
    <main className="mx-auto flex max-w-[1380px] gap-4 px-4 py-4">
      <Sidebar />
      <section className="flex-1">
        <TopBar />
        <header className="mb-4">
          <h1 className="font-display text-2xl font-semibold">{title}</h1>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </header>
        {children}
      </section>
    </main>
  );
}
