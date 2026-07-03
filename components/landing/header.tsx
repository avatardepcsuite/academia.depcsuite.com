"use client"

import React, { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sparkles, FileSpreadsheet, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Custom brand icons
const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="2.05"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
)

const PythonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0ZM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .58-.468 1.051-1.046 1.051-.578 0-1.046-.47-1.046-1.051 0-.581.468-1.052 1.046-1.052Z"/>
    <path d="M12.087 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.45s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24Zm3.206-1.85a1.049 1.049 0 0 1-1.046-1.052c0-.58.468-1.051 1.046-1.051.578 0 1.046.47 1.046 1.051 0 .581-.468 1.052-1.046 1.052Z"/>
  </svg>
)

const LaravelIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.006-.043-.012-.063-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.011.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.029.034.044.008.012.021.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032Zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283l3.76-2.164Zm-4.511 7.75v-4.287l-2.146 1.225-6.127 3.498v4.326l8.273-4.761ZM1.093 3.624v14.588l8.273 4.762v-4.326l-4.322-2.445-.002-.003h-.002c-.014-.01-.025-.021-.04-.033-.012-.01-.025-.017-.036-.028l-.001-.002c-.011-.012-.02-.025-.03-.039-.01-.012-.021-.023-.028-.037h-.002c-.008-.014-.012-.03-.018-.045-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257-1.58-.908ZM5.418.787 1.66 2.947l3.755 2.164L9.168 2.95 5.418.786v.001Zm2.254 11.631 2.182-1.256V3.624l-1.58.909-2.182 1.256v7.538l1.58-.909Zm11.356-10.47-3.755 2.162 3.756 2.162 3.753-2.164-3.947 2.27 3.756 2.118Z"/>
  </svg>
)

// Using FileSpreadsheet from Lucide for Excel
const ExcelIcon = FileSpreadsheet

