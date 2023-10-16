import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ILoginUserResponse,
  ILoginUser,
  IRefreshTokenResponse,
  ISignupUser,
} from "./type";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}auth`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginUserResponse, ILoginUser>({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
    }),
    adminSignIn: builder.mutation<ILoginUserResponse, ILoginUser>({
      query: (body) => ({
        url: "/admin-signin",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<void, ISignupUser>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
    refreshToken: builder.mutation<IRefreshTokenResponse, void>({
      query: () => ({
        url: "/refresh-token",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useAdminSignInMutation,
  useSignUpMutation,
  useRefreshTokenMutation,
} = authApi;
