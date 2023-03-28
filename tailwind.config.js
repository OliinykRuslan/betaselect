/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          'gray': {
            1000: '#111827',
          }
        },
    },
},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
