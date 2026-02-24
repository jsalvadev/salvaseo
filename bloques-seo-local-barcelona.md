# Bloques Tailwind Plus → Secciones /seo-local-barcelona

## Inventario completo de bloques disponibles

| Categoría | Variantes | Cant. |
|---|---|---|
| **Hero Sections** | Simple centered · Split with screenshot · Split with bordered screenshot · Split with code example · Simple centered with background image · With bordered app screenshot · With app screenshot · With phone mockup · Split with image · With angled image on right · With image tiles · With offset image | 12 |
| **Feature Sections** | With product screenshot · With large screenshot · With large bordered screenshot · Simple three column with small icons · With product screenshot on left · Simple three column with large icons · Contained in panel · With product screenshot panel · With testimonial · Offset 2x2 grid · With code example panel · Offset with feature list · Simple · Centered 2x2 grid · Simple 3x2 grid | 15 |
| **CTA Sections** | Dark panel with app screenshot · Simple stacked · Centered on dark panel · Simple centered · Simple centered with gradient · Simple centered on brand · Simple justified · Simple justified on subtle brand · Split with image · Two columns with photo · With image tiles | 11 |
| **Bento Grids** | Three column bento grid · Two row bento grid · Two row bento grid with three column second row | 3 |
| **Pricing Sections** | Two tiers with emphasized right/left tier · Three tiers with logos and feature comparison · Two tiers with extra tier · Single price with details · Three tiers · Three tiers with dividers/emphasized/toggle · Four tiers with toggle · With comparison table · Three tiers with feature comparison | 12 |
| **Stats** | Simple · Simple grid · With background image · Split with image · Timeline · Stepped · With two column description · With description | 8 |
| **Testimonials** | Simple centered · With large avatar · With overlapping image · With background image · Side-by-side · With star rating · Grid · Subtle grid | 8 |
| **Content Sections** | With sticky product screenshot · With testimonial · With image titles · Two columns with screenshot · With testimonial and stats · Split with image · Centered | 7 |
| **FAQs** | Offset with supporting text · Centered accordion · Side-by-side · Three columns · Three columns with centered introduction · Two columns · Two columns with centered introduction | 7 |
| **Contact Sections** | (7 variantes) | 7 |
| **Logo Clouds** | (6 variantes) | 6 |

---

## Mapeo: Sección de la página → Bloque Tailwind Plus

### 1. HERO — "SEO Local en Barcelona: Que Te Encuentren Quienes Buscan Cerca de Ti"

| Bloque recomendado | Justificación |
|---|---|
| **✅ Hero > Simple centered** | Es lo que ya usas en `HeroLanding.astro`. Mantiene coherencia con `/posicionamiento-web-barcelona`. Upheading como H1, heading grande como gancho, descripción + 2 CTAs. Sin imagen, todo texto centrado. |
| ❌ Split with image | Tentador pero rompe la consistencia visual con tu otra landing. |

**Componente existente:** `HeroLanding.astro` → **REUTILIZAR** con nuevas props.

```
upheading: "Servicio de SEO local en Barcelona"
heading: "Que te encuentren los que buscan cerca de ti"
description: copy transaccional sobre Google Maps + Local Pack
primaryCtaText: "Analiza mi ficha gratis"
secondaryCtaText: "Descubre el proceso"
secondaryCtaHref: "#proceso"
```

---

### 2. QUÉ ES EL SEO LOCAL — "Qué es el SEO local y por qué decide quién se lleva al cliente"

| Bloque recomendado | Justificación |
|---|---|
| **✅ Content Sections > Split with image** | Texto educativo a la izquierda, imagen/ilustración de Google Maps/Local Pack a la derecha. Perfecto para explicar el concepto sin que parezca un muro de texto. |
| Alternativa: **Content Sections > Centered** | Si prefieres no usar imagen, texto centrado con subsecciones. |

**Componente:** NUEVO — `SeoLocalExplainer.astro`

Contiene:
- H2: Qué es el SEO local y por qué decide quién se lleva al cliente
- H3: La diferencia entre SEO local y posicionamiento web tradicional
- H3: Qué es el Local Pack de Google y por qué tu negocio necesita estar ahí
- Imagen: captura del Local Pack / mockup Google Maps

