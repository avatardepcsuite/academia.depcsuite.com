"use client"

import React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"
import Link from "next/link"
import { useCurrency, currencies } from "@/contexts/currency-context"

const diplomaturas = [
  { href: "/diplomaturas/programacion-fullstack-react-node-ia", label: "Full Stack React + Node.js + IA" },
  { href: "/diplomaturas/programacion-python", label: "Programacion Python" },
  { href: "/diplomaturas/web-fullstack-php-laravel", label: "Web Full Stack PHP Laravel" },
  { href: "/diplomaturas/fundamentos-microsoft-excel", label: "Fundamentos Microsoft Excel" },
]

const getNavItems = (isRioplatense: boolean) => [
  { href: "#formacion", label: "Diplomaturas", hasSubmenu: true },
  { href: "#webinars", label: "Webinars" },
  { href: "#hackathones", label: "Hackathones" },
  { href: "#empleo", label: "Portal de Empleo" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#precios", label: isRioplatense ? "¡Formá parte!" : "¡Forma parte!" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [isDiplomaturasOpen, setIsDiplomaturasOpen] = useState(false)
  const [isMobileDiplomaturasOpen, setIsMobileDiplomaturasOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { selectedCurrency, setSelectedCurrency } = useCurrency()
  
  // Rioplatense (Argentina/Uruguay) uses "vos" form
  const isRioplatense = selectedCurrency.code === "ARS"
  const navItems = getNavItems(isRioplatense)
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
  }

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

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-[#6B1B4D] via-[#8B2563] to-[#6B1B4D] py-2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-center gap-2 text-white text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span className="text-center">
              {selectedCurrency.code === "ARS" 
                ? "¡Sumate a la comunidad más activa de estudiantes de tecnología en Argentina y LATAM!" 
                : "¡Únete a la comunidad más activa de estudiantes de tecnología en Argentina y LATAM!"}
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-[color-mix(in_oklab,#2D1B4E_95%,transparent)] backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center h-16">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center shrink-0">
              <span className="font-bold text-lg tracking-tight text-white">Academia DePC</span>
            </Link>

            {/* Desktop Navigation - Only on xl screens - Logo + Menu aligned left */}
            <nav className="hidden xl:flex items-center gap-0.5 ml-6">
              {navItems.map((item) => (
                item.hasSubmenu ? (
                  <div key={item.href} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDiplomaturasOpen(!isDiplomaturasOpen)}
                      onMouseEnter={() => setIsDiplomaturasOpen(true)}
                      className={`flex items-center gap-0.5 px-2.5 py-1.5 transition-colors duration-200 font-medium text-sm ${
                        activeSection === item.href || pathname.startsWith("/diplomaturas")
                          ? "text-white" 
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDiplomaturasOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isDiplomaturasOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={() => setIsDiplomaturasOpen(false)}
                          aria-hidden="true"
                        />
                        <div 
                          className="absolute left-0 top-full mt-2 w-72 bg-[#1A0F2E] rounded-xl border border-white/15 shadow-2xl shadow-black/40 z-20 py-2 overflow-hidden"
                          onMouseLeave={() => setIsDiplomaturasOpen(false)}
                        >
                          {diplomaturas.map((diploma) => (
                            <Link
                              key={diploma.href}
                              href={diploma.href}
                              onClick={() => setIsDiplomaturasOpen(false)}
                              className={`block px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors ${
                                pathname === diploma.href 
                                  ? "bg-pink-500/15 text-white" 
                                  : "text-white/80"
                              }`}
                            >
                              {diploma.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link 
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-2.5 py-1.5 transition-colors duration-200 font-medium text-sm ${
                      activeSection === item.href 
                        ? "text-white" 
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right Side: Login + Subscribe + Currency Flag - Aligned right */}
            <div className="hidden xl:flex items-center gap-3 ml-auto">
              <Link href="https://autogestion.depcsuite.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 font-medium text-sm px-3 py-1.5 h-auto bg-transparent">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="#precios" onClick={(e) => handleNavClick(e, "#precios")}>
                <Button className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold text-sm px-4 py-1.5 h-auto shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
                  Suscribirme
                </Button>
              </Link>
              
              {/* Currency Selector - Only flag visible */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-200"
                  aria-label={`Moneda: ${selectedCurrency.country}`}
                >
                  <span className="text-lg">{selectedCurrency.flag}</span>
                </button>

                {isCurrencyOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsCurrencyOpen(false)}
                      aria-hidden="true"
                    />
                    <div className="absolute right-0 top-full mt-2 w-52 bg-[#1A0F2E] rounded-xl border border-white/15 shadow-2xl shadow-black/40 z-20 py-2 overflow-hidden">
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          type="button"
                          onClick={() => {
                            setSelectedCurrency(currency)
                            setIsCurrencyOpen(false)
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-white/10 transition-colors ${
                            selectedCurrency.code === currency.code ? "bg-pink-500/15" : ""
                          }`}
                        >
                          <span className="text-xl">{currency.flag}</span>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-white">{currency.country}</span>
                            <span className="text-xs text-white/50 ml-2">{currency.code}</span>
                          </div>
                          {selectedCurrency.code === currency.code && (
                            <span className="w-2 h-2 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Tablet: Login + Subscribe buttons visible (md to xl) */}
            <div className="hidden md:flex xl:hidden items-center gap-2 ml-auto mr-2">
              <Link href="https://autogestion.depcsuite.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 font-medium text-sm px-3 py-1.5 h-auto bg-transparent">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="#precios" onClick={(e) => handleNavClick(e, "#precios")}>
                <Button className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold text-sm px-4 py-1.5 h-auto shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
                  Suscribirme
                </Button>
              </Link>
              {/* Currency Selector for Tablet */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-200"
                  aria-label={`Moneda: ${selectedCurrency.country}`}
                >
                  <span className="text-lg">{selectedCurrency.flag}</span>
                </button>

                {isCurrencyOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsCurrencyOpen(false)}
                      aria-hidden="true"
                    />
                    <div className="absolute right-0 top-full mt-2 w-52 bg-[#1A0F2E] rounded-xl border border-white/15 shadow-2xl shadow-black/40 z-20 py-2 overflow-hidden">
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          type="button"
                          onClick={() => {
                            setSelectedCurrency(currency)
                            setIsCurrencyOpen(false)
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-white/10 transition-colors ${
                            selectedCurrency.code === currency.code ? "bg-pink-500/15" : ""
                          }`}
                        >
                          <span className="text-xl">{currency.flag}</span>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-white">{currency.country}</span>
                            <span className="text-xs text-white/50 ml-2">{currency.code}</span>
                          </div>
                          {selectedCurrency.code === currency.code && (
                            <span className="w-2 h-2 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Mobile: Only hamburger menu (smaller than md) */}
            <button
              type="button"
              className="md:hidden p-2 text-white ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Tablet: Hamburger menu for navigation only (md to xl) */}
            <button
              type="button"
              className="hidden md:block xl:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile/Tablet Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden py-6 border-t border-white/10">
              <nav className="flex flex-col gap-3">
                {/* Mobile Only: Currency Selector (hidden on tablet since it's in header) */}
                <div className="flex md:hidden items-center gap-3 pb-5 border-b border-white/10">
                  <span className="text-sm font-medium text-white/70">Moneda:</span>
                  <div className="flex gap-2">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        type="button"
                        onClick={() => setSelectedCurrency(currency)}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                          selectedCurrency.code === currency.code
                            ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/30"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                        }`}
                      >
                        <span className="text-base">{currency.flag}</span>
                        <span>{currency.code}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {navItems.map((item) => (
                  item.hasSubmenu ? (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setIsMobileDiplomaturasOpen(!isMobileDiplomaturasOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                          pathname.startsWith("/diplomaturas")
                            ? "bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-white border-l-4 border-pink-500" 
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDiplomaturasOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isMobileDiplomaturasOpen && (
                        <div className="ml-4 mt-2 flex flex-col gap-1 border-l-2 border-white/20 pl-4">
                          {diplomaturas.map((diploma) => (
                            <Link
                              key={diploma.href}
                              href={diploma.href}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsMobileDiplomaturasOpen(false)
                              }}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                pathname === diploma.href 
                                  ? "bg-pink-500/20 text-white" 
                                  : "text-white/60 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              {diploma.label}
                            </Link>
                          ))}
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
                        activeSection === item.href 
                          ? "bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-white border-l-4 border-pink-500" 
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                {/* Mobile Only: Login/Subscribe buttons (hidden on tablet since they're in header) */}
                <div className="flex md:hidden flex-col gap-3 pt-5 mt-2 border-t border-white/10">
                  <Link href="https://autogestion.depcsuite.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" className="w-full justify-center text-white/80 hover:text-white hover:bg-white/10 font-semibold text-[15px] py-3 h-auto bg-transparent">
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link href="#precios" onClick={(e) => {
                      handleNavClick(e, "#precios")
                      setIsMenuOpen(false)
                    }}>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-bold text-[15px] py-3 h-auto shadow-lg shadow-pink-500/25">
                      Suscribirme
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
