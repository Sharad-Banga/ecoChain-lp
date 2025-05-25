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
    },
  },
  plugins: [],
}

export default config