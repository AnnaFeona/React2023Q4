import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../model/constants';
import { Beer } from '../model';
import { updateSearchString } from '../utils';

interface BeersArg {
  name?: string;
  page?: number;
  perPage?: number;
}

export const beerApi = createApi({
  reducerPath: 'beersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getBeerByName: builder.query<Beer[], BeersArg>({
      query: ({ name, page, perPage }) => `${updateSearchString(name, page, perPage)}`,
    }),
    getBerrById: builder.query<Beer[], string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetBeerByNameQuery, useGetBerrByIdQuery } = beerApi;
