import { ICustomErrorType } from "@/types/type";
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const rootApi = createApi({
  baseQuery: baseQuery as BaseQueryFn<
    string | FetchArgs,
    unknown,
    ICustomErrorType
  >,
  tagTypes: [],
  endpoints: () => ({}),
});
