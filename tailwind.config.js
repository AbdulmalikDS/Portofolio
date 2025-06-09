/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pure monochrome base
        black: '#000000',
        white: '#ffffff',
        
        // Comprehensive grayscale system
        gray: {
          50: '#fafafa',   // Ultra light gray
          100: '#f5f5f5',  // Very light gray
          200: '#e5e5e5',  // Light gray
          300: '#d4d4d4',  // Soft gray
          400: '#a3a3a3',  // Medium light gray
          500: '#737373',  // Medium gray
          600: '#525252',  // Medium dark gray
          700: '#404040',  // Dark gray
          800: '#262626',  // Very dark gray
          900: '#171717',  // Ultra dark gray
          950: '#0a0a0a'   // Almost black gray
        },

        // Single electric blue accent
        accent: {
          50: '#eff6ff',   // Ultra light blue
          100: '#dbeafe',  // Very light blue
          200: '#bfdbfe',  // Light blue
          300: '#93c5fd',  // Soft blue
          400: '#60a5fa',  // Medium light blue
          500: '#0080ff',  // Electric blue (main accent)
          600: '#0066cc',  // Rich blue
          700: '#004d99',  // Deep blue
          800: '#003366',  // Very deep blue
          900: '#001a33',  // Ultra deep blue
          950: '#000d1a'   // Almost black blue
        }
      },
      
      // Monochrome gradient backgrounds
      backgroundImage: {
        'gradient-mono': 'linear-gradient(135deg, #000000, #404040, #737373)',
        'gradient-mono-light': 'linear-gradient(135deg, #ffffff, #f5f5f5, #e5e5e5)',
        'gradient-accent': 'linear-gradient(135deg, #0080ff, #0066cc, #004d99)',
        'gradient-mono-accent': 'linear-gradient(135deg, #000000, #0080ff, #000000)',
        'gradient-radial-accent': 'radial-gradient(circle, #0080ff, #000000)'
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'purple-pulse': 'purplePulse 2s ease-in-out infinite',
        'accent-pulse': 'accentPulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        gradient: "gradient 8s linear infinite",
        rainbow: "rainbow 8s ease-in-out infinite",
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        purplePulse: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.7)' 
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(168, 85, 247, 0)' 
          },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        rainbow: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      }
    },
  },
  plugins: [],
} 