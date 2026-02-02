"use client"

import React, { useEffect } from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Clock,
  GraduationCap,
  Monitor,
  Briefcase,
  CheckCircle2,
  Play,
  ChevronDown,
  ChevronUp,
  Lock,
  ArrowRight,
  Award,
  BookOpen,
  Users,
  Code,
  Database,
  Cpu
} from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

// Structured Data for SEO/GEO
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Academia DePC",
      "item": "https://academiadepc.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Diplomaturas",
      "item": "https://academiadepc.com/#diplomaturas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Full Stack React + Node.js + IA",
      "item": "https://academiadepc.com/diplomaturas/programacion-fullstack-react-node-ia"
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Diplomatura en Programación Full Stack con React, Node.js e Inteligencia Artificial",
  "description": "Formación completa en desarrollo web Full Stack: frontend con React.js, backend con Node.js, bases de datos MySQL y MongoDB, e integración con Inteligencia Artificial usando OpenAI API. 9 meses de duración, 100% online, con doble certificación nacional e internacional.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Academia DePC",
    "url": "https://academiadepc.com"
  },
  "courseMode": "online",
  "educationalLevel": "Beginner to Intermediate",
  "inLanguage": "es",
  "numberOfCredits": "9 meses",
  "teaches": ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", "HTML", "CSS", "Git", "GitHub", "OpenAI API", "JWT", "Vercel", "Supabase"],
  "occupationalCredentialAwarded": "Diplomatura en Programación Full Stack con certificación nacional e internacional",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "P9M",
    "courseWorkload": "PT200H"
  },
  "offers": {
    "@type": "Offer",
    "category": "Subscription",
    "availability": "https://schema.org/InStock"
  }
}

const planDeEstudio = [
  {
    unidad: 1,
    titulo: "HTML, CSS, Flexbox, Vercel, Github avanzado",
    clases: [
      "Introducción al desarrollo web",
      "HTML",
      "HTML5 y Formularios",
      "Git y Github",
      "CSS",
      "CSS (continuación)",
      "CSS Flexbox",
      "CSS Flexbox + Position",
      "CSS Mediaqueries y responsive design (Desktop First)",
      "CSS Mediaqueries + Mobile First",
      "Animaciones + Transiciones + V0 chat vercel",
      "Git Github avanzado",
      "TP integrador + Figma"
    ],
    tecnologias: ["HTML5", "CSS", "Vercel", "Git"]
  },
  {
    unidad: 2,
    titulo: "Javascript, Copilot IA, Tensorflow IA",
    clases: [
      "JS Introducción a la programación",
      "JS Datos, Operadores, Comparadores",
      "JS Variables, Bloques, Condiciones",
      "JS Bucles",
      "JS Funciones",
      "JS Objetos literales, For in",
      "JS Arrays literales, Metodos, For Of",
      "JS Metodos avanzados de array, Callbacks",
      "JS + DOM Parte 1",
      "JS + DOM Parte 2",
      "JS + DOM + Eventos",
      "JS + TRY CATCH",
      "JS + Fetch API",
      "JS DOM + Integración + Windsurf / Copilot",
      "JS + Machine learning con Tensorflow",
      "TP final integrador de la unidad"
    ],
    tecnologias: ["JavaScript", "Copilot IA", "Tensorflow IA"]
  },
  {
    unidad: 3,
    titulo: "React.js, Vercel",
    clases: [
      "React Introducción",
      "React JSX + Componentes",
      "React Listas y Componentes avanzados",
      "React Estados + Eventos",
      "React Efectos + Fetching",
      "React Práctica integradora en clase",
      "React Router",
      "React Context",
      "React Router + Context (Uso de multiples contextos en distintas rutas)",
      "Despliegue en Vercel",
      "TP Final Integrador de la unidad"
    ],
    tecnologias: ["React.js", "Vercel"]
  },
  {
    unidad: 4,
    titulo: "Node.js, Express.js, MySQL, MongoDB, Postman",
    clases: [
      "Introducción a Node.js",
      "Filesystem",
      "Programación orientada a objetos: Clases, Encapsulamiento",
      "Programación orientada a objetos: Herencias, Methods, Polimorfismo",
      "Programación orientada a objetos: Práctica integradora",
      "Bases de datos relacionales",
      "Diagramas Entidad Relación",
      "SQL Parte 1",
      "SQL Parte 2",
      "Bases de datos no relacionales",
      "MongoDB + Comandos",
      "Mongoose Parte 1",
      "Mongoose Parte 2",
      "MySQL2 Promises Parte 1",
      "MySQL2 Promises Parte 2",
      "Express + Postman",
      "Express + body, params, query",
      "Express + Routing + Middlewares",
      "Express + Arquitectura clean + Programacion en capas",
      "Despliegue en Vercel + Postman con entornos",
      "TP Final integrador de la unidad"
    ],
    tecnologias: ["Node.js", "Express.js", "MySQL", "MongoDB", "Postman"]
  },
  {
    unidad: 5,
    titulo: "Seguridad (Autenticación, Token, Mailers, DDOS, API)",
    clases: [
      "Registro y autenticación de usuarios por tokens + Encriptación",
      "Nodemailer + Envío de mails de validación",
      "Bearer token + Manejo de sesiones",
      "Manejo de ataques DDOS + Registros de acciones",
      "Documentación de una API",
      "TP Final integrador de la unidad"
    ],
    tecnologias: ["JWT", "bcrypt", "Nodemailer"]
  },
  {
    unidad: 6,
    titulo: "Integración React + API REST (OpenAI API, Supabase.js)",
    clases: [
      "Consumo de nuestra API con React",
      "Manejo de sesión desde el frontend",
      "Práctica real de uso de nuestra API + Buenas prácticas",
      "Supabase.js",
      "Manejo de archivos con Supabase",
      "OpenAI API + Creación de un asistente virtual",
      "Entrega TP final integrador de la cursada"
    ],
    tecnologias: ["OpenAI API", "Supabase.js", "React"]
  }
]

