"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Video, Clock, Clock3, BookOpen, ArrowRight, Calendar, LayoutGrid, List,
  Briefcase, Bot, Zap, Atom, Palette,
  FileText, Sparkles, MessageSquare, GraduationCap, Cpu, GitBranch,
  MessageCircle, Mic, Building2, Link2, FileCode2, Headphones, Plug,
  Settings, Search, Shield, Heart, PenTool,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  webinars,
  categories,
  categoryColorMap,
  type Webinar,
} from "@/lib/webinars-data"

const MAX_DESCRIPTION_LENGTH = 90

const categoryIconMap: Record<string, React.ElementType> = {
  all: LayoutGrid,
  empleabilidad: Briefcase,
  ia: Bot,
  automatizacion: Zap,
  productividad: Clock3,
  programacion: Atom,
  diseno: Palette,
}

const categoryHeaderColors: Record<string, { bg: string; iconColor: string }> = {
  empleabilidad: { bg: "bg-emerald-600", iconColor: "text-emerald-200/20" },
  ia: { bg: "bg-purple-600", iconColor: "text-purple-200/20" },
  automatizacion: { bg: "bg-orange-500", iconColor: "text-orange-200/20" },
  productividad: { bg: "bg-slate-700", iconColor: "text-slate-300/20" },
  programacion: { bg: "bg-cyan-600", iconColor: "text-cyan-200/20" },
  diseno: { bg: "bg-pink-600", iconColor: "text-pink-200/20" },
}

const watermarkIconMap: Record<string, React.ElementType> = {
  "cv-2026-pasa-filtros-ats-industria-tech": FileText,
  "potencia-productividad-ia-copilot-vs-agent-first": Sparkles,
  "tu-aliado-ia-preparar-entrevistas-optimizar-perfil": Mic,
  "de-estudiante-a-candidato-mentalidad-para-it": GraduationCap,
  "notion-desde-cero-primer-sistema-productividad": BookOpen,
  "ia-n8n-asistentes-inteligentes-sin-programar": Cpu,
  "automatiza-dia-a-dia-n8n-primer-workflow": GitBranch,
  "crear-bot-whatsapp-con-n8n": MessageCircle,
  "storytelling-devs-metodo-star-desafios-tecnicos": MessageSquare,
  "notion-emprendedores-crm-finanzas-operaciones": Building2,
  "automatiza-notion-con-n8n-sistemas-inteligentes": Plug,
  "documentar-proyectos-profesional-con-ia": FileCode2,
  "construir-asistente-virtual-para-tu-web": Headphones,
  "conecta-herramientas-apis-servicios-n8n": Link2,
  "automatizacion-empresas-procesos-escalables-n8n": Settings,
  "frameworks-frontend-por-que-usar-react": Atom,
  "extraer-datos-web-scraping-proteger-sitio": Search,
  "sistemas-autenticacion-seguros-escalables": Shield,
  "habilidades-blandas-soft-skills-era-ia": Heart,
  "figma-para-no-disenadores-prototipa-colabora": PenTool,
}

function WebinarCard({ webinar }: { webinar: Webinar }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate =
    webinar.shortDescription.length > MAX_DESCRIPTION_LENGTH
  const catColors = categoryColorMap[webinar.category]
  const CategoryIcon = categoryIconMap[webinar.category] ?? BookOpen
  const headerColors = categoryHeaderColors[webinar.category] ?? { bg: "bg-gray-600", iconColor: "text-gray-300/20" }
  const WatermarkIcon = watermarkIconMap[webinar.slug] ?? CategoryIcon

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Solid color header with icon + watermark */}
      <Link href={`/webinars/${webinar.slug}`} className="block">
        <div className={`relative ${headerColors.bg} px-6 py-6 overflow-hidden`}>
          {/* Watermark icon - large, dispersed */}
          <WatermarkIcon className={`absolute -right-3 -bottom-3 w-24 h-24 ${headerColors.iconColor} rotate-12 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`} />
          <WatermarkIcon className={`absolute right-16 top-0 w-10 h-10 ${headerColors.iconColor} -rotate-12`} />
          {/* Category icon */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <CategoryIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
              {categories.find((c) => c.id === webinar.category)?.label ?? webinar.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/webinars/${webinar.slug}`}>
          <h3 className="text-base font-bold mb-2 text-balance text-gray-900 hover:text-[#E91E63] transition-colors">
            {webinar.title}
          </h3>
        </Link>
        
        {/* Description with expand/collapse */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            {shouldTruncate && !isExpanded 
              ? `${webinar.shortDescription.slice(0, MAX_DESCRIPTION_LENGTH).trim()}...` 
              : webinar.shortDescription}
            {shouldTruncate && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#E91E63] font-medium ml-1 hover:text-[#C2185B] transition-colors inline-flex items-center"
              >
                {isExpanded ? "Ver menos" : "Ver m\u00e1s"}
              </button>
            )}
          </p>
        </div>

        {/* Tags */}
        {webinar.tags && webinar.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {webinar.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Date & Duration Info */}
        <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{webinar.dateLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{webinar.duration}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center py-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2">
            {webinar.instructorImage ? (
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={webinar.instructorImage || "/placeholder.svg"}
                  alt={webinar.instructor}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-300 group-hover:bg-gradient-to-br group-hover:from-[#E91E63] group-hover:to-[#9C27B0] flex items-center justify-center transition-all duration-300">
                <span className="text-xs font-medium text-gray-600 group-hover:text-white transition-colors duration-300">
                  {webinar.instructor.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
            <span className="text-sm text-gray-700">{webinar.instructor}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/webinars/${webinar.slug}`}>
          <Button className="w-full h-12 bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457] text-white font-medium">
            <ArrowRight className="w-4 h-4 mr-2" />
            Ver webinar
          </Button>
        </Link>
      </div>
    </div>
  )
}

