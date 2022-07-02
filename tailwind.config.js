/* eslint-disable quotes */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      teko: "Teko",
    },
    minHeight: {
      0: "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      full: "100%",
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/Polygon.svg')",
        circuit: "url('/images/circuit-board.svg')",
      },
      spacing: {
        sm: "2.5rem",
        md: "6rem",
        lg: "11rem",
        xl: "16rem",
        "2xl": "24rem",
      },
      transitionProperty: {
        position: "left, right",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["emerald", "dark", "forest", "synthwave"],
  },
};
