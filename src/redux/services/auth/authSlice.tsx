'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  refreshToken?: string;
  user: {
    name : {
      firstName: string;
      lastName: string;
    },
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
    name:{
      firstName: "",
      lastName: "",
    },
    phone_number: "",
    email: "",
    role: "",
    password: "",
  },
};

const loadState = () => {
  const storedState = localStorage.getItem("holiday-auth");
  if (storedState) {
    return JSON.parse(storedState);
  }
  return initialState;
};

const saveState = (state: AuthState) => {
  localStorage.setItem("holiday-auth", JSON.stringify(state));
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadState(),
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      console.log({action})
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      saveState(state);
    },
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = undefined;
      state.user = initialState.user;
      localStorage.removeItem("holiday-auth");
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
