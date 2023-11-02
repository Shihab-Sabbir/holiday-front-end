"use client";
import { configureStore } from "@reduxjs/toolkit";
import { rootApi } from "./api/rootApi";
import authSlice from "./features/auth/authSlice";
import SearchSlice from "./features/Search/SearchSlice";
import { authApi } from "./api/auth/authApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    search: SearchSlice,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});

const loadCheckAuth = async () => {
    await store.dispatch(authApi.endpoints.refreshToken.initiate())
} 

loadCheckAuth();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



