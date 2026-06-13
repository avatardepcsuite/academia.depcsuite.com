'use client';

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Video, 
  Sparkles,
  Clock,
  PlayCircle,
  Briefcase,
  BookOpen,
  Lock,
  Zap,
  Hourglass,
  Flame,
  Globe,
  CalendarCheck
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { EnrollModal } from "@/components/landing/enroll-modal"
import { diplomaturasPricing, formatCoursePrice, type DiplomaturaPricing } from "@/lib/diplomaturas-pricing"
import { useCurrency, flagComponents, currencies, type CurrencyCode } from "@/contexts/currency-context"

const diplomaturas = [
  {
    title: "Diplomatura Fundamentos de Ciberseguridad Aplicada",
    subtitle: "Seguridad Informatica",
    description: "Protegé infraestructuras críticas y convertite en el perfil más buscado por las empresas globales desde cero.",
    href: "/diplomaturas/ciberseguridad-aplicada",
    image: "/images/course-cybersecurity.jpg",
    type: "Diplomatura",
    typeColor: "bg-teal-600",
    hours: 12,
    classes: 12,
    duracion: "3 meses (12 clases)",
    diferencial: "Prácticas en entornos reales",
    certificacion: "Nacional e Internacional",
    comienzo: "27 de agosto (docente en vivo)",
    professor: "Prof. Eliana Caballero",
    professorImage: "/docentes/eliana-caballero.png",
    students: 0,
    available: true,
    badge: "Inscribiendo para el vivo",
    badgeColor: "bg-rose-500",
    featured: true,
    price: 300000,
    installments: 6,
    installmentPrice: 50000,
  },
  {
    title: "Diplomatura Programación React.js/Node.js + IA",
    subtitle: "React.js / Node.js + IA",
    description: "Dominá React.js, Node.js e integrá Inteligencia Artificial en tus proyectos.",
    href: "/diplomaturas/programacion-fullstack-react-node-ia",
    image: "/images/course-fullstack-ia.jpg",
    type: "Diplomatura",
    typeColor: "bg-indigo-600",
    hours: 48,
    classes: 48,
    duracion: "12 meses (48 clases)",
    diferencial: "Proyectos reales con IA integrada",
    certificacion: "Nacional e Internacional",
    professor: "Prof. Matías Giménez",
    professorImage: "/images/docente-matias.png",
    students: 1234,
    available: true,
    badge: "Inscribiendo on demand",
    badgeColor: "bg-blue-500",
    featured: true,
    price: 300000,
    installments: 6,
    installmentPrice: 50000,
  },
  {
    title: "Diplomatura Programación Web Full Stack",
    subtitle: "PHP / Laravel",
    description: "Aprendé desarrollo web profesional con PHP y el framework Laravel.",
    href: "/diplomaturas/web-fullstack-php-laravel",
    image: "/images/course-php-laravel.jpg",
    type: "Diplomatura",
    typeColor: "bg-orange-500",
    hours: 36,
    classes: 36,
    duracion: "9 meses (36 clases)",
    diferencial: "Desarrollo web profesional con Laravel",
    certificacion: "Nacional e Internacional",
    professor: "Prof. Nelson Daniel Tarche",
    professorImage: "/images/docente-nelson.jpg",
    students: 2103,
    available: true,
    badge: "Inscribiendo on demand",
    badgeColor: "bg-blue-500",
    price: 240000,
    installments: 6,
    installmentPrice: 40000,
  },
  {
    title: "Diplomatura Programación Python",
    subtitle: "Django + Vue.js + API REST",
    description: "Aprendé Python desde cero hasta nivel intermedio. Ideal para ciencia de datos.",
    href: "/diplomaturas/programacion-python",
    image: "/images/course-python.jpg",
    type: "Diplomatura",
    typeColor: "bg-emerald-600",
    hours: 24,
    classes: 24,
    duracion: "6 meses (24 clases)",
    diferencial: "Ideal para ciencia de datos",
    certificacion: "Nacional e Internacional",
    professor: "Prof. Cristian Mitas",
    professorImage: "/images/docente-cristian.png",
    students: 856,
    available: true,
    badge: "Inscribiendo on demand",
    badgeColor: "bg-blue-500",
    price: 240000,
    installments: 6,
    installmentPrice: 40000,
  },
  {
    title: "Diplomatura Fundamentos de Microsoft Excel",
    subtitle: "De básico a avanzado",
    description: "Dominá Excel desde cero. Aprendé fórmulas, tablas dinámicas y gráficos.",
    href: "/diplomaturas/fundamentos-microsoft-excel",
    image: "/images/course-excel.jpg",
    type: "Curso",
    typeColor: "bg-green-600",
    hours: 12,
    classes: 12,
    duracion: "3 meses (12 clases)",
    diferencial: "De básico a avanzado con casos reales",
    certificacion: "Nacional e Internacional",
    professor: "Prof. Nicolás Villalba",
    professorImage: "/images/docente-nicolas.jpeg",
    students: 3421,
    available: true,
    badge: "Inscribiendo on demand",
    badgeColor: "bg-blue-500",
    price: 120000,
    installments: 6,
    installmentPrice: 20000,
  },
]