const diplomaturas = [
  { href: "/diplomaturas/ciberseguridad-aplicada", label: "Ciberseguridad Aplicada", icon: Shield, color: "text-teal-400", bgColor: "bg-teal-500/10" },
  { href: "/diplomaturas/programacion-fullstack-react-node-ia", label: "Full Stack React + Node.js + IA", icon: ReactIcon, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  { href: "/diplomaturas/web-fullstack-php-laravel", label: "Web Full Stack PHP Laravel", icon: LaravelIcon, color: "text-red-400", bgColor: "bg-red-500/10" },
  { href: "/diplomaturas/programacion-python", label: "Programación Python", icon: PythonIcon, color: "text-yellow-400", bgColor: "bg-yellow-500/10" },
  { href: "/diplomaturas/fundamentos-microsoft-excel", label: "Fundamentos Microsoft Excel", icon: ExcelIcon, color: "text-green-500", bgColor: "bg-green-500/10" },
]

const navItems = [
  { href: "#formacion", label: "Diplomaturas", hasSubmenu: "diplomaturas" },
  { href: "/streaming", label: "Streaming" },
  { href: "#hackathones", label: "Hackathones" },
  { href: "#empleo", label: "Portal de Empleo" },
  { href: "/convenios", label: "Convenios" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDiplomaturasOpen, setIsDiplomaturasOpen] = useState(false)
  const [isMobileDiplomaturasOpen, setIsMobileDiplomaturasOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Real route links (e.g. /streaming) should navigate normally
    if (!href.startsWith("#")) {
      return
    }

    const sectionId = href.replace("#", "")
    
    if (pathname === "/") {
      // If on home page, scroll to section smoothly
      e.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, navigate to home with anchor
      e.preventDefault()
      router.push(`/${href}`)
    }
  }, [pathname, router])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`)
          return
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <header className="relative z-50">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-[#6B1B4D] via-[#8B2563] to-[#6B1B4D] py-2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-center gap-2 text-white text-sm font-medium">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-center">
              <span className="font-bold">Inscribiendo 2026</span>
              <span className="mx-2 text-white/50">|</span>
              Formaciones con certificación nacional e internacional
            </span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-[color-mix(in_oklab,#2D1B4E_95%,transparent)] backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center h-16">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo-depcsuite-academia-blanco.png"
                alt="Academia DePC Suite"
                width={160}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Only on xl screens - Logo + Menu aligned left */}
            <nav className="hidden xl:flex items-center gap-0.5 ml-6">
              {navItems.map((item) => (
                item.hasSubmenu === "diplomaturas" ? (
                  <div 
                    key={item.href} 
                    className="relative"
                    onMouseEnter={() => { setIsDiplomaturasOpen(true); }}
                    onMouseLeave={() => setIsDiplomaturasOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsDiplomaturasOpen(!isDiplomaturasOpen)}
                      className={`flex items-center gap-0.5 px-2.5 py-1.5 transition-colors duration-200 font-medium text-[15px] text-white hover:text-white`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDiplomaturasOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isDiplomaturasOpen && (
                      <div 
                        className="absolute left-0 top-full pt-2"
                      >
                        <div 
                          className="w-72 bg-[#1A0F2E] rounded-xl border border-white/15 shadow-2xl shadow-black/40 py-2 overflow-hidden"
                        >
                          {diplomaturas.map((diploma) => {
                            const IconComponent = diploma.icon
                            return (
                              <Link
                                key={diploma.href}
                                href={diploma.href}
                                onClick={() => setIsDiplomaturasOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors ${
                                  pathname === diploma.href 
                                    ? "bg-pink-500/15 text-white" 
                                    : "text-white/80"
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-lg ${diploma.bgColor} flex items-center justify-center shrink-0`}>
                                  <IconComponent className={`w-4 h-4 ${diploma.color}`} />
                                </div>
                                {diploma.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-2.5 py-1.5 transition-colors duration-200 font-medium text-[15px] text-white hover:text-white`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right Side: Acceso alumnos - Aligned right */}
            <div className="hidden xl:flex items-center gap-3 ml-auto">
              <Link href="https://autogestion.depcsuite.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold text-sm px-4 py-1.5 h-auto shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
                  Acceso alumnos
                </Button>
              </Link>
            </div>

            {/* Tablet: Acceso alumnos button visible (md to xl) */}
            <div className="hidden md:flex xl:hidden items-center gap-2 ml-auto mr-2">
            <Link href="https://autogestion.depcsuite.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold text-sm px-4 py-1.5 h-auto shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
                Acceso alumnos
              </Button>
            </Link>
            </div>

            {/* Mobile: Only hamburger menu (smaller than md) */}
            <button
              type="button"
              className="md:hidden p-2 text-white ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Tablet: Hamburger menu for navigation only (md to xl) */}
            <button
              type="button"
              className="hidden md:block xl:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile/Tablet Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden py-6 border-t border-white/10">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  item.hasSubmenu === "diplomaturas" ? (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setIsMobileDiplomaturasOpen(!isMobileDiplomaturasOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                          pathname.startsWith("/diplomaturas")
                            ? "bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-white border-l-4 border-pink-500" 
                            : "text-white/85 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDiplomaturasOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isMobileDiplomaturasOpen && (
                        <div className="mt-3 flex flex-col gap-1.5">
                          {diplomaturas.map((diploma) => {
                            const IconComponent = diploma.icon
                            return (
                              <Link
                                key={diploma.href}
                                href={diploma.href}
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setIsMobileDiplomaturasOpen(false)
                                }}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                  pathname === diploma.href 
                                    ? "bg-pink-500/20 text-white" 
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                              >
                                <div className={`w-9 h-9 rounded-lg ${diploma.bgColor} flex items-center justify-center shrink-0`}>
                                  <IconComponent className={`w-4 h-4 ${diploma.color}`} />
                                </div>
                                {diploma.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      onClick={(e) => {
                        handleNavClick(e, item.href)
                        setIsMenuOpen(false)
                      }}
                      className={`px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                        activeSection === item.href || (!item.href.startsWith("#") && pathname.startsWith(item.href))
                          ? "bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-white border-l-4 border-pink-500" 
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}

                {/* Mobile Only: Button */}
                <div className="md:hidden flex flex-col gap-3 pt-5 border-t border-white/10 mt-2">
                  <Link 
                    href="https://autogestion.depcsuite.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold shadow-lg shadow-pink-500/25">
                      Acceso alumnos
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
