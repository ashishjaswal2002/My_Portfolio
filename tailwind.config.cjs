module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
    'Poppins':['Poppins','sans-serif'  ],
      'SS':['Stardos Stencil','cursive'],

    },
    // extend: {
    //   backgroundColor:{
    //     'custom':''
    //   }
     
    // },
    extend: {
      
      theme: {
        screens: {
           'md':'700px'
        },
      },
    },
  
  },
  plugins: [],
}