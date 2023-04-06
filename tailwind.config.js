/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          'gray': {
            55 : '#D5D5D5',
            60 : 'rgba(255, 255, 255, 0.16)',
            70 : 'rgba(20, 20, 20, 0.5)',
            80: 'rgba(107, 114, 128, 0.12)',
            90: 'rgba(97, 97, 117, 0.12);',
            1000: '#111827',
            1100: '#0E0E19',
            1200: '#616175',
          },
          'dark': {
            100: '#AEAEAE',
            200: '#28262B',
          },
          'blue': {
            1000: '#141D4B',
          },
          'violet': {
            550: '#AB7AFF',
          },
          'dark-theme': '#1E1E1E',
        },
        fontSize: {
          '3xl': '32px',
          '4xl': '40px',
        },
        borderWidth: {
          '3': '3px',
        },
    },
},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
