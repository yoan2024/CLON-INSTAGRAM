"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Controller, Path, FieldValues, Control } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

interface typesAutorizados<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T>;
}

export const CheckedInput = <T extends FieldValues>({
  control,
  label,
  name,
}: typesAutorizados<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="layout-checked-label-home">
          <FormControl>
            <Checkbox
              id="checked"
              checked={field.value}
              onCheckedChange={field.onChange}
              className="item-checked-home"
            />
          </FormControl>
          <div>
            <FormLabel htmlFor="checked" className="item-label-home">
              {label}
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default CheckedInput;
