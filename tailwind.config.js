/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Replace 'Roboto' with your font name
      },
      colors: {
        custompurple: '#79747E'
      },
    },
  },
  plugins: [],
}