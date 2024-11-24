import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsSlice from "../slices/ProductsSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
