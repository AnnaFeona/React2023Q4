import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Beer } from '../../model';
import { HYDRATE } from 'next-redux-wrapper';

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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.searchValue = action.payload.search.searchValue;
      state.searchResult = action.payload.search.searchResult;
    },
  },
});

export const { setSearchValue, setSearchResult, setIsLoading } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
