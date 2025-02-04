import React from "react";
import { Routes, Route } from "react-router-dom";
import ChannelHome from "../ChannelHome";
import Dashboard from "../pages/DashBoard"
import AddPages from "../pages/AddPages";

export const ChannelRoutes = () => {
    return (
        <Routes>
            <Route path="/channel" element={<ChannelHome />}>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="addpages" element={<AddPages/>}/>
            </Route>
        </Routes>
    );

}