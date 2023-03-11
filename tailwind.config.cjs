/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lightGray: "#F9FAFB",
        normalGray: "#E5E7EB",
        darkerGray: "#374151",
        darkestGray: "#111827",
        normalBlue: "#0EA5E9",
        normalYellow: "#FACC15",
        normalGreen: "#22C55E",
        normalRed: "#DC2626",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
