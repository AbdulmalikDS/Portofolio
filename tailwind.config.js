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
        // Claude-inspired soft neutrals with ivory whites and muted grays
        neutral: {
          50: '#fefcf8',  // Warm ivory white
          100: '#faf8f3', // Soft ivory
          150: '#f6f4f0', // Light warm gray
          200: '#f0eeea', // Gentle warm gray
          300: '#e6e3df', // Muted gray
          400: '#d0ccc6', // Soft gray
          500: '#a8a49e', // Balanced gray
          600: '#7c7872', // Medium gray
          700: '#4a4641', // Dark warm gray
          800: '#2d2b28', // Rich dark gray
          900: '#1a1917', // Deep charcoal
        },
        // Muted accent colors for subtle highlights
        accent: {
          50: '#f8f7f6',
          100: '#f0efed',
          200: '#e3e1dd',
          300: '#d1cdc6',
          400: '#b8b2a8',
          500: '#9d9488',
          600: '#7c756a', 
          700: '#5c564d',
          800: '#3d3831',
          900: '#201e1b',
        },
        // Soft primary colors for links and interactive elements  
        primary: {
          50: '#f7f8f9',
          100: '#eef0f3',
          200: '#d9dde3',
          300: '#bbc3cd',
          400: '#95a2b1',
          500: '#6b7884',
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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