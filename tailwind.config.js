/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
      },
      blue:{
        100:'#000080'
      },
      black:{
        100:'#666'
      }
    },
    extend: {
    },  
  },
  plugins: [],
}