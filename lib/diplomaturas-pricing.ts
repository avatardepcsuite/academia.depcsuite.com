/** PayPal checkout links for non-ARS currencies. */
export interface PaypalLinks {
  USD?: string
  EUR?: string
  MXN?: string
}

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
  /** PayPal checkout links per currency (USD / EUR / MXN) */
  paypalLinks?: PaypalLinks
  /** Product id used by abandoned cart service */
  idproducto?: number
  /** Form id used by prospect lambda */
  fkIdFormulario?: number
  /** Area id used by prospect and abandoned cart lambdas */
  fkIdArea?: number
}

// WhatsApp number used for payments in currencies other than ARS
export const PAYMENT_WHATSAPP = "541162845700"

/**
 * Fixed conversion rates expressed as "ARS per 1 unit of the currency".
 * Used to show an approximate price in the selected currency on the cards.
 * Update these periodically to keep the estimates reasonable.
 */
export const currencyConversionRates: Record<string, number> = {
  ARS: 1,
  USD: 1150,
  EUR: 1250,
  MXN: 62,
  COP: 0.29,
}

const currencySymbols: Record<string, string> = {
  ARS: "$",
  COP: "$",
  MXN: "$",
  USD: "US$",
  EUR: "€",
}

/** Convert an ARS amount into the target currency using the fixed rates. */
export function convertFromArs(arsAmount: number, currencyCode: string): number {
  const rate = currencyConversionRates[currencyCode] ?? 1
  return arsAmount / rate
}

/** Format an ARS amount as an approximate price in the selected currency. */
export function formatCoursePrice(arsAmount: number, currencyCode: string): string {
  const converted = Math.round(convertFromArs(arsAmount, currencyCode))
  const symbol = currencySymbols[currencyCode] ?? "$"
  return `${symbol} ${converted.toLocaleString("es-AR")}`
}

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
    paypalLinks: {
      USD: "https://www.paypal.com/ncp/payment/EYDN2E9NEYLCQ",
      EUR: "https://www.paypal.com/ncp/payment/JPJ76LHK84CKW",
      MXN: "https://www.paypal.com/ncp/payment/5YG4W8C4GAYDA",
    },
    idproducto: 93011,
    fkIdFormulario: 552,
    fkIdArea: 2,
  },
  "programacion-fullstack-react-node-ia": {
    title: "Diplomatura Programación Full Stack + IA",
    price: 300000,
    installments: 6,
    installmentPrice: 50000,
    mpagoLink: "https://mpago.la/1xXuTBX",
    paypalLinks: {
      USD: "https://www.paypal.com/ncp/payment/N2P4SWL22MB9U",
      EUR: "https://www.paypal.com/ncp/payment/3DQ2VR6ZMW3W2",
      MXN: "https://www.paypal.com/ncp/payment/XPZXN5U8KH5GY",
    },
    idproducto: 31015,
    fkIdFormulario: 552,
    fkIdArea: 2,
  },
  "web-fullstack-php-laravel": {
    title: "Diplomatura Programación Web Full Stack PHP / Laravel",
    price: 240000,
    installments: 6,
    installmentPrice: 40000,
    mpagoLink: "https://mpago.la/1gQM4K8",
    paypalLinks: {
      USD: "https://www.paypal.com/ncp/payment/XT9NWCNJEHKPN",
      EUR: "https://www.paypal.com/ncp/payment/4TKQ3RKYPEV2C",
      MXN: "https://www.paypal.com/ncp/payment/G9A7U66SMW78E",
    },
    idproducto: 18401,
    fkIdFormulario: 552,
    fkIdArea: 2,
  },
  "programacion-python": {
    title: "Diplomatura Programación Python",
    price: 240000,
    installments: 6,
    installmentPrice: 40000,
    mpagoLink: "https://mpago.la/1zE4Vfa",
    paypalLinks: {
      USD: "https://www.paypal.com/ncp/payment/BY4L37F2UFA68",
      EUR: "https://www.paypal.com/ncp/payment/NVZZY89T57ZJN",
      MXN: "https://www.paypal.com/ncp/payment/XFHHWJVTW4LL6",
    },
    idproducto: 430,
    fkIdFormulario: 552,
    fkIdArea: 2,
  },
  "fundamentos-microsoft-excel": {
    title: "Diplomatura Fundamentos de Microsoft Excel",
    price: 120000,
    installments: 6,
    installmentPrice: 20000,
    mpagoLink: "https://mpago.la/24BFTmn",
    paypalLinks: {
      USD: "https://www.paypal.com/ncp/payment/ZKFWZD4F5FQGG",
      EUR: "https://www.paypal.com/ncp/payment/Y27YHGE4Y3HJ2",
      MXN: "https://www.paypal.com/ncp/payment/S6SPUGEL6KCK4",
    },
    idproducto: 112,
    fkIdFormulario: 552,
    fkIdArea: 2,
  },
}

/**
 * Resolve the correct payment link for a given currency.
 * - ARS uses MercadoPago.
 * - USD / EUR / MXN use the per-course PayPal links when available.
 * - Anything else (e.g. COP) falls back to the WhatsApp link.
 */
export function getPaymentLink(
  pricing: DiplomaturaPricing,
  currencyCode: string,
): { href: string; method: "mercadopago" | "paypal" | "whatsapp" } {
  if (currencyCode === "ARS") {
    return { href: pricing.mpagoLink, method: "mercadopago" }
  }

  const paypalHref = pricing.paypalLinks?.[currencyCode as keyof PaypalLinks]
  if (paypalHref) {
    return { href: paypalHref, method: "paypal" }
  }

  return { href: buildWhatsAppPaymentLink(pricing.title), method: "whatsapp" }
}

/** Build a WhatsApp payment link for non-ARS currencies. */
export function buildWhatsAppPaymentLink(courseTitle: string) {
  const message = `Hola! Quiero inscribirme en la ${courseTitle} y pagar desde fuera de Argentina. ¿Me ayudan a continuar con el pago?`
  return `https://wa.me/${PAYMENT_WHATSAPP}?text=${encodeURIComponent(message)}`
}
