import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const rootApi = createApi({
  baseQuery: baseQuery as BaseQueryFn<
    string | FetchArgs,
    unknown
  >,
  tagTypes: [],
  endpoints: () => ({}),
});
