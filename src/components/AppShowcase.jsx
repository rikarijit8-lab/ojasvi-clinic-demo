import React from 'react';
import { Smartphone, Sparkles, QrCode, Scan, ShieldCheck, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export default function AppShowcase() {
  return (
    <section id="app-demo" className="relative py-20 border-t border-gold-500/20 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="p-1 rounded-3xl bg-gradient-to-r from-gold-500/40 via-gold-300/70 to-bronze-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.25)]">
          <div className="bg-obsidian-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-gold-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Copy & App Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold">
                  <Smartphone className="w-3.5 h-3.5 text-gold-400" />
                  Exclusive Mobile Innovation
                </div>

                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  Download & Experience Our <br />
                  <span className="gold-text-gradient italic">Ojasvi Android App</span>
                </h2>

                <p className="text-sm sm:text-base text-ivory-300/90 font-light leading-relaxed">
                  Bring clinical dermatology to your fingertips. Try our interactive Android mobile application featuring instant digital diagnostics, contactless VIP clinic passes, and streamlined appointment bookings.
                </p>

                {/* 3 Core Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-2xl glass-panel border border-gold-500/20 bg-obsidian-950/60">
                    <div className="w-8 h-8 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2 font-bold text-sm">
                      🔬
                    </div>
                    <h4 className="font-serif font-bold text-white text-xs">AI Skin & Hair Scanner</h4>
                    <p className="text-[11px] text-ivory-300/75 mt-1 leading-snug">
                      Real-time camera diagnostic analyzing hydration, sebum & follicular health.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl glass-panel border border-gold-500/20 bg-obsidian-950/60">
                    <div className="w-8 h-8 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2 font-bold text-sm">
                      🎟️
                    </div>
                    <h4 className="font-serif font-bold text-white text-xs">Instant ₹100 Off VIP Pass</h4>
                    <p className="text-[11px] text-ivory-300/75 mt-1 leading-snug">
                      Auto-generated digital member pass for consultation fee discounts.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl glass-panel border border-gold-500/20 bg-obsidian-950/60">
                    <div className="w-8 h-8 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2 font-bold text-sm">
                      ⚡
                    </div>
                    <h4 className="font-serif font-bold text-white text-xs">1-Tap Booking & Chat</h4>
                    <p className="text-[11px] text-ivory-300/75 mt-1 leading-snug">
                      Seamless WhatsApp scheduling and direct doctor hotline access.
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="./app.html"
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5"
                  >
                    <Smartphone className="w-4 h-4 text-obsidian-950" />
                    <span>Launch Android App Demo</span>
                    <ArrowRight className="w-4 h-4 text-obsidian-950" />
                  </a>

                  <span className="text-xs text-ivory-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Runs inside browser, zero install needed
                  </span>
                </div>

              </div>

              {/* Right Column: Android Device Interactive Preview Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <a 
                  href="./app.html" 
                  className="group relative w-full max-w-[280px] sm:max-w-[310px] rounded-[40px] bg-obsidian-950 p-2.5 border-4 border-neutral-700 ring-2 ring-gold-400/40 shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-105 block"
                >
                  {/* Speaker & camera pill */}
                  <div className="w-20 h-3 bg-neutral-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neutral-900" />
                  </div>

                  {/* Simulated App screen preview */}
                  <div className="rounded-[30px] overflow-hidden bg-obsidian-900 border border-gold-500/20 p-3.5 space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400">
                      <span>10:45 AM</span>
                      <span>5G • 98%</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-r from-gold-500/20 to-bronze-500/20 border border-gold-500/30">
                      <span className="text-[9px] uppercase font-bold text-gold-400 block">INAUGURAL SPECIAL</span>
                      <h5 className="font-serif font-bold text-white text-xs">Upto 40% OFF Treatments</h5>
                      <span className="text-[9px] text-emerald-400 font-medium">Flat ₹100 Off Consultation</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-300 flex items-center justify-center text-xs">
                        🔬
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-bold text-white block">AI Derma Scanner</span>
                        <span className="text-[8px] text-neutral-400">Tap to test live scanner</span>
                      </div>
                      <span className="text-xs text-gold-400 font-bold">▶</span>
                    </div>

                    {/* Launch Pill Overlay */}
                    <div className="py-2.5 rounded-xl bg-gold-500 text-obsidian-950 text-center font-bold text-[11px] uppercase tracking-wider group-hover:bg-gold-400 transition-colors shadow-md">
                      Open Android Demo
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
