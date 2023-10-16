import { combineReducers } from "@reduxjs/toolkit";
import { rootApi } from "./api/rootApi";
import searchReducer from "./services/Search/SearchSlice";
import authReducer from "./services/auth/authSlice";

export const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  search: searchReducer,
  auth: authReducer,
});
