/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      screens: {
         sm: '375px',
         // => @media (min-width: 375px) { ... }
         md: '800px',
         // => @media (min-width: 800px) { ... }
         lg: '1400px',
         // => @media (min-width: 1400px) { ... }
      },
      extend: {
         colors: {
            text_gray: '#7E8299',
            text_light_gray: '#A1A5B7',
            bg_light_gray: '#FAF9F9',
            text_primary_tag: '#2884ef',
            text_dark_gray: '#181C32',
            text_danger: '#F1416C',
            primary_tag: '#3E97FF',
         },
      },
   },
   plugins: [],
}
