/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        iconColor: '#9FA5BF',
        themeColor: '#253272',
        btnhvr: '#19E0DA'
      }
    }
  },
  plugins: []
}
