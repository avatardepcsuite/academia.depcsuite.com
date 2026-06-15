"use client"

import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"
import { DiplomaturaSidebar } from "@/components/landing/diplomatura-sidebar"
import type { DiplomaturaPricing } from "@/lib/diplomaturas-pricing"

interface HeroMeta {
  icon: LucideIcon
  label: string
}

interface DiplomaturaLayoutProps {
  /** Breadcrumb trail label for the course (last crumb) */
  breadcrumb: string
  /** Eyebrow / badge text shown above the title */
  badge?: string
  /** Main title */
  title: string
  /** Highlighted part of the title (rendered in accent color) */
  titleHighlight?: string
  /** Subtitle, e.g. "Django + Vue.js + API REST" */
  subtitle?: string
  /** Short description paragraph */
  description: string
  /** Meta chips shown below the description */
  meta?: HeroMeta[]
  /** Optional certification logos shown in the hero */
  certifications?: { src: string; alt: string }[]
  /** Optional docente shown in the hero */
  heroDocente?: { src: string; name: string; role: string }
  /** Hero background gradient classes */
  heroGradient?: string
  /** Accent text color used for the highlighted title + subtitle */
  accentText?: string
  /** Sidebar configuration */
  pricing: DiplomaturaPricing
  buttonGradient?: string
  previewGradient?: string
  firstClassMessage: string
  /** When provided, the sidebar preview embeds this video */
  docenteVideoUrl?: string
  /** Label shown above the embedded docente video */
  docenteVideoLabel?: string
  perks?: string[]
  /** Whether to show the "Solicitar clase de prueba" secondary CTA in the sidebar */
  showTrialClass?: boolean
  /** When provided, the ARS "Inscribirme ahora" CTA opens this callback (e.g. a modal) */
  onEnroll?: () => void
  /** Body sections */
  children: ReactNode
}

export function DiplomaturaLayout({
  breadcrumb,
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  meta = [],
  certifications = [],
  heroDocente,
  heroGradient = "from-[#1b1033] via-[#2D1B4E] to-[#3d2456]",
  accentText = "text-emerald-300",
  pricing,
  buttonGradient,
  previewGradient,
  firstClassMessage,
  docenteVideoUrl,
  docenteVideoLabel,
  perks,
  showTrialClass = true,
  onEnroll,
  children,
}: DiplomaturaLayoutProps) {
  return (
    <div className="relative bg-white">
      {/* Dark hero */}
      <section className={`bg-gradient-to-br ${heroGradient} pt-12 pb-16 lg:pb-44`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Academia DePC
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <li>
                <Link href="/#diplomaturas" className="hover:text-white transition-colors">
                  Diplomaturas
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <li className="text-white/90 font-medium" aria-current="page">
                {breadcrumb}
              </li>
            </ol>
          </nav>

          <div className="lg:max-w-[58%]">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-5">
                <Star className={`w-3.5 h-3.5 ${accentText}`} />
                <span className="text-sm text-white/90">{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
              {title}{" "}
              {titleHighlight && <span className={accentText}>{titleHighlight}</span>}
            </h1>

            {subtitle && (
              <p className={`text-xl sm:text-2xl font-medium mb-4 ${accentText}`}>{subtitle}</p>
            )}

            <p className="text-lg text-white/80 leading-relaxed text-pretty mb-6 max-w-2xl">
              {description}
            </p>

            {meta.length > 0 && (
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {meta.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-white/90">
                    <Icon className={`w-4 h-4 ${accentText}`} />
                    {label}
                  </li>
                ))}
              </ul>
            )}

            {certifications.length > 0 && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-4">
                  {certifications.map((logo) => (
                    <div key={logo.src} className="relative h-14 w-28 flex-shrink-0">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="112px"
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-white">
                  Certificación Nacional e Internacional
                </p>
              </div>
            )}

            {heroDocente && (
              <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-3 pr-5 backdrop-blur-sm">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/40">
                  <Image
                    src={heroDocente.src}
                    alt={`${heroDocente.name}, ${heroDocente.role}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-medium uppercase tracking-wide ${accentText}`}>
                    Docente en vivo
                  </p>
                  <p className="text-base font-bold text-white leading-tight">{heroDocente.name}</p>
                  <p className="text-sm text-white/70 leading-tight">{heroDocente.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Two-column body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10 xl:gap-14">
          {/* Left: content */}
          <main className="min-w-0 py-10 lg:py-14">{children}</main>

          {/* Right: sticky price sidebar (pulled up into the hero on desktop) */}
          <aside className="hidden lg:block" aria-label="Resumen de inscripción">
            <div className="sticky top-6 lg:-mt-[600px]">
              <DiplomaturaSidebar
                pricing={pricing}
                buttonGradient={buttonGradient}
                previewGradient={previewGradient}
                firstClassMessage={firstClassMessage}
                docenteVideoUrl={docenteVideoUrl}
                docenteVideoLabel={docenteVideoLabel}
                perks={perks}
                showTrialClass={showTrialClass}
                onEnroll={onEnroll}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
