/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Cream: "#F8F4E3",
        Charcoal: "#1a1a1a",
        Burgundy: "#556B2F",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"], // for body text
        Playfair: ["Playfair Display", "serif"], // for headings
        Bebas: ["Bebas Neue", "serif"],
      },
    },
  },
  plugins: [],
};
