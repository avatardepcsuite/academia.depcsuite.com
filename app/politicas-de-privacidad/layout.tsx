import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Políticas de Privacidad | Academia DePC - Cursos de Programación en Argentina",
  description:
    "Política de privacidad de Academia DePC Argentina. Conocé cómo protegemos tu información personal, tratamiento de datos según Ley 25.326 de Protección de Datos Personales, derechos ARCO y seguridad de datos en cursos online de programación.",
  keywords: [
    "política de privacidad academia depc",
    "protección de datos personales argentina",
    "ley 25326 protección datos",
    "tratamiento datos personales cursos online",
    "derechos arco argentina",
    "privacidad cursos programación",
    "seguridad datos educación online",
    "cookies cursos tecnología",
    "habeas data argentina",
    "academia programación buenos aires privacidad",
    "cursos online latinoamérica privacidad",
  ],
  openGraph: {
    title: "Políticas de Privacidad | Academia DePC Argentina",
    description:
      "Conocé cómo protegemos tu información personal en Academia DePC. Cumplimos con la Ley 25.326 de Protección de Datos Personales de Argentina.",
    url: "https://academia.depcsuite.com/politicas-de-privacidad",
    siteName: "Academia DePC",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo-depc-cuadrado.jpg",
        width: 1200,
        height: 630,
        alt: "Academia DePC Argentina - Políticas de Privacidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Políticas de Privacidad | Academia DePC Argentina",
    description:
      "Conocé cómo protegemos tu información personal. Cumplimos con la legislación argentina de protección de datos.",
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
  name: "Políticas de Privacidad - Academia DePC",
  description: "Política de privacidad y protección de datos personales de Academia DePC Argentina",
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
      addressLocality: "Ciudad Autónoma de Buenos Aires",
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
    name: "Política de Privacidad Academia DePC",
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
        name: "Políticas de Privacidad",
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
