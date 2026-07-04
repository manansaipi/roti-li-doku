/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F0',
        beige: '#F1E9DA',
        wheat: '#D4AF37',
        brown: '#8B5A2B',
        ivory: '#FFFFF0',
        kraft: '#D2B48C',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

