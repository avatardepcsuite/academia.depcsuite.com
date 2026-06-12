"use client"

import { Play } from "lucide-react"

interface WebinarVideoPlayerProps {
  videoUrl?: string
  title: string
  /** "live" muestra mensaje de próximo en vivo, "ondemand" muestra grabación próximamente */
  state?: "live" | "ondemand"
  /** Oculta el texto del placeholder (útil para miniaturas pequeñas) */
  compact?: boolean
  className?: string
}

/**
 * Convierte una URL de YouTube/Vimeo en su URL de embed.
 * Si ya es un embed o un mp4, la devuelve tal cual.
 */
function toEmbedUrl(url: string): string {
  // YouTube watch / youtu.be
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  )
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}`
  }
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }
  return url
}

export function WebinarVideoPlayer({
  videoUrl,
  title,
  state = "ondemand",
  compact = false,
  className = "",
}: WebinarVideoPlayerProps) {
  const isMp4 = videoUrl?.match(/\.(mp4|webm|ogg)$/i)

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden rounded-xl bg-black ${className}`}
    >
      {videoUrl ? (
        isMp4 ? (
          <video
            src={videoUrl}
            controls
            className="absolute inset-0 h-full w-full"
            title={title}
          >
            <track kind="captions" />
          </video>
        ) : (
          <iframe
            src={toEmbedUrl(videoUrl)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        )
      ) : (
        // Espacio reservado para el video con colores de la academia
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-[#3a1230]">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#E91E63]/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className={`relative flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 ${compact ? "h-9 w-9" : "h-16 w-16"}`}>
            <Play className={`fill-white text-white ${compact ? "h-4 w-4" : "h-7 w-7"}`} />
          </div>
          {!compact && (
            <p className="relative text-center text-sm font-medium text-white/90 px-6">
              {state === "live"
                ? "El video estará disponible en la transmisión en vivo"
                : "Grabación próximamente disponible aquí"}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
