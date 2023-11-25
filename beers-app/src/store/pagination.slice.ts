import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_LIMIT, INITIAL_PAGE } from '../model/constants';

interface PaginationState {
  page: number;
  itemsPerPage: number;
}

const initialState: PaginationState = {
  page: INITIAL_PAGE,
  itemsPerPage: INITIAL_LIMIT,
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
  },
});

export const { increment, decrement, setItemsPerPage, setPage } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
