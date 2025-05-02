import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { adminEmail} from '../states/state';
import {  useNavigate } from 'react-router-dom';
function LoginPage() {
const email = useRecoilValue(adminEmail);
 const navigate=useNavigate();
  return (
    <div className="flex h-screen bg-gray-100">

    <div 
      className="w-2/5 bg-white flex flex-col justify-center items-center shadow-2xl px-10 rounded-r-3xl transition-all duration-500 transform translate-x-0 opacity-100"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-600 drop-shadow-md">Welcome Back</h1>
      <p className="text-lg text-gray-700 mb-8 font-medium">
        Logged in as: <span className="text-indigo-500 font-semibold">{email}</span>
      </p>
      <p className="text-gray-500 text-sm">Please choose your desired action below:</p>
    </div>
    <div 
      className="w-3/5 bg-gradient-to-br from-indigo-500 to-purple-700 text-white flex flex-col justify-center items-start px-20 rounded-l-3xl shadow-xl transition-all duration-500 transform translate-x-0 opacity-100"
    >
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Admin Dashboard</h1>
      <p className="text-lg mb-8 font-light tracking-wide">
        Manage your hotel operations seamlessly. Choose a module to proceed.
      </p>
      <div className="flex flex-col space-y-6 w-full">
        <button
          className="w-full bg-white text-indigo-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
          onClick={() => navigate('/mainpage')}
        >
          Access Property Manager
        </button>
        <button
          className="w-full bg-white text-indigo-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
          onClick={() => navigate('/channel')}
        >
          Access Channel Manager
        </button>
      </div>
    </div>
  </div>
  );
}
export default LoginPage;
