import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Calendar, Sparkles, Menu, X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';

export default function Navbar({ onOpenBooking, onSelectTreatment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Inaugural Offers", href: "#offers" },
    { name: "Results", href: "#results" },
    { name: "Why Ojasvi", href: "#why-us" },
    { name: "Clinic", href: "#instagram" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-obsidian-950/90 backdrop-blur-2xl border-b border-gold-500/25 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.85)]" 
        : "bg-obsidian-950/60 backdrop-blur-md py-4 border-b border-gold-500/10"
    }`}>
      {/* Top micro-announcement banner on larger screens */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100 mb-2.5 border-b border-gold-500/15'}`}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between text-xs text-ivory-200/90">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <span className="font-medium tracking-wider uppercase text-[11px] text-gold-300">
              Inaugural Celebration:
            </span>
            <span className="hidden sm:inline text-ivory-300">Upto 40% OFF* on Select Advanced Treatments & Flat ₹100 Off Consultation</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${CLINIC_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
            <span className="text-gold-500/40">|</span>
            <span className="hidden md:inline text-ivory-300/80 font-light">10:00 AM – 8:00 PM</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center shrink-0">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] 2xl:text-xs uppercase tracking-[0.2em] font-medium text-ivory-200/85 hover:text-gold-300 transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-bronze-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons for Mobile, Tablet & Desktop */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* WhatsApp icon - visible on sm+ (tablets & desktop) */}
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/30 bg-obsidian-900/90 hover:border-gold-400 hover:bg-gold-500/20 text-gold-400 hover:text-white items-center justify-center transition-all duration-300 shadow-md shrink-0"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
          </a>

          {/* Book Consultation button */}
          <button
            onClick={() => onOpenBooking(null)}
            className="relative group overflow-hidden px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-bronze-500 text-obsidian-950 font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:brightness-110 transition-all duration-300 active:scale-95 flex items-center gap-1.5 shrink-0"
          >
            <span className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <Calendar className="w-3.5 h-3.5 text-obsidian-950" />
            <span className="hidden sm:inline whitespace-nowrap">Book Consultation</span>
            <span className="sm:hidden inline whitespace-nowrap">Book</span>
          </button>

          {/* Mobile & Tablet Hamburger Toggle (visible on screens < xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-ivory-200 hover:text-gold-400 hover:bg-gold-500/10 focus:outline-none transition-colors border border-gold-500/20"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-obsidian-950/95 backdrop-blur-2xl border-b border-gold-500/25 px-6 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider text-ivory-100 hover:text-gold-400 py-1.5 border-b border-gold-500/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-gold-400 text-xs">›</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking(null);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider text-center shadow-lg active:scale-95"
              >
                Book Appointment Today
              </button>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-gold-500/40 text-gold-300 font-medium text-xs tracking-wider text-center flex items-center justify-center gap-2 bg-obsidian-900/60"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp Clinic (+91 9187969614)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
