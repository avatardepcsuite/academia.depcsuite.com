import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Academia DePC - Cursos de Programación en Argentina",
  description:
    "Términos y condiciones de Academia DePC Argentina. Información completa sobre suscripciones, cancelaciones, derecho de arrepentimiento según Ley 24.240, renovaciones automáticas y políticas de uso de cursos de programación online.",
  keywords: [
    "términos y condiciones academia depc",
    "condiciones de uso cursos programación",
    "suscripción cursos argentina",
    "cancelar suscripción cursos online",
    "ley defensa consumidor argentina",
    "ley 24240 cursos online",
    "derecho arrepentimiento educación",
    "renovación automática suscripción",
    "contrato cursos programación online",
    "academia programación buenos aires términos",
    "cursos tecnología latinoamérica condiciones",
    "suscripción mensual cursos it argentina",
  ],
  openGraph: {
    title: "Términos y Condiciones | Academia DePC Argentina",
    description:
      "Términos y condiciones de uso. Suscripciones, cancelaciones y políticas de Academia DePC conforme a la legislación argentina.",
    url: "https://academia.depcsuite.com/terminos-y-condiciones",
    siteName: "Academia DePC",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo-depc-cuadrado.jpg",
        width: 1200,
        height: 630,
        alt: "Academia DePC Argentina - Términos y Condiciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | Academia DePC Argentina",
    description:
      "Términos y condiciones de uso. Suscripciones, cancelaciones y políticas conforme a la legislación argentina.",
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
  name: "Términos y Condiciones - Academia DePC",
  description: "Términos y condiciones de uso de Academia DePC Argentina",
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
      addressLocality: "Ciudad Autónoma de Buenos Aires",
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
    name: "Términos y Condiciones Academia DePC",
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
        name: "Términos y Condiciones",
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
