import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles, Send } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    "Hi, I want to claim the Inaugural 40% OFF offer on advanced treatments.",
    "Hello Dr. Ojasvi, I want to book a Consultation with the Flat ₹100 OFF discount.",
    "I would like to inquire about GFC Hair Restoration sessions & pricing.",
    "Can you share clinic address and today's available appointment slots?"
  ];

  const handleSend = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919187969614?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Concierge Flyout Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-obsidian-900 border border-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.25)] overflow-hidden animate-fadeIn">
          {/* Top Bar */}
          <div className="p-4 bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-gold-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-obsidian-950 rounded-full" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">
                  OJASVI VIP Concierge
                </h4>
                <span className="text-[10px] text-emerald-400 font-medium">
                  Online • Typically replies in 5 mins
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-ivory-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-obsidian-950/70">
            <div className="p-3 rounded-2xl bg-obsidian-900 border border-gold-500/15 text-xs text-ivory-200">
              <p className="font-medium text-gold-300 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Welcome to OJASVI Derma Clinic!
              </p>
              <p className="text-ivory-300/90 leading-relaxed">
                Celebrating our grand opening with up to 40% OFF on treatments and Flat ₹100 OFF on doctor consultation. How can we help you today?
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-semibold text-ivory-400 tracking-wider block">
                Tap to Send Pre-filled Message:
              </span>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-obsidian-800/80 hover:bg-gold-500/15 border border-gold-500/10 hover:border-gold-500/40 text-xs text-ivory-200 hover:text-gold-200 transition-all flex items-center justify-between gap-2"
                >
                  <span className="line-clamp-1">{msg}</span>
                  <Send className="w-3 h-3 text-gold-400 shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-gold-500/15 flex items-center justify-between text-[11px] text-ivory-400">
              <span>Helpline: +91 9187969614</span>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="text-gold-400 font-semibold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="Contact Concierge"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 rounded-full border-2 border-obsidian-950 animate-bounce" />
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
