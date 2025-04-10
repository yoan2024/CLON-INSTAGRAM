"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FielInput from "./FieldInput";

const formSchema = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().optional().default(false).optional(),
});

const Formulario = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FielInput
          name="username"
          control={form.control}
          placeholder="Nombre"
          type="text"
        />
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
        <Button>Enviar</Button>
      </form>
    </Form>
  );
};

export default Formulario;
