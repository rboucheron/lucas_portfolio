/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: "#d7d7d7",
        maron: "#707070",
        bluesky: "#0059ff",
        decogreen: "#879b95",
      },
      fontFamily: {
        sans: ["eloquia", "sans-serif"],
        serif: ["europa", "serif"],
      },
    },
  },
  plugins: [],
};
