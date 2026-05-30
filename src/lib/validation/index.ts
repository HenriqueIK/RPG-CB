import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres" }),
  username: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres" }),
  email: z.string().email().min(2, { message: "Email precisa ter pelo menos 2 caracteres" }),
  password: z.string().min(8, { message: "Senha precisa ter pelo menos 8 characteres" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, { // fazendo a checagem para ver se a senha é a mesma
  message: "Confirme a senha novamente",
  path: ["confirmPassword"],
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Senha precisa ter pelo menos 8 characteres" }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres" }),
  username: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres" }),
  email: z.string().email(),
  bio: z.string(),
});
