import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Full Stack React + Node.js + IA | Academia DePC",
  description:
    "Aprende desarrollo web Full Stack con React.js, Node.js, Express, MongoDB, MySQL e Inteligencia Artificial. 9 meses, 100% online, doble certificacion nacional e internacional. Sin conocimientos previos.",
  keywords: [
    "curso full stack",
    "diplomatura programacion",
    "react js curso",
    "node js curso",
    "desarrollo web full stack",
    "curso javascript",
    "bootcamp programacion argentina",
    "curso react online",
    "aprender node js",
    "inteligencia artificial programacion",
    "openai api curso",
    "mongodb mysql",
    "certificacion programacion",
    "curso programacion argentina",
    "desarrollador full stack junior",
  ],
  openGraph: {
    title: "Diplomatura Full Stack React + Node.js + IA | Academia DePC",
    description:
      "Formacion completa en desarrollo web: React.js, Node.js, bases de datos e IA. 9 meses, 100% online, con doble certificacion.",
    url: "https://academiadepc.com/diplomaturas/programacion-fullstack-react-node-ia",
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
      "Aprende desarrollo web completo con React, Node.js e IA. Certificacion nacional e internacional.",
    images: ["/images/course-fullstack-ia.jpg"],
  },
  alternates: {
    canonical: "https://academiadepc.com/diplomaturas/programacion-fullstack-react-node-ia",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DiplomaturaFullStackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
