import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './cardSlice.jsx'
import CategorySlice from './CategorySlice.jsx'
import SearchSlice from './SearchSlice.jsx'


const store = configureStore({
    reducer: {
        cart: CardReducer, 
        category :CategorySlice,
        search : SearchSlice,
    }
})

export default store