/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pattaya: ['Pattaya', 'sans-serif'], 
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

