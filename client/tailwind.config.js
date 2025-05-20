/** @type {import('tailwindcss').Config} */
const nativewind = require('nativewind/preset');

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [nativewind],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: '#E5E7EB',
        input: '#F9FAFB',
        ring: '#E0E7FF',
        background: '#FFFFFF',
        foreground: '#111827',
        primary: {
          DEFAULT: '#0057B7',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F7941D',
          foreground: '#111827',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#6B7280',
        },
        accent: {
          DEFAULT: '#D1D700',
          foreground: '#111827',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        university: {
          blue: '#0057B7',
          orange: '#F7941D',
          green: '#D1D700',
          navy: '#002060',
          gray: '#4D4D4D',
          primary: '#0057B7',
          accent: '#F7941D',
          secondary: '#D1D700',
          neutralDark: '#002060',
          neutralBase: '#4D4D4D',
        },
        permit: {
          valid: '#10B981',
          pending: '#F59E0B',
          expired: '#EF4444',
        },
      },
      borderRadius: {
        lg: '12px',
        md: '10px',
        sm: '8px',
      },
      boxShadow: {
        neuro: '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
        'neuro-inset': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'neuro-all': '-6px -6px 16px rgba(255,255,255,0.6), 6px 6px 16px rgba(0,0,0,0.15)',
        'neuro-all-inset': 'inset -4px -4px 12px rgba(255,255,255,0.6), inset 4px 4px 12px rgba(0,0,0,0.15)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animate'),
  ],
};
