import React, { useState } from "react";

const AddReservation = () => {
  const [childFields, setChildFields] = useState(false);

  const [reservation, setReservation] = useState({
    hotelid: "",
    checkIn: "",
    checkOut: "",
    checkInTime: "", 
    checkOutTime: "",
    numNights: 0,
    numRooms: 0,
    reservationType: "",
    bookingSource: "",
    businessSource: "",
    marketCode: "",
    roomType: "",
    rateType: "",
    priceforeachroom: 0,
    roomNumber: "",
    numAdults: 0,
    numChildren: 0,
    totalPrice: 0,
    guestDetails: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
        specialRequests: ""
    },
    childrenDetails: []
  });
  const handleSubmit = async () => {
    try {
      const response = await fetch("https://innsync-1.onrender.com/api/addreservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservation),  
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Booking added");
        setReservation({});
      } else {
        alert("Booking failed: " + data.message); // Display error from response
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Booking failed due to a network error");
    }
  };
   
  }
 const handleSubmission = ()=>{


 }



  function HandleChildForm() {
    setChildFields(true)
  }
  const ChildForm = () => {
  
    return (
      <>
      {childFields && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 animate-fadeIn w-1/2">
        <div className="grid grid-cols-2 gap-4">
          <div>
          <label className="block text-sm font-medium mb-1">Child Name</label>
          <input
            type="text"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Child Name"
          />
          </div>
          <div>
          <label className="block text-sm font-medium mb-1">Child Age</label>
          <input
            type="number"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Child Age"
          />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
          <label className="block text-sm font-medium mb-1">Child Gender</label>
          <select
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          </div>
          <div>
          <label className="block text-sm font-medium mb-1">Special Needs</label>
          <input
            type="text"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Special Needs"
          />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
          <label className="block text-sm font-medium mb-1">Child Passport Number</label>
          <input
            type="text"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Child Passport Number"
          />
          </div>
          <div>
          <label className="block text-sm font-medium mb-1">Child Nationality</label>
          <input
            type="text"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Child Nationality"
          />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
          <label className="block text-sm font-medium mb-1">Child Allergies</label>
          <input
            type="text"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Child Allergies"
          />
          </div>
          <div>
          <label className="block text-sm font-medium mb-1">Child Medications</label>
          <input
            type="text"
            className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Child Medications"
          />
          </div>
        </div>
        <div className="flex justify-end">
          <button
          onClick={() => setChildFields(false)}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600"
          >
          Close
          </button>
        <button
          onClick={() => alert('Form Submitted')}
          className="bg-green-500 text-white px-4 py-2 ml-2 rounded-md shadow-sm hover:bg-green-600"
        >
          Submit
        </button>
        </div>
        </div>
      </div>
      )}
      </>
    );
  
  }


  const currentDate = new Date().toISOString().slice(0, 16); // ISO format for input[type=datetime-local]
  function AddRoom() {
    return (
      <div>
        <label>Room Type</label>
        <input type="text" placeholder="Room Type" />
        <label>Room Number</label>
        <input type="text" placeholder="Room Number" />
        <label>Room Rate</label>
        <input type="text" placeholder="Room Rate" />
        <label>Room Status</label>
        <input type="text" placeholder="Room Status" />
      </div>
    );
  }
  return (
    <div className="flex h-screen" onClick={() => setChildFields(false)}>
     
      <div className="w-full bg-gray-100 p-6 flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
        <div>
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
                    max={10}
                  />
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Reservation Type
                    </label>
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Booking Source
                    </label>
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Business Source
                    </label>
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Market Code
                    </label>
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
              </div>
            </div>
            <h1>Rate & room Plans</h1>
            {Array.from({ length: rooms }, (v, index) => (
              <div key={index} className="grid grid-cols-6 gap-4 mt-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Room Type
                  </label>
                  <input
                    id="room-type"
                    name="roomType"
                    list="roomTypeOptions"
                    className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Room Type"
                  />
                  <datalist id="roomTypeOptions">
                    <option value="Delux Room" />
                    <option value="Suit Room" />
                    <option value="Twin With Bathroom" />
                    <option value="Executive Room" />
                    <option value="Standard Room" />
                    <option value="Bussiness Room" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Rate Plan
                  </label>
                  <input
                    id="ratePlan"
                    name="ratePlan"
                    list="ratePlanOptions"
                    className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Rate Plan"
                  />
                  <datalist id="ratePlanOptions">
                    <option value="EP" />
                    <option value="CP" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Room Number
                  </label>
                  <input
                    id="room-number"
                    name="roomNumber"
                    list="roomNumberOptions"
                    className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Room Number"
                  />
                  <datalist id="roomNumberOptions">
                    <option value="101" />
                    <option value="102" />
                    <option value="103" />
                    <option value="104" />
                    <option value="105" />
                    <option value="106" />
                    <option value="107" />
                    <option value="108" />
                    <option value="109" />
                    <option value="110" />
                    <option value="111" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Adults
                  </label>
                  <input
                    id="adults"
                    name="adults"
                    list="adultsOptions"
                    className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Adults"
                  />
                  <datalist id="adultsOptions">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Children
                  </label>
                  <input
                    id="children"
                    name="children"
                    list="childrenOptions"
                    className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Children"
                  />
                  <datalist id="childrenOptions">
                    <option value="1" />
                    <option value="2" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Total Amount
                  </label>
                  <input
                    id="total-amount"
                    name="totalAmount"
                    className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Total Amount"
                  />
                </div>
              </div>
            ))}

            <h1>Guest Information</h1>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  id="city"
                  name="city"
                  list="cityOptions"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </form>
            <a
            onClick={(e) => { e.stopPropagation(); HandleChildForm(); }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
              Child Form
            </a>
            {childFields && <ChildForm />}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
            Check In
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600">
            Reserve
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>
      <div className="w-1/3 bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Booking Summary
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">Check-in</p>
            <p className="text-base font-medium text-gray-800">
              {checkinDate || "Not selected"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">Check-out</p>
            <p className="text-base font-medium text-gray-800">
              {checkoutDate || "Not selected"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">Rooms</p>
            <p className="text-base font-medium text-gray-800">
              {rooms || "Not selected"}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-all duration-200">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );



};

export default AddReservation;
