"use client"

import { useState } from "react"
import axios from "axios"

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
import { ArrowRight, Loader2 } from "lucide-react"
import { useCurrency, flagComponents, currencies, type CurrencyCode } from "@/contexts/currency-context"
import { getPaymentLink, type DiplomaturaPricing } from "@/lib/diplomaturas-pricing"

interface EnrollModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cursoTitle: string
  /** Pricing for the selected course, used to resolve the correct payment link per currency */
  pricing?: DiplomaturaPricing
  /** Product id to send to abandoned cart service */
  idproducto?: number
  /** Form id used by prospect lambda */
  fkIdFormulario?: number
  /** Area id used by prospect and abandoned cart lambdas */
  fkIdArea?: number
}

const INSERTAR_PROSPECTO_ENDPOINT = "https://43a8phnwnh.execute-api.us-east-1.amazonaws.com/prod/insertar-prospecto"
const CARRITO_OLVIDADO_ENDPOINT = "https://z1pk745fxh.execute-api.us-east-1.amazonaws.com/prod/carrito-olvidado"

const countryByCurrency: Record<CurrencyCode, { fk_idpais: number; pais: string }> = {
  ARS: { fk_idpais: 12, pais: "Argentina" },
  COP: { fk_idpais: 46, pais: "Colombia" },
  MXN: { fk_idpais: 152, pais: "México" },
  USD: { fk_idpais: 65, pais: "Estados Unidos" },
  EUR: { fk_idpais: 64, pais: "España" },
}

function formatFecha(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function splitNombreApellido(fullName: string) {
  const partes = fullName.trim().split(/\s+/).filter(Boolean)

  if (partes.length === 0) {
    return { nombre: "", apellido: "" }
  }

  if (partes.length === 1) {
    return { nombre: partes[0], apellido: "" }
  }

  const apellido = partes[partes.length - 1]
  const nombre = partes.slice(0, -1).join(" ")

  return {
    nombre,
    apellido,
  }
}

export function EnrollModal({
  open,
  onOpenChange,
  cursoTitle,
  pricing,
  idproducto,
  fkIdFormulario = 552,
  fkIdArea = 2,
}: EnrollModalProps) {
  const [form, setForm] = useState({ nombre: "", correo: "", whatsapp: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { selectedCurrency, setSelectedCurrency } = useCurrency()

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)

    const correo = form.correo.trim().toLowerCase()
    const whatsapp = form.whatsapp.trim()
    const nombreCompleto = form.nombre.trim()
    const { nombre, apellido } = splitNombreApellido(nombreCompleto)
    const fecha_alta = formatFecha(new Date())
    const countryData = countryByCurrency[selectedCurrency.code] ?? countryByCurrency.ARS
    const fkIdFormularioFinal = pricing?.fkIdFormulario ?? fkIdFormulario
    const fkIdAreaFinal = pricing?.fkIdArea ?? fkIdArea
    const idProductoFinal = pricing?.idproducto ?? idproducto
    const paymentHref = pricing ? getPaymentLink(pricing, selectedCurrency.code).href : null

    if (paymentHref) {
      window.open(paymentHref, "_blank", "noopener,noreferrer")
    }

    try {
      await axios.post(INSERTAR_PROSPECTO_ENDPOINT, {
        httpMethod: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        queryStringParameters: {},
        pathParameters: {},
        body: JSON.stringify({
          fk_idformulario: fkIdFormularioFinal,
          nombre,
          apellido,
          whatsapp,
          correo,
          fecha_alta,
          fk_idpais: countryData.fk_idpais,
          pais: countryData.pais,
          fk_idarea: fkIdAreaFinal,
          ocupacion: "",
          comentarios: `Curso: ${cursoTitle}`,
        }),
        isBase64Encoded: false,
      })

      if (typeof idProductoFinal === "number" && idProductoFinal > 0) {
        await axios.post(CARRITO_OLVIDADO_ENDPOINT, {
          httpMethod: "POST",
          headers: { "Content-Type": "application/json" },
          queryStringParameters: {},
          pathParameters: {},
          body: JSON.stringify({
            fk_idarea: fkIdAreaFinal,
            email: correo,
            nombre: nombreCompleto,
            telefono: whatsapp,
            carrito: [
              {
                idproducto: idProductoFinal,
                cantidad: 1,
              },
            ],
          }),
          isBase64Encoded: false,
        })
      }

      setForm({ nombre: "", correo: "", whatsapp: "" })
      onOpenChange(false)
    } catch (error) {
      console.error("Error enviando inscripción:", error)
    } finally {
      setIsSubmitting(false)
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
            <Label htmlFor="enroll-nombre">Nombre completo</Label>
            <Input
              id="enroll-nombre"
              name="name"
              autoComplete="name"
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
              name="tel"
              type="tel"
              autoComplete="tel"
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
              name="email"
              type="email"
              autoComplete="email"
              value={form.correo}
              onChange={handleChange("correo")}
              placeholder="tu@email.com"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="mt-2 h-12 bg-gradient-to-r from-[#2D1B4E] to-[#5C1F5C] hover:from-[#3D2B5E] hover:to-[#6C2F6C] text-white font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                {pricing && getPaymentLink(pricing, selectedCurrency.code).method === "whatsapp"
                  ? "Continuar pago por WhatsApp"
                  : "Ir a pagar"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
