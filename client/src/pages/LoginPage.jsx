import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { adminEmail } from '../states/state';
import { FaUserShield, FaHotel, FaNetworkWired } from 'react-icons/fa';

function LoginPage() {
  const navigate = useNavigate();
  const email = useRecoilValue(adminEmail);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="flex h-screen font-[Poppins]">
      {/* Left Section */}
      <div className="w-4/5 bg-white flex flex-col justify-center items-center shadow-2xl px-12 py-8 rounded-r-3xl">
        <FaUserShield className="text-indigo-600 text-6xl mb-6 drop-shadow" />
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">Welcome Back</h1>
        {username ? (
          <>
            <p className="text-xl text-gray-700 mb-3 font-medium">
              Logged in as: <span className="text-indigo-500 font-semibold">{username}</span>
            </p>
            <p className="text-gray-500 text-base mb-4">Please choose your desired action:</p>
          </>
        ) : (
          <p className="text-red-500 text-lg">You are not logged in.</p>
        )}
      </div>

      {/* Right Section */}
      <div className="w-3/5 bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex flex-col justify-center items-start px-20 py-16 rounded-l-3xl shadow-xl">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Admin Dashboard</h1>
        <p className="text-lg mb-10 font-light tracking-wide max-w-md leading-relaxed">
          Manage your hotel operations seamlessly. Choose a module to proceed.
        </p>

        {token ? (
          <div className="flex flex-col space-y-6 w-full">
            <button
              className="flex items-center gap-3 bg-white text-indigo-700 py-3 px-6 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
              onClick={() => navigate('/mainpage')}
            >
              <FaHotel className="text-2xl" />
              Access Property Manager
            </button>
            <button
              className="flex items-center gap-3 bg-white text-indigo-700 py-3 px-6 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
              onClick={() => navigate('/channel')}
            >
              <FaNetworkWired className="text-2xl" />
              Access Channel Manager
            </button>
          </div>
        ) : (
          <p className="text-white mt-6 text-lg">Please login to access the dashboard.</p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
