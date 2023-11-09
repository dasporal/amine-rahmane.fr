import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()]
});