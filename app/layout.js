import './globals.css';
import { DM_Sans, Space_Grotesk } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: 'TransNorth TMS',
  description: 'Production-style Transport Management System dashboard for North India fleets',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
