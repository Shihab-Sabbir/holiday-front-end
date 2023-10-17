'use client'

import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import { useSignUpMutation } from '@/redux/api/auth/authApi';
import { ISignupUser } from '@/redux/api/auth/type';
import Link from 'next/link';

export default function Signup() {
  const [signUp, { data, isLoading, isSuccess, error }] = useSignUpMutation();

  const initialFormData = {
    name: {
      firstName: "",
      lastName: "",
    },
    email: "",
    phone: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      setFormData({
        ...formData,
        name: {
          ...formData.name,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Create a user object with the same structure as IUser
    const user: ISignupUser = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      password: formData.password
    };
    signUp(user);
  };

  console.log({ data, isLoading, isSuccess, error });

  return (
    <div className="h-screen w-screen grid place-content-center">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5 h-fit w-[400px] shadow-lg p-4">
        <TextField
          required
          name="firstName"
          label="First Name"
          type="text"
          value={formData.name.firstName}
          onChange={handleInputChange}
        />
        <TextField
          required
          name="lastName"
          label="Last Name"
          type="text"
          value={formData.name.lastName}
          onChange={handleInputChange}
        />
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
          name="phone"
          label="Phone"
          type="tel"
          value={formData.phone}
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
        <div>
          {/* {!!error?.data && <p className='text-red-600 py-3'>{error?.data.errorMessages[0]?.message}</p>} */}
        </div>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "var(--color-primary) !important",
            color: "white",
            paddingY: '15px'
          }}
        >
          Sign up
        </Button>
        <p className="pt-4">Do not have any account ? Please <Link href='/auth/signin' className="text-primary">Signin</Link></p>
      </form>
    </div>
  );
}
