import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

export const ComingSoonSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem('devganga_newsletter') || '[]');
        existing.push({ email, date: new Date().toISOString() });
        localStorage.setItem('devganga_newsletter', JSON.stringify(existing));
      } catch {
        // ignore storage error
      }
    }, 500);
  };

  return (
    <section
      id="coming-soon"
      className="relative py-28 sm:py-36 bg-[#050b18] text-[#faf8f5] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#101c3d]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c8a96e]/10 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Brand Crest & Eyebrow */}
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full border border-[#c8a96e]/40 p-1 bg-[#060c1d]">
            <img
              src="/devganga-logo.jpg"
              alt="Emblem"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c8a96e]">
            INDEPENDENT PRE-LAUNCH INVITATION
          </span>
        </div>

        {/* Powerful Main Heading */}
        <h2
          id="coming-soon-heading"
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#faf8f5] leading-[1.05] mb-6"
        >
          SOMETHING SACRED<br />
          <span className="italic text-[#c8a96e]">IS ON ITS WAY.</span>
        </h2>

        {/* Brand & Status Subtitle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 text-sm">
          <span className="font-serif text-2xl sm:text-3xl text-gray-200 tracking-wider font-medium">
            {BRAND_DATA.name}
          </span>
          <span className="hidden sm:inline text-gray-600">&bull;</span>
          <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#c8a96e] text-[#050b18]">
            {BRAND_DATA.status}
          </span>
        </div>

        <p className="text-base sm:text-lg text-gray-300 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          The first inaugural 250 ml ritual bottling of sacred Devprayag Sangam Ganga Jal is being prepared with quiet reverence. Register below to receive priority notification when orders open.
        </p>

        {/* Notification Form Card */}
        <div className="max-w-xl mx-auto p-2 sm:p-3 rounded-2xl bg-[#0a1128] border border-[#c8a96e]/30 shadow-2xl shadow-black/60 mb-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                id="newsletter-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 bg-[#060c1d] rounded-xl text-white placeholder-gray-500 text-sm border border-white/10 focus:outline-none focus:border-[#c8a96e] transition-colors"
              />
              <button
                id="newsletter-submit-btn"
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-[#c8a96e] hover:bg-[#d4af37] text-[#050b18] font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-md hover:shadow-[#c8a96e]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Registering...</span>
                ) : (
                  <>
                    <span>NOTIFY ME</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-4 px-6 flex items-center justify-center gap-3 text-emerald-300 text-sm bg-emerald-950/40 rounded-xl border border-emerald-800/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Pranam. Your email has been reserved for inaugural notification.</span>
            </div>
          )}
        </div>

        {/* Minimalist Social Media & Brand Signature */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
            <span>Devprayag, Tehri Garhwal, Uttarakhand</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-default">
              Instagram
            </span>
            <span className="text-gray-700">&bull;</span>
            <span className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-default">
              YouTube
            </span>
            <span className="text-gray-700">&bull;</span>
            <span className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-default">
              WhatsApp Updates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
