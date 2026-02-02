import { Briefcase, Search, FileText, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Search,
    title: "Ofertas Laborales",
    description: "Accedé a oportunidades que se ajusten a tus habilidades y formación",
  },
  {
    icon: FileText,
    title: "Perfil Profesional",
    description: "Tu formación y certificaciones visibles para las empresas",
  },
  {
    icon: TrendingUp,
    title: "Capacitación Continua",
    description: "Herramientas de formación para mejorar tu perfil profesional",
  },
  {
    icon: Award,
    title: "Certificaciones Validadas",
    description: "Tus logros respaldados por instituciones reconocidas",
  },
]

export function Employment() {
  return (
    <section id="empleo" className="py-24 relative bg-[#2D1B4E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Portal Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#2D1B4E] to-[#E91E63] px-6 py-4">
                <span className="text-white font-semibold">Portal de Empleo</span>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Search Bar */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <Search className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-sm">Buscar ofertas laborales...</span>
                </div>
                
                {/* Job Listings */}
                <div className="space-y-3">
                  <div className="p-4 rounded-lg border border-gray-200 hover:border-[#E91E63]/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Desarrollador Full Stack Jr.</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-600">Nuevo</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Empresa Tech - Buenos Aires, Argentina</p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">React</span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Node.js</span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Remoto</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-gray-200 hover:border-[#E91E63]/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Analista de Ciberseguridad</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-[#E91E63]/10 text-[#E91E63]">Destacado</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Consultora IT - Rosario, Argentina</p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Seguridad</span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Linux</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-gray-200 hover:border-[#E91E63]/50 transition-colors opacity-60">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Python Developer</h4>
                    </div>
                    <p className="text-sm text-gray-500">Startup Fintech - CABA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-6">
              <Briefcase className="w-4 h-4 text-[#E91E63]" />
              <span className="text-sm text-[#E91E63] font-medium">Exclusivo para graduados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Acceso al Portal de Empleo
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-pretty">
              Nuestros alumnos graduados pueden acceder al portal de empleo de la Cámara Argentina para la Formación Profesional y Capacitación Laboral, donde encontrarás oportunidades laborales que se ajusten a tu formación.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2D1B4E]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#E91E63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <Image
                src="/images/logo-portal-de-empleo-sin-fondo.png"
                alt="Portal de Empleo exclusivo para egresados de Academia DePC"
                width={100}
                height={40}
                className="object-contain opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
