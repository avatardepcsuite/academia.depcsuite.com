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
        answer: "Academia DePC es una comunidad educativa tech que ofrece diplomaturas en tecnología, webinars en vivo, masterclass con docentes y hackathones presenciales. Las diplomaturas cuentan con doble certificación (nacional e internacional). A través de la Cámara Argentina de Capacitación, accedés a un portal de empleo exclusivo para egresados en Argentina y Latinoamérica."
      },
      {
        question: "¿Necesitás conocimientos previos para inscribirte?",
        answer: "No. Nuestras diplomaturas están pensadas para que puedas empezar desde cero o para que te enfoques en la aplicación laboral. No necesitás conocimientos previos. Solo necesitás una computadora con conexión a internet y ganas de aprender."
      },
      {
        question: "¿Las clases son en vivo o grabadas?",
        answer: "Ofrecemos ambas modalidades. Las diplomaturas incluyen clases grabadas on demand para que las veas a tu ritmo, y masterclass en vivo con el docente para resolver dudas. Los webinars tratan sobre productividad, actualidad tecnológica, inteligencia artificial y capacitaciones prácticas para aplicar en el trabajo. Con tu suscripción accedés a todos los webinars y diplomaturas."
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
        answer: "La Diplomatura Full Stack con React.js/Node.js + IA dura 9 meses. Las diplomaturas de Python y PHP Laravel duran 6 meses cada una. El curso de Microsoft Excel tiene 12 horas de contenido para que lo completes a tu ritmo."
      },
      {
        question: "¿Qué diplomaturas ofrecen?",
        answer: "Ofrecemos: Diplomatura en Programación Full Stack con React, Node.js e Inteligencia Artificial (9 meses), Diplomatura en Programación Python con Django y Vue.js (6 meses), Diplomatura en Programación Web Full Stack con PHP y Laravel (6 meses), Diplomatura en Ciberseguridad Aplicada, y Curso de Fundamentos de Microsoft Excel."
      },
      {
        question: "¿Podés acceder a las clases en cualquier momento?",
        answer: "Sí. Todo el contenido grabado on demand está disponible 24/7 en nuestra plataforma. Podés estudiar a tu ritmo y volver a ver las clases las veces que necesites durante tu suscripción."
      },
      {
        question: "¿Qué es un webinar?",
        answer: "Es una charla en vivo con un docente sobre una temática específica, orientada a capacitarte en productividad, automatizaciones, inteligencia artificial, programación y tecnología de interés general. Después de la transmisión en vivo, el webinar queda disponible on demand para que lo veas cuando quieras."
      },
      {
        question: "¿Tenés que asistir en vivo al webinar o queda grabado?",
        answer: "Te recomendamos asistir en vivo para poder interactuar con el docente y hacer tus consultas en tiempo real, pero todos los webinars quedan grabados para que los veas después."
      },
      {
        question: "¿Qué son las masterclass y cuál es su objetivo?",
        answer: "Una masterclass es un espacio que podés reservar con el docente, junto con otros estudiantes, para: consultar dudas sobre las diplomaturas, corregir trabajos prácticos en vivo y recibir una orientación más personalizada sobre las tecnologías (según el enfoque del docente)."
      },
      {
        question: "¿Las diplomaturas se tienen que hacer en un tiempo específico?",
        answer: "Cada una tiene un tiempo estimado, pero podés hacerlas a tu ritmo y en el tiempo que necesites, según las horas que le dediques. Como referencia, te recomendamos ver al menos dos clases on demand por semana para mantener un buen ritmo de cursada."
      },
    ]
  },
  {
    id: "certificaciones",
    title: "Certificaciones",
    icon: Award,
    questions: [
      {
        question: "¿Qué certificaciones te da Academia DePC?",
        answer: "Academia DePC otorga doble certificación: una certificación nacional avalada por la Cámara Argentina de Comercio y una certificación internacional de la OEIP (Organización de Estados Iberoamericanos para la Educación). Además, si egresás, accedés de manera exclusiva al Portal de Empleo."
      },
      {
        question: "¿Las certificaciones tienen validez internacional?",
        answer: "Sí. La certificación de la OEIP tiene validez internacional en los países iberoamericanos. Esto te permite respaldar tus conocimientos y habilidades en distintos países."
      },
      {
        question: "¿Cómo obtenés tu certificado?",
        answer: "Cuando completes todos los módulos de tu diplomatura y apruebes las evaluaciones correspondientes, vas a recibir automáticamente tu doble certificación digital."
      },
    ]
  },
  {
    id: "pagos",
    title: "Pagos y Suscripción",
    icon: CreditCard,
    questions: [
      {
        question: "¿Tenés que pagar extra por webinars nuevos, certificados o nuevas diplomaturas?",
        answer: "No. Todo está incluido en tu suscripción."
      },
      {
        question: "¿Hay mínimo de permanencia?",
        answer: "No. En DePC, vos sos dueño de tu educación."
      },
      {
        question: "¿Qué incluye la suscripción a Academia DePC?",
        answer: "Incluye acceso a: todas las diplomaturas, webinars en vivo, masterclass con docentes, hackathones presenciales, Portal de Empleo (exclusivo), comunidad activa de estudiantes y doble certificación al completar cada diplomatura."
      },
      {
        question: "¿Cuáles son las formas de pago disponibles?",
        answer: "El pago de la suscripción se realiza por débito automático con tarjeta de crédito o débito para Argentina, LATAM y Europa. En Colombia, el pago se realiza por transferencia bancaria."
      },
      {
        question: "¿Ofrecen descuentos?",
        answer: "Sí. Tenemos convenios con más de 20 empresas e instituciones que ofrecen descuentos exclusivos para sus empleados y asociados. Revisá la sección de convenios para ver si accedés a algún descuento."
      },
    ]
  },
  {
    id: "comunidad",
    title: "Comunidad y Docentes",
    icon: Users,
    questions: [
      {
        question: "¿Qué es la Comunidad DePC?",
        answer: "Es nuestra red social exclusiva, donde estudiantes y egresados pueden conectarse, compartir proyectos, resolver dudas entre pares, participar en eventos y acceder a oportunidades laborales. Es como LinkedIn, pero enfocada en nuestra comunidad tech."
      },
      {
        question: "¿Cómo podés contactar a los docentes?",
        answer: "Podés contactarlos a través de la plataforma de clases, en las masterclass en vivo (para resolver dudas de forma continua) y en los canales dedicados dentro de la comunidad."
      },
      {
        question: "¿Qué son los hackathones?",
        answer: "Son eventos presenciales donde estudiantes y egresados trabajan en equipo para resolver desafíos reales de programación. Es una gran oportunidad para practicar, hacer networking y mostrar tus habilidades."
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
        answer: "Es exclusivo para egresados de Academia DePC. Vas a encontrar ofertas laborales de empresas que buscan perfiles formados con nosotros. Tu perfil profesional y tus certificaciones van a estar visibles para reclutadores."
      },
      {
        question: "¿Te garantizan empleo al terminar?",
        answer: "No garantizamos empleo, pero te damos herramientas para conseguirlo y para mantenerte actualizado si ya estás trabajando: formación de calidad, certificaciones reconocidas, webinars de actualidad, networking en hackathones y una comunidad activa que comparte oportunidades."
      },
      {
        question: "¿Qué tipo de empresas publican en el portal?",
        answer: "Empresas de tecnología, startups, consultoras IT, agencias digitales y compañías de distintos rubros que buscan talento tech. Muchas son argentinas y otras ofrecen trabajo remoto para toda Latinoamérica."
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
