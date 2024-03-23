import React from "react";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Register/Register";
import Malebrand from "./Components/Pages/Malebrand/Malebrand";
import CartDetails from './Components/Pages/CartDetails/CartDetails';

import { Routes, Route, Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Welcome from "./Components/Pages/Practises/Welcome";
import Products from "./Components/Pages/AdminPanel/Products";
import Summary from "./Components/Pages/AdminPanel/Summary";
import CreateProduct from "./Components/Pages/AdminPanel/CreateProduct";
import AddProduct from "./Components/Pages/AdminPanel/AddProduct";
import UpdateProduct from "./Components/Pages/AdminPanel/UpdateProduct";
import Panel from "./Components/Pages/AdminPanel/Panel";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Malebrand" element={<Malebrand />} />
        <Route path="/CartDetails" element={<CartDetails />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Performing the nested routing for the admin panel. */}
        <Route path="/dashboard" element={<Panel />}>
          <Route path="Updateproduct/:ProductID" element={<UpdateProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="products" element={<Products />} >
            <Route path="create-product" element={<CreateProduct />} />


          </Route>
          <Route path="summary" element={<Summary />} />

        </Route>
      </Routes>
      <Toaster />
    </div>


  );
}

export default App;
