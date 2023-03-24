/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}"
  ],
  theme: {
    fontSize: {
      sm: '0.938rem'
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors:{
        'offwhite': 'hsl(36, 100%, 99%)',
        'Grayish blue': 'hsl(233, 8%, 79%)',
        
      },
    },
  },
  plugins: [],
};
