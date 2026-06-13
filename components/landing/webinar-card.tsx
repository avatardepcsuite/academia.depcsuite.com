"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Video, Clock, BookOpen, ArrowRight, Calendar, LayoutGrid, Clock3,
  Briefcase, Bot, Zap, Atom,
  FileText, Sparkles, MessageSquare, GraduationCap, Cpu, GitBranch,
  MessageCircle, Mic, Building2, Link2, FileCode2, Headphones, Plug,
  Settings, Search, Shield, Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { categories, categoryColorMap, type Webinar } from "@/lib/webinars-data"

const MAX_DESCRIPTION_LENGTH = 90

// Componente de cuenta regresiva minimalista
export function Countdown({ targetDate, targetTime }: { targetDate: string; targetTime: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculateTimeLeft = () => {
      const timeMatch = targetTime.match(/(\d{1,2}):(\d{2})/)
      const hour = timeMatch ? parseInt(timeMatch[1]) : 18
      const minute = timeMatch ? parseInt(timeMatch[2]) : 30

      const [year, month, day] = targetDate.split("-").map(Number)
      const target = new Date(year, month - 1, day, hour, minute, 0, 0)
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate, targetTime])

  if (!mounted) return null

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
      <span className="text-[#E91E63] font-medium">Próximo</span>
      <span className="font-mono text-gray-700">
        {timeLeft.days}d {pad(timeLeft.hours)}hs:{pad(timeLeft.minutes)}m:{pad(timeLeft.seconds)}s
      </span>
    </div>
  )
}

export const categoryIconMap: Record<string, React.ElementType> = {
  all: LayoutGrid,
  empleabilidad: Briefcase,
  ia: Bot,
  automatizacion: Zap,
  productividad: Clock3,
  programacion: Atom,
  seguridad: Shield,
}

const categoryHeaderColors: Record<string, { bg: string; iconColor: string }> = {
  empleabilidad: { bg: "bg-emerald-600", iconColor: "text-emerald-200/20" },
  ia: { bg: "bg-purple-600", iconColor: "text-purple-200/20" },
  automatizacion: { bg: "bg-orange-500", iconColor: "text-orange-200/20" },
  productividad: { bg: "bg-slate-700", iconColor: "text-slate-300/20" },
  programacion: { bg: "bg-cyan-600", iconColor: "text-cyan-200/20" },
  seguridad: { bg: "bg-teal-600", iconColor: "text-teal-200/20" },
}

const watermarkIconMap: Record<string, React.ElementType> = {
  "ciberseguridad-aplicada-prevencion-fraudes-digitales": Shield,
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
  "fundamentos-ciberseguridad": Shield,
  "como-aplicar-ia-en-ciberseguridad": Shield,
}

