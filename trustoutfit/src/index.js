import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
// import Dashboard from './Components/Pages/Panel/Dashboard';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Register from './Components/Pages/Register/Register';
import Malebrand from './Components/Pages/Malebrand/Malebrand';

//Importing the provider and store for the App components.
import { Provider } from 'react-redux';
// import { store } from './redux/app/store';
import { productsFetch } from './redux/features/productslice';
// import { productsAPI } from './redux/features/productsAPI';

import { configureStore } from "@reduxjs/toolkit";
// import Cartslice, { productsFetch } from "../features/Cartslice";
import { productsAPI } from './redux/features/productsAPI';
import Cartslice from './redux/features/productslice';
import addcartReducer, { getTotals } from './redux/features/cartslice';
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export const store = configureStore({
  reducer:{
      allcart: Cartslice,
      cart: addcartReducer,
      [productsAPI.reducerPath]: productsAPI.reducer,


  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(productsAPI.middleware)
  }

});

store.dispatch(productsFetch());
store.dispatch(getTotals());




root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
