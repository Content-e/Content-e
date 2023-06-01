/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // This is a hack around bootstrap utility classes having !important, resulting in some overlapping styles resolving in favor of bootstrap
  // TODO: remove bootstrap and this line
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Google Sans', 'sans-serif'],
        'title': 'Comfortaa',
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

