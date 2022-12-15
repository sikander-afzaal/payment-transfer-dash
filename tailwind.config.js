/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-blue": "#0097c7",
        "dark-blue": "#37517e",
        blue: "#00a2dd",
        gray: "#5d7079",
        green: "#2ead4b",
        red: "#d03238",
      },
      backgroundImage: {
        progress: "linear-gradient(to right,#00a2dd,#37517e)",
      },
    },
  },
  plugins: [],
};
