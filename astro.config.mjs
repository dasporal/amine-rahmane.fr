import { defineConfig } from 'astro/config';
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
      media_folder: 'static/assets',
      collections: [
        {
          name: 'works',
          label: 'Works',
          folder: 'static/works',
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