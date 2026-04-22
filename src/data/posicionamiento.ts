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

export const posicionamientoTimelinePhases: TimelinePhase[] = [
  {
    title: 'Miro por qué tu web no aparece',
    intro: 'Te digo qué está fallando y cuánta gente busca tu oficio en tu zona.',
    bullets: [
      { icon: 'scale', emphasis: 'Diagnóstico competitivo.', text: 'Comparativa de tu situación real frente a tus competidores directos.' },
      { icon: 'barChart3', emphasis: 'Demanda local real.', text: 'Cuánta gente busca tu oficio en tu zona cada mes.' },
      { icon: 'badgeCheck', emphasis: 'Viabilidad confirmada.', text: 'Te digo antes de empezar si tiene sentido invertir.' },
    ],
    outro: 'Auditoría gratuita con tus próximas acciones priorizadas por impacto.',
  },
  {
    title: 'Preparo tu web para que Google la muestre',
    intro: 'La estrategia desglosa las acciones necesarias para captar clientes en tu zona y sector.',
    bullets: [
      { icon: 'target', emphasis: 'Jerarquía de objetivos.', text: 'Empiezo por lo que antes te trae llamadas.' },
      { icon: 'trendingUp', emphasis: 'Estimación de visitas.', text: 'Te digo cuántas visitas puedes esperar y cuándo.' },
    ],
    outro: 'Cada paso del plan se valida antes de ejecutarlo. Si una acción no se alinea con tus objetivos de negocio, se descarta.',
  },
  {
    title: 'Mientras tú trabajas, tu web sube en Google',
    intro: 'Mientras gestionas tu negocio, tu web escala posiciones y consolida su autoridad en Google.',
    bullets: [
      { icon: 'chartNoAxesColumn', emphasis: 'Seguimiento de conversiones.', text: 'Cuento las llamadas y contactos que llegan desde Google.' },
      { icon: 'lineChart', emphasis: 'Evolución de posiciones.', text: 'Cada mes ves exactamente en qué has subido.' },
    ],
    outro: 'Tu web compite por el volumen de búsquedas de tu sector en Barcelona y lo convierte en contactos reales.',
  },
]
