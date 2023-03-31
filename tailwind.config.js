/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  // darkMode: 'class',
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
            1000: '#111827',
          },
          'dark': {
            100: '#AEAEAE',
            200: '#28262B',
          },
          'blue': {
            1000: '#141D4B',
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
