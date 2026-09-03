import React from 'react';
import { SectionHeading } from './SectionHeading';
import { pricingPackages } from '../data/businessData';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  currency: 'USD' | 'LKR';
  onToggleCurrency: () => void;
  onSelectPackageForQuote: (packageName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  currency,
  onToggleCurrency,
  onSelectPackageForQuote,
}) => {
  return (
    <section id="pricing" className="relative py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transparent Capital Investment"
          title="Architectural & Turnkey Engagement Packages"
          subtitle="Clear, milestone-based fees with zero hidden contingencies. Choose the level of architectural direction and construction supervision that fits your property vision."
        />

        {/* Currency Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-xs font-semibold cursor-pointer ${
              currency === 'USD' ? 'text-white' : 'text-neutral-400'
            }`}
            onClick={currency !== 'USD' ? onToggleCurrency : undefined}
          >
            US Dollar ($ USD)
          </span>

          <button
            onClick={onToggleCurrency}
            className="w-12 h-6 rounded-full bg-neutral-800 p-1 border border-white/20 relative transition-colors focus:outline-none"
            aria-label="Toggle currency"
          >
            <div
              className={`w-4 h-4 rounded-full transition-transform ${
                currency === 'LKR'
                  ? 'translate-x-6 bg-amber-400'
                  : 'translate-x-0 bg-white'
              }`}
            />
          </button>

          <span
            className={`text-xs font-semibold cursor-pointer ${
              currency === 'LKR' ? 'text-white' : 'text-neutral-400'
            }`}
            onClick={currency !== 'LKR' ? onToggleCurrency : undefined}
          >
            Sri Lankan Rupee (Rs. LKR)
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg) => {
            const formattedPrice =
              currency === 'USD'
                ? `$${pkg.priceUsd.toLocaleString()}`
                : `Rs. ${pkg.priceLkr.toLocaleString()}`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-neutral-900/95 border-2 border-amber-400/80 shadow-2xl lg:-translate-y-2'
                    : 'bg-neutral-900/50 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Highlight Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed min-h-[36px]">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-5 border-y border-white/10 my-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                        {formattedPrice}
                      </span>
                      <span className="text-xs text-neutral-400">
                        / {pkg.period}
                      </span>
                    </div>
                    <div className="text-[11px] text-amber-300 mt-1 font-medium">
                      Guaranteed fixed fee • Milestone staged
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-xs text-neutral-300">
                    <span className="font-semibold text-white block mb-0.5">
                      Ideal Target:
                    </span>
                    {pkg.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                      Included Scope:
                    </span>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectPackageForQuote(pkg.name)}
                    className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      pkg.highlighted
                        ? 'text-neutral-950 hover:brightness-110'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                    }`}
                    style={
                      pkg.highlighted
                        ? { backgroundColor: 'var(--color-primary)' }
                        : {}
                    }
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="mt-3 text-center text-[10px] text-neutral-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Includes SLIA regulatory compliance review</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Callout */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          Have an expansive commercial development, boutique hotel, or island-wide multi-villa portfolio?{' '}
          <a
            href="#contact"
            className="text-amber-400 underline underline-offset-4 hover:text-amber-300 ml-1 font-semibold"
            style={{ color: 'var(--color-primary)' }}
          >
            Inquire for a tailored enterprise BOQ proposal
          </a>
        </div>
      </div>
    </section>
  );
};
