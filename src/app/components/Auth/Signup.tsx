import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import { useSignUpMutation } from '@/redux/api/auth/authApi';
import { ISignupUser } from '@/redux/api/auth/type';

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

  const handleInputChange = (e) => {
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

  const handleSubmit = (e) => {
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
    <div className="py-5 min-h-[300px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          {!!error?.data && <p className='text-red-600 py-3'>{error?.data.errorMessages[0].message}</p>}
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
      </form>
    </div>
  );
}
