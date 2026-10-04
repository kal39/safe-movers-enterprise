/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#4A1525',
          dark: '#320E19',
          light: '#632335'
        },
        gold: {
          DEFAULT: '#E5A93B',
          hover: '#d4982f'
        }
      }
    },
  },
  plugins: [],
}