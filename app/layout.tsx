import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../app/globals.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "GAME! SET! MATCH!",
  description: "Find courts and players",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} bg-[var(--color-dark-bg)] text-slate-100 flex flex-col h-screen font-sans antialiased selection:bg-[var(--color-accent)]/30 selection:text-[var(--color-accent)]`}>
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}