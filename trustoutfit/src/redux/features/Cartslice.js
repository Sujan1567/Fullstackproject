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
            //Incresing the quantity of the products whether it is added or not.
            const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id );
            // console.log(IteamIndex);

            //Making the condition whether the product of the ceratin index is present or not.
            if(IteamIndex >= 0){
                //Increasing the qantity number.
                state.carts[IteamIndex].quantity += 1

            } else{
                const temp= {...action.payload, quantity: 1}

                //Using the state operation for storing the previous value and new value.
                state.carts = [...state.carts,  temp]
            }


        },

        //Remove the particular iteams.  
        removeToCart: (state, action) =>{
            const data = state.carts.filter((ele)=> ele.id !== action.payload);
            state.carts = data;

        },

        //Remove single items.
        removeSingleIteams: (state, action) =>{
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id );

            if(state.carts[IteamIndex_dec].quantity >= 1){
                state.carts[IteamIndex_dec].quantity  -= 1
            }




        },

        //Clearing all the cart.
        emptyCartIteam:(state,action) =>{
            state.carts = []

        }




    }


});
export const {addToCart, removeToCart, removeSingleIteams, emptyCartIteam}= Cartslice.actions;

//Exporting the reducers.
export default Cartslice.reducer;
