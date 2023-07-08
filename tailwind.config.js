/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bacant: ['"Bacasime Antique"', "serif"],
        capras: ["Caprasimo", "cursive"],
      },
    },
  },
  plugins: [],
};
