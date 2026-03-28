"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Gift, Calendar, ChevronDown } from "lucide-react"
import { useCurrency, currencies, flagComponents } from "@/contexts/currency-context"
import { useState, useRef, useEffect } from "react"
import { SubscriptionModal } from "./subscription-modal"

const freeIncluded = [
  "Gratis por 15 días",
  "Acceso a la primera clase de las diplomaturas",
  "1 Webinar gratis",
]

const annualIncluded = [
  "Acceso a la comunidad Tech",
  "Acceso a todas las Diplomaturas",
  "Webinars en vivo y on demand",
  "Master class con docente en vivo",
  "Certificación Nacional e Internacional",
  "Acceso al portal de empleo",
  "Descuento preferencial en hackathones",
]

export function Pricing() {
  const { selectedCurrency, setSelectedCurrency } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("monthly")
  const [selectedPaymentLink, setSelectedPaymentLink] = useState("")

  const handleSubscriptionClick = (planType: "monthly" | "annual", paymentLink: string) => {
    setSelectedPlan(planType)
    setSelectedPaymentLink(paymentLink)
    setModalOpen(true)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <section id="precios" className="py-24 bg-gradient-to-b from-white to-[#2D1B4E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm font-medium text-[#E91E63]">Planes de Membresía</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Invertí en tu futuro tech
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Una sola suscripción te da acceso a toda la formación, eventos y la comunidad más activa de estudiantes tech.
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-8">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm hover:border-[#E91E63]/50 hover:shadow-md transition-all cursor-pointer"
            >
              {flagComponents[selectedCurrency.code]()}
              <span className="text-sm text-gray-600">Precios en</span>
              <span className="text-sm font-semibold text-gray-900">{selectedCurrency.code}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl border border-gray-200 shadow-lg py-2 z-50">
                <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide">Selecciona tu moneda</p>
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    type="button"
                    onClick={() => {
                      setSelectedCurrency(currency)
                      setIsOpen(false)
                    }}
                    className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                      selectedCurrency.code === currency.code ? "bg-[#E91E63]/10" : ""
                    }`}
                  >
                    {flagComponents[currency.code]()}
                    <div className="text-left">
                      <p className={`text-sm font-medium ${selectedCurrency.code === currency.code ? "text-[#E91E63]" : "text-gray-900"}`}>
                        {currency.code}
                      </p>
                      <p className="text-xs text-gray-500">{currency.country}</p>
                    </div>
                    {selectedCurrency.code === currency.code && (
                      <Check className="w-4 h-4 text-[#E91E63] ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Gift className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Plan Gratis</h3>
                <p className="text-sm text-gray-500">Probá sin compromiso</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">por 15 días</span>
              </div>
            </div>

            <Button 
              onClick={() => handleSubscriptionClick("monthly", selectedCurrency.monthlyLink)}
              className="w-full mb-6 h-12 bg-[#2D1B4E] hover:bg-[#3D2B5E] text-white"
            >
              Comenzar gratis
            </Button>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm font-medium text-gray-900 mb-4">Incluye:</p>
              <ul className="space-y-3">
                {freeIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="bg-white rounded-2xl border-2 border-[#E91E63] p-8 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white text-sm font-medium">
                <Sparkles className="w-3 h-3" />
                Recomendado
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#E91E63]/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Plan Anual</h3>
                <p className="text-sm text-gray-500">Acceso completo</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">$360.000</span>
                <span className="text-gray-500">ARS/año</span>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-600">
                  Hasta <span className="font-semibold text-[#E91E63]">12 cuotas sin interés</span> con tarjeta
                </p>
                <p className="text-sm text-gray-600">
                  o <span className="font-semibold">4 cuotas</span> por transferencia
                </p>
              </div>
            </div>

            <Button 
              onClick={() => handleSubscriptionClick("annual", "https://pagos.depcsuite.com/2880?currency=ARS&medio=8&vendedor=283")}
              className="w-full mb-6 h-12 bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457] text-white"
            >
              Suscribirme anual
            </Button>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm font-medium text-gray-900 mb-4">Todo incluido:</p>
              <ul className="space-y-3">
                {annualIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Cancela cuando quieras. Sin compromisos de permanencia.
        </p>
      </div>

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planType={selectedPlan}
        paymentLink={selectedPaymentLink}
      />


    </section>
  )
}
