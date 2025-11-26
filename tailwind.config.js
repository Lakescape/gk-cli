/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Brand (Purple-Blue Gradient)
        primary: {
          DEFAULT: '#667eea',
          dark: '#764ba2',
          50: '#f0f1ff',
          100: '#e0e4ff',
          200: '#c7cdfe',
          300: '#a4abfc',
          400: '#8186f8',
          500: '#667eea',
          600: '#5264df',
          700: '#4451c5',
          800: '#39449f',
          900: '#343d7e',
        },

        // Lakescaping Accents
        lake: {
          water: '#0ea5e9',
          deep: '#0369a1',
          shallow: '#38bdf8',
        },
        dock: {
          wood: '#8b5a2b',
          composite: '#6b7280',
          steel: '#71717a',
        },

        // Dark Theme Backgrounds
        dark: {
          bg: '#1a1a2e',
          card: '#16213e',
          surface: '#0f3460',
          elevated: '#1e3a5f',
        },

        // Status Colors
        status: {
          won: '#10b981',
          lost: '#ef4444',
          pending: '#f59e0b',
          draft: '#3b82f6',
          overdue: '#dc2626',
          paid: '#059669',
          scheduled: '#eab308',
        },
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'mesh-pattern': 'radial-gradient(at 40% 20%, hsla(240, 50%, 30%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(270, 50%, 40%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220, 50%, 35%, 0.2) 0px, transparent 50%)',
      },

      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
        'neon-primary': '0 0 20px rgba(102, 126, 234, 0.5)',
        'neon-success': '0 0 20px rgba(16, 185, 129, 0.5)',
        'neon-warning': '0 0 20px rgba(245, 158, 11, 0.5)',
        'neon-error': '0 0 20px rgba(239, 68, 68, 0.5)',
      },

      backdropBlur: {
        glass: '16px',
        'glass-lg': '24px',
      },

      borderRadius: {
        glass: '16px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        shimmer: 'shimmer 2s infinite linear',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(102, 126, 234, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
