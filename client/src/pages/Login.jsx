import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({ username, password }),
      });``
      const data = await response.json();

      if (response.ok) {
        console.log("login successful", data);
        localStorage.setItem("access_token", data.token);
        localStorage.setItem("hotelid", data.hotelid);
        localStorage.setItem("username", data.username);
        navigate("/loginpage");
      } else {
        console.log("Error:", data.message);
        setError(data.message || "invalid credentials");
      }
    } catch (e) {
      console.error("error :", e);
      setError("something went wrong ");
    }
  };
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 to-blue-300">
    
      <div className="w-full sm:w-2/5 bg-white flex flex-col justify-center items-center shadow-2xl rounded-xl px-10 py-10 m-4 animate__animated animate__fadeInDown">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-600 animate__animated animate__fadeInUp animate__delay-1s">
          Admin Login
        </h1>
        <p className="text-gray-500 text-lg mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          Access your PMS dashboard
        </p>

        <form onSubmit={handleLogin} className="w-full max-w-md animate__animated animate__fadeIn animate__delay-3s">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 transition-all duration-300 hover:shadow-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 transition-all duration-300 hover:shadow-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>

  );
}

export default Login;
