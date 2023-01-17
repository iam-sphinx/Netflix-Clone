/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'signature' : ['nunito','sans-serif']
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}