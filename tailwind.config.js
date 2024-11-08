/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#4ade80',
  			secondary: '#60a5fa',
  			'dark-gray': '#1f2937',
  			'light-gray': '#d1d5db'
  		},
  		fontFamily: {
  			fredoka: ['Fredoka One', 'cursive'],
  			quicksand: ['Quicksand', 'sans-serif']
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'marquee-reverse': {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			},
  			'marquee-vertical': {
  				'0%': {
  					transform: 'translateY(0%)'
  				},
  				'100%': {
  					transform: 'translateY(-100%)'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) linear infinite',
  			'marquee-reverse': 'marquee-reverse var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		}
  	}
  },
  plugins: [],
} 