// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://autometa.ae',
  output: 'static',
  // The per-solution pages were folded into the homepage's "What we build" section.
  redirects: {
    '/solutions/pos': '/#build',
    '/solutions/car-detailing': '/#build',
    '/solutions/ecommerce': '/#build',
    '/solutions/billing-operations': '/#build',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
