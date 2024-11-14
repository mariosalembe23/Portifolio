/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "smaller": { "max": "320px" },
      "small": { "max": "599px" },
      // @media screen (max-width: 599px) { @content }

      "retrato-tablet": "600px",
      // @media screen (min-width: 600px) { @content }

      "paisagem-tablet": "900px",
      // @media screen (min-width: 900px) { @content }

      "desktop": "1200px",
      // @media screen (min-width: 1200px) { @content }

      "large": "1800px",
      // @media screen (min-width: 1800px) { @content }
      },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};