"use client"

import React, { useEffect } from "react"
import { useState } from "react"
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
  Table,
  BarChart3,
  FileSpreadsheet,
  Calculator
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import axios from "axios"
// Structured Data for SEO/GEO
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso de Fundamentos de Microsoft Excel",
  "description": "Domina Microsoft Excel desde cero. Aprende fórmulas, funciones, tablas dinámicas y gráficos profesionales para destacar en cualquier entorno laboral. 12 horas de contenido, 100% online.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Academia DePC",
    "url": "https://academia.depcsuite.com"
  },
  "courseMode": "online",
  "educationalLevel": "Beginner",
  "inLanguage": "es",
  "teaches": ["Microsoft Excel", "Fórmulas", "Funciones", "Tablas Dinámicas", "Gráficos", "Filtros", "Formatos Condicionales"],
  "occupationalCredentialAwarded": "Certificado de Fundamentos de Microsoft Excel con validez Nacional e Internacional",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT12H"
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Academia DePC",
      "item": "https://academia.depcsuite.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Diplomaturas",
      "item": "https://academia.depcsuite.com/#diplomaturas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Fundamentos de Microsoft Excel",
      "item": "https://academia.depcsuite.com/diplomaturas/fundamentos-microsoft-excel"
    }
  ]
}

const planDeEstudio = [
  {
    unidad: 1,
    titulo: "Introducción a Excel",
    clases: [
      "Concepto de hoja de cálculo",
      "Estructura básica de una hoja de cálculo",
      "Libros y hojas",
      "Celdas, filas, columnas y rangos",
      "Tipos de datos, modificar datos",
      "Guardar un libro de trabajo",
      "Abrir un libro de trabajo"
    ],
    tecnologias: ["Excel Básico"]
  },
  {
    unidad: 2,
    titulo: "El libro de Excel",
    clases: [
      "Manejo de la hoja de trabajo",
      "Selección de celdas",
      "Añadir una selección",
      "Copiar y cortar datos",
      "Pegado básico y Pegado especial - Diferencias",
      "Borrar celdas vs eliminar celdas"
    ],
    tecnologias: ["Excel Intermedio"]
  },
  {
    unidad: 3,
    titulo: "Formatos y estilos",
    clases: [
      "Formatos de las celdas, alineaciones, centrados",
      "Formatos de los datos: numéricos, de texto",
      "Tipos de letras y tamaños",
      "Crear y utilizar estilos",
      "Tablas y bordes",
      "Formatos condicionales"
    ],
    tecnologias: ["Formatos", "Estilos"]
  },
  {
    unidad: 4,
    titulo: "Objetos e hipervínculos",
    clases: [
      "Inserción de imágenes, pdf y demás archivos",
      "Modificación de imágenes",
      "Autoformas y WordArt",
      "Fondos",
      "Hipervínculos"
    ],
    tecnologias: ["Objetos", "Multimedia"]
  },
  {
    unidad: 5,
    titulo: "Fórmulas y funciones",
    clases: [
      "Fórmulas y operadores numéricos",
      "Operadores de texto y lógicos",
      "Introducción a funciones",
      "Biblioteca de funciones y sus categorías",
      "Sintaxis y argumentos",
      "Tipos de referencias a celdas",
      "Errores en funciones y cómo solucionarlos"
    ],
    tecnologias: ["Fórmulas", "Funciones"]
  },
  {
    unidad: 6,
    titulo: "Formularios, listas y filtros",
    clases: [
      "Validación de datos",
      "Formularios de introducción de datos",
      "Listas y series",
      "Filtros y autofiltros"
    ],
    tecnologias: ["Formularios", "Filtros"]
  },
  {
    unidad: 7,
    titulo: "Tablas y gráficos",
    clases: [
      "Graficar tablas con valores",
      "Gráficos recomendados",
      "Tipos de gráficos, series y categorías",
      "Editar gráficos",
      "Insertar Encabezado y Pie de página",
      "Establecer y borrar área de impresión"
    ],
    tecnologias: ["Gráficos", "Tablas Dinámicas"]
  }
]

