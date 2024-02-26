/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'handwriting': ['handwriting-draft_free-version', 'sans-serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
}