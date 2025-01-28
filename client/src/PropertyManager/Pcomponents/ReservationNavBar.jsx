import React from 'react';
import { FaList, FaSignInAlt, FaSignOutAlt, FaHotel } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 border-b pb-4">
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
      >
        <FaList className="text-lg" />
        Reservations
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors "
      >
        <FaSignInAlt className="text-lg" />
        Arrivals
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
      >
        <FaSignOutAlt className="text-lg" />
        Departures
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
      >
        <FaHotel className="text-lg" />
        In-house

        <span className="bg-blue-100 text-blue-800 text-sm px-2 rounded-full ml-2">

        </span>

      </button>
    </div>
  );
};

export default Navbar;