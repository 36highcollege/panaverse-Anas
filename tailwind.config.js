/** @type {import('tailwindcss').Config} */
// /**@type {import ('tailwindcss').Config} */

module.exports = {
  darkMode: ['dark', '[data-mode="dark"]'],
},
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }