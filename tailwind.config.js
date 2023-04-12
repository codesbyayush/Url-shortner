/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xl' : "1180px"
    },
    extend: {
      colors : {
        'primCyan' :"hsl(180, 66%, 49%)",
        'primDarkViolet' :"hsl(257, 27%, 26%)",
        'secRed' : "hsl(0, 87%, 67%)",
        'neuGray': 'hsl(0, 0%, 75%)',
        'neuGrayishViolet': 'hsl(257, 7%, 63%)',
        'neuVeryDarkBlue': 'hsl(255, 11%, 22%)',
        'neuVeryDarkViolet': 'hsl(260, 8%, 14%)',
      },
      backgroundImage : {
        'subFooter' : "url(/src/assets/bg-boost-desktop.svg)",
        'action' : "url(/src/assets/bg-shorten-desktop.svg)",
      }
    },
  },
  plugins: [],
}

