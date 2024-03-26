import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

//Creating the empty array.
const initialState = {
    carts: [],
    status: null,
    error: null

};

//using the asynthunk .
export const productsFetch = createAsyncThunk(
    //This is the action type.
    "cartslice/productsFetch",
    //This is the function type.
    async () => {

        const response = await axios.get("http://localhost:8081/CartProducts")
        return response?.data

    }
)

//Creating the slice for the cart.
const Cartslice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // addToCart: (state, action) =>{

        //     const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id );


        //     if(IteamIndex >= 0){

        //         state.carts[IteamIndex].quantity += 1

        //     } else{
        //         const temp= {...action.payload, quantity: 1}


        //         state.carts = [...state.carts,  temp]
        //     }


        // },


        // removeToCart: (state, action) =>{
        //     const data = state.carts.filter((ele)=> ele.id !== action.payload);
        //     state.carts = data;

        // },


        // removeSingleIteams: (state, action) =>{
        //     const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id );

        //     if(state.carts[IteamIndex_dec].quantity >= 1){
        //         state.carts[IteamIndex_dec].quantity  -= 1
        //     }




        // },


        // emptyCartIteam:(state,action) =>{
        //     state.carts = []

        // }




    },
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.carts = action.payload;
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "rejected";
                
            });
    }


});
// export const {addToCart, removeToCart, removeSingleIteams, emptyCartIteam}= Cartslice.actions;

//Exporting the reducers.
export default Cartslice.reducer;
