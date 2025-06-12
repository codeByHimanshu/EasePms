import React from "react";
import { FaSearch, FaHotel, FaBed, FaComments, FaClipboardList, FaTags, FaEye, FaChartBar, FaTachometerAlt } from "react-icons/fa";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";


export default function HeaderP() {
  return (
    <div className="flex min-h-screen font-[Poppins]">
      <div className="w-1/5 min-w-[240px] bg-white shadow-xl text-black z-10 px-6 py-8 flex flex-col flex-shrink-0">

        <div className="flex items-center gap-3 mb-10">
          <FaHotel className="text-blue-600 text-4xl" />
          <span className="text-3xl font-extrabold text-green-700 tracking-wide">
            InnSync <sub className="text-sm text-orange-900">By Digipants</sub>
          </span>
        </div>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-2.5 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-4 top-3.5 text-gray-500 text-lg" />
        </div>

        <ul className="mb-8 space-y-3 text-[20px] font-bold">
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaBed className="text-blue-500 text-xl" />
            <NavLink to="roomview" className="block w-full">Room View</NavLink>
          </li>
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaComments className="text-blue-500 text-xl" />
            <a href="#" className="block w-full">Guest Reviews</a>
          </li>
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaClipboardList className="text-blue-500 text-xl" />
            <NavLink to="quick-reservation" className="block w-full">Add Reservation</NavLink>
          </li>
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaClipboardList className="text-blue-500 text-xl" />
            <NavLink to="reservations" className="block w-full">Reservations</NavLink>
          </li>
        </ul>

        <ul className="space-y-3 text-[20px] font-bold">
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaTags className="text-blue-500 text-xl" />
            <NavLink to="rates" className="block w-full">Rates</NavLink>
          </li>
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaEye className="text-blue-500 text-xl" />
            <NavLink to="stayview" className="block w-full">Stay View</NavLink>
          </li>
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaChartBar className="text-blue-500 text-xl" />
            <a href="#" className="block w-full">Analytics</a>
          </li>
          <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all">
            <FaTachometerAlt className="text-blue-500 text-xl" />
            <NavLink to="dashboard" className="block w-full">Dashboard</NavLink>
          </li>
          {/* Room Configuration Dropdown */}
          <li className="relative group">
            <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-100 transition-all cursor-pointer">
              <FaBed className="text-blue-500 text-xl" />
              <span className="block w-full">Room Configuration</span>
              <svg className="ml-auto w-4 h-4 text-gray-500 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="hidden group-hover:block absolute left-0 top-full bg-white shadow-lg rounded-lg mt-1 w-full z-20">
              <li>
                <NavLink to="create-room" className="flex items-center gap-3 px-5 py-2 hover:bg-blue-50 rounded-t-lg">
                  <FaBed className="text-blue-500 text-lg" />
                  Create Room
                </NavLink>
              </li>
              <li>
                <NavLink to="create-room-type" className="flex items-center gap-3 px-5 py-2 hover:bg-blue-50 rounded-b-lg">
                  <FaBed className="text-blue-500 text-lg" />
                  Create Room Type
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
