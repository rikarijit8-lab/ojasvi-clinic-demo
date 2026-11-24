import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';

export default function FlyerModal({ isOpen, onClose, onOpenBooking }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-xl"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-obsidian-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.3)] z-10 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gold-500/20 bg-obsidian-950 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 block">
                AUTHENTIC INAUGURAL LAUNCH FLYER
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                OJASVI Skin • Hair • Laser • Aesthetics
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-obsidian-900 border border-gold-500/30 text-ivory-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Flyer Image Container */}
          <div className="p-4 overflow-y-auto flex items-center justify-center bg-obsidian-950/60">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/50 shadow-2xl max-h-[65vh]">
              <img
                src="/flyer.jpg"
                alt="OJASVI Inaugural Offer Flyer"
                className="w-full h-auto object-contain max-h-[65vh]"
              />
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="p-4 bg-obsidian-950 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-ivory-300">
              *All offers shown on this flyer are valid for instant booking.
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(null);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Claim Flyer Offer</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
