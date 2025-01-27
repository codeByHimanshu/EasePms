import React, { useState, useEffect } from "react";
import axios from "axios";


const RatesPage = () => {
  const [rates, setRates] = useState([
    { roomType: "Single", rateType: "EP", date: "2025-01-01", price: 100 },
    { roomType: "Single", rateType: "CP", date: "2025-01-01", price: 120 },
    { roomType: "Double", rateType: "EP", date: "2025-01-01", price: 150 },
    { roomType: "Double", rateType: "CP", date: "2025-01-01", price: 170 },
  ]);
  const [bulkUpdate, setBulkUpdate] = useState({
    roomType: "",
    rateType: "",
    startDate: "",
    endDate: "",
    price: "",
  });
  const [visibleDays] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [showBulkUpdate, setShowBulkUpdate] = useState(false);
  const roomTypes = [
    "Single",
    "Double",
    "Deluxe",
    "Suite",
    "Studio",
    "Penthouse",
  ];
  const rateTypes = ["EP", "CP"];

  const handleNext = () => {
    if (startIndex + visibleDays < 365) {
      setStartIndex(startIndex + visibleDays);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleDays >= 0) {
      setStartIndex(startIndex - visibleDays);
    }
  };

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 365; i++) {
      const date = new Date(2025, 0, 1);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  const applyBulkUpdate = () => {
    const { roomType, rateType, startDate, endDate, price } = bulkUpdate;
    if (!roomType || !rateType || !startDate || !endDate || !price) {
      return;
    }
    const updatedRates = rates.map((rate) => {
      const rateDate = new Date(rate.date);
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (
        rate.roomType === roomType &&
        rate.rateType === rateType &&
        rateDate >= start &&
        rateDate <= end
      ) {
        return { ...rate, price: parseFloat(price) };
      }
      return rate;
    });
    setRates(updatedRates);
    setShowBulkUpdate(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Rates Management</h1>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-1 border">Room Type</th>
              <th className="px-4 py-1 border">Rate Type</th>
              {dates
                .slice(startIndex, startIndex + visibleDays)
                .map((date, index) => (
                  <th key={index} className="px-2 text-sm border">
                    <div className="flex flex-col items-center">
                      <div className="text-gray-400 font-open-sans" style={{fontSize:"9px"}}>
                        {date.toLocaleDateString("default", { weekday: "short" })}
                      </div>
                      <div>
                        {date.toLocaleDateString("default", { day: "numeric" })}
                      </div>
                      <div className="text-gray-700 font-open-sans" style={{fontSize:"14px"}}>
                        {date.toLocaleDateString("default", { month: "short" })}
                      </div>
                    </div>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {roomTypes.map((roomType, roomIndex) =>
              rateTypes.map((rateType) => (
                <tr key={`${roomType}-${rateType}`}>
                  {rateType === "EP" && (
                    <td rowSpan={2} className="px-4 py-2 border">
                      {roomType}
                    </td>
                  )}
                  <td className="px-4 py-2 border">{rateType}</td>
                  {dates
                    .slice(startIndex, startIndex + visibleDays)
                    .map((date, index) => (
                      <td
                        key={`${roomType}-${rateType}-${index}`}
                        className="px-4 py-2 border"
                      >
                        <input
                          type="number"
                          className="w-full p-1 border rounded"
                          value={
                            rates.find(
                              (r) =>
                                r.roomType === roomType &&
                                r.rateType === rateType &&
                                new Date(r.date).toDateString() ===
                                  date.toDateString()
                            )?.price || ""
                          }
                        />
                      </td>
                    ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mb-6">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={startIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={startIndex + visibleDays >= 365}
        >
          <FaArrowRight />
        </button>
      </div>

      <button
        onClick={() => setShowBulkUpdate(!showBulkUpdate)}
        className="w-full bg-blue-500 text-white p-2 rounded mb-6"
      >
        {showBulkUpdate ? "Hide Bulk Update" : "Show Bulk Update"}
      </button>

      {showBulkUpdate && (
        <div className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">Bulk Update</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block mb-1">Room Type:</label>
              <select
                className="w-full p-2 border rounded"
                value={bulkUpdate.roomType}
                onChange={(e) =>
                  setBulkUpdate({ ...bulkUpdate, roomType: e.target.value })
                }
              >
                <option value="">Select Room</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">Rate Type:</label>
              <select
                className="w-full p-2 border rounded"
                value={bulkUpdate.rateType}
                onChange={(e) =>
                  setBulkUpdate({ ...bulkUpdate, rateType: e.target.value })
                }
              >
                <option value="">Select Rate Type</option>
                {rateTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">Start Date:</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={bulkUpdate.startDate}
                onChange={(e) =>
                  setBulkUpdate({ ...bulkUpdate, startDate: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-1">End Date:</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={bulkUpdate.endDate}
                onChange={(e) =>
                  setBulkUpdate({ ...bulkUpdate, endDate: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-1">Price:</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={bulkUpdate.price}
                onChange={(e) =>
                  setBulkUpdate({ ...bulkUpdate, price: e.target.value })
                }
              />
            </div>
            <button
              type="button"
              onClick={applyBulkUpdate}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Apply Bulk Update
            </button>
          </form>
        </div>
      )}

      <button className="w-full bg-green-500 text-white p-2 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default RatesPage;