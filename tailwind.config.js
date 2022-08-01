module.exports = {
  darkMode: '',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},

  },
  plugins: [require('@tailwindcss/typography')],
}