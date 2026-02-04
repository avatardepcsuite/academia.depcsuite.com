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
  Code,
  Database,
  ShoppingCart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import axios from "axios"

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
      "name": "Full Stack PHP Laravel",
      "item": "https://academiadepc.com/diplomaturas/web-fullstack-php-laravel"
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Diplomatura en Programación Web Full Stack con PHP y Laravel",
  "description": "Aprende desarrollo web profesional desde cero con PHP y el framework Laravel. Crea sistemas, ecommerce y aplicaciones web completas con integración MercadoPago. 6 meses de duración, 100% online, con doble certificación nacional e internacional.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Academia DePC",
    "url": "https://academiadepc.com"
  },
  "courseMode": "online",
  "educationalLevel": "Beginner to Intermediate",
  "inLanguage": "es",
  "numberOfCredits": "6 meses",
  "teaches": ["PHP", "Laravel", "MySQL", "JavaScript", "AJAX", "HTML", "CSS", "Bootstrap", "Git", "GitHub", "MercadoPago", "E-commerce", "MVC"],
  "occupationalCredentialAwarded": "Diplomatura en Programación Web Full Stack PHP con certificación nacional e internacional",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "P6M"
  }
}

const planDeEstudio = [
  {
    unidad: 1,
    titulo: "Maquetación",
    clases: [
      "Introducción al desarrollo web",
      "HTML5 - Estructura y semántica",
      "HTML5 - Formularios y multimedia",
      "CSS - Estilos y selectores",
      "CSS - Box model y layout",
      "Bootstrap - Framework CSS",
      "Git - Control de versiones",
      "Github - Repositorios remotos",
      "Portfolio personal - Proyecto práctico"
    ],
    tecnologias: ["HTML5", "CSS", "Git", "Bootstrap"]
  },
  {
    unidad: 2,
    titulo: "Fundamentos de Programación",
    clases: [
      "Introducción a PHP - Instalación y entorno",
      "Variables, tipos de datos y operadores",
      "Estructuras de control - Condicionales",
      "Estructuras de control - Bucles",
      "Funciones y modularidad",
      "Arrays y estructuras de datos",
      "Manejo de formularios",
      "Servidor Apache - Configuración",
      "Algoritmos y lógica de programación",
      "JSON - Formato de intercambio de datos",
      "Examen multiple choice unidades 1 y 2"
    ],
    tecnologias: ["PHP", "Apache", "Algoritmos", "JSON"]
  },
  {
    unidad: 3,
    titulo: "Bases de Datos",
    clases: [
      "POO - Clases y objetos",
      "POO - Herencia y polimorfismo",
      "POO - Encapsulamiento y abstracción",
      "Introducción a bases de datos relacionales",
      "Diagramas UML - Modelado de datos",
      "MySQL - Creación de bases de datos",
      "MySQL - Creación de tablas y relaciones",
      "SQL - Consultas básicas (SELECT, INSERT, UPDATE, DELETE)",
      "SQL - Consultas avanzadas (JOIN, GROUP BY)",
      "Conexión PHP con MySQL",
      "Patrón de diseño MVC",
      "Sistema integrado con base de datos",
      "Examen multiple choice unidad 3"
    ],
    tecnologias: ["MySQL", "UML"]
  },
  {
    unidad: 4,
    titulo: "JavaScript y Librerías",
    clases: [
      "JavaScript - Introducción y sintaxis",
      "JavaScript - Variables y tipos de datos",
      "JavaScript - Funciones y scope",
      "JavaScript - POO en JavaScript",
      "JavaScript - DOM Manipulation",
      "JavaScript - Eventos",
      "AJAX - Introducción a la asincronía",
      "AJAX - Fetch API",
      "Single Page Applications",
      "Práctica integradora"
    ],
    tecnologias: ["JavaScript", "AJAX"]
  },
  {
    unidad: 5,
    titulo: "Framework Laravel",
    clases: [
      "Introducción a frameworks",
      "Laravel - Instalación y configuración",
      "Laravel - Arquitectura MVC",
      "Laravel - Routing y Controllers",
      "Laravel - Blade Templates",
      "Laravel - Eloquent ORM",
      "Laravel - Migraciones y Seeders",
      "Laravel - Validaciones",
      "Laravel - Autenticación",
      "Laravel - Middleware",
      "Laravel - API REST",
      "Práctica integradora con Laravel"
    ],
    tecnologias: ["Laravel"]
  },
  {
    unidad: 6,
    titulo: "Proyecto Final",
    clases: [
      "Planificación del proyecto ecommerce",
      "Desarrollo del catálogo de productos",
      "Implementación del carrito de compras",
      "Integración con MercadoPago",
      "Panel de administración",
      "Despliegue en producción",
      "Presentación del proyecto final",
      "Entrega y certificación"
    ],
    tecnologias: ["MercadoPago", "e-Commerce"]
  }
]

