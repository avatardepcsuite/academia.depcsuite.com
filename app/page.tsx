import dynamic from "next/dynamic"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"

// Lazy load below-the-fold components for better initial page load
const Webinars = dynamic(() => import("@/components/landing/webinars").then(mod => ({ default: mod.Webinars })), {
  loading: () => <div className="py-24 bg-gradient-to-b from-white to-[#2D1B4E]/5" />
})
const Hackathons = dynamic(() => import("@/components/landing/hackathons").then(mod => ({ default: mod.Hackathons })), {
  loading: () => <div className="py-24 bg-[#0A0A0A]" />
})
const Employment = dynamic(() => import("@/components/landing/employment").then(mod => ({ default: mod.Employment })), {
  loading: () => <div className="py-24 bg-white" />
})
const Community = dynamic(() => import("@/components/landing/community").then(mod => ({ default: mod.Community })), {
  loading: () => <div className="py-24 bg-gradient-to-b from-white to-[#2D1B4E]/5" />
})
const Testimonials = dynamic(() => import("@/components/landing/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="py-20 bg-white" />
})
const Partners = dynamic(() => import("@/components/landing/partners").then(mod => ({ default: mod.Partners })), {
  loading: () => <div className="py-24" />
})
const Pricing = dynamic(() => import("@/components/landing/pricing").then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="py-24 bg-gradient-to-br from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63]" />
})
const CTA = dynamic(() => import("@/components/landing/cta").then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="py-20 bg-gradient-to-r from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63]" />
})
const Footer = dynamic(() => import("@/components/landing/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="bg-gradient-to-r from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63] py-16" />
})
const WhatsAppButton = dynamic(() => import("@/components/landing/whatsapp-button").then(mod => ({ default: mod.WhatsAppButton })))
const PromoPopup = dynamic(() => import("@/components/landing/promo-popup").then(mod => ({ default: mod.PromoPopup })))

// Structured Data for SEO and GEO (Generative Engine Optimization)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Academia DePC",
  "alternateName": "DePC Suite",
  "url": "https://academiadepc.com",
  "logo": "https://academiadepc.com/images/logo-depc-cuadrado.jpg",
  "description": "Academia de programación y tecnología con diplomaturas certificadas en Full Stack, Python, PHP Laravel y Excel. Cursos 100% online con clases en vivo, webinars gratuitos, hackathones presenciales y portal de empleo exclusivo en Argentina y Latinoamérica.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AR",
    "addressRegion": "Buenos Aires"
  },
  "areaServed": ["Argentina", "Colombia", "México", "Chile", "Uruguay", "Perú", "Ecuador", "Latinoamérica"],
  "sameAs": [
    "https://www.instagram.com/academiadepc",
    "https://www.linkedin.com/company/academiadepc",
    "https://www.youtube.com/@academiadepc"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Diplomaturas y Cursos de Programación",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Diplomatura en Programación Full Stack con React, Node.js e Inteligencia Artificial",
        "description": "Formación completa en desarrollo web Full Stack: frontend con React.js, backend con Node.js, bases de datos e integración con IA. 9 meses de duración, 100% online, con doble certificación.",
        "provider": { "@type": "Organization", "name": "Academia DePC" },
        "courseMode": "online",
        "educationalLevel": "Beginner to Intermediate",
        "inLanguage": "es",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "duration": "P9M"
        }
      },
      {
        "@type": "Course",
        "name": "Diplomatura en Programación Python con Django y Vue.js",
        "description": "Aprende Python desde cero, domina Django para backend y Vue.js para interfaces dinámicas. Desarrolla APIs REST profesionales. 6 meses, 100% online.",
        "provider": { "@type": "Organization", "name": "Academia DePC" },
        "courseMode": "online",
        "educationalLevel": "Beginner to Intermediate",
        "inLanguage": "es"
      },
      {
        "@type": "Course",
        "name": "Diplomatura en Programación Web Full Stack con PHP y Laravel",
        "description": "Desarrollo web profesional con PHP y Laravel. Crea sistemas, ecommerce y aplicaciones web completas con integración MercadoPago. 6 meses, 100% online.",
        "provider": { "@type": "Organization", "name": "Academia DePC" },
        "courseMode": "online",
        "educationalLevel": "Beginner to Intermediate",
        "inLanguage": "es"
      },
      {
        "@type": "Course",
        "name": "Curso de Fundamentos de Microsoft Excel",
        "description": "Domina Excel desde cero: fórmulas, funciones, tablas dinámicas y gráficos profesionales para destacar en cualquier entorno laboral.",
        "provider": { "@type": "Organization", "name": "Academia DePC" },
        "courseMode": "online",
        "educationalLevel": "Beginner",
        "inLanguage": "es"
      }
    ]
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Academia DePC",
  "url": "https://academiadepc.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://academiadepc.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://academiadepc.com"
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué certificaciones otorga Academia DePC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Academia DePC otorga doble certificación: una certificación nacional avalada por la Cámara Argentina de Comercio y una certificación internacional de la OEIP (Organización de Estados Iberoamericanos para la Educación). Además, los egresados tienen acceso exclusivo al Portal de Empleo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito conocimientos previos para inscribirme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, nuestras diplomaturas están diseñadas para comenzar desde cero. No se requieren conocimientos previos de programación. Solo necesitas una computadora con conexión a internet y ganas de aprender."
      }
    },
    {
      "@type": "Question",
      "name": "¿Las clases son en vivo o grabadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ofrecemos ambas modalidades. Las diplomaturas incluyen clases grabadas on demand que puedes ver a tu ritmo, más masterclass en vivo con el docente para resolver dudas. Los webinars son en vivo y gratuitos para toda la comunidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura cada diplomatura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Diplomatura Full Stack con React, Node.js e IA dura 9 meses. Las diplomaturas de Python y PHP Laravel duran 6 meses cada una. El curso de Excel tiene 12 horas de contenido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye la suscripción a Academia DePC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La suscripción incluye acceso a todas las diplomaturas, webinars en vivo, masterclass con docentes, hackathones presenciales, acceso exclusivo al Portal de Empleo, comunidad activa de estudiantes y doble certificación al completar cada diplomatura."
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <Webinars />
        <Hackathons />
        <Employment />
        <Community />
        <Testimonials />
        <Partners />
        <Pricing />
        <CTA />
        <Footer />
        <WhatsAppButton />
        <PromoPopup />
      </main>
    </>
  )
}
