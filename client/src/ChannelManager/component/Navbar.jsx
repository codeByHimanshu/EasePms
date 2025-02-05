import { FiHome, FiSettings, FiCalendar, FiGlobe, FiUser, FiLock, FiLogOut, FiUsers } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  const [showOptions, setShowOptions] = React.useState(false);


  const handleAdminClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="mb-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Top Navbar */}
      <div className="w-full bg-indigo-600 border-b border-indigo-700 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center h-16 justify-between">
            <div className="mr-10">
              <h1 className="text-2xl font-extrabold text-white tracking-wide transform hover:scale-105 transition-transform duration-200">
                Channel Manager
              </h1>
            </div>
            <nav className="flex-1">
              <ul className="flex space-x-8">
                <li>
                  <NavLink to="/dashboard" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiHome className="w-5 h-5" />
                    <span className="tracking-wide">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addpages" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiCalendar className="w-5 h-5" />
                    <span className="tracking-wide">Reservations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/properties" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FaRegBuilding className="w-5 h-5" />
                    <span className="tracking-wide">Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/channels" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiGlobe className="w-5 h-5" />
                    <span className="tracking-wide">Channels</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookings" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiSettings className="w-5 h-5" />
                    <span className="tracking-wide">Bookings</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="relative ml-10">
              <button onClick={handleAdminClick} className="text-white font-semibold focus:outline-none">
                Admin
              </button>
              {showOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <ul className="py-1">
                    <li>
                      <NavLink to="/user-admin" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <FiUser className="w-5 h-5" />
                        <span>User Admin</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/change-password" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <FiLock className="w-5 h-5" />
                        <span>Change Password</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/logout" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <FiLogOut className="w-5 h-5" />
                        <span>Logout</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/user-roles" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <FiUsers className="w-5 h-5" />
                        <span>User Roles</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
