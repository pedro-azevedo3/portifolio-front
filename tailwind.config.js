/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#00F0FF',
        bgPattern: '#111111',
        componentColor: '#1A1A1A',
      },
    },
  },
  plugins: [require("daisyui")],
}

