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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politicas de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-600 mb-6">
              Ultima actualizacion: Febrero 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informacion General</h2>
              <p>
                DEPCSUITE S.A. (en adelante "Academia DePC", "nosotros" o "la empresa") se compromete a proteger la privacidad de los usuarios de nuestra plataforma educativa. Esta politica describe como recopilamos, usamos, almacenamos y protegemos su informacion personal.
              </p>
              <p className="mt-4">
                Domicilio legal: Republica Argentina<br />
                CUIT: 30-71683193-7<br />
                Contacto: info@depcsuite.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informacion que Recopilamos</h2>
              <p>Recopilamos los siguientes tipos de informacion:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Datos de registro:</strong> nombre completo, correo electronico, numero de telefono, pais de residencia.</li>
                <li><strong>Datos de pago:</strong> informacion de facturacion procesada a traves de pasarelas de pago seguras (no almacenamos datos de tarjetas de credito).</li>
                <li><strong>Datos de uso:</strong> progreso en cursos, participacion en eventos, interacciones con la plataforma.</li>
                <li><strong>Datos tecnicos:</strong> direccion IP, tipo de navegador, dispositivo utilizado.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso de la Informacion</h2>
              <p>Utilizamos su informacion para:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Proveer acceso a los servicios educativos contratados</li>
                <li>Procesar pagos y gestionar suscripciones</li>
                <li>Enviar comunicaciones relacionadas con su formacion</li>
                <li>Emitir certificaciones y credenciales digitales</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Comparticion de Datos</h2>
              <p>
                No vendemos ni alquilamos su informacion personal a terceros. Podemos compartir datos con:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Proveedores de servicios de pago para procesar transacciones</li>
                <li>Organismos certificadores para la emision de credenciales</li>
                <li>Autoridades gubernamentales cuando sea legalmente requerido</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad tecnicas y organizativas para proteger su informacion, incluyendo:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Encriptacion SSL/TLS para todas las comunicaciones</li>
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
                <li>Rectificar informacion incorrecta</li>
                <li>Solicitar la eliminacion de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contactenos a: privacidad@depcsuite.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retencion de Datos</h2>
              <p>
                Conservamos sus datos personales mientras mantenga una cuenta activa o segun sea necesario para cumplir con obligaciones legales. Los datos de facturacion se conservan por el periodo requerido por la legislacion fiscal aplicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies y Tecnologias Similares</h2>
              <p>
                Utilizamos cookies y tecnologias similares para mejorar su experiencia en nuestra plataforma, analizar el uso del sitio y personalizar contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cambios en esta Politica</h2>
              <p>
                Podemos actualizar esta politica periodicamente. Le notificaremos cambios significativos por correo electronico o mediante un aviso en nuestra plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
              <p>
                Para consultas sobre privacidad, contactenos a:<br />
                Email: privacidad@depcsuite.com<br />
                Atencion al cliente: info@depcsuite.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
