// bookSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks: {
            thumbnail: string;
        }
    };
    selfLink: string;

}

interface BookState {
    books: Book[];
    isLoading: boolean; 
}

const initialState: BookState = {
    books: [],
    isLoading: true,
};

export const fetchBooks = createAsyncThunk("fetchBooks", async (searchKeyword:string|undefined="child") => {
    try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API}q=${searchKeyword}&maxResults=9&key=${process.env.NEXT_PUBLIC_API_KEY}`);
        return result.data.items;
    } catch (error) {
        console.log(error);
    }
});


const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload;
        },
    },
    // Apiden get işlemi bittikten sonra state güncellenir.
    extraReducers:(builder)=> {
            builder.addCase(fetchBooks.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.books = action.payload
            })
    },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
