import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootApi } from "../rootApi";
import { ILoginUser, ILoginUserResponse, IRefreshTokenResponse, ISignupUser } from "@/types/auth.types";
import { logout, setAuthData } from "@/redux/features/auth/authSlice";
import { IApiReponse } from "@/types/api.types";

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<IApiReponse<ILoginUserResponse>, ILoginUser>({
      query: (body) => ({
        url: "/auth/signin",
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(setAuthData(response?.data?.data))
        } catch {}
      },
    }),
    adminSignIn: builder.mutation<IApiReponse<ILoginUserResponse>, ILoginUser>({
      query: (body) => ({
        url: "/auth/admin-signin",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<void, ISignupUser>({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
    logOut: builder.mutation<IApiReponse<null>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      onQueryStarted(_arg, { dispatch }) {
        dispatch(logout())
      }
    }),
    refreshToken: builder.query<IApiReponse<IRefreshTokenResponse>, void>({
      query: () => "/auth/refresh-token",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(setAuthData(response?.data?.data))
        } catch {}
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useAdminSignInMutation,
  useSignUpMutation,
  useRefreshTokenQuery, 
  useLogOutMutation
} = authApi;
