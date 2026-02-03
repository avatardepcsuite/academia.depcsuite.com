"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type CurrencyCode = "ARS" | "COP" | "MXN" | "USD" | "EUR"

// SVG Flag components for cross-browser compatibility (Windows doesn't support emoji flags)
export function FlagAR({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#74ACDF" width="900" height="600"/>
      <rect fill="#fff" y="200" width="900" height="200"/>
      <circle fill="#F6B40E" cx="450" cy="300" r="50"/>
      <g fill="#F6B40E" stroke="#85340A" strokeWidth="1">
        <polygon points="450,230 455,250 475,250 459,262 465,282 450,270 435,282 441,262 425,250 445,250"/>
        <polygon points="450,370 455,350 475,350 459,338 465,318 450,330 435,318 441,338 425,350 445,350"/>
        <polygon points="380,300 400,295 400,275 412,291 432,285 420,300 432,315 412,309 400,325 400,305"/>
        <polygon points="520,300 500,295 500,275 488,291 468,285 480,300 468,315 488,309 500,325 500,305"/>
      </g>
    </svg>
  )
}

export function FlagCO({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#FCD116" width="900" height="300"/>
      <rect fill="#003893" y="300" width="900" height="150"/>
      <rect fill="#CE1126" y="450" width="900" height="150"/>
    </svg>
  )
}

export function FlagMX({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#006847" width="300" height="600"/>
      <rect fill="#fff" x="300" width="300" height="600"/>
      <rect fill="#CE1126" x="600" width="300" height="600"/>
      <circle fill="#6D3D1E" cx="450" cy="300" r="45"/>
      <ellipse fill="#006847" cx="450" cy="300" rx="35" ry="25"/>
    </svg>
  )
}

export function FlagEU({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#003399" width="900" height="600"/>
      <g fill="#FFCC00">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const x = 450 + 120 * Math.cos((angle - 90) * Math.PI / 180)
          const y = 300 + 120 * Math.sin((angle - 90) * Math.PI / 180)
          return <polygon key={angle} points={`${x},${y-18} ${x+5},${y-6} ${x+17},${y-6} ${x+8},${y+2} ${x+11},${y+14} ${x},${y+8} ${x-11},${y+14} ${x-8},${y+2} ${x-17},${y-6} ${x-5},${y-6}`}/>
        })}
      </g>
    </svg>
  )
}

export function FlagWorld({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="earthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB"/>
          <stop offset="100%" stopColor="#1E90FF"/>
        </linearGradient>
      </defs>
      <circle fill="url(#earthGrad)" cx="50" cy="50" r="45"/>
      <path fill="#228B22" d="M30 25c10-5 25-8 35 0s5 20-5 25-25 5-30-5-10-15 0-20z"/>
      <path fill="#228B22" d="M55 55c15 5 25 15 20 25s-20 10-30 5-15-15-5-25 10-8 15-5z"/>
      <path fill="#228B22" d="M20 50c-5 10-5 20 5 25s20-5 15-15-15-15-20-10z"/>
      <circle fill="none" stroke="#1565C0" strokeWidth="2" cx="50" cy="50" r="45"/>
    </svg>
  )
}

// Map currency codes to flag components
export const flagComponents: Record<CurrencyCode, () => JSX.Element> = {
  ARS: () => <FlagAR />,
  COP: () => <FlagCO />,
  MXN: () => <FlagMX />,
  USD: () => <FlagWorld />,
  EUR: () => <FlagEU />,
}

export interface Currency {
  code: CurrencyCode
  symbol: string
  country: string
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
