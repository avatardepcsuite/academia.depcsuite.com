"use client"

import Link from "next/link"
import { Calendar, Clock, BadgeCheck } from "lucide-react"
import { WebinarVideoPlayer } from "@/components/landing/webinar-video-player"
import { categoryColorMap, categories, type Webinar } from "@/lib/webinars-data"

interface WebinarVideoCardProps {
  webinar: Webinar
  isPast: boolean
}

export function WebinarVideoCard({ webinar, isPast }: WebinarVideoCardProps) {
  const catColors = categoryColorMap[webinar.category]
  const categoryLabel =
    categories.find((c) => c.id === webinar.category)?.label || webinar.category

  // Iniciales del instructor para el avatar
  const initials = webinar.instructor
    .replace(/^Prof\.?\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="group">
      {/* Video / espacio reservado */}
      <Link href={`/webinars/${webinar.slug}`} className="block">
        <WebinarVideoPlayer
          videoUrl={webinar.videoUrl}
          title={webinar.title}
          state={isPast ? "ondemand" : "live"}
          className="ring-1 ring-border transition-shadow group-hover:shadow-lg group-hover:shadow-primary/10"
        />
      </Link>

      {/* Meta debajo del video (estilo YouTube) */}
      <div className="mt-3 flex gap-3">
        {/* Avatar del instructor */}
        <div className="shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] text-sm font-bold text-white">
            {initials}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          {/* Badges */}
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                isPast ? "bg-[#25D366]/15 text-[#127a3e]" : "bg-primary/10 text-primary"
              }`}
            >
              {isPast ? "Grabación · Gratis" : "Próximo en vivo"}
            </span>
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${catColors?.light ?? "bg-muted"} ${catColors?.titleColor ?? "text-foreground"}`}>
              {categoryLabel}
            </span>
          </div>

          {/* Título */}
          <Link href={`/webinars/${webinar.slug}`}>
            <h3 className="text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2 text-balance">
              {webinar.title}
            </h3>
          </Link>

          {/* Instructor */}
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            {webinar.instructor}
            <BadgeCheck className="h-3.5 w-3.5 text-primary" />
          </p>

          {/* Fecha / duración */}
          <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {webinar.dateLabel}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {webinar.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Descripción completa debajo del video */}
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {webinar.shortDescription}
      </p>
    </article>
  )
}
