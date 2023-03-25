/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Neutral500: '#ABABAB',
        Neutral400: '#BFBFBF',
        Neutral300: '#E9E9E9',
        Neutral200: '#F5F5F5',
        Neutral100: '#F5FAF9',
        Neutral000: '#FFFFFF',
        Green100: '#36998E',
        Green400: '#8ED7CF',
        Green500: '#e9fdfb',
        Black100: '#484848',
        Black400: '#707070',
        Red600: '#BF4059',
        Blue100: '#0091FF',
      },
    },
  },
  plugins: [],
};
