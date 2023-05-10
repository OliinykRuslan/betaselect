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
            65 : 'rgba(255, 255, 255, 0.08)',
            66 : 'rgba(255, 255, 255, 0.24)',
            70 : 'rgba(20, 20, 20, 0.5)',
            75 : 'rgba(17, 24, 39, 0.08)',
            80 : 'rgba(107, 114, 128, 0.12)',
            85 : '#E3E3E3',
            90 : 'rgba(97, 97, 117, 0.12)',
            95 : '#ECEDEE',
            1000: '#111827',
            1100: '#0E0E19',
            1200: '#616175',
            1300: '#E6E5E5',
            1400: '#F9F9FB',
          },
          'dark': {
            100: '#AEAEAE',
            200: '#28262B',
          },
          'blue': {
            50: '#0274B3',
            1000: '#141D4B',
          },
          'violet': {
            50: 'rgba(124, 58, 237, 0.08)',
            550: '#AB7AFF',
          },
          'dark-theme': '#1E1E1E',
        },
        fontSize: {
          '1xl': '22px',
          '2.5xl': '28px',
          '3xl': '32px',
          '4xl': '40px',
        },
        borderWidth: {
          '3': '3px',
        },
        boxShadow: {
          'bottom': 'box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.1)',
        },
    },
},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
