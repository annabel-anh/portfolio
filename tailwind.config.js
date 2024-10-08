/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      inter: "Inter, sans-serif",
      mono: "DM Mono, monospace",
      manrope: "Manrope, system-ui",
    },
    dark: true,
    extend: {
      backgroundImage: {
        "gradient-pattern": "url('/public/assets/contact_bg.jpg')",
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        "light-blue": "#AFBAD9",
        "steel-blue": "#55679C",
        "navy-blue": "#1E2A5E",
        "muted-blue": "#2E3A67",
        beige: "#E1D7B7",
        red: "#FF6B6B",
        "lighter-red": "#FFA8A8",
        yellow: "#F9D371",
      },
    },
  },
  plugins: [],
};
