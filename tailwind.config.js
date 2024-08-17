/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroyBold: ['Gilroy bold', 'sans-serif'],
        gilroyMedium: ['Gilroy medium', 'sans-serif'],
        gilroySemiBold: ['Gilroy semiBold', 'sans-serif'],
        gilroyRegular: ['Gilroy reqular', 'sans-serif'],
        gilroyLight: ['Gilroy light', 'sans-serif'],
      },
      colors: {
        primaryBg: '#783EAD', 
        primaryText: '#432361', 
        secondaryText: '#9B51E0', 
    },
    gridTemplateColumns: {
        'custom': '34% 66%',
      }
  },
  plugins: [],
}
}
