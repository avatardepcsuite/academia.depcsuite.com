"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after a short delay when page loads - every time
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative max-w-lg w-full animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        
        {/* Image container */}
        <Link 
          href="/diplomaturas/programacion-fullstack-react-node-ia"
          onClick={handleClose}
          className="block rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border-white border-8"
        >
          <Image
            src="/images/popup-promo.png"
            alt="Programación Web Fullstack + Inteligencia Artificial - Online en vivo, Práctica Profesional, Certificación Nacional e Internacional"
            width={600}
            height={600}
            className="w-full h-auto"
            loading="eager"
            fetchPriority="low"
          />
        </Link>
      </div>
    </div>
  )
}
