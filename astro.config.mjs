import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://www.juanresch.com';
const IMG = (p) => `${SITE_URL}${p}`;

// Mapa de imágenes destacadas por URL para extension `image:` del sitemap
const PAGE_IMAGES = {
  [`${SITE_URL}/`]: [
    {
      url: IMG('/images/juan-retrato.jpg'),
      title: 'Lic. Juan Cruz Resch — Psicólogo de parejas en Olavarría',
      caption: 'Retrato profesional del Lic. Juan Cruz Resch',
    },
    {
      url: IMG('/og-default.jpg'),
      title: 'Lic. Juan Cruz Resch — Psicólogo',
      caption: 'Imagen para previews en redes sociales',
    },
  ],
  [`${SITE_URL}/sobre-mi`]: [
    {
      url: IMG('/images/juan-retrato.jpg'),
      title: 'Lic. Juan Cruz Resch en consultorio en Olavarría',
      caption: 'Lic. Juan Cruz Resch — UNMdP, especializado en terapia sistémica de pareja',
    },
  ],
  [`${SITE_URL}/terapia-de-parejas`]: [
    {
      url: IMG('/images/juan-retrato.jpg'),
      title: 'Terapia de parejas con Lic. Juan Cruz Resch en Olavarría',
    },
  ],
  [`${SITE_URL}/terapia-individual`]: [
    {
      url: IMG('/images/juan-retrato.jpg'),
      title: 'Terapia individual con Lic. Juan Cruz Resch — presencial Olavarría y online LatAm',
    },
  ],
  [`${SITE_URL}/terapia-online`]: [
    {
      url: IMG('/images/juan-retrato.jpg'),
      title: 'Terapia online en español con Lic. Juan Cruz Resch — atención en toda LatAm',
    },
  ],
};

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      serialize(item) {
        const images = PAGE_IMAGES[item.url];
        if (images) {
          return { ...item, img: images };
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
