"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  Download,
  Info,
  BadgeCheck,
  MessageCircle,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WebinarVideoPlayer } from "@/components/landing/webinar-video-player"
import { webinars, categories, categoryColorMap, getWebinarBySlug, type Webinar } from "@/lib/webinars-data"

function parseDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number)
  return new Date(year, month - 1, day)
}

/** Tarjeta lateral estilo "a continuación" de YouTube */
function RelatedVideoItem({ webinar, isPast }: { webinar: Webinar; isPast: boolean }) {
  const catColors = categoryColorMap[webinar.category]
  const categoryLabel =
    categories.find((c) => c.id === webinar.category)?.label || webinar.category
  return (
    <Link
      href={`/streaming/${webinar.slug}`}
      className="group flex gap-3 rounded-xl p-2 transition-colors hover:bg-secondary"
    >
      <div className="w-40 shrink-0">
        <WebinarVideoPlayer
          videoUrl={webinar.videoUrl}
          title={webinar.title}
          state={isPast ? "ondemand" : "live"}
          compact
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {webinar.title}
        </h4>
        <p className="mt-1 text-xs text-muted-foreground">{webinar.instructor}</p>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
          <span className={`rounded-full px-2 py-0.5 ${catColors?.light ?? "bg-muted"} ${catColors?.titleColor ?? ""}`}>
            {categoryLabel}
          </span>
          <span>{webinar.dateLabel}</span>
        </div>
      </div>
    </Link>
  )
}

