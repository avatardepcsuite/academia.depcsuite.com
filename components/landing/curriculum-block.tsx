import type { LucideIcon } from "lucide-react"
import { BookOpen } from "lucide-react"

export interface CurriculumCategory {
  /** Category title, e.g. "Frontend" */
  title: string
  /** Topics covered within the category */
  items: string[]
  /** Lucide icon component for the category */
  icon: LucideIcon
}

interface CurriculumBlockProps {
  /** Small eyebrow label above the title */
  eyebrow?: string
  /** Section heading */
  title?: string
  /** Optional supporting paragraph below the title */
  description?: string
  /** The curriculum categories to render */
  categories: CurriculumCategory[]
  /** Section background utility class */
  sectionBg?: string
  /** Accent classes (brand color of the diploma) */
  accentText?: string
  accentBg?: string
  accentBorder?: string
}

export function CurriculumBlock({
  eyebrow = "Contenido del programa",
  title = "¿Qué vas a aprender?",
  description,
  categories,
  sectionBg = "bg-white",
  accentText = "text-[#5C1F5C]",
  accentBg = "bg-[#5C1F5C]/10",
  accentBorder = "border-[#5C1F5C]/20",
}: CurriculumBlockProps) {
  return (
    <section className={`py-20 lg:py-24 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${accentBg} ${accentBorder}`}>
            <BookOpen className={`w-4 h-4 ${accentText}`} />
            <span className={`text-sm font-medium tracking-wide uppercase ${accentText}`}>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">{title}</h2>
          {description && <p className="text-lg text-gray-600 leading-relaxed text-pretty">{description}</p>}
          <div className={`mx-auto mt-6 h-1 w-16 rounded-full ${accentBg.replace("/10", "")}`} aria-hidden="true" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <article
                key={category.title}
                className="group relative flex flex-col rounded-2xl bg-white border border-gray-200 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent"
              >
                {/* Accent top bar on hover */}
                <span
                  className={`absolute inset-x-7 top-0 h-1 rounded-full ${accentBg.replace("/10", "")} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  aria-hidden="true"
                />

                <header className="flex items-center justify-between mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accentBg} ${accentBorder}`}>
                    <Icon className={`h-6 w-6 ${accentText}`} />
                  </div>
                  <span className="text-3xl font-bold tabular-nums text-gray-200 transition-colors duration-300 group-hover:text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </header>

                <h3 className="text-xl font-bold text-gray-900 mb-5">{category.title}</h3>

                <ul className="space-y-0 border-t border-gray-100">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-gray-100 py-3 text-gray-600"
                    >
                      <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentBg.replace("/10", "")}`} aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
