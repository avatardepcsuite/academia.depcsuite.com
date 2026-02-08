import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Full Stack PHP + Laravel | Academia DePC",
  description:
    "Aprendé desarrollo web profesional con PHP y Laravel. Creá sistemas, ecommerce y aplicaciones web con MercadoPago. 6 meses, 100% online, doble certificación nacional e internacional.",
  keywords: [
    "curso php",
    "diplomatura php",
    "laravel curso",
    "desarrollo web php",
    "ecommerce php",
    "mercadopago integración",
    "bootcamp php argentina",
    "curso laravel online",
    "aprender php desde cero",
    "php backend",
    "certificación php",
    "curso programación argentina",
    "desarrollador php junior",
    "mysql php",
    "tienda online php",
  ],
  openGraph: {
    title: "Diplomatura Full Stack PHP + Laravel | Academia DePC",
    description:
      "Aprendé PHP y Laravel. Creá sistemas y ecommerce con MercadoPago. 6 meses, 100% online, con doble certificación.",
    url: "https://academia.depcsuite.com/diplomaturas/web-fullstack-php-laravel",
    siteName: "Academia DePC",
    images: [
      {
        url: "/images/course-php-laravel.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatura Full Stack PHP con Laravel - Academia DePC",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplomatura Full Stack PHP + Laravel",
    description:
      "Aprendé PHP y Laravel para crear sistemas y ecommerce. Certificación nacional e internacional.",
    images: ["/images/course-php-laravel.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/diplomaturas/web-fullstack-php-laravel",
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

export default function DiplomaturaPhpLaravelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
