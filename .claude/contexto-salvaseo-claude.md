# Contexto SalvaSEO · Blog y contenidos
> Pega este documento al inicio de cada sesión nueva con Claude para retomar el trabajo sin perder contexto.

---

## Quién soy

Soy **Salva**, consultor SEO local en Barcelona. Mi web es **salvaseo.com**. Ofrezco servicios de posicionamiento web y SEO local para autónomos y pequeños negocios, desde **350€/mes sin permanencia**.

---

## Mi buyer persona: Paco, el autónomo de servicios locales

**Perfil:**
- Autónomo o microempresa de 1–3 personas en una ciudad (actualmente Barcelona y área metropolitana)
- Servicios típicos: instalación de ventanas, jardinería, tala de árboles, pintura, cerrajería, fontanería, persianas, reformas, fisioterapia, academias, talleres mecánicos, clínicas, etc.
- Edad: 38–54 años. Mayoritariamente hombre
- Puede tener furgoneta rotulada o local físico o ninguna de las dos cosas
- Puede tener web o no tenerla, y puede tener ficha de Google Maps o no. En cualquiera de los casos, no le saca partido a ninguna de las dos
- Factura entre 40.000€ y 120.000€ al año
- Decisor único: si confía, cierra. Sin comités ni aprobaciones

**Nota sobre la ciudad:** Barcelona es el mercado actual de Salva, pero el perfil de Paco existe en cualquier ciudad española. Los artículos se escriben con Barcelona como referencia, pero la estructura sirve para cualquier mercado local cambiando solo la ciudad.

**Su realidad:**
- Depende 100% del boca a boca. Cuando para, para el trabajo
- Tiene web pero no recibe llamadas desde ahí
- No sabe qué es el SEO ni cuánto cuesta ni si funciona
- Desconfía: ya le han vendido cosas que no funcionaron
- No tiene tiempo: está en la furgoneta todo el día
- Su métrica es simple: quiere que le llamen más por teléfono

**Su vocabulario (usar en los artículos):**
"que me llamen" · "salir en Google" · "más clientes" · "mi web" · "sin engaños" · "que funcione" · "¿cuánto cuesta?" · "por recomendación" · "no tengo tiempo" · "trabajo todo el año"

**Regla de oro:** No hablarle de SEO. Hablarle de más llamadas y más clientes.

---

## Tono de los artículos

- Salva hablando directamente con Paco. Primera persona
- Cercano, sin tecnicismos. Como explicárselo a un amigo
- Los ejemplos son de cualquier negocio de servicios locales: fontaneros, instaladores, jardineros, fisioterapeutas, talleres mecánicos, clínicas, academias, electricistas, cerrajeros, mudanzas, limpieza, dentistas, abogados de barrio, etc. Lo que NO vale: e-commerce, blogs, infoproductos o negocios sin presencia local.
- Honesto sobre los plazos (3–6 meses) y las expectativas
- Nunca prometer el #1 en Google

---

## Estructura del blog (convenciones de [slug].astro)

**Longitud:** 1.000–1.500 palabras

**Formato:**
- Sin H1 en el cuerpo (lo pone el layout automáticamente)
- Primer párrafo directo al tema, sin heading
- H2 para secciones principales
- H3 para subsecciones
- Negritas para términos clave dentro del texto
- Tablas comparativas si el tema lo pide
- Cierre siempre con CTA al diagnóstico gratuito o página de servicio

**Imágenes:**
Se marcan así dentro del cuerpo:
```markdown
![Texto alternativo SEO](/blog/nombre-archivo.webp)
<!-- IMAGEN: descripción de lo que debe mostrar, estilo, contexto -->
```
El comentario se borra antes de publicar. Sirve como briefing para buscar o generar la imagen.

---

## Frontmatter completo

