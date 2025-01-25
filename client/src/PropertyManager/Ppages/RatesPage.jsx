import React, { useState, useEffect } from "react";
import axios from "axios";


const RatesPage = () => {
  const [rates, setRates] = useState([]);
  const [bulkUpdate, setBulkUpdate] = useState({
    roomType: "",
    rateType: "",
    startDate: "",
    endDate: "",
    price: "",
  });
  const roomTypes = ["Single", "Double", "Deluxe", "Suite", "Studio", "Penthouse"];
  const rateTypes = ["EP", "CP"];

  useEffect(() => {
    // Fetch initial data for rates (1 year default)
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await axios.get("/api/rates"); // Replace with your backend endpoint
      setRates(response.data);
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  };

  const handleRateChange = (roomId, rateType, date, price) => {
    setRates((prevRates) =>
      prevRates.map((rate) =>
        rate.roomId === roomId && rate.rateType === rateType && rate.date === date
          ? { ...rate, price }
          : rate
      )
    );
  };

  const saveRates = async () => {
    try {
      await axios.post("/api/rates/update", { rates });
      alert("Rates updated successfully!");
    } catch (error) {
      console.error("Error saving rates:", error);
      alert("Failed to save rates.");
    }
  };

  const handleBulkUpdate = async () => {
    const { roomType, rateType, startDate, endDate, price } = bulkUpdate;

    if (!roomType || !rateType || !startDate || !endDate || !price) {
      alert("Please fill in all bulk update fields.");
      return;
    }

    try {
      await axios.post("/api/rates/bulk-update", {
        roomType,
        rateType,
        startDate,
        endDate,
        price,
      });
      alert("Bulk update successful!");
      fetchRates();
    } catch (error) {
      console.error("Error in bulk update:", error);
      alert("Failed to apply bulk update.");
    }
  };

  return (
    <div className="rates-page">
      <h1>Rates Management</h1>

      <div className="rates-table">
        <table>
          <thead>
            <tr>
              <th>Room Type</th>
              <th>Rate Type</th>
              {[...Array(12)].map((_, month) => (
                <th key={month}>{new Date(2025, month).toLocaleString("default", { month: "short" })}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roomTypes.map((roomType, roomIndex) =>
              rateTypes.map((rateType) => (
                <tr key={`${roomType}-${rateType}`}>
                  {rateType === "EP" && <td rowSpan={2}>{roomType}</td>}
                  <td>{rateType}</td>
                  {[...Array(12)].map((_, month) => (
                    <td key={`${roomType}-${rateType}-${month}`}>
                      <input
                        type="number"
                        value={
                          rates.find(
                            (r) =>
                              r.roomType === roomType &&
                              r.rateType === rateType &&
                              new Date(r.date).getMonth() === month
                          )?.price || ""
                        }
                        onChange={(e) =>
                          handleRateChange(
                            roomIndex,
                            rateType,
                            new Date(2025, month).toISOString(),
                            e.target.value
                          )
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

      <div className="bulkupdate">
        <h2>Bulk Update</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Room Type:
            <select
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
          </label>
          <label>
            Rate Type:
            <select
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
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={bulkUpdate.startDate}
              onChange={(e) =>
                setBulkUpdate({ ...bulkUpdate, startDate: e.target.value })
              }
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={bulkUpdate.endDate}
              onChange={(e) =>
                setBulkUpdate({ ...bulkUpdate, endDate: e.target.value })
              }
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={bulkUpdate.price}
              onChange={(e) =>
                setBulkUpdate({ ...bulkUpdate, price: e.target.value })
              }
            />
          </label>
          <button type="button" onClick={handleBulkUpdate}>
            Apply Bulk Update
          </button>
        </form>
      </div>

      <button className="save-btn" onClick={saveRates}>
        Save Changes
      </button>
    </div>
  );
};

export default RatesPage;
