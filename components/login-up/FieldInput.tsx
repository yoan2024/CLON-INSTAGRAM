"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Path } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

import React from "react";

interface typesAutorizados<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: "email" | "password" | "text";
  control: Control<T>;
}
const FielInput = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type,
}: typesAutorizados<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className="item-input-sign-up"
              placeholder={placeholder}
              {...field}
              type={type}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FielInput;
