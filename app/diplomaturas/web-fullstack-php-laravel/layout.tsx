import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diplomatura Full Stack PHP + Laravel | Academia DePC",
  description:
    "Aprende desarrollo web profesional con PHP y Laravel. Crea sistemas, ecommerce y aplicaciones web con MercadoPago. 6 meses, 100% online, doble certificacion nacional e internacional.",
  keywords: [
    "curso php",
    "diplomatura php",
    "laravel curso",
    "desarrollo web php",
    "ecommerce php",
    "mercadopago integracion",
    "bootcamp php argentina",
    "curso laravel online",
    "aprender php desde cero",
    "php backend",
    "certificacion php",
    "curso programacion argentina",
    "desarrollador php junior",
    "mysql php",
    "tienda online php",
  ],
  openGraph: {
    title: "Diplomatura Full Stack PHP + Laravel | Academia DePC",
    description:
      "Aprende PHP y Laravel. Crea sistemas y ecommerce con MercadoPago. 6 meses, 100% online, con doble certificacion.",
    url: "https://academiadepc.com/diplomaturas/web-fullstack-php-laravel",
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
      "Aprende PHP y Laravel para crear sistemas y ecommerce. Certificacion nacional e internacional.",
    images: ["/images/course-php-laravel.jpg"],
  },
  alternates: {
    canonical: "https://academiadepc.com/diplomaturas/web-fullstack-php-laravel",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DiplomaturaPhpLaravelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
