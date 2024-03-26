import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { 
        syne: ['var(--font-syne)'],
        archivo: ['var(--font-archivo)'],
        publicsans: ['var(--font-publicsans)'],
        dmsans: ['var(--font-dmsans)'],
      },
      colors: {
      maintext: '#0d0c22',
      titles: '#282825',
      beige: '#f9f5f2',
      yellow: '#f7cb45',
      blue: '#91a8ed',
      coral: '#ff7d59',
      dribbble: '#ea4c89',
      aquamarine: '#7ec4bd',
      textlight: '#5c5b66',
      body: '#52514e',
      navtext: '#6e6d7a',
      pink: '#ff91e7',
      green: '#22a094',
      indianred: '#f45257',
      pastelgreen: '#DAF5F0',
      violet: '#C4A1FF',
      }
    },
  },
  plugins: [],
};
export default config;
