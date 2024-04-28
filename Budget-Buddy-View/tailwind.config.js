/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customFont:['Source Sans Pro','sans-serif']
      },
      colors:{
        color1: '#EEEEEE',
        color2: '#548CA8',
        color3: '#476072',
        color4: '#334257'
      },
      boxShadow:{
        'logregShadow' : '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
      }
    },
  },
  plugins: [],
}