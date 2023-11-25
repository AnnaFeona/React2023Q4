import { configureStore } from '@reduxjs/toolkit';
import { paginationReducer } from './slices/pagination.slice';
import { searchReducer } from './slices/search.slice';
import { beerApi } from '../services/beers';
import { createWrapper } from 'next-redux-wrapper';

export const store = () =>
  configureStore({
    reducer: {
      pagination: paginationReducer,
      search: searchReducer,
      [beerApi.reducerPath]: beerApi.reducer,
    },
    middleware: (getDefaltMiddleware) => getDefaltMiddleware().concat(beerApi.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(store, { debug: true });
