"use client"

import { useEffect, useState } from "react"
import {
  Clock,
  GraduationCap,
  Monitor,
  Briefcase,
  CheckCircle2,
  Award,
  BookOpen,
  Code,
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
      "name": "Programación Python",
      "item": "https://academia.depcsuite.com/diplomaturas/programacion-python"
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Diplomatura en Programación Python con Django y Vue.js",
  "description": "Aprende Python desde cero, domina Django para el backend y Vue.js para crear interfaces dinámicas. Desarrolla APIs REST profesionales. 6 meses de duración, 100% online, con doble certificación nacional e internacional.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Academia DePC",
    "url": "https://academia.depcsuite.com"
  },
  "courseMode": "online",
  "educationalLevel": "Beginner to Intermediate",
  "inLanguage": "es",
  "numberOfCredits": "6 meses",
  "teaches": ["Python", "Django", "Django REST Framework", "Vue.js", "SQL", "MySQL", "SQLite", "HTML", "CSS", "Bootstrap", "Git", "GitHub", "Axios", "APIs REST"],
  "occupationalCredentialAwarded": "Diplomatura en Programación Python con certificación nacional e internacional",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "P6M"
  }
}

const planDeEstudio = [
  {
    unidad: 1,
    titulo: "Introducción a la programación web",
    clases: [
      "Introducción al desarrollo web",
      "HTML5 - Estructura y semántica",
      "HTML5 - Formularios y multimedia",
      "CSS - Estilos y selectores",
      "CSS - Box model y layout",
      "Bootstrap - Framework CSS",
      "Git - Control de versiones",
      "Github - Repositorios remotos",
      "Publicación en internet"
    ],
    tecnologias: ["HTML5", "CSS", "Bootstrap", "Git"]
  },
  {
    unidad: 2,
    titulo: "Fundamentos de programación con Python",
    clases: [
      "Introducción a Python - Instalación y entorno",
      "Variables, tipos de datos y operadores",
      "Estructuras de control - Condicionales",
      "Estructuras de control - Bucles",
      "Funciones y modularidad",
      "Paquetes y módulos en Python",
      "Creación de paquetes propios",
      "Manejo de archivos externos",
      "POO - Clases y objetos",
      "POO - Herencia y polimorfismo",
      "Generadores e iteradores",
      "Actividad integradora"
    ],
    tecnologias: ["Python"]
  },
  {
    unidad: 3,
    titulo: "Bases de datos en Python",
    clases: [
      "Introducción a bases de datos",
      "Bases de datos relacionales",
      "SQL - Creación de bases de datos",
      "SQL - Creación de tablas",
      "SQL - Consultas básicas (SELECT, INSERT, UPDATE, DELETE)",
      "SQL - Consultas avanzadas (JOIN, GROUP BY)",
      "Claves primarias y foráneas",
      "Índices y optimización",
      "Relaciones entre tablas",
      "Librerías Python para SQL (sqlite3, mysql-connector)",
      "Práctica integradora de bases de datos"
    ],
    tecnologias: ["SQL", "MySQL", "SQLite"]
  },
  {
    unidad: 4,
    titulo: "Desarrollo web en Python",
    clases: [
      "Introducción a frameworks web",
      "Django - Instalación y configuración",
      "Arquitectura MTV (Model-Template-View)",
      "Entornos virtuales con venv",
      "Creación de proyecto Django",
      "URLs y rutas",
      "Views - Vistas basadas en funciones",
      "Templates - Sistema de plantillas",
      "Formularios y validaciones",
      "Vistas genéricas (ListView, DetailView)",
      "Panel de administración Django",
      "Autenticación de usuarios",
      "Testing en Django",
      "Archivos estáticos y media"
    ],
    tecnologias: ["Django", "Python"]
  },
  {
    unidad: 5,
    titulo: "Tecnologías del lado del cliente",
    clases: [
      "API REST - Conceptos fundamentales",
      "Formato JSON",
      "Django REST Framework - Instalación",
      "Serializers y ViewSets",
      "Creación de endpoints API",
      "Autenticación con tokens",
      "Filtrado y paginación",
      "Proyecto API de ecommerce",
      "Vue.js - Introducción",
      "Componentes en Vue",
      "Vue Router - Navegación",
      "Axios - Consumo de APIs",
      "CRUD completo con Vue",
      "Mapeo y filtrado de datos"
    ],
    tecnologias: ["Vue.js", "Django REST", "Axios"]
  },
  {
    unidad: 6,
    titulo: "Lanzamiento",
    clases: [
      "Preparación del proyecto final",
      "Integración frontend y backend",
      "Configuración para producción",
      "Despliegue en servicio en la nube",
      "Presentación del proyecto",
      "Entrega final y certificación"
    ],
    tecnologias: ["Deploy", "Cloud"]
  }
]

const accent = {
  text: "text-emerald-600",
  bg: "bg-emerald-100/60",
  border: "border-emerald-200",
}
const buttonGradient = "from-[#306998] to-emerald-600 hover:from-[#255A80] hover:to-emerald-700"
const themeGradient = "from-[#306998] to-emerald-600"

