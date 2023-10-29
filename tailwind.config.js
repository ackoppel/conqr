/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.tsx'],
  theme: {
    extend: {
      width: {
        content: '900px',
      },
      fontSize: {
        title: '27px',
        text: '15px',
      },
    },
  },
  plugins: [],
};
