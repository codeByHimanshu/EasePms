import { FiHome, FiSettings, FiCalendar, FiGlobe } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Bookings from '../pages/Bookings';
import { useState } from 'react';

export default function Navbar() {
  const [showQuickAccess, setShowQuickAccess] = useState(false);

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Top Navbar */}
      <div className="w-full bg-white border-b border-gray-200 shadow-lg ">
        <div className="container mx-auto px-6">
          <div className="flex items-center h-16">
            <div className="mr-10">
              <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide transform hover:scale-105 transition-transform duration-200">
                Channel Manager
              </h1>
            </div>
            <nav className="flex-1">
              <ul className="flex space-x-8">
                <li>
                  <NavLink to="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-200 ease-in-out">
                    <FiHome className="w-5 h-5" />
                    <span className="tracking-wide">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reservations" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-200 ease-in-out">
                    <FiCalendar className="w-5 h-5" />
                    <span className="tracking-wide">Reservations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/properties" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-200 ease-in-out">
                    <FaRegBuilding className="w-5 h-5" />
                    <span className="tracking-wide">Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/channels" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-200 ease-in-out">
                    <FiGlobe className="w-5 h-5" />
                    <span className="tracking-wide">Channels</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookings" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-200 ease-in-out">
                    <FiSettings className="w-5 h-5" />
                    <span className="tracking-wide">Bookings</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
