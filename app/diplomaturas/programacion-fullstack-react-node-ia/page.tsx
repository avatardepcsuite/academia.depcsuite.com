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
      "name": "Full Stack React + Node.js + IA",
      "item": "https://academia.depcsuite.com/diplomaturas/programacion-fullstack-react-node-ia"
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Diplomatura en Programación Full Stack con React, Node.js e Inteligencia Artificial",
  "description": "Formación completa en desarrollo web Full Stack: frontend con React.js, backend con Node.js, bases de datos MySQL y MongoDB, e integración con Inteligencia Artificial usando OpenAI API. 9 meses de duración, 100% online, con doble certificación nacional e internacional.",
  "url": "https://academia.depcsuite.com/diplomaturas/programacion-fullstack-react-node-ia",
  "image": "https://academia.depcsuite.com/images/course-fullstack-ia.jpg",
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
    "category": "Diplomatura",
    "price": "300000",
    "priceCurrency": "ARS",
    "availability": "https://schema.org/InStock",
    "url": "https://academia.depcsuite.com/diplomaturas/programacion-fullstack-react-node-ia",
    "validFrom": "2026-01-01"
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
      "Express + Arquitectura clean + Programación en capas",
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

const accent = {
  text: "text-indigo-600",
  bg: "bg-indigo-100/60",
  border: "border-indigo-200",
}
const buttonGradient = "from-[#5C1F5C] to-indigo-600 hover:from-[#6C2F6C] hover:to-indigo-700"
const themeGradient = "from-[#5C1F5C] to-indigo-600"

