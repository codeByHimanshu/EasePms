
import { LuCircleDollarSign } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Dashboard() {
  const [arrival, setArrival] = useState(null);
  const [inhouse, setInhouse] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [bookingroom, setBookingRoom] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      const token= localStorage.getItem("access_token");
      if(!token){
        console.log("token is missing");
        return;
      }
      try {
        const response = await fetch('http://localhost:3000/api/booking/gettotalofallthebooking',{
          method:'GET',
          headers:{
            "Authorization":`access_token ${token}`,
            "Content-Type":"application/json"
          }
        });
        const data = await response.json();
        console.log("data = ", data);
        setArrival(data.arri);
        setInhouse(data.inh);
        setDeparture(data.depa);
        setBookingRoom(data.book)
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchdata();
  }, [])
  return (
    <>
  
  <div className="flex flex-wrap justify-between gap-4 p-4 bg-white shadow-md rounded-xl animate__animated animate__fadeInDown">
    <div className="flex-1 min-w-[150px] bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-8 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-sm font-semibold">Total Booking</h1>
      <p className="text-2xl font-bold">{bookingroom}</p>
    </div>
    <div className="flex-1 min-w-[150px] bg-gradient-to-r from-red-400 to-red-600 text-black p-8 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-sm font-semibold">Total Arrival</h1>
      <p className="text-2xl font-bold">{arrival}</p>
    </div>
    <div className="flex-1 min-w-[150px] bg-gradient-to-r from-yellow-600 to-yellow-800 text-black p-8 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-sm font-semibold">Total Departure</h1>
      <p className="text-2xl font-bold">{departure}</p>
    </div>
    <div className="flex-1 min-w-[150px] bg-gradient-to-r from-gray-900 to-gray-700 text-black p-8 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-sm font-semibold">Total Inhouse</h1>
      <p className="text-2xl font-bold">{inhouse}</p>
    </div>
  </div>

  <div className="flex flex-col lg:flex-row gap-6 mt-6 p-4 bg-white rounded-xl shadow-md animate__animated animate__fadeInUp">
    

    <div className="w-full lg:w-1/2 bg-red-50 p-6 rounded-xl shadow space-y-8">
      <div className="text-lg font-semibold border-b pb-2">Notifications</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <LuCircleDollarSign />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <FaCalendar />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <FaClipboardCheck />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <FaBed />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <LuSmartphone />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <AiFillMessage />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <FaRegCreditCard />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <AiOutlineLike />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-2xl bg-gray-200 p-2 rounded-xl text-gray-700">
            <FaFileAlt />
          </div>
          <div>
            <p className="font-medium text-gray-700">0</p>
            <p className="text-sm text-gray-500">some text</p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full lg:w-1/2 bg-green-50 p-6 rounded-xl shadow space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Activity Feed</h2>
        <select className="border border-gray-300 rounded-md p-1">
          <option value="">Select Option</option>
          <option value="all">All Activities</option>
          <option value="recent">Recent Activities</option>
        </select>
      </div>

      <div className="overflow-y-scroll h-64 bg-white rounded-md p-4 shadow-inner space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 font-medium">some text here</p>
              <p className="text-xs text-gray-500">2h ago</p>
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-all">
              Arrived
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
</>

  );
}
export default Dashboard;
