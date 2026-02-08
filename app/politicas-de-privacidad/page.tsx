"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticasDePrivacidad() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#E91E63] hover:text-[#C2185B] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Políticas de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-600 mb-6">
              Última actualización: Febrero 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información General</h2>
              <p>
                DEPCSUITE S.A. (en adelante &quot;Academia DePC&quot;, &quot;nosotros&quot; o &quot;la empresa&quot;) se compromete a proteger la privacidad de los usuarios de nuestra plataforma educativa. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos su información personal.
              </p>
              <p className="mt-4">
                Domicilio legal: República Argentina<br />
                CUIT: 30-71683193-7<br />
                Contacto: info@depcsuite.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Información que Recopilamos</h2>
              <p>Recopilamos los siguientes tipos de información:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Datos de registro:</strong> nombre completo, correo electrónico, número de teléfono, país de residencia.</li>
                <li><strong>Datos de pago:</strong> información de facturación procesada a través de pasarelas de pago seguras (no almacenamos datos de tarjetas de crédito).</li>
                <li><strong>Datos de uso:</strong> progreso en cursos, participación en eventos, interacciones con la plataforma.</li>
                <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, dispositivo utilizado.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso de la Información</h2>
              <p>Utilizamos su información para:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Proveer acceso a los servicios educativos contratados</li>
                <li>Procesar pagos y gestionar suscripciones</li>
                <li>Enviar comunicaciones relacionadas con su formación</li>
                <li>Emitir certificaciones y credenciales digitales</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartición de Datos</h2>
              <p>
                No vendemos ni alquilamos su información personal a terceros. Podemos compartir datos con:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Proveedores de servicios de pago para procesar transacciones</li>
                <li>Organismos certificadores para la emisión de credenciales</li>
                <li>Autoridades gubernamentales cuando sea legalmente requerido</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información, incluyendo:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Encriptación SSL/TLS para todas las comunicaciones</li>
                <li>Almacenamiento seguro en servidores protegidos</li>
                <li>Acceso restringido a datos personales</li>
                <li>Monitoreo continuo de seguridad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sus Derechos</h2>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información incorrecta</li>
                <li>Solicitar la eliminacion de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contáctenos a: privacidad@depcsuite.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retención de Datos</h2>
              <p>
                Conservamos sus datos personales mientras mantenga una cuenta activa o según sea necesario para cumplir con obligaciones legales. Los datos de facturación se conservan por el período requerido por la legislación fiscal aplicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies y Tecnologías Similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestra plataforma, analizar el uso del sitio y personalizar contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cambios en esta Política</h2>
              <p>
                Podemos actualizar esta política periódicamente. Le notificaremos cambios significativos por correo electrónico o mediante un aviso en nuestra plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
              <p>
                Para consultas sobre privacidad, contáctenos a:<br />
                Email: privacidad@depcsuite.com<br />
                Atención al cliente: info@depcsuite.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
