/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      inter: "Inter, sans-serif",
      mono: "DM Mono, monospace",
    },
    colors: {
      "light-blue": "#AFBAD9",
      "steel-blue": "#55679C",
      "navy-blue": "#1E2A5E",
      beige: "#E1D7B7",
      red: "#FF6B6B",
      "lighter-red": "#FFA8A8",
      yellow: "#F9D371",
    },
    extend: {},
  },
  plugins: [],
};
