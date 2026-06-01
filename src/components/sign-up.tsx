import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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

import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations";

export function SignupForm({ className,...props}: React.ComponentProps<"form">) {

  const { mutateAsync: createUserAccount, isLoading: isCreatingUser } = useCreateUserAccount();

  const { mutateAsync: signInAccount, isLoading: isSigningIn } = useSignInAccount;

  const form = useForm<z.infer<typeof SignupValidation>>({
  resolver: zodResolver(SignupValidation),
  defaultValues: {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    },
    });

  async function onSubmit(values: z.infer<typeof SignupValidation>){
    const { confirmPassword, ...userData} = values;

    const newUser = await createUserAccount(userData); // adicionei isso para verificar a senha

    if(!newUser){
      return toast.warning("Falha ao criar conta! Tente novamente")
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    if(!session){
      return toast.warning("Falha ao fazer Login! Tente novamente")
    }

  }
  return (
    <form {...props} onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-[#c3bbc9]">Crie sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira as informações abaixo
          </p>
        </div>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="name">Nome</FieldLabel>
          <Input id="name" type="text" placeholder="Carlos" required className="placeholder:text-[#7a7a8c]
           text-[#c3bbc9]" {...form.register("name")}/>
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
          )}
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="name">Nome de Usuário</FieldLabel>
          <Input id="name" type="text" placeholder="Cavaleiro Carlos" required className="placeholder:text-[#7a7a8c]
           text-[#c3bbc9]" {...form.register("username")}/>
          {form.formState.errors.username && (
            <p className="text-red-500 text-sm">{form.formState.errors.username.message}</p>
          )}
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="email@exemplo.com" required className="placeholder:text-[#7a7a8c]
           text-[#c3bbc9]" {...form.register("email")}/>
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
          )}
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="password">Senha</FieldLabel>
          <Input id="password" type="password" required className="placeholder:text-[#7a7a8c]
           text-[#c3bbc9]" {...form.register("password")}/>
          {form.formState.errors.password && (
            <p className="text-red-500 text-sm">{form.formState.errors.password.message}</p>
          )}
          <FieldDescription>
            A senha precisa ter pelo menos 8 caracteres.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="confirm-password">Confirme a Senha</FieldLabel>
          <Input id="confirm-password" type="password" required className="placeholder:text-[#7a7a8c]
           text-[#c3bbc9]" {...form.register("confirmPassword")}/>
          {form.formState.errors.confirmPassword && (
            <p className="text-red-500 text-sm">{form.formState.errors.confirmPassword.message}</p>
          )}
        </Field>
        <Field>
          <Button type="submit" className="bg-[#0051cb]">
            {isCreatingUser ? (
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
