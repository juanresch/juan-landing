import { SITE } from './site';

const PSYCHOLOGIST_ID = `${SITE.url}/#psychologist`;
const WEBSITE_ID = `${SITE.url}/#website`;

const psychologistEntity = {
  '@type': 'Psychologist',
  '@id': PSYCHOLOGIST_ID,
  name: SITE.fullName,
  image: `${SITE.url}/images/juan-retrato.jpg`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.address.latitude,
    longitude: SITE.address.longitude,
  },
  areaServed: [
    { '@type': 'City', name: 'Olavarría' },
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Place', name: 'LatAm (online)' },
  ],
  medicalSpecialty: 'Psychology',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Matrícula profesional',
      name: `${SITE.matriculaNacional} / ${SITE.matriculaProvincial}`,
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Licenciatura en Psicología',
      recognizedBy: {
        '@type': 'CollegeOrUniversity',
        name: SITE.universidad,
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Especialización',
      name: SITE.especializaciones[0].titulo,
      recognizedBy: {
        '@type': 'Organization',
        name: SITE.especializaciones[0].institucion,
      },
    },
  ],
  knowsAbout: [
    'Terapia sistémica de pareja',
    'Psicoterapia integrativa',
    'Crisis de pareja',
    'Infidelidad',
    'Vínculos y dinámicas relacionales',
    'Ansiedad',
    'Sentido de vida',
    'Desarrollo personal',
  ],
};

const websiteEntity = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'es-AR',
  publisher: { '@id': PSYCHOLOGIST_ID },
};

export function buildBaseSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [psychologistEntity, websiteEntity],
  };
}

export function buildServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': PSYCHOLOGIST_ID },
    areaServed: [
      { '@type': 'City', name: 'Olavarría' },
      { '@type': 'Country', name: 'Argentina' },
    ],
  };
}

export function buildFaqSchema(qa: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    image: opts.image ?? `${SITE.url}${SITE.defaultOgImage}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@id': PSYCHOLOGIST_ID },
    publisher: { '@id': PSYCHOLOGIST_ID },
    mainEntityOfPage: opts.url,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
