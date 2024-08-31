import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
    subTotal : 0,
    total : 0,
    estimatedTax : 50,
    estimatedShipping : 29
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex === -1) {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
            } else {
                state.cartItems[itemIndex].cartQuantity += 1
            }
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
        },
        decreaseQuantity : (state, action) => {
            const decreaseItem = state.cartItems.find(item => item.id === action.payload) 
            if(decreaseItem.cartQuantity > 1) {
                decreaseItem.cartQuantity -= 1
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== decreaseItem.id)
            }
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
        },
        increaseQuantity : (state, action) => {
            const increaseItem = state.cartItems.find(item => item.id === action.payload)
            increaseItem.cartQuantity += 1
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
        },
        removeCartItem : (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
        },
        getTotals : (state) => {
            const totalSum = state.cartItems?.reduce((accumulator, item) => {
                return accumulator + (item.price * item.cartQuantity)
            }, 0)
            state.subTotal = totalSum
            state.total = state.subTotal + state.estimatedTax + state.estimatedShipping
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, decreaseQuantity, increaseQuantity, removeCartItem, getTotals } = cartSlice.actions

export default cartSlice.reducer