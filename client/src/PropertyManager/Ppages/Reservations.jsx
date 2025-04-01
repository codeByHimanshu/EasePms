import React, { useEffect, useState } from "react";
import BookingCard from "../Pcomponents/BookingCard";



const Reservations = () => {
  const [bookingData, setBookingData] = useState({
    arrival: [],
    departure: [],
    inhouse: [],
    reserve: []
  });
  const [activeTab, setActiveTab] = useState("arrival");
  const [err, seterr] = useState("")
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
          onClick={() => handleTabChange("inhouse")}
        >
          inhouse
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
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('access_token');
      if (!token) {
        seterr("the token is missing")
      }
      const response = await fetch('http://localhost:3000/api/booking/getallthebooking', {
        method: 'GET',
        headers: {
          "Authorization": `access_token ${token}`,
          "Content-Type": "application/json"
        }
      });
      const bookingres = await response.json();
      setBookingData(bookingres);
    }
    fetchData()
  }, [])
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const activeBookings = bookingData[activeTab];
  console.log("active bookings = ",activeBookings)
  console.log("booking Data = ", typeof bookingData)
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