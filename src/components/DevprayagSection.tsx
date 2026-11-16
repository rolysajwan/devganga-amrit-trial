import React from 'react';
import { MapPin, Navigation, MountainSnow, ShieldCheck } from 'lucide-react';

export const DevprayagSection: React.FC = () => {
  return (
    <section
      id="devprayag"
      className="relative py-24 sm:py-32 bg-[#060c1d] text-[#faf8f5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Cinematic Landscape Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#c8a96e]/30 shadow-2xl group">
              <div className="aspect-[16/11] w-full bg-[#080e1f] overflow-hidden">
                <img
                  src="/devprayag-sangam.jpg"
                  alt="Devprayag Sangam where Bhagirathi and Alaknanda meet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c1d] via-transparent to-transparent opacity-80" />

              {/* Floating Coordinates Tag */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#060c1d]/90 backdrop-blur-md border border-[#c8a96e]/30 text-[11px] font-mono tracking-wider text-[#c8a96e] flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" />
                <span>30.1459° N, 78.5989° E</span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060c1d]/85 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-serif text-white font-semibold text-sm">Devprayag Sangam Point</h4>
                  <p className="text-[11px] text-gray-300">Tehri Garhwal, Garhwal Himalayas</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#c8a96e] font-semibold bg-[#c8a96e]/10 px-3 py-1 rounded-full border border-[#c8a96e]/20">
                  Elevation: 830m ASL
                </span>
              </div>
            </div>
          </div>

          {/* Right: The Origin Editorial & Geographic Badge */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#c8a96e]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
                  THE ORIGIN
                </span>
              </div>

              <h2
                id="devprayag-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#faf8f5] leading-tight mb-6"
              >
                DEVPRAYAG,<br />
                <span className="text-[#c8a96e] italic">UTTARAKHAND</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-6">
                At Devprayag, the Alaknanda and Bhagirathi meet, forming the river traditionally known as the Ganga.
              </p>

              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                Revered as one of the Panch Prayags (five sacred river confluences) of the Garhwal Himalayas,
                Devprayag is the culmination point where upstream mountain streams fuse into the singular sacred lifeline of northern India.
              </p>
            </div>

            {/* Premium Geographic Origin Badge */}
            <div
              id="geographic-origin-badge"
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0a1128] to-[#0d1838] border border-[#c8a96e]/40 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-24 h-24 bg-[#c8a96e]/5 rounded-full blur-2xl" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#c8a96e]/10 border border-[#c8a96e]/30 text-[#c8a96e]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#c8a96e] font-semibold">
                    OFFICIAL SOURCING GEOGRAPHY
                  </div>
                  <div className="font-serif text-2xl font-bold tracking-wider text-[#faf8f5]">
                    DEVPRAYAG
                  </div>
                  <div className="text-sm font-semibold tracking-widest uppercase text-gray-300">
                    TEHRI GARHWAL
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#c8a96e]/90 font-medium">
                    UTTARAKHAND &bull; INDIA
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-[11px] text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MountainSnow className="w-3.5 h-3.5 text-[#c8a96e]" />
                  <span>Garhwal Range</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c8a96e]" />
                  <span>Verified Confluence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
