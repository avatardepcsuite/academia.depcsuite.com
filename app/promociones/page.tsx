import { permanentRedirect } from "next/navigation"

export default function PromocionesRedirect() {
  // Redirección permanente (308) para conservar el SEO hacia la nueva URL /convenios
  permanentRedirect("/convenios")
}
