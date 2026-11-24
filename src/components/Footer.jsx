import React from 'react';
import Logo from './Logo';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CLINIC_INFO } from '../data/treatments';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle top gold accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold-500/15">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-ivory-300/80 font-light leading-relaxed">
              Where healthy skin meets confidence. Premier medical aesthetics clinic specializing in advanced chemical peels, hydrafacial rejuvenation, growth factor concentrate (GFC) hair therapy, and painless diode laser hair reduction.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel border border-gold-500/30 flex items-center justify-center text-gold-400 hover:text-white hover:border-gold-300 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel border border-gold-500/30 flex items-center justify-center text-emerald-400 hover:text-white hover:border-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-9 h-9 rounded-full glass-panel border border-gold-500/30 flex items-center justify-center text-gold-400 hover:text-white hover:border-gold-300 transition-colors"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Procedures */}
          <div>
            <h4 className="font-serif font-bold text-white uppercase tracking-[0.16em] text-sm mb-4">
              Featured Treatments
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300/80 font-light">
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Chemical Peels Resurfacing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Hydrafacial MD Instant Glow
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> GFC (Growth Factor Concentrate) Hair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Painless Diode Laser Hair Reduction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Comprehensive Dermatologist Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Helpline */}
          <div>
            <h4 className="font-serif font-bold text-white uppercase tracking-[0.16em] text-sm mb-4">
              Appointments & Inquiries
            </h4>
            <div className="space-y-3 text-xs text-ivory-300/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-ivory-400 text-[11px] uppercase tracking-wider">Direct Hotline</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="font-semibold text-white hover:text-gold-300">
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-ivory-400 text-[11px] uppercase tracking-wider">Clinic Timing</span>
                  <span>{CLINIC_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <InstagramIcon className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-ivory-400 text-[11px] uppercase tracking-wider">Instagram</span>
                  <a href={CLINIC_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-gold-300 hover:underline">
                    {CLINIC_INFO.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Inaugural Promotional Pass */}
          <div className="p-5 rounded-2xl glass-panel border border-gold-500/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">
                LIMITED PERIOD OFFER
              </span>
              <h5 className="font-serif font-bold text-white text-base">
                Inaugural Offer Voucher
              </h5>
              <p className="text-[11px] text-ivory-300/80 mt-1 leading-snug">
                Upto 40% OFF on advanced treatments and Flat ₹100 OFF on complete doctor consultation.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking(null)}
              className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center"
            >
              Claim Your Pass Now
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400/70 font-light">
          <p>
            © {new Date().getFullYear()} OJASVI - Skin • Hair • Laser • Aesthetics. All rights reserved. *T&C Apply on inaugural offers.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gold-400/80">
              <ShieldCheck className="w-4 h-4" />
              US-FDA & ISO Clinical Standards
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass-panel hover:text-gold-300 text-ivory-300 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
