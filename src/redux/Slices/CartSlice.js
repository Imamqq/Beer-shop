import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    items: [],
}


export const CartSlice = createSlice({
    name: 'cart',
    initialState,
})

export const { } = CartSlice.actions

export default CartSlice.reducer