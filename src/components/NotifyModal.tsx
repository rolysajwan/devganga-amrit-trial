import React, { useState } from 'react';
import { X, CheckCircle2, Bell, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceSection?: string;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({
  isOpen,
  onClose,
  sourceSection = 'General'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Store in local storage for sample pre-launch retention
      try {
        const existing = JSON.parse(localStorage.getItem('devganga_subscribers') || '[]');
        existing.push({
          name,
          email,
          mobile,
          sourceSection,
          date: new Date().toISOString()
        });
        localStorage.setItem('devganga_subscribers', JSON.stringify(existing));
      } catch {
        // ignore storage errors
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMobile('');
    onClose();
  };

  return (
    <div
      id="notify-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050b18]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="notify-modal-card"
        className="relative w-full max-w-lg bg-[#0a1128] border border-[#c8a96e]/30 rounded-2xl shadow-2xl p-6 md:p-8 text-[#faf8f5] overflow-hidden"
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c8a96e]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#1e3a5f]/40 rounded-full blur-3xl pointer-events-none" />

        <button
          id="notify-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c8a96e] bg-[#c8a96e]/10 px-3 py-1 rounded-full border border-[#c8a96e]/20">
                <Bell className="w-3.5 h-3.5" /> Priority Pre-Launch Invitation
              </span>
            </div>

            <h3
              id="notify-modal-heading"
              className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-[#faf8f5] mb-2"
            >
              Be First to Receive Sacred Devprayag Ganga Jal
            </h3>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              DevGanga Amrit is preparing our first carefully gathered 250 ml ritual batch from Devprayag Sangam.
              Enter your details below to receive launch access and ritual timing updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="subscriber-name" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-1.5">
                  Full Name <span className="text-[#c8a96e]">*</span>
                </label>
                <input
                  id="subscriber-name"
                  type="text"
                  required
                  placeholder="e.g. Rameshwar Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#060c1d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c8a96e] transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="subscriber-email" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-1.5">
                  Email Address <span className="text-[#c8a96e]">*</span>
                </label>
                <input
                  id="subscriber-email"
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#060c1d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c8a96e] transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="subscriber-mobile" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-1.5">
                  Mobile Number (for WhatsApp release alert)
                </label>
                <input
                  id="subscriber-mobile"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-3 bg-[#060c1d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c8a96e] transition-colors text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  id="notify-modal-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-[#c8a96e] hover:bg-[#d4af37] text-[#060c1d] font-semibold text-sm tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-[#c8a96e]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>NOTIFY ME ON LAUNCH</span>
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#c8a96e]" />
                <span>Zero spam. Direct launch notification and sacred ritual calendar only.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#c8a96e]/15 border border-[#c8a96e]/30 flex items-center justify-center text-[#c8a96e]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl text-[#faf8f5] tracking-wide">
              Pranam, {name || 'Devotee'}
            </h4>
            <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
              Your details have been reserved for the inaugural release of <span className="text-[#c8a96e] font-semibold">DevGanga Amrit</span>. We will notify you at <span className="text-white">{email}</span> as soon as the first consecration release is ready.
            </p>
            <div className="p-3.5 rounded-xl bg-[#060c1d] border border-white/5 text-xs text-gray-400">
              {BRAND_DATA.disclaimerUsage} &bull; {BRAND_DATA.disclaimerSafety}
            </div>
            <button
              id="notify-modal-done-btn"
              onClick={handleReset}
              className="mt-4 px-8 py-2.5 rounded-full border border-[#c8a96e]/40 text-[#c8a96e] hover:bg-[#c8a96e]/10 text-xs uppercase tracking-widest transition-colors font-medium cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
