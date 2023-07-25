/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary: {
        100:'#490000',
        200: '#940904'
      },
      secondary: {
        100: '#ffff'
      },
      animation: {
        100: '#1e293b'
      },
      golden:{
        100: '#daa520'
      }
    },
    extend: {
    },  
  },
  plugins: [],
}