"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TerminosYCondiciones() {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terminos y Condiciones</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-600 mb-6">
              Ultima actualizacion: Febrero 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptacion de los Terminos</h2>
              <p>
                Al acceder y utilizar los servicios de Academia DePC (operado por DEPCSUITE S.A.), usted acepta estar sujeto a estos Terminos y Condiciones. Si no esta de acuerdo con alguna parte de estos terminos, no podra acceder al servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripcion del Servicio</h2>
              <p>
                Academia DePC ofrece servicios educativos en linea mediante un modelo de suscripcion que incluye:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acceso a diplomaturas y cursos en tecnologia</li>
                <li>Clases en vivo y grabadas</li>
                <li>Webinars y masterclasses</li>
                <li>Participacion en hackathones</li>
                <li>Acceso a la comunidad educativa</li>
                <li>Portal de empleo y oportunidades laborales</li>
                <li>Certificaciones nacionales e internacionales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Planes de Suscripcion</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Plan Mensual</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facturacion mensual automatica</li>
                <li>Acceso completo a todos los contenidos y beneficios</li>
                <li>Cancelacion en cualquier momento sin penalidad</li>
                <li>El acceso finaliza al termino del periodo facturado</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Plan Anual</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facturacion anual con descuento sobre el plan mensual</li>
                <li>Acceso completo a todos los contenidos y beneficios</li>
                <li>Compromiso por 12 meses desde la fecha de suscripcion</li>
                <li>Renovacion automatica al finalizar el periodo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Precios y Facturacion</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los precios se muestran en la moneda local segun su ubicacion</li>
                <li>Los pagos se procesan a traves de pasarelas seguras (Mercado Pago, PayPal, segun region)</li>
                <li>Los precios pueden estar sujetos a impuestos segun la legislacion local</li>
                <li>Nos reservamos el derecho de modificar precios con aviso previo de 30 dias</li>
                <li>Las promociones y descuentos son validos segun sus terminos especificos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Politica de Cancelacion</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Cancelacion del Plan Mensual</h3>
              <p>
                Puede cancelar su suscripcion mensual en cualquier momento desde su panel de usuario o contactando a soporte. La cancelacion sera efectiva al finalizar el periodo de facturacion actual. No se realizan reembolsos proporcionales por el tiempo no utilizado.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Cancelacion del Plan Anual</h3>
              <p>
                El plan anual implica un compromiso de 12 meses. En caso de solicitar cancelacion anticipada:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dentro de los primeros 7 dias: reembolso completo (derecho de arrepentimiento)</li>
                <li>Despues de 7 dias: no se realizan reembolsos, pero mantiene el acceso hasta finalizar el periodo contratado</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Proceso de Cancelacion</h3>
              <p>
                Para cancelar su suscripcion:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ingrese a su cuenta en autogestion.depcsuite.com</li>
                <li>Acceda a la seccion "Mi Suscripcion"</li>
                <li>Seleccione "Cancelar Suscripcion"</li>
                <li>Alternativamente, escriba a soporte@depcsuite.com</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Renovacion Automatica</h2>
              <p>
                Todas las suscripciones se renuevan automaticamente al finalizar cada periodo de facturacion. Le enviaremos un recordatorio por correo electronico antes de cada renovacion. Puede desactivar la renovacion automatica en cualquier momento desde su panel de usuario.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Uso Aceptable</h2>
              <p>Al utilizar nuestros servicios, usted se compromete a:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>No compartir sus credenciales de acceso con terceros</li>
                <li>No redistribuir, copiar o revender el contenido educativo</li>
                <li>No grabar las clases en vivo sin autorizacion</li>
                <li>Mantener un comportamiento respetuoso en la comunidad</li>
                <li>No utilizar la plataforma para fines ilegales</li>
              </ul>
              <p className="mt-4">
                El incumplimiento de estas normas puede resultar en la suspension o cancelacion de su cuenta sin reembolso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Propiedad Intelectual</h2>
              <p>
                Todo el contenido de Academia DePC, incluyendo videos, materiales de estudio, ejercicios y demas recursos, son propiedad exclusiva de DEPCSUITE S.A. o sus licenciantes. Se otorga una licencia personal, no transferible y no exclusiva para uso educativo durante el periodo de suscripcion activa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Certificaciones</h2>
              <p>
                Las certificaciones se otorgan al completar satisfactoriamente los requisitos de cada programa. La emision de certificaciones nacionales e internacionales esta sujeta a los criterios de los organismos certificadores correspondientes y puede requerir evaluaciones adicionales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitacion de Responsabilidad</h2>
              <p>
                Academia DePC proporciona servicios educativos "tal como estan". No garantizamos resultados especificos de empleo o ingresos. Nuestra responsabilidad se limita al monto pagado por la suscripcion en los ultimos 12 meses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos terminos. Los cambios significativos seran notificados con al menos 30 dias de anticipacion. El uso continuado del servicio despues de las modificaciones constituye la aceptacion de los nuevos terminos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Ley Aplicable y Jurisdiccion</h2>
              <p>
                Estos terminos se rigen por las leyes de la Republica Argentina. Cualquier controversia sera sometida a la jurisdiccion de los tribunales ordinarios de la Ciudad Autonoma de Buenos Aires.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contacto</h2>
              <p>
                Para consultas sobre estos terminos:<br />
                Email: legal@depcsuite.com<br />
                Soporte: soporte@depcsuite.com<br />
                Autogestion: autogestion.depcsuite.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
