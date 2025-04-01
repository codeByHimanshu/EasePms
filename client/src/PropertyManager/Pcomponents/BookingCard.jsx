import React from 'react';
import { 
  FaUser, 
  FaCalendarAlt, 
  FaBed, 
  FaTag, 
  FaDollarSign, 
  FaUserFriends,
  FaCalendarCheck,
  FaHotel
} from 'react-icons/fa';

const BookingCard = ({ booking }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg mb-4 bg-white">
      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2">
        <FaUser /> {booking.name}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
        <p className="text-gray-700 flex items-center gap-2">
          <FaCalendarCheck /> Year: {booking.year}
        </p>
        
        <p className="text-gray-700 flex items-center gap-2">
          <FaUserFriends /> Guests: {booking.nameofguest}
        </p>

        <p className="text-gray-700 flex items-center gap-2">
          <FaCalendarAlt /> Check-in: {booking.checkindate}
        </p>

        <p className="text-gray-700 flex items-center gap-2">
          <FaCalendarAlt /> Check-out: {booking.checkoutdate}
        </p>

        <p className="text-gray-700 flex items-center gap-2">
          <FaBed /> Room: {booking.roomnumber}
        </p>

        <p className="text-gray-700 flex items-center gap-2">
          <FaTag /> Rate Type: {booking.typeofroom}
        </p>

        <p className="text-gray-700 flex items-center gap-2">
          <FaDollarSign /> Total: {booking.totalamount}
        </p>

        <p className="text-gray-700 flex items-center gap-2">
          <FaDollarSign /> Paid: {booking.paid}
        </p>

        <p className="text-gray-700 flex items-center gap-2">
          <FaDollarSign /> Balance: {booking.balance}
        </p>
      </div>
    </div>
  );
};

export default BookingCard;