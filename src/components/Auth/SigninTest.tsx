import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "../ui/Form";
import FormInput from "../ui/FormInput";
import { Button, Stack } from "@mui/material";

export default function SigninTest() {
  const onSubmit = (values: signInFileds) => {
    console.log(values)
  }
  return <div>
    <Form submitHandler={onSubmit} resolver={zodResolver(signInschema)}>
      <Stack spacing={2}>
        <FormInput<signInFileds> name="email" label="Email" size="small"/>
        <FormInput<signInFileds> name="password" type="password" label="Password" size="small"/>
        <Button type="submit" variant="contained"> Sign in </Button>
      </Stack>
    </Form>
  </div>;
}

export const signInschema = z.object({
  email: z
    .string()
    .email("Please provide a valid email"),
  password: z.string().min(1, "Password is reuired"),
});

type signInFileds =  z.infer<typeof signInschema>
