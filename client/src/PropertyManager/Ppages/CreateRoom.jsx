import { useState } from "react";


const CreateRoom = () => {
  const [formData, setFormData] = useState({
    typeofroom: "",
    pricepernight: "",
    roomnumber: "",
    occupancy: {
      adults: 1,
      children: 0,
    },
    isavailable: true,
    images: [""],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="animate__animated animate__fadeInUp max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-2xl space-y-8 mt-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">Create Room</h2> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="typeofroom"
          placeholder="Type of Room"
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          required
        />
        <input
          type="number"
          name="pricepernight"
          placeholder="Price per Night"
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          required
        />
        <input
          type="number"
          name="roomnumber"
          placeholder="Room Number"
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          required
        />
        <input
          type="number"
          name="occupancy.adults"
          placeholder="Adults"
          min={1}       
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          required
        />
        <input
          type="number"
          name="occupancy.children"
          placeholder="Children"
          min={0}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
        />
        <label className="flex items-center gap-3 col-span-2">
          <input
            type="checkbox"
            name="isavailable"
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
            placeholder={`Image URL ${idx + 1}`}
            className="p-3 mb-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
          />
        ))}
        <button
          type="button"
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          + Add another image
        </button>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Create Room
        </button>
      </div>
    </form>
  );
};

export default CreateRoom;
