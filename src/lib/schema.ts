import { SITE } from './site';

// IDs para referenciar entidades cruzadas en el @graph
const BUSINESS_ID = `${SITE.url}/#business`;
const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

/**
 * Entidad negocio (el consultorio).
 * Usamos LocalBusiness + MedicalBusiness (ambos tipos válidos en schema.org)
 * en vez del inválido "Psychologist".
 */
const businessEntity = {
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  '@id': BUSINESS_ID,
  name: 'Lic. Juan Cruz Resch — Psicólogo',
  description:
    'Consultorio de psicología con orientación sistémica integrativa. Atención a parejas, adultos y adolescentes en Olavarría, Buenos Aires.',
  image: `${SITE.url}/images/juan-retrato.jpg`,
  url: SITE.url,
  telephone: SITE.phone,
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
  hasMap: SITE.address.googleMapsUrl,
  areaServed: [
    { '@type': 'City', name: 'Olavarría' },
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Place', name: 'LatAm (online)' },
  ],
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
};

/**
 * Entidad persona (Juan como profesional).
 * Acá van las credenciales, formación y áreas de conocimiento.
 */
const personEntity = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE.fullName,
  givenName: 'Juan Cruz',
  familyName: 'Resch',
  jobTitle: 'Psicólogo',
  image: `${SITE.url}/images/juan-retrato.jpg`,
  url: SITE.url,
  telephone: SITE.phone,
  workLocation: { '@id': BUSINESS_ID },
  worksFor: { '@id': BUSINESS_ID },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: SITE.universidad,
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Matrícula profesional',
      name: SITE.matriculaProvincial,
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
  knowsLanguage: ['Spanish'],
};

const websiteEntity = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'es-AR',
  publisher: { '@id': PERSON_ID },
  about: { '@id': PERSON_ID },
};

export function buildBaseSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [businessEntity, personEntity, websiteEntity],
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
    provider: { '@id': PERSON_ID },
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
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
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
