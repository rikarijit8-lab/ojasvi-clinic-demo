/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E6',
          200: '#F4E5BF',
          300: '#EBD194',
          400: '#E2BD68',
          500: '#D4AF37', // Luxury Champagne Gold
          600: '#B89225',
          700: '#947218',
          800: '#755714',
          900: '#5A4211',
          light: '#F5E6BE',
          rich: '#D4AF37',
          deep: '#9B7829'
        },
        bronze: {
          50: '#FDF8F5',
          100: '#F8ECE6',
          200: '#EED3C5',
          300: '#DFB49E',
          400: '#CA8E70',
          500: '#8C583A', // Rose Bronze
          600: '#75472E',
          700: '#5E3824',
          800: '#482B1C',
          900: '#341F14',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAF7F2', // Pearl Ivory
          200: '#F4EFE6',
          300: '#E8DFD0',
          400: '#D8CBB6',
          500: '#C4B299',
        },
        obsidian: {
          DEFAULT: '#1A1614',
          950: '#0E0C0B',
          900: '#151210',
          800: '#1A1614',
          700: '#2A2421',
          600: '#3D3531',
          500: '#5A4F49',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.15)',
        'luxury-glow': '0 0 35px rgba(212, 175, 55, 0.35)',
        'luxury-card': '0 10px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(212, 175, 55, 0.05)',
        'gold-inner': 'inset 0 0 15px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5E6BE 0%, #D4AF37 50%, #8C583A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF3D6 50%, #D4AF37 100%)',
        'dark-luxury': 'radial-gradient(circle at 50% 0%, #2A2421 0%, #151210 50%, #0E0C0B 100%)',
        'glass-luxury': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(212, 175, 55, 0.03) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% 0' },
          '50%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
