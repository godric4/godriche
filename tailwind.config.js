/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Upright', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#0c0c0c',
        secondary: '#dcca87',
        grey: '#B9B6B6',
        accent: '#c39901',
      },
      // boxShadow: {
      //   '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      // },
    },
  },
  plugins: [],
};
