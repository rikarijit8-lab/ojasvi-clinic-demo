export const TREATMENTS = [
  {
    id: "chemical-peels",
    name: "Chemical Peels",
    subtitle: "Advanced Clinical Resurfacing",
    tagline: "Exfoliates & renews your skin for a brighter, smoother complexion",
    category: "Skin",
    image: "./treatments/chemical-peels.jpg",
    badge: "Inaugural 40% Off",
    eligibleForInaugural: true,
    originalPrice: 3500,
    offerPrice: 2100, // 40% off
    duration: "45 Mins",
    downtime: "Mild peeling (2-3 days)",
    painLevel: "Mild tingling (1/5)",
    recommendedSessions: "3 - 5 Sessions",
    description: "Our dermatologically formulated medical-grade chemical peels gently dissolve dull epidermal cellular layers, targeting stubborn pigmentation, melasma, active acne, and uneven skin texture. Customized with glycolic, salicylic, lactic, or TCA complexes suited for Indian skin types.",
    benefits: [
      "Accelerated cellular turnover & collagen activation",
      "Visibly fades post-inflammatory hyperpigmentation (PIH)",
      "Regulates sebum production & decongests congested pores",
      "Smooths skin roughness and softens fine lines",
      "Instant luminous glow with zero downtime for superficial peels"
    ],
    procedureSteps: [
      "Comprehensive Dermatological Skin Analysis & pH Prep",
      "Medical Double-Cleanse & Degreasing Solution",
      "Layer-by-Layer Application of Target Acid Complex",
      "Neutralization & Soothing Cryo Ice-Globe Massage",
      "Barrier Repair Ceramides & Broad-Spectrum SPF 50+"
    ],
    idealFor: [
      "Acne Marks & Pigmentation",
      "Sun Damage & Tanning",
      "Uneven Skin Tone",
      "Dull, Fatigued Complexion"
    ]
  },
  {
    id: "hydrafacial",
    name: "Hydrafacial MD",
    subtitle: "Patented 4-in-1 Vortex Rejuvenation",
    tagline: "Deep cleanses, hydrates & rejuvenates for instantly glowing skin",
    category: "Skin & Glow",
    image: "./treatments/hydrafacial.jpg",
    badge: "Inaugural 40% Off",
    eligibleForInaugural: true,
    originalPrice: 5000,
    offerPrice: 3000, // 40% off
    duration: "60 Mins",
    downtime: "Zero Downtime (Red Carpet Ready)",
    painLevel: "Zero Pain / Relaxing (0/5)",
    recommendedSessions: "Monthly Maintenance",
    description: "The gold standard in clinical facial rejuvenation. Utilizing patented Vortex-Fusion technology to simultaneously dislodge sebum and comedones while saturating the dermis with hyaluronic acid, peptides, and antioxidant cocktails. The ultimate instant radiance booster.",
    benefits: [
      "Unclogs pores, removing blackheads and deep impurities painlessly",
      "Deep molecular hydration with low-molecular hyaluronic acid",
      "Diminishes fine dryness lines and plumps facial contours",
      "Lymphatic drainage reduces facial puffiness and toxins",
      "Instant dewy glass-skin finish with zero peeling"
    ],
    procedureSteps: [
      "Lymphatic Drainage Detoxification",
      "Vortex Exfoliation with Lactic Acid & Glucosamine",
      "Painless Vortex Extraction using Honey & Salicylic Complex",
      "Vortex-Infusion of Peptides, Antioxidants & Hyaluronic Acid",
      "Red & Blue LED Phototherapy for collagen stimulation"
    ],
    idealFor: [
      "Dehydrated, Stressed Skin",
      "Enlarged Pores & Blackheads",
      "Pre-Event / Bridal Radiance",
      "Pollution & Urban Skin Stress"
    ]
  },
  {
    id: "gfc-hair",
    name: "GFC (Growth Factor Concentrate)",
    subtitle: "Next-Gen Autologous Hair Regeneration",
    tagline: "Stimulates natural hair growth & improves hair density",
    category: "Hair Restoration",
    image: "./treatments/gfc-hair.jpg",
    badge: "Inaugural 40% Off",
    eligibleForInaugural: true,
    originalPrice: 8000,
    offerPrice: 4800, // 40% off
    duration: "45 Mins",
    downtime: "None (Return to daily tasks immediately)",
    painLevel: "Minimal (Topical anesthesia applied, 2/5)",
    recommendedSessions: "3 - 4 Sessions spaced 4 weeks apart",
    description: "A revolutionary advancement over conventional PRP. GFC extracts pure, highly concentrated natural growth factors (PDGF, VEGF, EGF, IGF-1) from your own blood in an acellular, sterile system. Zero RBCs or WBCs means virtually no pain, zero swelling, and up to 3x higher hair density results.",
    benefits: [
      "Arrests progressive hair fall and thinning within 2-3 sessions",
      "Miniaturized hair follicles restored to active anagen growth phase",
      "Significantly increases hair shaft thickness and scalp coverage",
      "100% biocompatible, non-immunogenic & acellular purity",
      "Superior bioavailability compared to traditional PRP"
    ],
    procedureSteps: [
      "Scalp Trichoscopy Evaluation & Hair Density Mapping",
      "Sterile Venous Sample Collection in Specialized GFC Tube",
      "Centrifugation & Growth Factor Activation in Temperature Chamber",
      "Precise Scalp Micro-Injections into Hair Follicular Units",
      "Post-Treatment Scalp Soothing & Low-Level Laser Phototherapy"
    ],
    idealFor: [
      "Androgenetic Alopecia (Male/Female Pattern Thinning)",
      "Post-COVID / Telogen Effluvium Hair Shedding",
      "Receding Hairlines & Crown Widening",
      "Weak, Thin & Brittle Hair Strands"
    ]
  },
  {
    id: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    subtitle: "Triple-Wavelength Pain-Free Diode Technology",
    tagline: "Long-lasting hair reduction for smooth, hair-free skin",
    category: "Laser",
    image: "./treatments/laser-hair-reduction.jpg",
    badge: "Inaugural 40% Off",
    eligibleForInaugural: true,
    originalPrice: 6000,
    offerPrice: 3600, // 40% off (e.g. Underarms/Full Face/Packages)
    duration: "20 - 60 Mins",
    downtime: "Zero Downtime",
    painLevel: "Virtually Painless (ICE-Chill Cooling Tip, 1/5)",
    recommendedSessions: "6 - 8 Sessions for permanent reduction",
    description: "Experience effortless, silky smooth skin with our state-of-the-art US-FDA approved diode laser. Featuring triple-wavelength absorption (755nm, 808nm, 1064nm) specifically calibrated for diverse Indian skin tones and hair textures, with a sub-zero contact cooling sapphire crystal for complete comfort.",
    benefits: [
      "Permanent reduction of up to 90%+ coarse and fine body hair",
      "Eliminates painful ingrown hairs, razor bumps & strawberry legs",
      "Sub-zero sapphire contact cooling for ultra-comfortable sessions",
      "Safe and highly effective across Indian skin tones (Fitzpatrick III-V)",
      "Saves hours spent on waxing, shaving, and salon threading"
    ],
    procedureSteps: [
      "Skin & Hair Density Assessment + Patch Test Verification",
      "Precision Medical Shaving & Target Area Sectioning",
      "Hypoallergenic Cooling Gel Application",
      "In-Motion High-Speed Diode Laser Pulse Delivery",
      "Post-Laser Soothing Aloe-Vera Hydration & Zinc Barrier"
    ],
    idealFor: [
      "Unwanted Facial Hair & Upper Lip / Chin",
      "Underarms, Bikini & Full Body Grooming",
      "Folliculitis & Ingrown Hair Prevention",
      "Men's Beard Line & Chest Sculpting"
    ]
  }
];

