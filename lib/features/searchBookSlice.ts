// bookSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface SearchBook {
    id: string;
    volumeInfo: {
        title: string;
        subtitle: string;
        imageLinks: {
            thumbnail: string;
        }
    };
    selfLink: string;

}

interface BookState {
    searchBooks: SearchBook[];
    isLoading: boolean; 
}

const initialState: BookState = {
    searchBooks: [],
    isLoading: true,
};

export const fetchSearchBooks = createAsyncThunk("fetchSearchBooks", async (searchKeyword:string|undefined="child") => {
    try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API}q=${searchKeyword}&maxResults=5&key=${process.env.NEXT_PUBLIC_API_KEY}`);
        return result.data.items;
    } catch (error) {
        console.log(error);
    }
});


const searchBookSlice = createSlice({
    name: 'searchBook',
    initialState,
    reducers: {
        setSearchBooks: (state, action: PayloadAction<SearchBook[]>) => {
            state.searchBooks = action.payload;
        },
    },
    // Apiden get işlemi bittikten sonra state güncellenir.
    extraReducers:(builder)=> {
            builder.addCase(fetchSearchBooks.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.searchBooks = action.payload
            })
    },
});

export const { setSearchBooks } = searchBookSlice.actions;

export default searchBookSlice.reducer;
