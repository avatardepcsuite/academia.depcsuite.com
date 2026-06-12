"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Video, ArrowRight, ChevronLeft, ChevronRight, LayoutGrid, Briefcase, Bot, Zap, Clock3, Atom, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { webinars, categories } from "@/lib/webinars-data"
import { parseWebinarDate } from "@/components/landing/webinar-card"
import { WebinarVideoCard } from "@/components/landing/webinar-video-card"

const categoryIconMap: Record<string, React.ElementType> = {
  all: LayoutGrid,
  empleabilidad: Briefcase,
  ia: Bot,
  automatizacion: Zap,
  productividad: Clock3,
  programacion: Atom,
  seguridad: Shield,
}

const categoryActiveColors: Record<string, string> = {
  all: "bg-[#E91E63] text-white border-[#E91E63]",
  empleabilidad: "bg-emerald-600 text-white border-emerald-600",
  ia: "bg-purple-600 text-white border-purple-600",
  automatizacion: "bg-orange-500 text-white border-orange-500",
  productividad: "bg-slate-700 text-white border-slate-700",
  programacion: "bg-cyan-600 text-white border-cyan-600",
  seguridad: "bg-teal-600 text-white border-teal-600",
}

export function Webinars() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Reiniciar el carrusel al cambiar de categoría
  useEffect(() => {
    emblaApi?.reInit()
    emblaApi?.scrollTo(0)
  }, [emblaApi, activeCategory])

  // Detectar fecha actual
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Conteo por categoría para la nube de tags
  const categoriesWithCount = useMemo(
    () =>
      categories.map((cat) => ({
        ...cat,
        count: cat.id === "all" ? webinars.length : webinars.filter((w) => w.category === cat.id).length,
      })),
    [],
  )

  // Determinar el próximo webinar real (de todos)
  const allFutureWebinars = webinars
    .filter((w) => parseWebinarDate(w.date) >= today)
    .sort((a, b) => parseWebinarDate(a.date).getTime() - parseWebinarDate(b.date).getTime())
  const realNextWebinarSlug = allFutureWebinars[0]?.slug

  // Filtrar por la categoría activa
  const visibleWebinars = webinars.filter(
    (w) => activeCategory === "all" || w.category === activeCategory,
  )

  const futureWebinars = visibleWebinars
    .filter((w) => parseWebinarDate(w.date) >= today)
    .sort((a, b) => parseWebinarDate(a.date).getTime() - parseWebinarDate(b.date).getTime())

  const pastWebinars = visibleWebinars
    .filter((w) => parseWebinarDate(w.date) < today)
    .sort((a, b) => parseWebinarDate(b.date).getTime() - parseWebinarDate(a.date).getTime())

  // Orden: próximo primero, luego on demand (pasados), luego resto de futuros
  const orderedWebinars = [
    ...futureWebinars.filter((w) => w.slug === realNextWebinarSlug),
    ...pastWebinars,
    ...futureWebinars.filter((w) => w.slug !== realNextWebinarSlug),
  ]

  return (
    <section id="webinars" className="pt-4 pb-12 relative bg-gradient-to-b from-white to-[#2D1B4E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-6">
            <Video className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-[#E91E63] font-medium">Streaming incluido</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Grilla de Streaming 2026: habilidades que te contratan y te potencian
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            En vivo y on demand. Cada streaming está diseñado para darte claridad, método y herramientas aplicables para tu día a día.
          </p>
        </div>

        {/* Nube de tags por categoría */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categoriesWithCount.map((cat) => {
            const Icon = categoryIconMap[cat.id] ?? LayoutGrid
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? categoryActiveColors[cat.id] ?? "bg-[#E91E63] text-white border-[#E91E63]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#E91E63]/50 hover:text-[#E91E63]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
                <span
                  className={`inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-xs font-semibold ${
                    isActive ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/webinars"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E91E63] hover:text-[#C2185B] transition-colors"
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Anterior"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-[#E91E63]/50 hover:text-[#E91E63] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Siguiente"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-[#E91E63]/50 hover:text-[#E91E63] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Single-row carousel */}
        <div className="overflow-hidden -mx-2 px-2 py-2" ref={emblaRef}>
          <div className="flex gap-6">
            {orderedWebinars.map((webinar) => {
              const isPast = parseWebinarDate(webinar.date) < today
              return (
                <div
                  key={webinar.slug}
                  className="flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] min-w-0"
                >
                  <WebinarVideoCard webinar={webinar} isPast={isPast} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-center mt-10">
          <Link href="/webinars">
            <Button className="h-12 px-6 bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457] text-white font-medium">
              Ver todo el streaming
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
