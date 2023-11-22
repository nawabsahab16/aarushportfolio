/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#FFB400",
        backgroundColor: "#F0F0F6",
      }
    },
  },
  plugins: [],
}

