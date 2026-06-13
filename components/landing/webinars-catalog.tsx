"use client"

import { useState, useMemo } from "react"
import {
  Search, X, LayoutGrid, Briefcase, Bot, Zap, Clock3, Atom, Shield,
} from "lucide-react"
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

export function WebinarsCatalog() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  // Orden: primero los que tienen video (fecha desc), luego los próximos (fecha asc)
  const sortedWebinars = useMemo(() => {
    const withVideo = webinars
      .filter((w) => Boolean(w.videoUrl))
      .sort((a, b) => parseWebinarDate(b.date).getTime() - parseWebinarDate(a.date).getTime())
    const upcoming = webinars
      .filter((w) => !w.videoUrl)
      .sort((a, b) => parseWebinarDate(a.date).getTime() - parseWebinarDate(b.date).getTime())
    return [...withVideo, ...upcoming]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sortedWebinars.filter((w) => {
      const matchesCategory = activeCategory === "all" || w.category === activeCategory
      const haystack = [w.title, w.shortDescription, w.instructor, ...(w.tags ?? [])]
        .join(" ")
        .toLowerCase()
      const matchesQuery = !q || haystack.includes(q)
      return matchesCategory && matchesQuery
    })
  }, [sortedWebinars, activeCategory, query])

  return (
    <section className="bg-background min-h-screen">
      {/* Encabezado */}
      <div className="bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-[#3a1230]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
            Academia DePC
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight">
            Streaming en video
          </h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-white/70 text-pretty">
            Mirá el streaming en vivo y on demand. Dale play y leé la descripción completa de cada uno,
            como tu canal favorito de tecnología.
          </p>

          {/* Buscador */}
          <div className="mt-6 w-full sm:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar títulos, temas, instructores..."
                aria-label="Buscar streaming"
                className="w-full h-11 pl-11 pr-10 rounded-md border border-white/15 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5fa2]/50 focus:border-[#ff5fa2] transition-all"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filtros por categoría (chips estilo YouTube) */}
      <div className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => {
              const Icon = categoryIconMap[cat.id] ?? LayoutGrid
              const active = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Feed de videos */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
            {filtered.map((webinar) => (
              <WebinarVideoCard
                key={webinar.slug}
                webinar={webinar}
                isPast={parseWebinarDate(webinar.date) < today}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="w-7 h-7 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Sin resultados</h3>
            <p className="text-muted-foreground mb-6">Probá con otra palabra clave o categoría.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("")
                setActiveCategory("all")
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
