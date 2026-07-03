import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Ciberseguridad Aplicada",
  description:
    "Aprende ciberseguridad desde cero. Fundamentos, hacking etico, criptografia, seguridad en redes y DevSecOps. 3 meses, 100% online, doble certificacion nacional e internacional.",
  keywords: [
    "curso ciberseguridad",
    "diplomatura ciberseguridad",
    "hacking etico curso",
    "seguridad informatica curso",
    "ciberseguridad argentina",
    "pentesting curso",
    "seguridad redes",
    "certificacion ciberseguridad",
    "curso seguridad online",
    "aprender ciberseguridad desde cero",
    "fundamentos ciberseguridad",
    "ethical hacking",
    "devsecops curso",
    "criptografia basica",
  ],
  openGraph: {
    title: "Diplomatura Ciberseguridad Aplicada | Academia DePC",
    description:
      "Aprende ciberseguridad, hacking etico, criptografia y seguridad en redes. 3 meses, 100% online, con doble certificacion.",
    url: "https://academia.depcsuite.com/diplomaturas/ciberseguridad-aplicada",
    siteName: "Academia DePC",
    images: [
      {
        url: "/images/course-cybersecurity.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatura Ciberseguridad Aplicada - Academia DePC",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplomatura Ciberseguridad Aplicada",
    description:
      "Aprende ciberseguridad, hacking etico y seguridad en redes. Certificacion nacional e internacional.",
    images: ["/images/course-cybersecurity.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/diplomaturas/ciberseguridad-aplicada",
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

export default function DiplomaturaCiberseguridadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
