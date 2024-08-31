import { configureStore } from "@reduxjs/toolkit";
import categorySlices from "./slices/categorySlices";
import productSlices from "./slices/productSlices";
import pageActionSlice from "./slices/pageActionSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer : {
        category : categorySlices,
        product : productSlices,
        pageAction : pageActionSlice,
        cart : cartSlice
    }
})
