import { Button } from "@/components/ui/button"
import { Video, Clock, Users, Play, BookOpen, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const webinars = [
  {
    title: "Webinar n8n desde Cero: Automatiza tu Trabajo en 90 Minutos",
    description: "Aprende a crear workflows reales con disparadores, condiciones y conexiones entre herramientas (Sheets, Gmail, Slack/Discord, formularios) para ahorrar tiempo y reducir errores.",
    image: "/images/webinar-n8n-basics.jpg",
    type: "Webinar",
    typeColor: "bg-orange-500",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 324,
    available: true,
  },
  {
    title: "Webinar n8n Pro: Workflows de Alto Impacto (sin código)",
    description: "Diseña automatizaciones más robustas: manejo de errores, reintentos, rutas alternativas, variables y buenas prácticas para que tus flujos funcionen en producción.",
    image: "/images/webinar-n8n-pro.jpg",
    type: "Webinar",
    typeColor: "bg-orange-600",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 189,
    available: true,
  },
  {
    title: "Webinar Agentes con IA + n8n: del Chat a Procesos Automáticos",
    description: "Construí asistentes que clasifican, resumen y responden, y que además ejecutan acciones (tickets, mails, reportes) con control, logs y criterios de seguridad.",
    image: "/images/webinar-ai-agents.jpg",
    type: "Webinar",
    typeColor: "bg-purple-600",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 412,
    available: true,
  },
  {
    title: "Webinar Make vs Zapier vs n8n: Elegí tu Stack de Automatización",
    description: "Comparativa práctica para decidir rápido: costos, facilidad, flexibilidad, mantenimiento y qué herramienta conviene según tu caso (personal, startup, empresa).",
    image: "/images/webinar-make-zapier-n8n.jpg",
    type: "Webinar",
    typeColor: "bg-cyan-600",
    duration: "60 min",
    instructor: "Instructor DePC",
    attendees: 567,
    available: true,
  },
  {
    title: "Webinar Ciberseguridad en la Vida Real: Protegé tus Cuentas y tu Trabajo",
    description: "Entrenamiento express anti-phishing y protección de identidad digital: MFA, gestores de contraseñas, permisos, links/adjuntos y hábitos seguros para trabajo híbrido.",
    image: "/images/webinar-cybersecurity.jpg",
    type: "Webinar",
    typeColor: "bg-red-600",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 723,
    available: true,
  },
  {
    title: "Webinar Notion + IA para Productividad: Tu Sistema en 90 Minutos",
    description: "Armá un sistema simple y usable para tareas, proyectos y notas con plantillas, bases de datos y IA para resumir, planificar y documentar sin desorden.",
    image: "/images/webinar-notion-productivity.jpg",
    type: "Webinar",
    typeColor: "bg-gray-800",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 891,
    available: true,
  },
  {
    title: "Webinar Second Brain con Notion + IA: Organizá Todo (sin Volverte Loco)",
    description: "Construí tu cerebro digital con capturas rápidas, organización por áreas/proyectos, tracking y generación asistida de resúmenes, planes y entregables.",
    image: "/images/webinar-second-brain.jpg",
    type: "Webinar",
    typeColor: "bg-indigo-600",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 645,
    available: true,
  },
  {
    title: "Webinar Entrevistas 2026: CV, LinkedIn y Respuestas que te Hacen Contratable",
    description: "Preparación práctica: contar tu experiencia con estructura, armar ejemplos con método STAR, practicar preguntas típicas y usar IA para ensayar sin sonar robot.",
    image: "/images/webinar-interviews.jpg",
    type: "Webinar",
    typeColor: "bg-emerald-600",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 1203,
    available: true,
  },
  {
    title: "Webinar Figma para No Diseñadores: Prototipá y Colaborá como un Pro",
    description: "Maquetá pantallas, armá prototipos clicables y aprendé lo esencial de handoff para trabajar fluido con dev/marketing (ideal para roles híbridos).",
    image: "/images/webinar-figma.jpg",
    type: "Webinar",
    typeColor: "bg-pink-600",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 534,
    available: true,
  },
  {
    title: "Webinar Canva para el Mundo Laboral: CV, Presentaciones y Contenido que Vende",
    description: "Diseños rápidos y prolijos con plantillas, tipografía, color y formatos: CV, decks, piezas para redes y documentos listos para usar en trabajo real.",
    image: "/images/webinar-canva.jpg",
    type: "Webinar",
    typeColor: "bg-teal-600",
    duration: "90 min",
    instructor: "Instructor DePC",
    attendees: 978,
    available: true,
  },
]

export function Webinars() {
  return (
    <section id="webinars" className="py-24 relative bg-gradient-to-b from-white to-[#2D1B4E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-6">
            <Video className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-[#E91E63] font-medium">Webinars incluidos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Webinars sobre las tendencias tech del momento
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            Eventos especiales donde exploramos las tecnologías y herramientas que están transformando la industria. Contenido de vanguardia incluido en tu suscripción.
          </p>
        </div>

        {/* Webinars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((webinar) => (
            <div
              key={webinar.title}
              className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
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
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-balance line-clamp-2">
                  {webinar.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {webinar.description}
                </p>

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
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">ID</span>
                    </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
