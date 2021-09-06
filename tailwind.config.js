const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#77C040',
        gray: colors.blueGray,
        green: colors.green,
        orange: colors.orange,
        teal: colors.teal,
        sky: colors.sky,
        'litepie-primary': colors.emerald, 
        'litepie-secondary': colors.coolGray 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
