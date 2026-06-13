"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import { useCurrency, flagComponents, currencies, type CurrencyCode } from "@/contexts/currency-context"
import { getPaymentLink, type DiplomaturaPricing } from "@/lib/diplomaturas-pricing"

interface EnrollModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cursoTitle: string
  /** Pricing for the selected course, used to resolve the correct payment link per currency */
  pricing?: DiplomaturaPricing
}

export function EnrollModal({ open, onOpenChange, cursoTitle, pricing }: EnrollModalProps) {
  const [form, setForm] = useState({ nombre: "", correo: "", whatsapp: "" })
  const { selectedCurrency, setSelectedCurrency } = useCurrency()

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Datos de inscripción:", { curso: cursoTitle, moneda: selectedCurrency.code, ...form })
    if (pricing) {
      const { href } = getPaymentLink(pricing, selectedCurrency.code)
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2D1B4E] text-balance">
            Completá tus datos para continuar con el pago
          </DialogTitle>
          <DialogDescription className="text-pretty">
            {cursoTitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          {/* Currency selector */}
          <div className="flex flex-col gap-2">
            <Label>Seleccioná tu país / moneda</Label>
            <div className="flex flex-wrap gap-2">
              {currencies.map((currency) => {
                const Flag = flagComponents[currency.code as CurrencyCode]
                const active = currency.code === selectedCurrency.code
                return (
                  <button
                    key={currency.code}
                    type="button"
                    onClick={() => setSelectedCurrency(currency)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                      active
                        ? "border-[#5C1F5C] bg-[#5C1F5C]/5 text-[#2D1B4E]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <Flag />
                    {currency.code}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="enroll-nombre">Tu nombre</Label>
            <Input
              id="enroll-nombre"
              value={form.nombre}
              onChange={handleChange("nombre")}
              placeholder="Nombre y apellido"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="enroll-whatsapp">Whatsapp</Label>
            <Input
              id="enroll-whatsapp"
              type="tel"
              value={form.whatsapp}
              onChange={handleChange("whatsapp")}
              placeholder="+54 9 11 1234 5678"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="enroll-correo">Correo</Label>
            <Input
              id="enroll-correo"
              type="email"
              value={form.correo}
              onChange={handleChange("correo")}
              placeholder="tu@email.com"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 h-12 bg-gradient-to-r from-[#2D1B4E] to-[#5C1F5C] hover:from-[#3D2B5E] hover:to-[#6C2F6C] text-white font-semibold"
          >
            {pricing && getPaymentLink(pricing, selectedCurrency.code).method === "whatsapp"
              ? "Continuar pago por WhatsApp"
              : "Ir a pagar"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
