import { FiHome, FiSettings, FiCalendar, FiGlobe, FiUser, FiLock, FiLogOut, FiUsers, FiMenu, FiX } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import React from 'react';


export default function Navbar() {
  const [showOptions, setShowOptions] = React.useState(false);
  const [showSlider, setShowSlider] = React.useState(false);

  const handleAdminClick = () => {
    setShowOptions(!showOptions);
  };

  const handleMenuClick = () => {
    setShowSlider(!showSlider);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  return (
    <div className="mb-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full bg-indigo-600 border-b border-indigo-700 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center h-16 justify-between">
            <div className="flex items-center">
              <button onClick={handleMenuClick} className="text-white focus:outline-none mr-4">
                <FiMenu className="w-6 h-6 transform hover:scale-110 transition-transform duration-200" />
              </button>
             
              <h1 className="text-2xl font-extrabold text-white tracking-wide transform hover:scale-105 transition-transform duration-200">
                Channel Manager
              </h1>
            </div>
            <nav className="flex-1 ml-8"> {/* Add margin-left to create space */}
              <ul className="flex space-x-8">
                <li>
                  <NavLink to="/dashboard" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiHome className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
                    <span className="tracking-wide">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addpages" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiCalendar className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
                    <span className="tracking-wide">Reservations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/properties" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FaRegBuilding className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
                    <span className="tracking-wide">Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/channels" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiGlobe className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
                    <span className="tracking-wide">Channels</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookings" className="flex items-center space-x-2 text-white hover:text-yellow-300 font-semibold transition-all duration-200 ease-in-out">
                    <FiSettings className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
                    <span className="tracking-wide">Bookings</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="relative ml-10">
              <button onClick={handleAdminClick} className="text-white font-semibold focus:outline-none transform hover:scale-105 transition-transform duration-200">
                Admin
              </button>
              {showOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg animate-fade-in">
                  <ul className="py-1">
                    <li>
                      <NavLink to="/user-admin" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                        <FiUser className="w-5 h-5" />
                        <span>User Admin</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/change-password" className="flex items-center space-x-2  px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                        <FiLock className="w-5 h-5" />
                        <span>Change Password</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/logout" className="flex items-center space-x-2  px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                        <FiLogOut className="w-5 h-5" />
                        <span>Logout</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/user-roles" className="flex items-center space-x-2  px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
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
      {showSlider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out animate-fade-in">
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex justify-between items-center p-4 bg-indigo-600 text-white">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={handleCloseSlider} className="focus:outline-none transform hover:scale-110 transition-transform duration-200">
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <ul className="py-4">
              <li>
                <NavLink to="/reservation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-reservation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Add Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/bookings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/rates-availability" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Rates & Availability
                </NavLink>
              </li>
              <li>
                <NavLink to="/rates-inventory" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Rates & Inventory
                </NavLink>
              </li>
              <li>
                <NavLink to="/rate-shopper" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Rate Shopper
                </NavLink>
              </li>
              <li>
                <NavLink to="/rate-threshold" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Rate Threshold
                </NavLink>
              </li>
              <li>
                <NavLink to="/rate-template" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Rate Template
                </NavLink>
              </li>
              <li>
                <NavLink to="/distribution-rates" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Distribution Rates
                </NavLink>
              </li>
              <li>
                <NavLink to="/auto-stopsell" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Auto Stopsell
                </NavLink>
              </li>
              <li>
                <NavLink to="/channel-wizard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Channel Wizard
                </NavLink>
              </li>
              <li>
                <NavLink to="/channel-logs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Channel Logs
                </NavLink>
              </li>
              <li>
                <NavLink to="/channel-mappings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Channel Mappings
                </NavLink>
              </li>
              <li>
                <NavLink to="/channel-password" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Channel Password
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
