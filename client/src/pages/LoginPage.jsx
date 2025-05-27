import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { adminEmail } from '../states/state';
import { FaUserShield, FaHotel, FaNetworkWired } from 'react-icons/fa';

function LoginPage() {
  const navigate = useNavigate();
  const email = useRecoilValue(adminEmail);
  const [isLoading, setIsLoading] = useState(true);
  const [hasProperty, setHasProperty] = useState(false);

  const username = localStorage.getItem('username');
  const token = localStorage.getItem('access_token');
  const hotelid = localStorage.getItem('hotelid');

useEffect(() => {
  if (!token) {
    navigate('/');
    return;
  }

  fetch('http://localhost:3000/api/property/getpropertywithhotelid', {
    headers: {
      Authorization: `access_token ${token}`,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      const propertyArray = Array.isArray(response.data) ? response.data : [];
      const match = propertyArray.some((property) => {
        const propHotelId = typeof property.hotelid === 'object' ? property.hotelid._id : property.hotelid;
        return String(propHotelId) === String(hotelid);
      });

      setHasProperty(match);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching property:', err);
      setHasProperty(false);
      setIsLoading(false);
    });
}, [token, hotelid, navigate]);

  return (
    <div className="flex bg-gradient-to-br from-blue-500 to-blue-300 h-screen font-[Poppins]">
    
      <div className="w-3/4 flex flex-col justify-center items-center px-12 py-8 clip-left2 bg-white">
        <FaUserShield className="text-blue-600 text-6xl mb-6 drop-shadow" />
        <h1 className="text-5xl font-extrabold text-blue-500 mb-4">Welcome Back</h1>
        {username ? (
          <>
            <p className="text-xl text-gray-700 mb-3 font-medium">
              Logged in as: <span className="text-blue-500 font-semibold">{username}</span>
            </p>
            <p className="text-gray-500 text-base mb-4">Please choose your desired action:</p>
          </>
        ) : (
          <p className="text-red-500 text-lg">You are not logged in.</p>
        )}
      </div>

   
      <div className="w-3/5 text-white flex flex-col justify-center items-start px-20 py-16">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Admin Dashboard</h1>
        <p className="text-lg mb-10 font-light tracking-wide max-w-md leading-relaxed">
          Manage your hotel operations seamlessly. Choose a module to proceed.
        </p>

        {token ? (
          isLoading ? (
            <p className="text-white mt-6 text-lg">Loading dashboard...</p>
          ) : hasProperty ? (
            <div className="flex flex-col space-y-6 w-full">
              <button
                className="flex items-center gap-3 bg-white text-blue-500 py-3 px-6 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                onClick={() => navigate('/mainpage')}
              >
                <FaHotel className="text-2xl" />
                Access Property Manager
              </button>
              <button
                className="flex items-center gap-3 bg-white text-blue-500 py-3 px-6 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
                onClick={() => navigate('/channel')}
              >
                <FaNetworkWired className="text-2xl" />
                Access Channel Manager
              </button>
            </div>
          ) : (
            <button
              className="mt-4 bg-white text-blue-500 py-3 px-6 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
              onClick={() => navigate('/create-property')}
            >
              + Create Your Property
            </button>
          )
        ) : (
          <p className="text-white mt-6 text-lg">Please login to access the dashboard.</p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
