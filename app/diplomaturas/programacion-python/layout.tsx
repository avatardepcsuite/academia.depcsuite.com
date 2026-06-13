import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Programación Python + Django + Vue.js",
  description:
    "Aprendé Python desde cero con Django y Vue.js. Desarrollá APIs REST profesionales. 6 meses, 100% online, doble certificación nacional e internacional. Sin conocimientos previos.",
  keywords: [
    "curso python",
    "diplomatura python",
    "django curso",
    "vue js curso",
    "desarrollo web python",
    "api rest python",
    "bootcamp python argentina",
    "curso django online",
    "aprender python desde cero",
    "python backend",
    "certificación python",
    "curso programación argentina",
    "desarrollador python junior",
    "django rest framework",
  ],
  openGraph: {
    title: "Diplomatura Programación Python + Django + Vue.js | Academia DePC",
    description:
      "Aprendé Python, Django y Vue.js. Desarrollá APIs REST profesionales. 6 meses, 100% online, con doble certificación.",
    url: "https://academia.depcsuite.com/diplomaturas/programacion-python",
    siteName: "Academia DePC",
    images: [
      {
        url: "/images/course-python.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatura Programación Python con Django y Vue.js - Academia DePC",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplomatura Programación Python + Django + Vue.js",
    description:
      "Aprendé Python, Django y Vue.js. Certificación nacional e internacional.",
    images: ["/images/course-python.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/diplomaturas/programacion-python",
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

export default function DiplomaturaPythonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
