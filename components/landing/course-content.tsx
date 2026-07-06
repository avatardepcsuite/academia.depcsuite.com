"use client"

import { useState, type ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { ChevronDown } from "lucide-react"

/* ----------------------------- Section wrapper ---------------------------- */

interface CourseSectionProps {
  id?: string
  eyebrow?: string
  eyebrowIcon?: LucideIcon
  title: string
  accentText?: string
  accentBg?: string
  accentBorder?: string
  children: ReactNode
}

export function CourseSection({
  id,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  accentText = "text-[#5C1F5C]",
  accentBg = "bg-[#5C1F5C]/10",
  accentBorder = "border-[#5C1F5C]/20",
  children,
}: CourseSectionProps) {
  return (
    <section id={id} className="border-t border-gray-100 py-10 first:border-t-0 first:pt-0">
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-3 ${accentBg} ${accentBorder}`}>
          {EyebrowIcon && <EyebrowIcon className={`w-4 h-4 ${accentText}`} />}
          <span className={`text-sm font-medium tracking-wide uppercase ${accentText}`}>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 text-balance">{title}</h2>
      {children}
    </section>
  )
}

/* --------------------------- Plan de estudio ----------------------------- */

export interface PlanUnidad {
  unidad: number
  titulo: string
  clases: string[]
  tecnologias: string[]
}

interface PlanDeEstudioProps {
  unidades: PlanUnidad[]
  accentGradient?: string
  accentText?: string
  accentChipBg?: string
  /** Overrides the automatically computed total number of clases shown in the summary. */
  totalClasesOverride?: number
}

export function PlanDeEstudio({
  unidades,
  accentGradient = "from-[#2D1B4E] to-[#5C1F5C]",
  accentText = "text-[#5C1F5C]",
  accentChipBg = "bg-[#5C1F5C]/10",
  totalClasesOverride,
}: PlanDeEstudioProps) {
  const [open, setOpen] = useState<number | null>(unidades[0]?.unidad ?? null)

  const totalClases = totalClasesOverride ?? unidades.reduce((acc, u) => acc + u.clases.length, 0)

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">
        {unidades.length} unidades · {totalClases} clases
      </p>
      <div className="space-y-3">
        {unidades.map((u) => {
          const isOpen = open === u.unidad
          return (
            <div key={u.unidad} className="rounded-xl border border-gray-200 overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : u.unidad)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accentGradient} text-sm font-bold text-white`}>
                    {u.unidad}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-gray-500">Unidad {u.unidad}</span>
                    <span className="block font-semibold text-gray-900 truncate">{u.titulo}</span>
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {u.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 ${accentChipBg} ${accentText} text-xs font-medium rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {u.clases.map((clase, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] text-gray-500">
                          {idx + 1}
                        </span>
                        {clase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ----------------------------- What you learn ---------------------------- */

export interface LearnCategory {
  title: string
  icon: LucideIcon
  items: string[]
}

interface WhatYouLearnProps {
  categories: LearnCategory[]
  accentText?: string
  accentBg?: string
  accentBorder?: string
}

export function WhatYouLearn({
  categories,
  accentText = "text-[#5C1F5C]",
  accentBg = "bg-[#5C1F5C]/10",
  accentBorder = "border-[#5C1F5C]/20",
}: WhatYouLearnProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {categories.map((cat) => {
        const Icon = cat.icon
        return (
          <article key={cat.title} className="rounded-xl border border-gray-200 p-5">
            <header className="flex items-center gap-3 mb-4">
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg border ${accentBg} ${accentBorder}`}>
                <Icon className={`h-5 w-5 ${accentText}`} />
              </span>
              <h3 className="font-bold text-gray-900">{cat.title}</h3>
            </header>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentBg.replace("/10", "")}`} aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        )
      })}
    </div>
  )
}
