
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState ={
    items: Item[];
}

type Item ={
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    } as CartState,
    reducers: {
        addToCart(state, action: PayloadAction<Item>) {
            state.items.push(action.payload);
        },
        removeFromCart(state, action: PayloadAction<{ id: number }>) {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        addQuantity(state, action: PayloadAction<{ id: number }>) {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
        },
        reduceQuantity(state, action: PayloadAction<{ id: number }>) {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
        }
    },
});

export default cartSlice.reducer
export const { addToCart, removeFromCart,addQuantity,reduceQuantity } = cartSlice.actions