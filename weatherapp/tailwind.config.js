import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'bebasNeue': ['bebasNeue']
      },
    },
  },
  plugins: [],
}
