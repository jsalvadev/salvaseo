export interface ExplainerItem {
  icon: string
  title: string
  description: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface TimelineBullet {
  icon: string
  emphasis: string
  text: string
}

export interface TimelinePhase {
  title: string
  intro: string
  bullets: TimelineBullet[]
  outro: string
}

export interface VsAdsColumn {
  title: string
  icon: string
  accentClass: string
  ringClass: string
  noteClass: string
  note: string
  bullets: { icon: string; emphasis: string; text: string }[]
}

export interface BusinessType {
  icon: string
  title: string
  description: string
}

export const seoLocalExplainerItems: ExplainerItem[] = [
  {
    icon: 'search',
    title: 'Canal distinto, cliente distinto.',
    description: 'El SEO local te pone en Google Maps cuando alguien busca tu oficio cerca. Son los clientes de tu zona, listos para llamar hoy.',
  },
  {
    icon: 'layoutGrid',
    title: 'El Local Pack de Google captura la mayoría de clics.',
    description: 'Ese bloque de mapa con tres negocios se lleva la mayoría de las llamadas. Mi trabajo es que uno de esos tres seas tú.',
  },
  {
    icon: 'mapPin',
    title: 'Tres factores que determinan si Google muestra tu negocio o el de tu competidor.',
    description: 'Google decide a quién mostrar según lo cerca que estés, lo que ofreces y cuántas reseñas tienes. Trabajo los tres para que aparezcas tú.',
  },
]

export const seoLocalServices: ServiceItem[] = [
  {
    icon: 'searchCheck',
    title: 'Auditoría SEO local',
    description: 'Miro cómo está tu ficha de Google Maps, tu web y dónde apareces en internet. Te digo exactamente qué está fallando.',
  },
  {
    icon: 'mapPin',
    title: 'Optimización de Google Business Profile',
    description: 'Pongo tu ficha de Google Maps al día: fotos, horarios, categoría, descripciones. Todo lo que Google necesita para mostrarte antes.',
  },
  {
    icon: 'key',
    title: 'Investigación de palabras clave locales',
    description: 'Averiguo qué palabras exactas escribe en Google alguien que busca tu oficio en tu zona. Luego las usamos para que te encuentren a ti.',
  },
  {
    icon: 'globe',
    title: 'SEO On Page con enfoque local',
    description: 'Adapto tu web para que Google sepa qué servicio ofreces y en qué barrios o municipios trabajas.',
  },
  {
    icon: 'fileText',
    title: 'Creación de contenido geolocalizado',
    description: 'Creo páginas en tu web para cada servicio y zona donde trabajas. Así apareces cuando alguien busca en su barrio concreto.',
  },
  {
    icon: 'link',
    title: 'Construcción de enlaces locales y citaciones NAP',
    description: 'Pongo tu negocio en directorios y webs de la zona. Google lo usa para confirmar que eres un negocio real y de confianza.',
  },
  {
    icon: 'star',
    title: 'Gestión de reseñas y reputación online',
    description: 'Más reseñas y mejor puntuación hacen que Google te suba y que el cliente que te encuentra decida llamarte a ti y no a otro.',
  },
]

export const seoLocalTimelinePhases: TimelinePhase[] = [
  {
    title: 'Auditoría SEO local y diagnóstico inicial',
    intro: 'Te digo por qué no apareces cuando buscan tu oficio en tu zona y qué voy a hacer primero para cambiarlo.',
    bullets: [
      { icon: 'scale', emphasis: 'Diagnóstico competitivo.', text: 'Miro quién aparece antes que tú y por qué.' },
      { icon: 'barChart3', emphasis: 'Demanda local real.', text: 'Qué palabras exactas escribe en Google alguien que busca tu oficio cerca.' },
      { icon: 'badgeCheck', emphasis: 'Bloqueos identificados.', text: 'Los errores de tu ficha de Google Maps y tu web que te están frenando.' },
    ],
    outro: 'Sales de la llamada sabiendo exactamente qué está fallando y qué se hace primero.',
  },
  {
    title: 'Optimización de Google Business Profile',
    intro: 'Pongo tu ficha de Google Maps a punto para que Google la muestre más y quien la vea te llame.',
    bullets: [
      { icon: 'target', emphasis: 'Encaje exacto con tu cliente.', text: 'Categoría, servicios y descripción alineados con lo que busca tu cliente.' },
      { icon: 'calendarClock', emphasis: 'Señales de frescura activas.', text: 'Fotos, publicaciones y actualizaciones para que Google vea que tu negocio está activo.' },
      { icon: 'trendingUp', emphasis: 'Conversión optimizada.', text: 'El texto de tu ficha escrito para que quien la lea, llame.' },
    ],
    outro: 'Tu ficha deja de estar "creada" y empieza a traerte clientes.',
  },
  {
    title: 'Autoridad local y reputación online',
    intro: 'Trabajo fuera de tu ficha para que Google confíe en tu negocio y te ponga por encima de tu competencia.',
    bullets: [
      { icon: 'layers3', emphasis: 'NAP consistente.', text: 'Tu nombre, dirección y teléfono iguales en todos los sitios donde apareces online. Google lo necesita para fiarse de ti.' },
      { icon: 'lineChart', emphasis: 'Más reseñas, mejor ranking.', text: 'Más reseñas y mejor puntuación = más arriba en Google Maps.' },
      { icon: 'badgeCheck', emphasis: 'Presencia digital validada.', text: 'Te pongo en directorios y webs de la zona para que Google confirme que eres un negocio real.' },
    ],
    outro: 'Tu posición en Google Maps no depende de un solo factor. Eso la hace resistente.',
  },
  {
    title: 'Seguimiento y escalado',
    intro: 'Resultados medibles cada mes: llamadas, contactos y posiciones reales que confirman si la inversión en consultoría SEO local avanza como debe.',
    bullets: [
      { icon: 'chartNoAxesColumn', emphasis: 'Métricas que importan.', text: 'Impresiones, clics, llamadas y formularios por zona, sin gráficos de vanidad. Tráfico cualificado que se traduce en crecimiento real.' },
      { icon: 'target', emphasis: 'Prioridad por retorno.', text: 'Las acciones con mayor impacto en tu mercado local van primero, sin desviar recursos. Tu presupuesto SEO local siempre orientado a resultados.' },
      { icon: 'trendingUp', emphasis: 'Crecimiento progresivo.', text: 'Lo que funciona en un servicio o zona se amplía. El objetivo es convertir cada mejora en más captación sostenida.' },
    ],
    outro: 'La visibilidad local se convierte en un sistema continuo de captación de clientes potenciales, no en acciones aisladas.',
  },
]

export const seoLocalVsAdsLeftColumn: VsAdsColumn = {
  title: 'SEO local',
  icon: 'trendingUp',
  accentClass: 'bg-teal',
  ringClass: 'ring-teal/30',
  noteClass: 'bg-cream',
  note: '<strong>Para:</strong> autónomos que quieren trabajo estable todo el año sin depender del boca a boca ni de pagar anuncios cada mes.',
  bullets: [
    { icon: 'repeat', emphasis: 'Activo acumulativo.', text: 'Cada mes que pasa, tu posición en Google mejora. El trabajo de hoy sigue trayéndote clientes en 6 meses.' },
    { icon: 'piggyBank', emphasis: 'Coste decreciente por lead.', text: 'Cuanto más tiempo llevas, más clientes te llegan sin pagar más.' },
    { icon: 'shieldCheck', emphasis: 'Confianza del usuario.', text: 'La mayoría de la gente ignora los anuncios y llama al que aparece en el mapa de forma natural.' },
  ],
}

export const seoLocalVsAdsRightColumn: VsAdsColumn = {
  title: 'Google Ads',
  icon: 'zap',
  accentClass: 'bg-gray-500',
  ringClass: 'ring-gray-200',
  noteClass: 'bg-gray-50',
  note: '<strong>Para:</strong> cuando necesitas clientes esta semana, no en 3 meses.',
  bullets: [
    { icon: 'clock', emphasis: 'Resultados inmediatos.', text: 'Apareces en la primera posición desde el día uno. Útil para campañas puntuales o lanzamientos.' },
    { icon: 'piggyBank', emphasis: 'Coste constante por clic.', text: 'Cada visita tiene un precio fijo. Cuando cortas el presupuesto, desapareces al instante de los resultados.' },
    { icon: 'shieldCheck', emphasis: 'Visibilidad vinculada al presupuesto activo.', text: 'En cuanto paras de pagar, desapareces. No queda nada.' },
  ],
}

export const seoLocalBusinessTypes: BusinessType[] = [
  {
    icon: 'utensilsCrossed',
    title: 'Restaurantes y hostelería',
    description: 'Quien busca "restaurante italiano Eixample" quiere reservar hoy. Aparecer en Google Maps marca la diferencia entre una mesa llena o vacía.',
  },
  {
    icon: 'stethoscope',
    title: 'Clínicas y salud',
    description: 'Dentistas, fisioterapeutas, psicólogos, veterinarios. El paciente busca <strong>cercanía y confianza</strong>: reseñas, reputación online y ficha completa marcan la diferencia.',
  },
  {
    icon: 'scale',
    title: 'Abogados y asesorías',
    description: 'Quien busca "abogado laboralista Barcelona" ya ha decidido que necesita uno. Solo falta que te encuentre a ti.',
  },
  {
    icon: 'shoppingBag',
    title: 'Tiendas y comercio',
    description: 'Floristería, tienda de ropa, ferretería, óptica. El cliente que busca <strong>"cerca de mí"</strong> quiere comprar hoy, no comparar durante semanas.',
  },
  {
    icon: 'wrench',
    title: 'Talleres y servicios técnicos',
    description: 'El que aparece primero en Maps es el que recibe la llamada. Trabajo para que ese seas tú.',
  },
  {
    icon: 'hotel',
    title: 'Hoteles y turismo',
    description: 'Hoteles, apartamentos turísticos, tours y experiencias. Barcelona recibe <strong>millones de turistas</strong> que buscan en Google Maps antes de reservar.',
  },
]
