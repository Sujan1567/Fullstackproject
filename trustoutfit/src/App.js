import React from "react";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Register/Register";
import Malebrand from "./Components/Pages/Malebrand/Malebrand";
import CartDetails from './Components/Pages/CartDetails/CartDetails';

import { Routes, Route, Navigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Welcome from "./Components/Pages/Practises/Welcome";
import Products from "./Components/Pages/AdminPanel/Products";
import Summary from "./Components/Pages/AdminPanel/Summary";
// import CreateProduct from "./Components/Pages/AdminPanel/CreateProduct";
import AddProduct from "./Components/Pages/AdminPanel/AddProduct";
import UpdateProduct from "./Components/Pages/AdminPanel/UpdateProduct";
import Panel from "./Components/Pages/AdminPanel/Panel";
import Cart from "./Components/Pages/Cart";
import Arrivals from "./Components/Pages/NewArrivals/Arrivals";
import NotFound from "./Components/Pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Malebrand" element={<Malebrand />} />
        <Route path="/CartDetails" element={<CartDetails />} />

        {/* <Route path="/CartDetails" element={<CartDetails />} /> */}
        
        {/* Newly make cart functionalities. */}
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Arrival" element={<Arrivals />} />
        {/* <Route path="/not-found" element={<NotFound />} /> */}


        <Route path="/welcome" element={<Welcome />} />
    {/* Performing the nested routing for the admin panel. */}
        <Route path="/dashboard" element={<Panel />}>
          <Route path="Updateproduct/:ProductID" element={<UpdateProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="products" element={<Products />}/>
            

          
          <Route path="summary" element={<Summary />} />

        </Route>
        {/* if there is not any page then showing the notfound page. */}

        <Route path="*" element={<NotFound />} />
       
      </Routes>
      <Toaster />
      <ToastContainer/>
    </div>


  );
}

export default App;
