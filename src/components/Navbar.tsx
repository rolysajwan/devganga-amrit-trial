import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, ChevronRight } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface NavbarProps {
  onOpenNotify: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenNotify }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Devprayag', href: '#devprayag' },
    { label: 'Ganga Jal', href: '#product' },
    { label: 'Rituals', href: '#rituals' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060c1d]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
            : 'bg-gradient-to-b from-[#060c1d]/85 via-[#060c1d]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Title */}
          <a
            id="nav-logo-link"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="DEVGANGA AMRIT Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#c8a96e]/30 bg-[#060c1d] flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/devganga-logo.jpg"
                alt="DevGanga Amrit Brand Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.18em] text-base sm:text-lg font-semibold text-[#faf8f5] group-hover:text-[#c8a96e] transition-colors">
                DEVGANGA AMRIT
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#c8a96e]/90 font-medium -mt-0.5">
                Devprayag Sangam
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs uppercase tracking-[0.18em] text-gray-300 hover:text-[#c8a96e] font-medium transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c8a96e] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="navbar-cta-button"
              onClick={onOpenNotify}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/10 hover:bg-[#c8a96e] text-[#c8a96e] hover:text-[#060c1d] text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[#c8a96e]/20"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{BRAND_DATA.status}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-notify-quick-btn"
              onClick={onOpenNotify}
              className="sm:hidden px-2.5 py-1.5 rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/15 text-[#c8a96e] text-[10px] uppercase font-bold tracking-wider"
            >
              Notify
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-drawer"
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#060c1d] border-l border-[#c8a96e]/20 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#c8a96e]/30">
                    <img
                      src="/devganga-logo.jpg"
                      alt="DevGanga Amrit"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-serif tracking-widest text-sm font-semibold text-[#faf8f5]">
                      DEVGANGA AMRIT
                    </span>
                    <p className="text-[9px] uppercase tracking-wider text-[#c8a96e]">
                      Sacred Ganga Jal
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left py-3 px-3 rounded-lg text-sm uppercase tracking-widest text-gray-200 hover:text-[#c8a96e] hover:bg-white/5 font-medium transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="p-3 bg-[#0a1128] rounded-xl border border-white/5 text-[11px] text-gray-400 space-y-1">
                <p className="text-[#c8a96e] font-semibold">{BRAND_DATA.disclaimerUsage}</p>
                <p className="text-gray-400">{BRAND_DATA.disclaimerSafety}</p>
              </div>

              <button
                id="mobile-drawer-notify-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenNotify();
                }}
                className="w-full py-3 bg-[#c8a96e] hover:bg-[#d4af37] text-[#060c1d] font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>NOTIFY ME ON LAUNCH</span>
              </button>

              <div className="text-center text-[10px] text-gray-400 pt-2">
                Devprayag, Tehri Garhwal, Uttarakhand
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
