/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7F00FF",
          100: "#9A00FF",
          200: " #4A0077",
        },
        secondary: {
          DEFAULT: "#E100FF",
          200: "#BB00FF",
        },
        hot: "#FF007F",
      },
    },
  },
  plugins: [],
};

