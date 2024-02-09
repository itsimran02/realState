/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#F6FCF9", secondary: "#24AB70" },
      borderRadius: {
        280: "280px",
      },
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
