"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Clock3,
  Users,
  Download,
  BookOpen,
  Video,
  Info,
  Briefcase,
  Bot,
  Zap,
  Atom,
  Palette,
} from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { webinars, categories, categoryColorMap, getWebinarBySlug, type Webinar } from "@/lib/webinars-data"

const categoryIconMap: Record<string, React.ElementType> = {
  empleabilidad: Briefcase,
  ia: Bot,
  automatizacion: Zap,
  productividad: Clock3,
  programacion: Atom,
  diseno: Palette,
}

function RelatedWebinarCard({ webinar }: { webinar: Webinar }) {
  const relCatColors = categoryColorMap[webinar.category]
  const CatIcon = categoryIconMap[webinar.category] ?? BookOpen
  return (
    <Link
      href={`/webinars/${webinar.slug}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className={`h-2 w-full ${relCatColors?.stripe ?? "bg-gray-400"}`} />
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${webinar.typeColor} text-white text-xs font-medium shadow-sm`}
          >
            <BookOpen className="w-3 h-3" />
            {webinar.type}
          </span>
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${relCatColors?.light ?? "bg-gray-100"} text-xs`}>
            <CatIcon className="w-3 h-3" />
          </span>
        </div>
        <h4 className={`font-bold mb-2 group-hover:text-[#E91E63] transition-colors line-clamp-2 text-base ${relCatColors?.titleColor ?? "text-gray-900"}`}>
          {webinar.title}
        </h4>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Calendar className="w-3.5 h-3.5" />
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
      <main className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center py-40">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Webinar no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            El webinar que buscas no existe o fue removido.
          </p>
          <Link href="/#webinars">
            <Button className="bg-[#E91E63] hover:bg-[#C2185B] text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a webinars
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

  // Get 4 random webinars excluding current (shuffled)
  const allRelated = webinars
    .filter((w) => w.slug !== webinar.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Academia DePC",
        item: "https://academia.depcsuite.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Webinars",
        item: "https://academia.depcsuite.com/#webinars",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: webinar.title,
        item: `https://academia.depcsuite.com/webinars/${webinar.slug}`,
      },
    ],
  }

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: webinar.title,
    description: webinar.fullDescription,
    startDate: webinar.date,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://academia.depcsuite.com",
    },
    organizer: {
      "@type": "EducationalOrganization",
      name: "Academia DePC",
      url: "https://academia.depcsuite.com",
    },
    performer: {
      "@type": "Person",
      name: webinar.instructor,
    },
    image: `https://academia.depcsuite.com${webinar.image}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      url: "https://academia.depcsuite.com/#precios",
    },
  }

  const descriptionParagraphs = webinar.fullDescription.split("\n\n")

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero Section - Diplomatura style, no image */}
        <section className={`relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br ${catColors?.heroGradient ?? "from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63]"}`}>
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                <span>/</span>
                <Link href="/#webinars" className="hover:text-white transition-colors">Webinars</Link>
                <span>/</span>
                <span className="text-white/90 truncate max-w-[200px] sm:max-w-none">{webinar.title}</span>
              </nav>

              {/* Badges */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${webinar.typeColor} text-white text-xs font-medium shadow-lg`}>
                  <Video className="w-3.5 h-3.5" />
                  {webinar.type}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                  {categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance">
                {webinar.title}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
                {webinar.shortDescription}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-center mb-12">
                <Link href="/#precios">
                  <Button size="lg" className="bg-white text-[#E91E63] hover:bg-white/90 px-8 h-12 text-base font-semibold shadow-lg">
                    Suscribirme ahora
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Calendar className={`w-5 h-5 ${catColors?.accent ?? "text-pink-300"}`} />
                  <span className="text-white text-sm">{webinar.dateLabel}</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Clock className={`w-5 h-5 ${catColors?.accent ?? "text-pink-300"}`} />
                  <span className="text-white text-sm">{webinar.time}</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Clock className={`w-5 h-5 ${catColors?.accent ?? "text-pink-300"}`} />
                  <span className="text-white text-sm">{webinar.duration}</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Users className={`w-5 h-5 ${catColors?.accent ?? "text-pink-300"}`} />
                  <span className="text-white text-sm">En vivo + grabación</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Sobre este webinar
                </h2>

                <div className="prose prose-lg max-w-none mb-10">
                  {descriptionParagraphs.map((paragraph, index) => (
                    <p
                      key={`p-${index}`}
                      className="text-gray-600 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Audience */}
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#E91E63]" />
                    Para quién es este webinar
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {webinar.audience}
                  </p>
                </div>

                {/* Downloadable Material */}
                {webinar.downloadableMaterial && (
                  <div className="bg-indigo-50 rounded-2xl p-6 sm:p-8 mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Download className="w-5 h-5 text-indigo-600" />
                      Material descargable incluido
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {webinar.downloadableMaterial}
                    </p>
                  </div>
                )}

                {/* Note */}
                {webinar.note && (
                  <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 mb-8 border border-amber-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-amber-600" />
                      Aclaración
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {webinar.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Instructor Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 sticky top-24">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Instructor
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    {webinar.instructorImage ? (
                      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={webinar.instructorImage || "/placeholder.svg"}
                          alt={webinar.instructor}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-white">
                          {webinar.instructor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-gray-900">
                        {webinar.instructor}
                      </p>
                      <p className="text-sm text-gray-500">Academia DePC</p>
                    </div>
                  </div>

                  <p className="text-xs text-center text-gray-500">
                    Incluido en tu suscripción a la comunidad Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Webinars Carousel */}
        {allRelated.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Otros estudiantes también vieron
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allRelated.map((related) => (
                  <RelatedWebinarCard key={related.slug} webinar={related} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  )
}
