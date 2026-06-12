// Single source of truth para datos del sitio.
// Fuente principal: perfiles públicos de Juan Cruz Resch en
// Terappio (https://terappio.com/ar/Psychologists/Details/juan-cruz-resch) y
// MundoPsicologos (https://www.mundopsicologos.com.ar/centros/juan-cruz-resch).
// Los `[TBD]` son los datos que faltan y hay que pedirle directamente a Juan.

export const SITE = {
  url: 'https://www.juanresch.com',
  name: 'Juan Cruz Resch',
  fullName: 'Lic. Juan Cruz Resch',
  shortName: 'Juan Cruz',
  title: 'Psicólogo · Pareja, individual y adolescente',
  tagline: 'Terapia presencial en Olavarría y online en toda LatAm.',

  // Contacto
  email: 'hola@juanresch.com', // [TBD — pedir a Juan]
  phone: '+54 9 2284 67-5302',
  whatsapp: '5492284675302', // sin signos, formato wa.me
  whatsappUrl: 'https://wa.me/5492284675302',

  // Credenciales reales
  // Matrícula nacional: en trámite — no mostrar en sitio hasta tenerla emitida
  matriculaNacional: null,
  matriculaProvincial: 'M.P. 35.932',
  universidad: 'Universidad Nacional de Mar del Plata (UNMdP)',
  tituloGrado: 'Licenciado en Psicología',
  anioGraduacion: '2026',

  // Especialización y formación
  especializaciones: [
    {
      titulo: 'Especialización en Terapia Sistémica de Pareja',
      institucion: 'Escuela Sistémica Argentina',
      horas: 63,
      anio: 2025,
    },
  ],
  orientacionTeorica: 'Psicoterapia integrativa con enfoque sistémico',
  enfoqueComplementario: 'Psicoanálisis y conductismo según el caso',

  // Dirección
  address: {
    street: 'Rivadavia 2055',
    city: 'Olavarría',
    region: 'Buenos Aires',
    postalCode: 'B7400',
    country: 'AR',
    latitude: -36.8987292,
    longitude: -60.3315123,
    googleMapsUrl: 'https://maps.app.goo.gl/1ZTqK2fnRNH5yz4QA',
    googleMapsPlaceId: '0x959445006b7ce4df:0x5c238c55c9906645',
  },

  // Honorarios reales
  pricing: {
    individual: '$30.000', // 50 min
    pareja: '$47.000', // 75 min
    adolescente: '$30.000', // 50 min
    individualUsd: '[TBD]',
    parejaUsd: '[TBD]',
    actualizado: 'Junio 2026',
  },

  // Duración de sesiones
  sessionDuration: {
    individual: 50,
    pareja: 75,
    adolescente: 50,
  },

  // Población atendida
  atiende: [
    'Adolescentes (desde 12 años)',
    'Adultos',
    'Adultos mayores',
    'Parejas en cualquier configuración: monógamas, abiertas, no monógamas, poliamor',
  ],
  noAtiende: [
    'Niños (hasta 11 años)',
    'Cuadros que requieren tratamiento psiquiátrico especializado',
    'Casos de violencia activa (deriva a recursos especializados)',
  ],

  // Honorarios y obras sociales
  obrasSociales: 'Sin convenio directo. Se emite factura tipo C para gestión de reintegro según cada obra social.',

  // Horarios reales (horario Argentina, GMT-3)
  hours: [
    { day: 'Lunes a Viernes', open: '09:00', close: '20:00' },
  ],

  // Social
  social: {
    instagram: 'https://instagram.com/juancruzresch', // [TBD — confirmar handle]
    tiktok: '',
  },

  // Meta
  defaultOgImage: '/og-default.jpg',
  locale: 'es_AR',
  language: 'es',
};

export const NAV_ITEMS = [
  { label: 'Parejas', href: '/terapia-de-parejas' },
  { label: 'Individual', href: '/terapia-individual' },
  { label: 'Cómo trabajo', href: '/como-trabajo' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Notas', href: '/notas' },
];
