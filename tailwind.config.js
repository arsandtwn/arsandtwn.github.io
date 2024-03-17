/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      boxShadow: {
        lg: '0px 0px 20px 10px rgba(0,0,0,0.5)',
        xl: '0px 0px 20px 3px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        cinzel: 'Cinzel Decorative',
      },
    },
  },
  plugins: [],
};
