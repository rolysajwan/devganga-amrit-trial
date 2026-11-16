import React, { useState } from 'react';
import { Plus, Minus, Bell, ShieldAlert, Sparkles, Check, PackageCheck } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface ProductShowcaseProps {
  onOpenNotify: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenNotify }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const calculateSubtotal = () => {
    return quantity * BRAND_DATA.price;
  };

  return (
    <section
      id="product"
      className="relative py-24 sm:py-32 bg-[#080e1f] text-[#faf8f5] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c8a96e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1e3a5f]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
              PRE-LAUNCH SAMPLE EDITION
            </span>
            <span className="w-8 h-[1px] bg-[#c8a96e]" />
          </div>

          <h2
            id="product-showcase-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#faf8f5] leading-tight mb-4"
          >
            THE SACRED ESSENTIAL
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto">
            A premium 250 ml presentation of Devprayag Ganga Jal, designed for personal religious and ceremonial use.
          </p>
        </div>

        {/* Main Product Card & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Product Image & Badges */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Gold Ambient Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#c8a96e]/30 to-[#1e3a5f]/30 blur-sm -z-10" />

              <div className="relative rounded-2xl overflow-hidden bg-[#060c1d] border border-[#c8a96e]/40 p-4 sm:p-6 shadow-2xl">
                {/* Status Ribbons */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-[#c8a96e] text-[#060c1d]">
                    {BRAND_DATA.status}
                  </span>
                  <span className="text-xs font-mono text-[#c8a96e]">
                    Format: {BRAND_DATA.volume}
                  </span>
                </div>

                {/* Primary Bottle Visual */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#091124] flex items-center justify-center">
                  <img
                    id="product-showcase-bottle"
                    src="/devganga-bottle.jpg"
                    alt="DevGanga Amrit 250ml Sacred Ganga Jal Bottle"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060c1d]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Tamper seal indicator */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#060c1d]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-300">Airtight Gold Seal</span>
                    <span className="text-[#c8a96e] font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Ritual Safe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pricing, Description, Quantity & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold mb-1">
                DEVGANGA AMRIT
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] font-semibold mb-2">
                Sacred Ganga Jal &bull; {BRAND_DATA.volume}
              </h3>
              <p className="text-sm text-gray-400">
                Directly sourced from the holy confluence of Bhagirathi & Alaknanda in Devprayag.
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#060c1d] border border-white/10 flex items-baseline gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Sample Price:</span>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#c8a96e]">
                  ₹{BRAND_DATA.price}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-gray-400">MRP:</span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{BRAND_DATA.mrp}
                </span>
              </div>
              <span className="ml-auto text-[11px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-md">
                Inaugural Offer
              </span>
            </div>

            {/* Critical Mandatory Badges */}
            <div className="p-4 rounded-xl bg-[#0a1128] border border-[#c8a96e]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#c8a96e]">
                <Sparkles className="w-4 h-4 shrink-0 text-[#c8a96e]" />
                <span>{BRAND_DATA.disclaimerUsage}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-rose-300">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                <span>CRITICAL SAFETY NOTE: {BRAND_DATA.disclaimerSafety}</span>
              </div>
            </div>

            {/* Product Specifications List */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2.5">
                <PackageCheck className="w-4 h-4 text-[#c8a96e]" />
                <span>Net Volume: <strong>250 ml (Quarter Litre)</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <PackageCheck className="w-4 h-4 text-[#c8a96e]" />
                <span>Bottle Material: <strong>Food-grade heavy glass with golden cap</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <PackageCheck className="w-4 h-4 text-[#c8a96e]" />
                <span>Source Station: <strong>Devprayag Sangam Ghat, Uttarakhand</strong></span>
              </div>
            </div>

            {/* Quantity Selector (Visual) */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Sample Quantity
              </div>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center border border-white/20 rounded-xl bg-[#060c1d] overflow-hidden">
                  <button
                    id="quantity-decrease-btn"
                    onClick={handleDecrease}
                    aria-label="Decrease quantity"
                    className="p-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-mono font-semibold text-white">
                    {quantity}
                  </span>
                  <button
                    id="quantity-increase-btn"
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                    className="p-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-300">
                  Subtotal: <span className="font-semibold text-[#c8a96e]">₹{calculateSubtotal()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                id="product-coming-soon-btn"
                onClick={onOpenNotify}
                className="flex-1 py-4 px-6 bg-[#060c1d] border border-[#c8a96e]/40 text-[#c8a96e] hover:bg-[#c8a96e]/10 font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer text-center"
              >
                {BRAND_DATA.status}
              </button>

              <button
                id="product-notify-btn"
                onClick={onOpenNotify}
                className="flex-1 py-4 px-6 bg-[#c8a96e] hover:bg-[#d4af37] text-[#060c1d] font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl hover:shadow-[#c8a96e]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                <span>NOTIFY ME</span>
              </button>
            </div>

            <p className="text-[11px] text-gray-400 italic text-center sm:text-left">
              * Pre-launch sample edition. Registrations will be processed in chronological order upon official batch bottling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
