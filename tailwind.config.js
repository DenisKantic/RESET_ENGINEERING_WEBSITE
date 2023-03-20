/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xss': '270px',
        'xs': '430px',
        'sm': '430px',
        'md': '600px'
      }
    },
  },
  plugins: [],
}