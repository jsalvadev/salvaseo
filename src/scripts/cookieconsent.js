import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

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
      position: 'bottom center',
      equalWeightButtons: false,
      flipButtons: false
    }
  },
  
  onFirstConsent: ({ cookie }) => {
    if (cookie.categories.includes('analytics')) {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      })
    }
  }
})
