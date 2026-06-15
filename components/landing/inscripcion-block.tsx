"use client"

import { useCurrency, flagComponents, currencies, type CurrencyCode } from "@/contexts/currency-context"
import {
  getPaymentLink,
  formatCoursePrice,
  type DiplomaturaPricing,
} from "@/lib/diplomaturas-pricing"
import { Check, CreditCard, MessageCircle, ShieldCheck } from "lucide-react"

interface InscripcionBlockProps {
  pricing: DiplomaturaPricing
  /** Tailwind gradient classes for the primary button (matches each course theme) */
  buttonGradient?: string
  /** Optional list of perks shown above the price */
  perks?: string[]
}

const defaultPerks = [
  "Clases on demand + masterclass en vivo",
  "Certificación Nacional e Internacional",
  "Acceso al Portal de Empleo exclusivo",
  "Comunidad activa de estudiantes",
]

export function InscripcionBlock({
  pricing,
  buttonGradient = "from-[#2D1B4E] to-[#5C1F5C] hover:from-[#3D2B5E] hover:to-[#6C2F6C]",
  perks = defaultPerks,
}: InscripcionBlockProps) {
  const { selectedCurrency, setSelectedCurrency } = useCurrency()
  const isArs = selectedCurrency.code === "ARS"
  const { href: paymentHref, method } = getPaymentLink(pricing, selectedCurrency.code)
  const isWhatsApp = method === "whatsapp"

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        {/* Currency selector */}
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-wide text-[#5C1F5C] uppercase mb-2">
            Seleccioná tu país / moneda
          </p>
          <div className="flex flex-wrap gap-2">
            {currencies.map((currency) => {
              const Flag = flagComponents[currency.code as CurrencyCode]
              const active = currency.code === selectedCurrency.code
              return (
                <button
                  key={currency.code}
                  type="button"
                  onClick={() => setSelectedCurrency(currency)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
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

        {/* Price (ARS only) */}
        {isArs ? (
          <div className="border-t border-gray-100 pt-6">
            <p className="text-xs font-semibold tracking-wide text-[#5C1F5C] uppercase mb-1">
              {pricing.installments} cuotas sin interés de
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gray-900">
                ${pricing.installmentPrice.toLocaleString("es-AR")}
              </span>
              <span className="text-sm text-gray-500">/mes</span>
            </div>
            <p className="text-base font-semibold text-emerald-600 mt-1">
              Precio Final: ${pricing.price.toLocaleString("es-AR")}
            </p>
          </div>
        ) : (
          <div className="border-t border-gray-100 pt-6">
            <p className="text-xs font-semibold tracking-wide text-[#5C1F5C] uppercase mb-1">
              Precio único
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gray-900">
                {formatCoursePrice(pricing.price, selectedCurrency.code)}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1 mb-3">
              Valor aproximado en {selectedCurrency.code}
            </p>
            {isWhatsApp ? (
              <p className="text-sm text-gray-700 leading-relaxed">
                Para pagos desde <span className="font-semibold">{selectedCurrency.country}</span> te
                atendemos por WhatsApp y coordinamos el medio de pago internacional y el valor en tu
                moneda local.
              </p>
            ) : (
              <p className="text-sm text-gray-700 leading-relaxed">
                Pagá desde <span className="font-semibold">{selectedCurrency.country}</span> de forma
                segura con PayPal en {selectedCurrency.code}. Aceptamos tarjetas de crédito y débito
                internacionales.
              </p>
            )}
          </div>
        )}

        {/* Perks */}
        <ul className="space-y-2.5 mt-6 mb-6">
          {perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2.5 text-sm text-gray-700">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>

        {/* Payment button */}
        <a
          href={paymentHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full h-14 bg-gradient-to-r ${buttonGradient} text-white font-semibold text-lg rounded-md flex items-center justify-center gap-2 transition-all duration-300 shadow-lg`}
        >
          {isArs ? (
            <>
              <CreditCard className="w-5 h-5" />
              Continuar pago
            </>
          ) : isWhatsApp ? (
            <>
              <MessageCircle className="w-5 h-5" />
              Continuar pago por WhatsApp
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Pagar con PayPal
            </>
          )}
        </a>

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mt-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          {isArs
            ? "Pago seguro con MercadoPago"
            : isWhatsApp
              ? "Atención personalizada para pagos internacionales"
              : "Pago seguro con PayPal"}
        </p>
      </div>
    </div>
  )
}
