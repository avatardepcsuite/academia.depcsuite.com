import { MapPin, Trophy } from "lucide-react"
import Image from "next/image"

const locations = [
  { name: "Belgrano", city: "CABA" },
  { name: "Shopping TOM", city: "Zona Norte" },
  { name: "Rosario", city: "Centro" },
]

export function Hackathons() {
  return (
    <section id="hackathones" className="py-24 relative bg-[#2D1B4E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
              <Trophy className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-600 font-medium">Eventos presenciales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Hackathones que te conectan con la industria
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-pretty">
              Jornadas intensivas donde equipos compiten resolviendo desafíos reales de tecnología. Networking, aprendizaje práctico y la oportunidad de mostrar tus habilidades ante empresas del sector.
            </p>

            {/* Locations */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3">Sedes disponibles:</p>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200"
                  >
                    <MapPin className="w-4 h-4 text-[#E91E63]" />
                    <span className="text-sm text-gray-900">{location.name}</span>
                    <span className="text-xs text-gray-500">• {location.city}</span>
                  </div>
                ))}
              </div>
            </div>

            
          </div>

          {/* Right Content - Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <Image
                src="/images/hackathon-real.webp"
                alt="Participantes trabajando en un hackathon de la Comunidad DePC"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Hackathon Comunidad DePC - Buenos Aires</p>
                <p className="text-white/80 text-sm">Colaboración en proyectos reales con la Comunidad DePC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
