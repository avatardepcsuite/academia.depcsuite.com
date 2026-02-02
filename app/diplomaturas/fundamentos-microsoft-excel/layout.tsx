import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso Fundamentos Microsoft Excel | Academia DePC",
  description:
    "Domina Microsoft Excel desde cero. Aprende formulas, funciones, tablas dinamicas y graficos profesionales. 12 horas de contenido, 100% online, con certificacion nacional e internacional.",
  keywords: [
    "curso excel",
    "excel desde cero",
    "formulas excel",
    "tablas dinamicas",
    "graficos excel",
    "curso excel online",
    "excel basico",
    "excel intermedio",
    "certificacion excel",
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
      "Domina Excel: formulas, tablas dinamicas y graficos. 12 horas, 100% online, con certificacion.",
    url: "https://academiadepc.com/diplomaturas/fundamentos-microsoft-excel",
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
      "Aprende Excel desde cero: formulas, tablas dinamicas y graficos. Certificacion incluida.",
    images: ["/images/course-excel.jpg"],
  },
  alternates: {
    canonical: "https://academiadepc.com/diplomaturas/fundamentos-microsoft-excel",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FundamentosExcelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
