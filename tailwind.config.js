/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms',
      },
    },
  },
  plugins: [],
}

