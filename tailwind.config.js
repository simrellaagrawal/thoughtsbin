/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        salsa: ["Salsa", "cursive"],
      },
      screens: {
        mobileMd: "375px",
        mobileLg: "425px",
        tablet: "768px",
        laptopSm: "800px",
        iPadAir: "820px",
        laptopMd: "1024px",
        laptopLg: "1280px",
        desktopSm: "1366px",
        desktopMd: "1440px",
        desktopLg: "1920px",
      },
    },
  },
  plugins: [],
};
