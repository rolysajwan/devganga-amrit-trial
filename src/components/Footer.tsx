import React from 'react';
import { ArrowUp, Sparkles, ShieldAlert, Heart } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050b18] text-[#faf8f5] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#c8a96e]/40 bg-[#060c1d]">
                <img
                  src="/devganga-logo.jpg"
                  alt="DevGanga Amrit"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-lg font-semibold text-white">
                  DEVGANGA AMRIT
                </span>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c8a96e]">
                  Devprayag Sangam
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              A carefully presented expression of India&apos;s timeless spiritual tradition, gathered from the holy confluence of Bhagirathi and Alaknanda in Devprayag, Uttarakhand.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p>Tehri Garhwal, Uttarakhand 249301, India</p>
              <p className="font-mono text-gray-300">{BRAND_DATA.phone}</p>
              <p className="text-[#c8a96e]">{BRAND_DATA.contactEmail}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96e]">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">Our Story & Confluence</a>
              </li>
              <li>
                <a href="#devprayag" className="hover:text-white transition-colors">Devprayag Origin</a>
              </li>
              <li>
                <a href="#product" className="hover:text-white transition-colors">Ganga Jal (250 ml)</a>
              </li>
              <li>
                <a href="#rituals" className="hover:text-white transition-colors">Ritual Uses</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Devprayag Desk</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Critical Consumer Advisories */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96e]">
              STATUTORY ADVISORY
            </div>
            <div className="p-4 rounded-xl bg-[#0a1128] border border-[#c8a96e]/30 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c8a96e]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>{BRAND_DATA.disclaimerUsage}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                DevGanga Amrit is presented specifically for daily puja, abhishek, havan, and religious observance.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-300 pt-1 border-t border-white/5">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                <span>SAFETY: {BRAND_DATA.disclaimerSafety}</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Not packaged or formulated for consumption or drinking. Keep in a reverent, clean place.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} DEVGANGA AMRIT. All rights reserved. Sample Pre-Launch Presentation.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#c8a96e] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
