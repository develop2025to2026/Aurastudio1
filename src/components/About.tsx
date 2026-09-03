import React from 'react';
import { SectionHeading } from './SectionHeading';
import {
  Compass,
  Target,
  Sparkles,
  Shield,
  Leaf,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { BusinessProfile } from '../types';

interface AboutProps {
  business: BusinessProfile;
}

export const About: React.FC<AboutProps> = ({ business }) => {
  const values = [
    {
      icon: Leaf,
      title: 'Bioclimatic Tropical Sensitivity',
      desc: 'Harnessing Ceylon breezes, deep overhang shading, and thermal mass rather than relying purely on energy-draining air conditioning.',
    },
    {
      icon: Shield,
      title: 'Material Honesty & Craftsmanship',
      desc: 'Celebrating authentic fair-faced concrete, Moratuwa hand-planed teak, and hand-cut granite that matures gracefully with age.',
    },
    {
      icon: Target,
      title: 'Commercial Rigor & Capital Protection',
      desc: 'Respecting budgets as ironclad covenants. Every detail is calculated against structural durability and client return on capital.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Split Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 aspect-[4/5] bg-neutral-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Aura Studio Architectural Philosophy and Studio Practice"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      Chartered Practice Founded 2011
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      Colombo 07 Headquartered • Island-wide Execution
                    </p>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Led by senior SLIA registered architects and university alumni with master training in sustainable tropical architecture.
                </p>
              </div>
            </div>

            {/* Overlapping secondary decorative detail card */}
            <div className="hidden sm:block absolute -top-6 -right-6 p-4 rounded-xl bg-neutral-900 border border-white/15 shadow-2xl">
              <span className="text-xs font-bold text-amber-400 block">
                14+ Years of Legacy
              </span>
              <span className="text-[11px] text-neutral-400">
                185+ Private & Commercial Builds
              </span>
            </div>
          </div>

          {/* Right Column: Narrative, Mission, Vision, Values */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  color: 'var(--color-primary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage & Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
                Reinventing Tropical Architecture for the Next Century
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Founded in Cinnamon Gardens, Colombo, {business.name} emerged from a simple conviction: luxury architectural design should neither compromise on tropical bioclimatic intelligence nor leave property owners stranded with contractor mismanagement.
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Drawing direct inspiration from the legendary tradition of Sri Lankan tropical modernism while utilizing state-of-the-art European BIM modeling, we deliver turnkey homes and commercial spaces that age like fine heirlooms.
              </p>
            </div>

            {/* Mission & Vision Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5 font-heading">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  To provide single-point architectural mastery and turnkey construction that eliminates stress, protects capital, and inspires human life.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5 font-heading">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  To remain South Asia’s benchmark practice for bespoke tropical luxury, celebrated globally for structural integrity and timeless aesthetics.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Guiding Architectural Pillars:
              </h4>
              <div className="space-y-3">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-amber-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-white">
                          {val.title}
                        </h5>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
