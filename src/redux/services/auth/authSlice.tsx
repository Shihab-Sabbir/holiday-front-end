'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  refreshToken?: string;
  user: {
    firstName: string;
    lastName: string;
    phone_number: string;
    email: string;
    role: string;
    password: string;
  };
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: undefined,
  user: {
    firstName: "",
    lastName: "",
    phone_number: "",
    email: "",
    role: "",
    password: "",
  },
};

const loadState = () => {
  const storedState = localStorage.getItem("authState");
  if (storedState) {
    return JSON.parse(storedState);
  }
  return initialState;
};

const saveState = (state: AuthState) => {
  localStorage.setItem("authState", JSON.stringify(state));
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadState(),
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      saveState(state);
    },
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = undefined;
      state.user = initialState.user;
      localStorage.removeItem("authState");
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
