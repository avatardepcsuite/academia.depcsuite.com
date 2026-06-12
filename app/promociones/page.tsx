"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Partners } from "@/components/landing/partners"

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
      name: "Promociones",
      item: "https://academia.depcsuite.com/promociones",
    },
  ],
}

export default function Promociones() {
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

        {/* Convenios */}
        <div className="pt-16">
          <Partners />
        </div>

        {/* CTA Section */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-gradient-to-r from-[#2D1B4E]/5 to-[#E91E63]/5 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tu empresa no figura en la lista?</h3>
              <p className="text-gray-600 mb-6">
                Escribinos y te ayudamos a verificar si podés acceder a un descuento especial.
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
