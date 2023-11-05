/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.tsx'],
  theme: {
    extend: {
      width: {
        content: '900px',
        modal: '600px',
      },
      fontSize: {
        logo: '29px',
        title: '19px',
        text: '15px',
      },
    },
  },
  plugins: [],
};
