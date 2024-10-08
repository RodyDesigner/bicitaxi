import React from 'react'
import { MapPin, Clock, DollarSign, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const routes = [
  {
    id: 'centro-historico',
    name: 'Ruta del Centro Histórico',
    description: 'Recorre los principales monumentos y plazas del centro de Lima.',
    duration: '2 horas',
    price: 'S/. 20',
    image: 'https://images.unsplash.com/photo-1467139938629-03d06ee112cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'miraflores-barranco',
    name: 'Ruta Miraflores - Barranco',
    description: 'Disfruta de la costa limeña y sus distritos más bohemios.',
    duration: '3 horas',
    price: 'S/. 45',
    image: 'https://images.unsplash.com/photo-1723134086999-b5a4deabd247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'lima-colonial',
    name: 'Ruta Lima Colonial',
    description: 'Viaja en el tiempo y conoce la arquitectura colonial de Lima.',
    duration: '2.5 horas',
    price: 'S/. 30',
    image: 'https://images.unsplash.com/photo-1508957454729-17eb89cd4b67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
        <div className="w-full h-[450px] relative bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9762.402196671395!2d-77.04918773357359!3d-12.119161262544383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x9105c82109b00d75%3A0x4968160a9f272918!2sParque%20del%20Amor%2C%20Malec%C3%B3n%20Cisneros%2C%20Miraflores!3m2!1d-12.126887499999999!2d-77.0366146!4m5!1s0x9105c835cc780d3d%3A0x670924b6a70ec1ec!2sEstatua%20de%20Carlos%20Izaguirre%2C%20VWQX%2BC78%2C%20Miraflores%2015074!3m2!1d-12.1114561!2d-77.0517875!5e1!3m2!1ses!2spe!4v1728431442394!5m2!1ses!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-white p-2 rounded shadow">
            <p className="font-bold">Rutas de Bicitaxi Lima</p>
            <ul className="text-sm">
              <li className="flex items-center">
                <MapPin size={16} className="text-red-500 mr-2" />
                Centro Histórico
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-blue-500 mr-2" />
                Miraflores - Barranco
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-green-500 mr-2" />
                Lima Colonial
              </li>
            </ul>
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