```yaml
---
title: "Título del artículo"
description: "Meta description (~155 chars)"
pubDate: 2026-04-23T08:00:00
updatedDate: 2026-04-25        # opcional
tags: ["tag 1", "tag 2"]
readingTime: 7                 # número entero, minutos
draft: false
image:
  src: "/blog/nombre.webp"
  alt: "Descripción imagen"
relatedServices:
  - label: "Texto enlace"
    href: "/ruta/"
---
```

**Servicios relacionados disponibles:**

| label | href |
|---|---|
| Posicionamiento Web Barcelona | `/posicionamiento-web-barcelona/` |
| SEO Local Barcelona | `/seo-local-barcelona/` |
| Presupuesto SEO Barcelona | `/presupuesto-seo-barcelona/` |

---

## Estructura de enlazado interno

Cada artículo tiene que incluir obligatoriamente:

**Dentro del cuerpo del texto:**
- 1 enlace con texto ancla relacionado con "conseguir más llamadas y más clientes" o similar → `/posicionamiento-web-barcelona/`
- 1 enlace con texto ancla relacionado con "puedo hacerlo sin compromiso" o similar → `/` (homepage)

Ambos enlaces van en el párrafo de cierre del artículo, de forma natural dentro del texto. Ejemplo real:
> "Saber lo que está pasando en tu web es el primer paso. El segundo es saber qué hacer con esa información para [conseguir más llamadas y más clientes](/posicionamiento-web-barcelona/). Si quieres que revise cómo está funcionando tu web en Google y te explique qué oportunidades concretas tienes en tu sector, [puedo hacerlo sin compromiso](/). Te digo exactamente qué está pasando y qué habría que cambiar, en lenguaje normal."

**Al final del artículo (campo relatedServices del frontmatter):**
- Botón 1 → `Posicionamiento Web Barcelona` / `/posicionamiento-web-barcelona/`
- Botón 2 → `SEO Local Barcelona` / `/seo-local-barcelona/`

---



1. Salva pasa transcripción + keyword objetivo a Claude
2. Claude genera el artículo `.md` listo para publicar
3. Salva sube el `.md` al repositorio de GitHub
4. Cloudflare Pages despliega automáticamente
5. Google indexa solo vía sitemap

**Google Search Console** se usa de forma puntual para acelerar la indexación de algún artículo concreto, no es obligatorio hacerlo cada vez.

---



1. Salva pasa la transcripción de un vídeo de YouTube (principalmente canal de Dani Llamazares)
2. Claude extrae la idea principal y la estructura, descarta lo que no aplica a Paco
3. Claude reescribe completamente en tono SalvaSEO (no copia el vídeo)
- **1 artículo por semana**, publicación los martes a las 8:00h
- El `pubDate` siempre con hora: `2026-04-29T08:00:00`
- Trabajo en lotes de 4 artículos para programar un mes de golpe

**Lo que se descarta siempre de las transcripciones:**
- Herramientas de pago (Dinorank, Ahrefs, SEMrush, etc.)
- Flujos técnicos complejos que Paco nunca va a ejecutar
- Menciones a e-commerce, blogs o proyectos que no sean negocios locales de servicios
- Autopromoción del autor del vídeo
- Años concretos (2023, 2024, 2025...). Se sustituyen por "actualmente", "hoy en día" o se elimina la referencia temporal

---

## Artículo de referencia publicado

**Título:** ¿Qué es el SEO y para qué sirve?
**Slug:** /blog/que-es-el-seo/
**Categoría:** fundamentos-seo

Sirve como ejemplo de tono, estructura y nivel de profundidad esperado.

---

## Páginas de servicio de salvaseo.com

| Página | URL |
|---|---|
| Homepage | `/` |
| Posicionamiento Web | `/posicionamiento-web-barcelona/` |
| SEO Local | `/seo-local-barcelona/` |
| Presupuesto | `/presupuesto-seo-barcelona/` |

---

## Frecuencia de publicación

- **1 artículo por semana**
- Día: martes o miércoles
- Hora: entre 8h y 10h
- Lotes de 4 artículos para programar un mes de golpe
