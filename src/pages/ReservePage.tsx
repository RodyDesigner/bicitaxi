import React, { useState } from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

const ReservePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    route: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1683655687864-2fc8475af0db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bicitaxi recorriendo Lima al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Reserva tu experiencia en Bicitaxi Lima hoy mismo</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Nombre Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-describedby="fullNameHelp"
          />
          <p id="fullNameHelp" className="text-sm text-gray-600 mt-1">Ingrese su nombre completo como aparece en su documento de identidad.</p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-describedby="emailHelp"
          />
          <p id="emailHelp" className="text-sm text-gray-600 mt-1">Usaremos este correo para enviarle la confirmación de su reserva.</p>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Número de Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-describedby="phoneHelp"
          />
          <p id="phoneHelp" className="text-sm text-gray-600 mt-1">En caso de que necesitemos contactarle sobre su reserva.</p>
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Fecha del Viaje</label>
            <div className="relative">
              <Calendar className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Hora del Viaje</label>
            <div className="relative">
              <Clock className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="route" className="block text-gray-700 font-bold mb-2">Selección de Ruta</label>
          <div className="relative">
            <MapPin className="absolute top-3 left-3 text-gray-400" size={20} />
            <select
              id="route"
              name="route"
              value={formData.route}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
            >
              <option value="">Seleccione una ruta</option>
              <option value="centro-historico">Ruta del Centro Histórico</option>
              <option value="miraflores-barranco">Ruta Miraflores - Barranco</option>
              <option value="lima-colonial">Ruta Lima Colonial</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="comments" className="block text-gray-700 font-bold mb-2">Comentarios Adicionales</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="¿Tiene alguna solicitud especial?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Confirmar Reserva
        </button>
      </form>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="https://pbs.twimg.com/media/DhUyo-zXUAAz79v?format=jpg&name=large"
          alt="Pareja disfrutando un paseo en bicitaxi"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <img
          src="https://pbs.twimg.com/media/ELNrOtWWoAELCRu?format=jpg&name=large"
          alt="Bicitaxi en el centro histórico de Lima"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}

export default ReservePage