import React from "react";
import { Routes, Route } from "react-router-dom";
import ChannelHome from "../ChannelHome";

export const ChannelRoutes = () => {
    return (
    <Routes>
        <Route path="/channel" element={<ChannelHome />} />
    </Routes>
    );

}