export const TRUST_PILLARS = [
  {
    title: "Safe",
    subtitle: "US-FDA Approved",
    desc: "100% sterile protocols, medical-grade disposables, and clinically validated dermatological treatments.",
    icon: "ShieldCheck"
  },
  {
    title: "Effective",
    subtitle: "Evidence-Based",
    desc: "Scientifically proven aesthetic technologies delivering measurable, visible improvements.",
    icon: "Sparkles"
  },
  {
    title: "Advanced Technology",
    subtitle: "Next-Gen Devices",
    desc: "Triple-wavelength lasers, patented vortex-fusion hydrafacial wands, and acellular GFC systems.",
    icon: "Atom"
  },
  {
    title: "Expert Care",
    subtitle: "Board-Certified",
    desc: "Tailored treatment regimens designed and administered by experienced clinical aesthetic doctors.",
    icon: "HeartPulse"
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: 1,
    title: "GFC Hair Density Restoration",
    category: "Hair Restoration",
    timeline: "After 3 Sessions (12 Weeks)",
    beforeImage: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    summary: "Significant follicular reactivation in vertex thinning; notice dense strand thickening and reduced scalp visibility."
  },
  {
    id: 2,
    title: "Clinical Peel: Melasma & Acne Scarring",
    category: "Skin Resurfacing",
    timeline: "After 4 Sessions (8 Weeks)",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    summary: "Evened skin pigmentation, faded stubborn acne blemishes, and restored healthy luminosity without rebound darkening."
  },
  {
    id: 3,
    title: "Hydrafacial MD Radiance & Pore Refining",
    category: "Instant Glow",
    timeline: "Immediate Post-1st Session",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    summary: "Pores cleared of sebaceous congestion, deep hyaluronic infusion created glass-like hydration and dewy radiance."
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    title: "Inaugural Celebration: 40% OFF Special",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    likes: "428",
    comments: "32",
    tag: "Clinic Update"
  },
  {
    id: 2,
    title: "The Science of Acellular GFC for Hair",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    likes: "612",
    comments: "47",
    tag: "Doctor Talk"
  },
  {
    id: 3,
    title: "Behind the Scenes: Hydrafacial Glow Bar",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    likes: "519",
    comments: "28",
    tag: "Glow Routine"
  },
  {
    id: 4,
    title: "Painless Diode Laser: What to Expect",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
    likes: "384",
    comments: "19",
    tag: "Laser Tech"
  }
];

export const CLINIC_INFO = {
  name: "OJASVI",
  subtitle: "SKIN • HAIR • LASER • AESTHETICS",
  tagline: "Where healthy skin meets confidence",
  phone: "+91 9187969614",
  phoneDisplay: "+91 9187969614",
  whatsappUrl: "https://wa.me/919187969614?text=Hello%20OJASVI%20Derma%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment%20and%20claim%20the%20Inaugural%20Offer.",
  instagram: "@ojasvidermaclinic",
  instagramUrl: "https://instagram.com/ojasvidermaclinic",
  inauguralOffer: "UPTO 40% OFF* ON SELECT ADVANCED TREATMENTS",
  consultationOffer: "FLAT ₹100 OFF ON CONSULTATION FEE",
  hours: "Monday - Sunday: 10:00 AM - 8:00 PM",
  doctorFee: 500, // Standard consultation
  doctorFeeOffer: 400 // Flat 100 off
};
