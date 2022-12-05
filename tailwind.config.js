const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,mdx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        huerotate: "huerotate 10s ease-in-out infinite",
      },
      fontFamily: {
        display: ["neue-haas-grotesk-display", ...fontFamily.sans],
        sans: ["neue-haas-grotesk-text", ...fontFamily.sans],
      },
      keyframes: {
        huerotate: {
          "0%, 100%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(150deg)" },
        },
      },
      transitionDuration: {
        DEFAULT: "300ms",
        300: "300ms",
        500: "500ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
