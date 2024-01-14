import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import bookSlice from "./features/bookSlice";
export const store  = configureStore({
    reducer: {
        cart:cartSlice,
        book: bookSlice
    },
})
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>

