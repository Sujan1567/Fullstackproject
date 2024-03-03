import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "../features/Cartslice";

//Creating the Store.
export const store= configureStore({
    reducer:{
        allcart: Cartslice
    }

})