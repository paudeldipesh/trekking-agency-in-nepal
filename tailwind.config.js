/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xlarge: "1160px",
      large: "900px",
      small: "440px",
      pc: "1280px",
      tab: "768px",
      mb: "480px",
      mb: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#007539",
        secondary: "#456cb1",
      },
    },
  },
  plugins: [],
};
