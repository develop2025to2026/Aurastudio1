import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { processSteps } from '../data/businessData';
import { Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Methodology"
          title="How It Works: 5 Steps to Turnkey Perfection"
          subtitle="A transparent, battle-tested architectural roadmap designed to eliminate anxiety, protect your capital, and deliver architectural brilliance on schedule."
        />

        {/* Step Selector Tabs for Mobile & Desktop */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 min-w-[140px] sm:min-w-[180px] p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-300 ${
                  isActive
                    ? 'bg-neutral-900 border-amber-400/40 shadow-lg -translate-y-0.5'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-xs font-bold font-heading"
                    style={{
                      color: isActive ? 'var(--color-primary)' : '#94a3b8',
                    }}
                  >
                    Step {step.stepNumber}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium">
                    {step.duration}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white truncate">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Showcase */}
        <div className="rounded-3xl bg-neutral-900/90 border border-white/10 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle ambient light */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-15"
            style={{
              background: 'radial-gradient(circle, var(--color-primary), transparent)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold font-heading text-neutral-950 uppercase tracking-widest"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Phase {processSteps[activeStep].stepNumber}
                </span>
                <span className="text-xs text-neutral-400 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Estimated: {processSteps[activeStep].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {processSteps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {processSteps[activeStep].shortDesc}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Key Milestones & Certified Deliverables:
                </h4>
                <div className="space-y-2.5">
                  {processSteps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-neutral-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-semibold border border-white/10 bg-white/5 text-neutral-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep === processSteps.length - 1}
                  onClick={() =>
                    setActiveStep((prev) =>
                      Math.min(processSteps.length - 1, prev + 1)
                    )
                  }
                  className="px-5 py-2 rounded-lg text-xs font-bold text-neutral-950 uppercase tracking-wider hover:brightness-110 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Process Timeline Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Standard Project Timeline
                  </span>
                  <span className="text-neutral-400">Sri Lanka Standards</span>
                </div>

                <div className="space-y-3 relative pl-6 border-l-2 border-white/10">
                  {processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`relative cursor-pointer transition-all p-2 rounded-lg ${
                        activeStep === idx
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute -left-[31px] top-3.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                          activeStep === idx
                            ? 'bg-amber-400 border-neutral-950 scale-125'
                            : 'bg-neutral-800 border-neutral-600'
                        }`}
                      />
                      <div className="flex items-center justify-between text-xs">
                        <span>
                          {step.stepNumber}. {step.title}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-amber-400 hover:underline flex items-center justify-center gap-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    <span>Request Timeline Estimate For Your Land</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
