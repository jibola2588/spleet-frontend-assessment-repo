/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroyBold: ['gilroy-bold', 'sans-serif'],
      },
      colors: {
        bgPrimary: '#783EAD', 
        textPrimary: '#432361', 
        textSec: '#9B51E0', 
    },
  },
  plugins: [],
}
}
