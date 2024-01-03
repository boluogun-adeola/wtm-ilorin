/** @type {import('tailwindcss').Config} */

// --background-pale-green: #f8fcff;

// --bg: #8495d3

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headers: ["Montserrat", "sans-serif"],
        body: ["PT Sans", "sans-serif"],
      },
      colors: {
        text: "var(--text-color)",
        textLight: "var(--text-white-color)",
        textDark: "var(--text-dark-color)",
        textBlue: "var(--text-blue-color)",
        textFooter: "var(--text-footer-color)",
        bgLight: "var(--white)",
        bgCream: "var(--background-white)",
        bgBlack: "var(--primary-black)",
        bgBlue: "var(--background-blue)",
        bgPurple: "var(--background-purple)",
        bgLightGreen: "var(--background-light-green)",
        bgLightPurple: "var(--background-light-purple)",
        bgLightBlue: "var(--background-light-blue)",
        bgGray: "var(--background-gray)",
        bgGreen: "var(--background-green)",
        bgCerulean: "var(--background-cerulean)",
        bgVividCerulean: "var(--background-vivid-cerulean)",
        bgGreenPigment: "var(--background-green-pigment)",
      },
    },
  },
  plugins: [],
};
