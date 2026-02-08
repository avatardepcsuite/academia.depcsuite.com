"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ChevronDown, HelpCircle, GraduationCap, CreditCard, Users, Award, Calendar, Laptop } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const faqCategories = [
  {
    id: "general",
    title: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "¿Qué es Academia DePC?",
        answer: "Academia DePC es una comunidad educativa tech que ofrece diplomaturas y cursos de programación con doble certificación (nacional e internacional). Contamos con clases en vivo, webinars gratuitos, hackathones presenciales y un portal de empleo exclusivo para nuestros egresados en Argentina y Latinoamérica."
      },
      {
        question: "¿Necesito conocimientos previos para inscribirme?",
        answer: "No, nuestras diplomaturas están diseñadas para comenzar desde cero. No se requieren conocimientos previos de programación. Solo necesitás una computadora con conexión a internet y ganas de aprender."
      },
      {
        question: "¿Las clases son en vivo o grabadas?",
        answer: "Ofrecemos ambas modalidades. Las diplomaturas incluyen clases grabadas on demand que podés ver a tu ritmo, más masterclass en vivo con el docente para resolver dudas. Los webinars son en vivo y gratuitos para toda la comunidad."
      },
    ]
  },
  {
    id: "cursos",
    title: "Diplomaturas y Cursos",
    icon: GraduationCap,
    questions: [
      {
        question: "¿Cuánto dura cada diplomatura?",
        answer: "La Diplomatura Full Stack con React, Node.js e IA dura 9 meses. Las diplomaturas de Python y PHP Laravel duran 6 meses cada una. El curso de Excel tiene 12 horas de contenido que podés completar a tu ritmo."
      },
      {
        question: "¿Qué diplomaturas ofrecen?",
        answer: "Ofrecemos: Diplomatura en Programación Full Stack con React, Node.js e Inteligencia Artificial (9 meses), Diplomatura en Programación Python con Django y Vue.js (6 meses), Diplomatura en Programación Web Full Stack con PHP y Laravel (6 meses), Diplomatura en Ciberseguridad Aplicada, y Curso de Fundamentos de Microsoft Excel."
      },
      {
        question: "¿Puedo acceder a las clases en cualquier momento?",
        answer: "Sí, todo el contenido grabado está disponible 24/7 en nuestra plataforma. Podés estudiar a tu propio ritmo y volver a ver las clases las veces que necesites durante tu suscripción."
      },
      {
        question: "¿Qué tecnologías aprenderé en la diplomatura Full Stack?",
        answer: "Aprenderás HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, PostgreSQL, Git, APIs REST, e integración con Inteligencia Artificial usando OpenAI. También trabajarás con metodologías ágiles y herramientas profesionales de desarrollo."
      },
    ]
  },
  {
    id: "certificaciones",
    title: "Certificaciones",
    icon: Award,
    questions: [
      {
        question: "¿Qué certificaciones otorga Academia DePC?",
        answer: "Academia DePC otorga doble certificación: una certificación nacional avalada por la Cámara Argentina de Comercio y una certificación internacional de la OEIP (Organización de Estados Iberoamericanos para la Educación). Además, los egresados tienen acceso exclusivo al Portal de Empleo."
      },
      {
        question: "¿Las certificaciones tienen validez internacional?",
        answer: "Sí, la certificación de la OEIP tiene validez internacional en todos los países iberoamericanos. Esto te permite demostrar tus conocimientos y habilidades en cualquier parte del mundo."
      },
      {
        question: "¿Cómo obtengo mi certificado?",
        answer: "Al completar todos los módulos de tu diplomatura y aprobar las evaluaciones correspondientes, recibirás automáticamente tu doble certificación digital. También podés solicitar el certificado físico con costo adicional de envío."
      },
    ]
  },
  {
    id: "pagos",
    title: "Pagos y Suscripción",
    icon: CreditCard,
    questions: [
      {
        question: "¿Qué incluye la suscripción a Academia DePC?",
        answer: "La suscripción incluye acceso a todas las diplomaturas, webinars en vivo, masterclass con docentes, hackathones presenciales, acceso exclusivo al Portal de Empleo, comunidad activa de estudiantes y doble certificación al completar cada diplomatura."
      },
      {
        question: "¿Cuáles son las formas de pago disponibles?",
        answer: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), MercadoPago, transferencia bancaria y pagos en efectivo a través de Rapipago y PagoFácil. Para pagos internacionales aceptamos PayPal y tarjetas internacionales."
      },
      {
        question: "¿Puedo pagar en cuotas?",
        answer: "Sí, ofrecemos financiación en cuotas sin interés con tarjetas de crédito participantes. La cantidad de cuotas disponibles depende del plan que elijas y de tu banco emisor."
      },
      {
        question: "¿Ofrecen descuentos?",
        answer: "Sí, tenemos convenios con más de 20 empresas e instituciones que ofrecen descuentos exclusivos a sus empleados y asociados. Consultá en la sección de convenios si tu empresa está incluida. También ofrecemos descuentos por pago anual anticipado."
      },
    ]
  },
  {
    id: "comunidad",
    title: "Comunidad y Soporte",
    icon: Users,
    questions: [
      {
        question: "¿Qué es la Comunidad DePC?",
        answer: "Es nuestra red social exclusiva donde estudiantes y egresados pueden conectarse, compartir proyectos, resolver dudas entre pares, participar en eventos y acceder a oportunidades laborales. Es como LinkedIn pero enfocado en nuestra comunidad tech."
      },
      {
        question: "¿Cómo puedo contactar a los docentes?",
        answer: "Podés contactar a los docentes a través de la plataforma de clases, en las masterclass en vivo, y en los canales dedicados dentro de la comunidad. También contamos con tutores que resuelven dudas de forma continua."
      },
      {
        question: "¿Qué son los hackathones?",
        answer: "Los hackathones son eventos presenciales donde estudiantes y egresados trabajan en equipos para resolver desafíos de programación reales. Son una excelente oportunidad para practicar, hacer networking y demostrar tus habilidades."
      },
    ]
  },
  {
    id: "empleo",
    title: "Portal de Empleo",
    icon: Laptop,
    questions: [
      {
        question: "¿Cómo funciona el Portal de Empleo?",
        answer: "El Portal de Empleo es exclusivo para egresados de Academia DePC. Allí encontrarás ofertas laborales de empresas que buscan específicamente perfiles formados con nosotros. Tu perfil profesional y certificaciones estarán visibles para los reclutadores."
      },
      {
        question: "¿Garantizan empleo al terminar?",
        answer: "No garantizamos empleo, pero te brindamos todas las herramientas para conseguirlo: formación de calidad, certificaciones reconocidas, acceso al portal de empleo, networking en hackathones y una comunidad activa que comparte oportunidades."
      },
      {
        question: "¿Qué tipo de empresas publican en el portal?",
        answer: "Empresas de tecnología, startups, consultoras IT, agencias digitales y empresas de diversos rubros que buscan talento tech. Muchas son empresas argentinas y otras ofrecen trabajo remoto para toda Latinoamérica."
      },
    ]
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left hover:text-[#E91E63] transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function PreguntasFrecuentes() {
  const [activeCategory, setActiveCategory] = useState("general")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-[#1A0F2E] via-[#2D1B4E] to-[#4A1942]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <HelpCircle className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-white/90 font-medium">Centro de Ayuda</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-pretty">
            Encontrá respuestas a las preguntas más comunes sobre nuestras diplomaturas, certificaciones, pagos y comunidad.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-32 space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-[#2D1B4E] to-[#E91E63] text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Questions */}
            <div className="lg:col-span-3">
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  className={activeCategory === category.id ? "block" : "hidden"}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D1B4E] to-[#E91E63] flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="divide-y divide-gray-200 px-6">
                      {category.questions.map((item) => (
                        <FAQItem key={item.question} question={item.question} answer={item.answer} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#2D1B4E]/5 to-[#E91E63]/5 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encontraste lo que buscabas?</h3>
            <p className="text-gray-600 mb-6">Nuestro equipo está listo para ayudarte con cualquier consulta adicional.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://wa.me/5491131500093"
                target="_blank"
                rel="noopener noreferrer"
                data-ma="whatsapp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Contactar por WhatsApp
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
  )
}