export default function FundamentosExcelPage() {
  const [openUnidad, setOpenUnidad] = useState<number | null>(1)
  const [showVideo, setShowVideo] = useState(false)
  const [formData, setFormData] = useState({ nombre: "", email: "", whatsapp: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ nombre?: string; email?: string; whatsapp?: string }>({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
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

    const payload = {
      fk_idarea: 2,
      email: formData.email.trim().toLowerCase(),
      nombre: formData.nombre.trim(),
      telefono: formData.whatsapp.trim(),
      carrito: [
        {
          idproducto: 97364,
          cantidad: 1
        },
      ],
    }

    try {
      await axios.post("https://z1pk745fxh.execute-api.us-east-1.amazonaws.com/prod/carrito-olvidado", {
        httpMethod: "POST",
        headers: { "Content-Type": "application/json" },
        queryStringParameters: {},
        pathParameters: {},
        body: JSON.stringify(payload),
        isBase64Encoded: false,
      })

      setFormSubmitted(true)
      setShowVideo(true)
    } catch {
      setFormSubmitted(false)
      setShowVideo(false)
    }
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

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-[#2D1B4E] via-[#217346] to-green-500">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#217346]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <FileSpreadsheet className="w-4 h-4 text-green-300" />
              <span className="text-sm text-white/90">Curso con certificación</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="text-balance">Fundamentos de </span>
              <span className="bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">Microsoft Excel</span>
            </h1>

            <p className="text-xl sm:text-2xl text-green-200 font-medium mb-6">Fórmulas + Tablas Dinámicas + Gráficos</p>

            {/* Subheadline */}
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
              Domina Excel desde cero. Aprende fórmulas, funciones, tablas dinámicas y gráficos profesionales para destacar en cualquier entorno laboral.
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
                <Clock className="w-5 h-5 text-green-300" />
                <span className="text-white">12 horas de contenido</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Monitor className="w-5 h-5 text-green-300" />
                <span className="text-white">100% online</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <GraduationCap className="w-5 h-5 text-green-300" />
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
            <p className="text-gray-600">Certificado de aprobación con validez Nacional e Internacional</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-camara-argentina.png"
                alt="Logo Cámara Argentina de Comercio - Certificación Nacional para cursos de Excel"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-oeip.png"
                alt="Logo OEIP Organización de Estados Iberoamericanos para la Educación - Certificación Internacional"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-portal-de-empleo-sin-fondo.png"
                alt="Portal de Empleo exclusivo para egresados de Academia DePC"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                loading="lazy"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Que vas a poder crear */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
              <FileSpreadsheet className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600 font-medium">Habilidades prácticas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Esto y mucho más es lo que vas a poder crear</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fórmulas</h3>
              <p className="text-sm text-gray-600">Automatiza cálculos complejos</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Table className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tablas Dinámicas</h3>
              <p className="text-sm text-gray-600">Analiza grandes volúmenes de datos</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gráficos</h3>
              <p className="text-sm text-gray-600">Visualiza datos de forma profesional</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FileSpreadsheet className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Formularios</h3>
              <p className="text-sm text-gray-600">Crea formularios de captura de datos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Importancia de Excel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-6">
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 font-medium">¿Por qué aprender Excel?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Importancia de Excel en tu carrera profesional</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Excel es la herramienta más utilizada por todo tipo de instituciones y empresas. Conocer el programa, sus funcionalidades y aplicaciones prácticas, es fundamental para ser competitivo ante búsquedas laborales. Excel no es solo una herramienta más, sino un imprescindible que acompaña de manera ágil la eficiencia, productividad y el éxito en empresas de todos los tamaños.
          </p>
        </div>
      </section>

      {/* Perfil del egresado */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-6">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">Perfil profesional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Perfil del egresado</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Al finalizar el curso, serás capaz de utilizar Microsoft Excel de manera profesional, creando hojas de cálculo complejas con fórmulas, gráficos y tablas dinámicas para el análisis de datos.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aplicaciones laborales</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Analista de datos con Excel</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Asistente administrativo</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contador o auxiliar contable</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gestor de inventarios y logística</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#217346] to-green-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">¿Qué aprenderás?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Fundamentos</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-200" />
                      <span className="text-sm">Estructura de hojas de cálculo y libros</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-200" />
                      <span className="text-sm">Formatos y estilos profesionales</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Fórmulas y Funciones</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-200" />
                      <span className="text-sm">Operadores numéricos, texto y lógicos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-200" />
                      <span className="text-sm">Biblioteca de funciones y referencias</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Análisis de Datos</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-200" />
                      <span className="text-sm">Tablas dinámicas y filtros avanzados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-200" />
                      <span className="text-sm">Gráficos profesionales y visualización</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de estudio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
              <BookOpen className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600 font-medium">Programa completo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Plan de estudio</h2>
            <p className="text-gray-600">7 unidades con contenido teórico-práctico</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {planDeEstudio.map((unidad) => (
              <div 
                key={unidad.unidad}
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenUnidad(openUnidad === unidad.unidad ? null : unidad.unidad)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#217346] to-green-500 flex items-center justify-center">
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
                  <div className="px-6 pb-6 pt-2 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {unidad.tecnologias.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {unidad.clases.map((clase, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
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
      <section id="video-section" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
              <Play className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600 font-medium">Clase de prueba</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Primera clase gratuita</h2>
            <p className="text-gray-600">Completa el formulario para acceder al video de la primera clase</p>
          </div>

          {!formSubmitted ? (
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video bg-gradient-to-br from-[#217346] to-green-500 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-12 h-12 text-white/80 mx-auto mb-4" />
                      <p className="text-white/90 font-medium">Completa el formulario para desbloquear</p>
                    </div>
                  </div>
                </div>

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
                      Correo electrónico
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
                  <Button type="submit" className="w-full h-12 bg-gradient-to-r from-[#217346] to-green-500 hover:from-[#1A5C38] hover:to-green-600 text-white">
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
                  poster="/images/course-excel.jpg"
                >
                  <source src="https://s3.us-east-1.amazonaws.com/academia.depcsuite.com/videos/excel-clase-1.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#2D1B4E] via-[#217346] to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Domina Excel y destaca en cualquier entorno laboral
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Accede a todos los cursos, webinars, hackathones y al portal de empleo con una sola suscripción.
          </p>
          <Link href="/#precios">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#2D1B4E] font-semibold shadow-lg px-8 h-12 text-base">
              Ver planes de suscripción
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
