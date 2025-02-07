import { useState } from "react";
import { FaHome, FaDollarSign, FaChartBar,  FaChartPie, FaGlobe } from "react-icons/fa";

import { FaArrowDown, FaArrowUp, FaChartLine, FaBed, FaMoneyBillWave, FaClock } from "react-icons/fa";
import Navbar from "./Navbar";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const NavItem = ({ icon, text, onClick }) => (
  <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={onClick}>
    {icon}
    <span>{text}</span>
  </div>
);

const allBookings = {
  recent: [
    {
      id: 1,
      name: "Danish Sayed",
      guests: 4,
      nights: 1,
      roomType: "Suite",
      checkIn: "Apr 12",
      checkOut: "Apr 13",
      voucher: "4821637588/5374520496",
      ratePlan: "Suite EP",
      adr: "Rs 3,600.00",
    },
    {
      id: 2,
      name: "Mukesh Sharma",
      guests: 2,
      nights: 1,
      roomType: "Twin",
      checkIn: "Feb 06",
      checkOut: "Feb 07",
      voucher: "4806687235/5374384851",
      ratePlan: "Twin EP",
      adr: "Rs 1,800.00",
    }
  ],
  arrival: [{ id: 3, name: "John Doe", guests: 3, nights: 2, roomType: "Deluxe", checkIn: "Mar 10", checkOut: "Mar 12", voucher: "123456789/987654321", ratePlan: "Deluxe EP", adr: "Rs 2,500.00" }, { id: 6, name: "John Doe", guests: 3, nights: 2, roomType: "Deluxe", checkIn: "Mar 10", checkOut: "Mar 12", voucher: "123456789/987654321", ratePlan: "Deluxe EP", adr: "Rs 2,500.00" }, { id: 7, name: "John Doe", guests: 3, nights: 2, roomType: "Deluxe", checkIn: "Mar 10", checkOut: "Mar 12", voucher: "123456789/987654321", ratePlan: "Deluxe EP", adr: "Rs 2,500.00" }],

  departure: [{ id: 4, name: "Jane Smith", guests: 1, nights: 1, roomType: "Single", checkIn: "Feb 14", checkOut: "Feb 15", voucher: "654321789/123987654", ratePlan: "Single EP", adr: "Rs 1,200.00" }, { id: 8, name: "Jane Smith", guests: 1, nights: 1, roomType: "Single", checkIn: "Feb 14", checkOut: "Feb 15", voucher: "654321789/123987654", ratePlan: "Single EP", adr: "Rs 1,200.00" }, { id: 9, name: "Jane Smith", guests: 1, nights: 1, roomType: "Single", checkIn: "Feb 14", checkOut: "Feb 15", voucher: "654321789/123987654", ratePlan: "Single EP", adr: "Rs 1,200.00" }, { id: 10, name: "Jane Smith", guests: 1, nights: 1, roomType: "Single", checkIn: "Feb 14", checkOut: "Feb 15", voucher: "654321789/123987654", ratePlan: "Single EP", adr: "Rs 1,200.00" }],
  cancellation: [{ id: 5, name: "Mike Tyson", guests: 2, nights: 3, roomType: "Executive", checkIn: "Apr 20", checkOut: "Apr 23", voucher: "789456123/321654987", ratePlan: "Executive EP", adr: "Rs 4,000.00" }]
};