const metodologia = [
  {
    icon: Video,
    title: "Clases en vivo y on demand",
    description: "Diplomaturas con clases online con docente en vivo y contenido on demand para repasar cuando lo necesites. Todas incluyen acceso al campus virtual, grabaciones y material de estudio.",
  },
  {
    icon: PlayCircle,
    title: "DePC Streaming",
    description: "Complementá tu formación con contenidos exclusivos: transmisiones sobre productividad con Notion, automatizaciones, IA, armado de CV, desarrollo profesional y más.",
  },
  {
    icon: Clock,
    title: "A tu ritmo",
    description: "Con nuestra modalidad FLEX vos elegís cómo avanzar. Todas las diplomaturas pueden cursarse de forma asincrónica con clases grabadas y materiales en el campus virtual.",
  },
  {
    icon: Briefcase,
    title: "Enfocados en la salida laboral",
    description: "Gracias a nuestro convenio con la Cámara Argentina para la Formación Profesional, accedés a un portal de empleos que facilita la vinculación con empresas y la inserción en el mercado IT.",
  },
]

export function Features() {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [selectedCurso, setSelectedCurso] = useState<string>("")
  const [selectedPricing, setSelectedPricing] = useState<DiplomaturaPricing | undefined>(undefined)
  const { selectedCurrency, setSelectedCurrency } = useCurrency()
  const isArs = selectedCurrency.code === "ARS"

  const handleEnroll = (title: string, href: string) => {
    const slug = href.replace("/diplomaturas/", "")
    const pricing = diplomaturasPricing[slug]
    setSelectedCurso(pricing?.title ?? title)
    setSelectedPricing(pricing)
    setEnrollOpen(true)
  }

  return (
    <section id="formacion" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D1B4E]/10 border border-[#2D1B4E]/20 mb-6">
            <GraduationCap className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-[#2D1B4E] font-medium">Diplomaturas con certificación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Formaciones diseñadas para el mercado laboral
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            Planes de estudio concebidos para que incorpores los conocimientos necesarios para insertarte rápidamente en el mundo de la programación y las tecnologías digitales.
          </p>

          {/* Currency selector */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Ver precios en tu moneda</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
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
        </div>

        {/* Diplomaturas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {diplomaturas.map((curso) => (
            <div
              key={curso.title}
              className={`group relative bg-white rounded-2xl border ${curso.featured ? 'border-rose-300 shadow-lg shadow-rose-100' : 'border-gray-200'} overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Link href={curso.href} aria-label={`Ver ${curso.title}`} className="absolute inset-0 z-10">
                  <Image
                    src={curso.image || "/placeholder.svg"}
                    alt={curso.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${curso.typeColor} text-white text-xs font-medium shadow-lg`}>
                    <BookOpen className="w-3.5 h-3.5" />
                    {curso.type}
                  </span>
                  {curso.badge && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${curso.badgeColor} text-white text-xs font-medium shadow-lg animate-pulse`}>
                      <Zap className="w-3.5 h-3.5" />
                      {curso.badge}
                    </span>
                  )}
                  {!curso.available && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-white text-xs font-medium shadow-lg">
                      <Lock className="w-4 h-4" />
                      Próximamente
                    </span>
                  )}
                </div>
                {/* Featured highlight border */}
                {curso.featured && (
                  <div className="absolute inset-0 ring-2 ring-rose-500/50 ring-inset pointer-events-none" />
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-balance">
                  {curso.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                  {curso.description}
                </p>

                {/* Detalles */}
                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Hourglass className="w-4 h-4 text-[#5C1F5C] mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold text-gray-900">Duración:</span> {curso.duracion}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Flame className="w-4 h-4 text-[#E91E63] mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold text-gray-900">Diferencial:</span> {curso.diferencial}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Globe className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><span className="font-semibold text-gray-900">Certificación:</span> {curso.certificacion}</span>
                  </li>
                  {"comienzo" in curso && curso.comienzo && (
                    <li className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CalendarCheck className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span><span className="font-semibold text-gray-900">Comienzo:</span> {curso.comienzo}</span>
                    </li>
                  )}
                </ul>

                {/* Price */}
                <div className="border-t border-gray-100 pt-4 mb-5 mt-auto">
                  <p className="text-xs font-semibold tracking-wide text-[#5C1F5C] uppercase mb-1">
                    {curso.installments} cuotas sin interés de
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {isArs
                        ? `$${curso.installmentPrice?.toLocaleString("es-AR")}`
                        : formatCoursePrice(curso.installmentPrice, selectedCurrency.code)}
                    </span>
                    <span className="text-sm text-gray-500">/mes</span>
                  </div>
                  <p className="text-sm font-semibold text-emerald-600 mt-1">
                    Precio Final:{" "}
                    {isArs
                      ? `$${curso.price?.toLocaleString("es-AR")}`
                      : formatCoursePrice(curso.price, selectedCurrency.code)}
                  </p>
                  {!isArs && (
                    <p className="text-xs text-gray-400 mt-1">Valor aproximado en {selectedCurrency.code}</p>
                  )}
                </div>

                {/* Professor */}
                <div className="flex items-center pb-4">
                  <div className="flex items-center gap-2">
                    {curso.professorImage ? (
                      <div className="w-8 h-8 rounded-full overflow-hidden relative">
                        <Image
                          src={curso.professorImage || "/placeholder.svg"}
                          alt={curso.professor}
                          fill
                          sizes="32px"
                          loading="lazy"
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {curso.professor.split(' ').slice(1).map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <span className="text-sm text-gray-700">{curso.professor}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                {curso.available ? (
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => handleEnroll(curso.title, curso.href)}
                      className="w-full h-12 bg-gradient-to-r from-[#2D1B4E] to-[#5C1F5C] hover:from-[#3D2B5E] hover:to-[#6C2F6C] text-white font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Zap className="w-4 h-4" />
                      Inscribirme ahora
                    </button>
                    <Link
                      href={curso.href}
                      className="w-full h-12 border border-[#2D1B4E]/20 text-[#2D1B4E] hover:bg-[#2D1B4E]/5 font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <BookOpen className="w-4 h-4" />
                      Ver plan de estudio
                    </Link>
                  </div>
                ) : (
                  <div className="w-full h-12 bg-gray-100 text-gray-400 font-medium rounded-md flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    Disponible pronto
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Metodologia */}
        <div className="bg-gradient-to-br from-[#2D1B4E] to-[#5C1F5C] rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-white font-medium">Cómo funciona</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Metodología de aprendizaje
            </h3>
            <p className="text-white/70">Combiná el estudio autónomo con el acompañamiento de docentes expertos</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metodologia.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  {item.icon && <item.icon className="w-6 h-6 text-pink-400" />}
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instituciones que nos respaldan */}
        <div className="mt-8 px-8 pt-8 md:px-12 md:pt-12 pb-0">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Instituciones que nos respaldan
            </h3>
            <p className="text-gray-600">
              Otorgamos Certificación Nacional e Internacional, y nuestros alumnos obtienen acceso exclusivo al Portal de Empleo.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-0">
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-camara-argentina.png"
                alt="Cámara Argentina para la Formación Profesional"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-oeip.png"
                alt="OEIP - Organización Internacional para la Educación Permanente"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-portal-de-empleo-sin-fondo.png"
                alt="Portal de Empleo"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                loading="lazy"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <EnrollModal open={enrollOpen} onOpenChange={setEnrollOpen} cursoTitle={selectedCurso} pricing={selectedPricing} />
    </section>
  )
}
