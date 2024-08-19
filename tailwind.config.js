/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{ 
      '3xl':'1560px',
      '2xl': '1440px',
      'xl': '1280px',
      'xn': '1081px',
      'lg':'1024px',
      'md':'940px',
      'mb':'790px',
      'sm':'600px',
      'sn':'475px',
      'sl':'450px',
      'xs':'300px'
    },
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
        'detail':'66% 29.5%',
      },
  },
  plugins: [],
}
}
