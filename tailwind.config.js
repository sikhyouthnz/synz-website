/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#171310',
          soft: '#544B44',
          mute: '#8A8077',
        },
        paper: '#FBF8F3',
        sand: '#F3ECE2',
        line: '#E7DFD3',
        saffron: {
          50: '#FFF6EC',
          100: '#FFE9D2',
          200: '#FFD0A3',
          300: '#FBB06B',
          400: '#F4913C',
          500: '#EA7317',
          600: '#CE5A0C',
          700: '#A5440F',
        },
        azure: {
          50: '#EFF6FD',
          100: '#DBEBFA',
          300: '#7FB8E9',
          500: '#2F82CE',
          600: '#2166AB',
          700: '#1B4F86',
        },
      },
      letterSpacing: {
        tighter: '-0.035em',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,19,16,0.04), 0 12px 32px -12px rgba(23,19,16,0.14)',
        lift: '0 2px 4px rgba(23,19,16,0.05), 0 24px 48px -20px rgba(23,19,16,0.25)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-down': 'slide-down 0.25s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
