"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

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

// Argentina (ARS) is always the default currency - currencies[0]
const defaultCurrency = currencies[0]

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(defaultCurrency)

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
