/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado automáticamente · 15/3/2026             ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'Vaciados Rubí Pro',
  businessNameLegal: 'Vaciados Rubí Pro',
  cif:   'B12345678',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Vaciado de pisos y locales',
  area:         'Todo Rubí, municipios cercanos y comarca.',
  mainCity:     'Rubí',
  comarca:      'el Vallès Occidental',
  foundingYear: '2014',

  // ── Contacto ──────────────────────────────────────────
  phone:    '+34 633 75 96 49',
  email:    'seoexpertsslu@gmail.com',
  whatsapp: '34633759649',
  web:      'https://vaciados-rubi.vercel.app',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Fr 09:00-18:00',
  horarioTexto: 'Lunes a Viernes, 9:00–18:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'20:00',

  // ── SEO ───────────────────────────────────────────────
  description: 'Especialistas en servicios profesionales de vaciado de pisos y locales en todo Rubí. Presupuesto gratuito y garantía por escrito.',
  priceRange:  '€€',
  aggregateRating: {
    ratingValue:  4.9,
    reviewCount:  30,
    bestRating:   5,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#29e326',
  colorText:    '#0f172a',

  // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

} as const;

export type SiteConfig = typeof siteConfig;
