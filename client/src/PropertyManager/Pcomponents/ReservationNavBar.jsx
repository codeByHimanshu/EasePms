import React from 'react';
import { FaList, FaSignInAlt, FaSignOutAlt, FaHotel } from 'react-icons/fa';

const Navbar = ({ activeTab, setActiveTab, inHouseCount = 0 }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 border-b pb-4">
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'reservations' 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-600 hover:bg-gray-50'
        }`}
        onClick={() => setActiveTab('reservations')}
      >
        <FaList className="text-lg" />
        Reservations
      </button>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'arrivals' 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-600 hover:bg-gray-50'
        }`}
        onClick={() => setActiveTab('arrivals')}
      >
        <FaSignInAlt className="text-lg" />
        Arrivals
      </button>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'departures' 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-600 hover:bg-gray-50'
        }`}
        onClick={() => setActiveTab('departures')}
      >
        <FaSignOutAlt className="text-lg" />
        Departures
      </button>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'inhouse' 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-600 hover:bg-gray-50'
        }`}
        onClick={() => setActiveTab('inhouse')}
      >
        <FaHotel className="text-lg" />
        In-house
        {inHouseCount > 0 && (
          <span className="bg-blue-100 text-blue-800 text-sm px-2 rounded-full ml-2">
            {inHouseCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default Navbar;