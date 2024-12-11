/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        accent: colors.blue[300],
        DEFAULT: colors.blue[500],
        solid: colors.blue[50],
      },
    },
    extend: {
      fontFamily: {
        lcnmqt: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
