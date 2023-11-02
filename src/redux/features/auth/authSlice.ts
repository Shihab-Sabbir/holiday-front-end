import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  user: {
    name: {
      firstName: string;
      lastName: string;
    };
    phone_number: string;
    email: string;
    role: string;
    password: string;
  } | null;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user=null;
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export const selectAuth = (state:RootState) => state.auth;
export default authSlice.reducer;
