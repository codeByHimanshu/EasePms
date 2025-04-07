import React, { useEffect, useState } from "react";

const AddReservation = () => {
  const hotelid = localStorage.getItem("hotelid");
  const [reservation, setReservation] = useState({
    hotelid: hotelid,
    checkIn: "",
    checkOut: "",
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
    totalPrice: "",
    fullname: "",
    email: "",
    phone: "",
    address: "",
    specialRequests: "",
    childrenname: "",
    childrenage: 0,
  });
  const [totalPrice, setTotalPrice] = useState(null);

  const room_rate_types = [{
    Single: { rate: 1000 },
    Double: { rate: 2000 },
    Suite: { rate: 3000 },
    Deluxe: { rate: 4000 },
    Presidential: { rate: 5000 },
  }];

  function handletotalprice() {
    const roominfo = room_rate_types[reservation.roomType];
    console.log("roomtype from the functtt = ",room_rate_types[reservation.roomType])
    console.log("roominfo = ",roominfo);
    if (roominfo) {
      setTotalPrice(roominfo.rate);
    } else {
      console.log("there is an error");
      setTotalPrice(0);
    }
  }


  const [rooms, setRooms] = useState([]);
  const handleSubmit = async () => {
    console.log("handle submit got calleddd ")
    console.log("room type = ",reservation.roomType)
    try {
      const token = localStorage.getItem("access_token");
      console.log("token = ", token)
      const response = await fetch("http://localhost:3000/api/reservation/addreservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `access_token ${token}`
        },
        body: JSON.stringify(reservation),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking added");
        setReservation({});
      } else {
        alert("Booking failed: " + data.message);
        console.log("error  = ", data.msg)
      }
    } catch (error) {
      console.log("error from the handlesubmit = ", error.message)
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const currentDate = new Date().toISOString().slice(0, 16);
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

  // console.log(reservation);
  return (
    <div className="flex h-screen" >

      <div className="w-full bg-gray-100 p-6 flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2 className="text-2xl font-bold mb-4">Add Reservation</h2>
          <form action="">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1">
                    Check-in Date
                  </label>
                  <input
                    name="checkIn"
                    type="date"
                    className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    // value={reservation.checkIn}
                    onChange={handleInputChange}
                  // min={currentDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    // value={reservation.checkOut}
                    name="checkOut"
                    onChange={handleInputChange}
                  // min={reservation.checkIn || currentDate}
                  // disabled={!reservation.checkIn}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                    name="numRooms"
                    onChange={handleInputChange}
                    min="1"
                    max={10}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Number of Nights
                  </label>
                  <input
                    type="number"
                    className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                    // value={reservation.numRooms}
                    name="numNights"
                    onChange={handleInputChange}
                    min="1"
                    max={10}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Total Price
                  </label>
                  {totalPrice}
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
                      // value={reservation.reservationType}
                      onChange={handleInputChange}
                    />
                    <datalist id="reservationTypeOptions">
                      <option value="Confirm Booking" />
                      <option value="Tentative" />
                      <option value="Canceled" />
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
                      // value={reservation.bookingSource}
                      onChange={handleInputChange}
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
                      // value={reservation.businessSource}
                      onChange={handleInputChange}

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
                      onChange={handleInputChange}
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

            <div className="grid grid-cols-6 gap-4 mt-2">
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
                  onChange={handleInputChange}
                  onClick={handletotalprice}

                />
                <datalist id="roomTypeOptions">
                  <option value="Deluxe" />
                  <option value="Suite" />
                  <option value="Single" />
                  <option value="Double" />
                  <option value="Presidential" />
                </datalist>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Rate Type
                </label>
                <input
                  id="ratetype"
                  name="rateType"
                  list="ratetypeOptions"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Rate Type"
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  name="numAdults"
                  list="adultsOptions"
                  className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Adults"
                  onChange={handleInputChange}
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
                  name="numChildren"
                  list="childrenOptions"
                  className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Children"
                  onChange={handleInputChange}
                />
                <datalist id="childrenOptions">
                  <option value="1" />
                  <option value="2" />
                </datalist>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Special Request
                </label>
                <input
                  id="special request"
                  name="specialRequests"
                  list="special request"
                  className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Children"
                  onChange={handleInputChange}
                />
                <datalist id="childrenOptions">
                  <option value="1" />
                  <option value="2" />
                </datalist>
              </div>
              {/* <div>
                <label className="block text-sm font-medium mb-1">
                  Total Amount

                </label>
                <input
                  id="total-amount"
                  name="totalAmount"
                  className="block w-full p-2 m-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Total Amount"
                  onChange={handleInputChange}
                />
              </div> */}
            </div>


            <h1>Guest Information</h1>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Fullname
                </label>
                <input
                  name="fullname"
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                  // value={reservation.guestDetails.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone Number"
                  // value={reservation.guestDetails.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Address"
                  // value={reservation.guestDetails.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <h1>Child Information</h1>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Childrnen Name
                </label>
                <input
                  name="childrenname"
                  type="text"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Children Name"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Children Age</label>
                <input
                  name="childrenage"
                  type="number"
                  className="block w-full m-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Children Age"
                  // value={reservation.guestDetails.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
          {/* <a
            onClick={(e) => { e.stopPropagation(); HandleChildForm(); }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
            Child Form
          </a> */}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
            onClick={handleSubmit}>
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
              {reservation.checkIn || "Not selected"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">Check-out</p>
            <p className="text-base font-medium text-gray-800">
              {reservation.checkOut || "Not selected"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">Rooms</p>
            <p className="text-base font-medium text-gray-800">
              {/* {rooms || "Not selected"} */}
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
