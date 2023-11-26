import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Beer } from '../../model';

interface SearchState {
  searchValue: string;
  searchResult: Beer[];
}

const initialState: SearchState = {
  searchValue: '',
  searchResult: [],
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
  },
});

export const { setSearchValue, setSearchResult } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
