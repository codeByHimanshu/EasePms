import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Aditi Sinha", guests: 2, nights: 1, room: "Standard", voucher: "1526812565/1", adr: 1688.7 },
    { id: 2, name: "Vipin Trivedi", guests: 1, nights: 1, room: "Twin", voucher: "0140855249/1", adr: 1822.5 },
    { id: 3, name: "Neshanth Pranav", guests: 2, nights: 1, room: "Deluxe", voucher: "NH25061383211084/2", adr: 3400.0 },
    { id: 4, name: "Neshanth Pranav", guests: 3, nights: 1, room: "Deluxe", voucher: "NH25061383211084/1", adr: 4100.0 }
  ]);

  return (
    <>
    <Navbar />
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-500">Bookings</p>
          <h2 className="text-2xl font-bold">0</h2>
          <p className="text-gray-500">5</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold text-blue-500">Rs 2,880.00</h2>
          <p className="text-gray-500">Rs 6,391.20</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-500">Occupancy</p>
          <h2 className="text-2xl font-bold text-red-500 flex items-center">
            20.91% <FaArrowDown className="ml-2 text-sm" />
          </h2>
          <p className="text-gray-500">27.27%</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-500">ADR</p>
          <h2 className="text-2xl font-bold text-green-500">Rs 250.43</h2>
          <p className="text-gray-500">Rs 426.08</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-500">Booking Lead Time</p>
          <h2 className="text-2xl font-bold">1</h2>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-500">Unsold Rooms</p>
          <h2 className="text-2xl font-bold">43.5/55</h2>
          <p className="text-gray-500">40/55</p>
        </div>
      </div>

      <div className="bg-white mt-6 p-4 shadow rounded-lg">
        <h3 className="text-lg font-bold mb-4">Recent 10 Bookings</h3>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="p-4 border rounded-lg flex justify-between items-center">
              <div>
                <p className="text-blue-500 font-bold">{booking.name}</p>
                <p className="text-gray-500">{booking.guests} Guest | {booking.nights} Nights</p>
                <p className="text-gray-700">Room: {booking.room}</p>
              </div>
              <div>
                <p className="text-green-500 font-bold">Voucher No: {booking.voucher}</p>
                <p className="text-gray-500">ADR: Rs {booking.adr.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
