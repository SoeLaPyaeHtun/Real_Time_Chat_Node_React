/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'g1': ['Orbitron', 'sans-serif'],
        'g2': ['Rajdhani', 'sans-serif']
      }
    },
  },
  plugins: [],
}