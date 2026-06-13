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
  Shield,
  CalendarCheck,
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
      "name": "Fundamentos de Ciberseguridad Aplicada",
      "item": "https://academia.depcsuite.com/diplomaturas/ciberseguridad-aplicada"
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Diplomatura en Fundamentos de Ciberseguridad Aplicada",
  "description": "Adquiere los conocimientos esenciales para proteger sistemas y redes. Aprende hacking etico, criptografia, seguridad en redes y DevSecOps. 3 meses de duracion, 100% online, con doble certificacion nacional e internacional.",
  "url": "https://academia.depcsuite.com/diplomaturas/ciberseguridad-aplicada",
  "image": "https://academia.depcsuite.com/images/course-cybersecurity.jpg",
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
  "numberOfCredits": "3 meses",
  "teaches": ["Ciberseguridad", "Hacking Etico", "Pentesting", "Criptografia", "Seguridad de Redes", "DevSecOps", "ISO 27001", "NIST", "Wireshark", "Nmap", "Kali Linux", "Metasploit", "OWASP"],
  "occupationalCredentialAwarded": "Diplomatura en Fundamentos de Ciberseguridad Aplicada con certificacion nacional e internacional",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT36H",
    "instructor": {
      "@type": "Person",
      "name": "Eliana Caballero"
    },
    "duration": "P3M"
  },
  "offers": {
    "@type": "Offer",
    "category": "Diplomatura",
    "price": "300000",
    "priceCurrency": "ARS",
    "availability": "https://schema.org/InStock",
    "url": "https://academia.depcsuite.com/diplomaturas/ciberseguridad-aplicada",
    "validFrom": "2026-01-01"
  }
}

