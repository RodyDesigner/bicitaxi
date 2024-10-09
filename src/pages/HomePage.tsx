import React from 'react'
import { Leaf, Heart, Users } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner principal */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1596306499317-8490232098fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Bicitaxis en Lima"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Bicitaxi Lima</h1>
          <p className="text-xl mb-6">Recorre Lima de manera ecológica y divertida</p>
          <div className="space-x-4">
          <a href="/ReservePage">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Reservar un Viaje
            </button>
          </a>
          <a href="/RoutesPage">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Conoce nuestras Rutas
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Sección de beneficios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Beneficios de nuestro servicio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Leaf className="mx-auto text-green-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Contribución al medio ambiente</h3>
            <p>Reduce tu huella de carbono mientras disfrutas de la ciudad.</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Promoción de la inclusión social</h3>
            <p>Apoya a la comunidad local y fomenta el empleo sostenible.</p>
          </div>
          <div className="text-center">
            <Heart className="mx-auto text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Experiencia única para parejas y familias</h3>
            <p>Crea recuerdos inolvidables en nuestros cómodos bicitaxis.</p>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Rutas Ecológicas</h3>
            <p>Recorre Lima en un transporte amigable con el ambiente.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Tours para Parejas</h3>
            <p>Disfruta un paseo romántico por la ciudad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Transporte Inclusivo</h3>
            <p>Adaptado para personas con movilidad reducida.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage