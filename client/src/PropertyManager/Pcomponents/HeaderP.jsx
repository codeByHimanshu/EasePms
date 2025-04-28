import React, { useCallback, useEffect, useState } from "react";
import { FaSearch, FaHotel, FaBed, FaComments, FaPlus, FaClipboardList, FaTags, FaEye, FaChartBar, FaTachometerAlt } from "react-icons/fa";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";


export default function HeaderP() {


  useEffect(() => {
    window.addEventListener(                 
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  return (
    <div className="flex min-h-screen font-serif">
      <div className="w-1/5 min-w-[200px] bg-white shadow-lg text-black z-10 px-4 py-6 flex flex-col flex-shrink-0 ">

        <div className="flex items-center gap-2 mb-8 px-2">
          <FaHotel className="text-blue-600 text-3xl" />
          <span className="text-5xl font-bold text-green-600 tracking-wide">InnSync <sub className="text-sm text-orange-900">By Digipants</sub></span>
        </div>

   
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

       
        <ul className="mb-6 space-y-2 text-[17px] font-medium">
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaBed className="text-blue-500" />
            <NavLink to="roomview" className="block w-full">
              Room View
            </NavLink>
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaComments className="text-blue-500" />
            <a href="#" className="block w-full">
              Guest Reviews
            </a>
          </li>
         
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaClipboardList className="text-blue-500" />
            <NavLink to="quick-reservation" className="block w-full">
             Add Reservation
            </NavLink>       
          </li>
      
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaClipboardList className="text-blue-500" />
            <NavLink to="reservations" className="block w-full">
              Reservations
            </NavLink>       
          </li>
        </ul>

        <ul className="space-y-2 text-[17px] font-medium">
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaTags className="text-blue-500" />
            <a href="#" className="block w-full">
              Rates
            </a>
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaEye className="text-blue-500" />
            <NavLink to="stayview" className="block w-full">
              Stay View
            </NavLink>
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaChartBar className="text-blue-500" />
            <a href="#" className="block w-full">
              Analytics
            </a>
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-all">
            <FaTachometerAlt className="text-blue-500" />
            <NavLink to="dashboard" className="block w-full">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
