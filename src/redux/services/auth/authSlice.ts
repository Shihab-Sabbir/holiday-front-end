import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  user: {
    name: {
      firstName: string;
      lastName: string;
    };
    phone_number: string;
    email: string;
    role: string;
    password: string;
  };
}

const initialState: AuthState = {
  accessToken: "",
  user: {
    name: {
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
  if (typeof localStorage !== "undefined") {
    const storedState = localStorage.getItem("holiday-auth");
    if (storedState) {
      return JSON.parse(storedState);
    }
  }
  return initialState;
};

const saveState = (state: AuthState) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("holiday-auth", JSON.stringify(state));
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadState(),
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      console.log({ action });
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      saveState(state);
    },
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = undefined;
      state.user = initialState.user;
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("holiday-auth");
      }
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
