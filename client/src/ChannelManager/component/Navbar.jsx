import { FiActivity, FiHome, FiSettings, FiUsers, FiCalendar, FiBarChart2, FiGlobe } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">Channel Manager</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded">
                <FiHome className="w-5 h-5" />
                <NavLink to="">Dashboard</NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded">
                <FiCalendar className="w-5 h-5" />
                <NavLink to="">Reservations</NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded">
                <FaRegBuilding className="w-5 h-5" />
                <NavLink to="">Properties</NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded">
                <FiGlobe className="w-5 h-5" />
                <NavLink to="">Channels</NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded">
                <FiSettings className="w-5 h-5" />
                <NavLink to="">Settings</NavLink>
              </a>
            </li>
          </ul>
        </nav>
      </div>

   
    </div>
  );
}