const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        //pull in the full list of TailWind colors
        ...colors
      }
    },
  },
  plugins: [],
}

