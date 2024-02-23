import React from "react";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Register/Register";
import Dashboard from './Components/Pages/Panel/Dashboard';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>


  );
}

export default App;
