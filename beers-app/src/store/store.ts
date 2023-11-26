import { configureStore } from '@reduxjs/toolkit';
import { paginationReducer } from './slices/pagination.slice';
import { searchReducer } from './slices/search.slice';
import { beerApi } from '../services/beers';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
    [beerApi.reducerPath]: beerApi.reducer,
  },
  middleware: (getDefaltMiddleware) => getDefaltMiddleware().concat(beerApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
