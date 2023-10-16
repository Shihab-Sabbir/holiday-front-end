"use client";

import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ThemeRegistry from "./ThemeRegistry";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
