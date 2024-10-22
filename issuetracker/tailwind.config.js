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
      },
    },
  },
  plugins: [],
}

