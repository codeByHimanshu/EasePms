import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { RecoilRoot } from "recoil";
import MainPage from "./PropertyManager/Ppages/MainPage";
import Dashboard from "./PropertyManager/Ppages/DashBoard";
import Reservations from "./PropertyManager/Ppages/Reservations";
import AddReservation from "./PropertyManager/Ppages/AddReservation";
// import QuickReservation from "./PropertyManager/Pcomponents/QuickReservations";

function App() {
  

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="addreservation" element={<AddReservation />} />
            {/* <Route path="quickreservation" element={<QuickReservation />} /> */}
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
