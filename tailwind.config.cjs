/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Poppins:['Poppins','Poppins'],
      SS:['Stardos','Stardos Stencil','cursive']
    },
   
   
    extend: {
      backgroundImage:{
        'superImage':"url('/src/assets/Ash.png')"
      }
    },
  },
  plugins: [],
}

