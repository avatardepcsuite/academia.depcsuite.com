"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Partners } from "@/components/landing/partners"
import { Award, GraduationCap, Trophy, BadgePercent } from "lucide-react"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Academia DePC",
      item: "https://academia.depcsuite.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Convenios",
      item: "https://academia.depcsuite.com/convenios",
    },
  ],
}

const beneficios = [
  {
    icon: BadgePercent,
    title: "Hasta 25% de Beca exclusiva",
    description: "Sobre el valor de lista de la diplomatura, al validar tu pertenencia a una institución aliada.",
  },
  {
    icon: Trophy,
    title: "Acceso prioritario a Hackatones",
    description: "Lugar preferencial en la lista de inscripción a nuestros hackatones presenciales.",
  },
]

export default function Convenios() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero - Beca por Convenios */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63] pt-24 pb-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Award className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold">Programa de Becas exclusivas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Beca por Convenios
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-4">
              25% de beca en un pago por transferencia
            </p>
            <p className="text-lg text-white/85 max-w-3xl mx-auto text-pretty leading-relaxed">
              Si formás parte de nuestras empresas e instituciones aliadas, accedés a un programa de Becas exclusivas para
              potenciar tu perfil tecnológico.
            </p>
          </div>
        </section>

        {/* Descripción del programa */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-600 leading-relaxed text-pretty mb-6">
              En <span className="font-semibold text-[#2D1B4E]">Academia DePC Suite</span> entendemos que el futuro del
              trabajo exige una formación constante y de alto nivel. Por eso, consolidamos convenios estratégicos con las
              principales organizaciones del país para facilitarte el acceso a nuestras 
              <span className="font-semibold text-[#2D1B4E]"> Diplomaturas</span>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Al validar tu pertenencia a cualquiera de estas instituciones, obtenés de forma directa los siguientes
              beneficios:
            </p>
          </div>
        </section>

        {/* Beneficios destacados */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {beneficios.map((beneficio) => {
                const Icon = beneficio.icon
                return (
                  <div
                    key={beneficio.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2D1B4E] to-[#E91E63]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{beneficio.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{beneficio.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Convenios / Instituciones aliadas */}
        <Partners />

        {/* CTA Section */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-gradient-to-r from-[#2D1B4E]/5 to-[#E91E63]/5 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tu empresa no figura en la lista?</h3>
              <p className="text-gray-600 mb-6">
                Escribinos y te ayudamos a verificar si podés acceder a tu Beca por Convenios.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://wa.me/5491131500093"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ma="whatsapp"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Consultar por WhatsApp
                </Link>
                <Link
                  href="/#precios"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2D1B4E] to-[#E91E63] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Ver Planes y Precios
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
