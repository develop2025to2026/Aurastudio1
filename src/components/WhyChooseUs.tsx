import React from 'react';
import { SectionHeading } from './SectionHeading';
import {
  ShieldCheck,
  Eye,
  BadgePercent,
  Clock,
  Video,
  Award,
  Users,
  CheckCircle2,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: BadgePercent,
      title: 'Guaranteed Fixed-Price Contracts',
      subtitle: 'Zero surprise variations or post-contract budget escalations.',
      description:
        'Traditional construction in Sri Lanka is notorious for budget creep. We engineer an airtight Bill of Quantities (BOQ) with guaranteed maximum pricing so your investment is completely protected.',
      badge: 'Price Integrity',
    },
    {
      icon: Eye,
      title: 'Photoreal 3D & VR Walkthroughs',
      subtitle: 'Experience every room before a single brick is laid.',
      description:
        'Walk through your residence in virtual reality. Evaluate ceiling heights, sunlight trajectories at 4 PM, furniture scale, and material finishes interactively before fabrication begins.',
      badge: 'Zero Regret',
    },
    {
      icon: Video,
      title: 'Weekly Drone & Video Client Logs',
      subtitle: 'Engineered specifically for local leaders and overseas expats.',
      description:
        'Living abroad in the UK, Australia, or Singapore? Receive structured weekly drone footage, laboratory concrete test reports, and direct WhatsApp audio memos from your Principal Architect.',
      badge: 'Overseas Ready',
    },
    {
      icon: Award,
      title: 'Chartered SLIA & RIBA Architects',
      subtitle: 'Legally certified, corporate practice standards.',
      description:
        'All structural calculations, municipal approval drawings, and site inspections are signed off by accredited corporate members of the Sri Lanka Institute of Architects and chartered engineers.',
      badge: 'Accredited',
    },
    {
      icon: Clock,
      title: 'Single-Source Turnkey Accountability',
      subtitle: 'One team, one point of contact from soil to keys.',
      description:
        'No more finger-pointing between independent architects, masonry contractors, and interior joiners. We assume unified legal and practical responsibility for the entire project lifecycle.',
      badge: 'Turnkey Simplicity',
    },
    {
      icon: ShieldCheck,
      title: '10-Year Structural & Waterproofing Bond',
      subtitle: 'Institutional-grade warranty documentation.',
      description:
        'Every turnkey build is backed by a legally binding 10-year structural guarantee and 5-year waterproofing warranty, accompanied by complimentary quarterly defect audits during year one.',
      badge: 'Lifetime Care',
    },
  ];

  return (
    <section id="why-us" className="relative py-24 bg-neutral-900/30 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Uncompromising Standards"
          title="Why Sri Lanka’s Visionary Property Owners Choose Aura"
          subtitle="We dismantled everything frustrating about traditional construction—eliminating cost overruns, delays, and contractor finger-pointing through unified design-build engineering."
        />

        {/* Visual Storytelling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-white/20 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                {/* Subtle corner highlight */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle, var(--color-primary), transparent)',
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-neutral-950 transition-transform duration-300 group-hover:scale-110 shadow-md"
                      style={{
                        backgroundColor: 'var(--color-primary)',
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Standard on all Aura contracts</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                Planning from the UK, Australia, Dubai, or Singapore?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Over 40% of our residential builds are managed for overseas Sri Lankan diaspora with 100% remote transparency.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all hover:brightness-110 shadow-md cursor-pointer"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Schedule Expat Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
