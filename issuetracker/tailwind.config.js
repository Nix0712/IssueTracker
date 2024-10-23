const { blob } = require('stream/consumers');
const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        tdark: "#0d1117",
        tlight: "#e0e5e9",
        tprimary: "#f3d849",
        tsecondary: "#0a62d0",
        tshover: "#3a82e5",
      },
      animation: {
        blob: "blob 10s infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(20px, -20px) scale(1.2)"
          },
          "66%": {
            transform: "translate(30px, -50px) scale(0.8)"
          },
          "100%": {
            transform: "translate(0px, -0px) scale(1)"
          }

        },
      },
    },
  },
  plugins: [],
}

