// eslint-disable-next-line import/no-import-module-exports
import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '2200px',
      },
      colors: {
        'unisuam-orange': '#EE7d00',
        'unisuam-blue-dark': '#004070',
        'unisuam-blue-light': '#0f96ae',
        'unisuam-coral': '#f05200',
        'unisuam-yellow': '#f0b40c',
        'unisuam-green': '#07ad6a',
        'unisuam-pink': '#e5457a',
        'unisuam-purple': '#7d378d',

        negative: '#C51B62',
        warning: '#f05200',
        info: '#0f96ae',
        success: '#07ad6a',
        error: '#C51B62',
      },
    },
  },
  darkMode: 'class',
  // eslint-disable-next-line global-require
  plugins: [heroui()],
}
