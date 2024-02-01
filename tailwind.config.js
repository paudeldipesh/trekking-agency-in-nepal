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
    },
    extend: {
      backgroundColor: {
        primary: "#007539",
      },
    },
  },
  plugins: [],
};
