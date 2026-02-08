import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Fundamentos Microsoft Excel | Academia DePC",
  description:
    "Dominá Microsoft Excel desde cero. Aprendé fórmulas, funciones, tablas dinámicas y gráficos profesionales. 12 horas de contenido, 100% online, con certificación nacional e internacional.",
  keywords: [
    "curso excel",
    "excel desde cero",
    "fórmulas excel",
    "tablas dinámicas",
    "gráficos excel",
    "curso excel online",
    "excel básico",
    "excel intermedio",
    "certificación excel",
    "aprender excel",
    "funciones excel",
    "curso excel argentina",
    "microsoft excel",
    "excel para trabajo",
    "analisis datos excel",
  ],
  openGraph: {
    title: "Curso Fundamentos Microsoft Excel | Academia DePC",
    description:
      "Dominá Excel: fórmulas, tablas dinámicas y gráficos. 12 horas, 100% online, con certificación.",
    url: "https://academia.depcsuite.com/diplomaturas/fundamentos-microsoft-excel",
    siteName: "Academia DePC",
    images: [
      {
        url: "/images/course-excel.jpg",
        width: 1200,
        height: 630,
        alt: "Curso Fundamentos Microsoft Excel - Academia DePC",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso Fundamentos Microsoft Excel",
    description:
      "Aprendé Excel desde cero: fórmulas, tablas dinámicas y gráficos. Certificación incluida.",
    images: ["/images/course-excel.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/diplomaturas/fundamentos-microsoft-excel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "AR",
    "geo.placename": "Buenos Aires, Argentina",
    "geo.position": "-34.6037;-58.3816",
    "ICBM": "-34.6037, -58.3816",
    "content-language": "es-AR",
  },
}

export default function FundamentosExcelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
