"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, ChevronDown, GraduationCap, Users, Briefcase, Video, Award, Zap, CreditCard, ArrowRight, Clock, Rocket, ShoppingCart, MessageCircle, Star, Shield } from "lucide-react"
import { useCurrency, currencies, flagComponents } from "@/contexts/currency-context"
import { useState, useRef, useEffect } from "react"
import { SubscriptionModal } from "./subscription-modal"
import Link from "next/link"
import Image from "next/image"

const diplomaturas = [
  {
    id: "ciberseguridad",
    title: "Ciberseguridad Aplicada",
    subtitle: "Hacking Etico + Redes + Criptografia",
    href: "/diplomaturas/ciberseguridad-aplicada",
    image: "/images/course-cybersecurity.jpg",
    duration: "3 meses",
    classes: 12,
    badge: "Nuevo",
    badgeColor: "bg-teal-500",
    featured: true,
  },
  {
    id: "fullstack",
    title: "Full Stack + IA",
    subtitle: "React.js / Node.js + Inteligencia Artificial",
    href: "/diplomaturas/programacion-fullstack-react-node-ia",
    image: "/images/course-fullstack-ia.jpg",
    duration: "9 meses",
    classes: 48,
    badge: "Mas popular",
    badgeColor: "bg-[#E91E63]",
    featured: true,
  },
  {
    id: "php-laravel",
    title: "PHP Laravel",
    subtitle: "Desarrollo Web Full Stack",
    href: "/diplomaturas/web-fullstack-php-laravel",
    image: "/images/course-php-laravel.jpg",
    duration: "6 meses",
    classes: 36,
    badge: null,
    badgeColor: null,
    featured: false,
  },
  {
    id: "python",
    title: "Python + Django",
    subtitle: "Backend + Vue.js + API REST",
    href: "/diplomaturas/programacion-python",
    image: "/images/course-python.jpg",
    duration: "6 meses",
    classes: 24,
    badge: null,
    badgeColor: null,
    featured: false,
  },
  {
    id: "excel",
    title: "Microsoft Excel",
    subtitle: "De basico a avanzado",
    href: "/diplomaturas/fundamentos-microsoft-excel",
    image: "/images/course-excel.jpg",
    duration: "12 horas",
    classes: 12,
    badge: null,
    badgeColor: null,
    featured: false,
  },
]

const subscriptionBenefits = [
  "Acceso a todas las diplomaturas",
  "Streaming en vivo y grabado",
  "Masterclass con docentes",
  "Comunidad tech activa",
  "Portal de empleo exclusivo",
  "Doble certificacion",
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
    <section id="precios" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E91E63]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9C27B0]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-6">
            <ShoppingCart className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm font-medium text-[#E91E63]">Precios y planes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Invierte en tu futuro tech
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Una suscripcion, acceso a todo. Elegí tu moneda y empezá hoy.
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-12">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-[#E91E63]/50 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              {flagComponents[selectedCurrency.code]()}
              <span className="text-gray-600">Precios en</span>
              <span className="font-bold text-gray-900">{selectedCurrency.code}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-xl py-2 z-50">
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
                      selectedCurrency.code === currency.code ? "bg-[#E91E63]/5" : ""
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

        {/* Main Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Monthly Plan */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Plan Mensual
              </span>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {selectedCurrency.symbol}{selectedCurrency.monthly}
                </span>
                <span className="text-gray-500 ml-1">/mes</span>
              </div>
              <p className="text-sm text-gray-500">Sin compromiso, cancela cuando quieras</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {subscriptionBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-gray-600 text-sm">
                  <Check className="w-4 h-4 text-[#E91E63] flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={() => handleSubscriptionClick("monthly", selectedCurrency.monthlyLink)}
              className="w-full h-12 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium"
            >
              Suscribirme mensual
            </Button>
          </div>

          {/* Annual Plan - Featured */}
          <div className="bg-gradient-to-br from-[#2D1B4E] to-[#5C1F5C] rounded-2xl p-8 text-white relative overflow-hidden transform lg:scale-105 shadow-2xl shadow-[#E91E63]/20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E91E63]/20 rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E91E63] text-white text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  Recomendado
                </span>
                <div className="mb-2">
                  <span className="text-lg text-white/60 line-through mr-2">
                    {selectedCurrency.symbol}{selectedCurrency.originalAnnual}
                  </span>
                  <span className="text-5xl font-bold text-white">
                    {selectedCurrency.symbol}{selectedCurrency.annual}
                  </span>
                  <span className="text-white/70 ml-1">/año</span>
                </div>
                <p className="text-sm text-white/70">Ahorra 2 meses con el plan anual</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {subscriptionBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-white/90 text-sm">
                    <Check className="w-4 h-4 text-[#E91E63] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              {/* Payment options */}
              <div className="space-y-2 mb-6 p-3 bg-white/10 rounded-xl">
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="w-4 h-4 text-[#E91E63]" />
                  <span>Hasta 12 cuotas sin interes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>4 cuotas por transferencia</span>
                </div>
              </div>
              
              <Button 
                onClick={() => handleSubscriptionClick("annual", selectedCurrency.annualLink)}
                className="w-full h-14 bg-gradient-to-r from-[#E91E63] to-[#FF6B9D] hover:from-[#D81B60] hover:to-[#E91E63] text-white font-semibold shadow-lg shadow-[#E91E63]/30 text-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comenzar ahora
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                <MessageCircle className="w-4 h-4" />
                Atencion personalizada
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Tenes dudas?</h3>
              <p className="text-gray-600 text-sm">
                Hablá con un asesor y resolvé todas tus consultas antes de inscribirte.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <Shield className="w-5 h-5 text-[#E91E63] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">Asesoramiento gratuito</p>
                  <p className="text-xs text-gray-500">Te ayudamos a elegir la mejor opcion</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <Clock className="w-5 h-5 text-[#E91E63] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">Respuesta rapida</p>
                  <p className="text-xs text-gray-500">Te respondemos en minutos</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/541162845700?text=Hola!%20Quiero%20informacion%20sobre%20los%20planes%20de%20suscripcion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chatear por WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Diplomaturas Catalog */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Que incluye tu suscripcion?</h3>
            <p className="text-gray-600">Acceso completo a todas nuestras diplomaturas y cursos</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {diplomaturas.map((curso) => (
              <Link
                key={curso.id}
                href={curso.href}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#E91E63]/30 transition-all"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={curso.image}
                    alt={curso.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {curso.badge && (
                    <span className={`absolute top-2 left-2 px-2 py-1 rounded-full ${curso.badgeColor} text-white text-[10px] font-bold`}>
                      {curso.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white font-bold text-sm truncate">{curso.title}</h4>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-gray-500 text-xs mb-2 truncate">{curso.subtitle}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{curso.duration}</span>
                    <span>{curso.classes} clases</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-500">
            <Check className="w-5 h-5 text-emerald-500" />
            <span>+2.500 estudiantes activos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Check className="w-5 h-5 text-emerald-500" />
            <span>Certificacion reconocida</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Check className="w-5 h-5 text-emerald-500" />
            <span>Garantia de satisfaccion</span>
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
