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
      backgroundImage: {
        'gradient': 'conic-gradient(from 183.38deg at 124.05% 19.58%, rgba(0, 0, 0, 0.1) -142.5deg, #070707 4.11deg, #000000 4.14deg, #0C0002 11.23deg, #0B0808 47.53deg, #000000 75.62deg, rgba(0, 0, 0, 0) 140.63deg, rgba(0, 0, 0, 0) 166.87deg, rgba(0, 0, 0, 0.1) 217.5deg, #070707 364.11deg)',
      },
      backgroundBlendMode: {
        'darken': 'darken',
      },
      mixBlendMode: {
        'normal': 'normal',
      },
      filter: {
        'drop-shadow-c': 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      },
    },
  
  },
  plugins: [],
}