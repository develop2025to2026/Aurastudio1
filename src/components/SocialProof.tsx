import React, { useState, useEffect } from 'react';
import { statistics } from '../data/businessData';
import { Award, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(statistics.map(() => 0));

  useEffect(() => {
    // Simple animated counter effect
    const duration = 1800; // ms
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(
        statistics.map((stat) => Math.round(stat.value * ease))
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
        setHasAnimated(true);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  const accreditations = [
    { name: 'Sri Lanka Institute of Architects', tag: 'SLIA Corporate Practice' },
    { name: 'Green Building Council Sri Lanka', tag: 'GBCSL Accredited Member' },
    { name: 'Royal Institute of British Architects', tag: 'RIBA Chartered Affiliation' },
    { name: 'Urban Development Authority', tag: 'UDA Grade A Registered' },
  ];

  return (
    <section className="relative py-16 bg-neutral-950 border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-14 border-b border-white/[0.06]">
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {counts[idx]}
                </span>
                <span
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {stat.suffix}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 font-display">
                {stat.label}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accreditations & Trust Partners */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            <Award className="w-4 h-4 text-amber-400" style={{ color: 'var(--color-primary)' }} />
            <span>Chartered Architectural Standards & Licenses</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {accreditations.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-medium">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
