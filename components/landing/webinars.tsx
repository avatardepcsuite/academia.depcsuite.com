"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Video, Clock, Users, Play, BookOpen, ArrowRight, Filter, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const MAX_DESCRIPTION_LENGTH = 90

const categories = [
  { id: "all", label: "Todos" },
  { id: "automatizacion", label: "Automatización" },
  { id: "programacion", label: "Programación" },
  { id: "ia", label: "Inteligencia Artificial" },
  { id: "productividad", label: "Productividad" },
  { id: "diseno", label: "Diseño" },
  { id: "empleabilidad", label: "Empleabilidad" },
]

const webinars = [
  {
    title: "Aprendé a crear un Bot de WhatsApp con n8n",
    description: "Aprendé a construir tu propio bot de WhatsApp sin pagar servicios externos. Configurá n8n para recibir y responder mensajes automáticamente, integrar con bases de datos y crear flujos inteligentes de atención.",
    image: "/images/webinar-whatsapp-bot.jpg",
    type: "Webinar",
    typeColor: "bg-green-600",
    category: "automatizacion",
    duration: "90 min",
    instructor: "Prof. Matías Gimenez",
    instructorImage: "/images/docente-matias.png",
    attendees: 456,
    available: true,
  },
  {
    title: "Frameworks frontend: qué son, para qué sirven y por qué usar React",
    description: "Entendé qué es un framework frontend, cuándo usarlo y por qué React domina el mercado. Compará opciones, aprendé conceptos clave como componentes y estado, y descubrí cómo empezar tu primer proyecto.",
    image: "/images/webinar-react-frameworks.jpg",
    type: "Webinar",
    typeColor: "bg-cyan-600",
    category: "programacion",
    duration: "90 min",
    instructor: "Prof. Matías Gimenez",
    instructorImage: "/images/docente-matias.png",
    attendees: 523,
    available: true,
  },
  {
    title: "Cómo extraer datos de la web y cómo evitar que lo hagan con tu sitio",
    description: "Dominá técnicas de web scraping ético para obtener datos públicos y, al mismo tiempo, aprendé a proteger tu sitio de bots y scrapers no autorizados con medidas de seguridad efectivas.",
    image: "/images/webinar-web-scraping.jpg",
    type: "Webinar",
    typeColor: "bg-orange-600",
    category: "programacion",
    duration: "90 min",
    instructor: "Prof. Matías Gimenez",
    instructorImage: "/images/docente-matias.png",
    attendees: 389,
    available: true,
  },
  {
    title: "Potenciar tu productividad con IA: Copilot vs Agent First",
    description: "Compará los dos enfoques más usados de IA para trabajo: asistentes tipo Copilot que te ayudan mientras trabajás vs agentes autónomos que ejecutan tareas completas. Descubrí cuál se adapta mejor a tu flujo.",
    image: "/images/webinar-ai-productivity.jpg",
    type: "Webinar",
    typeColor: "bg-purple-600",
    category: "ia",
    duration: "90 min",
    instructor: "Prof. Matías Gimenez",
    instructorImage: "/images/docente-matias.png",
    attendees: 678,
    available: true,
  },
  {
    title: "Cómo construir un asistente virtual para tu web",
    description: "Creá un chatbot inteligente para tu sitio web usando herramientas modernas de IA. Aprendé a entrenarlo con tu contenido, integrarlo en tu página y ofrecer atención automatizada 24/7 a tus visitantes.",
    image: "/images/webinar-virtual-assistant.jpg",
    type: "Webinar",
    typeColor: "bg-teal-600",
    category: "ia",
    duration: "90 min",
    instructor: "Prof. Matías Gimenez",
    instructorImage: "/images/docente-matias.png",
    attendees: 445,
    available: true,
  },
  {
    title: "Cómo aplicar estrategias de sistemas de autenticación seguros y escalables",
    description: "Implementá autenticación robusta en tus aplicaciones: OAuth, JWT, MFA y mejores prácticas de seguridad. Aprendé a proteger usuarios sin sacrificar la experiencia y a escalar tu sistema de login.",
    image: "/images/webinar-authentication.jpg",
    type: "Webinar",
    typeColor: "bg-red-600",
    category: "programacion",
    duration: "90 min",
    instructor: "Prof. Matías Gimenez",
    instructorImage: "/images/docente-matias.png",
    attendees: 312,
    available: true,
  },
  {
    title: "Aprendé a documentar tus proyectos de forma profesional con IA",
    description: "Usá herramientas de IA para generar documentación técnica de calidad: READMEs, guías de API, comentarios de código y wikis. Ahorrá tiempo y mantené tus proyectos bien documentados sin esfuerzo extra.",
    image: "/images/webinar-documentation-ai.jpg",
    type: "Webinar",
    typeColor: "bg-indigo-600",
    category: "ia",
    duration: "90 min",
    instructor: "Prof. Matías Gimenez",
    instructorImage: "/images/docente-matias.png",
    attendees: 267,
    available: true,
  },
  {
    title: "Webinar Entrevistas 2026: CV, LinkedIn y Respuestas que te Hacen Contratable",
    description: "Cómo prepararte: contar tu experiencia con estructura, armar ejemplos con método STAR, practicar preguntas típicas, emplear herramientas de IA para entrenarse. Qué conocimientos sobre IA están pidiendo las empresas.",
    image: "/images/webinar-interviews.jpg",
    type: "Webinar",
    typeColor: "bg-emerald-600",
    category: "empleabilidad",
    duration: "90 min",
    instructor: "Prof. Pamela Morales",
    attendees: 1203,
    available: true,
  },
  {
    title: "Figma para no diseñadores: Prototipá y Colaborá como un Pro",
    description: "Maquetá pantallas, armá prototipos clicables y aprendé lo esencial de handoff para trabajar fluido con dev/marketing. Ideal para programadores, PMs y roles híbridos que necesitan comunicar ideas visuales.",
    image: "/images/webinar-figma.jpg",
    type: "Webinar",
    typeColor: "bg-pink-600",
    category: "diseno",
    duration: "90 min",
    instructor: "Prof. Sofía Porley",
    instructorImage: "/images/docente-sofia.png",
    attendees: 534,
    available: true,
  },
  {
    title: "Webinar n8n desde Cero: Automatiza tu Trabajo en 90 Minutos",
    description: "Aprendé a crear workflows reales con disparadores, condiciones y conexiones entre herramientas (Sheets, Gmail, Slack/Discord, formularios) para ahorrar tiempo y reducir errores en tu día a día.",
    image: "/images/webinar-n8n-basics.jpg",
    type: "Webinar",
    typeColor: "bg-orange-500",
    category: "automatizacion",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 324,
    available: true,
  },
  {
    title: "Webinar Notion + IA para Productividad: Tu Sistema en 90 Minutos",
    description: "Armá un sistema simple y usable para tareas, proyectos y notas con plantillas, bases de datos y IA para resumir, planificar y documentar sin desorden ni fricción.",
    image: "/images/webinar-notion-productivity.jpg",
    type: "Webinar",
    typeColor: "bg-gray-800",
    category: "productividad",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 891,
    available: true,
  },
  {
    title: "Webinar Canva para el Mundo Laboral: CV, Presentaciones y Contenido que Vende",
    description: "Diseños rápidos y prolijos con plantillas, tipografía, color y formatos: CV, decks, piezas para redes y documentos listos para usar en trabajo real sin ser diseñador.",
    image: "/images/webinar-canva.jpg",
    type: "Webinar",
    typeColor: "bg-teal-500",
    category: "diseno",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 978,
    available: true,
  },
]

