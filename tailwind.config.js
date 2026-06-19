/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A0F1C',
        secondary: '#111827',
        accent: '#6C63FF',
        'accent-2': '#00D9FF',
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
        border: 'rgba(108,99,255,0.2)',
        'light-bg': '#F8FAFC',
        'light-card': '#FFFFFF',
        'light-text': '#1E293B',
        'light-text-secondary': '#64748B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'particle-drift': 'particleDrift 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(108,99,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(108,99,255,0.6)' },
        },
        particleDrift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-10px)' },
          '50%': { transform: 'translateX(-5px) translateY(-20px)' },
          '75%': { transform: 'translateX(-10px) translateY(-5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
      backgroundSize: {
        '400%': '400% 100%',
      },
    },
  },
  plugins: [],
};
