'use client';

import { HelpCircle, Mail, AlertCircle } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-white font-[var(--font-urbanist)] uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-4">
          <HelpCircle size={36} className="text-[var(--color-accent)] drop-shadow-[0_0_15px_rgba(115,211,255,0.4)]" />
          HELP & SUPPORT
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* FAQs */}
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-lg font-black mb-4 text-[var(--color-cyan-glow)] font-[var(--font-urbanist)] uppercase tracking-widest">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I find a match?',
                a: 'Go to Explore, use the Sport, When, and Where filters to narrow open matches, and click "Join Match" on one that fits your level and schedule.',
              },
              {
                q: 'How do I join an open match?',
                a: 'Open matches show how many spots are left (e.g. 3/4 players). Click "Join Match" to take a free spot — the host is notified instantly.',
              },
              {
                q: 'How are player rankings calculated?',
                a: 'Rankings are based on your win rate, form, streak, and number of matches played over the last 30 days.',
              },
              {
                q: 'How do I challenge another player?',
                a: 'Open a player\'s profile from Explore or search, then click "Challenge". They will receive a notification and can accept or decline.',
              },
              {
                q: 'How do I follow other players?',
                a: 'Tap "Follow" on any player card or profile to keep up with their matches and build your match circle.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support & Info */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h2 className="text-lg font-black mb-6 text-white font-[var(--font-urbanist)] uppercase tracking-widest flex items-center gap-3">
              <Mail size={20} className="text-[var(--color-neon-orange)]" />
              CONTACT US
            </h2>
            <p className="text-slate-400 text-sm font-semibold mb-6">Have a question or need assistance? Reach out to our support team.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full px-5 py-3.5 bg-[#090e17] border border-[#1f2937] rounded-xl focus:border-[var(--color-neon-orange)]/50 focus:outline-none text-white placeholder-slate-600 text-xs font-bold tracking-widest transition-all"
              />
              <textarea
                placeholder="YOUR MESSAGE"
                rows={4}
                className="w-full px-5 py-3.5 bg-[#090e17] border border-[#1f2937] rounded-xl focus:border-[var(--color-neon-orange)]/50 focus:outline-none text-white placeholder-slate-600 text-xs font-bold tracking-widest transition-all resize-none"
              />
              <button className="w-full text-[12px] font-black tracking-widest text-[#090e17] bg-[var(--color-neon-orange)] hover:brightness-110 py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(255,107,0,0.2)] hover:shadow-[0_0_25px_rgba(255,107,0,0.4)]">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-black mb-6 text-white font-[var(--font-urbanist)] uppercase tracking-widest flex items-center gap-3">
              <AlertCircle size={20} className="text-[var(--color-accent)]" />
              IMPORTANT INFO
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 font-bold">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shadow-[0_0_5px_rgba(115,211,255,0.8)]"></span> Service hours: Monday to Friday, 9 AM - 6 PM</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shadow-[0_0_5px_rgba(115,211,255,0.8)]"></span> Response time: Within 24 hours</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shadow-[0_0_5px_rgba(115,211,255,0.8)]"></span> Email: <span className="text-[var(--color-accent)]">support@gamesetmatch.com</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shadow-[0_0_5px_rgba(115,211,255,0.8)]"></span> Phone: +31-20-123-4567</li>
            </ul>
          </div>

          <div className="bg-[var(--color-dark-card)] border border-[#1f2937] rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-black mb-6 text-white font-[var(--font-urbanist)] uppercase tracking-widest">RESOURCES</h3>
            <ul className="space-y-2">
              {['TERMS OF SERVICE', 'PRIVACY POLICY', 'COMMUNITY GUIDELINES', 'SAFETY TIPS'].map((link) => (
                <button
                  key={link}
                  className="block w-full text-left px-5 py-3 text-slate-400 text-[11px] font-black tracking-widest hover:text-[var(--color-accent)] hover:bg-[#090e17] rounded-lg border border-transparent hover:border-[#1f2937] transition-all"
                >
                  {link}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
