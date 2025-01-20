import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { RecoilRoot } from "recoil";
import MainPage from "./PropertyManager/Ppages/MainPage";
import Dashboard from "./PropertyManager/Ppages/DashBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
