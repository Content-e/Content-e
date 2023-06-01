/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Google Sans', 'sans-serif'],
        'body': 'Raleway',
      },
      colors: {
        'brand-primary': '#0A9396',
        'brand-secondary': '#94D2BD',
      },
    },
  },
  plugins: [],
}

