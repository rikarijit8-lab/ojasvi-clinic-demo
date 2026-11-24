import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/treatments';

export default function BeforeAfterSlider({ onOpenBooking }) {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100%

  const activeCase = BEFORE_AFTER_CASES[activeCaseIdx];

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section id="results" className="relative py-24 bg-obsidian-900/40 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Clinical Evidence & Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Real Transformations, <span className="gold-text-gradient italic">Visible Confidence</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ivory-300/80 font-light">
            Slide the divider to compare baseline clinical status against treatment results. Every journey is customized for sustainable aesthetic health.
          </p>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCaseIdx === idx
                    ? "bg-gold-500 text-obsidian-950 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "glass-panel text-ivory-300 hover:text-white hover:border-gold-400/40"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-4 sm:p-8 border border-gold-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 pb-4 border-b border-gold-500/15">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold-400 font-semibold block">
                {activeCase.category}
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                {activeCase.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-obsidian-950/80 px-3.5 sm:px-4 py-1.5 rounded-full border border-gold-500/20 text-xs font-medium text-gold-300 shrink-0">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>{activeCase.timeline}</span>
            </div>
          </div>

          {/* Interactive Split Slider Container */}
          <div
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouchMove}
            className="relative h-[340px] sm:h-[480px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-gold-500/20"
          >
            {/* After Image (Full background) */}
            <img
              src={activeCase.afterImage}
              alt="After treatment result"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-full text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/30 z-10 pointer-events-none">
              After Treatment
            </div>

            {/* Before Image (Clipped by slider width) */}
            <div
              style={{ width: `${sliderPosition}%` }}
              className="absolute inset-0 overflow-hidden z-10 border-r-2 border-gold-400 shadow-[2px_0_15px_rgba(212,175,55,0.7)]"
            >
              <img
                src={activeCase.beforeImage}
                alt="Before treatment condition"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-4 left-4 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-full text-ivory-200 text-xs font-bold uppercase tracking-wider border border-gold-500/30 pointer-events-none">
                Before
              </div>
            </div>

            {/* Divider Handle Knob */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-gold-500 to-bronze-500 border-2 border-white shadow-[0_0_20px_rgba(212,175,55,0.8)] flex items-center justify-center text-obsidian-950 font-bold pointer-events-none"
            >
              <div className="flex items-center text-[10px] sm:text-xs">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>
          </div>

          {/* Clinical Case Notes */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-ivory-300/90 font-light italic">
              📌 {activeCase.summary}
            </p>
            <button
              onClick={() => onOpenBooking(null)}
              className="shrink-0 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <span>Get Similar Results</span>
              <ChevronRight className="w-3.5 h-3.5 text-obsidian-950" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
