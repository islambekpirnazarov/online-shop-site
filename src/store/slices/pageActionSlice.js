import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showMenu : false,
}

const pageActionSlice = createSlice({
    name : 'pageAction',
    initialState,
    reducers : {
        toggleMenu : (state) => {
            state.showMenu = state.showMenu ? false : true
        }
    }
})
export const {toggleMenu} = pageActionSlice.actions
export default pageActionSlice.reducer