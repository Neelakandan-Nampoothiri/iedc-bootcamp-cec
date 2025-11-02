/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#ffffff',
        'theme-accent': '#38bdf8',
        'text-primary': '#1f2937',
        'text-secondary': '#4b5563',
        'dark-overlay': '#0f172a',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
      }
    },
  },
  plugins: [],
}