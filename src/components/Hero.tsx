import React from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2,
  Building,
  Compass,
  MapPin,
} from 'lucide-react';
import { BusinessProfile } from '../types';

interface HeroProps {
  business: BusinessProfile;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ business, onOpenQuoteModal }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle architectural ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-primary), var(--color-accent))',
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--color-accent), transparent)',
        }}
      />

      {/* Subtle architectural grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 text-left space-y-8">
            {/* Top trust badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-neutral-200">
                4.98/5 Rating • SLIA Chartered Architectural Studio
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-600" />
              <span className="hidden sm:inline-flex items-center text-xs text-neutral-400 gap-1">
                <MapPin className="w-3 h-3 text-amber-400" /> {business.city}, {business.country}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6.5xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
                Architectural{' '}
                <span
                  className="italic font-normal underline decoration-1 underline-offset-8"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Masterpieces.
                </span>{' '}
                Built with Tropical Soul & Turnkey Precision.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
                Helping discerning property owners, luxury hoteliers, and overseas investors create award-winning tropical modern residences and commercial landmarks across Sri Lanka with a guaranteed fixed-price contract.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                id="hero-primary-quote-btn"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-neutral-950 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-2xl"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.4)',
                }}
              >
                <span>Get a Free Quote & Blueprint Review</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo('portfolio')}
                id="hero-secondary-portfolio-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold text-neutral-200 border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Compass className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                <span>Explore Our Portfolio</span>
              </button>
            </div>

            {/* Trust Statement Checklist */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Budget Overrun Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>10-Year Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Weekly Expat Video Reports</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative ring */}
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-30 blur-sm transition duration-1000 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-accent))',
                }}
              />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                  alt="Aura Studio Contemporary Tropical Architecture Residence in Colombo"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                {/* Bottom Caption inside card */}
                <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-amber-300">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured Landmark Build • 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    The Monolith Pavilion, Colombo 07
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    Fair-faced off-shutter concrete, passive stack cross-ventilation, and central frangipani courtyard.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left) */}
              <div className="absolute -top-5 -left-4 sm:-left-6 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-white/15 shadow-2xl flex items-center gap-3.5 transform hover:-translate-y-1 transition-transform">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                >
                  <Building className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white font-heading">
                    185+ Projects
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Delivered on-time across SL
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Right) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-white/15 shadow-2xl flex items-center gap-3.5 transform hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white font-heading">
                    10-Year Warranty
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Structural & Waterproofing Bond
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
