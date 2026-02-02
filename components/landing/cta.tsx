import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import Link from "next/link"

const included = [
  "Todas las diplomaturas on demand",
  "Masterclass en vivo con docentes",
  "2 clases de consultas al mes",
  "Hackathones presenciales",
  "Webinars de tendencias tech",
  "Certificación nacional e internacional",
  "Acceso al portal de empleo",
  "Credencial digital verificable",
]

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63] rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E91E63]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 mb-6">
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span className="text-sm text-white">Todo incluido con tu suscripción</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Comenzá tu carrera en tech hoy
              </h2>
              <p className="text-lg text-white/80 mb-8 text-pretty">
                Una sola suscripción te da acceso a toda la formación, eventos presenciales, certificaciones y la comunidad más activa de estudiantes tech de Argentina y LATAM.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#precios">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-[#2D1B4E] font-semibold px-8 h-12 text-base">
                    Suscribirme ahora
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#precios">
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white px-8 h-12 text-base bg-transparent">
                    Ver planes y precios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Included List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">Qué incluye tu suscripción:</h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-300" />
                    </div>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
