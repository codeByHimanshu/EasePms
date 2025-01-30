import React, { useState } from "react";
import BookingCard from "../Pcomponents/BookingCard";


const bookingsData = {
  arrival: [
    {
      name: "Mr. AMBAREES DUBEY",
      year: 1963,
      checkIn: "24/01/2025 10:09:38 PM",
      checkOut: "26/01/2025 11:00:00 AM",
      room: "104",
      rateType: "EP",
      total: "Rs 4,651.00",
      paid: "Rs 4,651.00",
      balance: "Rs 0.00",
    },
  ],
  departure: [
    {
      name: "Mr. AMRIT PARKASH RAI",
      year: 1972,
      checkIn: "25/01/2025 03:15:07 PM",
      checkOut: "26/01/2025",
      room: "105",
      rateType: "EP",
      total: "Rs 2,500.00",
      paid: "Rs 1,000.00",
      balance: "Rs 1,500.00",
    },

  ],
  inHouse: [
    {
      name: "Mr. AMRIT PARKASH RAI",
      year: 1972,
      checkIn: "25/01/2025 03:15:07 PM",
      checkOut: "26/01/2025",
      room: "105",
      rateType: "EP",
      total: "Rs 2,500.00",
      paid: "Rs 1,000.00",
      balance: "Rs 1,500.00",
    },
    {
      name: "Mr. AMRIT PARKASH RAI",
      year: 1972,
      checkIn: "25/01/2025 03:15:07 PM",
      checkOut: "26/01/2025",
      room: "105",
      rateType: "EP",
      total: "Rs 2,500.00",
      paid: "Rs 1,000.00",
      balance: "Rs 1,500.00",
    },
  
  ],
  reserve: [
    {
      name: "Mr. AMRIT PARKASH RAI",
      year: 1972,
      checkIn: "25/01/2025 03:15:07 PM",
      checkOut: "26/01/2025",
      room: "105",
      rateType: "EP",
      total: "Rs 2,500.00",
      paid: "Rs 1,000.00",
      balance: "Rs 1,500.00",
    },
    {
      name: "Mr. AMRIT PARKASH RAI",
      year: 1972,
      checkIn: "25/01/2025 03:15:07 PM",
      checkOut: "26/01/2025",
      room: "105",
      rateType: "EP",
      total: "Rs 2,500.00",
      paid: "Rs 1,000.00",
      balance: "Rs 1,500.00",
    },
    {
      name: "Mr. AMRIT PARKASH RAI",
      year: 1972,
      checkIn: "25/01/2025 03:15:07 PM",
      checkOut: "26/01/2025",
      room: "105",
      rateType: "EP",
      total: "Rs 2,500.00",
      paid: "Rs 1,000.00",
      balance: "Rs 1,500.00",
    },
    {
      name: "Mr. AMRIT PARKASH RAI",
      year: 1972,
      checkIn: "25/01/2025 03:15:07 PM",
      checkOut: "26/01/2025",
      room: "105",
      rateType: "EP",
      total: "Rs 2,500.00",
      paid: "Rs 1,000.00",
      balance: "Rs 1,500.00",
    },

  ],
};
  
const Reservations = () => {
  const [activeTab, setActiveTab] = useState("arrival");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const activeBookings = bookingsData[activeTab];
  const Navbar = () => {
    return (
      <div className="flex space-x-4">
        <button
          className={activeTab === "arrival" ? "font-bold" : ""}
          onClick={() => handleTabChange("arrival")}
        >
          Arrival
        </button>
        <button
          className={activeTab === "departure" ? "font-bold" : ""}
          onClick={() => handleTabChange("departure")}
        >
          Departure
        </button>
        <button
          className={activeTab === "inHouse" ? "font-bold" : ""}
          onClick={() => handleTabChange("inHouse")}
        >
          In House
        </button>
        <button
          className={activeTab === "reserve" ? "font-bold" : ""}
          onClick={() => handleTabChange("reserve")}
        >
          Reserve
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="mt-3">
        <Navbar />
      </div>
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Hotel Bookings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeBookings.map((booking, index) => (
            <BookingCard key={index} booking={booking} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reservations;