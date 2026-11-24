import React from 'react';

export default function Logo({ size = "md", showText = true, light = false }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className="flex items-center gap-3.5 group select-none">
      {/* 3D Glass / Metallic Emblem Container */}
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center shrink-0`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-md group-hover:bg-gold-500/35 transition-all duration-500" />
        
        {/* Custom SVG Logo matching the flyer */}
        <svg 
          viewBox="0 0 100 120" 
          className="w-full h-full relative z-10 drop-shadow-[0_4px_12px_rgba(212,175,55,0.35)] transition-transform duration-500 group-hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldLuxuryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D4" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#9C6B46" />
              <stop offset="100%" stopColor="#6E3F24" />
            </linearGradient>
            
            <linearGradient id="crestRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E6BE" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8C583A" stopOpacity="0.7" />
            </linearGradient>

            <filter id="goldShine">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#D4AF37" floodOpacity="0.4"/>
            </filter>
          </defs>

          {/* Outer Elegance Oval Ring */}
          <ellipse 
            cx="50" 
            cy="58" 
            rx="42" 
            ry="48" 
            stroke="url(#crestRingGrad)" 
            strokeWidth="1.5" 
            strokeDasharray="1 3"
            opacity="0.6"
          />

          {/* Solid Silhouette Profile matching the flyer */}
          <g filter="url(#goldShine)">
            {/* Woman's Profile Silhouette + Flowing Cascading Hair */}
            <path
              d="M 50 18
                 C 64 18, 76 28, 77 44
                 C 78 58, 69 72, 63 80
                 C 59 86, 54 92, 53 96
                 C 52 97, 50 97, 49 96
                 C 49 91, 54 84, 57 78
                 C 62 70, 68 59, 66 48
                 C 64 36, 54 28, 43 32
                 C 38 34, 34 39, 33 46
                 C 33 47, 34 49, 36 50
                 C 39 50, 42 47, 44 43
                 C 45 40, 47 38, 50 38
                 C 52 38, 53 40, 52 43
                 C 51 46, 49 48, 46 51
                 C 43 54, 41 57, 43 60
                 C 44 61, 46 61, 47 62
                 C 45 64, 43 66, 42 68
                 C 43 71, 46 72, 48 72
                 C 44 75, 41 78, 40 82
                 C 37 77, 36 71, 37 66
                 C 37 60, 39 55, 39 50
                 C 34 52, 30 58, 29 65
                 C 27 75, 32 86, 42 93
                 C 45 95, 49 96, 50 96
                 C 52 96, 55 94, 58 91
                 C 68 83, 79 69, 79 52
                 C 79 32, 66 18, 50 18 Z"
              fill="url(#goldLuxuryGrad)"
            />

            {/* Hair Flow Wave 2 */}
            <path
              d="M 52 23
                 C 62 23, 71 31, 72 43
                 C 73 54, 65 67, 58 75
                 C 56 71, 62 61, 63 52
                 C 64 41, 57 32, 48 30
                 C 50 25, 51 23, 52 23 Z"
              fill="url(#goldLuxuryGrad)"
              opacity="0.9"
            />

            {/* Delicate Face Profile Inset Line */}
            <path
              d="M 45 42
                 Q 47 44, 45 47
                 Q 42 49, 44 51
                 Q 47 52, 43 55
                 Q 46 56, 43 59
                 Q 45 61, 42 64
                 Q 41 68, 47 70
                 Q 44 75, 42 80"
              stroke="#FFF2D4"
              strokeWidth="0.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />

            {/* 4-Point Sparkle Star near bottom curve (exact detail from flyer) */}
            <path
              d="M 51 86 
                 L 52 90 
                 L 56 91 
                 L 52 92 
                 L 51 96 
                 L 50 92 
                 L 46 91 
                 L 50 90 Z"
              fill="#FFF4D9"
            />
            {/* Tiny accent sparkle */}
            <circle cx="58" cy="84" r="0.9" fill="#FFF4D9" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* Typography from Flyer */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif tracking-[0.22em] text-xl md:text-2xl font-bold bg-gradient-to-r from-ivory-100 via-gold-300 to-gold-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-gold-300 transition-all">
              OJASVI
            </span>
          </div>
          <span className="text-[8px] md:text-[9.5px] font-sans font-medium uppercase tracking-[0.28em] text-ivory-300/80 group-hover:text-gold-300/90 transition-colors">
            SKIN • HAIR • LASER • AESTHETICS
          </span>
        </div>
      )}
    </div>
  );
}
