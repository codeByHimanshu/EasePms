import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import LoginPage from "../../pages/LoginPage";
import MainPage from "./MainPage";
import Dashboard from "../Ppages/DashBoard";
import Reservations from "../Ppages/Reservations";
import AddReservation from "../Ppages/AddReservation";
import RatesPage from "../Ppages/RatesPage";
import Arrival from "../Ppages/Arrival";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/mainpage" element={<MainPage />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="reservations">
                    <Route path="arrival" element={<Arrival />} />
                    <Route index element={<Reservations />} />
                </Route>
                <Route path="addreservation" element={<AddReservation />} />
                <Route path="rates" element={<RatesPage />} />
            </Route>
        </Routes>
    );
};