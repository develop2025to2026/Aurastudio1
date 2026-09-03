import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { BusinessProfile } from '../types';

interface NavbarProps {
  business: BusinessProfile;
  onOpenQuoteModal: () => void;
  currency: 'USD' | 'LKR';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  business,
  onOpenQuoteModal,
  currency,
  onToggleCurrency,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section spy
      const sections = [
        'home',
        'services',
        'why-us',
        'process',
        'portfolio',
        'pricing',
        'about',
        'testimonials',
        'faq',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-5 bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                boxShadow: '0 4px 15px -3px rgba(212, 175, 55, 0.3)',
              }}
            >
              <div className="w-5 h-5 border-2 border-neutral-950 transform rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-neutral-950 rounded-full" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block font-heading leading-none">
                {business.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium block text-neutral-400 mt-1">
                Colombo • Sri Lanka
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-neutral-950 font-semibold shadow-sm'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: 'var(--color-primary)',
                        }
                      : {}
                  }
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Currency toggle */}
            <button
              onClick={onToggleCurrency}
              title="Toggle currency display between USD and LKR"
              className="px-2.5 py-1 text-xs font-semibold rounded-md border border-white/10 bg-white/[0.04] text-neutral-300 hover:text-white hover:border-white/20 transition-colors"
              id="currency-toggle-btn"
            >
              {currency === 'USD' ? '$ USD' : 'Rs. LKR'}
            </button>

            {/* Direct Phone link */}
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
              title="Call Studio Directly"
              id="phone-cta-nav"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" style={{ color: 'var(--color-primary)' }} />
              <span className="hidden 2xl:inline">{business.phone}</span>
            </a>

            {/* Primary CTA: Get a Free Quote */}
            <button
              onClick={onOpenQuoteModal}
              id="navbar-quote-cta"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer shadow-lg"
              style={{
                backgroundColor: 'var(--color-primary)',
                boxShadow: '0 4px 15px -2px rgba(212, 175, 55, 0.35)',
              }}
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleCurrency}
              className="px-2 py-1 text-xs font-medium rounded border border-white/10 bg-white/5 text-neutral-200"
            >
              {currency}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Navigation Menu"
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-white bg-white/5 border border-white/10 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-neutral-950/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all animate-fadeIn"
          style={{ maxHeight: 'calc(100vh - 65px)', overflowY: 'auto' }}
        >
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-3 px-4 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                  activeSection === link.id
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-neutral-950 shadow-md flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-white/10 bg-white/5 text-xs text-white"
              >
                <Phone className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                <span>Call Studio</span>
              </a>
              <a
                href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20am%20interested%20in%20your%20architectural%20and%20turnkey%20services.%20I%20would%20like%20to%20get%20more%20information.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-xs text-emerald-400"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-center text-[11px] text-neutral-500 mt-2 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SLIA & RIBA Chartered Architectural Practice</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
