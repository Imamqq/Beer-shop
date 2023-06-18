import { configureStore } from '@reduxjs/toolkit'
import cart from './Slices/CartSlice'
import api from './Slices/ApiSlice'

export const store = configureStore({
    reducer: {
        cart,
        api,
    },
})