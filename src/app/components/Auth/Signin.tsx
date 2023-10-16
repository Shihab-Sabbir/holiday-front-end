import { Button, TextField } from "@mui/material";
import React from "react";

export default function Signin() {
  return (
    <div className="py-5 h-[300px]">
      <form action="" className="flex flex-col gap-4">
        <TextField required name="email" label="Email" type="email" />
        <TextField required name="password" label="Password" type="password" />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "var(--color-primary) !important", color: "white" ,paddingY:'15px',marginTop:'72px'}}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
