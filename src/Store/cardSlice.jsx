import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name : 'cart',
    initialState: {
        cart: [],        
    },
    reducers: {
        add: (state, action)=>{
            state.cart.push(action.payload)
        },
        remove: (state, action)=>{
          state.cart =  state.cart.filter((item)=>item.id !== action.payload)
        }
    }
})

export const {add, remove} = CardSlice.actions

export default CardSlice.reducer