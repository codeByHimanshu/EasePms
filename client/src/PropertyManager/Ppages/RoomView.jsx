import React, { useEffect, useState } from "react";

const RoomView = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    try {
      const fetchRooms = async () => {
        const response = await "http://localhost:3000/api/room/getrooms";
        if (!response.ok) {
          throw new error("failed fetching rooms");
        }
        const roomsData = await response.json();
        setRooms(roomsData)
      };
    } catch (error) {
        console.log(error);
        
    }
  },[]);

  const handleAssign = (roomId) => {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId
        ? { ...room, assignedTo: room.assignedTo ? null : "Assigned" }
        : room
    );
    setRooms(updatedRooms);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="room-container m-4 p-4 border border-gray-300 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="room-content relative z-10">
            <h3 className="room-number text-lg font-semibold mb-2">
              {room.name}
            </h3>
            <div className="room-details opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="mb-2">
                Type:
                <select
                  className="ml-2 p-1 border border-gray-300 rounded"
                  value={room.type}
                  onChange={(e) => {
                    const updatedRooms = rooms.map((r) =>
                      r.id === room.id ? { ...r, type: e.target.value } : r
                    );
                    setRooms(updatedRooms);
                  }}
                >
                  <option value="">Select Type</option>
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </p>
              <p className="mb-2">
                Price:
                <input
                  className="ml-2 p-1 border border-gray-300 rounded"
                  type="number"
                  value={room.price}
                  onChange={(e) => {
                    const updatedRooms = rooms.map((r) =>
                      r.id === room.id ? { ...r, price: e.target.value } : r
                    );
                    setRooms(updatedRooms);
                  }}
                />
              </p>
              <p className="mb-2">
                Status: {room.assignedTo || "Not Assigned"}
              </p>
              <button
                className={`px-4 py-2 rounded ${
                  room.assignedTo
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
                onClick={() => handleAssign(room.id)}
              >
                {room.assignedTo ? "Unassign" : "Assign"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomView;
