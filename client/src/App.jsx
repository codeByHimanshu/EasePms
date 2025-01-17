import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import {RecoilRoot} from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

    <RecoilRoot>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
