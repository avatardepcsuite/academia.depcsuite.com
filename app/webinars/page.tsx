import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WebinarsCatalog } from "@/components/landing/webinars-catalog"

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WebinarsCatalog />
      <Footer />
    </main>
  )
}
