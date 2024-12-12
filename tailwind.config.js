/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryColor: "#5B3AEE",
        secondaryColor: "rgb(248 188 36 / 1)",
        secondarySecondColor: "#faf9f6",
        black: "#070707",
      },
    },
  },
  plugins: [],
};