export default function DiplomaturaFullStackPage() {
  const [openUnidad, setOpenUnidad] = useState<number | null>(1)
  const [showVideo, setShowVideo] = useState(false)
  const [formData, setFormData] = useState({ nombre: "", email: "", whatsapp: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ nombre?: string; email?: string; whatsapp?: string }>({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}
    
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido"
    if (!formData.email.trim()) newErrors.email = "El email es requerido"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email inválido"
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "El WhatsApp es requerido"
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setFormSubmitted(true)
    setShowVideo(true)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

      {/* Hero Section - Similar to Home */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-indigo-600">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <GraduationCap className="w-4 h-4 text-indigo-300" />
              <span className="text-sm text-white/90">Diplomatura con certificación Nacional e Internacional</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="text-balance">Programación </span>
              <span className="bg-gradient-to-r from-indigo-300 to-white bg-clip-text text-transparent">Full Stack + IA</span>
            </h1>

            <p className="text-xl sm:text-2xl text-indigo-200 font-medium mb-6">React.js / Node.js + Inteligencia Artificial</p>

            {/* Subheadline */}
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
              Domina el desarrollo web completo: frontend con React.js, backend con Node.js, bases de datos e integración con Inteligencia Artificial.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/#precios">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-[#2D1B4E] font-semibold shadow-lg px-8 h-12 text-base">
                  Inscribirme ahora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 hover:bg-white/10 px-8 h-12 text-base text-white bg-transparent"
                onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-4 h-4" />
                Ver primera clase gratis
              </Button>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Clock className="w-5 h-5 text-indigo-300" />
                <span className="text-white">9 meses de duración</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Monitor className="w-5 h-5 text-indigo-300" />
                <span className="text-white">100% online</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <GraduationCap className="w-5 h-5 text-indigo-300" />
                <span className="text-white">Sin conocimientos previos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Certificaciones incluidas</h2>
            <p className="text-gray-600">Certificación Nacional e Internacional con acceso exclusivo al Portal de Empleo</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-camara-argentina.png"
                alt="Logo Camara Argentina de Comercio - Certificacion Nacional para Diplomatura Full Stack"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-oeip.png"
                alt="Logo OEIP Organizacion de Estados Iberoamericanos para la Educacion - Certificacion Internacional"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-portal-de-empleo-sin-fondo.png"
                alt="Portal de Empleo exclusivo para egresados de Academia DePC"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Que aprenderas - Bento Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-600 font-medium">Contenido del programa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Qué vas a aprender?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Formación completa para convertirte en Desarrollador Full Stack con habilidades en IA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>HTML5, CSS3, Flexbox y Grid</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>JavaScript ES6+ y DOM</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>React.js con Hooks y Context</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>React Router y estado global</span>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Node.js y Express.js</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>APIs RESTful y arquitectura</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>MySQL y MongoDB</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Autenticación JWT y bcrypt</span>
                </li>
              </ul>
            </div>

            {/* IA y Herramientas */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IA y Herramientas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>OpenAI API y asistentes virtuales</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Copilot y Tensorflow</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Git, GitHub y Vercel</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Supabase y deploy en la nube</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil del egresado */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-emerald-600 font-medium">Perfil profesional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Perfil del egresado</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Al finalizar la diplomatura, serás capaz de desempeñarte como <strong>Desarrollador/a Fullstack Junior</strong>, con las competencias necesarias para desarrollar aplicaciones web modernas de punta a punta, comprendiendo tanto el desarrollo del lado del cliente (frontend) como del lado del servidor (backend).
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Salida laboral</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Integrarte a equipos de desarrollo como desarrollador/a junior en entornos agiles</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Desempenarte como freelancer en proyectos propios o de terceros</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Continuar tu formacion hacia perfiles especializados en frontend, backend o arquitectura</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2D1B4E] to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Tecnologias que dominaras</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", "HTML/CSS", "Git/GitHub", "OpenAI API", "JWT", "Vercel", "Supabase"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-3 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de estudio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-600 font-medium">Programa completo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Plan de estudio</h2>
            <p className="text-gray-600">6 unidades con contenido teorico-practico y proyecto final integrador</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {planDeEstudio.map((unidad) => (
              <div 
                key={unidad.unidad}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenUnidad(openUnidad === unidad.unidad ? null : unidad.unidad)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold">{unidad.unidad}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Unidad {unidad.unidad}</h3>
                      <p className="text-sm text-gray-600">{unidad.titulo}</p>
                    </div>
                  </div>
                  {openUnidad === unidad.unidad ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {openUnidad === unidad.unidad && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {unidad.tecnologias.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {unidad.clases.map((clase, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                            {idx + 1}
                          </span>
                          {clase}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
              <Play className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-600 font-medium">Clase de prueba</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Primera clase gratuita</h2>
            <p className="text-gray-600">Completa el formulario para acceder al video de la primera clase</p>
          </div>

          {!formSubmitted ? (
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Video Preview (blurred) */}
                <div className="relative aspect-video bg-gradient-to-br from-[#2D1B4E] to-indigo-600 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-12 h-12 text-white/80 mx-auto mb-4" />
                      <p className="text-white/90 font-medium">Completa el formulario para desbloquear</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className={errors.nombre ? "border-red-500" : ""}
                    />
                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electronico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp
                    </label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="+54 11 1234 5678"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className={errors.whatsapp ? "border-red-500" : ""}
                    />
                    {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                  </div>
                  <Button type="submit" className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Ver primera clase gratis
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="aspect-video">
                <video
                  controls
                  controlsList="nodownload"
                  className="w-full h-full"
                  poster="/images/course-fullstack-ia.jpg"
                >
                  <source src="https://s3.us-east-1.amazonaws.com/academia.depcsuite.com/videos/Curso-React-Node-IA.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comenza tu carrera como Desarrollador Full Stack
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Accede a todas las diplomaturas, webinars, hackathones y al portal de empleo con una sola suscripcion.
          </p>
          <Link href="/#precios">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#2D1B4E] font-semibold shadow-lg px-8 h-12 text-base">
              Ver planes de suscripcion
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
