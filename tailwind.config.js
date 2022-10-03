/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'primary': '#5041BC',
        'primary-50': '#1F192F',
        'primary-100': '#797D8C',
        'secondary': '#FFFFFF',
        'secondary-50': '#F5F3FF',
        'green-50': '#6AD2A0',
        'red-50': '#EA8F95',
        'icon': '#04103B',
        'purple-50': '#D3CBFB',
        'search': '#5041BC',
      },
      fontFamily: {
        nunito: 'Nunito',
      },
      fontSize: {
        'sm1': ['12px', '16px'],
        'sm2': ['14px', '20px'],
        'base2': ['16px', '24px'],
        'lg2': ['20px', '28px'],
        'xl2': ['24px', '32px'],
        '2xl2': ['32px', '40px'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
