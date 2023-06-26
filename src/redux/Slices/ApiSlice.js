import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBeers = createAsyncThunk(
    "beers/fetchBeers",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:5173/db.json")
            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue
        }
    }
)

let initialState = {
    items: [],
    isLoading: true,
}

export const ApiSlice = createSlice({
    name: 'api',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBeers.pending, (state) => {
            // console.log("loading")
            state.isLoading = true
        })
        builder.addCase(fetchBeers.fulfilled, (state, { payload }) => {
            state.items = payload
            // console.log("fulfilled")
            state.isLoading = false
        })
        builder.addCase(fetchBeers.rejected, () => {
            console.log("Rejected")
        })
    }
})

export const { } = ApiSlice.actions

export const getBeers = (state) => state.api.items.beers
export const isLoading = (state) => state.api.isLoading

export default ApiSlice.reducer

// https://postimg.cc/gallery/5HYQnsC
// https://postimg.cc/gallery/hgZhf8Fяя