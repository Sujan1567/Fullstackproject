import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

//Creating the empty array.
const initialState = {
    carts: []

}

//Creating the slice for the cart.
const Cartslice = createSlice({
    name: "cartslice",
    initialState,
    reducers:{
        //add to cart
        addToCart: (state, action) =>{
            //Using the state operation for storing the previous value and new value.
            state.carts = [...state.carts, action.payload]

        }

    }


});
export const {addToCart}= Cartslice.actions;

//Exporting the reducers.
export default Cartslice.reducer;
