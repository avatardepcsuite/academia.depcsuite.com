"use client"

import { useState } from "react"

import { Sparkles, Gift } from "lucide-react"
import Image from "next/image"

const discountPartners = [
  // Bancos y Fintech
  { name: "Banco Galicia", logo: "/images/convenio-galicia.png", category: "Bancos", description: "Clientes del Banco Galicia acceden a descuentos exclusivos en todas las suscripciones. El beneficio aplica para titulares de tarjetas de crédito y débito del banco, así como para usuarios de la app Galicia." },
  { name: "ICBC", logo: "/images/convenio-icbc.svg", category: "Bancos", description: "Empleados y clientes de ICBC Argentina obtienen hasta 40% de descuento en su primera suscripción. Válido para todos los productos bancarios y tarjetas del banco." },
  { name: "Personal", logo: "/images/convenio-personal.svg", category: "Fintech", description: "Usuarios de Personal y Personal Pay acceden a beneficios especiales. El descuento se aplica automáticamente al verificar tu número de línea Personal en el proceso de suscripción." },
  { name: "Edenor", logo: "/images/convenio-edenor.svg", category: "Servicios", description: "Empleados de Edenor y empresas del grupo Pampa Energía cuentan con descuentos corporativos. Presentá tu credencial de empleado para acceder al beneficio." },
  { name: "Swiss Medical", logo: "/images/convenio-swiss-medical.svg", category: "Salud", description: "Afiliados a Swiss Medical Group obtienen descuentos en formación tecnológica. El beneficio incluye a titulares y grupo familiar de todas las coberturas médicas." },
  { name: "OSDE", logo: "/images/convenio-osde.png", category: "Salud", description: "Socios de OSDE acceden a tarifas preferenciales en todos los planes de suscripción. Válido para todas las categorías y planes de la prepaga." },
  { name: "Prex", logo: "/images/convenio-prex.svg", category: "Fintech", description: "Usuarios de Prex obtienen cashback especial al pagar con su tarjeta. Además, acceden a promociones exclusivas durante todo el año." },
  { name: "Sancor Seguros", logo: "/images/convenio-sancor.svg", category: "Seguros", description: "Empleados y productores de Sancor Seguros cuentan con beneficios exclusivos para capacitación tecnológica. El convenio también incluye a familiares directos." },
  { name: "Prosegur", logo: "/images/convenio-prosegur.svg", category: "Seguridad", description: "Personal de Prosegur Argentina accede a descuentos especiales en formación IT. El beneficio forma parte del programa de desarrollo profesional de la compañía." },
  { name: "Todo Descuentos", logo: "/images/convenio-todo-descuentos.png", category: "Beneficios", description: "Usuarios de la plataforma Todo Descuentos acceden a promociones exclusivas. Ingresá con tu cuenta para ver el descuento disponible." },
  { name: "Circa Beneficios", logo: "/images/convenio-circa.png", category: "Beneficios", description: "Empresas adheridas a Circa Beneficios ofrecen descuentos a sus colaboradores. Consultá con RRHH de tu empresa si contás con este beneficio." },
  { name: "Bonda", logo: "/images/convenio-bonda.svg", category: "Fintech", description: "Usuarios de Bonda pueden canjear puntos por descuentos en suscripciones. El beneficio se integra con el programa de recompensas de la plataforma." },
  { name: "Maslow", logo: "/images/convenio-maslow.png", category: "Beneficios", description: "Empleados de empresas con convenio Maslow acceden a beneficios educativos. Verificá con tu área de RRHH si tu empresa está adherida al programa." },
  { name: "Full", logo: "/images/convenio-full.png", category: "Beneficios", description: "Plataforma de beneficios corporativos que incluye descuentos en educación tecnológica. Disponible para empleados de empresas adheridas." },
  { name: "GO Integro", logo: "/images/convenio-go-integro.png", category: "Beneficios", description: "Colaboradores de empresas con GO Integro obtienen descuentos exclusivos. El beneficio se gestiona a través de la plataforma de beneficios corporativos." },
  { name: "Más+U", logo: "/images/convenio-mas-u.svg", category: "Beneficios", description: "Usuarios de Más+U acceden a precios especiales en formación tech. El descuento se aplica automáticamente al vincular tu cuenta." },
  { name: "CACE", logo: "/images/convenio-cace.png", category: "Cámara", description: "Socios de la Cámara Argentina de Comercio Electrónico obtienen beneficios preferenciales. El convenio incluye a todas las empresas asociadas y sus empleados." },
  { name: "EAN", logo: "/images/convenio-ean.png", category: "Educación", description: "Estudiantes y egresados de la Universidad EAN acceden a descuentos especiales. El beneficio se extiende también a docentes y personal administrativo." },
  { name: "Colegio North Hills", logo: "/images/convenio-north-hills.png", category: "Educación", description: "Familias del Colegio North Hills acceden a tarifas preferenciales en formación tecnológica. Incluye a padres, alumnos y personal del colegio." },
  { name: "Fenarc", logo: "/images/convenio-fenarc.png", category: "Instituciones", description: "Afiliados a FENARC (Federación Nacional de Trabajadores de Edificios de Renta y Horizontal) obtienen descuentos exclusivos en capacitación tecnológica." },
]

const MAX_DESCRIPTION_LENGTH = 100; // Declare the variable here

function PartnerCard({ partner }: { partner: typeof discountPartners[0] }) {
  return (
    <div className="group h-32 [perspective:1000px]">
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front - Logo */}
        <div className="absolute inset-0 bg-white rounded-xl p-4 shadow-sm [backface-visibility:hidden] flex items-center justify-center">
          <div className="relative w-full h-12">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={`Logo de ${partner.name}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              loading="lazy"
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 px-0 my-0 py-1.5"
            />
          </div>
        </div>
        
        {/* Back - Description */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B4E] to-[#E91E63] rounded-xl p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center overflow-hidden">
          <h4 className="text-white font-semibold text-sm mb-1 truncate">{partner.name}</h4>
          <p className="text-white/90 text-[10px] leading-tight line-clamp-4">
            {partner.description}
          </p>
          <span className="text-white/60 text-[9px] mt-1 uppercase tracking-wide">{partner.category}</span>
        </div>
      </div>
    </div>
  )
}

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
            Si sos socio, empleado o cliente de alguna de estas empresas, accedés a{" "}
            <span className="text-[#E91E63] font-semibold">descuentos preferenciales</span> en tu suscripción
          </p>
        </div>

        {/* Featured discount banner */}
        <div className="bg-gradient-to-r from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63] rounded-2xl p-6 md:p-8 mb-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjgtNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
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
            <PartnerCard key={partner.name} partner={partner} />
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
            <p className="text-sm text-gray-600">Descuento máximo</p>
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
