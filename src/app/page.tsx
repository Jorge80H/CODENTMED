import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-primary-600">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            {/* Logo placeholder */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-600 font-bold text-xl">LOGO</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CODENTMED IPS
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-4 max-w-4xl mx-auto">
              Centro Integrado de Medicina, Odontología e Investigación Clínica
            </p>
            
            <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
              Atención integral con visión científica
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/para-patrocinadores"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-50"
              >
                Para Patrocinadores
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/para-pacientes"
                className="btn-secondary border-white text-white hover:bg-primary-700"
              >
                Para Pacientes
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </header>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos servicios integrales en medicina, odontología e investigación clínica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="card group hover:shadow-medical-lg transition-shadow duration-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="w-6 h-6 bg-primary-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Medicina General y Especializada
                </h3>
                <p className="text-gray-600 mb-4">
                  Medicina interna, reumatología y seguimiento interdisciplinario médico-odontológico.
                </p>
                <Link href="/servicios/medicina" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver más →
                </Link>
              </div>
            </div>
            
            <div className="card group hover:shadow-medical-lg transition-shadow duration-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="w-6 h-6 bg-primary-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Odontología Especializada
                </h3>
                <p className="text-gray-600 mb-4">
                  Odontología general, periodoncia, rehabilitación oral y ortodoncia con enfoque integral.
                </p>
                <Link href="/servicios/odontologia" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver más →
                </Link>
              </div>
            </div>
            
            <div className="card group hover:shadow-medical-lg transition-shadow duration-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="w-6 h-6 bg-primary-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Investigación Clínica
                </h3>
                <p className="text-gray-600 mb-4">
                  Estudios clínicos, investigación documental y evaluación económica en salud.
                </p>
                <Link href="/servicios/investigacion" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver más →
                </Link>
              </div>
            </div>
            
            <div className="card group hover:shadow-medical-lg transition-shadow duration-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="w-6 h-6 bg-primary-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Educación Médica
                </h3>
                <p className="text-gray-600 mb-4">
                  Cursos especializados, programas de actualización y formación en investigación.
                </p>
                <Link href="/servicios/educacion" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver más →
                </Link>
              </div>
            </div>
            
            <div className="card group hover:shadow-medical-lg transition-shadow duration-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="w-6 h-6 bg-primary-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Consulta Privada Dr. Wilson
                </h3>
                <p className="text-gray-600 mb-4">
                  Consulta especializada con el Dr. Wilson Bautista, autoridad en reumatología.
                </p>
                <Link href="https://drwilsonbautista.com" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver más →
                </Link>
              </div>
            </div>
            
            <div className="card group hover:shadow-medical-lg transition-shadow duration-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="w-6 h-6 bg-primary-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Asesorías Institucionales
                </h3>
                <p className="text-gray-600 mb-4">
                  Asesorías para instituciones y profesionales independientes en investigación.
                </p>
                <Link href="/servicios/asesorias" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver más →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para conocer más sobre nuestros servicios y cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="btn-primary"
          >
            Contactar Ahora
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-max">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">LOGO</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">CODENTMED IPS</h3>
              <p className="text-gray-400">
                Una IPS para cuidarte desde la ciencia y la humanidad
              </p>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 CODENTMED IPS. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}