import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WebinarsCatalog } from "@/components/landing/webinars-catalog"
import { webinars } from "@/lib/webinars-data"

const baseUrl = "https://academia.depcsuite.com"

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Catálogo de Streaming Gratuito | Academia DePC",
  description:
    "Catálogo completo de streaming gratuito de Academia DePC: empleabilidad, inteligencia artificial, automatización, productividad, programación y ciberseguridad. En vivo y on demand.",
  url: `${baseUrl}/streaming`,
  inLanguage: "es-AR",
  isPartOf: {
    "@type": "WebSite",
    name: "Academia DePC",
    url: baseUrl,
  },
  about: {
    "@type": "EducationalOrganization",
    name: "Academia DePC",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: webinars.length,
    itemListElement: webinars.map((webinar, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/streaming/${webinar.slug}`,
      name: webinar.title,
    })),
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Streaming", item: `${baseUrl}/streaming` },
  ],
}

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <WebinarsCatalog />
      <Footer />
    </main>
  )
}
