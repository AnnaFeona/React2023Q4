import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../model/constants';
import { Beer } from '../model';
// import { updateSearchString } from '../utils';

export const beerApi = createApi({
  reducerPath: 'beersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getBeerByName: builder.query<Beer[], string>({
      query: (searcParams) => `${searcParams}`,
    }),
    getBerrById: builder.query<Beer[], string>({
      query: (id) => `/${id}`,
    }),
    getAllBeers: builder.query<Beer[], string>({
      query: (name) => `${name ? `?beer_name=${name}&per_page=80` : ''}`,
    }),
  }),
});

export const { useGetBeerByNameQuery, useGetBerrByIdQuery, useGetAllBeersQuery } = beerApi;