const planDeEstudio = [
  {
    unidad: 1,
    titulo: "Fundamentos de Ciberseguridad",
    clases: [
      "Introduccion al mundo de la ciberseguridad",
      "Que es la ciberseguridad y por que es importante",
      "Ciberamenazas actuales y tendencias",
      "Actores y motivaciones (hacktivismo, cibercrimen, espionaje)",
      "Confidencialidad, integridad y disponibilidad (CIA triad)",
      "Riesgos, vulnerabilidades y amenazas",
      "Tipos de ataques: Ingenieria social, phishing, malware, ransomware, DDoS",
      "Normativas y buenas practicas: ISO 27001, NIST, GDPR",
      "Roles en ciberseguridad: Analista, auditor, pentester, forense",
      "Laboratorio: Configuracion de entornos seguros"
    ],
    tecnologias: ["ISO 27001", "NIST", "GDPR"]
  },
  {
    unidad: 2,
    titulo: "Amenazas Comunes y Vulnerabilidades",
    clases: [
      "Phishing y el arte del engano: spear phishing e ingenieria social",
      "Indicadores de correos maliciosos y mejores practicas",
      "Malware: virus, gusanos, troyanos, spyware, ransomware",
      "Vias de infeccion y sintomas de compromiso",
      "Vulnerabilidades en sistemas: software sin actualizar, contrasenas debiles",
      "Escaneo de puertos y riesgos asociados",
      "Ciclo de vida de una vulnerabilidad (CVE a patch)",
      "Fundamentos de deteccion: antivirus, firewalls, filtros de spam",
      "Actividad practica: Analisis de casos de phishing reales",
      "Herramientas de comprobacion y analisis de amenazas"
    ],
    tecnologias: ["Antivirus", "Firewalls", "CVE"]
  },
  {
    unidad: 3,
    titulo: "Introduccion a Redes y Seguridad de la Informacion",
    clases: [
      "Arquitectura de red y modelos OSI / TCP-IP",
      "Protocolos seguros e inseguros: HTTP vs HTTPS, SSH, VPN, TLS",
      "Diseno de redes seguras: Segmentacion, VLANs, DMZ",
      "Firewalls, IDS/IPS y su configuracion",
      "Seguridad en dispositivos de red: routers, switches, access points",
      "Seguridad inalambrica y mejores practicas",
      "Monitoreo y deteccion con Wireshark, Nmap, Snort",
      "Gestion de incidentes y logs: SIEM (Splunk, Wazuh, ELK)",
      "Laboratorio: Configuracion de firewalls",
      "Laboratorio: Analisis de trafico con Wireshark",
      "Laboratorio: Implementacion de una VPN segura"
    ],
    tecnologias: ["Wireshark", "Nmap", "SIEM", "VPN"]
  },
  {
    unidad: 4,
    titulo: "Hacking Etico: Conceptos y Metodologias",
    clases: [
      "Que es el hacking etico: white hat vs black hat",
      "Gray hats, script kiddies y marco legal del pentesting",
      "Tipos de atacantes y motivaciones avanzadas",
      "APTs (Amenazas Persistentes Avanzadas)",
      "Fases del pentesting: reconocimiento, escaneo, explotacion, reporte",
      "OSINT y Google Dorking como tecnica de reconocimiento",
      "Herramientas: Kali Linux, Nmap, Metasploit, Burp Suite",
      "OWASP ZAP para pruebas de seguridad web",
      "Seguridad ofensiva vs defensiva (Red Team vs Blue Team)",
      "Actividad practica: Ataque controlado en entorno de pruebas"
    ],
    tecnologias: ["Kali Linux", "Metasploit", "Burp Suite", "OWASP"]
  },
  {
    unidad: 5,
    titulo: "Criptografia y Proteccion de la Informacion",
    clases: [
      "Introduccion a la criptografia: historia, tipos y objetivos",
      "Criptografia simetrica: AES, DES",
      "Criptografia asimetrica: RSA, ECC",
      "Hashing y firmas digitales: MD5, SHA-256, HMAC",
      "Certificados digitales y PKI",
      "Certificados X.509 y SSL/TLS",
      "Cifrado de datos en transito y en reposo",
      "Cifrado de discos, correos y comunicaciones",
      "Uso practico de OpenSSL y GPG",
      "Laboratorio: Creacion de certificados digitales",
      "Laboratorio: Cifrado de archivos y comunicaciones seguras"
    ],
    tecnologias: ["AES", "RSA", "SSL/TLS", "OpenSSL", "GPG"]
  },
  {
    unidad: 6,
    titulo: "Seguridad en el Desarrollo de Software (DevSecOps)",
    clases: [
      "Introduccion a DevSecOps: evolucion desde DevOps",
      "Beneficios de shift-left security",
      "Ciclo de vida del desarrollo seguro",
      "OWASP Top 10: vulnerabilidades web comunes",
      "Inyeccion SQL, XSS y validacion de entradas",
      "Manejo inseguro de contrasenas y componentes desactualizados",
      "Contenedores y seguridad en Docker",
      "Scanners de vulnerabilidades en entornos DevOps",
      "Gestion de identidades (IAM) y principio de privilegio minimo",
      "Ejercicio: Identificar y corregir codigo vulnerable",
      "Simulacion: Prueba de seguridad en app vulnerable (Juice Shop)"
    ],
    tecnologias: ["DevSecOps", "Docker", "OWASP", "IAM"]
  },
  {
    unidad: 7,
    titulo: "Tecnologias de Proteccion del Usuario Final",
    clases: [
      "Autenticacion robusta: MFA y sus factores",
      "Beneficios del 2FA en servicios cotidianos",
      "Proteccion de endpoints: EPP vs EDR",
      "Como un EDR detiene ransomware en tiempo real",
      "Amenazas modernas: exploits zero-day, smishing, vishing",
      "Importancia de mantener dispositivos actualizados",
      "Concientizacion y cultura de seguridad organizacional",
      "Digital Awareness Officer (DAO) y estrategias de capacitacion",
      "Actividad practica: Configuracion de MFA",
      "Simulacro: Role-play de ataque al usuario final"
    ],
    tecnologias: ["MFA", "EDR", "EPP", "2FA"]
  }
]

const accent = {
  text: "text-teal-600",
  bg: "bg-teal-100/60",
  border: "border-teal-200",
}
const buttonGradient = "from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
const themeGradient = "from-teal-600 to-emerald-600"