export default function DiplomaturaFullStackPage() {
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
          breadcrumb="Full Stack React + Node.js + IA"
          badge="Certificación Nacional e Internacional"
          title="Diplomatura en Programación"
          titleHighlight="Full Stack + IA"
          subtitle="React.js + Node.js + Inteligencia Artificial"
          description="Domina el desarrollo web completo: frontend con React.js, backend con Node.js, bases de datos e integración con Inteligencia Artificial."
          heroGradient="from-[#1b1033] via-[#2D1B4E] to-indigo-600"
          accentText="text-indigo-300"
          meta={[
            { icon: Clock, label: "9 meses de duración" },
            { icon: Monitor, label: "100% online" },
            { icon: GraduationCap, label: "Sin conocimientos previos" },
          ]}
          certifications={[
            { src: "/images/logo-camara-argentina.png", alt: "Logo Cámara Argentina de Comercio - Certificación Nacional" },
            { src: "/images/logo-oeip.png", alt: "Logo OEIP - Certificación Internacional" },
          ]}
          pricing={diplomaturasPricing["programacion-fullstack-react-node-ia"]}
          buttonGradient={buttonGradient}
          previewGradient={themeGradient}
          firstClassMessage="Hola! Quiero ver la primera clase gratis de la Diplomatura Full Stack React + Node.js + IA"
          docenteVideoUrl="https://www.youtube.com/embed/SiCEjkCstZI?si=HMvXprDPS2mHI5Ka"
          docenteVideoLabel="Conocé al docente"
          onEnroll={() => setEnrollOpen(true)}
        >
          {/* Destacado: Masterclass en vivo con docente */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-indigo-200 bg-indigo-50">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5C1F5C] to-indigo-600 text-white">
                <Radio className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" aria-hidden="true" />
                  En vivo y on demand
                </span>
                <h2 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl text-balance">
                  Contenido on demand <span className="text-indigo-700">+ 2 masterclass al mes con docente en vivo</span>
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
              <div className="relative mx-auto h-32 w-32 flex-shrink-0 overflow-hidden rounded-full ring-4 ring-indigo-100 sm:mx-0">
                <Image
                  src="/images/docente-matias.png"
                  alt="Matías Giménez, docente experto en desarrollo web full stack"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900">Matías Giménez</h3>
                <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  <Code className="h-4 w-4" aria-hidden="true" />
                  Desarrollador Web Full Stack
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Con más de 6 años de experiencia en el rubro, Matías te acompaña durante toda la diplomatura en las masterclass en vivo, compartiendo casos reales y guiándote en cada proyecto práctico con React, Node.js e Inteligencia Artificial.
                </p>
              </div>
            </div>
          </CourseSection>

          {/* Lo que aprenderás — boxed checklist (top of page) */}
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
                  "Maquetar interfaces modernas y responsivas con HTML5, CSS3 y Flexbox",
                  "Programar con JavaScript ES6+, el DOM y la Fetch API",
                  "Construir interfaces dinámicas con React.js, Hooks, Router y Context",
                  "Desarrollar el backend de tus apps con Node.js y Express.js",
                  "Modelar y consultar bases de datos con MySQL y MongoDB",
                  "Crear APIs REST profesionales con arquitectura en capas",
                  "Implementar autenticación segura con JWT, bcrypt y manejo de sesiones",
                  "Integrar Inteligencia Artificial con la OpenAI API y asistentes virtuales",
                  "Aprovechar herramientas de IA como Copilot y Tensorflow",
                  "Versionar tu código y desplegar tus proyectos en Vercel y Supabase",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CourseSection>

          {/* Explora temas relacionados — chips */}
          <CourseSection
            eyebrow="Temas relacionados"
            eyebrowIcon={Code}
            title="Explora temas relacionados"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="flex flex-wrap gap-3">
              {["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "MySQL", "OpenAI API", "Inteligencia Artificial", "Git", "Desarrollo Web"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CourseSection>

          {/* Contenido del curso — accordion */}
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
              accentText="text-indigo-600"
              accentChipBg="bg-indigo-50"
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
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" aria-hidden="true" />
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
                El desarrollo Full Stack es una de las habilidades más demandadas de la industria tecnológica: te permite construir aplicaciones web completas, desde la interfaz que ve el usuario hasta el servidor y la base de datos que las hacen funcionar. En esta diplomatura sumamos además la Inteligencia Artificial, para que aprendas a integrar asistentes y modelos en tus propios proyectos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A lo largo de la cursada recorrerás todo el flujo de trabajo de un desarrollador profesional: comenzarás maquetando interfaces con HTML, CSS y Flexbox, dominarás JavaScript y React.js para el frontend, construirás APIs robustas con Node.js, Express.js, MySQL y MongoDB, e implementarás seguridad con JWT y autenticación por tokens. Finalmente integrarás frontend y backend en un proyecto real, sumando capacidades de IA con la OpenAI API y desplegando todo en la nube.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al finalizar serás capaz de desempeñarte como <strong>Desarrollador/a Full Stack Junior</strong>, con las competencias necesarias para desarrollar aplicaciones web modernas de punta a punta e incorporar Inteligencia Artificial a tus desarrollos.
              </p>
            </div>

            <div className={`mt-8 bg-gradient-to-br ${themeGradient} rounded-2xl p-6 text-white`}>
              <h3 className="text-xl font-bold mb-5">Tecnologías que dominarás</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", "HTML/CSS", "Git/GitHub", "OpenAI API", "JWT", "Vercel", "Supabase"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-2.5 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-indigo-300 flex-shrink-0" />
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
              Esta diplomatura está pensada para personas que quieren iniciar o consolidar su carrera en el desarrollo de software Full Stack. Al egresar podrás postularte a roles como:
            </p>
            <ul className="space-y-3">
              {[
                "Desarrollador/a Full Stack Junior",
                "Desarrollador/a Frontend con React.js",
                "Desarrollador/a Backend con Node.js y Express",
                "Desarrollador/a freelance de aplicaciones web",
              ].map((rol) => (
                <li key={rol} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rol}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

        </DiplomaturaLayout>

        <MobilePriceBar pricing={diplomaturasPricing["programacion-fullstack-react-node-ia"]} buttonGradient={themeGradient} onEnroll={() => setEnrollOpen(true)} />

        <Footer />
      </main>

      <EnrollModal
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        cursoTitle={diplomaturasPricing["programacion-fullstack-react-node-ia"].title}
        pricing={diplomaturasPricing["programacion-fullstack-react-node-ia"]}
      />
    </>
  )
}
