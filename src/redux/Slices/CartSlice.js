import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    items: [],
    totalPrice: 0,
    isAdd: false
}


export const CartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addItem(state, { payload }) {
            const findItem = state.items.find(obj => obj.id === payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },

        minusItem(state, { payload }) {
            const findItem = state.items.find(obj => obj.id === payload.id)
            if (findItem.count > 1) {
                findItem.count--
                state.totalPrice -= payload.price
            }
        },

        removeItem(state, { payload }) {
            state.items = state.items.filter(obj => obj.id !== payload.id)
            state.totalPrice -= payload.price * payload.count
        },
    }
})

export const { addItem, minusItem, removeItem, isAdded } = CartSlice.actions

export default CartSlice.reducer