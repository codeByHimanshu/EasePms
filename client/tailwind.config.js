/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        'extra-light': 200,
        'semi-bold': 600,
        'extra-bold': 800,
      },
    },
  },
  plugins: [],
});


