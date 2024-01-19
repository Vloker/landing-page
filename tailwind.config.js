/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkblue: '#181E4B',
      orange: '#DF6951',
      black: '#212832',
      yellow: '#F1A501',
      gray: '#F5F5F5',
      lightgray: '#84829A',
    },
    fontFamily: {
      Volkhov: ['Volkhov', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      '2xl': '1536px',
    },
    extend: {

    },
  },
  plugins: [],
}