function WebinarTableRow({ webinar }: { webinar: Webinar }) {
  const catColors = categoryColorMap[webinar.category]
  return (
    <tr className="group border-b border-gray-100 hover:bg-[#E91E63]/5 transition-colors">
      <td className="py-4 px-4">
        <Link href={`/webinars/${webinar.slug}`} className="flex items-center gap-3">
          <div
            className={`w-1.5 h-8 rounded-full flex-shrink-0 hidden sm:block ${catColors?.stripe ?? "bg-gray-400"}`}
          />
          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#E91E63] transition-colors line-clamp-2">
            {webinar.title}
          </span>
        </Link>
      </td>
      <td className="py-4 px-4 hidden md:table-cell">
        {webinar.tags && webinar.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {webinar.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </td>
      <td className="py-4 px-4 hidden lg:table-cell">
        <div className="flex items-center gap-2">
          {webinar.instructorImage ? (
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={webinar.instructorImage || "/placeholder.svg"}
                alt={webinar.instructor}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-medium text-gray-500">
                {webinar.instructor.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </span>
            </div>
          )}
          <span className="text-sm text-gray-600 whitespace-nowrap">{webinar.instructor}</span>
        </div>
      </td>
      <td className="py-4 px-4 hidden sm:table-cell">
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="whitespace-nowrap">{webinar.dateLabel}</span>
        </div>
      </td>
      <td className="py-4 px-4 hidden xl:table-cell">
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="whitespace-nowrap">{webinar.duration}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        <Link href={`/webinars/${webinar.slug}`}>
          <Button size="sm" className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457] text-white text-xs whitespace-nowrap">
            <ArrowRight className="w-3.5 h-3.5 mr-1" />
            Ver
          </Button>
        </Link>
      </td>
    </tr>
  )
}

export function Webinars() {
  const searchParams = useSearchParams()
  const initialCat = searchParams.get("webinar_cat") ?? "all"
  const [activeCategory, setActiveCategory] = useState(
    categories.some((c) => c.id === initialCat) ? initialCat : "all",
  )
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")

  // Listen for category selection from header submenu
  useEffect(() => {
    const handler = (e: Event) => {
      const category = (e as CustomEvent).detail as string
      if (category && categories.some((c) => c.id === category)) {
        setActiveCategory(category)
      }
    }
    window.addEventListener("filter-webinar-category", handler)
    return () =>
      window.removeEventListener("filter-webinar-category", handler)
  }, [])

  // Auto-scroll when arriving with webinar_cat param
  useEffect(() => {
    const cat = searchParams.get("webinar_cat")
    if (cat && categories.some((c) => c.id === cat)) {
      setActiveCategory(cat)
      setTimeout(() => {
        document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    }
  }, [searchParams])

  const filteredWebinars = activeCategory === "all" 
    ? webinars 
    : webinars.filter(webinar => webinar.category === activeCategory)

  return (
    <section id="webinars" className="py-24 relative bg-gradient-to-b from-white to-[#2D1B4E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-6">
            <Video className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-[#E91E63] font-medium">Webinars incluidos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Grilla de Webinars 2026: habilidades que te contratan y te potencian
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            En vivo y on demand. Cada webinar está diseñado para darte claridad, método y herramientas aplicables para tu día a día. Todo el contenido incluido en tu suscripción.
          </p>
        </div>

        {/* Filter Buttons + View Toggle */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const FilterIcon = categoryIconMap[category.id] ?? BookOpen
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/25"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#E91E63]/50 hover:text-[#E91E63]"
                  }`}
                >
                  <FilterIcon className="w-3.5 h-3.5" />
                  {category.label}
                </button>
              )
            })}
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-[#E91E63] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                aria-label="Vista tarjetas"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Tarjetas</span>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === "table"
                    ? "bg-[#E91E63] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                aria-label="Vista tabla"
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">Tabla</span>
              </button>
            </div>
          </div>
        </div>

        {/* Webinars Grid / Table */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebinars.map((webinar) => (
              <WebinarCard key={webinar.slug} webinar={webinar} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/80">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Webinar</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Tags</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Docente</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Fecha</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden xl:table-cell">Duraci&oacute;n</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"><span className="sr-only">Acciones</span></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWebinars.map((webinar) => (
                    <WebinarTableRow key={webinar.slug} webinar={webinar} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
