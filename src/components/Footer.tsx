import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
  Instagram,
  Linkedin,
  Facebook,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { BusinessProfile } from '../types';
import { servicesList } from '../data/businessData';

interface FooterProps {
  business: BusinessProfile;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ business, onOpenQuoteModal }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Subtle ambient light in footer */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--color-primary), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Pre-Footer Conversion Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-amber-300 bg-amber-400/10 border border-amber-400/20">
              <Sparkles className="w-3 h-3" />
              <span>Direct Studio Booking</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Ready to Design an Architectural Legacy?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Schedule a 45-minute discovery audit with our chartered architectural partners in Cinnamon Gardens, Colombo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all hover:brightness-110 shadow-xl cursor-pointer"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Get a Free Quote & Audit
            </button>

            <a
              href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20would%20like%20to%20schedule%20an%20architectural%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                }}
              >
                <div className="w-5 h-5 border-2 border-neutral-950 transform rotate-45 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-neutral-950 rounded-full" />
                </div>
              </div>
              <span className="text-xl font-bold text-white font-heading">
                {business.name}
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Colombo’s benchmark practice for bespoke tropical modern architecture, luxury interior fit-outs, and guaranteed turnkey construction across Sri Lanka.
            </p>

            <div className="pt-2 flex items-center gap-3 text-neutral-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SLIA Corporate Practice No. CP-2011/048</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing Packages</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Services Directory
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {servicesList.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Studio Coordinates
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{business.address}, {business.country}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${business.phone}`} className="hover:text-white">
                  {business.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300"
                >
                  WhatsApp Desk: {business.whatsappFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-white truncate">
                  {business.email}
                </a>
              </p>
            </div>

            {/* Architectural Dispatch Newsletter */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block mb-2">
                Private Journal Dispatch
              </span>
              {newsletterSubscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Subscribed to architectural quarterly.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Enter email for blueprints..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white whitespace-nowrap"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {business.name}. All rights reserved. Registered Chartered Architectural Practice.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-neutral-300 transition-colors"
            >
              Terms of Engagement
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setLegalModalType(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-xl font-bold text-white font-heading">
                {legalModalType === 'privacy'
                  ? 'Studio Privacy & Confidentiality Charter'
                  : 'Terms of Architectural Engagement'}
              </h3>
              <button
                onClick={() => setLegalModalType(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {legalModalType === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Client Confidentiality:</strong> All architectural drawings, site surveys, title deed boundaries, and financial estimates submitted to {business.name} are treated with strict confidentiality. Non-disclosure agreements (NDAs) are provided upon request.
                  </p>
                  <p>
                    <strong>2. Data Usage:</strong> Client contact details (phone, email, WhatsApp) are utilized exclusively for project consultation, municipal approval liaisons, and milestone updates. We do not sell or distribute client records to third parties.
                  </p>
                  <p>
                    <strong>3. Photographic Rights:</strong> Completed residential projects are only photographed for architectural journals or marketing with explicit written authorization from the property owner. Anonymity of private residences is strictly honored.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Architectural Standards:</strong> All professional design services are performed in accordance with the Code of Professional Conduct established by the Sri Lanka Institute of Architects (SLIA) and relevant local statutory authorities.
                  </p>
                  <p>
                    <strong>2. Guaranteed Maximum Price (GMP):</strong> Turnkey construction contracts specify a guaranteed cap based on the mutually approved Bill of Quantities (BOQ). Any voluntary client variations are itemized and approved in writing prior to execution.
                  </p>
                  <p>
                    <strong>3. 10-Year Warranty Bond:</strong> Turnkey structural works are covered by a 10-year integrity guarantee and 5-year waterproofing warranty subject to routine maintenance guidelines provided at key handover.
                  </p>
                </>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-right">
              <button
                onClick={() => setLegalModalType(null)}
                className="px-5 py-2 rounded-lg text-xs font-bold text-neutral-950 uppercase"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
