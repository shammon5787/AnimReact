import { createSlice } from "@reduxjs/toolkit";
import { SiQt } from "react-icons/si";

const CardSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        add: (state, action) => {
            const existingitem = state.cart.find((item) => item.id === action.payload.id);
            if (existingitem) {
               state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
            } else {
                state.cart.push(action.payload)
            }
        },
        remove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        inrementQty : (state, action) =>{
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
        },
        decrementQty : (state, action) =>{
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item);
        },
    }
})

export const { add, remove, decrementQty, inrementQty } = CardSlice.actions

export default CardSlice.reducer