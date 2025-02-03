import React from "react";
import { Routes, Route } from "react-router-dom";
import ChannelHome from "../ChannelHome";
import Dashboard from "../pages/DashBoard";

export const ChannelRoutes = () => {
    return (
        <Routes>
            <Route path="/channel" element={<ChannelHome />}>
                
            </Route>
        </Routes>
    );

}