export default function WebinarDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const webinar = getWebinarBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!webinar) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-40">
          <h1 className="text-3xl font-bold text-foreground mb-4">Streaming no encontrado</h1>
          <p className="text-muted-foreground mb-8">El streaming que buscas no existe o fue removido.</p>
          <Link href="/streaming">
            <Button className="bg-primary text-primary-foreground hover:opacity-90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a streaming
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const categoryLabel =
    categories.find((c) => c.id === webinar.category)?.label || webinar.category
  const catColors = categoryColorMap[webinar.category]

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const isPast = parseDate(webinar.date) < today

  const sameCategory = webinars.filter((w) => w.slug !== webinar.slug && w.category === webinar.category)
  const otherCategory = webinars.filter((w) => w.slug !== webinar.slug && w.category !== webinar.category)
  const allRelated = [...sameCategory, ...otherCategory].slice(0, 6)

  const initials = webinar.instructor
    .replace(/^Prof\.?\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Academia DePC", item: "https://academia.depcsuite.com" },
      { "@type": "ListItem", position: 2, name: "Streaming", item: "https://academia.depcsuite.com/streaming" },
      { "@type": "ListItem", position: 3, name: webinar.title, item: `https://academia.depcsuite.com/streaming/${webinar.slug}` },
    ],
  }

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: webinar.title,
    description: webinar.fullDescription,
    startDate: webinar.date,
    endDate: webinar.date,
    inLanguage: "es-AR",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: `https://academia.depcsuite.com/streaming/${webinar.slug}` },
    organizer: { "@type": "EducationalOrganization", name: "Academia DePC", url: "https://academia.depcsuite.com" },
    performer: { "@type": "Person", name: webinar.instructor },
    image: `https://academia.depcsuite.com${webinar.image}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      url: "https://academia.depcsuite.com/#precios",
      validFrom: webinar.date,
    },
  }

  // Datos estructurados de video (rich results) solo si hay video disponible
  const youtubeId = webinar.videoUrl?.match(/(?:embed\/|v=|youtu\.be\/)([\w-]{11})/)?.[1]
  const videoSchema = webinar.videoUrl
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: webinar.title,
        description: webinar.shortDescription,
        thumbnailUrl: youtubeId
          ? [`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`]
          : [`https://academia.depcsuite.com${webinar.image}`],
        uploadDate: webinar.date,
        contentUrl: webinar.videoUrl,
        embedUrl: webinar.videoUrl,
        inLanguage: "es-AR",
        publisher: {
          "@type": "EducationalOrganization",
          name: "Academia DePC",
          url: "https://academia.depcsuite.com",
          logo: {
            "@type": "ImageObject",
            url: "https://academia.depcsuite.com/icon.png",
          },
        },
      }
    : null

  const descriptionParagraphs = webinar.fullDescription ? webinar.fullDescription.split("\n\n") : []

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      {videoSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      )}
      <main className="min-h-screen bg-background">
        <Header />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/streaming" className="hover:text-foreground transition-colors">Streaming</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px] sm:max-w-none">{webinar.title}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* ===== Columna principal (video + descripción) ===== */}
            <div className="lg:col-span-2">
              {/* Reproductor */}
              <WebinarVideoPlayer
                videoUrl={webinar.videoUrl}
                title={webinar.title}
                state={isPast ? "ondemand" : "live"}
              />

              {/* Título */}
              <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground text-balance leading-tight">
                {webinar.title}
              </h1>

              {/* Badges */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    isPast ? "bg-[#25D366]/15 text-[#127a3e]" : "bg-primary/10 text-primary"
                  }`}
                >
                  {isPast ? "Grabación · Gratis" : "Próximo en vivo"}
                </span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${catColors?.light ?? "bg-muted"} ${catColors?.titleColor ?? "text-foreground"}`}>
                  {categoryLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground">
                  <Calendar className="w-3.5 h-3.5" /> {webinar.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground">
                  <Clock className="w-3.5 h-3.5" /> {webinar.duration}
                </span>
              </div>

              {/* Barra del instructor + CTA */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-y border-border py-4">
                <div className="flex items-center gap-3">
                  {webinar.instructorImage ? (
                    <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-border">
                      <img
                        src={webinar.instructorImage || "/placeholder.svg"}
                        alt={webinar.instructor}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] text-sm font-bold text-white">
                      {initials}
                    </div>
                  )}
                  <div>
                    <p className="flex items-center gap-1 font-semibold text-foreground">
                      {webinar.instructor}
                      <BadgeCheck className="h-4 w-4 text-primary" />
                    </p>
                    <p className="text-xs text-muted-foreground">Academia DePC</p>
                  </div>
                </div>

                {isPast && (
                  <a
                    href={`https://wa.me/541162845700?text=Hola!%20Me%20interesa%20acceder%20al%20streaming%20gratuito:%20${encodeURIComponent(webinar.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar acceso gratis
                    </Button>
                  </a>
                )}
              </div>

              {/* Descripción completa (estilo caja de descripción de YouTube) */}
              <div className="mt-4 rounded-xl bg-secondary p-5">
                <p className="mb-3 text-sm font-semibold text-foreground">{webinar.shortDescription}</p>
                <div className="prose prose-sm max-w-none">
                  {descriptionParagraphs.map((paragraph, index) => {
                    const isHeading = paragraph.startsWith("**") && paragraph.includes("**")
                    if (isHeading) {
                      const headingMatch = paragraph.match(/^\*\*(.+?)\*\*(.*)/)
                      if (headingMatch) {
                        const headingText = headingMatch[1]
                        const restContent = headingMatch[2].trim()
                        return (
                          <div key={`p-${index}`} className="mb-4">
                            <h3 className="text-base font-bold text-foreground mb-2">{headingText}</h3>
                            {restContent && (
                              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {restContent.replace(/\*\*(.+?)\*\*/g, "$1")}
                              </p>
                            )}
                          </div>
                        )
                      }
                    }
                    const parts = paragraph.split(/\*\*(.+?)\*\*/g)
                    return (
                      <p key={`p-${index}`} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                        {parts.map((part, i) =>
                          i % 2 === 1 ? (
                            <strong key={i} className="text-foreground">{part}</strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    )
                  })}
                </div>

                {/* Para quién es */}
                <div className="mt-4 border-t border-border pt-4">
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    Para quién es este streaming
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{webinar.audience}</p>
                </div>

                {/* Material descargable */}
                {webinar.downloadableMaterial && (
                  <div className="mt-4 border-t border-border pt-4">
                    <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                      <Download className="h-4 w-4 text-primary" />
                      Material descargable incluido
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{webinar.downloadableMaterial}</p>
                  </div>
                )}

                {/* Nota */}
                {webinar.note && (
                  <div className="mt-4 border-t border-border pt-4">
                    <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                      <Info className="h-4 w-4 text-amber-600" />
                      Aclaración
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{webinar.note}</p>
                  </div>
                )}

                {/* Tags */}
                {webinar.tags && webinar.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    {webinar.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ===== Columna lateral (a continuación) ===== */}
            <aside className="lg:col-span-1">
              <h2 className="mb-3 text-lg font-bold text-foreground">A continuación</h2>
              <div className="flex flex-col gap-1">
                {allRelated.map((related) => (
                  <RelatedVideoItem
                    key={related.slug}
                    webinar={related}
                    isPast={parseDate(related.date) < today}
                  />
                ))}
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
