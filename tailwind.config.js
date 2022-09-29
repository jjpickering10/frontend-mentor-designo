/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      peach: '#E7816B',
      lightPeach: '#FFAD9B',
      black: '#1D1C1E',
      darkGrey: '#333136',
      white: '#FFFFFF',
      lightGrey: '#F1F3F5',
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
