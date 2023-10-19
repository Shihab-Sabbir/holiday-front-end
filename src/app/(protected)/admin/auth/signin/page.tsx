'use client'

import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useAdminSignInMutation } from "@/redux/api/auth/authApi";
import { setAuthData } from "@/redux/services/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function AdminSignin() {
  const [adminSignIn, { data, isLoading, isSuccess, error }] =
  useAdminSignInMutation();

  const dispatch = useAppDispatch();

  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const admin = {
      email: formData.email,
      password: formData.password,
    };
    adminSignIn(admin);
  };

  useEffect(() => {
    if (isSuccess) {
      if (data?.data && data.data?.accessToken) {
        dispatch(setAuthData(data.data));
      }
    }
  }, [isSuccess, data]);

  return (
    <div className="h-screen w-full grid place-content-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5 h-fit w-[400px] shadow-lg p-4">
        <TextField
          required
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "var(--color-primary) !important",
            color: "white",
            paddingY: "15px",
            marginTop: "72px",
          }}
        >
         {isLoading ? "Signing..." : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
