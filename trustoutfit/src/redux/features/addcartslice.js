import { createSlice } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import { toast } from "react-toastify";

const initialState ={
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const addcartslice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addTocart(state, action){
            const itemIndex= state.cartItems.findIndex(item => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[itemIndex].name} cart quantity.`, {
                    position: "bottom-left",
                })

            } else{

                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name}  Added a new product to cart.`, {
                    position: "bottom-left",
                })
            }

            //Storing in the localstorage.
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems) );
        }
    }
})

export const {addTocart} = addcartslice.actions;

export default addcartslice.reducer;