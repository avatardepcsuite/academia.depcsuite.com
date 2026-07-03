"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"

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
        showCloseButton={false}
        className="max-w-[calc(100%-2rem)] sm:max-w-md rounded-2xl border-4 border-white bg-white p-2 shadow-2xl overflow-hidden"
      >
        <DialogTitle className="sr-only">
          Diplomatura en Ciberseguridad Aplicada
        </DialogTitle>
        <DialogClose
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md ring-1 ring-gray-200 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </DialogClose>
        <button
          type="button"
          onClick={handleClick}
          aria-label="Ver Diplomatura en Ciberseguridad Aplicada"
          className="block w-full cursor-pointer overflow-hidden rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500/40"
        >
          <Image
            src="/images/popup-diplomatura-ciberseguridad.png"
            alt="Diplomatura en Ciberseguridad Aplicada - Hacking ético, docente en vivo, criptografía y certificación nacional e internacional"
            width={1035}
            height={1500}
            priority
            className="h-auto w-full"
          />
        </button>
      </DialogContent>
    </Dialog>
  )
}
