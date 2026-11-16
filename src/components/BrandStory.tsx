import React from 'react';
import { ArrowDown, Mountain, Compass, Waves } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 bg-[#080e1f] text-[#faf8f5] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Subtle radial ambient background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1e3a5f]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c8a96e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
              SACRED GEOGRAPHY & HERITAGE
            </span>
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
          </div>

          <h2
            id="story-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#faf8f5] leading-tight mb-6"
          >
            WHERE THE RIVERS MEET,<br />
            <span className="italic text-[#c8a96e]">TRADITION BEGINS.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            In the heart of Tehri Garhwal, Uttarakhand, two ancient river streams descend from eternal snow peaks:
            the energetic, turquoise waters of the <strong>Alaknanda</strong>, and the rapid, spirited currents of the <strong>Bhagirathi</strong>.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Side */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#c8a96e]/30 shadow-2xl group">
              <div className="aspect-[16/10] w-full bg-[#050b18] overflow-hidden">
                <img
                  src="/himalaya-river.jpg"
                  alt="Pristine Himalayan river waters near Devprayag Sangam"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c1d] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060c1d]/85 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-[#c8a96e] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Waves className="w-4 h-4" />
                  <span>The Living Confluence</span>
                </div>
                <p className="text-xs text-gray-300 leading-normal">
                  Devprayag sits at an elevation of approximately 830 meters (2,723 ft), guarded by the Himalayan foothills of Tehri Garhwal.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              <p>
                According to India&apos;s centuries-old geographical and cultural record, it is precisely at the town of <strong>Devprayag</strong> where these two rivers join. Below this sangam, the single unified stream is officially and reverently known as the <strong>Ganga</strong>.
              </p>
              <p>
                For millennia, Hindu families and devotees across the globe have revered this sangam as the primary cradle of the river. DevGanga Amrit was conceived to present this foundational water with the quiet dignity and authentic reverence it inherently deserves.
              </p>
              <p className="text-sm sm:text-base text-gray-400 italic">
                We make no mystical, medical, or supernatural claims. Our reverence rests in honest origin, dignified handling, and the timeless ritual devotion of the households that invite it to their altars.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#060c1d] border border-white/5">
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Alaknanda River</div>
                <div className="font-serif text-lg text-white font-semibold">Originates at Satopanth</div>
                <div className="text-xs text-[#c8a96e] mt-1">Calm, turquoise stream</div>
              </div>
              <div className="p-4 rounded-xl bg-[#060c1d] border border-white/5">
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Bhagirathi River</div>
                <div className="font-serif text-lg text-white font-semibold">Originates at Gaumukh</div>
                <div className="text-xs text-[#c8a96e] mt-1">Swift, emerald stream</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Confluence Timeline */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96e]">
              THE SACRED CONFLUENCE TIMELINE
            </span>
          </div>

          {/* Horizontal Desktop / Vertical Mobile Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Step 1: Himalayas */}
            <div className="relative p-5 rounded-xl bg-[#060c1d] border border-white/10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/40 border border-[#1e3a5f] flex items-center justify-center text-[#c8a96e] mb-3">
                <Mountain className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-white font-medium mb-1">Himalayas</h4>
              <p className="text-xs text-gray-400">Glacial springs & high altitude peaks</p>
            </div>

            {/* Step 2: Twin Rivers */}
            <div className="relative p-5 rounded-xl bg-[#060c1d] border border-[#c8a96e]/30 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#c8a96e]/15 border border-[#c8a96e]/40 flex items-center justify-center text-[#c8a96e] mb-3">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base text-white font-medium mb-1">Alaknanda + Bhagirathi</h4>
              <p className="text-xs text-gray-400">Two distinct sacred streams descending</p>
            </div>

            {/* Step 3: Devprayag */}
            <div className="relative p-5 rounded-xl bg-[#0a1128] border-2 border-[#c8a96e] flex flex-col items-center text-center shadow-lg shadow-[#c8a96e]/10">
              <div className="w-10 h-10 rounded-full bg-[#c8a96e] text-[#060c1d] flex items-center justify-center font-bold mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-[#c8a96e] font-semibold mb-1">Devprayag</h4>
              <p className="text-xs text-gray-300">The Holy Sangam Confluence</p>
            </div>

            {/* Step 4: Ganga */}
            <div className="relative p-5 rounded-xl bg-[#060c1d] border border-white/10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/40 border border-[#1e3a5f] flex items-center justify-center text-[#c8a96e] mb-3">
                <span className="font-serif text-base font-bold">गंगा</span>
              </div>
              <h4 className="font-serif text-lg text-white font-medium mb-1">Ganga</h4>
              <p className="text-xs text-gray-400">Unified holy stream begins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