---

### 3. SERVICIOS — "Mi servicio de SEO local en Barcelona"

| Bloque recomendado | Justificación |
|---|---|
| **✅ Feature Sections > Simple three column with large icons** | Grid de 3 columnas con iconos Lucide, igual que `FreelanceVsAgencia.astro`. Ya tienes el patrón con cards + icono + H3 + descripción. Con 7 servicios → 3+3+1 o 4+3 grid responsive. |
| Alternativa: **Bento Grids > Two row bento grid** | Más visual, permite destacar 2-3 servicios principales con mayor tamaño y el resto más pequeños. Diferencia visualmente esta página de la otra landing. |
| Alternativa premium: **Feature Sections > With product screenshot panel** | Para los 2-3 servicios principales (GBP, auditoría, reseñas) con screenshot a un lado y features al otro. |

**Componente:** NUEVO — `ServiciosSeoLocal.astro` (basado en el patrón de `FreelanceVsAgencia.astro`)

Servicios a mostrar (7 cards con icono Lucide cada una):
1. 🔍 Auditoría SEO local → `Search` icon
2. 📍 Optimización Google Business Profile → `MapPin` icon
3. 🔑 Palabras clave geolocalizadas → `Key` icon
4. 🌐 SEO On Page local → `Globe` icon
5. 📝 Contenido geolocalizado → `FileText` icon
6. 🔗 Link building y citaciones NAP → `Link` icon
7. ⭐ Gestión de reseñas → `Star` icon

---

### 4. PROCESO/TIMELINE — "De invisible en Google Maps a captar clientes cada semana"

| Bloque recomendado | Justificación |
|---|---|
| **✅ Stats > Timeline** | Perfecto para mostrar fases con plazos. Encaja con el componente `Timeline.astro` que ya tienes. |
| Alternativa: **Stats > Stepped** | Si prefieres un formato más compacto tipo "paso 1, paso 2..." |

**Componente existente:** `Timeline.astro` → **REUTILIZAR** con props adaptadas al SEO local.

```
upheading: "Proceso de posicionamiento en Google Maps"
heading: "De invisible en Maps a captar clientes cada semana"
```

Fases:
- Semanas 1-2: Auditoría + estrategia
- Semanas 3-6: Optimización GBP + web + citaciones
- Mes 2-3: Contenido local + link building + reseñas
- Mes 3-6: Consolidación + seguimiento

---

### 5. SEO LOCAL vs GOOGLE ADS — Sección diferenciadora

| Bloque recomendado | Justificación |
|---|---|
| **✅ Feature Sections > Offset 2x2 grid** | Dos columnas comparativas: izquierda SEO local, derecha Google Ads. Cada una con 3-4 puntos clave. Visual y escaneable. |
| Alternativa: **Content Sections > Two columns with screenshot** | Texto comparativo a un lado, tabla/gráfico al otro. |
| Alternativa simple: Reutilizar patrón de `FreelanceVsAgencia.astro` | Ya tienes una comparativa 3 columnas. Adaptar a 2 columnas: SEO local vs Ads. |

**Componente:** NUEVO — `SeoLocalVsAds.astro` (basado en estructura de `FreelanceVsAgencia.astro`)

Adaptar el grid de 3 cols a 2 cols. Misma estructura: Upheading + H2 + intro + cards comparativas.

---

### 6. TIPOS DE NEGOCIO — "Para qué tipo de negocios funciona el SEO local"

| Bloque recomendado | Justificación |
|---|---|
| **✅ Feature Sections > Centered 2x2 grid** | Grid de tarjetas con tipos de negocio. Sin imágenes, solo icono + título + descripción breve. 4-6 tipos de negocio. |
| Alternativa: **Bento Grids > Three column bento grid** | Más visual si quieres usar fotos de los sectores (restaurante, clínica, taller...). |
| Alternativa: **Logo Clouds** adaptado | En lugar de logos de empresas, iconos de sectores. Formato más compacto. |

**Componente:** NUEVO — `TiposNegocioLocal.astro`

