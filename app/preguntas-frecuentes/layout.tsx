import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - FAQ",
  description:
    "Encuentra respuestas a las preguntas mas comunes sobre las diplomaturas de programacion, certificaciones, pagos, comunidad y portal de empleo de Academia DePC.",
  keywords: [
    "preguntas frecuentes",
    "FAQ academia depc",
    "dudas cursos programacion",
    "certificaciones academia depc",
    "como inscribirse academia depc",
    "pagos cursos online",
    "portal empleo programadores",
  ],
  openGraph: {
    title: "Preguntas Frecuentes | Academia DePC",
    description:
      "Respuestas a las dudas mas comunes sobre diplomaturas, certificaciones, pagos y comunidad de Academia DePC.",
    url: "https://academiadepc.com/preguntas-frecuentes",
    images: [
      {
        url: "/images/logo-depc-cuadrado.jpg",
        width: 1200,
        height: 630,
        alt: "Academia DePC - Preguntas Frecuentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | Academia DePC",
    description:
      "Respuestas a las dudas mas comunes sobre diplomaturas, certificaciones, pagos y comunidad.",
    images: ["/images/logo-depc-cuadrado.jpg"],
  },
  alternates: {
    canonical: "https://academiadepc.com/preguntas-frecuentes",
  },
}

export default function PreguntasFrecuentesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
