/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sandals-blue': '#0057ff',
        'sandals-bg': '#f8f0db',
        'sandals-text': '#171724',
      },
      fontFamily: {
        'sandals-sans': ['SandalsSans', 'sans-serif'],
        'sandals-slab': ['SandalsSlab', 'sans-serif'],
      },
    },
  },
  plugins: [],
}