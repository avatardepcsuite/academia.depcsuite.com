"use client"

import React from "react"

import { createContext, useContext, useState, type ReactNode } from "react"

export type CurrencyCode = "ARS" | "COP" | "MXN" | "USD" | "EUR"

export interface Currency {
  code: CurrencyCode
  symbol: string
  country: string
  flagComponent: React.ReactNode
  monthly: string
  annual: string
  originalAnnual: string
  monthlyLink: string
  annualLink: string
}

// SVG Flag components for cross-browser compatibility (Windows + Brave doesn't support emoji flags)
export function FlagAR({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#74acdf" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M0 160h640v160H0z"/>
      <circle fill="#f6b40e" cx="320" cy="240" r="40"/>
    </svg>
  )
}

export function FlagCO({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fcd116" d="M0 0h640v240H0z"/>
      <path fill="#003893" d="M0 240h640v120H0z"/>
      <path fill="#ce1126" d="M0 360h640v120H0z"/>
    </svg>
  )
}

export function FlagMX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#006847" d="M0 0h213.3v480H0z"/>
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
      <path fill="#ce1126" d="M426.7 0H640v480H426.7z"/>
    </svg>
  )
}

export function FlagEU({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#039" d="M0 0h640v480H0z"/>
      <g fill="#fc0">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => (
          <path key={angle} transform={`rotate(${angle} 320 240)`} d="M320 100l5.5 17h17.9l-14.5 10.5 5.5 17-14.4-10.5-14.4 10.5 5.5-17-14.5-10.5h17.9z"/>
        ))}
      </g>
    </svg>
  )
}

export function FlagWorld({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <circle fill="#4a90d9" cx="320" cy="240" r="200"/>
      <ellipse fill="#3d7fc4" cx="320" cy="240" rx="200" ry="80"/>
      <ellipse fill="none" stroke="#2d6cb5" strokeWidth="4" cx="320" cy="240" rx="120" ry="200"/>
      <ellipse fill="none" stroke="#2d6cb5" strokeWidth="4" cx="320" cy="240" rx="200" ry="200"/>
      <path fill="#5da36a" d="M180 180c20-30 60-50 100-50s80 30 100 70c-30-20-70-30-100-30s-70 10-100 10z"/>
      <path fill="#5da36a" d="M200 280c30 40 70 60 120 60s90-20 120-60c-40 20-80 30-120 30s-80-10-120-30z"/>
    </svg>
  )
}

export const currencies: Currency[] = [
  { 
    code: "ARS", 
    symbol: "$", 
    country: "Argentina", 
    flagComponent: <FlagAR className="w-5 h-4" />, 
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
    flagComponent: <FlagCO className="w-5 h-4" />, 
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
    flagComponent: <FlagMX className="w-5 h-4" />, 
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
    flagComponent: <FlagWorld className="w-5 h-4" />, 
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
    flagComponent: <FlagEU className="w-5 h-4" />, 
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
