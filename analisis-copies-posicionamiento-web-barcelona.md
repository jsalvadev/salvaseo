# Análisis de Copies — /posicionamiento-web-barcelona

Análisis sección por sección del copywriting de la landing page. Evalúo tono, persuasión, claridad, objeciones y coherencia del mensaje global.

---

## Visión general

El tono general de la página es **directo, claro y sin humo**. Eso está bien: encaja con el perfil de un consultor freelance que se diferencia de las agencias genéricas. El "yo hablo claro, tú decides" está presente en todo el texto y eso da coherencia.

Dicho esto, hay patrones que se repiten demasiado y zonas donde el copy pierde fuerza o se vuelve redundante. Vamos sección por sección.

---

## 1. Hero

**Texto actual:**
> *Tu web no tiene un problema de diseño. Tiene un problema de visibilidad.*
>
> *Si Google no te muestra, da igual lo buena que sea. Cada día, cientos de personas en Barcelona buscan exactamente lo que tú vendes. La pregunta es si te están encontrando a ti o a otro.*

**Valoración: 8/10** — Es el mejor copy de la página.

Lo que funciona:
- El headline con estructura "No X. Sino Y" crea contraste y sorpresa.
- El subtítulo hace tangible el problema ("cientos de personas buscan...").
- Cierra con pregunta retórica que apunta al dolor real.

Lo que se puede mejorar:
- "Cientos de personas" es vago. Si puedes cuantificar con datos reales (aunque sean aproximados), gana credibilidad: *"Cada mes, más de 5.000 búsquedas en Barcelona incluyen lo que tú vendes."*
- El CTA "Descubre qué le falta a tu web" es correcto, pero podrías testear uno más directo: *"Analiza tu web gratis"* o *"Solicita tu diagnóstico gratuito"*.

**CTA secundario "Ver el proceso →"** apunta a `#trabajo-conmigo` pero ese ID no existe en la página (el timeline tiene `id="proceso"`). **Bug funcional.**

---

## 2. Servicios (Services)

**Texto actual:**
> *Servicios de posicionamiento web: de invisible a inevitable*
>
> *No necesitas entender el SEO. Necesitas a alguien que lo entienda por ti. Así funciona un servicio profesional de posicionamiento web que lleva tu página de invisible a la primera página de Google.*

**Valoración: 6/10**

Lo que funciona:
- "De invisible a inevitable" es un buen claim. Memorable.
- "No necesitas entender el SEO" desactiva la barrera de entrada.

Problemas:
- **Los subtextos de cada fase son demasiado genéricos.** "Antes de invertir tiempo o dinero, necesitas saber si tu web puede posicionar y por dónde empezar" es verdad, pero no vende nada. El visitante piensa "vale, ¿y?"
- **Las listas de servicios son etiquetas sueltas** (Keyword Research, Arquitectura, Auditoría técnica...) sin contexto. Un empresario local no sabe qué es "Interlinking" o "Link Baiting". Esto contradice la promesa de "no necesitas entender el SEO".
- **Falta el beneficio de cada fase.** ¿Qué gana el usuario con el análisis inicial? ¿Qué pasa después del SEO On Page? El copy debería traducir cada servicio técnico a un resultado tangible.

Sugerencias:
- Bajo "Análisis inicial": *"Sabes exactamente qué frena tu web y qué hacer primero para que Google te muestre."*
- Bajo "SEO On Page": *"Google entiende a qué te dedicas, dónde estás y cuándo mostrarte. Más visitas de personas que buscan lo que vendes."*
- Bajo "SEO Off Page": *"Tu web gana peso frente a la competencia. Google te prioriza porque otros sitios de confianza hablan de ti."*
- Traducir las listas a lenguaje humano o añadir una línea explicativa debajo de cada punto.

---

## 3. Timeline (Proceso)

**Texto actual:**
> *De invisible a primera página: así es el proceso*

**Valoración: 7/10** — Es sólido pero con repeticiones.

Lo que funciona:
- La estructura en 3 pasos da claridad y reduce la incertidumbre ("sé lo que voy a recibir").
- Los bold en cada paso actúan como mini-headlines que se pueden escanear.
- Las listas con bullets concretan lo que incluye cada fase.

Problemas:
- **"De invisible a primera página" repite el mismo concepto del H2 de servicios** ("de invisible a inevitable"). Usar la misma metáfora dos veces seguidas diluye su impacto. Cambiar uno de los dos.
- **El paso 1 y la sección de servicios "Análisis inicial" dicen casi lo mismo.** El usuario lee básicamente el mismo mensaje dos veces. Hay que diferenciarlos: uno es el QUÉ (servicio) y otro es el CÓMO (proceso).
- **"No dependes de promesas. Dependes de un plan con lógica que puedes entender y cuestionar."** Esta frase es buena, pero "cuestionar" puede sonar confrontacional. Mejor: *"...un plan con lógica que puedes entender y validar."*
- **El CTA del final "Pide tu informe gratis"** enlaza a `/#contacto`. Si el usuario está convencido aquí, enviarlo a otra página rompe el momento. Debería ir a un formulario en esta misma landing o al WhatsApp directamente.

