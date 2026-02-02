import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Programacion Python + Django + Vue.js | Academia DePC",
  description:
    "Aprende Python desde cero con Django y Vue.js. Desarrolla APIs REST profesionales. 6 meses, 100% online, doble certificacion nacional e internacional. Sin conocimientos previos.",
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
    "certificacion python",
    "curso programacion argentina",
    "desarrollador python junior",
    "django rest framework",
  ],
  openGraph: {
    title: "Diplomatura Programacion Python + Django + Vue.js | Academia DePC",
    description:
      "Aprende Python, Django y Vue.js. Desarrolla APIs REST profesionales. 6 meses, 100% online, con doble certificacion.",
    url: "https://academiadepc.com/diplomaturas/programacion-python",
    siteName: "Academia DePC",
    images: [
      {
        url: "/images/course-python.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatura Programacion Python con Django y Vue.js - Academia DePC",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplomatura Programacion Python + Django + Vue.js",
    description:
      "Aprende Python, Django y Vue.js. Certificacion nacional e internacional.",
    images: ["/images/course-python.jpg"],
  },
  alternates: {
    canonical: "https://academiadepc.com/diplomaturas/programacion-python",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DiplomaturaPythonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
