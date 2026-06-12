import { Button } from "@/components/ui/button"
import { Users, Heart, MessageCircle, ArrowRight, Search, Send, Clock, MapPin, Flag, ThumbsUp, MessageSquare, UsersRound, TrendingUp, HelpCircle } from "lucide-react"

const posts = [
  {
    id: 1,
    author: "María González",
    time: "Hace 30 min",
    location: "Buenos Aires, Argentina",
    content: "Acabo de terminar el curso de React! Alguien quiere hacer un proyecto juntos para practicar? Estoy pensando en algo con Next.js y TypeScript.",
    tags: ["React", "Next.js", "Proyecto"],
    likes: 15,
    comments: 2,
    replies: [
      {
        author: "Lucas Rodríguez",
        content: "Me sumo! Tengo experiencia con Next.js",
        time: "Hace 25 min"
      }
    ]
  },
  {
    id: 2,
    author: "Carlos Méndez",
    time: "Hace 2 horas",
    location: "Montevideo, Uruguay",
    content: "Alguien tiene experiencia configurando Docker con PostgreSQL? Estoy trabado con los volúmenes y no logro persistir los datos correctamente.",
    tags: ["Docker", "PostgreSQL", "DevOps"],
    likes: 8,
    comments: 5,
    replies: []
  }
]

const features = [
  {
    icon: MessageSquare,
    title: "Debates y discusiones",
    description: "Participá en conversaciones sobre tecnología, tendencias y mejores prácticas del sector."
  },
  {
    icon: UsersRound,
    title: "Grupos de trabajo",
    description: "Creá o unite a grupos de estudio para practicar y desarrollar proyectos en equipo."
  },
  {
    icon: HelpCircle,
    title: "Resolvé tus dudas",
    description: "Preguntá lo que necesites y recibí respuestas de otros estudiantes y docentes."
  },
  {
    icon: ThumbsUp,
    title: "Respuestas valoradas",
    description: "Las mejores respuestas reciben votos positivos, ayudando a encontrar soluciones rápidamente."
  },
  {
    icon: TrendingUp,
    title: "Temas de tendencia",
    description: "Descubrí qué tecnologías están en auge y de qué habla la Comunidad DePC."
  }
]

export function Community() {
  return (
    <section id="comunidad" className="py-12 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D1B4E]/10 border border-[#2D1B4E]/20 mb-6">
            <Users className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm text-[#2D1B4E] font-medium">Comunidad DePC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Tu red social de estudio
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            La Comunidad DePC es como un Facebook pero enfocado en el aprendizaje. Conectá, debatí, preguntá y crecé junto a miles de estudiantes tech.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Community Preview */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D1B4E] to-[#E91E63] flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Comunidad DePC</h3>
                <p className="text-xs text-gray-500">Conectá con estudiantes de todo el mundo</p>
              </div>
            </div>

            {/* Post Creation Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-3 shadow-sm">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2D1B4E] to-[#E91E63] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-white">TU</span>
                </div>
                <div className="flex-1">
                  <div className="w-full min-h-[60px] rounded-lg bg-gray-50 border border-gray-200 p-3 mb-2">
                    <p className="text-gray-400 text-sm">Compartí algo con la Comunidad DePC...</p>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm" className="bg-gradient-to-r from-[#2D1B4E] to-[#E91E63] hover:from-[#3D2B5E] hover:to-[#D81B60] text-white gap-1.5 h-8 text-xs">
                      <Send className="w-3 h-3" />
                      Publicar
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white border border-gray-200 rounded-lg p-2.5 mb-4 flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Buscar en la Comunidad DePC...</span>
            </div>

            {/* Posts */}
            <div className="space-y-3">
              {posts.map((post) => (
                <div key={post.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2D1B4E] to-[#E91E63] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-white">{post.author.split(" ").map(n => n[0]).join("")}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{post.time}</span>
                          <span className="text-gray-300">|</span>
                          <MapPin className="w-3 h-3" />
                          <span>{post.location}</span>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="text-gray-400 hover:text-gray-600">
                      <Flag className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[#E91E63]/10 text-[#E91E63] text-xs font-medium border border-[#E91E63]/20">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center gap-4 text-gray-500">
                    <button type="button" className="flex items-center gap-1 hover:text-[#E91E63] transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-xs">{post.likes}</span>
                    </button>
                    <button type="button" className="flex items-center gap-1 hover:text-[#2D1B4E] transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="text-xs">{post.comments}</span>
                    </button>
                  </div>

                  {/* Replies */}
                  {post.replies.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                      {post.replies.map((reply) => (
                        <div key={reply.author} className="flex gap-2 ml-3">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-white">{reply.author.split(" ").map(n => n[0]).join("")}</span>
                          </div>
                          <div className="flex-1 bg-gray-50 rounded-lg p-2">
                            <p className="font-semibold text-gray-900 text-xs">{reply.author}</p>
                            <p className="text-gray-600 text-xs">{reply.content}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{reply.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-[#2D1B4E] to-[#5C1F5C] border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Qué es la Comunidad DePC?
              </h3>
              <p className="text-white/70 mb-6">
                Es tu espacio social dentro de la plataforma donde podés interactuar con otros estudiantes, resolver dudas y crecer profesionalmente.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{feature.title}</p>
                      <p className="text-white/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full bg-white hover:bg-gray-100 text-[#2D1B4E] h-12 font-semibold">
                Unirme a la Comunidad DePC
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
