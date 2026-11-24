import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Phone, ShieldCheck, ArrowRight, Star, Clock, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';

export default function Hero({ onOpenBooking, onOpenFlyerModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Radial Gold Ambient Glow Behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold-500/15 via-bronze-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Flourish Tagline from Flyer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <p className="font-serif italic text-gold-300 text-sm md:text-lg tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 inline" />
              where healthy skin meets confidence
              <Sparkles className="w-3.5 h-3.5 text-gold-400 inline" />
            </p>
            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>

          {/* Grand Title: INAUGURAL OFFER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-none">
              <span className="tracking-[0.18em] uppercase text-ivory-100 block text-3xl sm:text-5xl md:text-6xl mb-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                INAUGURAL
              </span>
              <span className="font-serif italic text-gold-400 text-5xl sm:text-7xl md:text-8xl lg:text-9xl block -mt-2 sm:-mt-4 gold-text-shimmer drop-shadow-[0_8px_24px_rgba(212,175,55,0.45)]">
                Offer
              </span>
            </h1>
          </motion.div>

          {/* Flyer Sub-banner Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-obsidian-900 via-obsidian-800 to-obsidian-900 border border-gold-400/40 shadow-[0_4px_25px_rgba(212,175,55,0.2)]"
          >
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span className="text-[11px] sm:text-xs md:text-sm font-sans uppercase tracking-[0.2em] font-semibold text-gold-200">
              CELEBRATING NEW BEGINNINGS WITH BEAUTIFUL YOU
            </span>
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          </motion.div>

          {/* 3D Shimmering Grand Discount Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative w-full max-w-3xl my-2 p-[1px] rounded-3xl bg-gradient-to-r from-gold-500/60 via-gold-300/90 to-bronze-500/60 shadow-[0_0_50px_rgba(212,175,55,0.25)]"
          >
            <div className="bg-obsidian-900/90 backdrop-blur-xl rounded-3xl py-6 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-500/20">
              
              {/* Upto 40% OFF Focus Box */}
              <div className="flex items-center gap-4 text-left">
                <div className="flex flex-col items-center justify-center w-14 h-24 sm:w-16 sm:h-28 rounded-2xl bg-gradient-to-b from-gold-500/20 to-bronze-900/40 border border-gold-400/30 text-gold-300">
                  <span className="text-[10px] font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
                    UPTO
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline">
                    <span className="font-serif text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-400 tracking-tight leading-none">
                      40%
                    </span>
                    <span className="font-serif text-3xl sm:text-5xl font-bold text-gold-400 ml-1">
                      OFF*
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-ivory-200/90 mt-1">
                    ON SELECT ADVANCED TREATMENTS
                  </p>
                </div>
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden md:block w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />

              {/* Consultation Discount Badge from Flyer */}
              <div className="flex items-center gap-3.5 bg-obsidian-950/70 border border-gold-500/30 rounded-2xl px-5 py-3.5 shadow-inner">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-bronze-600 flex items-center justify-center text-obsidian-950 font-bold shadow-md">
                  <span className="text-lg">🩺</span>
                </div>
                <div className="text-left">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-medium text-ivory-300">FLAT</span>
                    <span className="font-serif text-2xl font-bold text-gold-300">₹100</span>
                    <span className="text-[11px] uppercase tracking-wider font-medium text-ivory-300">OFF</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-gold-400/90 tracking-wide uppercase">
                    ON CONSULTATION FEE
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-lg"
          >
            {/* Primary Glowing 3D CTA Button */}
            <button
              onClick={() => onOpenBooking(null)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full sm:w-auto flex-1 group overflow-hidden py-4 px-8 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-bronze-500 text-obsidian-950 font-bold text-sm tracking-[0.16em] uppercase shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* Shimmer sweep effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <div className="relative z-10 flex items-center justify-center gap-2.5">
                <Calendar className="w-4 h-4 text-obsidian-950" />
                <span>Book Appointment Today</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* Direct Call / WhatsApp Button */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full sm:w-auto py-4 px-6 rounded-full glass-panel border border-gold-500/30 hover:border-gold-400 text-ivory-100 hover:text-gold-300 text-sm tracking-wider font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-gold-500/10"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
          </motion.div>

          {/* Quick Perks Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory-300/80"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              <span>Board-Certified Dermatologists</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              <span>US-FDA Approved Lasers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              <span>100% Sterile Medical Protocols</span>
            </div>
            <button 
              onClick={onOpenFlyerModal}
              className="text-gold-400 underline underline-offset-4 hover:text-gold-200 transition-colors cursor-pointer"
            >
              View Official Launch Flyer 📜
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
