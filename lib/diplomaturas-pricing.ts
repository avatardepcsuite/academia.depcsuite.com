export interface DiplomaturaPricing {
  /** Course title, used to match from the home grid */
  title: string
  /** Final price in ARS */
  price: number
  /** Number of interest-free installments */
  installments: number
  /** Price per installment in ARS */
  installmentPrice: number
  /** MercadoPago checkout link (used for ARS payments) */
  mpagoLink: string
}

// WhatsApp number used for payments in currencies other than ARS
export const PAYMENT_WHATSAPP = "541162845700"

/**
 * Per-diplomatura pricing and MercadoPago checkout links.
 * Keyed by the course route slug so each page can look up its own data.
 */
export const diplomaturasPricing: Record<string, DiplomaturaPricing> = {
  "ciberseguridad-aplicada": {
    title: "Diplomatura Fundamentos de Ciberseguridad Aplicada",
    price: 300000,
    installments: 6,
    installmentPrice: 50000,
    mpagoLink: "https://mpago.la/2RSwY5A",
  },
  "programacion-fullstack-react-node-ia": {
    title: "Diplomatura Programación Full Stack + IA",
    price: 300000,
    installments: 6,
    installmentPrice: 50000,
    mpagoLink: "https://mpago.la/1xXuTBX",
  },
  "web-fullstack-php-laravel": {
    title: "Diplomatura Programación Web Full Stack PHP / Laravel",
    price: 240000,
    installments: 6,
    installmentPrice: 40000,
    mpagoLink: "https://mpago.la/1gQM4K8",
  },
  "programacion-python": {
    title: "Diplomatura Programación Python",
    price: 240000,
    installments: 6,
    installmentPrice: 40000,
    mpagoLink: "https://mpago.la/1zE4Vfa",
  },
  "fundamentos-microsoft-excel": {
    title: "Diplomatura Fundamentos de Microsoft Excel",
    price: 120000,
    installments: 6,
    installmentPrice: 20000,
    mpagoLink: "https://mpago.la/24BFTmn",
  },
}

/** Build a WhatsApp payment link for non-ARS currencies. */
export function buildWhatsAppPaymentLink(courseTitle: string) {
  const message = `Hola! Quiero inscribirme en la ${courseTitle} y pagar desde fuera de Argentina. ¿Me ayudan a continuar con el pago?`
  return `https://wa.me/${PAYMENT_WHATSAPP}?text=${encodeURIComponent(message)}`
}
