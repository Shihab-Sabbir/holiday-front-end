import React from 'react'
import { Button, TextField } from "@mui/material";

export default function Signup() {
  return (
    <div className="py-5 h-[300px]">
        <form action="" className="flex flex-col gap-4">
        <TextField required name="name" label="Name" type="text" />
        <TextField required name="email" label="Email" type="email" />
        <TextField required name="password" label="Password" type="password" />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "var(--color-primary) !important", color: "white" ,paddingY:'15px'}}
        >
          Sign up
        </Button>
      </form>
    </div>
  )
}
