export const siteConfig = {
  brand: {
    name: "SalvaSEO",
    fullName: "SalvaSEO - Consultor SEO en Barcelona",
  },
  contact: {
    phone: {
      e164: "+34692051399",
      whatsapp: "34692051399",
      display: "+34 692 051 399",
      shortDisplay: "+34 692 051 399",
    },
    email: "salvadorjesus.seo@gmail.com",
  },
  whatsapp: {
    defaultMessage: "Salva, mi página web es invisible en Barcelona.",
    tooltipText: "¿Más clientes con SEO? Escríbeme",
  },
  navigation: {
    primary: [
      { label: "Sobre mí", href: "/#sobre-mi" },
      { label: "Precios", href: "/presupuesto-seo-barcelona/" },
    ],
    services: [
      {
        label: "Posicionamiento Web Barcelona",
        href: "/posicionamiento-web-barcelona/",
      },
      { label: "SEO Local Barcelona", href: "/seo-local-barcelona/" },
    ],
    legal: [
      { label: "Aviso Legal", href: "/aviso-legal/" },
      { label: "Política de Privacidad", href: "/politica-privacidad/" },
      { label: "Política de Cookies", href: "/politica-cookies/" },
    ],
  },
  footer: {
    workAreas: ["Barcelona", "Área metropolitana"],
    schedule: ["Lunes a Viernes: 09:00 - 18:00"],
  },
  social: {
    linkedin: "https://www.linkedin.com/in/salvaseo/",
    googleBusiness: "https://www.google.com/maps/place/?cid=5370983499387165545",
  },
  pricing: {
    local: 350,
    total: 550,
  },
} as const;

export const buildWhatsAppHref = (message: string = siteConfig.whatsapp.defaultMessage) =>
  `https://wa.me/${siteConfig.contact.phone.whatsapp}?text=${encodeURIComponent(message)}`;
