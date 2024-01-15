import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import bookSlice from "./features/bookSlice";
import searchBookSlice from "./features/searchBookSlice";
export const store  = configureStore({
    reducer: {
        cart:cartSlice,
        book: bookSlice,
        searchBook: searchBookSlice,
    },
})
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>

