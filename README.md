# juanresch.com

Sitio web del Lic. Juan Resch — Psicólogo de Parejas en Olavarría.

Stack: **Astro 5 + Tailwind 3 + MDX**. Hosting target: **Vercel**.

---

## Quickstart

```bash
cd web
npm install
npm run dev          # http://localhost:4321
npm run build        # output → dist/
npm run preview
```

---

## Estructura

```
src/
├── styles/globals.css           # Tokens CSS + escala tipográfica
├── lib/
│   ├── site.ts                  # Single source of truth (placeholders [TBD])
│   └── schema.ts                # Helpers JSON-LD (Psychologist, Service, FAQ, Article, Breadcrumb)
├── layouts/BaseLayout.astro     # <head>, meta, OG, schema base
├── components/                  # Nav, Footer, SectionHeading, ServiceCard, FaqAccordion, DataTable, ArticleCard
├── content/
│   ├── config.ts                # Schema de la collection blog
│   └── blog/                    # Posts .mdx
└── pages/
    ├── index.astro
    ├── terapia-de-parejas.astro
    ├── terapia-individual.astro
    ├── terapia-online.astro
    ├── sobre-mi.astro
    ├── como-trabajo.astro
    ├── preguntas-frecuentes.astro
    ├── contacto.astro
    └── notas/
        ├── index.astro
        └── [...slug].astro
```

---

## Antes de deploy

### 1. Reemplazar placeholders `[TBD]` en `src/lib/site.ts`

- Apellido confirmado
- Email pro (`hola@juanresch.com`)
- WhatsApp con código país
- Matrículas nacional y provincial
- Universidad y año
- Dirección exacta + coordenadas
- Honorarios
- Horarios reales
- Calendly URL

### 2. Buscar otros `[Lorem ...]` y `[TBD ...]` en los `.astro`

Cada página tiene placeholders marcados para reemplazar con copy real.

### 3. Agregar imágenes reales en `/public/images/`

- `juan-retrato.jpg` (4:5 vertical, ≥1200px ancho)
- `juan-contexto.jpg` (4:5, working shot)
- `consultorio-01.jpg` (16:9 cinematográfico)
- `og-default.jpg` (1200×630 para Open Graph)

Convertir a WebP para producción.

### 4. Verificar schema markup

Probar el JSON-LD en `validator.schema.org` antes de publicar.

### 5. Setup en Vercel

```bash
npx vercel
# Conectar GitHub repo
# Dominio: juanresch.com
# Configurar redirect www → root
```

### 6. Post-deploy

- Crear Google Search Console + verificar propiedad
- Crear Google Business Profile con la misma dirección
- Setup Plausible o Vercel Analytics
- Probar Lighthouse — target 100/100/100/100

---

## Convenciones

- **Sin emojis** en código ni en UI.
- **Sin gradientes**, sin glassmorphism, sin colores Tailwind directos — todo via tokens en `globals.css`.
- **Asimetría intencional** en layouts — no centrar todo.
- **`text-wrap: balance`** en headings (ya en globals).
- **Imágenes**: `loading="lazy"` excepto hero. AVIF/WebP. `alt` descriptivo, no keyword-stuffing.
- **Tipografía**: solo Fraunces (display) e Inter (body).
- **Espaciado**: usar `py-section`, `py-group` y `mt-group` (ya en Tailwind config).

---

## Roadmap

- [ ] Recibir assets de Juan (foto, matrícula, dirección, audio bio)
- [ ] Reescribir copy de placeholder → real
- [ ] 8 artículos del blog publicados
- [ ] GBP verificado
- [ ] Setup de captación de reviews
- [ ] Listings en Psychology Today AR + Doctoralia + Psicología y Mente
- [ ] FAQ con 25+ preguntas en /preguntas-frecuentes