function WebinarCard({ webinar }: { webinar: typeof webinars[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = webinar.description.length > MAX_DESCRIPTION_LENGTH

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={webinar.image || "/placeholder.svg"}
          alt={webinar.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${webinar.typeColor} text-white text-xs font-medium shadow-lg`}>
            <BookOpen className="w-3.5 h-3.5" />
            {webinar.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-base font-bold text-gray-900 mb-2 text-balance">
          {webinar.title}
        </h3>
        
        {/* Description with expand/collapse */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            {shouldTruncate && !isExpanded 
              ? `${webinar.description.slice(0, MAX_DESCRIPTION_LENGTH).trim()}...` 
              : webinar.description}
            {shouldTruncate && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#E91E63] font-medium ml-1 hover:text-[#C2185B] transition-colors inline-flex items-center"
              >
                {isExpanded ? "Ver menos" : "Ver más"}
              </button>
            )}
          </p>
        </div>

        {/* Duration Info */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{webinar.duration}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center py-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {webinar.instructorImage ? (
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={webinar.instructorImage || "/placeholder.svg"}
                  alt={webinar.instructor}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-300 group-hover:bg-gradient-to-br group-hover:from-[#E91E63] group-hover:to-[#9C27B0] flex items-center justify-center transition-all duration-300">
                <span className="text-xs font-medium text-gray-600 group-hover:text-white transition-colors duration-300">
                  {webinar.instructor.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
            <span className="text-sm text-gray-700">{webinar.instructor}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link href="#precios">
          <Button className="w-full h-12 bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457] text-white font-medium">
            <ArrowRight className="w-4 h-4 mr-2" />
            Ver webinar
          </Button>
        </Link>
      </div>
    </div>
  )
}

export function Webinars() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredWebinars = activeCategory === "all" 
    ? webinars 
    : webinars.filter(webinar => webinar.category === activeCategory)

  return (
    <section id="webinars" className="py-24 relative bg-gradient-to-b from-white to-[#2D1B4E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-6">
            <Video className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-[#E91E63] font-medium">Webinars incluídos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Webinars sobre las tendencias tech del momento
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            Eventos especiales donde exploramos las tecnologías y herramientas que están transformando la industria. Contenido de vanguardia incluido en tu suscripción.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#E91E63]/50 hover:text-[#E91E63]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Webinars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWebinars.map((webinar) => (
            <WebinarCard key={webinar.title} webinar={webinar} />
          ))}
        </div>
      </div>
    </section>
  )
}
