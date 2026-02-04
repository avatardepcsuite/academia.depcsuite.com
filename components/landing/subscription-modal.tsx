"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Loader2 } from "lucide-react"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  planType: "monthly" | "annual"
  paymentLink: string
}

export function SubscriptionModal({ isOpen, onClose, planType, paymentLink }: SubscriptionModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresá un correo válido"
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "El WhatsApp es requerido"
    } else if (!/^[\d\s+()-]{8,}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Ingresá un número válido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Store the data in localStorage for now (could be sent to an API)
    const subscriptionData = {
      ...formData,
      planType,
      timestamp: new Date().toISOString(),
    }
    
    // Store in localStorage as a simple solution
    const existingData = localStorage.getItem("subscriptionLeads")
    const leads = existingData ? JSON.parse(existingData) : []
    leads.push(subscriptionData)
    localStorage.setItem("subscriptionLeads", JSON.stringify(leads))

    // Redirect to payment link
    window.open(paymentLink, "_blank")
    
    // Reset form and close modal
    setFormData({ name: "", email: "", whatsapp: "" })
    setIsSubmitting(false)
    onClose()
  }

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 sm:p-8">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {planType === "monthly" ? "Suscripción Mensual" : "Suscripción Anual"}
          </h3>
          <p className="text-gray-600">
            Completa tus datos para continuar con el pago
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700">
              Nombre completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange("name")}
              className={`mt-1.5 h-11 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange("email")}
              className={`mt-1.5 h-11 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="whatsapp" className="text-gray-700">
              WhatsApp
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="+54 11 1234 5678"
              value={formData.whatsapp}
              onChange={handleChange("whatsapp")}
              className={`mt-1.5 h-11 ${errors.whatsapp ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            />
            {errors.whatsapp && (
              <p className="text-sm text-red-500 mt-1">{errors.whatsapp}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-12 text-base font-semibold mt-6 ${
              planType === "annual" 
                ? "bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#D81B60] hover:to-[#AD1457]" 
                : "bg-[#2D1B4E] hover:bg-[#3D2B5E]"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Procesando...
              </>
            ) : (
              "Continuar al pago"
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Al continuar, aceptás nuestros términos y condiciones.
        </p>
      </div>
    </div>
  )
}
