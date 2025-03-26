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
      const response = await fetch("https://innsync-1.onrender.com/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("login successful", data);
        localStorage.setItem("access_token", data.token);
        navigate("/mainpage");
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
    <div className="flex h-screen">
      <div className="w-2/5 bg-white flex flex-col justify-center items-center shadow-lg px-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Admin Login</h1>
        <p className="text-gray-600 mb-8">Access your PMS dashboard</p>
        <form onSubmit={handleLogin}> 
          <div className="w-full max-w-md">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
