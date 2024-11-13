import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!--%20Generator%3A%20Adobe%20Illustrator%2019.0.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200)%20%20--%3E%3C!--%20License%3A%20CC0.%20Made%20by%20SVG%20Repo%3A%20https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F77516%2Fbike%20--%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20498.4%20498.4%22%20style%3D%22enable-background%3Anew%200%200%20498.4%20498.4%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M2.8%2C498.4c0-80.8%2C65.6-147.2%2C147.2-147.2s147.2%2C65.6%2C147.2%2C147.2%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M28.4%2C498.4c0-67.2%2C54.4-121.6%2C121.6-121.6s121.6%2C54.4%2C121.6%2C121.6%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M151.6%2C496h145.6c0-80-64.8-145.6-145.6-145.6l0.8%2C1.6v144H151.6z%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M151.6%2C496h119.2c0-64-52.8-120-120-120l0.8%2C1.6L151.6%2C496L151.6%2C496z%22%2F%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%22455.6%2C496%20448.4%2C496%20169.2%2C248%20455.6%2C248%20%22%2F%3E%3Cpolyline%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%22455.6%2C248%20455.6%2C496%20448.4%2C496%20324.4%2C385.6%20%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M167.6%2C88.8c0-30.4%2C21.6-56.8%2C52.8-56.8h112l27.2-32h-148c-40.8%2C0-76%2C36.8-76%2C76.8v172.8l32-29.6V88.8z%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M135.6%2C80v170.4l32-29.6v-132c0-30.4%2C21.6-56.8%2C52.8-56.8h115.2%22%2F%3E%3Cg%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M375.6%2C20c0%2C11.2-8.8%2C20-20%2C20h-72.8c-10.4%2C0-19.2-8.8-19.2-20l0%2C0c0-11.2%2C8.8-20%2C20-20h72.8C366.8%2C0%2C375.6%2C8.8%2C375.6%2C20L375.6%2C20z%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M495.6%2C177.6c-8%2C0-6.4%2C0-9.6%2C0c-36.8%2C0-68-3.2-68%2C16.8s31.2%2C35.2%2C68%2C35.2c2.4%2C0%2C0.8%2C0%2C8.8-0.8v-51.2H495.6z%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22135.6%22%20y%3D%22248%22%20style%3D%22fill%3A%23FFFFFF%3B%22%20width%3D%2232%22%20height%3D%22152%22%2F%3E%3Cpolyline%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%22135.6%2C248%20167.6%2C248%20167.6%2C400%20%22%2F%3E%3Cg%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M183.6%2C232c0%2C8.8-7.2%2C16-16%2C16h-34.4c-8.8%2C0-16-7.2-16-16l0%2C0c0-8.8%2C7.2-16%2C16-16h34.4C176.4%2C216%2C183.6%2C223.2%2C183.6%2C232L183.6%2C232z%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M183.6%2C408c0%2C8.8-7.2%2C16-16%2C16h-34.4c-8.8%2C0-16-7.2-16-16l0%2C0c0-8.8%2C7.2-16%2C16-16h34.4C176.4%2C392%2C183.6%2C399.2%2C183.6%2C408L183.6%2C408z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M135.6%2C216h32c8.8%2C0%2C16%2C8.8%2C16%2C17.6l0%2C0c0%2C8.8-6.4%2C15.2-15.2%2C15.2%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M135.6%2C392h32c8.8%2C0%2C16%2C6.4%2C16%2C15.2l0%2C0c0%2C8.8-6.4%2C16-15.2%2C16%22%2F%3E%3C%2Fg%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%22495.6%2C496%20455.6%2C496%20455.6%2C272%20495.6%2C232.8%20%22%2F%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%22495.6%2C496%20455.6%2C496%20455.6%2C378.4%20495.6%2C340%20%22%2F%3E%3Ccircle%20style%3D%22fill%3A%23FFFFFF%3B%22%20cx%3D%22408.4%22%20cy%3D%22431.2%22%20r%3D%2249.6%22%2F%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M443.6%2C396c19.2%2C19.2%2C19.2%2C50.4%2C0%2C70.4s-50.4%2C19.2-70.4%2C0%22%2F%3E%3C%2Fsvg%3E"
            alt="Bicitaxi Lima"
            className="w-8 h-8" // Ajusta el tamaño según lo necesites
          />
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