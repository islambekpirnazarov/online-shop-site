import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products : [],
    filteredProducts : [],
    favouriteProducts : localStorage.getItem('favourite') ? JSON.parse(localStorage.getItem('favourite')) : [],
    isProductLoad : false,
    isProductError : null
}


export const fetchProductData = createAsyncThunk(
    "product/fetchProductData",
    async(url) => {
        const res = await axios.get(url)
        return res.data
    }
)

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        filteredProductsData : (state, action) => {
            state.filteredProducts = action.payload
        },
        favouriteProductsData : (state, action) => {
            if(state.favouriteProducts.find(item => item.id == action.payload.id)) {
                state.favouriteProducts = state.favouriteProducts.filter(item => item.id !== action.payload.id)
            } else {
                state.favouriteProducts = [...state.favouriteProducts, action.payload]
            }
            localStorage.setItem('favourite', JSON.stringify(state.favouriteProducts))
        }
    },
    extraReducers : (builder) =>  {
        builder.addCase(fetchProductData.pending, (state) => {
            state.isProductLoad = true
        }).addCase(fetchProductData.fulfilled, (state, action) => {
            state.isProductLoad = false,
            state.products = action.payload
        }).addCase(fetchProductData.rejected, (state, action)  => {
            state.isProductLoad = false,
            state.isProductError = action.error
        })
    }
})

export const {filteredProductsData, favouriteProductsData} = productSlice.actions

export default productSlice.reducer