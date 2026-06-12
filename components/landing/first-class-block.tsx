"use client"

import { MessageCircle, Play, Check } from "lucide-react"

interface FirstClassBlockProps {
  /** WhatsApp pre-filled message (already human readable, not encoded) */
  whatsappMessage: string
  /** Tailwind gradient for the preview panel background */
  previewGradient?: string
  /** Accent color classes for badge text + icon */
  accentText?: string
  accentBg?: string
  /** What the student gets when requesting the class */
  bullets?: string[]
}

const WHATSAPP_NUMBER = "541162845700"

const defaultBullets = [
  "Acceso a la primera clase completa",
  "Conocé la metodología y al docente",
  "Resolvemos todas tus dudas por WhatsApp",
]

export function FirstClassBlock({
  whatsappMessage,
  previewGradient = "from-[#2D1B4E] to-[#5C1F5C]",
  accentText = "text-[#5C1F5C]",
  accentBg = "bg-[#5C1F5C]/10 border-[#5C1F5C]/20",
  bullets = defaultBullets,
}: FirstClassBlockProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="primera-clase" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${accentBg}`}>
            <Play className={`w-4 h-4 ${accentText}`} />
            <span className={`text-sm font-medium ${accentText}`}>Clase de prueba</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Mirá la primera clase gratis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
            Solicitá el acceso a la primera clase por WhatsApp. Te la enviamos al
            instante y aprovechás para hacernos todas tus consultas.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Preview panel */}
            <div className={`relative min-h-[260px] bg-gradient-to-br ${previewGradient} flex items-center justify-center p-8`}>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 ring-1 ring-white/25">
                  <Play className="w-9 h-9 text-white fill-white" />
                </div>
                <p className="text-white font-semibold text-lg">Primera clase completa</p>
                <p className="text-white/70 text-sm mt-1">Disponible al solicitarla por WhatsApp</p>
              </div>
            </div>

            {/* Info + CTA */}
            <div className="p-8 flex flex-col justify-center">
              <ul className="space-y-3 mb-6">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-gray-700">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a href={href} target="_blank" rel="noopener noreferrer">
                <span className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-lg rounded-md flex items-center justify-center gap-2 transition-colors shadow-lg">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar primera clase
                </span>
              </a>
              <p className="text-xs text-gray-500 text-center mt-3">
                Respuesta inmediata por WhatsApp · Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
