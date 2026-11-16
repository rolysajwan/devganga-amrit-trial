import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setIsSent(true);
      try {
        const inquiries = JSON.parse(localStorage.getItem('devganga_inquiries') || '[]');
        inquiries.push({ name, email, message, date: new Date().toISOString() });
        localStorage.setItem('devganga_inquiries', JSON.stringify(inquiries));
      } catch {
        // ignore
      }
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#080e1f] text-[#faf8f5] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Channels & Location Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#c8a96e]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
                  OFFICIAL CORRESPONDENCE
                </span>
              </div>

              <h2
                id="contact-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#faf8f5] leading-tight mb-4"
              >
                CONNECT WITH<br />
                <span className="text-[#c8a96e] italic">DEVGANGA AMRIT</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8">
                For pre-launch inquiries, temple orders, institutional ritual trusts, or genuine queries regarding sacred sourcing.
              </p>

              {/* Direct Info List */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060c1d] border border-white/5">
                  <div className="p-3 rounded-lg bg-[#0a1128] border border-white/10 text-[#c8a96e]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Primary Email</div>
                    <a
                      href={`mailto:${BRAND_DATA.contactEmail}`}
                      className="text-white hover:text-[#c8a96e] font-medium text-sm transition-colors"
                    >
                      {BRAND_DATA.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060c1d] border border-white/5">
                  <div className="p-3 rounded-lg bg-[#0a1128] border border-white/10 text-[#c8a96e]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Business Phone</div>
                    <a
                      href={`tel:${BRAND_DATA.phone.replace(/\s+/g, '')}`}
                      className="text-white hover:text-[#c8a96e] font-mono text-sm transition-colors"
                    >
                      {BRAND_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060c1d] border border-white/5">
                  <div className="p-3 rounded-lg bg-[#0a1128] border border-white/10 text-[#c8a96e]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Location</div>
                    <div className="text-white text-sm">
                      {BRAND_DATA.location}
                    </div>
                    <span className="text-[11px] text-gray-400">PIN: {BRAND_DATA.pinCode}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#060c1d] border border-[#c8a96e]/20 text-xs text-gray-400">
              <span className="text-[#c8a96e] font-semibold">{BRAND_DATA.disclaimerUsage}</span> &bull; {BRAND_DATA.disclaimerSafety}
            </div>
          </div>

          {/* Right Column: Pre-Launch Inquiry Message Box */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#060c1d] border border-[#c8a96e]/30 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#c8a96e]">
                <MessageSquare className="w-4 h-4" />
                <span>Pre-Launch Inquiry</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-medium mb-6">
                Send a Message to the Founders
              </h3>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                        Your Name <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rameshwar Sharma"
                        className="w-full px-4 py-3 bg-[#0a1128] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a96e] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                        Your Email <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-[#0a1128] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a96e] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                      Your Message or Ritual Requirement <span className="text-[#c8a96e]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please let us know your inquiry, required batch quantities, or special ritual date..."
                      className="w-full px-4 py-3 bg-[#0a1128] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 bg-[#c8a96e] hover:bg-[#d4af37] text-[#060c1d] font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {sending ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#c8a96e]/15 border border-[#c8a96e]/30 flex items-center justify-center text-[#c8a96e] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl text-white font-medium">
                    Thank You, {name}
                  </h4>
                  <p className="text-sm text-gray-300 max-w-sm mx-auto">
                    Your inquiry has been received. Our Devprayag office will respond to <span className="text-[#c8a96e]">{email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs text-gray-300 hover:text-white uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
