import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

function ChannelHome() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ChannelHome;




