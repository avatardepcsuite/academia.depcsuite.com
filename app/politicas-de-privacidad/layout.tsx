import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politicas de Privacidad | Academia DePC - Cursos de Programacion en Argentina",
  description:
    "Politica de privacidad de Academia DePC Argentina. Conoce como protegemos tu informacion personal, tratamiento de datos segun Ley 25.326 de Proteccion de Datos Personales, derechos ARCO y seguridad de datos en cursos online de programacion.",
  keywords: [
    "politica de privacidad academia depc",
    "proteccion de datos personales argentina",
    "ley 25326 proteccion datos",
    "tratamiento datos personales cursos online",
    "derechos arco argentina",
    "privacidad cursos programacion",
    "seguridad datos educacion online",
    "cookies cursos tecnologia",
    "habeas data argentina",
    "academia programacion buenos aires privacidad",
    "cursos online latinoamerica privacidad",
  ],
  openGraph: {
    title: "Politicas de Privacidad | Academia DePC Argentina",
    description:
      "Conoce como protegemos tu informacion personal en Academia DePC. Cumplimos con la Ley 25.326 de Proteccion de Datos Personales de Argentina.",
    url: "https://academia.depcsuite.com/politicas-de-privacidad",
    siteName: "Academia DePC",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo-depc-cuadrado.jpg",
        width: 1200,
        height: 630,
        alt: "Academia DePC Argentina - Politicas de Privacidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politicas de Privacidad | Academia DePC Argentina",
    description:
      "Conoce como protegemos tu informacion personal. Cumplimos con la legislacion argentina de proteccion de datos.",
    images: ["/images/logo-depc-cuadrado.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/politicas-de-privacidad",
    languages: {
      "es-AR": "https://academia.depcsuite.com/politicas-de-privacidad",
      "es": "https://academia.depcsuite.com/politicas-de-privacidad",
    },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Politicas de Privacidad - Academia DePC",
  description: "Politica de privacidad y proteccion de datos personales de Academia DePC Argentina",
  url: "https://academia.depcsuite.com/politicas-de-privacidad",
  inLanguage: "es-AR",
  isPartOf: {
    "@type": "WebSite",
    name: "Academia DePC",
    url: "https://academia.depcsuite.com",
  },
  publisher: {
    "@type": "Organization",
    name: "DEPCSUITE S.A.",
    legalName: "DEPCSUITE S.A.",
    url: "https://academia.depcsuite.com",
    logo: {
      "@type": "ImageObject",
      url: "https://academia.depcsuite.com/images/logo-depc.png",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressRegion: "Buenos Aires",
      addressLocality: "Ciudad Autonoma de Buenos Aires",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "privacidad@depcsuite.com",
      contactType: "privacy",
      availableLanguage: "Spanish",
    },
    taxID: "30-71683193-7",
  },
  mainEntity: {
    "@type": "PrivacyPolicy",
    name: "Politica de Privacidad Academia DePC",
    dateModified: "2026-02-01",
    inLanguage: "es-AR",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://academia.depcsuite.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Politicas de Privacidad",
        item: "https://academia.depcsuite.com/politicas-de-privacidad",
      },
    ],
  },
}

export default function PoliticasDePrivacidadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
