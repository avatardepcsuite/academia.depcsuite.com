import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terminos y Condiciones | Academia DePC - Cursos de Programacion en Argentina",
  description:
    "Terminos y condiciones de Academia DePC Argentina. Informacion completa sobre suscripciones, cancelaciones, derecho de arrepentimiento segun Ley 24.240, renovaciones automaticas y politicas de uso de cursos de programacion online.",
  keywords: [
    "terminos y condiciones academia depc",
    "condiciones de uso cursos programacion",
    "suscripcion cursos argentina",
    "cancelar suscripcion cursos online",
    "ley defensa consumidor argentina",
    "ley 24240 cursos online",
    "derecho arrepentimiento educacion",
    "renovacion automatica suscripcion",
    "contrato cursos programacion online",
    "academia programacion buenos aires terminos",
    "cursos tecnologia latinoamerica condiciones",
    "suscripcion mensual cursos it argentina",
  ],
  openGraph: {
    title: "Terminos y Condiciones | Academia DePC Argentina",
    description:
      "Terminos y condiciones de uso. Suscripciones, cancelaciones y politicas de Academia DePC conforme a la legislacion argentina.",
    url: "https://academia.depcsuite.com/terminos-y-condiciones",
    siteName: "Academia DePC",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo-depc-cuadrado.jpg",
        width: 1200,
        height: 630,
        alt: "Academia DePC Argentina - Terminos y Condiciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terminos y Condiciones | Academia DePC Argentina",
    description:
      "Terminos y condiciones de uso. Suscripciones, cancelaciones y politicas conforme a la legislacion argentina.",
    images: ["/images/logo-depc-cuadrado.jpg"],
  },
  alternates: {
    canonical: "https://academia.depcsuite.com/terminos-y-condiciones",
    languages: {
      "es-AR": "https://academia.depcsuite.com/terminos-y-condiciones",
      "es": "https://academia.depcsuite.com/terminos-y-condiciones",
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
  name: "Terminos y Condiciones - Academia DePC",
  description: "Terminos y condiciones de uso de Academia DePC Argentina",
  url: "https://academia.depcsuite.com/terminos-y-condiciones",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "legal@depcsuite.com",
        contactType: "legal",
        availableLanguage: "Spanish",
      },
      {
        "@type": "ContactPoint",
        email: "soporte@depcsuite.com",
        contactType: "customer support",
        availableLanguage: "Spanish",
      },
    ],
    taxID: "30-71683193-7",
  },
  mainEntity: {
    "@type": "TermsOfService",
    name: "Terminos y Condiciones Academia DePC",
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
        name: "Terminos y Condiciones",
        item: "https://academia.depcsuite.com/terminos-y-condiciones",
      },
    ],
  },
}

export default function TerminosYCondicionesLayout({
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
