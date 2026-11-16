import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { DevprayagSection } from './components/DevprayagSection';
import { ProductShowcase } from './components/ProductShowcase';
import { RitualUses } from './components/RitualUses';
import { CollectionProcess } from './components/CollectionProcess';
import { TrustSection } from './components/TrustSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NotifyModal } from './components/NotifyModal';
import { Bell } from 'lucide-react';

export default function App() {
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('General');

  const openNotifyModal = (source = 'General') => {
    setModalSource(source);
    setIsNotifyModalOpen(true);
  };

  const closeNotifyModal = () => {
    setIsNotifyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#060c1d] text-[#faf8f5] flex flex-col font-sans selection:bg-[#c8a96e]/30 selection:text-white relative">
      {/* Top Navigation */}
      <Navbar onOpenNotify={() => openNotifyModal('Navbar')} />

      {/* Main Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenNotify={() => openNotifyModal('Hero')} />

        {/* 2. Brand Story & Sacred Confluence */}
        <BrandStory />

        {/* 3. Devprayag Confluence & Geography */}
        <DevprayagSection />

        {/* 4. Product Showcase (250 ml Sacred Ganga Jal) */}
        <ProductShowcase onOpenNotify={() => openNotifyModal('Product')} />

        {/* 5. Ritual Uses & Ceremonial Occasions */}
        <RitualUses />

        {/* 6. Presentation & Sourcing Philosophy */}
        <CollectionProcess />

        {/* 7. Trust & Transparency */}
        <TrustSection />

        {/* 8. Coming Soon Feature Section */}
        <ComingSoonSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Official Contact & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Pre-Launch Registration Modal */}
      <NotifyModal
        isOpen={isNotifyModalOpen}
        onClose={closeNotifyModal}
        sourceSection={modalSource}
      />

      {/* Floating Quick Notify Trigger for convenient mobile access */}
      <div className="fixed bottom-5 right-5 z-30 lg:hidden">
        <button
          id="floating-notify-btn"
          onClick={() => openNotifyModal('Floating Mobile')}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#c8a96e] text-[#060c1d] font-bold text-xs uppercase tracking-wider shadow-2xl shadow-black/80 hover:bg-[#d4af37] transition-all cursor-pointer"
        >
          <Bell className="w-4 h-4" />
          <span>COMING SOON</span>
        </button>
      </div>
    </div>
  );
}
