import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Sparkles, Tag, ArrowRight, Share2, Download, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TREATMENTS, CLINIC_INFO } from '../data/treatments';
import Logo from './Logo';

export default function AppointmentModal({ isOpen, onClose, initialTreatment = null }) {
  const [selectedType, setSelectedType] = useState(
    initialTreatment ? initialTreatment.id : "consultation"
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "11:00 AM",
    notes: ""
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [passData, setPassData] = useState(null);

  if (!isOpen) return null;

  // Pricing calculations
  const isConsultation = selectedType === "consultation";
  const selectedTreatmentObj = TREATMENTS.find(t => t.id === selectedType);

  let originalPrice = 500;
  let discountAmount = 100;
  let finalPrice = 400;
  let promoTitle = "Inaugural Flat ₹100 OFF Consultation";

  if (!isConsultation && selectedTreatmentObj) {
    originalPrice = selectedTreatmentObj.originalPrice;
    discountAmount = selectedTreatmentObj.originalPrice - selectedTreatmentObj.offerPrice;
    finalPrice = selectedTreatmentObj.offerPrice;
    promoTitle = "Inaugural 40% OFF Special";
  }

  const timeSlots = [
    "10:30 AM", "11:30 AM", "12:30 PM", "02:30 PM", 
    "04:00 PM", "05:30 PM", "06:30 PM", "07:15 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    // Confetti celebration
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FAF7F2', '#8C583A', '#FFF']
    });

    const bookingId = `OJS-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassData({
      bookingId,
      treatmentName: isConsultation ? "Complete Dermatological Consultation" : selectedTreatmentObj.name,
      ...formData,
      originalPrice,
      discountAmount,
      finalPrice,
      promoTitle,
      timestamp: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    });
    setBookingConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const sendWhatsAppConfirmation = () => {
    if (!passData) return;
    const msg = `*OJASVI DERMA CLINIC - APPOINTMENT PASS*%0A%0A` +
      `*Pass ID:* ${passData.bookingId}%0A` +
      `*Patient Name:* ${passData.name}%0A` +
      `*Treatment:* ${passData.treatmentName}%0A` +
      `*Date & Time:* ${passData.date || 'Earliest Slot'} at ${passData.time}%0A` +
      `*Inaugural Promo Applied:* ${passData.promoTitle}%0A` +
      `*Total Savings:* ₹${passData.discountAmount}%0A` +
      `*Payable at Clinic:* ₹${passData.finalPrice}%0A%0A` +
      `Please confirm my slot. Thank you!`;
    window.open(`https://wa.me/919187969614?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-obsidian-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.25)] z-10 max-h-[95vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-gold-500/20 bg-obsidian-950/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={false} />
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {bookingConfirmed ? "VIP Digital Appointment Pass" : "Reserve Your Appointment & Claim Offer"}
                </h3>
                <p className="text-[11px] text-gold-400 uppercase tracking-widest font-semibold">
                  {CLINIC_INFO.tagline}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-obsidian-900 border border-gold-500/20 text-ivory-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-7 overflow-y-auto">
            {!bookingConfirmed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Treatment / Service Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                    Select Consultation or Treatment
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Flat 100 off consultation option */}
                    <div
                      onClick={() => setSelectedType("consultation")}
                      className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
                        selectedType === "consultation"
                          ? "bg-gold-500/15 border-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "bg-obsidian-950/50 border-gold-500/15 hover:border-gold-500/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-white">Doctor Consultation</span>
                        <span className="text-[10px] font-bold bg-gold-500 text-obsidian-950 px-2 py-0.5 rounded">
                          FLAT ₹100 OFF
                        </span>
                      </div>
                      <p className="text-[11px] text-ivory-300/80 mt-1">
                        In-depth skin & hair analysis, digital mapping & prescription
                      </p>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-bold text-gold-300 text-sm">₹400</span>
                        <span className="text-xs line-through text-ivory-400">₹500</span>
                      </div>
                    </div>

                    {/* Treatments with 40% off */}
                    {TREATMENTS.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => setSelectedType(t.id)}
                        className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
                          selectedType === t.id
                            ? "bg-gold-500/15 border-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                            : "bg-obsidian-950/50 border-gold-500/15 hover:border-gold-500/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif font-bold text-sm text-white">{t.name}</span>
                          <span className="text-[10px] font-bold bg-gold-500 text-obsidian-950 px-2 py-0.5 rounded">
                            40% OFF
                          </span>
                        </div>
                        <p className="text-[11px] text-ivory-300/80 mt-1 line-clamp-1">
                          {t.tagline}
                        </p>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="font-bold text-gold-300 text-sm">₹{t.offerPrice}</span>
                          <span className="text-xs line-through text-ivory-400">₹{t.originalPrice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patient Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-obsidian-950 border border-gold-500/25 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-ivory-400/50 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-obsidian-950 border border-gold-500/25 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-ivory-400/50 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-obsidian-950 border border-gold-500/25 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ivory-300 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-obsidian-950 border border-gold-500/25 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-gold-400"
                    >
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot} className="bg-obsidian-900 text-white">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Live Bill Breakdown with Offer Applied */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-500/10 via-bronze-500/10 to-obsidian-950 border border-gold-500/30">
                  <div className="flex items-center justify-between text-xs text-ivory-300 pb-2 border-b border-gold-500/15">
                    <span>Standard Price</span>
                    <span className="line-through">₹{originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-emerald-400 py-2 border-b border-gold-500/15 font-medium">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      {promoTitle}
                    </span>
                    <span>- ₹{discountAmount}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-serif font-bold text-white text-sm">
                      Total Payable at Clinic
                    </span>
                    <span className="font-serif text-2xl font-bold text-gold-300">
                      ₹{finalPrice}
                    </span>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-bronze-500 text-obsidian-950 font-bold text-sm uppercase tracking-[0.18em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-obsidian-950" />
                  <span>Generate VIP Appointment Pass</span>
                </button>

              </form>
            ) : (
              /* Generated Luxury VIP Pass */
              <div className="space-y-6">
                <div className="p-1 rounded-3xl bg-gradient-to-r from-gold-400 via-white to-bronze-500 shadow-2xl">
                  <div className="bg-gradient-to-b from-obsidian-900 to-obsidian-950 p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-gold-400/40">
                    
                    {/* Watermark Logo */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                      <Logo size="xl" showText={false} />
                    </div>

                    <div className="flex items-start justify-between border-b border-gold-500/25 pb-4">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-gold-400 block">
                          CONFIRMED VIP CLINICAL PASS
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                          OJASVI AESTHETICS
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-ivory-400 block">Pass ID</span>
                        <span className="font-mono text-sm font-bold text-gold-300">
                          {passData.bookingId}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-5 text-xs">
                      <div>
                        <span className="text-ivory-400 block uppercase tracking-wider text-[10px]">Patient</span>
                        <span className="font-semibold text-white text-sm">{passData.name}</span>
                      </div>
                      <div>
                        <span className="text-ivory-400 block uppercase tracking-wider text-[10px]">Contact</span>
                        <span className="font-medium text-gold-200">{passData.phone}</span>
                      </div>
                      <div>
                        <span className="text-ivory-400 block uppercase tracking-wider text-[10px]">Slot Time</span>
                        <span className="font-medium text-gold-200">{passData.date || "Today"} @ {passData.time}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-ivory-400 block uppercase tracking-wider text-[10px]">Procedure</span>
                        <span className="font-semibold text-white text-sm">{passData.treatmentName}</span>
                      </div>
                      <div>
                        <span className="text-ivory-400 block uppercase tracking-wider text-[10px]">Savings Claimed</span>
                        <span className="font-bold text-emerald-400 text-sm">₹{passData.discountAmount} OFF</span>
                      </div>
                    </div>

                    <div className="border-t border-dashed border-gold-500/30 pt-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-gold-300 block">
                          Offer Applied
                        </span>
                        <span className="text-xs font-semibold text-white">{passData.promoTitle}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-ivory-400 block">
                          Payable at Clinic
                        </span>
                        <span className="font-serif text-2xl font-bold text-gold-300">
                          ₹{passData.finalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Barcode & Security stamp */}
                    <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between text-[10px] text-ivory-400">
                      <span>✓ US-FDA Certified Protocol</span>
                      <span>Clinic Helpline: +91 9187969614</span>
                    </div>

                  </div>
                </div>

                {/* Actions on Generated Pass */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={sendWhatsAppConfirmation}
                    className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Send to Clinic WhatsApp</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="py-3.5 px-4 rounded-xl border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print / Save PDF Pass</span>
                  </button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      onClose();
                    }}
                    className="text-xs text-ivory-400 hover:text-gold-300 underline underline-offset-4"
                  >
                    Close & Return to Website
                  </button>
                </div>

              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
