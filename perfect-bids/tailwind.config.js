/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: '#000000',
        bright: '#ffffff',
        gray:'#f3f2f0',
        hoverColor:'rgb(255, 181, 35)',
        slate:'#282834'
      }
    },
  },
  plugins: [],
}

