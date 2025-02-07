import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/DashBoard";
import AddPages from "../pages/AddPages";
import Bookings from "../pages/Bookings";
import RatesInventory from "../pages/RatesInventory";
import ChannelHome from "../ChannelHome";

export const ChannelRoutes = () => {
  return (
    <Routes>
      <Route path="/channel" element={<ChannelHome />}>
      <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addpages" element={<AddPages />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="inventory" element={<RatesInventory />} />
      </Route>
    </Routes>
  );
};
