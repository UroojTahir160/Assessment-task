/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        PoppinsBold: "PoppinsBold",
      },
      colors: {
        primary: {
          "lime-600": "#54B435",
          "green-400": "#67E776",
          "violet-900": "#4E1D9A",
          "stone-300": "#D0D0D0",
          "neutral-500": "#777777"
        },
        secondary: {},
      },
    },
  },
  plugins: [],
};
