'use client';

import { HelpCircle, Mail, AlertCircle } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-black text-[#73d3ff] flex items-center gap-3">
          <HelpCircle size={40} />
          HELP & SUPPORT
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-[#73d3ff]">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I book a court?',
                a: 'Go to Explore, find a court you like, and click "Book Now". You can select your preferred time and confirm the booking.',
              },
              {
                q: 'Can I cancel a booking?',
                a: 'Yes, you can cancel up to 24 hours before your booking. Visit My Bookings to manage your reservations.',
              },
              {
                q: 'How are player rankings calculated?',
                a: 'Rankings are based on your win rate, form, streak, and number of matches played over the last 30 days.',
              },
              {
                q: 'How do I challenge another player?',
                a: 'On the Explore page, find a player and click "Challenge". They will receive a notification and can accept or decline.',
              },
              {
                q: 'Is there a refund policy?',
                a: 'Yes, full refunds are available for cancellations made 24 hours or more before the booking time.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#73d3ff] transition-colors">
                <h3 className="font-bold mb-2 text-[#73d3ff]">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support & Info */}
        <div className="space-y-6">
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <h2 className="text-2xl font-black mb-6 text-[#73d3ff] flex items-center gap-2">
              <Mail size={24} />
              CONTACT US
            </h2>
            <p className="text-gray-400 mb-4">Have a question or need assistance? Reach out to our support team.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-[#0f1419] border border-[#2a3038] rounded-lg focus:border-[#73d3ff] focus:outline-none text-gray-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 bg-[#0f1419] border border-[#2a3038] rounded-lg focus:border-[#73d3ff] focus:outline-none text-gray-300 resize-none"
              />
              <button className="btn-accent w-full">SEND MESSAGE</button>
            </form>
          </div>

          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <h3 className="text-lg font-black mb-4 text-[#73d3ff] flex items-center gap-2">
              <AlertCircle size={20} />
              IMPORTANT INFO
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>• Service hours: Monday to Friday, 9 AM - 6 PM</li>
              <li>• Response time: Within 24 hours</li>
              <li>• Email: support@gamesetmatch.com</li>
              <li>• Phone: +31-20-123-4567</li>
              <li>• Live chat available during service hours</li>
            </ul>
          </div>

          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6">
            <h3 className="text-lg font-black mb-4 text-[#73d3ff]">RESOURCES</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Community Guidelines', 'Safety Tips'].map((link) => (
                <button
                  key={link}
                  className="block w-full text-left px-4 py-2 text-[#73d3ff] hover:bg-[#0f1419] rounded transition-colors"
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