const RecentBookings = () => {
  const [selectedTab, setSelectedTab] = useState("recent");
  return (
    <div className="bg-white p-4 shadow-md rounded-md w-full">
      <div className="flex border-b mb-4">
        {Object.keys(allBookings).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold ${selectedTab === tab ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {allBookings[selectedTab].map((booking) => (
          <div key={booking.id} className="p-4 bg-gray-50 rounded-lg shadow flex gap-4 items-center">
            <div className="bg-gray-700 text-white p-3 rounded-lg text-center min-w-[60px]">
              <p className="text-sm font-bold">{booking.checkIn.split(" ")[0]}</p>
              <p className="text-lg font-semibold">{booking.checkIn.split(" ")[1]}</p>
              <p className="text-sm">{booking.checkOut.split(" ")[1]}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-blue-600 font-semibold text-lg">{booking.name}</h3>
              <p className="text-sm text-gray-600">
                {booking.guests} Guest | {booking.nights} Nights
              </p>
              <p className="text-sm font-medium">Room: {booking.roomType}</p>
              <p className="text-sm text-green-600 font-semibold mt-1">
                Voucher No: {booking.voucher}
              </p>
              <p className="text-sm">Rate Plan: {booking.ratePlan}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">ADR</p>
              <p className="text-lg font-bold text-gray-700">{booking.adr}</p>
              <BsBuilding className="text-blue-600 text-3xl mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const DashboardStats = () => {
  return (
    <div className="p-6 bg-gray-100 w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 shadow-lg rounded-lg">
          <FaBed className="text-3xl mb-2" />
          <p className="text-lg">Bookings</p>
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-sm opacity-80">5 last week</p>
        </div>

        <div className="bg-green-500 text-white p-6 shadow-lg rounded-lg">
          <FaMoneyBillWave className="text-3xl mb-2" />
          <p className="text-lg">Revenue</p>
          <h2 className="text-3xl font-bold">Rs 2,880.00</h2>
          <p className="text-sm opacity-80">Rs 6,391.20 last week</p>
        </div>

        <div className="bg-red-500 text-white p-6 shadow-lg rounded-lg">
          <FaChartLine className="text-3xl mb-2" />
          <p className="text-lg">Occupancy</p>
          <h2 className="text-3xl font-bold flex items-center">
            20.91% <FaArrowDown className="ml-2 text-lg" />
          </h2>
          <p className="text-sm opacity-80">27.27% last week</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-yellow-500 text-white p-6 shadow-lg rounded-lg">
          <FaChartLine className="text-3xl mb-2" />
          <p className="text-lg">ADR</p>
          <h2 className="text-3xl font-bold">Rs 250.43</h2>
          <p className="text-sm opacity-80">Rs 426.08 last week</p>
        </div>

        <div className="bg-indigo-500 text-white p-6 shadow-lg rounded-lg">
          <FaClock className="text-3xl mb-2" />
          <p className="text-lg">Booking Lead Time</p>
          <h2 className="text-3xl font-bold">1</h2>
        </div>

        <div className="bg-gray-800 text-white p-6 shadow-lg rounded-lg">
          <FaBed className="text-3xl mb-2" />
          <p className="text-lg">Unsold Rooms</p>
          <h2 className="text-3xl font-bold">43.5/55</h2>
          <p className="text-sm opacity-80">40/55 last week</p>
        </div>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Aditi Sinha", guests: 2, nights: 1, room: "Standard", voucher: "1526812565/1", adr: 1688.7 },
    { id: 2, name: "Vipin Trivedi", guests: 1, nights: 1, room: "Twin", voucher: "0140855249/1", adr: 1822.5 },
    { id: 3, name: "Neshanth Pranav", guests: 2, nights: 1, room: "Deluxe", voucher: "NH25061383211084/2", adr: 3400.0 },
    { id: 4, name: "Neshanth Pranav", guests: 3, nights: 1, room: "Deluxe", voucher: "NH25061383211084/1", adr: 4100.0 }
  ]);

  const handleNavClick = (section) => {
    alert(`Navigating to ${section}`);
  };

  return (
    <>
    
      <nav className="flex items-center justify-between bg-gray-900 text-white p-4 shadow-lg">
        <div className="flex space-x-6 text-sm font-semibold">
          <NavItem icon={<FaHome size={18} />} text="TODAY'S OVERVIEW" onClick={() => handleNavClick("TODAY'S OVERVIEW")} />
          <NavItem icon={<FaDollarSign size={18} />} text="REVENUE" onClick={() => handleNavClick("REVENUE")} />
          <NavItem icon={<FaChartBar size={18} />} text="BOOKING ENGINE STATISTICS" onClick={() => handleNavClick("BOOKING ENGINE STATISTICS")} />
          <NavItem icon={<FaChartLine size={18} />} text="BOOKING STATISTICS" onClick={() => handleNavClick("BOOKING STATISTICS")} />
          <NavItem icon={<FaChartPie size={18} />} text="MARKET INSIGHTS" onClick={() => handleNavClick("MARKET INSIGHTS")} />
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold flex items-center">
            <FaGlobe size={18} className="mr-2" /> Online Agency
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold">
            All Bookings
          </button>
        </div>
      </nav>
     <DashboardStats />
        <RecentBookings />
    </>
  );
};

export default Dashboard;
