"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "../ui/Form";
import FormInput from "../ui/FormInput";
import { Button, Stack } from "@mui/material";
import SocialLogin from "./SocialLogin";
import { useLoginUserMutation } from "@/redux/api/auth/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function SigninTest() {
  const [signIn, {error}] = useLoginUserMutation();
  const onSubmit = async (values: signInFileds) => {
    const response = await signIn(values)
  }

  useEffect(()=>{
    console.log({error})
    if(error && 'data' in error){
      toast.error(error?.data?.message || "Something went wrong")
    }
  }, [error])

  return <div>
    <Form submitHandler={onSubmit} resolver={zodResolver(signInschema)}>
      <Stack spacing={2} sx={{py:"10px"}}>
        <FormInput<signInFileds> name="email" label="Email"/>
        <FormInput<signInFileds> name="password" type="password" label="Password"/>
        <Button type="submit" variant="contained" size="large"> Sign in </Button>
      </Stack>
    </Form>
    <SocialLogin/>
  </div>;
}

export const signInschema = z.object({
  email: z
    .string()
    .email("Please provide a valid email"),
  password: z.string().min(1, "Password is reuired"),
});

type signInFileds =  z.infer<typeof signInschema>
