import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Calendar, Sparkles, Menu, X, MessageCircle, Smartphone } from 'lucide-react';
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
        ? "bg-obsidian-950/85 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
        : "bg-transparent py-5"
    }`}>
      {/* Top micro-announcement banner on larger screens */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100 mb-3 border-b border-gold-500/15'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-ivory-200/90">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-ivory-200/85 hover:text-gold-300 transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-bronze-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Glowing Android App Demo Pill Button */}
          <a
            href="./app.html"
            className="relative group overflow-hidden px-4 py-2 rounded-full bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-bronze-500/20 border border-gold-400 text-gold-300 hover:text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_18px_rgba(212,175,55,0.45)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:bg-gold-500/30 transition-all duration-300 flex items-center gap-1.5"
            title="Launch Interactive Android App Demo"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping inline-block" />
            <Smartphone className="w-3.5 h-3.5 text-gold-400" />
            <span>Android App Demo</span>
          </a>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-gold-500/25 bg-obsidian-800/80 text-gold-400 hover:text-white hover:border-gold-400 hover:bg-gold-500/20 transition-all duration-300"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenBooking(null)}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-bronze-500 text-obsidian-950 font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <Calendar className="w-3.5 h-3.5 text-obsidian-950" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="./app.html"
            className="px-2.5 py-1.5 rounded-full border border-gold-400 bg-gold-500/20 text-gold-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
          >
            <Smartphone className="w-3 h-3 text-gold-400" />
            <span>App</span>
          </a>
          <button
            onClick={() => onOpenBooking(null)}
            className="px-3 py-1.5 rounded-full bg-gold-500 text-obsidian-950 text-[11px] font-bold uppercase tracking-wider"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ivory-200 hover:text-gold-400 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-900/95 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider text-ivory-100 hover:text-gold-400 py-1 border-b border-gold-500/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="./app.html"
                className="w-full py-3 rounded-xl border border-gold-400 bg-gold-500/20 text-gold-300 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                <Smartphone className="w-4 h-4 text-gold-400" />
                <span>Launch Android App Demo</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking(null);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-bronze-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider text-center"
              >
                Book Appointment Today
              </button>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-gold-500/40 text-gold-300 font-medium text-xs tracking-wider text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp Us (+91 9187969614)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
