"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "../ui/button";
import FielInput from "../CampoInput";
import CheckedInput from "../CheckedInput";
import { Console } from "inspector";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().optional().default(false).optional(),
});

const Formulario = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rememberMe: false,
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <div className="layout-form">
      <Form {...form}>
        <form
          className="layout-items-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FielInput
            name="email"
            control={form.control}
            placeholder="Correo electronico o numero de telefono"
            type="email"
          />

          <FielInput
            name="password"
            control={form.control}
            placeholder="Contraseña"
            type="password"
          />
          <div className="layout-form-botton-parrafo-home">
            <Button type="submit" className="item-form-botton-home">
              Iniciar sesion
            </Button>
            <p className="item-form-parrafo-home">¿Olvidaste tu contraseña?</p>
          </div>

          <CheckedInput
            name="rememberMe"
            label="No cerrar sesion"
            control={form.control}
          />
        </form>
      </Form>
    </div>
  );
};

export default Formulario;
