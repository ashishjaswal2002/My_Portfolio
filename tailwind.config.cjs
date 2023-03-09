/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'Poppins':['Poppins','sans-serif'  ],
      'SS':['Stardos Stencil','cursive']
    },
  },
  plugins: [],
}