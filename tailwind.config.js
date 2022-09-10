/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'purcase': "url('./images/purcase.svg')",
        'purcase2': "url('./images/purcase2.svg')",
      }
    },
  },
  plugins: [],
}
