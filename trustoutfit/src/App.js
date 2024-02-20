import React from "react";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
