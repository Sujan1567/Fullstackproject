import React from "react";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
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
