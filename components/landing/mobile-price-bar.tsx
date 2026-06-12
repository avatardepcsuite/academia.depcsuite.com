"use client"

import { useCurrency } from "@/contexts/currency-context"
import { buildWhatsAppPaymentLink, type DiplomaturaPricing } from "@/lib/diplomaturas-pricing"
import { CreditCard, MessageCircle } from "lucide-react"

interface MobilePriceBarProps {
  pricing: DiplomaturaPricing
  buttonGradient?: string
  /** When provided, the ARS "Inscribirme" button opens this callback (e.g. a modal) */
  onEnroll?: () => void
}

export function MobilePriceBar({
  pricing,
  buttonGradient = "from-[#2D1B4E] to-[#5C1F5C]",
  onEnroll,
}: MobilePriceBarProps) {
  const { selectedCurrency } = useCurrency()
  const isArs = selectedCurrency.code === "ARS"
  const paymentHref = isArs ? pricing.mpagoLink : buildWhatsAppPaymentLink(pricing.title)

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          {isArs ? (
            <>
              <p className="text-base font-bold text-gray-900 leading-tight">
                ${pricing.installmentPrice.toLocaleString("es-AR")}
                <span className="text-xs font-normal text-gray-500">/mes</span>
              </p>
              <p className="text-xs text-emerald-600 font-medium truncate">
                {pricing.installments} cuotas · Final ${pricing.price.toLocaleString("es-AR")}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-bold text-gray-900 leading-tight">Pago internacional</p>
              <p className="text-xs text-gray-500 truncate">Atención por WhatsApp</p>
            </>
          )}
        </div>
        {isArs && onEnroll ? (
          <button
            type="button"
            onClick={onEnroll}
            className={`flex-shrink-0 h-11 px-5 bg-gradient-to-r ${buttonGradient} text-white font-semibold rounded-md flex items-center justify-center gap-2 shadow-lg`}
          >
            <CreditCard className="w-4 h-4" />
            Inscribirme
          </button>
        ) : (
          <a
            href={paymentHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 h-11 px-5 bg-gradient-to-r ${buttonGradient} text-white font-semibold rounded-md flex items-center justify-center gap-2 shadow-lg`}
          >
            {isArs ? <CreditCard className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
            Inscribirme
          </a>
        )}
      </div>
    </div>
  )
}
