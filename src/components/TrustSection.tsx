import React from 'react';
import { ShieldCheck, MapPin, Sparkles, Package, Building2, FileText, Clock } from 'lucide-react';
import { TRUST_POINTS, BRAND_DATA } from '../data/content';

export const TrustSection: React.FC = () => {
  return (
    <section
      id="trust"
      className="relative py-24 sm:py-32 bg-[#060c1d] text-[#faf8f5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
              TRUTHFUL COMMERCE
            </span>
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
          </div>

          <h2
            id="trust-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#faf8f5] leading-tight mb-4"
          >
            TRANSPARENCY MATTERS
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Sacred items deserve unclouded truth. We present verified operational facts and clear forthcoming disclosures.
          </p>
        </div>

        {/* 4 Core Verified Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_POINTS.map((item, idx) => {
            const icons = [
              <MapPin key="origin" className="w-5 h-5 text-[#c8a96e]" />,
              <Sparkles key="purpose" className="w-5 h-5 text-[#c8a96e]" />,
              <Package key="format" className="w-5 h-5 text-[#c8a96e]" />,
              <Building2 key="identity" className="w-5 h-5 text-[#c8a96e]" />
            ];

            return (
              <div
                key={item.label}
                id={`trust-card-${idx}`}
                className="p-6 rounded-2xl bg-[#0a1128] border border-white/10 hover:border-[#c8a96e]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#060c1d] border border-white/10 flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#c8a96e] bg-[#c8a96e]/10 px-2.5 py-1 rounded-full border border-[#c8a96e]/20">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1">
                  {item.label}
                </div>
                <h4 className="font-serif text-xl font-medium text-white mb-2">
                  {item.value}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Upcoming Disclosures & Placeholders (Marked 'To be updated') */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#080e1f] border border-white/10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-[#c8a96e] text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Pre-Launch Disclosure Register</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#060c1d] border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-300 font-medium">GSTIN</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                  To be updated
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                Official registration details will be published upon final commercial launch.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060c1d] border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-300 font-medium">Certifications</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                  To be updated
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                Applicable ritual trade and legal disclosures will be listed here without fabrication.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060c1d] border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-300 font-medium">Testing Information</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                  To be updated
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                Baseline quality tests for ritual handling safety will be transparently documented.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 flex-wrap gap-2">
            <span>Primary Contact: {BRAND_DATA.contactEmail}</span>
            <span>Customer Desk: {BRAND_DATA.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
