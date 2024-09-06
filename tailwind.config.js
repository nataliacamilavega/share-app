/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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
          main: '990000',
          light: '#d1432b',
          dark: '#650000',
        },
        status: {
          error: '#F2788E',
          success: '#6FD979',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Mantenemos Roboto como fuente base
        title5: ['title5', 'sans-serif'],
        title6: ['title6', 'sans-serif'],
        subtitle1: ['Subtitle1', 'sans-serif'],
        subtitle2: ['Subtitle2', 'sans-serif'],
        body1: ['body1', 'sans-serif'],
        body2: ['body2', 'sans-serif'],
      },
      fontSize: {
        title5: '24px',
        title6: '20px',
        subtitle1: '16px',
        subtitle2: '14px',
        body1: '16px',
        body2: '14px',
      },
      fontWeight: {
        title5: 'medium',
        title6: 'medium',
        subtitle1: 'medium',
        subtitle2: 'medium',
        body1: 'regular',
        body2: 'regular',
      },
    },
  },
  plugins: [],
}
