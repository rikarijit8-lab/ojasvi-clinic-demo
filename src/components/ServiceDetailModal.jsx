import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Clock, AlertCircle, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ treatment, onClose, onBook }) {
  if (!treatment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-obsidian-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.25)] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Hero Banner */}
          <div className="relative h-48 sm:h-64 w-full shrink-0">
            <img
              src={treatment.image}
              alt={treatment.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = './flyer.jpg';
              }}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-obsidian-950/80 border border-gold-500/30 text-ivory-200 hover:text-white hover:bg-gold-500/20 transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Titles */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-extrabold uppercase tracking-widest">
                  40% Off Inaugural Rate
                </span>
                <span className="text-xs text-gold-300 uppercase tracking-widest font-semibold">
                  {treatment.category}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                {treatment.name}
              </h3>
              <p className="text-xs sm:text-sm text-gold-200/90 italic font-serif">
                "{treatment.tagline}"
              </p>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-ivory-200/90">
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-obsidian-950/70 p-4 rounded-2xl border border-gold-500/15">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory-400 block">Session Time</span>
                <span className="font-medium text-gold-300 text-xs sm:text-sm">{treatment.duration}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory-400 block">Downtime</span>
                <span className="font-medium text-gold-300 text-xs sm:text-sm">{treatment.downtime}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory-400 block">Comfort Level</span>
                <span className="font-medium text-gold-300 text-xs sm:text-sm">{treatment.painLevel}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory-400 block">Recommended</span>
                <span className="font-medium text-gold-300 text-xs sm:text-sm">{treatment.recommendedSessions}</span>
              </div>
            </div>

            {/* Clinical Overview */}
            <div>
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                Clinical Description & Mechanism
              </h4>
              <p className="text-ivory-300 font-light leading-relaxed">
                {treatment.description}
              </p>
            </div>

            {/* Key Clinical Benefits */}
            <div>
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-gold-400" />
                Proven Therapeutic Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {treatment.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 bg-obsidian-800/60 p-3 rounded-xl border border-gold-500/10">
                    <Check className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                    <span className="text-xs text-ivory-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocol Steps */}
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-3">
                Treatment Protocol Steps
              </h4>
              <div className="space-y-2">
                {treatment.procedureSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs bg-obsidian-950/40 p-2.5 rounded-lg border border-gold-500/10">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-[11px] shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-ivory-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-500/10 via-bronze-500/10 to-obsidian-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-ivory-400">
                  Inaugural Promotional Rate (Single Session)
                </span>
                <div className="flex items-baseline gap-3 mt-0.5">
                  <span className="font-serif text-3xl font-bold text-gold-300">
                    ₹{treatment.offerPrice}
                  </span>
                  <span className="text-sm line-through text-ivory-400">
                    ₹{treatment.originalPrice}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    40% Discount Applied
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBook(treatment);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-[0.16em] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 shrink-0 active:scale-95 transition-all"
              >
                <span>Book This Treatment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
