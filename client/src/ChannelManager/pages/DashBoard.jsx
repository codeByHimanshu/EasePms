import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Aditi Sinha", guests: 2, nights: 1, room: "Standard", voucher: "1526812565/1", adr: 1688.7 },
    { id: 2, name: "Vipin Trivedi", guests: 1, nights: 1, room: "Twin", voucher: "0140855249/1", adr: 1822.5 },
    { id: 3, name: "Neshanth Pranav", guests: 2, nights: 1, room: "Deluxe", voucher: "NH25061383211084/2", adr: 3400.0 },
    { id: 4, name: "Neshanth Pranav", guests: 3, nights: 1, room: "Deluxe", voucher: "NH25061383211084/1", adr: 4100.0 }
  ]);

  return (
    <>
    <Navbar />
  
    </>
  );
};

export default Dashboard;
