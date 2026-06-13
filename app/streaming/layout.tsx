import type { Metadata } from "next"

const baseUrl = "https://academia.depcsuite.com"
const canonicalUrl = `${baseUrl}/streaming`

export const metadata: Metadata = {
  title: "Catálogo de Streaming Gratuito | Academia DePC",
  description:
    "Explorá el catálogo completo de streaming de Academia DePC: empleabilidad, inteligencia artificial, automatización, productividad, programación y ciberseguridad. En vivo y on demand, con filtros y buscador.",
  keywords: [
    "streaming gratuito",
    "catalogo de streaming",
    "streaming en vivo",
    "streaming on demand",
    "academia depc",
    "streaming tecnologia",
    "streaming empleabilidad",
    "streaming inteligencia artificial",
    "streaming programacion",
    "streaming ciberseguridad",
    "streaming argentina",
    "streaming latinoamerica",
  ],
  openGraph: {
    title: "Catálogo de Streaming Gratuito | Academia DePC",
    description:
      "Todo el streaming de Academia DePC en un solo lugar. Filtrá por temática o buscá por palabra clave. En vivo y on demand.",
    url: canonicalUrl,
    siteName: "Academia DePC",
    images: [
      {
        url: `${baseUrl}/images/logo-depc-cuadrado.jpg`,
        width: 1200,
        height: 630,
        alt: "Catálogo de Streaming Gratuito - Academia DePC",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Streaming Gratuito | Academia DePC",
    description:
      "Todo el streaming de Academia DePC en un solo lugar. Filtrá por temática o buscá por palabra clave.",
    images: [`${baseUrl}/images/logo-depc-cuadrado.jpg`],
    creator: "@academiadepc",
    site: "@academiadepc",
  },
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
}

export default function WebinarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