export function WebinarCard({ webinar, isNext = false, isPast = false }: { webinar: Webinar; isNext?: boolean; isPast?: boolean }) {
  const PlayIcon = Video
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = webinar.shortDescription.length > MAX_DESCRIPTION_LENGTH
  const CategoryIcon = categoryIconMap[webinar.category] ?? BookOpen
  const headerColors = categoryHeaderColors[webinar.category] ?? { bg: "bg-gray-600", iconColor: "text-gray-300/20" }
  const WatermarkIcon = watermarkIconMap[webinar.slug] ?? CategoryIcon

  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full ${isNext ? "ring-2 ring-[#E91E63] shadow-xl shadow-[#E91E63]/20 border-transparent" : isPast ? "border border-gray-200 opacity-95 hover:opacity-100" : "border border-gray-200"}`}>
      {/* Badge próximo webinar */}
      {isNext && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E91E63] text-white text-xs font-bold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Próximo en vivo
          </span>
        </div>
      )}

      {/* Badge para webinars disponibles on demand - GRATIS */}
      {isPast && !isNext && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-lg">
            <PlayIcon className="w-3.5 h-3.5" />
            GRATIS
          </span>
        </div>
      )}

      {/* Solid color header with icon + watermark */}
      <Link href={`/streaming/${webinar.slug}`} className="block">
        <div className={`relative ${headerColors.bg} px-6 py-6 overflow-hidden`}>
          <WatermarkIcon className={`absolute -right-3 -bottom-3 w-24 h-24 ${headerColors.iconColor} rotate-12 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`} />
          <WatermarkIcon className={`absolute right-16 top-0 w-10 h-10 ${headerColors.iconColor} -rotate-12`} />
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
        <Link href={`/streaming/${webinar.slug}`}>
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
                {isExpanded ? "Ver menos" : "Ver más"}
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
          {isPast ? (
            <div className="flex items-center gap-1.5">
              <PlayIcon className="w-4 h-4 text-[#E91E63]" />
              <span className="text-[#E91E63] font-medium">Disponible on demand</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{webinar.dateLabel}</span>
            </div>
          )}
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
                  {webinar.instructor.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
            <span className="text-sm text-gray-700">{webinar.instructor}</span>
          </div>
        </div>

        {/* Action Button */}
        {isPast ? (
          <a
            href={`https://wa.me/541162845700?text=Hola!%20Me%20interesa%20acceder%20al%20streaming%20gratuito:%20${encodeURIComponent(webinar.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Button className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium">
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar acceso gratis
            </Button>
          </a>
        ) : (
          <Link href={`/streaming/${webinar.slug}`}>
            <Button className="w-full h-12 bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457] text-white font-medium">
              <ArrowRight className="w-4 h-4 mr-2" />
              Ver streaming
            </Button>
          </Link>
        )}

        {/* Countdown minimalista debajo del botón */}
        {isNext && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Countdown targetDate={webinar.date} targetTime={webinar.time} />
          </div>
        )}
      </div>
    </div>
  )
}

export function WebinarTableRow({ webinar, isNext = false, isPast = false }: { webinar: Webinar; isNext?: boolean; isPast?: boolean }) {
  const catColors = categoryColorMap[webinar.category]
  return (
    <tr className={`group border-b border-gray-100 hover:bg-[#E91E63]/5 transition-colors ${isNext ? "bg-[#E91E63]/5" : ""}`}>
      <td className="py-4 px-4">
        <Link href={`/streaming/${webinar.slug}`} className="flex items-center gap-3">
          <div className={`w-1.5 h-8 rounded-full flex-shrink-0 hidden sm:block ${catColors?.stripe ?? "bg-gray-400"}`} />
          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#E91E63] transition-colors line-clamp-2">
            {webinar.title}
          </span>
          {isNext && (
            <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-[#E91E63] text-white text-[10px] font-bold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Próximo
            </span>
          )}
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
                {webinar.instructor.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </span>
            </div>
          )}
          <span className="text-sm text-gray-600 whitespace-nowrap">{webinar.instructor}</span>
        </div>
      </td>
      <td className="py-4 px-4 hidden sm:table-cell">
        {isPast ? (
          <div className="flex items-center gap-1.5 text-sm">
            <Video className="w-3.5 h-3.5 flex-shrink-0 text-[#E91E63]" />
            <span className="whitespace-nowrap text-[#E91E63] font-medium">On demand</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">{webinar.dateLabel}</span>
          </div>
        )}
      </td>
      <td className="py-4 px-4 hidden xl:table-cell">
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="whitespace-nowrap">{webinar.duration}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        {isPast ? (
          <a
            href={`https://wa.me/541162845700?text=Hola!%20Me%20interesa%20acceder%20al%20streaming%20gratuito:%20${encodeURIComponent(webinar.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Button size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-xs whitespace-nowrap">
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              Gratis
            </Button>
          </a>
        ) : (
          <Link href={`/streaming/${webinar.slug}`}>
            <Button size="sm" className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457] text-white text-xs whitespace-nowrap">
              <ArrowRight className="w-3.5 h-3.5 mr-1" />
              Ver
            </Button>
          </Link>
        )}
      </td>
    </tr>
  )
}

// Helper para parsear fechas consistentemente (evita problemas de zona horaria)
export const parseWebinarDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-").map(Number)
  return new Date(year, month - 1, day)
}
