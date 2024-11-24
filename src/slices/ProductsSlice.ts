import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { cupTimeProductsFetch } from "../utils/fetchers";

// Define a type for the slice state
interface CounterState {
    value: any;
    loading: "idle" | "pending" | "succeeded" | "failed";
}

// Define the initial state using that type
const initialState: CounterState = {
    value: null,
    loading: "idle",
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (category: string, _) => {
        const response = await cupTimeProductsFetch(
            `/api/products/${category}`,
        );
        return response;
    },
);

const productsSlice = createSlice({
    name: "products",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.value = action.payload;
            state.loading = "succeeded";
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = "failed";
        });
    },
});

export const selectProducts = (state: RootState) => state.products.value;

export default productsSlice.reducer;
