/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1.25rem', // 20px
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1197px',
      },
    },
    colors: {
      black: '#000',
      white: '#FFF',
      'opacity-black': '#00000066',
      'light-black': '#2E2E2E',
      'almost-black': '#18191F',
      'light-gray': '#808080',
      'orange': '#F84646'
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Arial', 'sans-serif'],
      },
    },
  },
};