const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ['Montserrat'],
      botton: ['Roboto'],
      Poppins: ['Poppins'],
    },
    colors: {
      ...defaultTheme.colors,
      primary: "#0CAA41",
      secondary: "#DEEFE4",
      footer: "#404040",
      masajed: "#F9F9F9",
    },
    fontSize: {
      ...defaultTheme.fontSize,
      'xxs': '0.6rem',

     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
