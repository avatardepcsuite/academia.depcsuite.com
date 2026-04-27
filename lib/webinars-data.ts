export interface Webinar {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  type: string
  typeColor: string
  category: string
  duration: string
  instructor: string
  instructorImage?: string
  date: string
  dateLabel: string
  time: string
  audience: string
  downloadableMaterial?: string
  note?: string
  tags?: string[]
  available: boolean
}

export const categories = [
  { id: "all", label: "Todos" },
  { id: "empleabilidad", label: "Empleabilidad" },
  { id: "ia", label: "Inteligencia Artificial" },
  { id: "automatizacion", label: "Automatización" },
  { id: "productividad", label: "Productividad" },
  { id: "programacion", label: "Programación" },
  { id: "seguridad", label: "Ciberseguridad" },
]

export const categoryColorMap: Record<string, { stripe: string; heroGradient: string; accent: string; light: string; titleColor: string }> = {
  empleabilidad: {
    stripe: "bg-emerald-500",
    heroGradient: "from-[#2D1B4E] via-emerald-900 to-emerald-700",
    accent: "text-emerald-300",
    light: "bg-emerald-500/20",
    titleColor: "text-emerald-700",
  },
  ia: {
    stripe: "bg-purple-500",
    heroGradient: "from-[#2D1B4E] via-purple-900 to-indigo-700",
    accent: "text-purple-300",
    light: "bg-purple-500/20",
    titleColor: "text-purple-700",
  },
  automatizacion: {
    stripe: "bg-orange-500",
    heroGradient: "from-[#2D1B4E] via-orange-900 to-amber-700",
    accent: "text-orange-300",
    light: "bg-orange-500/20",
    titleColor: "text-orange-700",
  },
  productividad: {
    stripe: "bg-slate-600",
    heroGradient: "from-[#2D1B4E] via-slate-800 to-slate-600",
    accent: "text-slate-300",
    light: "bg-slate-500/20",
    titleColor: "text-slate-700",
  },
  programacion: {
    stripe: "bg-cyan-500",
    heroGradient: "from-[#2D1B4E] via-cyan-900 to-blue-700",
    accent: "text-cyan-300",
    light: "bg-cyan-500/20",
    titleColor: "text-cyan-700",
  },
  seguridad: {
    stripe: "bg-red-500",
    heroGradient: "from-[#2D1B4E] via-red-900 to-rose-700",
    accent: "text-red-300",
    light: "bg-red-500/20",
    titleColor: "text-red-700",
  },
}

