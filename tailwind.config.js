/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    screens: {
      xlarge: "1100px",
    },
    extend: {
      backgroundColor: {
        primary: "#007539",
      },
    },
  },
  plugins: [],
};
