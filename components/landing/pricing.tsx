"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, ChevronDown, GraduationCap, Users, Briefcase, Video, Award, Zap, CreditCard, ArrowRight, Clock, Rocket } from "lucide-react"
import { useCurrency, currencies, flagComponents } from "@/contexts/currency-context"
import { useState, useRef, useEffect } from "react"
import { SubscriptionModal } from "./subscription-modal"

const annualIncluded = [
  {
    icon: GraduationCap,
    title: "Diplomaturas completas",
    text: "IA, Ciberseguridad, React.js, Node.js, Python, Laravel, PHP, Excel",
  },
  {
    icon: Video,
    title: "Webinars ilimitados",
    text: "En vivo y grabados, todos incluidos",
  },
  {
    icon: Users,
    title: "Comunidad Tech activa",
    text: "Networking con estudiantes y profesionales",
  },
  {
    icon: Sparkles,
    title: "Master class en vivo",
    text: "Con docentes expertos de la industria",
  },
  {
    icon: Award,
    title: "Certificación doble",
    text: "Nacional e internacional reconocida",
  },
  {
    icon: Briefcase,
    title: "Portal de empleo",
    text: "Acceso exclusivo a ofertas laborales",
  },
]

export function Pricing() {
  const { selectedCurrency, setSelectedCurrency } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual")
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
    <section id="precios" className="py-24 bg-gradient-to-br from-[#2D1B4E] via-[#1a1030] to-[#2D1B4E] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E91E63]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9C27B0]/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Rocket className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm font-medium text-white">Lanza tu carrera tech hoy</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Una suscripción,<br />
            <span className="bg-gradient-to-r from-[#E91E63] to-[#FF6B9D] bg-clip-text text-transparent">infinitas posibilidades</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-pretty">
            Accedé a todo el ecosistema de formación tech con un solo pago anual
          </p>
        </div>

        {/* Main Card - Desktop optimized layout */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Left side - Features */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Plan Anual Completo</h3>
                    <p className="text-gray-500">Todo lo que necesitas para crecer</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {annualIncluded.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-[#E91E63]/5 transition-colors group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E91E63]/10 to-[#9C27B0]/10 group-hover:from-[#E91E63]/20 group-hover:to-[#9C27B0]/20 flex items-center justify-center transition-colors">
                          <IconComponent className="w-6 h-6 text-[#E91E63]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-0.5">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.text}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Extra benefits */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                    <Check className="w-4 h-4" />
                    Hackathones con descuento
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                    <Check className="w-4 h-4" />
                    Contenido actualizado
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
                    <Check className="w-4 h-4" />
                    Soporte prioritario
                  </div>
                </div>
              </div>

              {/* Right side - Pricing */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#2D1B4E] to-[#1a1030] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E91E63]/20 rounded-full blur-3xl" />
                
                <div className="relative">
                  {/* Currency Selector */}
                  <div className="mb-8">
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                      >
                        {flagComponents[selectedCurrency.code]()}
                        <span className="text-sm text-white/70">Precios en</span>
                        <span className="text-sm font-semibold text-white">{selectedCurrency.code}</span>
                        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {isOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-gray-200 shadow-lg py-2 z-50">
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

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl lg:text-6xl font-bold text-white">$360.000</span>
                    </div>
                    <p className="text-white/60 text-lg">ARS por año</p>
                  </div>

                  {/* Payment options */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <CreditCard className="w-5 h-5 text-[#E91E63]" />
                      <div>
                        <p className="text-white font-medium">Hasta 12 cuotas sin interés</p>
                        <p className="text-white/60 text-sm">Con tarjeta de crédito</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <Clock className="w-5 h-5 text-emerald-400" />
                      <div>
                        <p className="text-white font-medium">4 cuotas por transferencia</p>
                        <p className="text-white/60 text-sm">Sin recargo adicional</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleSubscriptionClick("annual", "https://pagos.depcsuite.com/2880?currency=ARS&medio=8&vendedor=283")}
                    className="w-full h-14 text-lg bg-gradient-to-r from-[#E91E63] to-[#FF6B9D] hover:from-[#D81B60] hover:to-[#E91E63] text-white font-semibold rounded-xl shadow-lg shadow-[#E91E63]/30 hover:shadow-xl hover:shadow-[#E91E63]/40 transition-all group"
                  >
                    Comenzar ahora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-center text-white/50 text-sm mt-4">
                    Cancela cuando quieras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-white/60">
            <Check className="w-5 h-5 text-emerald-400" />
            <span>+2.500 estudiantes activos</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Check className="w-5 h-5 text-emerald-400" />
            <span>Certificación reconocida</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Check className="w-5 h-5 text-emerald-400" />
            <span>Garantía de satisfacción</span>
          </div>
        </div>
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
