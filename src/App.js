import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Profile from "./components/Profile/Profile"
import NavBar from "./components/NavBar/NavBar"

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>

        </div >
    )
}

export default App;