---

## 4. Pricing (Precios)

**Texto actual:**
> *Precios de posicionamiento web: lo que nadie te explica*
>
> *Has visto packs de SEO a 99 €/mes y presupuestos de 2.000 € sin explicación...*
> *Un servicio de posicionamiento web profesional para pymes y negocios locales en Barcelona parte de **desde 400 €/mes**...*

**Valoración: 7.5/10** — Buen copy comercial con un par de ajustes pendientes.

Lo que funciona:
- El headline "lo que nadie te explica" genera curiosidad y posiciona contra la competencia.
- Los rangos de precio (99€ vs 2.000€) crean un marco de referencia antes de dar tu precio. Buen anchoring.
- "No es lo mismo posicionar una peluquería en Gràcia que una clínica dental en el Eixample" — excelente. Localiza, concreta y justifica la variabilidad de precio.
- "Prefiero un cliente bien informado que uno mal vendido" — frase potente que refuerza el posicionamiento de consultor honesto.

Problemas:
- **"parte de *desde* 400 €/mes"** — Doble "desde". Hay que quitar uno: *"parte de 400 €/mes"* o *"desde 400 €/mes"*.
- **Los 4 cards de objeciones ("¿Y si no funciona?", etc.) repiten mensajes que ya se dicen arriba.** "Sin permanencias" aparece en la lista Y en el card. "Presupuesto desglosado" aparece en el texto Y en el card. Esto no es necesariamente malo (la repetición refuerza), pero los cards podrían ir un paso más allá en vez de reiterar.
- **Falta el ancla emocional del "cuánto pierdes por no aparecer".** Estás vendiendo precio pero no coste de oportunidad. Una línea tipo: *"¿Cuántos clientes te están encontrando a tu competencia este mes porque tú no apareces?"* le daría más urgencia.

---

## 5. Freelance vs Agencia

**Texto actual:**
> *¿Agencia de posicionamiento web o consultor freelance en Barcelona?*

**Valoración: 6.5/10**

Lo que funciona:
- El H2 como pregunta está bien para SEO y para el usuario que se hace esa pregunta.
- "Posicionamiento web para pymes y negocios locales" en el subtítulo es SEO-friendly.
- Los 3 cards (Trato directo, Decisiones rápidas, Inversión con sentido) son claros.

Problemas:
- **El primer párrafo valida a la agencia ("tiene equipo, estructura... tiene sentido").** Esto es elegante y honesto, PERO en una landing de venta no deberías reforzar la opción competidora. El lector que tenía dudas ahora piensa "ah, quizás sí necesito una agencia". Mejor reencuadrar: *"Una agencia tiene equipo grande y estructura de empresa. Lo que no siempre tiene es tiempo para tu proyecto."*
- **"Hablas directo con quien analiza tu web, diseña la estrategia de posicionamiento y la ejecuta"** — Bueno, pero largo. Versión más corta: *"Hablas con quien hace el trabajo. Sin intermediarios."*
- **Los cards son correctos pero genéricos.** "Trato directo — Hablas con quien hace el trabajo" podría ser de cualquier freelance de cualquier sector. Falta lo específico del SEO. Por ejemplo: *"Trato directo — No explicas tu negocio a un account manager que luego se lo explica al técnico. Hablamos tú y yo."*
- **El CTA "Hablemos de tu proyecto" apunta a `#contacto` que no existe en esta página.**

---

## 6. SEO Local Barcelona

**Texto actual:**
> *Posicionamiento web local en Barcelona y área metropolitana*

**Valoración: 7.5/10** — De las secciones mejor escritas.

Lo que funciona:
- "Decides tú si apareces o aparece tu competencia" — línea fuerte.
- "No es lo mismo posicionar una clínica dental en el Eixample que un taller mecánico en Sabadell" — concreta y localiza. Muy bueno.
- Las 4 ciudades (Sabadell, Badalona, Terrassa, Lleida) están bien diferenciadas con argumentos distintos.
- Badalona: "Muchas búsquedas desde Badalona muestran resultados de Barcelona ciudad" — insight real que demuestra conocimiento.

Problemas:
- **"No es lo mismo posicionar una clínica dental en el Eixample que un taller mecánico en Sabadell"** — Esta frase (o muy similar) aparece TAMBIÉN en la sección de pricing ("No es lo mismo posicionar una peluquería en Gràcia que una clínica dental en el Eixample"). Dos veces el mismo recurso retórico con los mismos ejemplos pierde fuerza. Cambiar uno.
- **Lleida no es área metropolitana de Barcelona.** Incluirla bajo "Barcelona y área metropolitana" queda forzado. Si quieres cubrir esa keyword, quizás el H2 debería ser algo como *"Posicionamiento web local en Barcelona, área metropolitana y Cataluña"* o simplemente *"SEO local en tu zona"*.
- **Falta un CTA al final de esta sección.** El usuario interesado en SEO local para su zona no tiene dónde hacer clic.

