/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colour-secondary-white-100-general": "#fff",
        lavender: "#e7ecff",
        "colour-main-blue-300": "#929ecc",
        lightgray: "#cdd1d4",
        "colour-main-blue-800": "#111b47",
        "colour-logo-primary": "#37447e",
        "colour-main-grey-400": "#939ea4",
        "colour-main-grey-600": "#5d6970",
        "colour-main-blue-700": "#222f65",
        "colour-main-blue-400": "#6f7cb2",
        "colour-main-blue-900": "#091133",
        black: "#000",
        "colour-main-blue-500": "#505f98",
      },
      spacing: {},
      fontFamily: {
        "regular-14": "Roboto",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xs: "0.75rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      base: "1rem",
      "31xl": "3.125rem",
      "21xl": "2.5rem",
      "11xl": "1.875rem",
      "17xl": "2.25rem",
      "10xl": "1.813rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
