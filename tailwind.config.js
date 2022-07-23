/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#59DBB5",
        "secondary": "#A015E3",
        "bg-header": {
          dark: "#283150"
        },
        "bg-sidebar": {
          dark: "#2E395F"
        },
        "bg-body": {
          dark: "#200A4C"
        }
      },
    },
    screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1420px"
    },
    // colors: {
    //   ...defaultTheme.colors,
    //   "primary": "#59DBB5",
    //   "secondary": "#A015E3",
    //   "bg-header": {
    //     dark: "#283150"
    //   },
    //   "bg-sidebar": {
    //     dark: "#2E395F"
    //   },
    //   "bg-body": {
    //     dark: "#200A4C"
    //   }
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  plugins: [],
}