/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(254, 252, 251)',
        'background': 'rgb(8, 3, 2)',
        'primary': 'rgb(176, 222, 232)',
        'secondary': 'rgb(9, 16, 32)',
        'accent': 'rgb(228, 100, 71)',
       },            
      fontFamily: {
        title: 'Fira Sans, sans-serif',
        body: 'IBM Plex Sans, sans-serif',
      },
      fontSize: {
        'clamp-title': "clamp(1.625rem,7vw,3rem)",
        'clamp-subtitle': "clamp(1rem,2.5vw,2.625rem)",
      },
      typography: ({ theme }) => ({
        text: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-lead': theme('colors.text'),
            '--tw-prose-links': theme('colors.text'),
            '--tw-prose-bold': theme('colors.text'),
            '--tw-prose-counters': theme('colors.text'),
            '--tw-prose-bullets': theme('colors.text'),
            '--tw-prose-hr': theme('colors.text'),
            '--tw-prose-quotes': theme('colors.text'),
            '--tw-prose-quote-borders': theme('colors.text'),
            '--tw-prose-captions': theme('colors.text'),
            '--tw-prose-code': theme('colors.text'),
            '--tw-prose-pre-code': theme('colors.text'),
            '--tw-prose-pre-bg': theme('colors.text'),
            '--tw-prose-th-borders': theme('colors.text'),
            '--tw-prose-td-borders': theme('colors.text')
          },
        },
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
