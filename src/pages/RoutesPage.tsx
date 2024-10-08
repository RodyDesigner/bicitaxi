import React from 'react'
import { Clock, DollarSign, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const routes = [
  {
    id: 'centro-historico',
    name: 'Ruta del Centro Histórico',
    description: 'Recorre los principales monumentos y plazas del centro de Lima.',
    duration: '2 horas',
    price: 'S/. 50',
    image: 'https://images.unsplash.com/photo-1578653816015-6b31a63d1737?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'miraflores-barranco',
    name: 'Ruta Miraflores - Barranco',
    description: 'Disfruta de la costa limeña y sus distritos más bohemios.',
    duration: '3 horas',
    price: 'S/. 75',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'lima-colonial',
    name: 'Ruta Lima Colonial',
    description: 'Viaja en el tiempo y conoce la arquitectura colonial de Lima.',
    duration: '2.5 horas',
    price: 'S/. 60',
    image: 'https://images.unsplash.com/photo-1584999872814-569a6c3d7031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

const RoutesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533219346979-3030e2810f5b?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pareja joven disfrutando de un bicitaxi en el centro de Lima"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Explora Lima como nunca antes</h1>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Mapa de Rutas</h2>
        <div className="w-full h-0 pb-[56.25%] relative bg-gray-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://i.ibb.co/1KmgsVj/Opera-Instant-nea-2024-10-08-163727-www-scribblemaps-com.png" 
              alt="Mapa de Lima"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
              <p className="font-bold">Rutas de Bicitaxi Lima</p>
              <ul className="text-sm">
                <li>• Centro Histórico</li>
                <li>• Miraflores - Barranco</li>
                <li>• Lima Colonial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Nuestras Rutas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div key={route.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={route.image} alt={route.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{route.name}</h3>
                <p className="text-gray-600 mb-4">{route.description}</p>
                <div className="flex items-center mb-2">
                  <Clock className="text-gray-400 mr-2" size={20} />
                  <span>{route.duration}</span>
                </div>
                <div className="flex items-center mb-4">
                  <DollarSign className="text-gray-400 mr-2" size={20} />
                  <span>{route.price} por persona</span>
                </div>
                <Link
                  to={`/reservar?route=${route.id}`}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-center transition duration-300"
                >
                  Reservar esta Ruta
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="Cliente satisfecho"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">María García</h4>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">"¡Una experiencia increíble! Pudimos ver Lima desde una perspectiva totalmente nueva. El guía fue muy amable y conocedor."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="Cliente satisfecho"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Carlos Rodríguez</h4>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">"Reservamos la ruta del Centro Histórico y fue fascinante. Una forma eco-amigable y divertida de conocer la ciudad. ¡Altamente recomendado!"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutesPage