/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#113F67",
        secondary: "#E3E8F2",
        accent: "#F9F7F6",
        tertiary: "#405473",
      },
    },
  },
  plugins: [],
};
