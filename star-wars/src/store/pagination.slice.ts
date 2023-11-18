import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_LIMIT, INITIAL_PAGE } from '../model/constants';
import { Beer } from '../model';

interface PaginationState {
  page: number;
  itemsPerPage: number;
  searchValue: string;
  searchResult: Beer[];
}

const initialState: PaginationState = {
  page: INITIAL_PAGE,
  itemsPerPage: INITIAL_LIMIT,
  searchValue: '',
  searchResult: [],
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<Beer[]>) => {
      state.searchResult = [...action.payload];
    },
  },
});

export const { increment, decrement, setItemsPerPage, setPage, setSearchValue, setSearchResult } =
  paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