---

## 7. FAQs

**Valoración: 7/10**

Lo que funciona:
- Las preguntas están bien elegidas: son las que un cliente real haría.
- Las respuestas son concisas y directas.
- "La pregunta no es si puedes, sino cuánto te cuesta cada mes no aparecer en Google mientras aprendes" — frase muy buena.
- SEO y SEM bien explicados sin tecnicismos.

Problemas:
- **"Otras veces sí hace falta cambios"** — Error gramatical. Debería ser *"hace falta hacer cambios"* o *"hacen falta cambios"*.
- **La FAQ "¿Qué pasa si dejo de trabajar el SEO?"** tiene una respuesta tibia. "No desapareces de un día para otro" no da seguridad. Mejor reencuadrar hacia lo positivo: *"Lo que has construido no se pierde de golpe. Pero tu competencia sigue trabajando. La ventaja del SEO frente a la publicidad es que los resultados se mantienen mejor, y si lo mantienes, se acumulan mes a mes."*

---

## 8. CTA Final

**Texto actual:**
> *Tu próximo paso*
>
> *Ya sabes qué frena tu web y cómo se soluciona. El análisis inicial es gratis, sin compromiso y sin permanencias.*

**Valoración: 6/10**

Problemas:
- **"Tu próximo paso" es genérico.** Un CTA final debería cerrar con la emoción acumulada de toda la página. Algo tipo: *"Tu competencia ya aparece en Google. Ahora te toca a ti."*
- **"Ya sabes qué frena tu web y cómo se soluciona"** — El usuario NO sabe qué frena su web todavía. Eso es lo que descubrirá con el análisis. La frase debería ser: *"Ahora sabes cómo funciona. El siguiente paso es descubrir qué le falta a tu web."*
- **Enlaza a `/#contacto`** de nuevo. Mismo problema que el resto de CTAs.

---

## Patrones globales que corregir

### 1. Repetición de conceptos
Las mismas ideas aparecen 3-4 veces en diferentes secciones:
- "Sin permanencias / sin letra pequeña / sin compromiso" → aparece en Hero (implícito), Pricing (x2), CTA final y FAQ
- "El análisis es gratis" → aparece en Pricing, Timeline, CTA final
- "De invisible a [primera página/inevitable]" → Services H2 + Timeline H2
- "No es lo mismo una clínica/peluquería en el Eixample que un taller en Sabadell/Badalona" → Pricing + SEO Local

Cierta repetición refuerza, pero tanta repetición hace que el lector sienta que la página dice lo mismo de 4 formas distintas. Solución: elegir UNA sección como la "sede" de cada mensaje y en las demás referenciarlo de forma más ligera.

### 2. Todos los CTAs envían fuera de la landing
Hay 5+ CTAs en la página y casi todos enlazan a `/#contacto` (la home). Esto rompe el funnel. Necesitas o un formulario en esta página o que los WhatsApp sean el CTA principal (ya lo son parcialmente).

### 3. El copy es bueno explicando "qué hago" pero débil en "qué ganas tú"
La página dedica mucho espacio a describir el proceso (informe → estrategia → ejecución) y poco a pintar el resultado. ¿Cómo cambia el negocio del cliente después de 6 meses de SEO? ¿Cuántas llamadas más recibe? ¿Cuánto deja de gastar en publicidad? Aunque no tengas casos reales aún, puedes proyectar escenarios realistas: *"Un negocio local bien posicionado en Barcelona puede recibir entre 20 y 50 contactos mensuales solo desde Google, sin pagar publicidad."*

### 4. Falta urgencia
No hay nada en la página que motive a actuar AHORA en vez de "ya lo miraré". Podrías añadir escasez real (límite de proyectos simultáneos como freelance) o coste de oportunidad (*"Cada mes que pasa sin posicionamiento, tu competencia te adelanta una posición más"*).

---

## Resumen de puntuaciones

| Sección | Puntuación | Veredicto rápido |
|---|---|---|
| Hero | 8/10 | El mejor copy. Ajustar CTA roto y cuantificar. |
| Services | 6/10 | Listas técnicas que el usuario no entiende. Falta traducir a beneficios. |
| Timeline | 7/10 | Sólido pero redundante con Services. Diferenciar. |
| Pricing | 7.5/10 | Buen copy comercial. Corregir "desde desde" y añadir coste de oportunidad. |
| Freelance vs Agencia | 6.5/10 | Valida demasiado a la competencia. Cards genéricos. |
| SEO Local | 7.5/10 | Bien localizado y diferenciado. Lleida desentona. Falta CTA. |
| FAQs | 7/10 | Buenas preguntas. Un error gramatical. Respuesta sobre dejar SEO es tibia. |
| CTA Final | 6/10 | Genérico. Premisa incorrecta. Necesita más punch. |
| **Media** | **6.9/10** | Buen tono, buen posicionamiento, pero repetitivo y con gaps de persuasión. |
