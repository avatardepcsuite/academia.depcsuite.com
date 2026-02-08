import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - FAQ",
  description:
    "Encontrá respuestas a las preguntas más comunes sobre las diplomaturas de programación, certificaciones, pagos, comunidad y portal de empleo de Academia DePC.",
  keywords: [
    "preguntas frecuentes",
    "FAQ academia depc",
    "dudas cursos programación",
    "certificaciones academia depc",
    "cómo inscribirse academia depc",
    "pagos cursos online",
    "portal empleo programadores",
  ],
  openGraph: {
    title: "Preguntas Frecuentes | Academia DePC",
    description:
      "Respuestas a las dudas más comunes sobre diplomaturas, certificaciones, pagos y comunidad de Academia DePC.",
    url: "https://academia.depcsuite.com/preguntas-frecuentes",
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
      "Respuestas a las dudas más comunes sobre diplomaturas, certificaciones, pagos y comunidad.",
    images: ["/images/logo-depc-cuadrado.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/preguntas-frecuentes",
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

export default function PreguntasFrecuentesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
