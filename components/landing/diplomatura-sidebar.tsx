"use client"

import { useCurrency, flagComponents, currencies, type CurrencyCode } from "@/contexts/currency-context"
import { buildWhatsAppPaymentLink, formatCoursePrice, hasFixedPrice, type DiplomaturaPricing } from "@/lib/diplomaturas-pricing"
import { CreditCard, MessageCircle, Play, ShieldCheck } from "lucide-react"

interface DiplomaturaSidebarProps {
  pricing: DiplomaturaPricing
  /** Tailwind gradient classes for the primary button (matches each course theme) */
  buttonGradient?: string
  /** Tailwind gradient classes for the preview header of the card */
  previewGradient?: string
  /** WhatsApp message (human readable) used for the "primera clase" CTA */
  firstClassMessage: string
  /** When provided, the preview header embeds this video instead of the WhatsApp first-class link */
  docenteVideoUrl?: string
  /** Label shown above the embedded docente video. Defaults to "Conocé a la docente" */
  docenteVideoLabel?: string
  /** Perks listed under "Esta diplomatura incluye" */
  perks?: string[]
  /** Whether to show the "Solicitar clase de prueba" secondary CTA */
  showTrialClass?: boolean
  /** When provided, the ARS "Inscribirme ahora" button opens this callback (e.g. a modal) instead of linking directly */
  onEnroll?: () => void
}

const defaultPerks = [
  "Certificación Nacional e Internacional",
  "Acceso al Portal de Empleo exclusivo",
  "Clases on demand + masterclass en vivo",
  "Comunidad activa de estudiantes",
  "Acceso de por vida al contenido",
]

const WHATSAPP_NUMBER = "541162845700"

export function DiplomaturaSidebar({
  pricing,
  buttonGradient = "from-[#2D1B4E] to-[#5C1F5C] hover:from-[#3D2B5E] hover:to-[#6C2F6C]",
  previewGradient = "from-[#2D1B4E] to-[#5C1F5C]",
  firstClassMessage,
  docenteVideoUrl,
  docenteVideoLabel = "Conocé a la docente",
  perks = defaultPerks,
  showTrialClass = true,
  onEnroll,
}: DiplomaturaSidebarProps) {
  const { selectedCurrency, setSelectedCurrency } = useCurrency()
  const isArs = selectedCurrency.code === "ARS"

  const paymentHref = isArs ? pricing.mpagoLink : buildWhatsAppPaymentLink(pricing.title)
  const firstClassHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(firstClassMessage)}`

  const primaryHref = paymentHref

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xl shadow-black/10 overflow-hidden">
      {/* Preview header */}
      {docenteVideoUrl ? (
        <div>
          <div className={`flex items-center justify-center gap-2 bg-gradient-to-br ${previewGradient} px-4 py-2.5`}>
            <Play className="h-4 w-4 text-white fill-white" />
            <span className="text-sm font-medium text-white">{docenteVideoLabel}</span>
          </div>
          <div className="relative aspect-video bg-black">
            <iframe
              src={docenteVideoUrl}
              title={docenteVideoLabel}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <a
          href={firstClassHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${previewGradient} group`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="h-7 w-7 text-white fill-white" />
          </span>
          <span className="absolute bottom-3 left-0 right-0 text-center text-sm font-medium text-white">
            Ver primera clase gratis
          </span>
        </a>
      )}

      <div className="p-6">
        {/* Price */}
        {isArs ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5C1F5C] mb-1">
              {pricing.installments} cuotas sin interés de
            </p>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-3xl font-bold text-gray-900">
                ${pricing.installmentPrice.toLocaleString("es-AR")}
              </span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            <p className="text-sm font-semibold text-emerald-600 mb-5">
              Precio final: ${pricing.price.toLocaleString("es-AR")}
            </p>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5C1F5C] mb-1">
              Precio único
            </p>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-3xl font-bold text-gray-900">
                {formatCoursePrice(pricing.price, selectedCurrency.code)}
              </span>
            </div>
            {!hasFixedPrice(pricing.price, selectedCurrency.code) && (
              <p className="text-xs text-gray-400 mb-3">Valor aproximado en {selectedCurrency.code}</p>
            )}
            <p className="text-sm text-gray-500 mb-5">
              Coordinamos el medio de pago y el valor en tu moneda local.
            </p>
          </>
        )}

        {/* Primary CTA */}
        {isArs && onEnroll ? (
          <button
            type="button"
            onClick={onEnroll}
            className={`w-full h-12 bg-gradient-to-r ${buttonGradient} text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-all duration-300 shadow-lg`}
          >
            <CreditCard className="w-4 h-4" />
            Inscribirme ahora
          </button>
        ) : (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full h-12 bg-gradient-to-r ${buttonGradient} text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-all duration-300 shadow-lg`}
          >
            {isArs ? (
              <>
                <CreditCard className="w-4 h-4" />
                Inscribirme ahora
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                Inscribirme por WhatsApp
              </>
            )}
          </a>
        )}

        {/* Secondary CTA */}
        {showTrialClass && (
          <a
            href={firstClassHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-3 h-11 border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium rounded-md flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Solicitar clase de prueba
          </a>
        )}

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mt-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          {isArs ? "Pago seguro con MercadoPago" : "Atención personalizada"}
        </p>

        {/* Currency selector */}
        <div className="mt-5 pt-5 border-t border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
            País / moneda
          </p>
          <div className="flex flex-wrap gap-1.5">
            {currencies.map((currency) => {
              const Flag = flagComponents[currency.code as CurrencyCode]
              const active = currency.code === selectedCurrency.code
              return (
                <button
                  key={currency.code}
                  type="button"
                  onClick={() => setSelectedCurrency(currency)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs font-medium transition-all ${
                    active
                      ? "border-[#5C1F5C] bg-[#5C1F5C]/5 text-[#2D1B4E]"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <Flag />
                  {currency.code}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
