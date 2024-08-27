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
        slate:'#282834',
        backgroundBlue: '#eefffc',
        headerBlue: '#00a8a5',
        footerBlue: '#007c7c'
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInFromRight: 'slideInFromRight 0.5s ease-out forwards',
       
       
      },

      

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-white': {
          color: 'transparent',
          '-webkit-text-stroke': '2px white',
        },
        '.text-stroke-black': {
          color: 'transparent',
          '-webkit-text-stroke': '2px black',
        },
      });
    },
  ],
}

