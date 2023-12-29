// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  bracketSameLine: true,
  singleAttributePerLine: true,
  singleQuote: true,
};