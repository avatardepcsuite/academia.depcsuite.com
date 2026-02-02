import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  formacion: {
    title: "Diplomaturas",
    links: [
      { label: "React.js/Node.js + IA", href: "/diplomaturas/programacion-fullstack-react-node-ia" },
      { label: "Python", href: "/diplomaturas/programacion-python" },
      { label: "Web Full Stack PHP", href: "/diplomaturas/web-fullstack-php-laravel" },
      { label: "Ciberseguridad", href: "https://academia.depcsuite.com/diplomatura-ciberseguridad-aplicada-37984" },
      { label: "Microsoft Excel", href: "/diplomaturas/fundamentos-microsoft-excel" },
    ],
  },
  eventos: {
    title: "Eventos",
    links: [
      { label: "Webinars", href: "#webinars" },
      { label: "Masterclass en Vivo", href: "#formacion" },
      { label: "Hackathones", href: "#hackathones" },
    ],
  },
  comunidad: {
    title: "Comunidad DePC",
    links: [
      { label: "Red social", href: "#comunidad" },
      { label: "Portal de Empleo", href: "#empleo" },
      { label: "Credencial Digital", href: "#comunidad" },
      { label: "Certificaciones", href: "#instituciones" },
    ],
  },
  soporte: {
    title: "Soporte",
    links: [
      { label: "Seguimiento académico", href: "#" },
      { label: "Contacto con los docentes", href: "#" },
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    ],
  },
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/depcsuite/", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400" },
  { icon: Facebook, href: "https://www.facebook.com/depcsuite/", label: "Facebook", color: "hover:bg-[#1877F2]" },
  { icon: Linkedin, href: "https://ar.linkedin.com/company/depcsuite", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2D1B4E] via-[#5C1F5C] to-[#E91E63] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-depc-cuadrado.jpg"
                alt="Academia DePC Logo"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="font-bold text-xl text-white">Academia DePC</span>
            </Link>
            <p className="text-sm text-white/70 mb-6">
              Comunidad educativa tech con formación, certificaciones y oportunidades laborales para Argentina y LATAM.
            </p>
            
            {/* Social Links - Prominent */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white mb-1">Suscribite al newsletter</h3>
              <p className="text-sm text-white/60">Recibe novedades, eventos y tips tech en tu correo.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full h-10 pl-10 pr-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <button
                type="submit"
                className="h-10 px-4 rounded-lg bg-white text-[#2D1B4E] font-medium hover:bg-gray-100 transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left: Copyright & Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} DEPCSUITE S.A.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/politicas-de-privacidad" className="text-xs text-white/50 hover:text-white transition-colors">
                  Politicas de privacidad
                </Link>
                <Link href="/terminos-y-condiciones" className="text-xs text-white/50 hover:text-white transition-colors">
                  Terminos y condiciones
                </Link>
              </div>
            </div>

            {/* Right: Legal Badges */}
            <div className="flex items-center gap-5">
              <Link 
                href="https://www.cace.org.ar/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/logo-cace.png"
                  alt="CACE"
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <Link 
                href="https://servicioscf.afip.gob.ar/publico/denuncias/denunciaCD.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/data-fiscal-arca.jpg"
                  alt="Data Fiscal ARCA"
                  width={48}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
          
          {/* About Us */}
          <p className="text-sm text-white/60 text-center mt-6 max-w-3xl mx-auto">
            DEPCSUITE SA © es una empresa desarrolladora de tecnologia que trabaja con las principales empresas del país para brindarte la mejor formación.
          </p>
          
          {/* CUIT Info */}
          <p className="text-xs text-white/40 text-center mt-4">
            CUIT N° 30-71683193-7 | I.N.P.I. Res 3788960/26 | Disposicion Nro: DI-2026-28-APN-DNM#INPI
          </p>
        </div>
      </div>
    </footer>
  )
}
