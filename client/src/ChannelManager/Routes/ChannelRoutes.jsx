import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/DashBoard"
import AddPages from "../pages/AddPages";
import Bookings from "../pages/Bookings";

export const ChannelRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addpages" element={<AddPages />} />
            <Route path="/bookings" element={<Bookings/>}/>
        </Routes>
    );

}