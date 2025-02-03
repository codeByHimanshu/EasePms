import React from "react";
import { Routes, Route } from "react-router-dom";
import ChannelHome from "../ChannelHome";
import Navbar from "../component/Navbar";

export const ChannelRoutes = () => {
    return (
    <Routes>       
        <Route path="/channel" element={<ChannelHome />} />
    </Routes>
    );

}