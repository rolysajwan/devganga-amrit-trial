import React from 'react';
import { Sparkles, Droplets, Flame, Sun, HeartHandshake, Flower2 } from 'lucide-react';
import { RITUAL_USES } from '../data/content';

export const RitualUses: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#c8a96e]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#c8a96e]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#c8a96e]" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-[#c8a96e]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#c8a96e]" />;
      case 'Flower2':
      default:
        return <Flower2 className="w-6 h-6 text-[#c8a96e]" />;
    }
  };

  return (
    <section
      id="rituals"
      className="relative py-24 sm:py-32 bg-[#060c1d] text-[#faf8f5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
              TRADITIONAL PURPOSES
            </span>
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
          </div>

          <h2
            id="rituals-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#faf8f5] leading-tight mb-4"
          >
            FOR MOMENTS OF FAITH
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Carefully presented for sacred ceremonies in accordance with Sanatana tradition.
            Each drop honors timeless customs without supernatural or exaggerated claims.
          </p>
        </div>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RITUAL_USES.map((ritual) => (
            <div
              key={ritual.id}
              id={`ritual-card-${ritual.id}`}
              className="group p-6 sm:p-8 rounded-2xl bg-[#0a1128] border border-white/10 hover:border-[#c8a96e]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#c8a96e]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#060c1d] border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/40 transition-colors">
                    {getIcon(ritual.iconName)}
                  </div>
                  <span className="font-serif text-xs text-[#c8a96e] tracking-widest font-medium">
                    {ritual.sanskritName}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#c8a96e] transition-colors">
                  {ritual.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {ritual.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-gray-400 italic">
                {ritual.significance}
              </div>
            </div>
          ))}
        </div>

        {/* Note Below Cards */}
        <div className="mt-12 p-4 rounded-xl bg-[#080e1f] border border-white/5 max-w-2xl mx-auto text-center text-xs text-gray-400">
          <span className="text-[#c8a96e] font-semibold">Reminder:</span> Natural Ganga Jal is intended solely for external religious rituals, sacred bathing of deities, and mandir purification. Never ingest.
        </div>
      </div>
    </section>
  );
};
