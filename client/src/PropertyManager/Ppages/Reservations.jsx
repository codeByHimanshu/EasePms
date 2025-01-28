import React from "react";
import BookingCard from "../Pcomponents/BookingCard";
import { Navbar } from "../PRoutes/RoutesTwo";

const bookings = [
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
];

const Reservations = () => {
  return (
    <>
      <div className="mt-3">
       <Navbar/>
      </div>
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          Hotel Bookings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((booking, index) => (
            <BookingCard key={index} booking={booking} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reservations;
