import React from 'react';
import { ShieldCheck, Sparkles, HeartPulse } from 'lucide-react';
import { AtomIcon } from './Icons';
import { TRUST_PILLARS } from '../data/treatments';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Atom: AtomIcon,
  HeartPulse: HeartPulse
};

export default function TrustStrip() {
  return (
    <section className="relative py-12 border-y border-gold-500/15 bg-obsidian-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="group relative p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover border border-gold-500/20 text-center flex flex-col items-center justify-center transition-all duration-300"
              >
                {/* Subtle top gold accent bar */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent group-hover:left-2 group-hover:right-2 transition-all duration-500" />
                
                {/* 3D Glass Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 via-bronze-500/10 to-obsidian-950 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-3 group-hover:scale-110 group-hover:text-gold-200 group-hover:border-gold-300 transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.15)]">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <h3 className="font-serif uppercase tracking-[0.15em] text-base sm:text-lg font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold-400/90 mt-0.5">
                  {pillar.subtitle}
                </span>

                <p className="text-xs text-ivory-300/70 mt-2 font-light leading-relaxed hidden sm:block">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
