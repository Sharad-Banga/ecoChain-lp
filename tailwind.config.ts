import { keyframes } from 'framer-motion'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage:{
        "herox" : "url('/public/images/image.png')"
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        poppins: ['var(--font-poppins)'],
        geistsans: ['var(--font-geist-sans)']
      },
      keyframes:{
        scroll:{
          '0%': {transform : 'translateX(0)'},
          '100%' : {transform : 'translateX(-50%)'},
        }
      },
      animation:{
        scroll:'scroll 12s linear infinite'
      }
    },
  },
  plugins: [],
}

export default config