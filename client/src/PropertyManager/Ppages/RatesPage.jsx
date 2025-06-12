import { useState } from "react";
import dayjs from "dayjs";

const roomTypes = ["Deluxe", "Standard", "Suite"];

const generateDates = (start, end) => { 
  const result = [];
  let current = dayjs(start);
  while (current.isBefore(end) || current.isSame(end)) {
    result.push(current.format("YYYY-MM-DD"));
    current = current.add(1, "day");
  }
  return result;
};

const initializeRates = (dates) => {
  const rates = {};
  dates.forEach((date) => {
    rates[date] = {};
    roomTypes.forEach((room) => {
      rates[date][room] = {
        EP: 3000,
        CP: 3500,
      };
    });
  });
  return rates;
};

const RatesPage = () => {
  const today = dayjs();
  const [startDate, setStartDate] = useState(today.format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(today.add(6, "day").format("YYYY-MM-DD"));
  const [dates, setDates] = useState(generateDates(startDate, endDate));
  const [rates, setRates] = useState(initializeRates(dates));
  const [bulkRate, setBulkRate] = useState({ EP: "", CP: "", roomType: roomTypes[0] });

  const handleDateChange = () => {
    const newDates = generateDates(startDate, endDate);
    setDates(newDates);
    setRates(initializeRates(newDates));
  };

  const handleChange = (date, room, field, value) => {
    setRates((prev) => ({
      ...prev,
      [date]: {
        ...prev[date],
        [room]: {
          ...prev[date][room],
          [field]: parseInt(value) || 0,
        },    m,    
      },
    }));
  };

  const handleBulkUpdate = () => {
    const { roomType, EP, CP } = bulkRate;
    setRates((prevRates) => {
      const updated = { ...prevRates };
      dates.forEach((date) => {
        updated[date][roomType].EP = parseInt(EP) || 0;
        updated[date][roomType].CP = parseInt(CP) || 0;
      });
      return updated;
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Rates Management</h2>

      <div className="mb-4 flex gap-2 items-center">
        <label className="text-sm">Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border px-2 py-1 rounded" />
        <label className="text-sm">End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border px-2 py-1 rounded" />
        <button onClick={handleDateChange} className="bg-blue-500 text-white px-3 py-1 rounded">Load</button>
      </div>

      <div className="mb-6 p-4 border rounded">
        <h3 className="font-semibold mb-2">Bulk Update Rates</h3>
        <div className="flex gap-4 items-center">
          <select value={bulkRate.roomType} onChange={(e) => setBulkRate({ ...bulkRate, roomType: e.target.value })} className="border px-2 py-1 rounded">
            {roomTypes.map((room) => <option key={room} value={room}>{room}</option>)}
          </select>
          <input type="number" placeholder="EP" value={bulkRate.EP} onChange={(e) => setBulkRate({ ...bulkRate, EP: e.target.value })} className="border px-2 py-1 rounded w-24" />
          <input type="number" placeholder="CP" value={bulkRate.CP} onChange={(e) => setBulkRate({ ...bulkRate, CP: e.target.value })} className="border px-2 py-1 rounded w-24" />
          <button onClick={handleBulkUpdate} className="bg-green-600 text-white px-4 py-1 rounded">Update</button>
        </div>
      </div>

      <div className="overflow-auto max-w-full">
        <table className="border-collapse border text-sm w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 bg-gray-200">Room Type</th>
              <th className="border p-2 bg-gray-200">Rate Type</th>
              {dates.map((date) => (
                <th key={date} className="border p-2">{dayjs(date).format("DD MMM")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roomTypes.map((room) =>
              ["EP", "CP"].map((rateType) => (
                <tr key={`${room}-${rateType}`}>
                  <td className="border p-2">{room}</td>
                  <td className="border p-2">{rateType}</td>
                  {dates.map((date) => (
                    <td key={`${date}-${room}-${rateType}`} className="border p-1">
                      <input
                        type="number"
                        value={rates[date][room][rateType]}
                        onChange={(e) => handleChange(date, room, rateType, e.target.value)}
                        className="w-20 text-center border rounded px-1"
                      />
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RatesPage;
