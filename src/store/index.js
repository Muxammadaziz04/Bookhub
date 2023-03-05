import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducers } from "./cart";


const rootReducer = combineReducers({
    cart: cartReducers,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})