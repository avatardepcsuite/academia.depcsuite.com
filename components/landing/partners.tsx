"use client"

import { Sparkles, Gift } from "lucide-react"
import Image from "next/image"

const discountPartners = [
  // Bancos y Fintech
  { name: "Banco Galicia", logo: "/images/convenio-galicia.png", category: "Bancos" },
  { name: "ICBC", logo: "/images/convenio-icbc.svg", category: "Bancos" },
  { name: "Personal", logo: "/images/convenio-personal.svg", category: "Fintech" },
  { name: "Edenor", logo: "/images/convenio-edenor.svg", category: "Servicios" },
  { name: "Swiss Medical", logo: "/images/convenio-swiss-medical.svg", category: "Salud" },
  { name: "OSDE", logo: "/images/convenio-osde.png", category: "Salud" },
  { name: "Prex", logo: "/images/convenio-prex.svg", category: "Fintech" },
  { name: "Sancor Seguros", logo: "/images/convenio-sancor.svg", category: "Seguros" },
  { name: "Prosegur", logo: "/images/convenio-prosegur.svg", category: "Seguridad" },
  { name: "Todo Descuentos", logo: "/images/convenio-todo-descuentos.png", category: "Beneficios" },
  { name: "Circa Beneficios", logo: "/images/convenio-circa.png", category: "Beneficios" },
  { name: "Bonda", logo: "/images/convenio-bonda.svg", category: "Fintech" },
  { name: "Maslow", logo: "/images/convenio-maslow.png", category: "Beneficios" },
  { name: "Full", logo: "/images/convenio-full.png", category: "Beneficios" },
  { name: "GO Integro", logo: "/images/convenio-go-integro.png", category: "Beneficios" },
  { name: "Mas+U", logo: "/images/convenio-mas-u.svg", category: "Beneficios" },
  { name: "CACE", logo: "/images/convenio-cace.png", category: "Cámara" },
  { name: "EAN", logo: "/images/convenio-ean.png", category: "Educación" },
  { name: "Colegio North Hills", logo: "/images/convenio-north-hills.png", category: "Educación" },
  { name: "Fenarc", logo: "/images/convenio-fenarc.png", category: "Instituciones" },
]

export function Partners() {
  return (
    <section id="instituciones" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#2D1B4E]/5 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2D1B4E]/10 to-[#E91E63]/10 border border-[#E91E63]/20 mb-6">
            <Gift className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-[#2D1B4E] font-semibold">Beneficios exclusivos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Convenios de promoción
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            Si sos socio, empleado o cliente de alguna de estas empresas, accedes a{" "}
            <span className="text-[#E91E63] font-semibold">descuentos preferenciales</span> en tu suscripcion
          </p>
        </div>

        {/* Featured discount banner */}
        <div className="bg-gradient-to-r from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63] rounded-2xl p-6 md:p-8 mb-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Oferta especial</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold mb-2">
              Hasta 60% OFF en tu primer mes
            </p>
            <p className="text-white/80 text-sm md:text-base">
              Consulta tu descuento especial al momento de suscribirte
            </p>
          </div>
        </div>

        {/* Partners Grid - All visible */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {discountPartners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center"
            >
              {/* Logo */}
              <div className="relative w-full h-12">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`Logo de ${partner.name} - Convenio de descuento con Academia DePC para ${partner.category}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  loading="lazy"
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 px-0 my-0 py-1.5"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-xl bg-white shadow-sm">
            <p className="text-2xl md:text-3xl font-bold text-[#E91E63]">+20</p>
            <p className="text-sm text-gray-600">Convenios activos</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-white shadow-sm">
            <p className="text-2xl md:text-3xl font-bold text-[#E91E63]">60%</p>
            <p className="text-sm text-gray-600">Descuento maximo</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-white shadow-sm">
            <p className="text-2xl md:text-3xl font-bold text-[#E91E63]">+1.500</p>
            <p className="text-sm text-gray-600">Alumnos beneficiados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
