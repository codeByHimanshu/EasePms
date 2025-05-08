import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import LoginPage from "../../pages/LoginPage";
import MainPage from "./MainPage";
import Dashboard from "../Ppages/DashBoard";
import Reservations from "../Ppages/Reservations";
import QuickReservation from "../Ppages/QuickReservation";
import RatesPage from "../Ppages/RatesPage";
import RoomView from "../Ppages/RoomView";
import StayView from "../Ppages/StayView";
import GuestStats from "../Ppages/GuestStats";
import CreateRoom from "../Ppages/CreateRoom";
import AddReservation from "../Ppages/AddReservation";
import ProtectedRoute from "../../ProtectedRoute";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route
                path="/mainpage"
                element={
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="gueststats" element={<GuestStats />} />
                <Route path="reservations">
                    <Route index element={<Reservations />} />
                </Route>
                <Route path="quick-reservation" element={<QuickReservation />} />
                <Route path="add-reservation" element={<AddReservation />} />
                <Route path="rates" element={<RatesPage />} />
                <Route path="roomview" element={<RoomView />} />
                <Route path="stayview" element={<StayView />} />
                <Route path="create-room" element={<CreateRoom />} />
            </Route>
        </Routes>
    );
};
