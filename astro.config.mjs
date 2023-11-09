import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
  NetlifyCMS({
    config: {
      locale: 'fr',
      backend: {
        name: 'git-gateway',
        repo: 'dasporal/amine-rahmane',
        branch: 'main',
      },
      local_backend: true,
      site_url: 'https://amine-rahmane.fr/',
      display_url: 'https://amine-rahmane.fr/',
      media_folder: 'src/content/assets',
      slug: {
        encoding: "ascii",
        clean_accents: true,
        sanitize_replacement: "-"
      },
      collections: [
        {
          name: 'projects',
          label: 'Projects',
          identifier_field: 'project',
          slug: "{{company}}",
          folder: 'src/content/projects',
          create: true,
          delete: true,
          fields: [
            { name: 'templateKey', label: 'Template Key', required: true, widget: 'hidden', default: 'work' },
            { name: 'project', label: 'Project' },
            { name: 'company', label: 'Company' },
            { name: 'context', label: 'Context', widget: 'text' }
          ],
        },
      ],
    },
  }),]
});