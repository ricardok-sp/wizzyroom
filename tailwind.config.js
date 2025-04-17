/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleLogo: '#9b9ce7',
        darkPurpleLogo: '#5c58a0',
        blueLogo: '#8abedc',
        yellowLogo: '#fcd557',
      },
    },
  },
  plugins: [],
}