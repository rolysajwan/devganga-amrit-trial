import React from 'react';
import { Sparkles, ArrowDown, ShieldAlert, Bell, ChevronRight } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface HeroProps {
  onOpenNotify: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenNotify }) => {
  const handleScrollToStory = () => {
    const element = document.querySelector('#story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#060c1d]"
    >
      {/* Background Himalayan Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/devprayag-sangam.jpg"
          alt="Atmospheric Devprayag Himalayas"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105 transition-transform duration-1000"
        />
        {/* Soft luxury Vignette & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c1d] via-[#060c1d]/90 to-[#060c1d]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c1d] via-transparent to-[#060c1d]/70" />
      </div>

      {/* Floating subtle ambient particles (restrained & elegant) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#c8a96e]/40 animate-ping duration-1000" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#c8a96e]/30 blur-[1px] animate-pulse duration-700" />
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full bg-[#c8a96e]/20" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/20 blur-[0.5px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)] py-12">
          {/* Left Column: Brand & Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Sacred Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 self-start">
              <span className="w-6 h-[1px] bg-[#c8a96e]/60" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a96e]">
                {BRAND_DATA.eyebrow}
              </span>
            </div>

            {/* Main Brand Title */}
            <h1
              id="hero-main-title"
              className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal tracking-tight text-[#faf8f5] leading-[0.98] mb-4"
            >
              DEVGANGA<br />
              <span className="text-[#c8a96e] italic font-light tracking-wide">AMRIT</span>
            </h1>

            {/* Subheading */}
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-6">
              {BRAND_DATA.subheading}
            </h2>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-xl mb-8">
              {BRAND_DATA.description}
            </p>

            {/* Prominent Dual Mandatory Badges */}
            <div className="mb-8 p-4 rounded-xl bg-[#0a1128]/80 border border-[#c8a96e]/30 backdrop-blur-sm max-w-lg shadow-lg">
              <div className="flex items-center gap-2 text-[#c8a96e] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">
                <Sparkles className="w-4 h-4 text-[#c8a96e]" />
                <span>{BRAND_DATA.disclaimerUsage}</span>
              </div>
              <div className="flex items-center gap-2 text-rose-300/90 text-xs sm:text-sm font-medium tracking-wide">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>IMPORTANT: {BRAND_DATA.disclaimerSafety}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={onOpenNotify}
                className="px-8 py-4 bg-[#c8a96e] hover:bg-[#d4af37] text-[#060c1d] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl hover:shadow-[#c8a96e]/25 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Bell className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{BRAND_DATA.status} &bull; NOTIFY ME</span>
              </button>

              <button
                id="hero-secondary-cta"
                onClick={handleScrollToStory}
                className="px-8 py-4 border border-white/20 hover:border-[#c8a96e] bg-white/5 hover:bg-[#c8a96e]/10 text-gray-200 hover:text-white font-medium text-xs sm:text-sm uppercase tracking-[0.18em] rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>DISCOVER OUR STORY</span>
                <ChevronRight className="w-4 h-4 text-[#c8a96e]" />
              </button>
            </div>

            {/* Subtle Editorial Footnote */}
            <div className="mt-8 flex items-center gap-6 text-[11px] tracking-wider text-gray-400 uppercase">
              <span>Origin: Devprayag (249301)</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Format: 250 ml Glass</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Inaugural: ₹299</span>
            </div>
          </div>

          {/* Right Column: Hero Product Bottle Visual */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center">
              {/* Backlight halo glow (subtle, warm antique gold tone) */}
              <div
                className="absolute inset-0 max-w-sm mx-auto rounded-full bg-[#c8a96e]/10 blur-3xl transform scale-90 pointer-events-none"
                aria-hidden="true"
              />

              {/* Product Frame */}
              <div
                id="hero-product-container"
                className="relative z-10 w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#101c3d]/60 to-[#060c1d]/90 border border-[#c8a96e]/30 shadow-2xl shadow-black/80"
              >
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#080e1f]">
                  <img
                    id="hero-product-image"
                    src="/devganga-bottle.jpg"
                    alt="DevGanga Amrit 250 ml Sacred Ganga Jal Bottle from Devprayag Sangam"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle lower gradient overlay for clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060c1d] via-transparent to-transparent opacity-60" />

                  {/* Sacred Volume Tag Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-lg bg-[#060c1d]/85 backdrop-blur-sm border border-white/10 text-xs text-gray-300">
                    <div>
                      <span className="font-serif text-[#faf8f5] font-semibold text-sm">DEVGANGA AMRIT</span>
                      <p className="text-[10px] text-[#c8a96e] uppercase tracking-wider">Devprayag Sangam</p>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-mono text-xs font-semibold">250 ml</span>
                      <p className="text-[9px] text-gray-400">Pre-Launch Batch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Down Indicator */}
        <div className="hidden lg:flex justify-center pb-6">
          <button
            onClick={handleScrollToStory}
            aria-label="Scroll to our story"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#c8a96e] transition-colors cursor-pointer group"
          >
            <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#c8a96e]" />
          </button>
        </div>
      </div>
    </section>
  );
};
