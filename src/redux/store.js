import { configureStore } from '@reduxjs/toolkit'
import cart from './Slices/CartSlice'

export const store = configureStore({
    reducer: {
        cart,
    },
})