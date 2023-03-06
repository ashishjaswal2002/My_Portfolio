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
    fontSize:{
      custom :'62.5%'
    },
   
    extend: {
      backgroundImage:{
        'superImage':"url('/src/assets/Ash.png')"
      }
    },
  },
  plugins: [],
}

