"use client"

import { useEffect, useState } from "react"
import { useCurrency } from "@/contexts/currency-context"
import {
  buildWhatsAppPaymentLink,
  type DiplomaturaPricing,
} from "@/lib/diplomaturas-pricing"
import { Check, CreditCard, MessageCircle, ArrowDown } from "lucide-react"

interface FloatingPriceCardProps {
  pricing: DiplomaturaPricing
  /** Tailwind gradient classes for the primary button (matches each course theme) */
  buttonGradient?: string
  /** Short perks shown in the floating card */
  perks?: string[]
}

const defaultPerks = [
  "Certificación Nacional e Internacional",
  "Acceso al Portal de Empleo",
  "Clases on demand + en vivo",
]

export function FloatingPriceCard({
  pricing,
  buttonGradient = "from-[#2D1B4E] to-[#5C1F5C] hover:from-[#3D2B5E] hover:to-[#6C2F6C]",
  perks = defaultPerks,
}: FloatingPriceCardProps) {
  const { selectedCurrency } = useCurrency()
  const isArs = selectedCurrency.code === "ARS"
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Hide the floating card only once the full inscription detail is on screen,
      // so it accompanies the user from the top of the page like a Udemy sidebar.
      const inscripcion = document.getElementById("inscripcion")
      const reachedInscripcion = inscripcion
        ? inscripcion.getBoundingClientRect().top < 500
        : false
      setVisible(!reachedInscripcion)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const paymentHref = isArs
    ? pricing.mpagoLink
    : buildWhatsAppPaymentLink(pricing.title)

  const scrollToInscripcion = () => {
    document.getElementById("inscripcion")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <aside
      aria-label="Resumen de inscripción"
      className={`hidden lg:block fixed top-28 right-6 z-40 w-80 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-black/20 overflow-hidden">
        <div className="p-6">
          {isArs ? (
            <>
              <p className="text-xs font-semibold tracking-wide text-[#5C1F5C] uppercase mb-1">
                {pricing.installments} cuotas sin interés de
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-gray-900">
                  ${pricing.installmentPrice.toLocaleString("es-AR")}
                </span>
                <span className="text-sm text-gray-500">/mes</span>
              </div>
              <p className="text-sm font-semibold text-emerald-600">
                Precio Final: ${pricing.price.toLocaleString("es-AR")}
              </p>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold tracking-wide text-[#5C1F5C] uppercase mb-1">
                Pago internacional
              </p>
              <p className="text-lg font-bold text-gray-900 mb-1">
                Atención por WhatsApp
              </p>
              <p className="text-sm text-gray-500">
                Coordinamos el medio de pago y el valor en tu moneda local.
              </p>
            </>
          )}

          <ul className="space-y-2 mt-4 mb-5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2 text-xs text-gray-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <a
            href={paymentHref}
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

          <button
            type="button"
            onClick={scrollToInscripcion}
            className="w-full mt-2 h-10 text-sm font-medium text-[#5C1F5C] hover:text-[#2D1B4E] flex items-center justify-center gap-1.5 transition-colors"
          >
            Ver detalle de inscripción
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  )
}
