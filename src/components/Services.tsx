import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { servicesList } from '../data/businessData';
import { ServiceItem } from '../types';
import {
  Compass,
  LayoutGrid,
  HardHat,
  Palmtree,
  Building2,
  Trees,
  ArrowRight,
  Check,
  X,
  Sparkles,
  PhoneCall,
  CalendarCheck,
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6" />;
      case 'Palmtree':
        return <Palmtree className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Trees':
        return <Trees className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Disciplines"
          title="Architectural & Turnkey Capabilities"
          subtitle="From concept sketches on paper to turnkey key handover, we unite visionary design and certified civil engineering under one seamless studio."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
              style={{
                boxShadow: '0 4px 20px -2px rgba(0,0,0,0.5)',
              }}
            >
              {/* Card top banner image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                
                {/* Floating category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/15">
                    {service.category}
                  </span>
                </div>

                {/* Service Icon Badge */}
                <div
                  className="absolute -bottom-4 right-6 w-12 h-12 rounded-xl flex items-center justify-center text-neutral-950 shadow-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                  }}
                >
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5 font-heading group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Top Key Benefits */}
                  <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Starting Price & Learn More CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">
                      Starting From
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer group-hover:border-amber-400/40"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            {/* Modal Image Header */}
            <div className="relative h-56 w-full">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 border border-white/20 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-amber-400 text-neutral-950 mb-2 inline-block">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Scope Overview
                </h4>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Strategic Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Delivered Outputs
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {selectedService.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-neutral-400 block">Guideline Rate</span>
                  <span className="text-sm font-bold text-white">
                    {selectedService.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const serviceName = selectedService.title;
                      setSelectedService(null);
                      onSelectServiceForQuote(serviceName);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all hover:brightness-110 flex items-center justify-center gap-2"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Request Quotation for This</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
