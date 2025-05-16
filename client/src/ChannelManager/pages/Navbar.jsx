import { FiHome, FiSettings, FiCalendar, FiGlobe, FiUser, FiLock, FiLogOut, FiUsers, FiChevronDown,FiChevronUp} from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import  { useState } from 'react';

export default function Navbar() {

  const [showMore, setShowMore] = useState(false);



  return (
 <div className="flex h-screen font-sans bg-gray-100">
 
  <aside className="w-64 bg-indigo-700 text-white flex flex-col shadow-lg">
    <div className="p-6 border-b border-indigo-600">
      <h1 className="text-2xl font-bold">
        InnSync <sub className="text-xs font-light">by Digipants</sub>
      </h1>
    </div>

 
    <nav className="flex-1 p-4 space-y-1 text-sm">
      {[
        { to: "dashboard", label: "Dashboard", icon: <FiHome /> },
        { to: "addpages", label: "Reservations", icon: <FiCalendar /> },
        { to: "inventory", label: "Rates & Inventory", icon: <FaRegBuilding /> },
        { to: "bookings", label: "Bookings", icon: <FiSettings /> },
        { to: "channels", label: "Channels", icon: <FiGlobe /> }
      ].map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition ${
              isActive ? 'bg-indigo-600 font-semibold' : 'hover:bg-indigo-600'
            }`
          }
        >
          {icon}
          {label}
        </NavLink>
      ))}

      
      <button
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-3 mt-3 px-3 py-2 w-full rounded-md hover:bg-indigo-600 transition"
      >
        {showMore ? <FiChevronUp /> : <FiChevronDown />}
        <span>More Options</span>
      </button>

    
      {showMore && (
        <div className="ml-5 mt-2 space-y-1 text-sm">
          {[
            "reservation", "add-reservation", "rates-availability", "rate-shopper",
            "rate-threshold", "rate-template", "distribution-rates", "auto-stopsell",
            "channel-wizard", "channel-logs", "channel-mappings", "channel-password"
          ].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md transition ${
                  isActive ? 'bg-indigo-600 font-medium' : 'hover:bg-indigo-600'
                }`
              }
            >
              {path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </NavLink>
          ))}
        </div>
      )}
    </nav>


    <div className="p-4 border-t border-indigo-600 space-y-1 text-sm">
      {[
        { to: "/user-admin", label: "User Admin", icon: <FiUser /> },
        { to: "/change-password", label: "Change Password", icon: <FiLock /> },
        { to: "/user-roles", label: "User Roles", icon: <FiUsers /> },
        { to: "/logout", label: "Logout", icon: <FiLogOut /> }
      ].map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition ${
              isActive ? 'bg-indigo-600 font-semibold' : 'hover:bg-indigo-600'
            }`
          }
        >
          {icon}
          {label}
        </NavLink>
      ))}
    </div>
  </aside>


  <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
    <Outlet />
  </main>
</div>

  );
}
