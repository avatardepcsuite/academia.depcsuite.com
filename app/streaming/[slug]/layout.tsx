import React from "react"
import type { Metadata } from "next"
import { webinars, categories } from "@/lib/webinars-data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return webinars.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const webinar = webinars.find((w) => w.slug === slug)

  if (!webinar) {
    return {
      title: "Streaming no encontrado | Academia DePC",
      description: "El streaming que buscas no existe.",
      robots: { index: false, follow: false },
    }
  }

  const categoryLabel = categories.find((c) => c.id === webinar.category)?.label || webinar.category
  const baseUrl = "https://academia.depcsuite.com"
  const fullImageUrl = `${baseUrl}${webinar.image}`
  const canonicalUrl = `${baseUrl}/streaming/${webinar.slug}`

  const seoDescription = `${webinar.shortDescription} Streaming gratuito en vivo el ${webinar.dateLabel}, ${webinar.duration}. Dictado por ${webinar.instructor} en Academia DePC.`

  const tagKeywords = webinar.tags || []

  return {
    title: `${webinar.title} | Streaming Gratuito | Academia DePC`,
    description: seoDescription,
    keywords: [
      "streaming gratuito",
      "streaming en vivo",
      "streaming tecnologia",
      "academia depc",
      categoryLabel.toLowerCase(),
      webinar.instructor,
      ...tagKeywords.map(t => t.toLowerCase()),
      "educacion online",
      "curso online",
      "aprender tecnologia",
      "streaming gratis argentina",
      "streaming gratis latinoamerica",
    ],
    openGraph: {
      title: `${webinar.title} | Streaming Gratuito en Vivo`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "Academia DePC",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `Streaming: ${webinar.title} - Academia DePC`,
        },
      ],
      locale: "es_AR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${webinar.title} | Streaming Gratuito`,
      description: webinar.shortDescription,
      images: [fullImageUrl],
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
    authors: [{ name: webinar.instructor }],
    category: "education",
    other: {
      "article:published_time": webinar.date,
      "article:section": categoryLabel,
      "article:tag": tagKeywords.join(", "),
    },
  }
}

export default function WebinarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
