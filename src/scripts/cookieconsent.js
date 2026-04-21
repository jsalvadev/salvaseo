import * as CookieConsent from 'vanilla-cookieconsent'

CookieConsent.run({
  categories: {
    necessary: {
      enabled: true,
      readOnly: true
    },
    analytics: {}
  },
  
  language: {
    default: 'es',
    translations: {
      es: {
        consentModal: {
          title: 'Cookies',
          description: 'Utilizamos cookies para mejorar tu experiencia y analizar el tráfico.',
          acceptAllBtn: 'Continuar'
        }
      }
    }
  },
  
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom right',
      equalWeightButtons: false,
      flipButtons: false
    }
  },
  
  // Visita recurrente: el usuario ya había dado consentimiento
  onConsent: ({ cookie }) => {
    if (cookie.categories.includes('analytics')) {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      })
    }
  },

  // Primera vez que acepta en este dispositivo
  onFirstConsent: ({ cookie }) => {
    if (cookie.categories.includes('analytics')) {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      })
    }
  }
})
