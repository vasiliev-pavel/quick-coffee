/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        card: "#273341",
        cardHover: "#364556",
      },
      fontFamily: {
        sora: ["Kanit", "ui-sans-serif", "system-ui"],
        // roboto: ["ui-sans-serif", "system-ui", "Roboto"], // other font families...
      },
    },
  },
  plugins: [],
};