Sectores:
- Restaurantes y hostelería
- Clínicas y salud
- Abogados y asesorías
- Tiendas y comercio
- Talleres y servicios técnicos
- Hoteles y turismo

---

### 7. PRECIOS — "Precios del servicio de SEO local en Barcelona"

| Bloque recomendado | Justificación |
|---|---|
| **✅ Pricing > Single price with details** | No vendes paquetes sino presupuesto a medida. Este bloque muestra un solo precio base con lista de lo que incluye. Consistente con tu `Pricing.astro` actual. |

**Componente existente:** `Pricing.astro` → **REUTILIZAR** con props adaptadas.

```
upheading: "Inversión en SEO local para tu negocio"
heading: "Solo inviertes en lo que funciona"
```

---

### 8. FAQs — "Preguntas frecuentes sobre SEO local en Barcelona"

| Bloque recomendado | Justificación |
|---|---|
| **✅ FAQs > Centered accordion** | Es probablemente lo que ya usa tu `Faq.astro`. Acordeón centrado con schema FAQPage. Consistencia total. |
| Alternativa: **FAQs > Offset with supporting text** | FAQ a la derecha, texto introductorio a la izquierda. Más espacio visual. |

**Componente existente:** `Faq.astro` → **REUTILIZAR** con items de SEO local.

---

### 9. CTA FINAL — "El primer paso es gratis"

| Bloque recomendado | Justificación |
|---|---|
| **✅ CTA > Simple centered** | Lo que ya usa tu `Cta.astro` con layout='centered'. Consistencia visual. |
| Alternativa para variedad: **CTA > Centered on dark panel** | Panel oscuro para romper visualmente y crear más urgencia. Diferencia esta landing de la otra. |

**Componente existente:** `Cta.astro` → **REUTILIZAR**.

---

## Resumen visual: flujo de la página

```
┌─────────────────────────────────────────────┐
│  1. HERO (Simple centered)                  │ ← HeroLanding.astro [REUTILIZAR]
│     H1 + CTA                                │
├─────────────────────────────────────────────┤
│  2. QUÉ ES SEO LOCAL (Split with image)     │ ← NUEVO: SeoLocalExplainer.astro
│     H2 + H3 + H3                            │
├─────────────────────────────────────────────┤
│  3. SERVICIOS (3 col with large icons)      │ ← NUEVO: ServiciosSeoLocal.astro
│     H2 + 7× H3 cards                        │
├─────────────────────────────────────────────┤
│  4. PROCESO (Timeline)                      │ ← Timeline.astro [REUTILIZAR]
│     H2 + 4 fases                             │
├─────────────────────────────────────────────┤
│  5. SEO LOCAL vs ADS (Offset 2x2 grid)      │ ← NUEVO: SeoLocalVsAds.astro
│     H2 + comparativa 2 cols                  │
├─────────────────────────────────────────────┤
│  6. TIPOS DE NEGOCIO (Centered 2x2 grid)    │ ← NUEVO: TiposNegocioLocal.astro
│     H2 + 6 cards sectores                    │
├─────────────────────────────────────────────┤
│  7. PRECIOS (Single price with details)     │ ← Pricing.astro [REUTILIZAR]
│     H2 + H3 + H3                            │
├─────────────────────────────────────────────┤
│  8. FAQs (Centered accordion)               │ ← Faq.astro [REUTILIZAR]
│     H2 + 6 preguntas                         │
├─────────────────────────────────────────────┤
│  9. CTA FINAL (Simple centered)             │ ← Cta.astro [REUTILIZAR]
│     Heading + WhatsApp + formulario          │
└─────────────────────────────────────────────┘
```

## Balance componentes

| Tipo | Cantidad |
|---|---|
| **Reutilizados** (solo cambias props) | 5 — HeroLanding, Timeline, Pricing, Faq, Cta |
| **Nuevos** (basados en bloques Tailwind Plus) | 4 — SeoLocalExplainer, ServiciosSeoLocal, SeoLocalVsAds, TiposNegocioLocal |

**Esfuerzo estimado:** Los 4 nuevos se basan en patrones que ya existen en tu código (FreelanceVsAgencia y Services). El 80% es cambiar contenido y ajustar grid. No necesitas componentes desde cero.
