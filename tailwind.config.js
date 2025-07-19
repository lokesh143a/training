/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        darkBlue: '#13274B', 
        lightGray: '#404041',
        mutedGray : "#CFD3D4"

      },
    },
  },
  plugins: [],
}