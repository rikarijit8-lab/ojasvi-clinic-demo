import React, { useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicesShowcase from './components/ServicesShowcase';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import DoctorCredentials from './components/DoctorCredentials';
import InstagramFeed from './components/InstagramFeed';
import FAQSection from './components/FAQSection';
import AppShowcase from './components/AppShowcase';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import FlyerModal from './components/FlyerModal';
import WhatsAppConcierge from './components/WhatsAppConcierge';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingTreatment, setSelectedBookingTreatment] = useState(null);
  
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [activeDetailTreatment, setActiveDetailTreatment] = useState(null);

  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  const handleOpenBooking = (treatment = null) => {
    setSelectedBookingTreatment(treatment);
    setIsBookingOpen(true);
  };

  const handleOpenDetailModal = (treatment) => {
    setActiveDetailTreatment(treatment);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-ivory-100 font-sans overflow-x-hidden selection:bg-gold-500 selection:text-obsidian-950">
      {/* 3D Three.js Ambient Golden Shimmer Background Canvas */}
      <ThreeBackground />

      {/* Main Luxury Noise Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-40" />

      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking}
          onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
        />

        {/* 4 Pillars Trust Strip from Flyer */}
        <TrustStrip />

        {/* The 4 Core Treatment Showcase Cards */}
        <ServicesShowcase 
          onSelectTreatment={handleOpenDetailModal}
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Before & After Outcomes Slider */}
        <BeforeAfterSlider 
          onOpenBooking={handleOpenBooking}
        />

        {/* Doctor Clinical Standards & Technology */}
        <DoctorCredentials 
          onOpenBooking={handleOpenBooking}
        />

        {/* Instagram Hub & Flyer QR Connect */}
        <InstagramFeed />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Dedicated Android Mobile App Showcase Section */}
        <AppShowcase />
      </main>

      {/* Luxury Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Appointment & Offer Claim Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatment={selectedBookingTreatment}
      />

      {/* Treatment In-Depth Details Drawer */}
      <ServiceDetailModal
        treatment={activeDetailTreatment}
        onClose={() => setIsDetailModalOpen(false)}
        onBook={(treatment) => {
          setIsDetailModalOpen(false);
          handleOpenBooking(treatment);
        }}
      />

      {/* Authentic Physical Flyer Lightbox Modal */}
      <FlyerModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating WhatsApp Concierge */}
      <WhatsAppConcierge />
    </div>
  );
}
