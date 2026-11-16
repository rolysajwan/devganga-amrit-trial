import React from 'react';
import { Compass, ShieldCheck, Truck, Check } from 'lucide-react';
import { PRESENTATION_STEPS } from '../data/content';

export const CollectionProcess: React.FC = () => {
  const getStepIcon = (tag: string) => {
    switch (tag) {
      case 'SOURCE':
        return <Compass className="w-5 h-5 text-[#c8a96e]" />;
      case 'PRESERVE':
        return <ShieldCheck className="w-5 h-5 text-[#c8a96e]" />;
      case 'DELIVER':
      default:
        return <Truck className="w-5 h-5 text-[#c8a96e]" />;
    }
  };

  return (
    <section
      id="presentation-philosophy"
      className="relative py-24 sm:py-32 bg-[#080e1f] text-[#faf8f5] border-t border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
              OUR PHILOSOPHY
            </span>
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
          </div>

          <h2
            id="presentation-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#faf8f5] leading-tight mb-4"
          >
            HOW IT IS PRESENTED
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            A three-fold commitment grounded in authentic origin, dignified handling, and uncompromising transparency.
          </p>
        </div>

        {/* 3 Steps Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PRESENTATION_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`step-${step.step}`}
              className="relative p-8 rounded-2xl bg-[#060c1d] border border-white/10 hover:border-[#c8a96e]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-light text-[#c8a96e]/70">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#101c3d] border border-white/10 text-[10px] uppercase tracking-widest text-[#c8a96e] font-semibold">
                    {getStepIcon(step.tag)}
                    <span>{step.tag}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#c8a96e] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-start gap-2 text-xs text-gray-400">
                <Check className="w-4 h-4 text-[#c8a96e] shrink-0 mt-0.5" />
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Statement */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0a1128] border border-[#c8a96e]/20 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#c8a96e]/10 border border-[#c8a96e]/30 flex items-center justify-center text-[#c8a96e] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-lg text-white font-semibold">
                Our Heritage Pledge of Authenticity
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We believe sacred traditions require absolute honesty. We do not make exaggerated scientific, laboratory, or medicinal claims. We simply bring you reverent waters gathered at Devprayag Sangam, packaged with ritual dignity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
