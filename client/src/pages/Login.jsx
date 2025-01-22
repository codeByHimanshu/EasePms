import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { adminEmail } from "../states/state";

const dummyLogin = {
  email: "himanshu@pms.com",
  password: "12345",
};
function Login() {
  const [email, setEmail] = useRecoilState(adminEmail);
  const [password, setPassword] = useState("12345");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  setEmail(email);
  console.log(email);
  console.log(adminEmail);

  const handleLogin = () => {
    if (email === dummyLogin.email && password === dummyLogin.password) {
      setEmail(email);
      navigate("/LoginPage");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-white flex flex-col justify-center items-center shadow-lg px-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Admin Login</h1>
        <p className="text-gray-600 mb-8">Access your PMS dashboard</p>
        <form type="submit" action="">
          <div className="w-full max-w-md">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="w-3/5 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex flex-col justify-center items-start px-16 bg-cover bg-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Hotel PMS</h1>
        <p className="text-lg mb-8">
          Streamline your hotel management with our powerful PMS. Simplify
          operations, enhance guest satisfaction, and boost your business
          performance.
        </p>
        <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
        <div className="flex space-x-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Partner 1"
            className="w-20 h-20 rounded-full shadow-lg"
          />
          <img
            src="https://via.placeholder.com/80"
            alt="Partner 2"
            className="w-20 h-20 rounded-full shadow-lg"
          />
          <img
            src="https://via.placeholder.com/80"
            alt="Partner 3"
            className="w-20 h-20 rounded-full shadow-lg"
          />
          <img
            src="https://via.placeholder.com/80"
            alt="Partner 4"
            className="w-20 h-20 rounded-full shadow-lg"
          />
          <img
            src="https://via.placeholder.com/80"
            alt="Partner 5"
            className="w-20 h-20 rounded-full shadow-lg"
          />
          <img
            src="https://via.placeholder.com/80"
            alt="Partner 6"
            className="w-20 h-20 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
