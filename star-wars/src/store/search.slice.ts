import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Beer } from '../model';

interface SearchState {
  searchValue: string;
  searchResult: Beer[];
  isLoading: boolean;
}

const initialState: SearchState = {
  searchValue: '',
  searchResult: [],
  isLoading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<Beer[]>) => {
      state.searchResult = [...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchValue, setSearchResult, setIsLoading } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