export default function DiplomaturaPythonPage() {
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
          breadcrumb="Programación Python"
          badge="Certificación Nacional e Internacional"
          title="Diplomatura en Programación"
          titleHighlight="Python"
          subtitle="Django + Vue.js + API REST"
          description="Aprende Python desde cero, domina Django para el backend y Vue.js para crear interfaces dinámicas. Desarrolla APIs REST profesionales."
          heroGradient="from-[#1b1033] via-[#2D1B4E] to-[#306998]"
          accentText="text-emerald-300"
          meta={[
            { icon: Clock, label: "6 meses de duración" },
            { icon: Monitor, label: "100% online" },
            { icon: GraduationCap, label: "Sin conocimientos previos" },
          ]}
          certifications={[
            { src: "/images/logo-camara-argentina.png", alt: "Logo Cámara Argentina de Comercio - Certificación Nacional" },
            { src: "/images/logo-oeip.png", alt: "Logo OEIP - Certificación Internacional" },
          ]}
          pricing={diplomaturasPricing["programacion-python"]}
          buttonGradient={buttonGradient}
          previewGradient={themeGradient}
          firstClassMessage="Hola! Quiero ver la primera clase gratis de la Diplomatura en Python"
          showTrialClass={false}
          onEnroll={() => setEnrollOpen(true)}
        >
          {/* Lo que aprenderás — Udemy-style boxed checklist (top of page) */}
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
                  "Programar desde cero con Python, dominando su sintaxis y la POO",
                  "Construir aplicaciones web completas del backend al frontend",
                  "Desarrollar el backend de tus proyectos con el framework Django",
                  "Crear APIs REST profesionales con Django REST Framework",
                  "Diseñar interfaces dinámicas y reactivas con Vue.js",
                  "Consumir APIs desde el cliente utilizando Axios",
                  "Modelar y consultar bases de datos relacionales con SQL, MySQL y SQLite",
                  "Maquetar interfaces modernas con HTML5, CSS3 y Bootstrap",
                  "Versionar tu código y colaborar usando Git y GitHub",
                  "Desplegar tu proyecto final en un servicio en la nube",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CourseSection>

          {/* Explora temas relacionados — Udemy "related topics" chips */}
          <CourseSection
            eyebrow="Temas relacionados"
            eyebrowIcon={Code}
            title="Explora temas relacionados"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="flex flex-wrap gap-3">
              {["Python", "Django", "Vue.js", "API REST", "SQL", "MySQL", "Bootstrap", "Git", "Desarrollo Web", "Programación"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CourseSection>

          {/* Contenido del curso — Udemy "Course content" accordion */}
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
              accentText="text-emerald-600"
              accentChipBg="bg-emerald-50"
            />
          </CourseSection>

          {/* Requisitos — Udemy "Requirements" */}
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
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

          {/* Descripción — Udemy "Description" */}
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
                Python es un lenguaje de programación versátil y poderoso utilizado en una amplia gama de aplicaciones, desde el desarrollo web hasta la inteligencia artificial. Es conocido por su sintaxis clara y legible, lo que lo hace ideal tanto para principiantes como para programadores experimentados. Con Python, puedes desarrollar tanto el Front-End como el Back-End de aplicaciones web completas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A lo largo de esta diplomatura recorrerás todo el flujo de trabajo de un desarrollador profesional: comenzarás maquetando interfaces con HTML, CSS y Bootstrap, aprenderás los fundamentos de Python y la programación orientada a objetos, modelarás bases de datos relacionales y construirás aplicaciones reales con Django. Luego avanzarás hacia la creación de APIs REST con Django REST Framework e interfaces dinámicas con Vue.js, integrando frontend y backend en un proyecto final que desplegarás en la nube.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al finalizar serás capaz de desempeñarte como <strong>Desarrollador/a Python Junior</strong>, con las competencias necesarias para desarrollar aplicaciones web modernas utilizando Django como framework principal y Vue.js para interfaces dinámicas.
              </p>
            </div>

            <div className={`mt-8 bg-gradient-to-br ${themeGradient} rounded-2xl p-6 text-white`}>
              <h3 className="text-xl font-bold mb-5">Tecnologías que dominarás</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Python", "Django", "Django REST", "Vue.js", "SQL", "MySQL", "HTML/CSS", "Bootstrap", "Git/GitHub", "Axios", "APIs REST", "Deploy"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-2.5 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </CourseSection>

          {/* Para quién es — Udemy "Who this course is for" */}
          <CourseSection
            eyebrow="Para quién es este curso"
            eyebrowIcon={Award}
            title="¿Para quién es este curso?"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Esta diplomatura está pensada para personas que quieren iniciar o consolidar su carrera en el desarrollo de software con Python. Al egresar podrás postularte a roles como:
            </p>
            <ul className="space-y-3">
              {[
                "Desarrollador/a Backend con Python y Django",
                "Desarrollador/a Full Stack Python",
                "Desarrollador/a de APIs REST",
              ].map((rol) => (
                <li key={rol} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rol}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

        </DiplomaturaLayout>

        <MobilePriceBar pricing={diplomaturasPricing["programacion-python"]} buttonGradient={themeGradient} onEnroll={() => setEnrollOpen(true)} />

        <Footer />
      </main>

      <EnrollModal
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        cursoTitle={diplomaturasPricing["programacion-python"].title}
        paymentLink="https://mpago.la/1zE4Vfa"
      />
    </>
  )
}
