/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1b1b1b',
        'secondary': '#f3f3f3',
        'tertiary': '#c7c9c8',
        'on-primary': '#f3f3f3',
        'on-secondary': '#1b1b1b',
      },
      fontFamily: {
        "dm-sans": ["'DM Sans'"]
      }
    }
  },
  plugins: [],
}