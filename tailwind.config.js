/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/info-img.svg')",
        "form-bg": "url(../public/formbg.svg)",
      },
      fontFamily: {
        octabrain: ["Octa Brain", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "connect-blue": "#657EF0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
