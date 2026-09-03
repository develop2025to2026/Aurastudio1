import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { BusinessProfile } from '../types';
import { servicesList } from '../data/businessData';

interface ContactProps {
  business: BusinessProfile;
  prefillService?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budgetRange: string;
  location: string;
  message: string;
}

export const Contact: React.FC<ContactProps> = ({ business, prefillService }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    service: prefillService || 'Bespoke Architectural Design',
    budgetRange: '$5,000 - $20,000 / LKR 1.5M - 6M',
    location: 'Colombo & Western Province',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update if prefilled service changes
  React.useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, service: prefillService }));
    }
  }, [prefillService]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number with country code.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your property or requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Bespoke Architectural Design',
      budgetRange: '$5,000 - $20,000 / LKR 1.5M - 6M',
      location: 'Colombo & Western Province',
      message: '',
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-neutral-950">
      {/* Subtle ambient light */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--color-primary), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Direct Engagement"
          title="Initiate Your Architectural Journey"
          subtitle="Whether you hold title deeds for a private residence, boutique resort, or commercial plot in Sri Lanka, schedule a confidential consultation with our Principal Architect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Channels & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900/90 border border-white/10 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                  Colombo Head Studio
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {business.name} Practice
                </h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Chartered architects and structural engineers based in Cinnamon Gardens, serving clients island-wide and globally.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                {/* Phone CTA */}
                <a
                  href={`tel:${business.phone}`}
                  id="contact-phone-link"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-neutral-950 shrink-0 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase font-semibold block">
                      Direct Studio Desk
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {business.phoneFormatted}
                    </span>
                    <span className="text-[10px] text-neutral-500 block">
                      Mon - Sat 8:30 AM to 6:30 PM SLST
                    </span>
                  </div>
                </a>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20am%20interested%20in%20consulting%20with%20Aura%20Studio%20regarding%20an%20architectural%20or%20turnkey%20project%20in%20Sri%20Lanka.`}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-whatsapp-link"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/25 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-neutral-950 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-300 uppercase font-semibold block">
                      Instant WhatsApp Desk
                    </span>
                    <span className="text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      {business.whatsappFormatted}
                    </span>
                    <span className="text-[10px] text-emerald-500/80 block">
                      Fast response • Overseas voice notes welcome
                    </span>
                  </div>
                </a>

                {/* Email CTA */}
                <a
                  href={`mailto:${business.email}`}
                  id="contact-email-link"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase font-semibold block">
                      Blueprint & Tender Submissions
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                      {business.email}
                    </span>
                    <span className="text-[10px] text-neutral-500 block">
                      Monitored by Principal Architectural Partner
                    </span>
                  </div>
                </a>

                {/* Address & Hours */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 text-neutral-300">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{business.address}, {business.country}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-400 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{business.openingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Stylized Colombo Map Section */}
            <div className="rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-xl">
              <div className="p-4 border-b border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Ward Place, Colombo 07 Landmark</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Ward+Place+Colombo+07+Sri+Lanka"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] text-amber-400 hover:underline font-medium"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative h-48 w-full bg-neutral-950 overflow-hidden">
                <iframe
                  title="Studio Colombo Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.43574972274!2d79.8631!3d6.9157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259746e8f47ef%3A0x6b8bc661908b9e6!2sWard%20Pl%2C%20Colombo%2000700%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-white/15 shadow-2xl relative">
              {isSuccess ? (
                <div className="py-12 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Our Lead Architect has been notified and will review your requirements. You will receive a response within 4 to 12 business hours.
                    </p>
                  </div>

                  {/* Immediate WhatsApp link with prefilled details */}
                  <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 max-w-md mx-auto space-y-3">
                    <p className="text-xs text-emerald-300">
                      Need immediate confirmation or prefer sending sketches right now?
                    </p>
                    <a
                      href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(formData.service)}%20via%20your%20website.%20My%20name%20is%20${encodeURIComponent(formData.fullName)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-neutral-950 text-xs font-bold uppercase tracking-wider w-full shadow-md hover:bg-emerald-400 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Immediately on WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Request a Confidential Architectural Review
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      Complete this brief form to receive an initial feasibility estimate and project roadmap.
                    </p>
                  </div>

                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Ruwan Wickramasinghe"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-amber-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. ruwan@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-amber-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +94 77 123 4567 or +44 7911..."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-amber-400'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider"
                      >
                        Project Land Location
                      </label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Colombo & Western Province">Colombo (01-15) & Western Province</option>
                        <option value="Galle, Mirissa & Southern Coast">Galle, Mirissa & Southern Coast</option>
                        <option value="Kandy & Central Highlands">Kandy & Central Highlands</option>
                        <option value="Kalutara / Bentota">Kalutara / Bentota Coast</option>
                        <option value="Overseas / Expat Managing Remotely">Overseas Expat Client (Managing Remotely)</option>
                        <option value="Other Province in Sri Lanka">Other Province in Sri Lanka</option>
                      </select>
                    </div>
                  </div>

                  {/* Service & Budget Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider"
                      >
                        Primary Service Needed
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        {servicesList.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Complete Master Turnkey Design-Build">
                          Complete Master Turnkey Design-Build
                        </option>
                        <option value="Other Bespoke Requirement">Other Bespoke Requirement</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider"
                      >
                        Anticipated Capital Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="$5,000 - $20,000 / LKR 1.5M - 6M">
                          $5,000 – $20,000 (Blueprint & Concept Stage)
                        </option>
                        <option value="$20,000 - $75,000 / LKR 6M - 23M">
                          $20,000 – $75,000 (Luxury Interior Fit-out)
                        </option>
                        <option value="$75,000 - $250,000 / LKR 23M - 75M">
                          $75,000 – $250,000 (Turnkey Residence 3,500-6,000 sqft)
                        </option>
                        <option value="$250,000+ / LKR 75M+">
                          $250,000+ (Master Villa / Commercial HQ)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider"
                    >
                      Project Description & Requirements *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Briefly describe your land dimensions, desired number of bedrooms/facilities, or special architectural preferences (e.g. lap pool, courtyard, solar)..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-white/15 focus:border-amber-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all duration-300 hover:brightness-110 active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      boxShadow: '0 8px 25px -4px rgba(212, 175, 55, 0.4)',
                    }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting to Studio Desk...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Transmit Project Inquiry & Schedule Audit</span>
                      </div>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Strict confidentiality assured. Non-disclosure agreements (NDA) available upon request.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
