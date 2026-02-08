'use client';

import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Video, 
  Sparkles,
  Clock,
  FileText,
  MessageCircle,
  BookOpen,
  Users,
  Lock,
  Zap
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const diplomaturas = [
  {
    title: "Diplomatura Programación Full Stack + IA",
    subtitle: "React.js / Node.js + IA",
    description: "Dominá React.js, Node.js e integrá Inteligencia Artificial en tus proyectos.",
    href: "/diplomaturas/programacion-fullstack-react-node-ia",
    image: "/images/course-fullstack-ia.jpg",
    type: "Diplomatura",
    typeColor: "bg-indigo-600",
    hours: 48,
    classes: 48,
    professor: "Prof. Matías Giménez",
    professorImage: "/images/docente-matias.png",
    students: 1234,
    available: true,
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
    professor: "Prof. Cristian Mitas",
    professorImage: "/images/docente-cristian.png",
    students: 856,
    available: true,
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
    professor: "Prof. Nelson Daniel Tarche",
    professorImage: "/images/docente-nelson.jpg",
    students: 2103,
    available: true,
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
    professor: "Prof. Nicolás Villalba",
    professorImage: "/images/docente-nicolas.jpeg",
    students: 3421,
    available: true,
  },
  {
    title: "Diplomatura Ciberseguridad Aplicada",
    subtitle: "Seguridad Informática",
    description: "Protegé sistemas y redes con técnicas profesionales de seguridad informática.",
    href: "/diplomaturas/ciberseguridad-aplicada",
    image: "/images/course-cybersecurity.jpg",
    type: "Diplomatura",
    typeColor: "bg-gray-700",
    hours: 42,
    classes: 42,
    professor: "Prof. Eliana Caballero",
    professorImage: null,
    students: 0,
    available: false,
  },
]

const metodologia = [
  {
    icon: Video,
    title: "Clases On Demand",
    description: "Cientos de horas grabadas de todos los cursos, ejercitaciones, evaluaciones y material teórico-práctico.",
  },
  {
    icon: MessageCircle,
    title: "Masterclass en Vivo",
    description: "2 clases de consultas al mes con el docente en vivo: resolvé dudas, corrección de ejercicios y orientación personalizada.",
  },
  {
    icon: FileText,
    title: "Material Completo",
    description: "Ejercitaciones prácticas, evaluaciones y material teórico para que puedas certificarte.",
  },
  {
    icon: Clock,
    title: "A tu Ritmo",
    description: "Accedé cuando quieras, desde donde quieras. Avanzá según tu disponibilidad.",
  },
]

export function Features() {
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
        </div>

        {/* Diplomaturas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {diplomaturas.map((curso) => (
            <Link
              key={curso.title}
              href={curso.available ? curso.href : "#"}
              className={`group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 block ${!curso.available ? "cursor-default" : ""}`}
              onClick={(e) => !curso.available && e.preventDefault()}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={curso.image || "/placeholder.svg"}
                  alt={curso.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${curso.typeColor} text-white text-xs font-medium shadow-lg`}>
                    <BookOpen className="w-3.5 h-3.5" />
                    {curso.type}
                  </span>
                  {!curso.available && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-white text-xs font-medium shadow-lg">
                      <Lock className="w-4 h-4" />
                      Próximamente
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-balance">
                  {curso.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {curso.description}
                </p>

                {/* Duration Info */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{curso.hours} horas</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span>{curso.classes} clases</span>
                </div>

                {/* Professor */}
                <div className="flex items-center py-4 border-t border-gray-100">
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

                {/* Action Button */}
                {curso.available ? (
                  <div className="w-full h-12 bg-gradient-to-r from-[#2D1B4E] to-[#5C1F5C] group-hover:from-[#3D2B5E] group-hover:to-[#6C2F6C] text-white font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-300">
                    <Zap className="w-4 h-4" />
                    Ver diplomatura
                  </div>
                ) : (
                  <div className="w-full h-12 bg-gray-100 text-gray-400 font-medium rounded-md flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    Disponible pronto
                  </div>
                )}
              </div>
            </Link>
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
        <div className="mt-16 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Instituciones que nos respaldan
            </h3>
            <p className="text-gray-600">
              Otorgamos Certificación Nacional e Internacional, y nuestros alumnos obtienen acceso exclusivo al Portal de Empleo.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">
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
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="flex items-start gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-[#2D1B4E]/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <GraduationCap className="w-5 h-5 text-[#2D1B4E]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Certificación Nacional</p>
                <p className="text-sm text-gray-500">Avalada por la Cámara Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-[#E91E63]/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <Sparkles className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Certificación Internacional</p>
                <p className="text-sm text-gray-500">Reconocida por OEIP</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Portal de Empleo</p>
                <p className="text-sm text-gray-500">Acceso exclusivo para alumnos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
