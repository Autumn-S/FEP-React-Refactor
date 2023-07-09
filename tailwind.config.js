/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        capras: ["Caprasimo", "cursive"],
      },
      colors: {
        customGreen: "#73b38b",
        customGray: "#acbc9c",
        customGreenStart: "rgba(196, 220, 164, 1)",
        customGreenMid: "rgba(186, 213, 164, 1)",
        customGreenEnd: "rgba(148, 203, 156, 1)",
      },
      gradientColorStops: {
        "custom-linear":
          "linear-gradient(125deg, var(--color-start) 0%, var(--color-mid) 50%, var(--color-end) 100%)",
      },
    },
  },
  plugins: [],
};
