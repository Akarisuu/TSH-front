module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        mobile: "5%",
        desktop: "10%",
      },
      colors: {
        primary: {
          900: "#2140E8",
          800: "#4460F7",
        },
        secondary: "#F9A52B",
        grey: {
          900: "#1A1B1D",
          400: "#9194A5",
          300: "#B9BDCF",
          200: "#E0E2EA",
          100: "#F0F1F5",
        },
      },
      dropShadow: {
        basic: "0 0 4px rgba(0, 0, 0, .25)",
        error: "0 0 4px rgb(220, 38, 38)",
      },
    },
  },
  plugins: [],
};
