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
  FileSpreadsheet,
} from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { DiplomaturaLayout } from "@/components/landing/diplomatura-layout"
import { MobilePriceBar } from "@/components/landing/mobile-price-bar"
import { CourseSection, PlanDeEstudio } from "@/components/landing/course-content"
import { EnrollModal } from "@/components/landing/enroll-modal"
import { diplomaturasPricing } from "@/lib/diplomaturas-pricing"

// Structured Data for SEO/GEO
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso de Fundamentos de Microsoft Excel",
  "description": "Domina Microsoft Excel desde cero. Aprende fórmulas, funciones, tablas dinámicas y gráficos profesionales para destacar en cualquier entorno laboral. 12 horas de contenido, 100% online.",
  "url": "https://academia.depcsuite.com/diplomaturas/fundamentos-microsoft-excel",
  "image": "https://academia.depcsuite.com/images/course-excel.jpg",
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
  "educationalLevel": "Beginner",
  "inLanguage": "es",
  "teaches": ["Microsoft Excel", "Fórmulas", "Funciones", "Tablas Dinámicas", "Gráficos", "Filtros", "Formatos Condicionales"],
  "occupationalCredentialAwarded": "Certificado de Fundamentos de Microsoft Excel con validez Nacional e Internacional",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT12H"
  },
  "offers": {
    "@type": "Offer",
    "category": "Curso",
    "price": "120000",
    "priceCurrency": "ARS",
    "availability": "https://schema.org/InStock",
    "url": "https://academia.depcsuite.com/diplomaturas/fundamentos-microsoft-excel",
    "validFrom": "2026-01-01"
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

const accent = {
  text: "text-green-700",
  bg: "bg-green-100/60",
  border: "border-green-200",
}
const buttonGradient = "from-[#217346] to-green-600 hover:from-[#1a5c38] hover:to-green-700"
const themeGradient = "from-[#217346] to-green-600"

export default function FundamentosExcelPage() {
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
          breadcrumb="Fundamentos de Microsoft Excel"
          badge="Certificación Nacional e Internacional"
          title="Fundamentos de"
          titleHighlight="Microsoft Excel"
          subtitle="Fórmulas + Tablas Dinámicas + Gráficos"
          description="Domina Excel desde cero. Aprende fórmulas, funciones, tablas dinámicas y gráficos profesionales para destacar en cualquier entorno laboral."
          heroGradient="from-[#1b1033] via-[#0f3d27] to-[#217346]"
          accentText="text-green-300"
          meta={[
            { icon: Clock, label: "12 horas de contenido" },
            { icon: Monitor, label: "100% online" },
            { icon: GraduationCap, label: "Sin conocimientos previos" },
          ]}
          certifications={[
            { src: "/images/logo-camara-argentina.png", alt: "Logo Cámara Argentina de Comercio - Certificación Nacional" },
            { src: "/images/logo-oeip.png", alt: "Logo OEIP - Certificación Internacional" },
          ]}
          pricing={diplomaturasPricing["fundamentos-microsoft-excel"]}
          buttonGradient={buttonGradient}
          previewGradient={themeGradient}
          firstClassMessage="Hola! Quiero ver la primera clase gratis del Curso de Fundamentos de Excel"
          showTrialClass={false}
          onEnroll={() => setEnrollOpen(true)}
        >
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
                  "Dominar la estructura de hojas de cálculo, libros y rangos",
                  "Manejar datos: copiar, cortar, pegado especial y selección",
                  "Aplicar formatos, estilos y formatos condicionales profesionales",
                  "Insertar imágenes, objetos, autoformas e hipervínculos",
                  "Construir fórmulas con operadores numéricos, de texto y lógicos",
                  "Utilizar la biblioteca de funciones y sus categorías",
                  "Trabajar con referencias relativas, absolutas y mixtas",
                  "Crear formularios, listas, series y aplicar filtros",
                  "Diseñar gráficos profesionales y tablas dinámicas",
                  "Preparar tus hojas para impresión con encabezados y pies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CourseSection>

          {/* Temas relacionados */}
          <CourseSection
            eyebrow="Temas relacionados"
            eyebrowIcon={FileSpreadsheet}
            title="Explora temas relacionados"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="flex flex-wrap gap-3">
              {["Excel", "Fórmulas", "Funciones", "Tablas Dinámicas", "Gráficos", "Formatos", "Filtros", "Análisis de Datos", "Ofimática", "Productividad"].map((tech) => (
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
              accentText="text-green-700"
              accentChipBg="bg-green-50"
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
                "No se requieren conocimientos previos: empezamos desde cero.",
                "Una computadora con Microsoft Excel instalado y conexión a internet.",
                "Ganas de aprender y practicar con cada unidad del curso.",
              ].map((req) => (
                <li key={req} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-700" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

          {/* Descripción */}
          <CourseSection
            eyebrow="Descripción"
            eyebrowIcon={FileSpreadsheet}
            title="Descripción"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Excel es la herramienta más utilizada por todo tipo de instituciones y empresas. Conocer el programa, sus funcionalidades y aplicaciones prácticas es fundamental para ser competitivo ante búsquedas laborales. Excel no es solo una herramienta más, sino un imprescindible que acompaña la eficiencia, productividad y el éxito en empresas de todos los tamaños.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A lo largo de este curso recorrerás todo lo necesario para usar Excel de manera profesional: desde la estructura básica de las hojas de cálculo y el manejo de datos, hasta los formatos y estilos, la inserción de objetos, las fórmulas y funciones, los formularios y filtros, y la creación de gráficos y tablas dinámicas para el análisis de datos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al finalizar serás capaz de utilizar Microsoft Excel de manera profesional, creando hojas de cálculo complejas con fórmulas, gráficos y tablas dinámicas para el <strong>análisis de datos</strong>.
              </p>
            </div>

            <div className={`mt-8 bg-gradient-to-br ${themeGradient} rounded-2xl p-6 text-white`}>
              <h3 className="text-xl font-bold mb-5">Lo que dominarás</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Hojas y libros", "Formatos", "Estilos", "Fórmulas", "Funciones", "Referencias", "Formularios", "Filtros", "Gráficos", "Tablas Dinámicas", "Validación", "Impresión"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-2.5 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-green-200 flex-shrink-0" />
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
              Este curso está pensado para cualquier persona que quiera sumar una de las herramientas más valoradas del mercado laboral. Al finalizar podrás desempeñarte en roles como:
            </p>
            <ul className="space-y-3">
              {[
                "Analista de datos con Excel",
                "Asistente administrativo",
                "Contador o auxiliar contable",
                "Gestor de inventarios y logística",
              ].map((rol) => (
                <li key={rol} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rol}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

        </DiplomaturaLayout>

        <MobilePriceBar pricing={diplomaturasPricing["fundamentos-microsoft-excel"]} buttonGradient={themeGradient} onEnroll={() => setEnrollOpen(true)} />

        <Footer />
      </main>

      <EnrollModal
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        cursoTitle={diplomaturasPricing["fundamentos-microsoft-excel"].title}
        pricing={diplomaturasPricing["fundamentos-microsoft-excel"]}
      />
    </>
  )
}
