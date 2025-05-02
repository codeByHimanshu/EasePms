import { useState } from "react";
import AddRooms from "../Pcomponents/AddRooms";


const CreateRoom = () => {
  const hotelid = localStorage.getItem("hotelid");
  const [formData, setFormData] = useState({
    hotelid: hotelid,
    roomname: "",
    pricepernight: 0,
    adults: 0,
    children: 0,
    isavailable: true,
    images: [""],
    roomnumber: 0,
    amenties: [""],
    roomtype: ""
  });
  const [showAddRooms, setShowAddRooms] = useState(false);

  const handleSubmit = async () => {
    console.log("hmlo hmlo from the handlesubmit");
    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch("http://localhost:3000/api/room/createnewroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `access_token ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("data sent succesfully");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="animate__animated animate__fadeInUp max-w-4xl mx-auto p-10 bg-white shadow-2xl rounded-3xl mt-12 space-y-10">
      {!showAddRooms ? (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-gray-800">Create Room</h2>
            <button
              onClick={() => setShowAddRooms(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-green-700 transition"
            >
              Add Rooms
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="roomname"
              placeholder="Type of Room"
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={handleInputChange}
            />
            <input
              name="pricepernight"
              placeholder="Price per Night"
              type="number"
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={handleInputChange}
            />
            <input
              name="nuOfRooms"
              placeholder="Number of Rooms"
              type="number"
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={handleInputChange}
            />
            <input
              name="roomtype"
              placeholder="Room Type"
              type="text"
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center pt-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            >
              Create Room
            </button>
          </div>
        </>
      ) : (
        <div className="border rounded-xl p-6 bg-gray-50 shadow-inner space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">Add Rooms</h2>
            <button
              onClick={() => setShowAddRooms(false)}
              className="text-sm text-gray-600 hover:text-red-600 transition"
            >
              ← Back to Create Room
            </button>
          </div>
          <AddRooms />
        </div>
      )}
    </div>
    
  );
};

export default CreateRoom;
