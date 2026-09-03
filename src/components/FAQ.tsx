import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { faqList } from '../data/businessData';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { BusinessProfile } from '../types';

interface FAQProps {
  business: BusinessProfile;
}

export const FAQ: React.FC<FAQProps> = ({ business }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqList.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="relative py-24 bg-neutral-900/30 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our architectural blueprints, UDA clearances, turnkey construction timelines, and expat management."
        />

        {/* Quick Search */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., UDA approvals, cost per sq ft, expat updates)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-neutral-900/50 border border-white/5">
              <p className="text-sm text-neutral-400">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-amber-400 underline font-medium"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-neutral-900/90 border-amber-400/40 shadow-xl'
                      : 'bg-neutral-900/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-neutral-400 hidden sm:inline-block"
                      >
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-amber-400 text-neutral-950'
                          : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* FAQ Support Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">
              Have a specific question about your land or property deed?
            </h4>
            <p className="text-xs text-neutral-400">
              Our principal architects in Colombo are available for direct WhatsApp consultations.
            </p>
          </div>

          <a
            href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20have%20a%20specific%20question%20regarding%20my%20property%20in%20Sri%20Lanka.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/60 transition-colors whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
