/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary':'hsla(235, 79%, 17%, 1)',
    'background': '#E4ECFF',
    'purple' : 'hsla(232, 67%, 48%, 0.8)',
    'gray':'hsla(236, 12%, 44%, 1)',
    'white':'hsl(212 100% 100%)',
    'button':'hsla(232, 67%, 48%, 1)'
      ,
    },
    extend: {},
  },
  plugins: [],
}

