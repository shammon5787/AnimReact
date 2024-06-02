import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './cardSlice.jsx'


const store = configureStore({
    reducer: {
        cart: CardReducer
    }
})

export default store