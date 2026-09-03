import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Calculator,
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { BusinessProfile } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: BusinessProfile;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  business,
  initialService,
}) => {
  const [projectType, setProjectType] = useState<string>(
    initialService || 'Private Tropical Residence'
  );
  const [squareFeet, setSquareFeet] = useState<number>(4500);
  const [location, setLocation] = useState<string>('Colombo 07 / Western Province');
  const [scope, setScope] = useState<'blueprint' | 'turnkey' | 'interior'>('turnkey');

  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  // Calculators based on typical Sri Lankan luxury build benchmarks
  const calculateEstimate = () => {
    let ratePerSqFtUsd = 85;
    let durationMonths = 12;

    if (scope === 'blueprint') {
      ratePerSqFtUsd = 0.45; // Blueprint design fee per sq ft
      durationMonths = 1.5;
    } else if (scope === 'interior') {
      ratePerSqFtUsd = 35;
      durationMonths = 4;
    } else {
      // Full turnkey
      ratePerSqFtUsd = 90;
      durationMonths = Math.round(10 + squareFeet / 1200);
    }

    const totalUsd = Math.round(squareFeet * ratePerSqFtUsd);
    const totalLkr = Math.round(totalUsd * 315); // approx LKR conversion

    return {
      totalUsd,
      totalLkr,
      durationMonths,
    };
  };

  const estimate = calculateEstimate();

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi ${business.name}, I used your website Quote Estimator:\n- Project: ${projectType}\n- Scope: ${scope.toUpperCase()}\n- Area: ${squareFeet.toLocaleString()} sq.ft\n- Location: ${location}\n- Indicative Range: ~$${estimate.totalUsd.toLocaleString()} USD\nMy Name: ${clientName || 'Client'}\nPhone: ${clientPhone || 'N/A'}\nCould we schedule an architectural review?`
    );
    window.open(
      `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`,
      '_blank'
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-neutral-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-neutral-950 font-bold"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Instant Architectural Cost Estimator
              </h3>
              <p className="text-xs text-neutral-400">
                Transparent benchmark rates for Sri Lanka luxury construction
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white font-heading">
                Quotation Brief Generated
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                Your estimated scope (~{squareFeet.toLocaleString()} sq.ft {scope} in {location}) has been logged. Our chartered team will review your specifications.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-neutral-950 hover:bg-emerald-400 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-medium text-neutral-300 bg-white/5 hover:bg-white/10"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Project Scope */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2">
                  1. Select Engagement Scope
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'turnkey', label: 'Turnkey Design-Build' },
                    { id: 'interior', label: 'Interior Fit-Out' },
                    { id: 'blueprint', label: 'Blueprint & Approvals' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScope(item.id as any)}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        scope === item.id
                          ? 'border-amber-400 bg-amber-400/10 text-white font-bold'
                          : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Property Type & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2">
                    2. Project Category
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Private Tropical Residence">Private Tropical Residence</option>
                    <option value="Boutique Hotel / Luxury Villa">Boutique Hotel / Luxury Villa</option>
                    <option value="Commercial HQ / Office">Commercial HQ / Office</option>
                    <option value="Penthouse Interior Modernization">Penthouse Interior Modernization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2">
                    3. Location in Sri Lanka
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Colombo 07 / Western Province">Colombo 07 & Western Province</option>
                    <option value="Galle Fort & Southern Coast">Galle Fort & Southern Coast</option>
                    <option value="Kandy & Central Province">Kandy & Central Province</option>
                    <option value="Overseas / Remote Client">Overseas Expat (Remote Managed)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Square Footage Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-neutral-300">
                    4. Built-Up Floor Area
                  </label>
                  <span className="text-sm font-extrabold text-amber-400 font-heading">
                    {squareFeet.toLocaleString()} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="15000"
                  step="250"
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>1,500 sq.ft (Compact)</span>
                  <span>6,000 sq.ft (Large Residence)</span>
                  <span>15,000+ sq.ft (Estate/Hotel)</span>
                </div>
              </div>

              {/* Indicative Result Card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-white/15 space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Indicative Investment Estimate:</span>
                  <span>Estimated Delivery:</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      ~${estimate.totalUsd.toLocaleString()} USD
                    </span>
                    <span className="text-xs text-amber-400 block font-medium">
                      approx. Rs. {Math.round(estimate.totalLkr / 1000000)}M LKR
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-white">
                      ~{estimate.durationMonths} Months
                    </span>
                    <span className="text-[10px] text-neutral-400 block">
                      To key handover
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-neutral-950 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number (Optional)"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-neutral-950 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:flex-1 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 bg-emerald-500 hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all hover:brightness-110 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span>Request Full BOQ Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[10px] text-neutral-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligations. All estimates subject to on-site topographical audit.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
