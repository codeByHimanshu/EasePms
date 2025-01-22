import React, { useState } from "react";

const AddReservation = () => {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [rooms, setRooms] = useState(1);

  const handleDateChange = (e, type) => {
    const value = e.target.value;
    if (type === "checkin") {
      setCheckinDate(value);
      if (checkoutDate && new Date(value) >= new Date(checkoutDate)) {
        setCheckoutDate("");
      }
    } else {
      setCheckoutDate(value);
    }
  };

  const currentDate = new Date().toISOString().slice(0, 16); // ISO format for input[type=datetime-local]

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Add Reservation</h2>
        <form action="">

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Check-in Date & Time
              </label>
              <input
                type="datetime-local"
                className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={checkinDate}
                onChange={(e) => handleDateChange(e, "checkin")}
                min={currentDate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Check-out Date & Time
              </label>
              <input
                type="datetime-local"
                className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={checkoutDate}
                onChange={(e) => handleDateChange(e, "checkout")}
                min={checkinDate || currentDate}
                disabled={!checkinDate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Rooms
              </label>
              <input
                type="number"
             className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                min="1"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
       <div className="grid grid-cols-4 gap-4">
          <input
            id="reservation-type"
            name="reservationType"
            list="reservationTypeOptions"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Select Reservation Type"
          />
          <datalist id="reservationTypeOptions">
            <option value="Type A" />
            <option value="Type B" />
            <option value="Type C" />
          </datalist>

          <input
            id="booking-source"
            name="bookingSource"
            list="bookingSourceOptions"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Select Booking Source"
          />
          <datalist id="bookingSourceOptions">
            <option value="Source 1" />
            <option value="Source 2" />
            <option value="Source 3" />
          </datalist>

       
          
          <input
            id="business-source"
            name="businessSource"
            list="businessSourceOptions"
            className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Select Business Source"
          />
          <datalist id="businessSourceOptions">
            <option value="Business 1" />
            <option value="Business 2" />
            <option value="Business 3" />
          </datalist>

          <input
            id="market-code"
            name="marketCode"
            list="marketCodeOptions"
            className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Select Market Code"
          />
          <datalist id="marketCodeOptions">
            <option value="Code X" />
            <option value="Code Y" />
            <option value="Code Z" />
          </datalist>

       </div>
        
      </div>
        </form>
        </div>
     

      <div className="w-1/3 bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Check-in:</p>
            <p className="font-medium">{checkinDate || "Not selected"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Check-out:</p>
            <p className="font-medium">{checkoutDate || "Not selected"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Rooms:</p>
            <p className="font-medium">{rooms}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReservation;
