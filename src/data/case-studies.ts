interface CaseStudy {
  id: string
  businessType: string
  zone: string
  keywordStart: string
  positionStart: number
  keywordEnd: string
  positionEnd: number
  timeframe: string
  result: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    businessType: "Clínica de fisioterapia",
    zone: "Sants, Eixample",
    keywordStart: "fisioterapeuta barcelona",
    positionStart: 34,
    keywordEnd: "fisioterapeuta barcelona",
    positionEnd: 6,
    timeframe: "4 meses",
    result: "Incremento de 3 llamadas nuevas semanales",
  },
  {
    id: "2",
    businessType: "Taller mecánico",
    zone: "Gràcia",
    keywordStart: "taller mecanico barcelona",
    positionStart: 28,
    keywordEnd: "taller mecanico barcelona",
    positionEnd: 8,
    timeframe: "5 meses",
    result: "Duplicación de visitas desde Google Maps",
  },
  {
    id: "3",
    businessType: "Restaurante",
    zone: "Barceloneta",
    keywordStart: "restaurante barcelona",
    positionStart: 45,
    keywordEnd: "restaurante barcelona",
    positionEnd: 12,
    timeframe: "6 meses",
    result: "Aumento del 80% en reservas online",
  },
] as const

export type CaseStudyId = (typeof caseStudies)[number]["id"]
