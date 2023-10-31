import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useLoginUserMutation } from "@/redux/api/auth/authApi";
import { setAuthData } from "@/redux/services/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import SocialLogin from "./SocialLogin";

export default function Signin() {
  const [loginUser, { data, isLoading, isSuccess, error }] =
    useLoginUserMutation();

  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

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
    // Create a user object with the same structure as your login request
    const user = {
      email: formData.email,
      password: formData.password,
    };
    loginUser(user);
  };

  useEffect(() => {
    if (isSuccess) {
      if (data?.data && data.data?.accessToken) {
        dispatch(setAuthData(data.data));
      }
    }
  }, [isSuccess, data, dispatch]);

  return (
    <div className="py-5 h-[300px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          }}
        >
          {isLoading ? "Signing..." : "Sign in"}
        </Button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16"></div>
        <p className="px-3 text-sm">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16"></div>
      </div>
          <SocialLogin/>
    </div>
  );
}