export const webinars: Webinar[] = [
  {
    slug: "ciberseguridad-aplicada-prevencion-fraudes-digitales",
    title: "Ciberseguridad aplicada: prevención y detección de fraudes digitales",
    shortDescription:
      "Aprendé a identificar y prevenir los fraudes digitales más comunes. Casos reales, señales de alerta y buenas prácticas para proteger tu información.",
    fullDescription:
      "Los fraudes digitales evolucionan cada día y cualquiera puede ser víctima. En este webinar práctico vas a aprender a reconocer las técnicas más usadas por los atacantes y cómo protegerte de forma efectiva.\n\n**Lo que vas a aprender:**\n\n• Cómo funcionan los fraudes digitales más frecuentes (phishing, ingeniería social, suplantación de identidad, estafas en redes sociales y marketplaces).\n• Señales de alerta para detectar intentos de fraude antes de caer.\n• Herramientas y hábitos de seguridad para proteger tus cuentas, dispositivos e información personal.\n• Qué hacer si fuiste víctima de un fraude: pasos inmediatos y canales de denuncia.\n\n**Metodología práctica:**\n\nAnalizaremos casos reales y ejemplos concretos para que puedas aplicar lo aprendido desde el primer día. No se requieren conocimientos técnicos previos.\n\n**Por qué es importante:**\n\nLa ciberseguridad ya no es solo para expertos en tecnología. Hoy todos manejamos información sensible online: datos bancarios, contraseñas, documentos personales. Saber identificar riesgos y actuar con criterio es una habilidad esencial en el mundo digital.",
    image: "/images/webinar-ciberseguridad-fraudes.jpg",
    type: "Webinar",
    typeColor: "bg-red-600",
    category: "seguridad",
    duration: "90 – 120 min",
    instructor: "Prof. Edgardo Robinson",
    instructorImage: "/images/profesor-edgardo.jpeg",
    date: "2026-05-28",
    dateLabel: "Jueves 28 de Mayo 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Cualquier persona que use internet: estudiantes, profesionales, emprendedores y usuarios que quieran proteger su información personal y laboral.",
    downloadableMaterial:
      "Checklist de seguridad personal + Guía de señales de alerta + Recursos y canales de denuncia.",
    tags: ["Ciberseguridad", "Fraudes", "Phishing", "Seguridad Digital"],
    available: true,
  },
  {
    slug: "cv-2026-pasa-filtros-ats-industria-tech",
    title: "CV 2026: pas\u00e1 filtros ATS y humanos en la industria Tech",
    shortDescription:
      "Aprend\u00e9 a crear un CV escaneable, claro y orientado a resultados, con la estructura y el lenguaje que hoy funciona en la industria tech.",
    fullDescription:
      "Tu CV compite en dos etapas: primero lo filtra un sistema (ATS) y despu\u00e9s lo juzga una persona en segundos. En este webinar vas a aprender a crear un CV escaneable, claro y orientado a resultados, con la estructura y el lenguaje que hoy funciona en la industria tech.\n\nVas a salir con criterios concretos para pasar filtros autom\u00e1ticos, reducir el \u201cte ghostean\u201d y aumentar tus chances de entrevista sin inventarte experiencia: mejor narrativa, mejor evidencia, mejor lectura.",
    image: "/images/webinar-cv-ats.jpg",
    type: "Webinar",
    typeColor: "bg-emerald-600",
    category: "empleabilidad",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Pamela Morales",
    instructorImage: "/images/docente-pamela.png",
    date: "2026-03-03",
    dateLabel: "Martes 3 de Marzo 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "J\u00f3venes (18\u201330), primer empleo tech, juniors o cambio de rol (dev, data, dise\u00f1o, producto).",
    tags: ["CV", "ATS", "LinkedIn", "Empleo Tech"],
    available: true,
  },
  {
    slug: "potencia-productividad-ia-copilot-vs-agent-first",
    title: "Potenci\u00e1 tu productividad con IA: Copilot vs Agent-First",
    shortDescription:
      "Compar\u00e1 los dos enfoques m\u00e1s usados de IA para trabajo: asistentes tipo Copilot vs agentes aut\u00f3nomos. Descubr\u00ed cu\u00e1l se adapta mejor a tu flujo.",
    fullDescription:
      "No se trata de \u201cusar IA\u201d. Se trata de trabajar mejor con IA sin apagar tu pensamiento cr\u00edtico. En este webinar compar\u00e1s dos enfoques que hoy dominan el trabajo real:\n\n\u2022 Copilot / asistente: te ayuda mientras hac\u00e9s.\n\u2022 Agent-first / agentes: planifican y ejecutan por pasos.\n\nVas a aprender cu\u00e1ndo conviene cada uno, c\u00f3mo pedir resultados verificables, c\u00f3mo revisar sin perder tiempo y c\u00f3mo integrar IA a tu flujo para ganar velocidad sin dependencia.",
    image: "/images/webinar-ai-productivity.jpg",
    type: "Webinar",
    typeColor: "bg-purple-600",
    category: "ia",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Mat\u00edas Gimenez",
    instructorImage: "/images/docente-matias.png",
    date: "2026-03-19",
    dateLabel: "Miércoles 18 de Marzo 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Estudiantes y j\u00f3venes profesionales tech que quieren avanzar m\u00e1s r\u00e1pido sin perder criterio.",
    tags: ["IA", "Copilot", "Agentes", "Productividad"],
    available: true,
  },
  {
    slug: "notion-desde-cero-primer-sistema-productividad",
    title: "Notion desde cero: tu primer sistema de productividad digital",
    shortDescription:
      "Aprendé Notion desde cero y armá un sistema simple para planificación semanal + seguimiento de pendientes en vivo.",
    fullDescription: `En este webinar se revisan los componentes clave de la interfaz de Notion (workspace, panel de control, páginas privadas/compartidas y teamspaces), los principales bloques de construcción y cómo crearlos con "/" (texto, encabezados, listas, tablas, toggles, callouts, etc.), los fundamentos de las bases de datos (qué son y cómo funcionan con páginas, propiedades, vistas y filtros, y cuándo conviene usarlas inline vs full page), los beneficios de la gestión del conocimiento mediante una wiki (incluyendo propiedades típicas como dueño, verificación y etiquetas) y un panorama general de AI Agents y sus consideraciones de uso, especialmente vía API.

**Temario:**

**1. Componentes de la Interfaz de Notion**
• Espacio de trabajo (Workspace): El contenedor de nivel más alto donde vive todo tu contenido.
• Panel de control (Control panel): Búsqueda, Inicio y Bandeja de entrada.
• Páginas privadas (Private pages): Páginas visibles solo para el usuario.
• Espacios de equipo (Teamspaces): Espacios dedicados para que los equipos gestionen documentación.
• Páginas compartidas (Shared pages): Páginas compartidas con personas específicas.
• Marketplace: Colección de plantillas listas para usar.

**2. Bloques de Construcción de Notion (Se usa "/" para crear un bloque)**
• Bloques Básicos: Texto, Encabezados, Listas, Tablas, Toggles, Callouts.
• Bases de Datos: Colecciones de páginas con propiedades personalizables, vistas y filtros.
• Bloques de Medios: Imágenes, Videos, Archivos, Audio, Fragmentos de código.
• Incrustaciones (Embeds): Integración con más de 500 aplicaciones externas.
• Bloques Avanzados: Botones, Tabla de contenidos, Bloques de IA, Ecuaciones, Bloques sincronizados.

**3. Databases**
• Páginas (Pages): Cada elemento es una página de Notion.
• Propiedades (Properties): Campos que almacenan tipos específicos de información.
• Plantillas de Base de Datos: Formato consistente para nuevas entradas.
• Vistas (Views): Tablas, tableros, calendarios, cronogramas, galerías y listas.
• Filtros (Filters): Control de qué elementos aparecen.
• Bases de Datos Integradas vs. de Página Completa.

**4. Gestión del Conocimiento: Beneficios de una Wiki**
• Repositorio centralizado de información confiable.
• Propiedades clave: Dueño de la página, Verificación, Etiquetas.

**5. AI Agent**
• Capacidades vía API: Crear bases de datos, crear páginas, usar plantillas, actualizar contenido.
• Acciones disponibles: Crear/editar bases de datos, crear/editar páginas, buscar contenido.

**6. Ejecutable**
• Sistema semanal + pendientes (simple).

**7. Certificación**
• Con la información obtenida, los estudiantes van a ser capaces de obtener la certificación Notion Essentials.`,
    image: "/images/webinar-notion-productivity.jpg",
    type: "Webinar",
    typeColor: "bg-gray-800",
    category: "productividad",
    duration: "90 – 120 min",
    instructor: "Prof. Santiago Rincón",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-03-31",
    dateLabel: "Martes 31 de Marzo 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience: "Principiantes, estudiantes y trabajadores remotos.",
    tags: ["Notion", "Productividad", "Organización", "Wiki", "Bases de Datos"],
    available: true,
  },
  {
    slug: "tu-aliado-ia-preparar-entrevistas-optimizar-perfil",
    title:
      "Tu Aliado IA: herramientas para preparar entrevistas y optimizar tu perfil",
    shortDescription:
      "Us\u00e1 IA de forma pr\u00e1ctica y \u00e9tica para entrenar entrevistas, mejorar tu LinkedIn y construir un perfil que convierta visitas en entrevistas.",
    fullDescription:
      "Si est\u00e1s aplicando, la diferencia rara vez es \u201csaber m\u00e1s\u201d: suele ser explicarlo mejor. Ac\u00e1 vas a usar IA de forma pr\u00e1ctica y \u00e9tica para entrenar entrevistas: simulaci\u00f3n de preguntas, pr\u00e1ctica de respuestas, feedback para mejorar claridad y un plan para optimizar LinkedIn + portfolio.\n\nLa clave: que la IA sea tu entrenador (te mejora), no tu muleta (te reemplaza). Vas a aprender a justificar decisiones t\u00e9cnicas, sonar natural y construir un perfil que convierta visitas en entrevistas.",
    image: "/images/webinar-ia-entrevistas.jpg",
    type: "Webinar",
    typeColor: "bg-emerald-600",
    category: "empleabilidad",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Pamela Morales",
    instructorImage: "/images/docente-pamela.png",
    date: "2026-04-07",
    dateLabel: "Jueves 16 de Abril 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Candidatos tech, estudiantes y juniors que quieren entrenar entrevistas con feedback.",
    downloadableMaterial:
      "Pack de prompts + gui\u00f3n de mock interview + r\u00fabrica de evaluaci\u00f3n + checklist de optimizaci\u00f3n de perfil.",
    tags: ["IA", "Entrevistas", "LinkedIn", "Portfolio"],
    available: true,
  },
    {
    slug: "ia-n8n-asistentes-inteligentes-sin-programar",
    title: "IA + n8n: cre\u00e1 asistentes inteligentes sin programar",
    shortDescription:
      "Integr\u00e1 modelos de IA con n8n para crear asistentes y automatizaciones: clasificaci\u00f3n de mensajes, res\u00famenes y generaci\u00f3n de contenido.",
    fullDescription:
      "La IA es potente\u2026 pero el valor aparece cuando la conect\u00e1s a procesos reales. En este webinar integr\u00e1s modelos de IA con n8n para crear asistentes y automatizaciones: clasificaci\u00f3n de mensajes, res\u00famenes, respuestas sugeridas y generaci\u00f3n de contenido con control de calidad.\n\nTe llev\u00e1s un patr\u00f3n replicable para automatizar sin perder precisi\u00f3n, reduciendo errores y \u201calucinaciones\u201d.",
    image: "/images/webinar-ia-n8n-asistentes.jpg",
    type: "Webinar",
    typeColor: "bg-violet-600",
    category: "automatizacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Santiago Rinc\u00f3n",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-06-11",
    dateLabel: "Jueves 11 de Junio 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Creadores, marketing, analistas, emprendedores tech y operaciones.",
    downloadableMaterial:
      "Workflows base + prompts + checklist de calidad.",
    tags: ["n8n", "IA", "Asistentes", "Automatizaci\u00f3n"],
    available: true,
  },
  {
    slug: "de-estudiante-a-candidato-mentalidad-para-it",
    title:
      "De estudiante a candidato: el cambio de mentalidad para ingresar a IT",
    shortDescription:
      "Hac\u00e9 el puente real entre estudiar y conseguir entrevistas: portfolio, postulaciones y un mapa claro para medir tu progreso.",
    fullDescription:
      "Estudiar es necesario, pero no alcanza: el mercado entrevista a candidatos, no a \u201cpersonas que est\u00e1n aprendiendo\u201d. En este webinar hacemos el puente real: c\u00f3mo armar un portfolio con proyectos que sumen, demostrar habilidades, leer requisitos de b\u00fasquedas reales y sostener un ritmo de postulaciones sin frustrarte.\n\nTe vas con un mapa claro para ordenar tu camino y medir progreso con se\u00f1ales concretas (no con ansiedad).",
    image: "/images/webinar-estudiante-candidato.jpg",
    type: "Webinar",
    typeColor: "bg-emerald-600",
    category: "empleabilidad",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Pamela Morales",
    instructorImage: "/images/docente-pamela.png",
    date: "2026-04-23",
    dateLabel: "Jueves 14 de Mayo 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Principiantes e intermedios que estudian pero no consiguen entrevistas o no saben c\u00f3mo salir al mercado.",
    downloadableMaterial:
      "Roadmap 30/60/90 d\u00edas + tracker de postulaciones + template de portfolio/proyectos.",
    tags: ["Portfolio", "Primer Empleo", "Roadmap", "IT"],
    available: true,
  },
  {
    slug: "automatiza-dia-a-dia-n8n-primer-workflow",
    title:
      "Automatiz\u00e1 tu d\u00eda a d\u00eda con n8n: de cero a tu primer workflow",
    shortDescription:
      "Entend\u00e9 qu\u00e9 automatizar, c\u00f3mo empezar sin experiencia y constru\u00ed flujos en vivo con formularios + alertas.",
    fullDescription:
      "Automatizar no es \u201cser programador\u201d: es dejar de repetir tareas que drenan energ\u00eda. En este webinar entend\u00e9s qu\u00e9 automatizar, c\u00f3mo empezar sin experiencia y construimos flujos en vivo (captura desde formularios + alertas por email/Telegram).\n\nSal\u00eds pensando en workflows simples que ahorran tiempo de verdad y con un m\u00e9todo para destrabar errores comunes.",
    image: "/images/webinar-n8n-basics.jpg",
    type: "Webinar",
    typeColor: "bg-orange-500",
    category: "automatizacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Santiago Rinc\u00f3n",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-06-09",
    dateLabel: "Martes 26 de Mayo 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience: "Principiantes, estudiantes, emprendedores y no t\u00e9cnicos.",
    downloadableMaterial:
      "2 workflows exportados (.json) + checklist de troubleshooting.",
    note: "WhatsApp puede requerir proveedor/API paga seg\u00fan implementaci\u00f3n.",
    tags: ["n8n", "Workflows", "Email", "Telegram"],
    available: true,
  },
  {
    slug: "crear-bot-whatsapp-con-n8n",
    title: "Automatizá turnos por WhatsApp con n8n, Google Calendar y Docs",
    shortDescription:
      "Creá una automatización completa: recibí solicitudes de turnos por WhatsApp, respondé automáticamente y agendá en Google Calendar.",
    fullDescription:
      "WhatsApp es el canal donde tus clientes quieren comunicarse. En este webinar vas a crear una automatización real que integra n8n, WhatsApp, Google Calendar y Google Docs para gestionar turnos de forma profesional.\n\nAprendé a configurar un flujo donde el cliente solicita un turno por WhatsApp, el bot responde automáticamente con disponibilidad, agenda el turno en Google Calendar y genera documentación en Google Docs. Ideal para comercios, consultorios, peluquerías y cualquier negocio que necesite gestionar citas.\n\nTe llevás un sistema funcional que podés adaptar a tu negocio desde el primer día.",
    image: "/images/webinar-whatsapp-bot.jpg",
    type: "Webinar",
    typeColor: "bg-green-600",
    category: "automatizacion",
    duration: "90 – 120 min",
    instructor: "Prof. Santiago Rincón",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-04-28",
    dateLabel: "Martes 28 de Abril 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience: "Emprendedores, dueños de comercios, freelancers y estudiantes tech.",
    downloadableMaterial:
      "Workflow completo exportado (.json) + plantilla de mensajes + guía de configuración de Google Calendar.",
    note: "WhatsApp suele requerir proveedor/API y tiene limitaciones según el método elegido.",
    tags: ["WhatsApp", "n8n", "Google Calendar", "Google Docs", "Turnos"],
    available: true,
  },
  {
    slug: "storytelling-devs-metodo-star-desafios-tecnicos",
    title:
      "Storytelling para Devs: el m\u00e9todo STAR aplicado a desaf\u00edos t\u00e9cnicos",
    shortDescription:
      "Convert\u00ed experiencias t\u00e9cnicas en historias claras para entrevistas, demos y networking usando el m\u00e9todo STAR.",
    fullDescription:
      "Pod\u00e9s ser bueno t\u00e9cnicamente y aun as\u00ed perder oportunidades por no comunicar impacto. En este webinar convert\u00eds experiencias t\u00e9cnicas (bugs, performance, arquitectura, trabajo en equipo) en historias claras para entrevistas, demos y networking usando STAR.\n\nPracticamos con casos t\u00edpicos de IT y aprend\u00e9s a cuantificar resultados sin exagerar: claridad, evidencia y credibilidad.",
    image: "/images/webinar-storytelling-devs.jpg",
    type: "Webinar",
    typeColor: "bg-emerald-600",
    category: "empleabilidad",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Pamela Morales",
    instructorImage: "/images/docente-pamela.png",
    date: "2026-07-07",
    dateLabel: "Martes 23 de Junio 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Devs junior/ssr y estudiantes con proyectos que quieren comunicar impacto.",
    downloadableMaterial:
      "Plantilla STAR + banco de ejemplos + checklist de respuestas.",
    tags: ["Storytelling", "STAR", "Entrevistas", "Comunicaci\u00f3n"],
    available: true,
  },
  {
    slug: "notion-emprendedores-crm-finanzas-operaciones",
    title:
      "Notion para emprendedores: CRM, finanzas y operaciones todo-en-uno",
    shortDescription:
      "Arm\u00e1 un sistema operativo en Notion: CRM + pipeline, tablero Kanban, documentaci\u00f3n interna y control financiero b\u00e1sico.",
    fullDescription:
      "Si tu operaci\u00f3n vive en mil herramientas, termin\u00e1s apagando incendios. En este webinar arm\u00e1s un \u201csistema operativo\u201d en Notion: CRM + pipeline, tablero Kanban, documentaci\u00f3n interna y control financiero b\u00e1sico.\n\nIdeal para ordenar ventas y operaci\u00f3n con una base clara, simple y escalable.",
    image: "/images/webinar-notion-emprendedores.jpg",
    type: "Webinar",
    typeColor: "bg-gray-800",
    category: "productividad",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Santiago Rinc\u00f3n",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-07-23",
    dateLabel: "Martes 7 de Julio 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience: "Freelancers, startups y negocios chicos.",
    downloadableMaterial:
      "Templates CRM + finanzas simple + operaciones + proyectos (Kanban).",
    tags: ["Notion", "CRM", "Finanzas", "Emprendedores"],
    available: true,
  },
  {
    slug: "automatiza-notion-con-n8n-sistemas-inteligentes",
    title:
      "Automatiz\u00e1 Notion con n8n: sistemas inteligentes sin escribir c\u00f3digo",
    shortDescription:
      "Conect\u00e1 Notion con otras apps usando n8n: carg\u00e1 tareas/leads desde formularios y sincroniz\u00e1 con Google Sheets.",
    fullDescription:
      "Notion funciona mejor cuando deja de depender de que \u201calguien cargue todo a mano\u201d. En este webinar conect\u00e1s Notion con otras apps usando n8n, ves lo esencial del API de Notion y armamos automatizaciones en vivo: cargar tareas/leads desde formularios y sincronizar con Google Sheets u otras bases.\n\nIncluye errores comunes, buenas pr\u00e1cticas y c\u00f3mo pensar flujos mantenibles.",
    image: "/images/webinar-notion-n8n.jpg",
    type: "Webinar",
    typeColor: "bg-amber-600",
    category: "automatizacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Santiago Rinc\u00f3n",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-08-04",
    dateLabel: "Jueves 23 de Julio 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Usuarios intermedios de Notion, estudiantes, emprendedores y equipos.",
    downloadableMaterial:
      "2 workflows (form\u2192Notion y sync) + plantilla de base Notion + lista de errores y soluciones.",
    tags: ["Notion", "n8n", "API", "Automatizaci\u00f3n"],
    available: true,
  },
  {
    slug: "documentar-proyectos-profesional-con-ia",
    title:
      "Aprend\u00e9 a documentar tus proyectos de forma profesional con IA",
    shortDescription:
      "Us\u00e1 IA para acelerar documentaci\u00f3n t\u00e9cnica: README, gu\u00edas de instalaci\u00f3n, docs de API y decisiones t\u00e9cnicas (ADR).",
    fullDescription:
      "La documentaci\u00f3n no es \u201crelleno\u201d: es lo que convierte un proyecto en algo usable, mantenible y confiable. En este webinar us\u00e1s IA para acelerar documentaci\u00f3n t\u00e9cnica que s\u00ed sirve: README, gu\u00edas de instalaci\u00f3n, docs de API, ejemplos de uso y decisiones t\u00e9cnicas (ADR).\n\nTe llev\u00e1s prompts + un flujo de revisi\u00f3n para evitar texto inflado y lograr claridad profesional.",
    image: "/images/webinar-documentation-ai.jpg",
    type: "Webinar",
    typeColor: "bg-indigo-600",
    category: "ia",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Mat\u00edas Gim\u00e9nez",
    instructorImage: "/images/docente-matias.png",
    date: "2026-08-20",
    dateLabel: "Miércoles 5 de Agosto 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Devs junior, estudiantes con portfolio, freelas y equipos chicos.",
    downloadableMaterial:
      "Templates README + ADR + docs endpoint + prompts + checklist de revisi\u00f3n.",
    tags: ["IA", "Documentaci\u00f3n", "README", "Portfolio"],
    available: true,
  },
  {
    slug: "construir-asistente-virtual-para-tu-web",
    title: "C\u00f3mo construir un asistente virtual para tu web",
    shortDescription:
      "Dise\u00f1\u00e1 e implement\u00e1 un asistente para tu sitio: objetivos, contenido fuente, tono de marca y escalamiento a humano.",
    fullDescription:
      "Un asistente virtual bien hecho baja tickets, mejora la experiencia y puede aumentar conversi\u00f3n. Mal hecho, rompe confianza. En este webinar dise\u00f1\u00e1s e implement\u00e1s un asistente para tu sitio: objetivos, contenido fuente (FAQs, docs, blog), tono de marca, escalamiento a humano y m\u00e9tricas para medir impacto real.\n\nAprend\u00e9s tambi\u00e9n a reducir respuestas incorrectas con buenas pr\u00e1cticas de QA y seguridad.",
    image: "/images/webinar-virtual-assistant.jpg",
    type: "Webinar",
    typeColor: "bg-teal-600",
    category: "ia",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Mat\u00edas Gim\u00e9nez",
    instructorImage: "/images/docente-matias.png",
    date: "2026-09-08",
    dateLabel: "Miércoles 19 de Agosto 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience: "Emprendedores, marketing+tech, PMs y devs web.",
    downloadableMaterial:
      "Plantilla base de conocimiento + checklist QA/seguridad + gu\u00eda de m\u00e9tricas/KPIs.",
    tags: ["IA", "Chatbot", "Asistente Virtual", "Web"],
    available: true,
  },
  {
    slug: "conecta-herramientas-apis-servicios-n8n",
    title:
      "Conect\u00e1 tus herramientas favoritas: APIs y servicios con n8n",
    shortDescription:
      "Aprend\u00e9 lo esencial de APIs (endpoints, tokens, JSON) y us\u00e1 n8n para orquestar Notion, Sheets, Slack, Trello y m\u00e1s.",
    fullDescription:
      "Saber \u201cun poco\u201d de APIs hoy es una superhabilidad: te permite integrar herramientas sin sufrir. En este webinar aprend\u00e9s lo esencial (endpoints, tokens, JSON) y c\u00f3mo usarlo en n8n para orquestar Notion, Sheets, Slack, Trello, Airtable y m\u00e1s.\n\nArmamos flujos reales multi-app para que pases de la teor\u00eda a conexiones que funcionan.",
    image: "/images/webinar-apis-n8n.jpg",
    type: "Webinar",
    typeColor: "bg-sky-600",
    category: "automatizacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Santiago Rinc\u00f3n",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-09-24",
    dateLabel: "Martes 1 de Septiembre 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Profesionales tech, operaciones, estudiantes y makers.",
    downloadableMaterial:
      "Mini gu\u00eda \u201cAPIs sin dolor\u201d + workflow ejemplo + glosario.",
    tags: ["APIs", "n8n", "Integraciones", "Slack"],
    available: true,
  },
  {
    slug: "automatizacion-empresas-procesos-escalables-n8n",
    title:
      "Automatizaci\u00f3n en empresas: construyendo procesos escalables con n8n",
    shortDescription:
      "Aprend\u00e9 patrones para llevar flujos a producci\u00f3n: manejo de errores, reintentos, scheduling, logs y monitoreo.",
    fullDescription:
      "Hay una diferencia enorme entre \u201cautomatizaciones caseras\u201d y procesos de nivel empresa. En este webinar aprend\u00e9s patrones para llevar flujos a producci\u00f3n: manejo de errores, reintentos, scheduling, branching logic, logs, monitoreo e idempotencia.\n\nTe llev\u00e1s criterios para que tus automatizaciones sean mantenibles, auditables y escalables.",
    image: "/images/webinar-automatizacion-empresas.jpg",
    type: "Webinar",
    typeColor: "bg-orange-600",
    category: "automatizacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Santiago Rinc\u00f3n",
    instructorImage: "/images/docente-santiago.jpeg",
    date: "2026-10-06",
    dateLabel: "Jueves 17 de Septiembre 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Operaciones, business analysts, l\u00edderes de automatizaci\u00f3n, CTOs y perfiles tech.",
    downloadableMaterial:
      "Checklist \u201cproduction-ready\u201d + patrones + plantilla de monitoreo b\u00e1sico.",
    tags: ["n8n", "Empresas", "Escalabilidad", "Producci\u00f3n"],
    available: true,
  },
  {
    slug: "frameworks-frontend-por-que-usar-react",
    title:
      "Frameworks frontend: qu\u00e9 son, para qu\u00e9 sirven y por qu\u00e9 usar React",
    shortDescription:
      "Entend\u00e9 c\u00f3mo se construyen interfaces modernas, c\u00f3mo pensar en componentes y estado y por qu\u00e9 React sigue siendo tan demandado.",
    fullDescription:
      "Si ya manej\u00e1s lo b\u00e1sico, el pr\u00f3ximo salto es entender c\u00f3mo se construyen interfaces modernas. En este webinar aprend\u00e9s qu\u00e9 problema resuelven los frameworks/librer\u00edas frontend, c\u00f3mo pensar en componentes y estado y por qu\u00e9 React sigue siendo tan demandado.\n\nTe mostramos c\u00f3mo arrancar tu primer proyecto, qu\u00e9 aprender primero y c\u00f3mo evitar trabas t\u00edpicas del inicio.",
    image: "/images/webinar-react-frameworks.jpg",
    type: "Webinar",
    typeColor: "bg-cyan-600",
    category: "programacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Mat\u00edas Gim\u00e9nez",
    instructorImage: "/images/docente-matias.png",
    date: "2026-04-14",
    dateLabel: "Martes 14 de Abril 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Devs juniors, estudiantes y autodidactas que vienen de HTML/CSS/JS.",
    downloadableMaterial: "Roadmap + checklist de inicio + glosario.",
    tags: ["React", "Frontend", "Frameworks", "JavaScript"],
    available: true,
  },
  {
    slug: "extraer-datos-web-scraping-proteger-sitio",
    title:
      "C\u00f3mo extraer datos de la web y c\u00f3mo evitar que lo hagan con tu sitio",
    shortDescription:
      "Domin\u00e1 fundamentos de web scraping responsable y aprend\u00e9 a proteger tu web de bots con rate limiting y reglas anti-abuse.",
    fullDescription:
      "Scraping es \u00fatil\u2026 y tambi\u00e9n puede ser un problema. En este webinar domin\u00e1s fundamentos de web scraping responsable (qu\u00e9 se puede y qu\u00e9 no), casos de uso y l\u00edmites \u00e9ticos/legales. Y del lado defensivo aprend\u00e9s a detectar bots, aplicar rate limiting y reglas anti-abuse para proteger tu web sin romper la UX.",
    image: "/images/webinar-web-scraping.jpg",
    type: "Webinar",
    typeColor: "bg-orange-600",
    category: "programacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Mat\u00edas Gim\u00e9nez",
    instructorImage: "/images/docente-matias.png",
    date: "2026-11-03",
    dateLabel: "Miércoles 14 de Octubre 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Devs web, estudiantes, analistas/makers y admins de sitios.",
    downloadableMaterial:
      "Checklist scraping \u00e9tico + checklist anti-bots (con trade-offs).",
    tags: ["Web Scraping", "Seguridad", "Bots", "Python"],
    available: true,
  },
  {
    slug: "sistemas-autenticacion-seguros-escalables",
    title:
      "C\u00f3mo aplicar estrategias de sistemas de autenticaci\u00f3n seguros y escalables",
    shortDescription:
      "Aprend\u00e9 patrones modernos: OAuth2/OIDC, JWT vs sessions, MFA y buenas pr\u00e1cticas para evitar fallas t\u00edpicas de seguridad.",
    fullDescription:
      "La autenticaci\u00f3n no es \u201chacer un login\u201d: es una superficie cr\u00edtica de seguridad y experiencia. En este webinar aprend\u00e9s patrones modernos: OAuth2/OIDC, JWT vs sessions, MFA, manejo de tokens y buenas pr\u00e1cticas para evitar fallas t\u00edpicas (phishing, credential stuffing, sesiones mal gestionadas).\n\nEnfoque pr\u00e1ctico para dise\u00f1ar un sistema seguro y escalable sin sacrificar UX.",
    image: "/images/webinar-authentication.jpg",
    type: "Webinar",
    typeColor: "bg-red-600",
    category: "programacion",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Mat\u00edas Gim\u00e9nez",
    instructorImage: "/images/docente-matias.png",
    date: "2026-11-19",
    dateLabel: "Miércoles 28 de Octubre 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Devs backend/fullstack junior\u2013semi senior y estudiantes avanzados.",
    downloadableMaterial:
      "Cheatsheet OAuth/JWT + checklist de seguridad + diagramas de flujo.",
    tags: ["OAuth2", "JWT", "Seguridad", "Autenticaci\u00f3n"],
    available: true,
  },
  {
    slug: "habilidades-blandas-soft-skills-era-ia",
    title:
      "Habilidades Blandas (Soft Skills) en la era de la IA: lo que el c\u00f3digo no puede reemplazar",
    shortDescription:
      "Desarroll\u00e1 habilidades que te diferencian: comunicaci\u00f3n, feedback, colaboraci\u00f3n, ownership y pensamiento cr\u00edtico.",
    fullDescription:
      "Cuando la IA acelera lo t\u00e9cnico, lo que te hace crecer es lo humano: comunicaci\u00f3n, feedback, colaboraci\u00f3n, ownership, criterio y pensamiento cr\u00edtico. En este webinar desarroll\u00e1s habilidades que te diferencian en equipos reales y con stakeholders reales.\n\nPorque no basta con resolver: hay que alinear, priorizar, explicar y ejecutar con claridad.",
    image: "/images/webinar-soft-skills.jpg",
    type: "Webinar",
    typeColor: "bg-rose-600",
    category: "empleabilidad",
    duration: "90 \u2013 120 min",
    instructor: "Prof. Pamela Morales",
    instructorImage: "/images/docente-pamela.png",
    date: "2026-12-01",
    dateLabel: "Jueves 12 de Noviembre 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience:
      "Cualquier rol tech (dev, data, dise\u00f1o, producto), especialmente juniors.",
    downloadableMaterial:
      "Plantillas de feedback/1:1 + checklist de comunicaci\u00f3n y ownership.",
    tags: ["Soft Skills", "Comunicaci\u00f3n", "Liderazgo", "IA"],
    available: true,
  },
  {
    slug: "fundamentos-ciberseguridad",
    title: "Fundamentos de ciberseguridad",
    shortDescription:
      "Conocé los principios clave de la ciberseguridad y los riesgos más comunes del entorno digital como phishing, malware y robo de credenciales.",
    fullDescription:
      "En este webinar conocerás los principios clave de la ciberseguridad y por qué hoy es un tema central para personas, empresas y organizaciones de cualquier tamaño. Se abordarán los riesgos más comunes del entorno digital, como el phishing, el robo de credenciales, el malware y otras amenazas frecuentes, junto con las mejores prácticas para prevenir incidentes y proteger la información.\n\nAdemás, se compartirán recomendaciones concretas para fortalecer la seguridad en el uso diario de correos, dispositivos, contraseñas, redes y accesos, brindando una base sólida para comprender cómo prevenir vulnerabilidades y actuar de manera más segura en entornos digitales. Una propuesta ideal para quienes buscan iniciarse en ciberseguridad con una mirada práctica, actual y aplicada.",
    image: "/images/webinar-ciberseguridad-fundamentos.jpg",
    type: "Webinar",
    typeColor: "bg-red-600",
    category: "seguridad",
    duration: "90 min",
    instructor: "Prof. Eliana Caballero",
    instructorImage: null,
    date: "2026-05-21",
    dateLabel: "Jueves 21 de Mayo 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience: "Principiantes, estudiantes, emprendedores y cualquier persona interesada en proteger su información digital.",
    tags: ["Ciberseguridad", "Phishing", "Malware", "Seguridad Digital"],
    available: true,
  },
  {
    slug: "como-aplicar-ia-en-ciberseguridad",
    title: "Cómo aplicar IA en ciberseguridad",
    shortDescription:
      "Descubrí cómo la inteligencia artificial está transformando la ciberseguridad y sus aplicaciones en detección y prevención de amenazas.",
    fullDescription:
      "En este webinar descubrirás cómo la inteligencia artificial está transformando la ciberseguridad y cuáles son sus aplicaciones más relevantes en la detección, prevención y respuesta ante amenazas. Se explorará cómo la IA permite identificar comportamientos anómalos, automatizar tareas de monitoreo, analizar grandes volúmenes de datos y anticipar posibles ataques con mayor velocidad y precisión.\n\nTambién se presentarán casos de uso y escenarios concretos en los que la IA se convierte en una aliada estratégica para fortalecer la seguridad digital, optimizar recursos y mejorar la toma de decisiones. Una propuesta pensada para quienes quieren comprender el impacto real de esta tecnología y cómo empezar a aplicarla en contextos de ciberseguridad de forma efectiva e innovadora.",
    image: "/images/webinar-ia-ciberseguridad.jpg",
    type: "Webinar",
    typeColor: "bg-red-600",
    category: "seguridad",
    duration: "90 min",
    instructor: "Prof. Eliana Caballero",
    instructorImage: null,
    date: "2026-06-18",
    dateLabel: "Jueves 18 de Junio 2026",
    time: "18:30 (Argentina) / 16:30 (Colombia)",
    audience: "Profesionales tech, estudiantes avanzados y cualquier persona interesada en IA aplicada a seguridad.",
    tags: ["IA", "Ciberseguridad", "Machine Learning", "Detección de Amenazas"],
    available: true,
  },
]

export function getWebinarBySlug(slug: string): Webinar | undefined {
  return webinars.find((w) => w.slug === slug)
}

export function getWebinarsByCategory(category: string): Webinar[] {
  if (category === "all") return webinars
  return webinars.filter((w) => w.category === category)
}
