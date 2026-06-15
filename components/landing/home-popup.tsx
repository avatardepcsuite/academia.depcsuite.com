"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

export function HomePopup() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show shortly after the home page loads
    const timer = setTimeout(() => setOpen(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    setOpen(false)
    router.push("/diplomaturas/ciberseguridad-aplicada")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton
        className="max-w-[calc(100%-2rem)] sm:max-w-md border-0 bg-white p-0 overflow-hidden"
      >
        <DialogTitle className="sr-only">
          Diplomatura en Fundamentos de Ciberseguridad Aplicada
        </DialogTitle>
        <button
          type="button"
          onClick={handleClick}
          aria-label="Ver Diplomatura en Fundamentos de Ciberseguridad Aplicada"
          className="block w-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500/40"
        >
          <Image
            src="/images/popup-diplomatura-ciberseguridad.png"
            alt="Diplomatura en Fundamentos de Ciberseguridad Aplicada - Docente en vivo, 3 meses de duración, certificación nacional e internacional"
            width={1080}
            height={1350}
            priority
            className="h-auto w-full"
          />
        </button>
      </DialogContent>
    </Dialog>
  )
}
