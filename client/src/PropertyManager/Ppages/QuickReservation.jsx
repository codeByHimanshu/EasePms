const QuickReservation = () => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState({
      fullName: "",
      email: "",
      phone: "",
    });
    const [roomType, setRoomType] = useState("");
    const [roomNumber, setRoomNumber] = useState("");
    const [numChildren, setNumChildren] = useState();
    const [numAdults, setNumAdults] = useState();
    const [totalAmount, setTotalAmount] = useState();
  
    const handleGuestInfoChange = (e) => {
      setGuests({ ...guests, [e.target.name]: e.target.value });
    };
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch(
          "http://localhost:3000/api/reservation/quickreservation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `access_token ${token}`,
            },
            body: JSON.stringify({
              checkIn,
              checkOut,
              guests,
              roomType,
              roomNumber,
              numChildren,
              numAdult: numAdults,
              rate: totalAmount,
            }),
          }
        );
  
        const data = await response.json();
        console.log("data from the post request = ", data);
        if (response.ok) {
          alert("Booking added");
        } else {
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Booking failed due to a network error");
      }
      console.log("handle submit is called");
    }
  
    const currentDate = new Date().toISOString().slice(0, 16);
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Quick Reservation
          </h2>
          <form>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="checkIn"
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={currentDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="checkOut"
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || currentDate}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Rate & Room Plans</h3>
  
            <div className="grid grid-cols-6 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Room Type
                </label>
                <input
                  name=" roomType"
                  list="roomTypeOptions"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Room Type"
                  onChange={(e) => {
                    setRoomType(e.target.value);
                  }}
                />
                <datalist id="roomTypeOptions">
                  <option value="Deluxe" />
                  <option value="Suite" />
                  <option value="Double" />
                </datalist>
              </div>
  
              <div>
                <label className="block text-sm font-medium mb-2">
                  Room Number
                </label>
                <input
                  name="roomNumber"
                  list="roomNumberOptions"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Room Number"
                  type="number"
                  onChange={(e) => {
                    setRoomNumber(e.target.value);
                  }}
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
                <label className="block text-sm font-medium mb-2">Adults</label>
                <input
                  id="adults"
                  name="numAdult"
                  list="adultsOptions"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Adults"
                  type="number"
                  onChange={(e) => {
                    setNumAdults(e.target.value);
                  }}
                />
                <datalist id="adultsOptions">
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                </datalist>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Children</label>
                <input
                  id="children"
                  name="numChildren"
                  list="childrenOptions"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Select Children"
                  type="number"
                  onChange={(e) => {
                    setNumChildren(e.target.value);
                  }}
                />
                <datalist id="childrenOptions">
                  <option value="1" />
                  <option value="2" />
                </datalist>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Total Amount
                </label>
                <input
                  id="total-amount"
                  name="rate"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Total Amount"
                  type="number"
                  onChange={(e) => {
                    setTotalAmount(e.target.value);
                  }}
                />
              </div>
            </div>
  
            <h3 className="text-xl font-semibold mt-8 mb-4">Guest Information</h3>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="First Name"
                  onChange={handleGuestInfoChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                  onChange={handleGuestInfoChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone Number"
                  onChange={handleGuestInfoChange}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowQuickReservation(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600"
              >
                <NavLink to="addreservation">
                  More Options
                  {console.log("more option got called")}
                </NavLink>
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };