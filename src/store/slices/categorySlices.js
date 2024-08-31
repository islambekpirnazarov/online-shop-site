import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    categories : [],
    isCategoryLoad : false,
    isCategoryError : null
}

export const fetchCategoryData = createAsyncThunk(
    "category/fetchCategoryData",
    async(url) => {
        const res = await axios.get(url)
        return res.data
    }
)

const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers : {},
    extraReducers : (builder) =>  {
        builder.addCase(fetchCategoryData.pending, (state) => {
            state.isCategoryLoad = true
        }).addCase(fetchCategoryData.fulfilled, (state, action) => {
            state.isCategoryLoad = false,
            state.categories = action.payload
        }).addCase(fetchCategoryData.rejected, (state, action)  => {
            state.isCategoryLoad = false,
            state.isCategoryError = action.error
        })
    }
})

export const {} = categorySlice.actions

export default categorySlice.reducer