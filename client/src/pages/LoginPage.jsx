import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { adminEmail} from '../states/state';
function LoginPage() {
const email = useRecoilValue(adminEmail); // Get admin username from Recoil state
console.log(email + "emaaillllll");

  return (
    <div className="flex h-screen">
      {/* Left Section: Admin Information */}
      <div className="w-2/5 bg-white flex flex-col justify-center items-center shadow-lg px-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome Back</h1>
        <p className="text-lg text-gray-600 mb-8">
          Logged in as : <span className="text-blue-500 font-semibold">{email}</span>
        </p>
        <p className="text-gray-500 text-sm">Please choose your desired action below:</p>
      </div>

      {/* Right Section: Action Buttons */}
      <div className="w-3/5 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex flex-col justify-center items-start px-16">
        <h1 className="text-5xl font-bold mb-6">Admin Dashboard</h1>
        <p className="text-lg mb-8">
          Manage your hotel operations seamlessly. Choose a module to proceed.
        </p>
        <div className="flex flex-col space-y-6 w-full">
          <button
            className="w-full bg-white text-blue-700 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            onClick={() => alert('Accessing Property Manager...')}
          >
            Access Property Manager
          </button>
          <button
            className="w-full bg-white text-blue-700 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            onClick={() => alert('Accessing Channel Manager...')}
          >
            Access Channel Manager
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
