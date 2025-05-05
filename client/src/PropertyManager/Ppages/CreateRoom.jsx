import { useState } from "react";

const CreateRoom = () => {
  const hotelid = localStorage.getItem("hotelid");
  const [formData, setFormData] = useState({
    hotelid,
    roomname: "",
    roomnumber: "",
    pricepernight: "",
    occupacy: {
      adults: "",
      children: "",
    },
    isavailable: true,
    images: [""],     
    roomtype: "",     
    amenties: [""],
    status: "vacant",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "adults" || name === "children") {
      setFormData((prev) => ({
        ...prev,
        occupacy: {
          ...prev.occupacy,
          [name]: value,
        },
      }));
    } else if (name === "isavailable") {
      setFormData((prev) => ({
        ...prev,
        isavailable: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleArrayChange = (e, index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));
  };

  const addToArrayField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch("http://localhost:3000/api/room/createnewroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `access_token ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Room created successfully!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Create New Room</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Room Name</label>
            <input
              name="roomname"
              placeholder="Deluxe Room"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Room Number</label>
            <input
              name="roomnumber"
              placeholder="101"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Price Per Night (₹)</label>
            <input
              name="pricepernight"
              type="number"
              placeholder="4500"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Room Type</label>
            <select
              name="roomtype"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="EP">EP </option>
              <option value="CP">CP</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Max Adults</label>
            <input
              name="adults"
              type="number"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Max Children</label>
            <input
              name="children"
              type="number"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="isavailable"
              checked={formData.isavailable}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <label className="text-sm text-gray-700 font-medium">Available</label>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Room Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="vacant">Vacant</option>
              <option value="occupied">Occupied</option>
              <option value="reserved">Reserved</option>
              <option value="dirty">Dirty</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
        </div>

  
        <div className="mt-8">
          <label className="block mb-2 font-semibold text-gray-800">Image URLs</label>
          {formData.images.map((img, index) => (
            <input
              key={index}
              value={img}
              onChange={(e) => handleArrayChange(e, index, "images")}
              className="w-full p-3 mb-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              placeholder={`Image URL ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={() => addToArrayField("images")}
            className="text-sm text-blue-600 hover:underline"
          >
            + Add Image
          </button>
        </div>

   
        <div className="mt-6">
          <label className="block mb-2 font-semibold text-gray-800">Amenities</label>
          {formData.amenties.map((am, index) => (
            <input
              key={index}
              value={am}
              onChange={(e) => handleArrayChange(e, index, "amenties")}
              className="w-full p-3 mb-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              placeholder={`Amenity ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={() => addToArrayField("amenties")}
            className="text-sm text-blue-600 hover:underline"
          >
            + Add Amenity
          </button>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleSubmit}
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold text-lg transition duration-300"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
