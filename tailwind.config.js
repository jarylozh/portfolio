/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#2C3333',
        'primary': '#0E8388',
        'secondary': '#CBE4DE',
        'tertiary': '#CBE4DE',
        'on-primary': '#2C3333',
        'on-secondary': '#2C3333',
      },
      fontFamily: {
        "dm-sans": ["'DM Sans'"]
      }
    }
  },
  plugins: [],
}