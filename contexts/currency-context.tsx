"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type CurrencyCode = "ARS" | "COP" | "MXN" | "USD" | "EUR"

export interface Currency {
  code: CurrencyCode
  symbol: string
  country: string
  flag: string
  monthly: string
  annual: string
  originalAnnual: string
  monthlyLink: string
  annualLink: string
}

export const currencies: Currency[] = [
  { 
    code: "ARS", 
    symbol: "$", 
    country: "Argentina", 
    flag: "🇦🇷", 
    monthly: "29.999", 
    annual: "299.999", 
    originalAnnual: "360.000",
    monthlyLink: "http://pagos.depcsuite.com/suscripcion/2879?currency=ARS&vendedor=283",
    annualLink: "http://pagos.depcsuite.com/suscripcion/2880?currency=ARS&vendedor=283"
  },
  { 
    code: "COP", 
    symbol: "$", 
    country: "Colombia", 
    flag: "🇨🇴", 
    monthly: "75.000", 
    annual: "680.000", 
    originalAnnual: "800.000",
    monthlyLink: "http://pagos.depcsuite.com/2881?currency=COP&vendedor=284&medio=1",
    annualLink: "http://pagos.depcsuite.com/2882?currency=ARS&vendedor=284&medio=1"
  },
  { 
    code: "MXN", 
    symbol: "$", 
    country: "México", 
    flag: "🇲🇽", 
    monthly: "349", 
    annual: "2.999", 
    originalAnnual: "3.500",
    monthlyLink: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-75U624409K131011VNF7HH7A",
    annualLink: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9UE2744962038194WNF7HIMA"
  },
  { 
    code: "USD", 
    symbol: "$", 
    country: "Otros países", 
    flag: "🌍", 
    monthly: "20", 
    annual: "170", 
    originalAnnual: "200",
    monthlyLink: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-94U91163BE787851JNF7GVCQ",
    annualLink: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-4GL520216F814010PNF7HECY"
  },
  { 
    code: "EUR", 
    symbol: "€", 
    country: "Europa", 
    flag: "🇪🇺", 
    monthly: "20", 
    annual: "170", 
    originalAnnual: "200",
    monthlyLink: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-4AN63218K52594828NF7HFUY",
    annualLink: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0NG93423NY808720BNF7HGMQ"
  },
]

interface CurrencyContextType {
  selectedCurrency: Currency
  setSelectedCurrency: (currency: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

// Map country codes to currencies
const countryToCurrency: Record<string, CurrencyCode> = {
  AR: "ARS",
  CO: "COP",
  MX: "MXN",
  US: "USD",
  // European countries
  ES: "EUR",
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  PT: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  IE: "EUR",
  FI: "EUR",
  GR: "EUR",
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Try to detect user's country via timezone or locale
    const detectCurrency = async () => {
      try {
        // First try: Use Intl API to get locale
        const locale = navigator.language || "es-AR"
        const countryFromLocale = locale.split("-")[1]?.toUpperCase()
        
        if (countryFromLocale && countryToCurrency[countryFromLocale]) {
          const currency = currencies.find(c => c.code === countryToCurrency[countryFromLocale])
          if (currency) {
            setSelectedCurrency(currency)
            setIsInitialized(true)
            return
          }
        }

        // Second try: Use timezone to guess country
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        if (timezone.includes("Buenos_Aires") || timezone.includes("Argentina")) {
          setSelectedCurrency(currencies[0]) // ARS
        } else if (timezone.includes("Bogota") || timezone.includes("Colombia")) {
          setSelectedCurrency(currencies[1]) // COP
        } else if (timezone.includes("Mexico")) {
          setSelectedCurrency(currencies[2]) // MXN
        } else if (timezone.includes("America/New_York") || timezone.includes("America/Los_Angeles") || timezone.includes("America/Chicago")) {
          setSelectedCurrency(currencies[3]) // USD
        } else if (timezone.includes("Europe/")) {
          setSelectedCurrency(currencies[4]) // EUR
        }
        // Default is already ARS
      } catch {
        // If detection fails, keep default (ARS)
      }
      setIsInitialized(true)
    }

    detectCurrency()
  }, [])

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
