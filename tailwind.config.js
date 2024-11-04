/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2DAC61',
        secondary: '#00BFFF',
        accent: '#FFD700',
        'light-gray': '#E0E0E0',
        'dark-gray': '#3A3A3A',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(145deg, #2DAC61 0%, #00BFFF 100%)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
} 