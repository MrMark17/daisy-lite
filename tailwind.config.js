/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ED4B9E",
      secondary: "#4B4DED",
      tertiary: "#F3D9DA",
      dark: "#262641",
      success: "#46D5B2",
      text: "#5C5C77",
      subtleText: "#9797AA",
      accent: "#EEF2F5",
      cloud: "#FAFCFE",
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {
      borderRadius: {
        "4xl": "1.875rem",
      },
      dropShadow: {
        regular: "0 16px 40px rgba(207, 154, 170, .25)",
      },
    },
  },
  plugins: [],
};
