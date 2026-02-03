"use client"

import dynamic from "next/dynamic"

const WhatsAppButton = dynamic(
  () => import("@/components/landing/whatsapp-button").then((mod) => ({ default: mod.WhatsAppButton })),
  { ssr: false }
)

const PromoPopup = dynamic(
  () => import("@/components/landing/promo-popup").then((mod) => ({ default: mod.PromoPopup })),
  { ssr: false }
)

export function ClientOnly() {
  return (
    <>
      <WhatsAppButton />
      <PromoPopup />
    </>
  )
}