export default function DiplomaturaPhpLaravelPage() {
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
      <section className="relative min-h-[80vh] flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-[#2D1B4E] via-[#FF2D20] to-orange-500">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF2D20]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <GraduationCap className="w-4 h-4 text-orange-300" />
              <span className="text-sm text-white/90">Diplomatura con certificación Nacional e Internacional</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="text-balance">Programación Web </span>
              <span className="bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent">Full Stack</span>
            </h1>

            <p className="text-xl sm:text-2xl text-orange-200 font-medium mb-6">PHP / Laravel</p>

            {/* Subheadline */}
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
              Aprende desarrollo web profesional desde cero con PHP y el framework Laravel. Crea sistemas, ecommerce y aplicaciones web completas.
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
                <Clock className="w-5 h-5 text-orange-300" />
                <span className="text-white">6 meses de duración</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Monitor className="w-5 h-5 text-orange-300" />
                <span className="text-white">100% online</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <GraduationCap className="w-5 h-5 text-orange-300" />
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
                alt="Logo Camara Argentina de Comercio - Certificacion Nacional para Diplomatura PHP Laravel"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0">
              <Image
                src="/images/logo-oeip.png"
                alt="Logo OEIP Organizacion de Estados Iberoamericanos para la Educacion - Certificacion Internacional"
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

      {/* Que significa Full Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <Code className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-600 font-medium">Sobre Full Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">¿Qué significa Full Stack?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            El Programador Web Full Stack es aquel que integra la tecnología Front-End - es decir, la interacción y visualización que tiene el usuario con la página web - y el Back-End, que es toda la lógica que provee de seguridad, acceso a datos y lógica de programación en el lado del servidor.
          </p>
        </div>
      </section>

      {/* Que aprenderas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-4">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-orange-600 font-medium">Contenido del programa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Qué vas a aprender?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>HTML5, CSS3 y Bootstrap</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>JavaScript y AJAX</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Single Page Applications</span>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#FF2D20]/20 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-[#FF2D20]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>PHP fundamentos y POO</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Laravel framework completo</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>MySQL y bases de datos</span>
                </li>
              </ul>
            </div>

            {/* E-commerce */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Carrito de compras</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Integración MercadoPago</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Panel de administración</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Que podras crear */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Esto y mucho mas es lo que vas a poder crear</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-semibold text-gray-900">Páginas Web</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="font-semibold text-gray-900">Sitios Ecommerce</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-semibold text-gray-900">Sistemas</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-900">Plataformas</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil del egresado */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-6">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-orange-600 font-medium">Perfil profesional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Perfil del egresado</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Al finalizar la diplomatura, serás capaz de desempeñarte como <strong>Desarrollador/a Web Full Stack Junior</strong>, con las competencias necesarias para desarrollar páginas web, sistemas y sitios ecommerce totalmente funcionales con PHP y Laravel.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Salida laboral</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Desarrollador/a Backend con PHP y Laravel</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Desarrollador/a Full Stack PHP</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Desarrollador/a de sitios e-Commerce</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#FF2D20] to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Tecnologías que dominarás</h3>
              <div className="grid grid-cols-2 gap-4">
                {["PHP", "Laravel", "MySQL", "JavaScript", "AJAX", "HTML/CSS", "Bootstrap", "Git/GitHub", "MercadoPago", "Apache", "MVC", "API REST"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-3 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-orange-200" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-4">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-orange-600 font-medium">Programa completo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Plan de estudio</h2>
            <p className="text-gray-600">6 unidades con contenido teórico-práctico y proyecto final integrador</p>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF2D20] to-orange-500 flex items-center justify-center">
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
                          className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-4">
              <Play className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-orange-600 font-medium">Clase de prueba</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Primera clase gratuita</h2>
            <p className="text-gray-600">Completa el formulario para acceder al video de la primera clase</p>
          </div>

          {!formSubmitted ? (
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video bg-gradient-to-br from-[#FF2D20] to-orange-500 rounded-xl overflow-hidden">
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
                  <Button type="submit" className="w-full h-12 bg-gradient-to-r from-[#FF2D20] to-orange-500 hover:from-[#E52A1D] hover:to-orange-600 text-white">
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
                  poster="/images/course-php-laravel.jpg"
                >
                  <source src="https://s3.us-east-1.amazonaws.com/academia.depcsuite.com/videos/laravel-clase-1.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#2D1B4E] via-[#FF2D20] to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comenzá tu carrera como Desarrollador PHP
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Accede a todas las diplomaturas, webinars, hackathones y al portal de empleo con una sola suscripción.
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
