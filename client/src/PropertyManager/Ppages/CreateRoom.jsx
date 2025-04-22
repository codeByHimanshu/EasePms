import { useState } from "react";


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
//  chnagess
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleArrayChange = (e, index, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [key]: updatedArray,
    }));
  };
  const addArrayItem = (key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...prev[key], ""],
    }));
  };
  return (
    <div
      className="animate__animated animate__fadeInUp max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-2xl space-y-8 mt-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">Create Room</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="roomname"
          placeholder="Type of Room"
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="pricepernight"
          placeholder="Price per Night"
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="roomnumber"
          placeholder="Room Number"
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="adults"
          placeholder="Adults"
          min={1}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="children"
          placeholder="Children"
          min={0}
          onChange={handleInputChange}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
        />
        <input
          type="text"
          name="roomtype"
          placeholder="Roomtype"
          onChange={handleInputChange}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
        />
        <label className="flex items-center gap-3 col-span-2">
          <input
            type="checkbox"
            name="isavailable"
            checked={formData.isavailable}
            onChange={handleInputChange}
            className="h-5 w-5 text-blue-600 border-gray-300 rounded"
          />
          <span className="text-gray-700 font-medium">Is Available</span>
        </label>

      </div>
      <div>
        <label className="block mb-2 font-semibold text-gray-700">Images</label>
        {formData.images.map((img, idx) => (
          <input
            key={idx}
            type="text"
            value={img}
            onChange={(e) => handleArrayChange(e, idx, "images")}
            placeholder={`Image URL ${idx + 1}`}
            className="p-3 mb-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          />
        ))}
        <button
          type="button"
          onClick={() => addArrayItem("images")}
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          + Add another image
        </button>
      </div>
      <div>
        <label className="block mb-2 font-semibold text-gray-700">Amenties</label>
        {formData.amenties.map((elm, idx) => (
          <input
            key={idx}
            type="text"
            value={elm}
            onChange={(e) => handleArrayChange(e, idx, "amenties")}
            placeholder={`Amenties ${idx + 1}`}
            className="p-3 mb-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          />
        ))}
        <button
          type="button"
          onClick={() => addArrayItem("amenties")}
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          + Add Another Amenties
        </button>
      </div>
      <div className="text-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Create Room
        </button>
      </div>
    </div>
  );
};

export default CreateRoom;
