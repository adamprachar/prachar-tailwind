/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'alfa': ["Alfa Slab One", 'serif'],
      'dm': ["DM Sans", 'sans-serif'],
    },
    extend: {
      colors:{
        'primary': '#BE6361',
        'tBlack': '#333333',
      },
    },
  },
  plugins: [],
}

