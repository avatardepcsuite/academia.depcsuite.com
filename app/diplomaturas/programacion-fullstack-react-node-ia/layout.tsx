import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Full Stack React + Node.js + IA | Academia DePC",
  description:
    "Aprendé desarrollo web Full Stack con React.js, Node.js, Express, MongoDB, MySQL e Inteligencia Artificial. 9 meses, 100% online, doble certificación nacional e internacional. Sin conocimientos previos.",
  keywords: [
    "curso full stack",
    "diplomatura programación",
    "react js curso",
    "node js curso",
    "desarrollo web full stack",
    "curso javascript",
    "bootcamp programación argentina",
    "curso react online",
    "aprender node js",
    "inteligencia artificial programación",
    "openai api curso",
    "mongodb mysql",
    "certificación programación",
    "curso programación argentina",
    "desarrollador full stack junior",
  ],
  openGraph: {
    title: "Diplomatura Full Stack React + Node.js + IA | Academia DePC",
    description:
      "Formación completa en desarrollo web: React.js, Node.js, bases de datos e IA. 9 meses, 100% online, con doble certificación.",
    url: "https://academia.depcsuite.com/diplomaturas/programacion-fullstack-react-node-ia",
    siteName: "Academia DePC",
    images: [
      {
        url: "/images/course-fullstack-ia.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatura Full Stack React Node.js con Inteligencia Artificial - Academia DePC",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplomatura Full Stack React + Node.js + IA",
    description:
      "Aprendé desarrollo web completo con React, Node.js e IA. Certificación nacional e internacional.",
    images: ["/images/course-fullstack-ia.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/diplomaturas/programacion-fullstack-react-node-ia",
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

export default function DiplomaturaFullStackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
