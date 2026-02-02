"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const testimonials = [
  {
    name: "Martin Gonzalez",
    role: "Egresado Full Stack",
    rating: 5,
    text: "Excelente experiencia! Los profesores explican de manera clara y el contenido esta muy actualizado. Consegui trabajo como desarrollador junior a los 2 meses de terminar.",
    date: "Hace 2 meses",
    avatar: null
  },
  {
    name: "Lucia Fernandez",
    role: "Estudiante Python",
    rating: 5,
    text: "La mejor decision que tome fue inscribirme en DEPC. Las clases en vivo son muy interactivas y el soporte del equipo es increible. 100% recomendado.",
    date: "Hace 1 mes",
    avatar: null
  },
  {
    name: "Santiago Rodriguez",
    role: "Egresado React + Node",
    rating: 5,
    text: "Muy buena la cursada, el profesor tiene mucha paciencia y los proyectos practicos te preparan para el mundo laboral real. Ya estoy trabajando como freelancer!",
    date: "Hace 3 meses",
    avatar: null
  },
  {
    name: "Camila Martinez",
    role: "Estudiante Full Stack",
    rating: 5,
    text: "Super completo el programa. Me gusto mucho que integren IA en el curso, es algo que no vi en otras escuelas. El campus virtual funciona perfecto.",
    date: "Hace 2 semanas",
    avatar: null
  },
  {
    name: "Federico Lopez",
    role: "Egresado Python",
    rating: 5,
    text: "Arranqué sin saber nada de programación y ahora puedo hacer mis propias apps. El acompañamiento es excelente y las hackathons te motivan mucho.",
    date: "Hace 1 mes",
    avatar: null
  },
  {
    name: "Valentina Ruiz",
    role: "Estudiante Data Science",
    rating: 5,
    text: "Las certificaciones nacionales e internacionales le dan mucho valor al CV. Los webinars gratuitos son un plus increíble. Muy agradecida con todo el equipo.",
    date: "Hace 3 semanas",
    avatar: null
  }
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener("scroll", checkScroll)
      return () => ref.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6">
            <Image 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              width={60}
              height={20}
              className="object-contain"
            />
            <span className="text-sm text-amber-700 font-medium">Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Opiniones reales de alumnos que transformaron su carrera con DEPC
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-600 text-sm">+120 opiniones en Google</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all ${
              canScrollLeft 
                ? "hover:bg-gray-50 hover:scale-105 cursor-pointer" 
                : "opacity-0 cursor-default"
            }`}
            aria-label="Ver testimonios anteriores"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all ${
              canScrollRight 
                ? "hover:bg-gray-50 hover:scale-105 cursor-pointer" 
                : "opacity-0 cursor-default"
            }`}
            aria-label="Ver mas testimonios"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 py-4 -mx-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[380px] bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#E91E63]/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                  {`"${testimonial.text}"`}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D1B4E] to-[#E91E63] flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 truncate">{testimonial.role}</p>
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Google Maps */}
        <div className="text-center mt-10">
          <a 
            href="https://share.google/Rf6vai7SFjvyIw5gS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E91E63] hover:text-[#C2185B] font-medium transition-colors"
          >
            Ver todas las opiniones en Google Maps
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
