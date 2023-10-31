"use client";
import { TextField, TextFieldVariants, makeStyles } from "@mui/material";
import { ReactNode } from "react";
import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
interface IInput<T> {
  name: keyof T;
  type?: string;
  size?: "medium" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  label?: string;
  variant?: TextFieldVariants;
  defaultValue?:string;
}

// const defaultValue = "";


const FormInput = <T extends unknown> ({
    name,
    type="text",
    size = "medium",
    id,
    defaultValue="",
    validation,
    label,
    variant = "outlined",
  }: IInput<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log({errors})

  return (
    <>
      <Controller
        control={control}
        defaultValue={defaultValue}
        rules={validation}
        name={name as string}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              id={id}
              type={type}
              label={label}
              variant={variant}
              style={{ borderRadius: '30px' }}
              fullWidth
              size={size}
              error={!!errors[name as string]}
              helperText={errors[name as string]?.message? errors[name as string]?.message as ReactNode : ""}
            />
          )
        }}
      />
    </>
  );
};

export default FormInput;