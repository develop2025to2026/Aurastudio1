/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { defaultBusiness, themePresets } from './data/businessData';
import { BusinessProfile, ColorTheme } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [business] = useState<BusinessProfile>(defaultBusiness);
  const [theme] = useState<ColorTheme>(themePresets[0]);
  const [currency, setCurrency] = useState<'USD' | 'LKR'>('USD');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeQuoteService, setActiveQuoteService] = useState<string>('');

  // Dynamically apply CSS Custom Properties to the DOM
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-primary-hover', theme.primaryHover || theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-background', theme.background);
    root.style.setProperty('--color-surface', theme.surface);
    root.style.setProperty('--color-surface-elevated', theme.surfaceElevated);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-border', theme.border);
    root.style.setProperty('--color-text-main', theme.textMain);
    root.style.setProperty('--color-text-muted', theme.textMuted);

    // Update document title dynamically if business name changes
    document.title = `${business.name} - Premium Architecture & Turnkey Construction Colombo`;
  }, [theme, business.name]);

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'LKR' : 'USD'));
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setActiveQuoteService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setActiveQuoteService(serviceName);
    // Smooth scroll to contact or open quote modal
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForQuote = (projectName: string) => {
    setActiveQuoteService(`Similar to project: ${projectName}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageForQuote = (packageName: string) => {
    setActiveQuoteService(`Package: ${packageName}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen text-slate-100 transition-colors duration-500 relative"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Sticky Navigation */}
      <Navbar
        business={business}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
      />

      <main>
        {/* Hero Section */}
        <Hero
          business={business}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Social Proof & Accreditations */}
        <SocialProof />

        {/* Services Section */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Why Choose Us Differentiation */}
        <WhyChooseUs />

        {/* Process Section */}
        <Process />

        {/* Portfolio & Landmark Projects */}
        <Portfolio onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* Pricing & Investment Packages */}
        <Pricing
          currency={currency}
          onToggleCurrency={handleToggleCurrency}
          onSelectPackageForQuote={handleSelectPackageForQuote}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* About Company & Values */}
        <About business={business} />

        {/* Interactive FAQ */}
        <FAQ business={business} />

        {/* Contact Form & Studio Coordinates */}
        <Contact business={business} prefillService={activeQuoteService} />
      </main>

      {/* Large Premium Footer */}
      <Footer
        business={business}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Unobtrusive WhatsApp Button */}
      <WhatsAppButton business={business} />

      {/* Interactive Project Quote & Estimator Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        business={business}
        initialService={activeQuoteService}
      />
    </div>
  );
}
