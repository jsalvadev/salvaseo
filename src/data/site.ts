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
      { label: "Contacto", href: "/#contacto" },
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
    linkedin: "https://www.linkedin.com/in/salvadorjesus",
    googleBusiness:
      "https://www.google.com/maps/place/SalvaSEO+-+Consultor+SEO+en+Barcelona/@41.3926387,2.0577883,12z/data=!4m15!1m8!3m7!1s0x47b687095c96ad7:0x4a8991093774db69!2sSalvaSEO+-+Consultor+SEO+en+Barcelona!8m2!3d41.392668!4d2.140189!10e1!16s%2Fg%2F11y_x5bbp3!3m5!1s0x47b687095c96ad7:0x4a8991093774db69!8m2!3d41.392668!4d2.140189!16s%2Fg%2F11y_x5bbp3",
    instagram: "https://www.instagram.com/salva_seo/",
    tiktok: "https://www.tiktok.com/@consultorseobarcelona",
  },
} as const;

export const buildWhatsAppHref = (message: string = siteConfig.whatsapp.defaultMessage) =>
  `https://wa.me/${siteConfig.contact.phone.whatsapp}?text=${encodeURIComponent(message)}`;
