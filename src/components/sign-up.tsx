import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import{
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
}from "@/components/ui/field";

import Loader from "./shared/Loader";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupValidation } from "@/lib/validation";

export function SignupForm({ className,...props}: React.ComponentProps<"form">) {

  const isLoading = false;

  const form = useForm<z.infer<typeof SignupValidation>>({
  resolver: zodResolver(SignupValidation),
  defaultValues: {
    name: "",
    username: "",
    email: "",
    password: "",
      },
    });

  return (
    <form {...form}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-[#c3bbc9]">Crie sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira as informações abaixo
          </p>
        </div>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="name">Nome de Usuário</FieldLabel>
          <Input id="name" type="text" placeholder="Joseph Nobody" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="email@exemplo.com" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="password">Senha</FieldLabel>
          <Input id="password" type="password" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
          <FieldDescription>
            A senha precisa ter pelo menos 8 caracteres.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="confirm-password">Confirme a Senha</FieldLabel>
          <Input id="confirm-password" type="password" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
        </Field>
        <Field>
          <Button type="submit" className="bg-[#0051cb]">
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Carregando...
              </div>
            ): "Criar Conta"}
          </Button>
        </Field>
        <Field>
          <p className="text-[#c3bbc9] ml-auto text-sm underline-offset-4">
            Já possui uma conta?
            <Link to = "/sign-in" className="text-primary-500
            text-small-semibold ml-1">Fazer Login</Link>
          </p>
        </Field>
      </FieldGroup>
    </form>
  )
}
