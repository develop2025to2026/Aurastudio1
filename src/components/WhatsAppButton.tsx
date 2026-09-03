import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { BusinessProfile } from '../types';

interface WhatsAppButtonProps {
  business: BusinessProfile;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ business }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanNumber = business.whatsapp.replace(/[^0-9]/g, '');
  const defaultMessage = encodeURIComponent(
    `Hi ${business.name}, I am interested in your architectural and turnkey services in Sri Lanka. I would like to get more information and a quotation.`
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 p-4 rounded-2xl bg-neutral-900/95 border border-emerald-500/30 backdrop-blur-xl shadow-2xl max-w-xs animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-white p-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-neutral-950 font-bold text-xs">
                A
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-neutral-900 rounded-full" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">
                {business.name} Studio Desk
              </h5>
              <span className="text-[10px] text-emerald-400">
                Online • Typically replies in 15 mins
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
            Planning a new residence, villa, or commercial fit-out in Sri Lanka? Chat directly with our principal team.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-500 text-neutral-950 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors shadow-md"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Contact Studio via WhatsApp"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative"
          style={{
            boxShadow: '0 8px 30px -4px rgba(16, 185, 129, 0.5)',
          }}
          onMouseEnter={() => setShowTooltip(true)}
        >
          {/* Pulsing ring indicator */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 relative z-10 fill-neutral-950 text-neutral-950" />
        </a>
      </div>
    </div>
  );
};
