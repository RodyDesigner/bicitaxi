import React from 'react'
import { Link } from 'react-router-dom'
import { Bike } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Bike size={32} />
          <span className="text-2xl font-bold">Bicitaxi Lima</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-green-200">Inicio</Link></li>
            <li><Link to="/rutas" className="hover:text-green-200">Rutas</Link></li>
            <li><Link to="/reservar" className="hover:text-green-200">Reservar</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header