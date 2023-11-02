"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import {   } from "@mui/material";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./emotionCache";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xs: true;
  }
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#008cff",
    },
  },
  components:{
    MuiPaper:{
      styleOverrides:{
        elevation:{
          boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }
      }
    },
    MuiButton:{
      variants: [
        {
          props: { size: 'xs' },
          style: {
            fontSize: "10px", minWidth:"min-content", height:"24px", borderRadius:"4px"
          },
        },
        {
            props:{variant:"gradient"},
            style:{
                cursor: "pointer", backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",

            }
        }, 
        {
            props:{variant:"contained",},
            style:{
                backgroundColor: "#008cff",
                "&:hover": {
                    backgroundColor: "#017ee5",
                  }
            }
        }
      ],
    }
  }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}