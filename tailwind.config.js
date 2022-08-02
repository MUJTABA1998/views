/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto Condensed"],
      },
      colors: {
        primary: "#6c5ce7",
      },
    },
  },
  plugins: [],
};
