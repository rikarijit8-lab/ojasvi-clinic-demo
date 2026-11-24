import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Shield, ArrowRight, Eye, Tag } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

export default function ServicesShowcase({ onSelectTreatment, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Skin", "Skin & Glow", "Hair Restoration", "Laser"];

  const filteredTreatments = activeCategory === "All" 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Curated Clinical Portfolio
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-100 tracking-tight">
            Advanced Dermatological & <span className="gold-text-gradient italic">Laser Aesthetics</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-ivory-300/80 font-light leading-relaxed">
            Every protocol is curated by certified medical practitioners using FDA-approved technology, clinical sterile standards, and customized regimens designed specifically for your skin & hair health.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold-500 text-obsidian-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "glass-panel text-ivory-300 hover:text-gold-300 hover:border-gold-400/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Core Treatment 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-gold-500/25 flex flex-col justify-between transition-all duration-500 hover:border-gold-400/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),0_0_30px_rgba(212,175,55,0.2)]"
            >
              {/* Top Image Container with luxury overlay */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = './flyer.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-95"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                {/* Offer Badge Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-gold-500 to-bronze-600 text-obsidian-950 text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                  <Tag className="w-3 h-3 text-obsidian-950" />
                  <span>40% OFF</span>
                </div>

                {/* Category Pill Top Left */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-gold-400/30 text-[10px] font-semibold text-gold-300 uppercase tracking-wider">
                  {treatment.category}
                </div>

                {/* Duration Badge Bottom Right of Image */}
                <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[11px] font-medium text-ivory-200 bg-obsidian-900/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-gold-500/20">
                  <Clock className="w-3 h-3 text-gold-400" />
                  <span>{treatment.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Treatment Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {treatment.name}
                  </h3>
                  
                  <p className="text-[11px] font-medium uppercase tracking-wider text-gold-400/90 mt-1 mb-3">
                    {treatment.subtitle}
                  </p>

                  {/* Flyer Exact Tagline */}
                  <p className="text-xs sm:text-sm text-ivory-200/90 italic font-serif leading-relaxed border-l-2 border-gold-400/60 pl-3 py-0.5 bg-gold-500/5 rounded-r-md">
                    "{treatment.tagline}"
                  </p>

                  {/* Quick Feature Points */}
                  <ul className="mt-4 space-y-1.5 text-xs text-ivory-300/80">
                    {treatment.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-gold-400 mt-0.5 font-bold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Actions */}
                <div className="mt-6 pt-4 border-t border-gold-500/15">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ivory-400 block">
                        Inaugural Special
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl font-bold text-gold-300">
                          ₹{treatment.offerPrice}
                        </span>
                        <span className="text-xs line-through text-ivory-400/70">
                          ₹{treatment.originalPrice}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Save ₹{treatment.originalPrice - treatment.offerPrice}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectTreatment(treatment)}
                      className="py-2.5 px-3 rounded-xl border border-gold-500/30 bg-obsidian-900/60 hover:bg-gold-500/15 hover:border-gold-400 text-ivory-200 hover:text-gold-200 text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-gold-400" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenBooking(treatment)}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:brightness-110 shadow-md transition-all active:scale-95"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3.5 h-3.5 text-obsidian-950" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultation Callout Banner below Services */}
        <div id="offers" className="mt-16 p-1 rounded-3xl bg-gradient-to-r from-gold-500/40 via-gold-300/60 to-bronze-500/40 shadow-2xl">
          <div className="bg-obsidian-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-bronze-600 flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(212,175,55,0.3)] shrink-0">
                🩺
              </div>
              <div>
                <div className="inline-block px-3 py-0.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-[11px] font-bold uppercase tracking-wider text-gold-300 mb-1">
                  Exclusive Walk-in & Online Offer
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Flat ₹100 OFF On Complete Dermatologist Consultation
                </h3>
                <p className="text-xs sm:text-sm text-ivory-300/80 font-light mt-1">
                  Includes comprehensive skin/scalp digital trichoscopy, personalized aesthetic regimen mapping, and prescription guidance.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking(null)}
              className="w-full sm:w-auto shrink-0 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-[0.16em] hover:brightness-110 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Claim ₹100 Off Voucher</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
