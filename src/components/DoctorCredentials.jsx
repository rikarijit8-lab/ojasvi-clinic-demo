import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Microscope, CheckCircle } from 'lucide-react';

export default function DoctorCredentials({ onOpenBooking }) {
  return (
    <section id="why-us" className="relative py-24 border-t border-gold-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden glass-panel border border-gold-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Ojasvi Derma Clinic State-of-the-art Consultation Suite"
                className="w-full h-[420px] object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian-900/90 backdrop-blur-md border border-gold-500/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 text-xl font-bold">
                  ★
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">US-FDA Standard Excellence</h4>
                  <p className="text-xs text-ivory-300/80">Every device, laser, and chemical solution adheres to strict international clinical efficacy.</p>
                </div>
              </div>
            </div>

            {/* Backdrop glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/10 to-bronze-500/10 rounded-3xl blur-2xl -z-10" />
          </div>

          {/* Right Column: Copy & Standards */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              The Ojasvi Standard of Care
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Medical Precision Blended With <span className="gold-text-gradient italic">Artistic Aesthetics</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-ivory-300/80 font-light leading-relaxed">
              At OJASVI, we do not believe in one-size-fits-all treatments. Every client undergoes an exhaustive dermatological assessment, examining dermal hydration, sebum balance, follicular density, and pigmentation depth before any protocol is recommended.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-panel border border-gold-500/15">
                <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Sterile & Autologous Purity</h4>
                  <p className="text-xs text-ivory-300/80 mt-0.5">
                    100% single-use disposable kits and sterile closed-system acellular centrifuge tubes for GFC hair and skin therapy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-panel border border-gold-500/15">
                <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Continuous Skin Temperature & Comfort Monitoring</h4>
                  <p className="text-xs text-ivory-300/80 mt-0.5">
                    Advanced sub-zero ICE contact cooling on our diode lasers ensures completely comfortable, burn-free sessions tailored for Indian melanin profiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-panel border border-gold-500/15">
                <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Transparent Consultation, Zero Hard-Selling</h4>
                  <p className="text-xs text-ivory-300/80 mt-0.5">
                    Claim your Flat ₹100 Off on Consultation to experience an honest, evidence-based roadmap for your long-term skin and hair health.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => onOpenBooking(null)}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
              >
                Schedule Clinic Visit
              </button>
              <span className="text-xs text-ivory-400 font-light">
                Mon - Sun: 10:00 AM - 8:00 PM
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
