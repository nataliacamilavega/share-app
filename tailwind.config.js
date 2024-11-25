/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#121212',
          light: '#383838',
          dark: '#000000',
        },
        secondary: {
          main: '#990000',
          light: '#d1432b',
          dark: '#650000',
        },
        additional: {
          error: '#F2788E',
          correct: '#6FD979',
        },
      },
      buttons: {
        filled: {
          backgroundColor: '#990000',
          textColor: '#FFFFFF',
        },
        outlined: {
          backgroundColor: '#990000',
          textColor: '#FFFFFF',
        },
        text: {
          backgroundColor: '#990000',
          textColor: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
