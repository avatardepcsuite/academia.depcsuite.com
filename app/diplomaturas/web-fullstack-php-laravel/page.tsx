"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Clock,
  GraduationCap,
  Monitor,
  Briefcase,
  CheckCircle2,
  Award,
  BookOpen,
  Code,
  Radio,
  Linkedin,
} from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { DiplomaturaLayout } from "@/components/landing/diplomatura-layout"
import { MobilePriceBar } from "@/components/landing/mobile-price-bar"
import { CourseSection, PlanDeEstudio } from "@/components/landing/course-content"
import { EnrollModal } from "@/components/landing/enroll-modal"
import { diplomaturasPricing } from "@/lib/diplomaturas-pricing"

// Structured Data for SEO/GEO
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
      "name": "Full Stack PHP Laravel",
      "item": "https://academia.depcsuite.com/diplomaturas/web-fullstack-php-laravel"
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Diplomatura en Programación Web Full Stack con PHP y Laravel",
  "description": "Aprende desarrollo web profesional desde cero con PHP y el framework Laravel. Crea sistemas, ecommerce y aplicaciones web completas con integración MercadoPago. 6 meses de duración, 100% online, con doble certificación nacional e internacional.",
  "url": "https://academia.depcsuite.com/diplomaturas/web-fullstack-php-laravel",
  "image": "https://academia.depcsuite.com/images/course-php-laravel.jpg",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Academia DePC",
    "url": "https://academia.depcsuite.com",
    "sameAs": [
      "https://www.instagram.com/academiadepc",
      "https://www.linkedin.com/company/academiadepc",
      "https://www.youtube.com/@academiadepc"
    ]
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
    "courseWorkload": "PT120H",
    "duration": "P6M"
  },
  "offers": {
    "@type": "Offer",
    "category": "Diplomatura",
    "price": "240000",
    "priceCurrency": "ARS",
    "availability": "https://schema.org/InStock",
    "url": "https://academia.depcsuite.com/diplomaturas/web-fullstack-php-laravel",
    "validFrom": "2026-01-01"
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

const accent = {
  text: "text-[#FF2D20]",
  bg: "bg-orange-100/60",
  border: "border-orange-200",
}
const buttonGradient = "from-[#FF2D20] to-orange-500 hover:from-[#E5281C] hover:to-orange-600"
const themeGradient = "from-[#FF2D20] to-orange-500"

export default function DiplomaturaPhpLaravelPage() {
  const [enrollOpen, setEnrollOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-white pb-20 lg:pb-0">
        <Header />

        <DiplomaturaLayout
          breadcrumb="Full Stack PHP / Laravel"
          badge="Certificación Nacional e Internacional"
          title="Programación Web Full Stack"
          titleHighlight="PHP / Laravel"
          subtitle="PHP + Laravel + MySQL + E-commerce"
          description="Aprende desarrollo web profesional desde cero con PHP y el framework Laravel. Crea sistemas, ecommerce y aplicaciones web completas con integración MercadoPago."
          heroGradient="from-[#1b1033] via-[#2D1B4E] to-[#FF2D20]"
          accentText="text-orange-300"
          meta={[
            { icon: Clock, label: "6 meses de duración" },
            { icon: Monitor, label: "100% online" },
            { icon: GraduationCap, label: "Sin conocimientos previos" },
          ]}
          certifications={[
            { src: "/images/logo-camara-argentina.png", alt: "Logo Cámara Argentina de Comercio - Certificación Nacional" },
            { src: "/images/logo-oeip.png", alt: "Logo OEIP - Certificación Internacional" },
          ]}
          pricing={diplomaturasPricing["web-fullstack-php-laravel"]}
          buttonGradient={buttonGradient}
          previewGradient={themeGradient}
          firstClassMessage="Hola! Quiero ver la primera clase gratis de la Diplomatura Full Stack PHP Laravel"
          showTrialClass={false}
          onEnroll={() => setEnrollOpen(true)}
        >
          {/* Destacado: Masterclass en vivo con docente */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-orange-200 bg-orange-50">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF2D20] to-orange-500 text-white">
                <Radio className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF2D20] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" aria-hidden="true" />
                  En vivo y on demand
                </span>
                <h2 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl text-balance">
                  Contenido on demand <span className="text-[#FF2D20]">+ 2 masterclass al mes con docente en vivo</span>
                </h2>
                <p className="mt-1.5 text-gray-600 leading-relaxed">
                  La diplomatura es 100% on demand: las clases están grabadas y las cursás a tu ritmo, cuando y desde donde quieras. Además, todos los meses sumás 2 masterclass en vivo con un docente para el seguimiento académico y la consulta de dudas, donde resolvés tus consultas en tiempo real y profundizás los temas más importantes junto a un experto.
                </p>
              </div>
            </div>
          </div>

          {/* Docente */}
          <CourseSection
            eyebrow="Tu docente"
            eyebrowIcon={GraduationCap}
            title="Conocé a tu docente"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center">
              <div className="relative mx-auto h-32 w-32 flex-shrink-0 overflow-hidden rounded-full ring-4 ring-orange-100 sm:mx-0">
                <Image
                  src="/images/docente-nelson.jpg"
                  alt="Nelson Daniel Tarche, docente experto en desarrollo web full stack"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900">Nelson Daniel Tarche</h3>
                <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#FF2D20]">
                  <Code className="h-4 w-4" aria-hidden="true" />
                  Desarrollador Web Full Stack
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Con más de 10 años de experiencia en el rubro, Nelson te acompaña durante toda la diplomatura en las masterclass en vivo, compartiendo casos reales y guiándote en cada proyecto práctico con PHP y Laravel.
                </p>
                <a
                  href="https://www.linkedin.com/in/nelson-daniel-tarche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0a66c2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#004182] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a66c2]/40"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  Ver perfil de LinkedIn
                </a>
              </div>
            </div>
          </CourseSection>

          {/* Lo que aprenderás */}
          <CourseSection
            eyebrow="Lo que aprenderás"
            eyebrowIcon={BookOpen}
            title="Lo que aprenderás"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="rounded-xl border border-gray-300 p-6">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Maquetar interfaces web modernas con HTML5, CSS3 y Bootstrap",
                  "Programar desde cero con PHP, dominando su sintaxis y la POO",
                  "Modelar y consultar bases de datos relacionales con MySQL",
                  "Aplicar el patrón de diseño MVC en tus proyectos",
                  "Dar interactividad al frontend con JavaScript y AJAX",
                  "Desarrollar aplicaciones completas con el framework Laravel",
                  "Trabajar con Eloquent ORM, migraciones, rutas y middleware",
                  "Construir APIs REST profesionales con Laravel",
                  "Integrar pasarelas de pago como MercadoPago en un ecommerce",
                  "Versionar tu código y colaborar usando Git y GitHub",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF2D20] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CourseSection>

          {/* Temas relacionados */}
          <CourseSection
            eyebrow="Temas relacionados"
            eyebrowIcon={Code}
            title="Explora temas relacionados"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="flex flex-wrap gap-3">
              {["PHP", "Laravel", "MySQL", "JavaScript", "AJAX", "Bootstrap", "MVC", "E-commerce", "Git", "Desarrollo Web"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CourseSection>

          {/* Contenido del curso */}
          <CourseSection
            eyebrow="Contenido del curso"
            eyebrowIcon={BookOpen}
            title="Contenido del curso"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <PlanDeEstudio
              unidades={planDeEstudio}
              accentGradient={themeGradient}
              accentText="text-[#FF2D20]"
              accentChipBg="bg-orange-50"
            />
          </CourseSection>

          {/* Requisitos */}
          <CourseSection
            eyebrow="Requisitos"
            eyebrowIcon={CheckCircle2}
            title="Requisitos"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <ul className="space-y-3">
              {[
                "No se requieren conocimientos previos de programación: empezamos desde cero.",
                "Una computadora con conexión a internet (Windows, macOS o Linux).",
                "Ganas de aprender y dedicar tiempo a la práctica con cada unidad.",
              ].map((req) => (
                <li key={req} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF2D20]" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

          {/* Descripción */}
          <CourseSection
            eyebrow="Descripción"
            eyebrowIcon={Code}
            title="Descripción"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                El Programador Web Full Stack es aquel que integra la tecnología Front-End —la interacción y visualización que tiene el usuario con la página web— y el Back-End, que es toda la lógica que provee de seguridad, acceso a datos y lógica de programación del lado del servidor.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A lo largo de esta diplomatura recorrerás todo el flujo de trabajo de un desarrollador profesional: comenzarás maquetando interfaces con HTML, CSS y Bootstrap, aprenderás los fundamentos de PHP y la programación orientada a objetos, modelarás bases de datos relacionales con MySQL y aplicarás el patrón MVC. Luego avanzarás hacia JavaScript y AJAX para el frontend dinámico, y dominarás Laravel para construir aplicaciones robustas, culminando en un proyecto final de ecommerce con integración de MercadoPago.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al finalizar serás capaz de desempeñarte como <strong>Desarrollador/a Web Full Stack Junior</strong>, con las competencias necesarias para desarrollar páginas web, sistemas y sitios ecommerce totalmente funcionales con PHP y Laravel.
              </p>
            </div>

            <div className={`mt-8 bg-gradient-to-br ${themeGradient} rounded-2xl p-6 text-white`}>
              <h3 className="text-xl font-bold mb-5">Tecnologías que dominarás</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["PHP", "Laravel", "MySQL", "JavaScript", "AJAX", "Bootstrap", "HTML/CSS", "Git/GitHub", "MVC", "Eloquent ORM", "APIs REST", "MercadoPago"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-2.5 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-orange-200 flex-shrink-0" />
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </CourseSection>

          {/* Para quién es */}
          <CourseSection
            eyebrow="Para quién es este curso"
            eyebrowIcon={Award}
            title="¿Para quién es este curso?"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Esta diplomatura está pensada para personas que quieren iniciar o consolidar su carrera en el desarrollo web con PHP y Laravel. Al egresar podrás postularte a roles como:
            </p>
            <ul className="space-y-3">
              {[
                "Desarrollador/a Backend con PHP y Laravel",
                "Desarrollador/a Full Stack PHP",
                "Desarrollador/a de sitios e-Commerce",
              ].map((rol) => (
                <li key={rol} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-[#FF2D20] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rol}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

        </DiplomaturaLayout>

        <MobilePriceBar pricing={diplomaturasPricing["web-fullstack-php-laravel"]} buttonGradient={themeGradient} onEnroll={() => setEnrollOpen(true)} />

        <Footer />
      </main>

      <EnrollModal
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        cursoTitle={diplomaturasPricing["web-fullstack-php-laravel"].title}
        pricing={diplomaturasPricing["web-fullstack-php-laravel"]}
      />
    </>
  )
}
