/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: { score: "14rem" },
      screens: {
        custom: "370px",
      },
    },
    fontFamily: {
      radikal: ["Nootype Radikal", "sans-serif"],
    },
  },

  plugins: [],
}
