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
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.log("token is missing");
        return;
      }
      try {
        const response = await fetch(
          "http://localhost:3000/api/booking/gettotalofallthebooking",
          {
            method: "GET",
            headers: {
              Authorization: `access_token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("data = ", data);
        setArrival(data.arri);
        setInhouse(data.inh);
        setDeparture(data.depa);
        setBookingRoom(data.book);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchdata();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow-lg rounded-2xl animate__animated animate__fadeInDown">
        {[
           {
            label: 'Total Booking',
            value: bookingroom,
            from: 'from-[#667EEA]',
            to: 'to-[#764BA2]',
            text: 'text-white'
          },
          {
            label: 'Total Arrival',
            value: arrival,
            from: 'from-[#43CEA2]',
            to: 'to-[#185A9D]',
            text: 'text-white'
          },
          {
            label: 'Total Departure',
            value: departure,
            from: 'from-[#F7971E]',
            to: 'to-[#FFD200]',
            text: 'text-black'
          },
          {
            label: 'Total Inhouse',
            value: inhouse,
            from: 'from-[#FC466B]',
            to: 'to-[#3F5EFB]',
            text: 'text-white'
          }
        ].map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${item.from} ${item.to} text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105`}
          >
            <h1 className="text-lg font-semibold mb-2 tracking-wide">
              {item.label}
            </h1>
            <p className="text-4xl font-extrabold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8 p-6 bg-white rounded-2xl shadow-xl animate__animated animate__fadeInUp font-[500]">

  <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] p-6 rounded-2xl shadow-lg space-y-10">
    <div className="text-2xl font-bold border-b pb-3 text-gray-800 tracking-wide">
      Notifications
    </div>

    {[1, 2, 3].map((_, section) => (
      <div
        key={section}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {[
          <LuCircleDollarSign />,
          <FaCalendar />,
          <FaClipboardCheck />,
          <FaBed />,
          <LuSmartphone />,
          <AiFillMessage />,
          <FaRegCreditCard />,
          <AiOutlineLike />,
          <FaFileAlt />,
        ]
          .slice(section * 3, section * 3 + 3)
          .map((Icon, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-all"
            >
              <div className="text-3xl bg-gradient-to-tr from-[#667eea] to-[#764ba2] text-white p-3 rounded-xl">
                {Icon}
              </div>
              <div>
                <p className="text-xl font-bold text-gray-700">0</p>
                <p className="text-base text-gray-500">Some detail</p>
              </div>
            </div>
          ))}
      </div>
    ))}
  </div>


  <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-6 rounded-2xl shadow-lg space-y-8">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Activity Feed</h2>
      <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
        <option value="">Select Option</option>
        <option value="all">All Activities</option>
        <option value="recent">Recent Activities</option>
      </select>
    </div>

    <div className="overflow-y-scroll h-64 bg-white rounded-xl p-5 shadow-inner space-y-6">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex justify-between items-center border-b pb-3"
        >
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Guest John has arrived
            </p>
            <p className="text-sm text-gray-500">2h ago</p>
          </div>
          <button className="bg-gradient-to-tr from-green-500 to-green-700 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all">
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
