/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'text': '#f0dddb',
        'background': '#06000a',
        'primary': '#9f2b1e',
        'secondary': '#0c1b1d',
        'accent': '#4770ae',
      },
      fontFamily: {
        title: 'Fira Sans, sans-serif',
        body: 'IBM Plex Sans, sans-serif',
      }
    }
  },
  plugins: [],
}
