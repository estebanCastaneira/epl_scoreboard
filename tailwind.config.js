/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: { score: "14rem" },
      screens: {
        custom: "440px",
      },
    },
    fontFamily: {
      radikal: ["Nootype Radikal", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },

  plugins: [],
}
