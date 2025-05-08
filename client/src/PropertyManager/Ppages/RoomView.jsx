import React, { useEffect, useState } from "react";

const RoomView = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const token = localStorage.getItem('access_token'); 
  
        const response = await fetch("http://localhost:3000/api/room/getrooms", {
          method: 'GET', 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed fetching rooms");
        }
  
        const roomsData = await response.json();
        console.log("Fetched room data:", JSON.stringify(roomsData, null, 2));
  
        setRooms(roomsData.rooms);
      } catch (error) {
        console.error("Error in fetching rooms:", error);
      }
    };
  
    fetchRooms();
  }, []);
  
  console.log("type of the rooms from the roomview =",)
  return (
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 bg-gray-100 h-auto">
  {rooms.map((room) => (
    <div
      key={room._id}
      className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Room {room.roomnumber}
      </h3>
      <p className="text-sm text-gray-500 mb-4">{room.roomname[0]}</p>

      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <span className="font-medium text-gray-600">Status:</span>{" "}
          <span
            className={`font-semibold ${
              room.isavailable ? "text-green-600" : "text-red-500"
            }`}
          >
            {room.isavailable ? "Available" : "Not Available"}
          </span>
        </p>

        <p>
          <span className="font-medium text-gray-600">Price:</span> ₹
          {room.pricepernight}
        </p>

        <p>
          <span className="font-medium text-gray-600">Type:</span>{" "}
          {room.roomtype}
        </p>
      </div>
    </div>
  ))}
</div>



  );
};

export default RoomView;
