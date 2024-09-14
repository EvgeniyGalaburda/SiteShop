import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./caterogies/categorisSlice";
import productSlice from "./products/productSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice, 
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    }, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})