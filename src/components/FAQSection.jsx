import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How do I claim the Inaugural 40% OFF and Flat ₹100 OFF consultation offers?",
      a: "Simply click the 'Book Consultation' or 'Book Appointment' buttons on this website to generate your instant VIP Digital Pass. You can also mention the Inaugural Flyer offer when calling +91 9187969614 or sending a message on WhatsApp. The discount is automatically calculated and honored at reception."
    },
    {
      q: "How is GFC (Growth Factor Concentrate) superior to conventional PRP for hair loss?",
      a: "Unlike traditional PRP which contains red and white blood cells that cause inflammation and pain, GFC is an advanced acellular therapy. It extracts only high concentrations of active growth factors (PDGF, VEGF, EGF, IGF-1) into a sterile, clear serum. It yields up to 3x higher hair density, requires fewer sessions, and is virtually painless."
    },
    {
      q: "Is Laser Hair Reduction at Ojasvi really painless and safe for Indian skin tones?",
      a: "Yes. We utilize state-of-the-art triple-wavelength diode laser technology equipped with a continuous sub-zero sapphire cooling tip (ICE cooling). This cools the epidermis before and after each pulse, protecting the skin from thermal discomfort and making the treatment virtually painless and completely safe across Indian Fitzpatrick skin types III to V."
    },
    {
      q: "What is the downtime after a Hydrafacial MD or Chemical Peel?",
      a: "Our Hydrafacial MD has zero downtime—your skin looks immediately dewy, deeply hydrated, and glowing, making it the ideal pre-event or red-carpet treatment. Superficial chemical peels cause mild, gentle flaking for 2 to 3 days that is easily managed with the barrier repair moisturizer and broad-spectrum sunscreen provided by our dermatologist."
    },
    {
      q: "Are the treatments administered by certified medical professionals?",
      a: "Every aesthetic procedure at OJASVI is designed, supervised, and performed by certified clinical dermatologists and trained medical aestheticians under strict sterile, US-FDA validated clinical protocols."
    }
  ];

  return (
    <section id="faq" className="relative py-24 border-t border-gold-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
            Patient Clarifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Frequently Asked <span className="gold-text-gradient italic">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-ivory-300/80 font-light mt-2">
            Clear, evidence-based answers to help you choose with complete peace of mind.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel border border-gold-500/20 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-gold-300 transition-colors"
              >
                <span className="font-serif font-semibold text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180 text-gold-200" : ""
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ivory-300/90 font-light leading-relaxed border-t border-gold-500/10 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
