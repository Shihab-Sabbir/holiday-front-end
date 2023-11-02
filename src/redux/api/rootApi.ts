import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { ILoginUserResponse } from '@/types/auth.types';
import { logout, setAuthData } from '../features/auth/authSlice';
import { IApiReponse, ICustomErrorType } from '@/types/api.types';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    try {
      const refreshResult = await baseQuery(
        { url: '/auth/refresh-token', method: 'post' },
        api,
        extraOptions,
      );
      console.log({refreshResult})
      const authData = (refreshResult?.data as IApiReponse<ILoginUserResponse>).data; 
      if (authData) {
        api.dispatch(setAuthData(authData));
        // Retry the original query with the new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } catch (error) {
      api.dispatch(logout());
    }
  }

  return result;
};

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQueryWithReauth as BaseQueryFn<
    string | FetchArgs,
    unknown,
    ICustomErrorType
  >,
  tagTypes: ["service"],
  endpoints: () => ({}),
});