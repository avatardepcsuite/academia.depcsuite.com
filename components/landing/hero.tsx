"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, BookOpen, Users } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative flex items-center justify-center pt-8 overflow-hidden bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63]">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-3xl" />
      


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-white/90">Certificaciones con validez Nacional e Internacional</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="text-balance">Formación tech que te </span>
            <span className="bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent">prepara para el mercado laboral</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
            Diplomaturas en vivo y on demand, streaming en vivo, masterclass con docentes, hackathones presenciales y acceso al portal de empleo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-[#2D1B4E] font-semibold shadow-lg px-8 h-12 text-base"
              onClick={() => scrollToSection("precios")}
            >
              Suscribirme ahora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 hover:bg-white/10 px-8 h-12 text-base text-white bg-transparent"
              onClick={() => scrollToSection("formacion")}
            >
              <Play className="mr-2 w-4 h-4" />
              Ver diplomaturas
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/20">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-10 h-10 rounded-lg bg-pink-500/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-pink-300" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Diplomaturas Tech</p>
                <p className="text-sm text-white/70">Online en vivo y grabadas</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-10 h-10 rounded-lg bg-purple-500/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-300" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Masterclass en Vivo</p>
                <p className="text-sm text-white/70">2 clases de consulta al mes</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Doble Certificación</p>
                <p className="text-sm text-white/70">Nacional e internacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