export default function DiplomaturaCiberseguridadPage() {
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
          breadcrumb="Ciberseguridad Aplicada"
          badge="Certificación Nacional e Internacional"
          title="Fundamentos de Ciberseguridad"
          titleHighlight="Aplicada"
          subtitle="Hacking Ético + Redes + Criptografía + DevSecOps"
          description="Adquiere los conocimientos esenciales para proteger sistemas y redes. Aprende desde los fundamentos hasta técnicas de pentesting y seguridad en el desarrollo de software."
          heroGradient="from-[#1b1033] via-[#0d3331] to-teal-700"
          accentText="text-teal-300"
          meta={[
            { icon: Clock, label: "3 meses de duración" },
            { icon: Monitor, label: "100% online" },
            { icon: GraduationCap, label: "Sin conocimientos previos" },
            { icon: CalendarCheck, label: "Comienzo en vivo: 27 de agosto" },
          ]}
          certifications={[
            { src: "/images/logo-camara-argentina.png", alt: "Logo Cámara Argentina de Comercio - Certificación Nacional" },
            { src: "/images/logo-oeip.png", alt: "Logo OEIP - Certificación Internacional" },
          ]}
          pricing={diplomaturasPricing["ciberseguridad-aplicada"]}
          buttonGradient={buttonGradient}
          previewGradient={themeGradient}
          firstClassMessage="Hola! Quiero ver la primera clase gratis de la Diplomatura en Ciberseguridad"
          docenteVideoUrl="https://www.youtube.com/embed/H1xfsal_0mA"
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
                  "Comprender los pilares de la ciberseguridad: la tríada CIA",
                  "Identificar amenazas, vulnerabilidades y vectores de ataque",
                  "Aplicar normativas y buenas prácticas como ISO 27001 y NIST",
                  "Diseñar y proteger redes seguras con firewalls, VPNs e IDS/IPS",
                  "Analizar tráfico de red con Wireshark, Nmap y herramientas SIEM",
                  "Ejecutar las fases del pentesting con Kali Linux y Metasploit",
                  "Aplicar criptografía simétrica, asimétrica y certificados digitales",
                  "Implementar prácticas de DevSecOps y el OWASP Top 10",
                  "Proteger al usuario final con MFA, EDR y concientización",
                  "Responder a incidentes de seguridad de forma efectiva",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CourseSection>

          {/* Temas relacionados */}
          <CourseSection
            eyebrow="Temas relacionados"
            eyebrowIcon={Shield}
            title="Explora temas relacionados"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="flex flex-wrap gap-3">
              {["Ciberseguridad", "Hacking Ético", "Pentesting", "Kali Linux", "Criptografía", "Redes", "DevSecOps", "OWASP", "Wireshark", "ISO 27001"].map((tech) => (
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
              accentText="text-teal-600"
              accentChipBg="bg-teal-50"
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
                "No se requieren conocimientos previos: empezamos desde los fundamentos.",
                "Una computadora con conexión a internet (Windows, macOS o Linux).",
                "Ganas de aprender y dedicar tiempo a los laboratorios prácticos.",
              ].map((req) => (
                <li key={req} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

          {/* Descripción */}
          <CourseSection
            eyebrow="Descripción"
            eyebrowIcon={Shield}
            title="Descripción"
            accentText={accent.text}
            accentBg={accent.bg}
            accentBorder={accent.border}
          >
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                La ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados para proteger sistemas, redes y datos de ataques digitales. En un mundo cada vez más conectado, los profesionales de ciberseguridad son esenciales para proteger la información de empresas y usuarios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A lo largo de esta diplomatura recorrerás un camino integral: comenzarás con los fundamentos y el vocabulario del campo, conocerás las amenazas y vulnerabilidades más comunes, y aprenderás a proteger redes e infraestructuras. Avanzarás hacia el hacking ético y el pentesting con herramientas profesionales, dominarás la criptografía aplicada y los principios de DevSecOps, culminando con las tecnologías de protección del usuario final.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al finalizar serás capaz de identificar vulnerabilidades, prevenir ataques y responder a incidentes de seguridad, con las competencias necesarias para desempeñarte en roles de <strong>seguridad informática</strong>.
              </p>
            </div>

            <div className={`mt-8 bg-gradient-to-br ${themeGradient} rounded-2xl p-6 text-white`}>
              <h3 className="text-xl font-bold mb-5">Tecnologías que dominarás</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Kali Linux", "Metasploit", "Wireshark", "Nmap", "Burp Suite", "OWASP", "SIEM", "OpenSSL", "Docker", "VPN", "Firewalls", "MFA / EDR"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-2.5 bg-white/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-teal-200 flex-shrink-0" />
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
              Esta diplomatura está pensada para personas que quieren iniciar su carrera en la seguridad informática o sumar competencias defensivas a su perfil técnico. Al egresar podrás postularte a roles como:
            </p>
            <ul className="space-y-3">
              {[
                "Analista de Ciberseguridad / SOC",
                "Auditor de Seguridad Informática",
                "Pentester Junior / Ethical Hacker",
              ].map((rol) => (
                <li key={rol} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <Briefcase className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rol}</span>
                </li>
              ))}
            </ul>
          </CourseSection>

        </DiplomaturaLayout>

        <MobilePriceBar pricing={diplomaturasPricing["ciberseguridad-aplicada"]} buttonGradient={themeGradient} onEnroll={() => setEnrollOpen(true)} />

        <Footer />
      </main>

      <EnrollModal
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        cursoTitle={diplomaturasPricing["ciberseguridad-aplicada"].title}
        pricing={diplomaturasPricing["ciberseguridad-aplicada"]}
      />
    </>
  )
}
