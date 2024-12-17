/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/components/**/*.{astro,html,tsx}",
    "./src/layouts/**/*.{astro,html,tsx}",
    "./src/pages/**/*.{astro,html,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    colors: {
      danger: {
        accent: colors.red[300],
        DEFAULT: colors.red[500],
        solid: colors.red[50],
      },
      info: {
        accent: colors.cyan[300],
        DEFAULT: colors.cyan[500],
        solid: colors.cyan[50],
      },
      lcnmqt: {
        primary: "#19B0F2",
        secondary: "#333333",
      },
      primary: {
        accent: colors.blue[300],
        DEFAULT: colors.blue[500],
        solid: colors.blue[50],
      },
      secondary: {
        accent: colors.gray[300],
        DEFAULT: colors.gray[500],
        solid: colors.gray[50],
      },
      success: {
        accent: colors.green[300],
        DEFAULT: colors.green[500],
        solid: colors.green[50],
      },
      transparent: "transparent",
      warning: {
        accent: colors.orange[300],
        DEFAULT: colors.orange[500],
        solid: colors.orange[50],
      },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1.25rem", { lineHeight: "1.75rem" }],
      lg: ["1.5rem", { lineHeight: "2rem" }],
      xl: ["1.875rem", { lineHeight: "2.25rem" }],
      "2xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "3xl": ["3rem", { lineHeight: "1" }],
      "4xl": ["3.75rem", { lineHeight: "1" }],
    },
    extend: {
      fontFamily: {
        lcnmqt: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
