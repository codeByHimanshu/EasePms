import { useState } from "react";

const CreateRoomType = () => {
  // Initial state with empty strings for all manual inputs.
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rateType: [{ name: "", maxOccupancy: "", baseprice: "" }],
  });

  const [message, setMessage] = useState("");

  const handleChange = (e, index = null, key = null) => {
    const { name, value } = e.target;

    if (name === "rateType" && index !== null && key) {
      const updatedRates = [...formData.rateType];
      updatedRates[index][key] = value; // keep as string during typing
      setFormData({ ...formData, rateType: updatedRates });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addRateType = () => {
    setFormData({
      ...formData,
      rateType: [
        ...formData.rateType,
        { name: "", maxOccupancy: "", baseprice: "" }
      ],
    });
  };

  const removeRateType = (index) => {
    const updatedRates = formData.rateType.filter((_, i) => i !== index);
    setFormData({ ...formData, rateType: updatedRates });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation to ensure all required fields have values
    if (
      !formData.name ||
      formData.rateType.some(
        (rt) => !rt.name || rt.maxOccupancy === "" || rt.baseprice === ""
      )
    ) {
      setMessage("Please fill all required fields correctly.");
      return;
    }

    // Convert string values to numbers at submission time.
    const payload = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      rateType: formData.rateType.map((rt) => ({
        name: rt.name,
        maxOccupancy: Number(rt.maxOccupancy),
        baseprice: Number(rt.baseprice),
      })),
    };

    try {
      const res = await fetch("http://localhost:3000/api/roomtype/create-roomtype", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || data.e || "Something went wrong");

      setMessage("Room type created successfully!");
      // Reset the form with blank fields
      setFormData({
        name: "",
        description: "",
        rateType: [{ name: "", maxOccupancy: "", baseprice: "" }],
      });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Create Room Type</h2>
      {message && <div className="mb-4 text-sm text-red-600">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Room Type Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <div className="space-y-4">
          <h3 className="font-medium">Rate Types</h3>
          {formData.rateType.map((rate, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-2 items-center border p-3 rounded"
            >
              <select
                name="rateType"
                value={rate.name}
                onChange={(e) => handleChange(e, index, "name")}
                className="p-2 border rounded"
                required
              >
                <option value="">Select Rate Type</option>
                <option value="EP">EP</option>
                <option value="CP">CP</option>
              </select>

              <input
                type="number"
                placeholder="Max Occupancy"
                value={rate.maxOccupancy}
                onChange={(e) => handleChange(e, index, "maxOccupancy")}
                className="p-2 border rounded"
                required
                min="1"
              />

              <input
                type="number"
                placeholder="Base Price"
                value={rate.baseprice}
                onChange={(e) => handleChange(e, index, "baseprice")}
                className="p-2 border rounded"
                required
                min="0"
              />

              {formData.rateType.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRateType(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addRateType}
            className="text-blue-500 hover:underline text-sm"
          >
            + Add another Rate Type
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Room Type
        </button>
      </form>
    </div>
  );
};

export default CreateRoomType;
