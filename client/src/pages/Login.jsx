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
      });
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
<div className="relative h-screen w-full overflow-hidden flex">
  <div className="w-3/4 h-full bg-gradient-to-br from-blue-500 to-blue-300 text-white flex items-center justify-around z-10 clip-left">
    <div className="text-center px-10 animate__animated animate__fadeInLeft">
      <h1 className="text-5xl font-bold mb-4">InnSync</h1>
      <p className="text-2xl">India's First Multiple Hotel Management Software</p>
    </div>
      <div className="ml-10">
        {" "}
      </div>
  </div>
  <div className="w-2/3 h-full flex items-center left-0 justify-center bg-white z-20">
    <div className="w-full sm:w-96 px-10 py-10 animate__animated animate__fadeInRight">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Admin Login</h1>
      <p className="text-gray-500 mb-6">Access your dashboard</p>

      <form onSubmit={handleLogin} className="w-full">
        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
          Password  
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</div>

  );
}
export default Login;
